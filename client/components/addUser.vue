<template>
  <div>
    <button @click.prevent="addUser()" class="btn btn-default">+</button>
    <modal :users="users" />
  </div>
</template>
<script>
import Modal from "./modal";
export default {
  components: { Modal },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async addUser() {
      try {
        let response = await axios.get("users");
        this.users = response.data.users;
        if (this.users.length > 0) {
          $("#exampleModal").modal("show");
        } else {
          this.$notify({
            group: "foo",
            text: `no members to show`,
            type: "error",
          });
        }
      } catch (error) {}
    },
  },
};
</script>