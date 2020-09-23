<template>
  <div>
    <div class="container pt-4">
      <h3 class="text-center">{{ user.full_name }}</h3>
      <div class="messaging">
        <div class="inbox_msg">
          <div class="inbox_people">
            <div class="headind_srch">
              <div class="recent_heading">
                <h4></h4>
              </div>
              <div class="srch_bar">
                <div class="stylish-input-group">
                  <input type="text" class="search-bar" placeholder="Search" />
                  <span class="input-group-addon">
                    <button type="button">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </span>
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
            <div v-else class="msg_history align-content-center d-flex">
              <div class="col-12 text-center">no message to show</div>
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
import outgoing from "../components/outgoing";
import sendMessage from "../components/sendMessage";

export default {
  middleware: "auth",
  components: {
    chatList,
    incomming,
    outgoing,
    sendMessage,
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
  mounted() {
    this.getRooms();
    let elements = document.getElementsByClassName("active_chat");
    const x = setInterval(() => {
      if (elements[0] && this.room == null) {
        for (let index = 0; index < elements.length; index++) {
          const element = elements[index];
          element.classList.remove("active_chat");
        }
        clearInterval(x);
      }
      setTimeout(() => {
        clearInterval(x);
      }, 5000);
    }, 100);
  },
  methods: {
    setActive(id) {
      let elements = document.getElementsByClassName("chat_list");
      if (this.room) {
        this.leavePrivate(this.room.id);
      }
      this.room = this.rooms.find((item) => item.id == id);
      this.selectedRoom = true;
      for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        element.classList.remove("active_chat");
      }
      let x = setInterval(() => {
        if (document.getElementById(`chat_list_${id}`)) {
          document
            .getElementById(`chat_list_${id}`)
            .classList.add("active_chat");
          clearInterval(x);
        }
      }, 100);
      if (
        (this.messages.length > 0 &&
          this.messages[0].room_id == this.room.id) ||
        this.lastRoom == this.room.id
      ) {
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
            this.typing = `${e.user.full_name} typing`;
            setTimeout(() => {
              this.typing = "";
            }, 3000);
          }
        })
        .listen("NewMessage", (e) => {
          this.messages.push(e.message);
          this.room.last_message = e.message.message;
          console.log(document.getElementById("msg_history").style.height);
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
        this.rooms = response.data.rooms;
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
  },
};
</script>
