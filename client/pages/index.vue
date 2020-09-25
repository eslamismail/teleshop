<template>
  <div>
    <div class="container h-100">
      <div class="messaging">
        <div class="inbox_msg">
          <div class="inbox_people">
            <div class="headind_srch">
              <div class="recent_heading">
                <h4 v-if="user">
                  <img
                    style="border-radius: 50%; max-width: 11%"
                    :src="user.profile_picture_url"
                    alt
                  />
                  {{ user.full_name }}
                </h4>
              </div>
              <div class="srch_bar">
                <div class="stylish-input-group">
                  <add-user />
                </div>
              </div>
            </div>
            <div class="inbox_chat">
              <!-- single user  -->
              <chat-list
                v-for="(item, index) in rooms"
                :room="item"
                :key="index"
                @active="setActive"
                :active="room && room.id == item.id ? true : false"
              />
            </div>
          </div>
          <div class="mesgs">
            <div v-if="messages.length > 0">
              <div class="msg_history" id="msg_history">
                <incomming
                  v-for="(item, index) in messages"
                  :key="index"
                  :message="item"
                />
              </div>
            </div>
            <div
              class="msg_history align-items-center d-flex"
              v-else-if="messages.length == 0 && room != null"
            >
              <div class="col-12 text-center">
                <img
                  src="https://scontent.fcai20-2.fna.fbcdn.net/v/t1.0-9/25956_505071682877248_1469610775_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=GMrvtZ6vaMQAX9jxODH&_nc_ht=scontent.fcai20-2.fna&oh=7d6a1a623fc2127aab96d6a80ec9ac8d&oe=5F93421E"
                  alt=""
                />
              </div>
            </div>
            <div v-else class="msg_history align-items-center d-flex">
              <div class="col-12 text-center">
                <img
                  width="30%"
                  src="https://previews.123rf.com/images/get4net/get4net1812/get4net181200729/127169830-empty-inbox-tray.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="typing">{{ typing }}</div>
            <send-message :roomID="room.id" v-if="room" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import chatList from "../components/chatList";
import incomming from "../components/incommingMessage";
import sendMessage from "../components/sendMessage";
import AddUser from "../components/addUser";
const underscore = require("underscore");
const moment = require("moment");
export default {
  middleware: "auth",
  components: {
    chatList,
    incomming,
    sendMessage,
    AddUser,
  },
  data() {
    return {
      rooms: [],
      typing: "",
      messages: [],
      room: null,
      lastRoom: null,
    };
  },
  head() {
    return {
      link: [
        { href: "/css/chat.css", rel: "StyleSheet" },
        {
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",
          rel: "StyleSheet",
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.login.user;
    },
  },
  created() {
    Echo.private(`room-${this.user.id}`)
      .listen("NewRoom", (e) => {
        this.rooms.unshift(e.room);
      })
      .listen("RoomUpdated", (e) => {
        this.rooms.forEach((item) => {
          if (item.id == e.room.id) {
            item.message_send_at = e.room.message_send_at;
            item.last_message = e.room.last_message;
          }
        });
        this.rooms = underscore.sortBy(this.rooms, (item) => {
          return -moment(item.message_send_at).valueOf();
        });
      });
  },
  mounted() {
    this.getRooms();
  },
  methods: {
    scrollDown() {
      var objDiv = document.getElementById("msg_history");
      const x = setInterval(() => {
        if (objDiv) {
          objDiv.scrollTop = objDiv.scrollHeight;
          clearInterval(x);
        }
      }, 100);
    },
    setActive(id) {
      // let elements = document.getElementsByClassName("chat_list");
      if (this.room) {
        this.leavePrivate(this.room.id);
      }
      this.scrollDown();
      this.room = this.rooms.find((item) => item.id == id);
      this.selectedRoom = true;
      if (
        (this.messages.length > 0 &&
          this.messages[0].room_id == this.room.id) ||
        this.lastRoom == this.room.id
      ) {
        this.openSocket(id);
        return false;
      }
      this.getMessages(id);
      this.lastRoom = id;
      this.openSocket(id);
    },
    openSocket(id) {
      Echo.private(`chat-${id}`)
        .listenForWhisper("typing", (e) => {
          if (this.user.id != e.user.id) {
            this.typing = `${e.user.full_name} typing.....`;
            setTimeout(() => {
              this.typing = "";
            }, 3000);
          }
        })
        .listen("NewMessage", (e) => {
          this.messages.push(e.message);
          this.rooms = underscore.sortBy(this.rooms, (item) => {
            return -moment(item.message_send_at).valueOf();
          });
        });
    },
    leavePrivate(id) {
      Echo.leave(`chat-${id}`);
    },
    async getMessages(id) {
      try {
        let response = await axios.get(`/rooms/${id}`);
        this.messages = response.data.messages;
      } catch (error) {
        if (!error.response) {
          this.$notify({
            group: "foo",
            text: `No internet access`,
            type: "error",
          });
        } else if (error.response.status == 401) {
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
          $nuxt.$store.commit("login/logout", {});
        } else {
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
        }
      }
    },
    async getRooms() {
      try {
        let response = await axios.get("/rooms");
        this.rooms = underscore.sortBy(response.data.rooms, (item) => {
          return -moment(item.message_send_at).valueOf();
        });
      } catch (error) {
        console.log(error);
        if (!error.response) {
          this.$notify({
            group: "foo",
            text: `No internet access`,
            type: "error",
          });
        } else if (error.response.status == 401) {
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
          $nuxt.$store.commit("login/logout", {});
        } else {
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
        }
      }
    },
  },
};
</script>
