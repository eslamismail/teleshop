<template>
  <div class="type_msg">
    <div class="input_msg_write">
      <input
        @keypress="typing"
        type="text"
        class="write_msg"
        placeholder="Type a message"
        id="message"
        @keydown.enter="sendMessage"
      />
      <button class="msg_send_btn" @click.prevent="sendMessage" type="button">
        <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
      </button>
      <error
        v-for="(item, index) in errors.message"
        :error="item"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import Error from "../components/public/error";
export default {
  components: { error },
  props: {
    roomID: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      errors: {
        message: [],
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.login.user;
    },
  },
  methods: {
    typing() {
      Echo.private(`chat-${this.roomID}`).whisper("typing", {
        user: this.user,
      });
    },
    async sendMessage() {
      let message = document.getElementById("message").value;
      try {
        await axios.post(`/rooms/${this.roomID}/message`, { message });
        document.getElementById("message").value = null;
        this.errors = {
          message: [],
        };
      } catch (error) {
        if (!error.response) {
          this.$notify({
            group: "foo",
            text: `No internet access`,
            type: "error",
          });
        } else if (error.response.status == 422) {
          this.errors = error.response.data.errors;
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
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
        } else if (error.response.status == 400) {
          let { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: message,
            type: "error",
          });
        } else {
          let { statusText } = error.response.data;
          this.$notify({
            group: "foo",
            text: statusText,
            type: "error",
          });
        }
      }
    },
  },
};
</script>
