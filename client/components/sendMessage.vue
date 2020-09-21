<template>
  <div class="type_msg">
    <div class="input_msg_write">
      <input @keypress="typing" type="text" class="write_msg" placeholder="Type a message" />
      <button class="msg_send_btn" type="button">
        <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.login.user;
    },
  },
  methods: {
    typing() {
      Echo.private("chat").whisper("typing", {
        user: this.user,
      });
    },
  },
};
</script>
