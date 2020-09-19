<template>
  <div>
    <div>online</div>
    <p>{{user.first_name}} {{user.last_name}}</p>
    <p>{{message}}</p>
    <p>{{typing}}</p>
    <input type="text" @keydown="type()" @keyup.enter="sendmessage()" />
  </div>
</template>
<script>
export default {
  middleware: "auth",
  data() {
    return {
      message: "",
      typing: "",
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
  },
  methods: {
    sendmessage: async function () {
      let message = event.target.value;
      await axios.post("/sendMessage", { message: message });
    },
    type: function () {
      Echo.private("chat").whisper("typing", {
        user: this.user,
      });
    },
  },
};
</script>
