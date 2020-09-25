<template>
  <div class="incoming_msg" v-if="user && message.sender_id != user.id">
    <div class="incoming_msg_img" v-if="message.sender">
      <img :src="message.sender.profile_picture_url" alt="sunil" style="border-radius: 50%" />
    </div>
    <div class="received_msg">
      <div class="received_withd_msg">
        <p>{{ message.message }}</p>
        <img v-for="item,key in message.images_url" :src="item" :key="index"/>
        <span class="time_date">{{ created_at }}</span>
      </div>
    </div>
  </div>
  <div v-else class="outgoing_msg">
    <div class="sent_msg">
      <p>{{ message.message }}</p>
      <span class="time_date">{{ created_at }}</span>
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
  data() {
    return {
      created_at: null,
      interval: null,
    };
  },

  beforeMount() {
    this.solveDate();
  },
  mounted() {
    var objDiv = document.getElementById("msg_history");
    const x = setInterval(() => {
      if (objDiv && this.created_at) {
        objDiv.scrollTop = objDiv.scrollHeight;
        clearInterval(x);
      }
    }, 100);
  },
  methods: {
    async solveDate() {
      this.interval = setInterval(() => {
        var now = moment(new Date());
        var end = moment(this.message.created_at);
        var duration = moment.duration(now.diff(end));
        var hours = duration.asHours();
        if (hours <= 1) {
          this.created_at =
            "About " + moment(this.message.created_at).fromNow();
        } else if (hours <= 7 * 24) {
          this.created_at = moment(this.message.created_at).calendar();
        } else {
          this.created_at = moment(this.message.created_at).format(
            "YYYY MMM DD | hh:mm:ss a"
          );
          clearInterval(this.interval);
        }
      }, 100);
    },
  },
  computed: {
    user() {
      return this.$store.state.login.user;
    },
  },
};
</script>
