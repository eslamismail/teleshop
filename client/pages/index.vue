<template>
  <div>
    <div class="container pt-4">
      <h3 class="text-center">Messaging</h3>
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
              <chat-list v-for="(item, index) in users" :user="item" :key="index" />
            </div>
          </div>
          <div class="mesgs">
            <div class="msg_history">
              <incomming />
              <outgoing />
            </div>
            <send-message />
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
      users: [],
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
    Echo.private("test").listen("Test", (e) => {
      this.message = e.data.message;
    });

    Echo.private("chat").listenForWhisper("typing", (e) => {
      if (this.user.id != e.user.id) {
        this.typing = `${e.user.first_name} ${e.user.last_name} typing`;
        setTimeout(() => {
          this.typing = "";
        }, 3000);
      }
    });

    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        let response = await axios.get("/users");
        this.users = response.data.users;
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
<style scoped>
</style>