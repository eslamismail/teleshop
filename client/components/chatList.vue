<template>
  <div class="chat_list active_chat">
    <div class="chat_people">
      <div class="chat_img">
        <img :src="user.profile_picture_url" alt="sunil" />
      </div>
      <div class="chat_ib">
        <h5>
          {{user.full_name}}
          <span class="chat_date">{{solveDate(user.created_at)}}</span>
        </h5>
        <p>
          Test, which is a new approach to have all solutions
          astrology under one roof.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
const moment = require("moment");
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    solveDate(data) {
      return moment(data).format("ll");
    },
  },
};
</script>