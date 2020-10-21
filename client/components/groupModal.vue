<template>
  <div class="modal fade" role="dialog" id="group-modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New chat</h5>
        </div>
        <div class="modal-body">
          <div
            v-for="(user, index) in users"
            @click="selectUser(user.id)"
            :key="index"
            class="m-2 row card align-items-center justify-content-center"
            style="cursor:pointer;height:60px !important"
          >
            <div class="justify-content-between align-items-center col-12">
              <input type="checkbox" :id="`user_id_${user.id}`" />
              <img
                v-if="user"
                :src="user.profile_picture_url"
                width="10%"
                class="img-thumbnail"
                alt
              />
              <div v-if="user" class="d-inline">{{ user.full_name }}</div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <button @click="sendVal" class="btn btn-primary">Create</button>
              <button class="btn btn-default">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      user_ids: [],
    };
  },
  methods: {
    selectUser(id) {
      let x = this.user_ids.find((item) => {
        return item === id;
      });
      if (x) {
        this.user_ids = this.user_ids.filter((item) => {
          return item != id;
        });
        document.getElementById(`user_id_${id}`).checked = false;
      } else {
        this.user_ids.push(id);
        document.getElementById(`user_id_${id}`).checked = true;
      }
    },
    sendVal() {
      console.log(this.user_ids);
      this.user_ids.forEach((id) => {
        document.getElementById(`user_id_${id}`).checked = false;
      });
      this.user_ids = [];
    },
  },
};
</script>

