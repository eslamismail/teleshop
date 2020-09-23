<template>
  <div class="incoming_msg" v-if="user && message.sender_id != user.id">
    <div class="incoming_msg_img">
      <img
        :src="message.sender.profile_picture_url"
        alt="sunil"
        style="border-radius: 50%"
      />
    </div>
    <div class="received_msg">
      <div class="received_withd_msg">
        <p>{{ message.message }}</p>
        <span class="time_date">{{ solveDate(message.created_at) }}</span>
      </div>
    </div>
  </div>
  <div v-else class="outgoing_msg">
    <div class="sent_msg">
      <p>{{ message.message }}</p>
      <span class="time_date">{{ solveDate(message.created_at) }}</span>
    </div>
  </div>
</template>
<script>
const moment = require("moment");
export default {
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  methods: {
    solveDate(data) {
      return moment(data).format("MMM DD | hh:mm a");
    },
  },
  computed: {
    user() {
      return this.$store.state.login.user;
    },
  },
};
</script>