<template>
  <div
    :class="`chat_list ${active ? 'active_chat' : ''}`"
    @click.prevent="setActive()"
    :id="`chat_list_${room.id}`"
  >
    <div class="chat_people">
      <div class="chat_img">
        <img
          v-if="room.room_image"
          :src="room.room_image"
          style="border-radius: 50%"
          alt="sunil"
        />
      </div>
      <div class="chat_ib">
        <h5>
          {{ room.room_name }}
          <span class="chat_date">{{ solveDate(room.message_send_at) }}</span>
        </h5>
        <p>
          {{ room.last_message }}
        </p>
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
  methods: {
    solveDate(data) {
      return moment(data).format("ll");
    },
    setActive() {
      this.$emit("active", `${this.room.id}`);
    },
  },
};
</script>
