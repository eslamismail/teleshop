<template>
  <div
    :class="`chat_list ${active ? 'active_chat' : ''}`"
    @click.prevent="setActive()"
    :id="`chat_list_${room.id}`"
  >
    <div class="chat_people">
      <div class="chat_img">
        <img v-if="room.room_image" :src="room.room_image" style="border-radius: 50%" alt="sunil" />
      </div>
      <div class="chat_ib">
        <h5>
          {{ room.room_name }}
          <span class="chat_date">{{ created_at }}</span>
        </h5>
        <p>{{ room.last_message && room.last_message.length > 45 ? room.last_message.substr(0,45) +'.....' : room.last_message }}</p>
      </div>
    </div>
  </div>
</template>
<script>
const moment = require("moment");
export default {
  props: {
    room: {
      type: Object,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      created_at: null,
      interval: null,
    };
  },
  mounted() {
    this.solveDate();
  },
  updated() {
    this.solveDate();
  },
  methods: {
    solveDate() {
      this.interval = setInterval(() => {
        var now = moment(new Date());
        var end = moment(this.room.message_send_at);
        var duration = moment.duration(now.diff(end));
        var hours = duration.asHours();
        if (hours <= 1) {
          this.created_at =
            "About " + moment(this.room.message_send_at).fromNow();
        } else if (hours <= 24 * 7) {
          this.created_at = moment(this.room.message_send_at).calendar();
        } else {
          this.created_at = moment(this.room.message_send_at).format(
            "YYYY MMM DD | hh:mm:ss a"
          );
          clearInterval(this.interval);
        }
      }, 100);
    },
    setActive() {
      this.$emit("active", `${this.room.id}`);
    },
  },
};
</script>
