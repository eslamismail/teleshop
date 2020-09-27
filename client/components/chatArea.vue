<template>
  <div class="row" id="chat-list" style="overflow: auto">
    <single-user
      v-for="(item, index) in rooms"
      :key="index"
      :room="item"
      @setActive="setActive"
    />
  </div>
</template>
<script>
import singleUser from "./singleUser";
const moment = require("moment");
export default {
  components: {
    singleUser,
  },
  computed: {
    rooms() {
      return this.$store.state.chat.rooms;
    },
    activeRoom() {
      return this.$store.state.chat.activeRoom;
    },
  },
  methods: {
    solveDate(date) {
      return moment(date).calendar();
    },
    async setActive(room) {
      if (room.id == this.activeRoom.id) {
        return false;
      }
      try {
        let response = await axios.get(`/rooms/${room.id}`);
        this.leaveSocket();
        const { messages } = response.data;
        this.$store.commit("chat/setMessages", messages);
        this.$store.commit("chat/setActive", room);
        this.openSocket();
      } catch (error) {
        console.log(error);
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
    openSocket() {
      Echo.private(`chat-${this.activeRoom.id}`).listen("NewMessage", (e) => {
        this.$store.commit("chat/addMessage", e.message);
      });
    },
    leaveSocket() {
      Echo.leave(`chat-${this.activeRoom.id}`);
    },
  },
};
</script>
