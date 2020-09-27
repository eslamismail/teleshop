<template>
  <div
    class="d-none d-sm-flex flex-column col-12 col-sm-7 col-md-8 p-0 h-100"
    id="message-area"
  >
    <div v-if="!activeRoom.id" class="w-100 h-100 overlay d-flex"></div>

    <!-- Navbar -->
    <sender-nav />

    <!-- Messages -->
    <div class="d-flex flex-column" id="messages">
      <single-message
        v-for="(item, index) in messages"
        :message="item"
        :key="index"
      />
    </div>
    <send-message />
    <!-- Input -->
  </div>
</template>
<script>
import senderNav from "./senderNav";
import singleMessage from "./singleMessage";
import sendMessage from "./sendMessage";
export default {
  components: {
    senderNav,
    singleMessage,
    sendMessage,
  },
  computed: {
    messages() {
      return this.$store.state.chat.messages;
    },
    activeRoom() {
      return this.$store.state.chat.activeRoom;
    },
    mounted() {},
  },
};
</script>
