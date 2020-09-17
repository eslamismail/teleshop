<template>
  <div>
    <div>online</div>
    <p>{{user.first_name}} {{user.last_name}}</p>
    <p>{{message}}</p>
    <p>{{typing}}</p>
    <input type="text" @keyup.enter="sendmessage()" />
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
  },
  methods: {
    sendmessage: async function () {
      let message = event.target.value;
      await axios.post("/sendMessage", { message: message });
    },
  },
};
</script>
