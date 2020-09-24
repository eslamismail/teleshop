<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    style="z-index: 1000000"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Create new Chat</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="card text-left">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item justify-content-between d-flex align-items-center"
                v-for="(item, index) in users"
                :key="index"
                @click.prevent="selectUser(item.id)"
              >
                <label :for="`user-${item.id}`">
                  <img
                    :src="img"
                    class="mr-2 rounded img-thumbnail"
                    width="30%"
                    alt=""
                  />
                  {{ item.full_name }}
                </label>
                <!-- <input type="checkbox" :id="`user-${item.id}`" /> -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: Array,
    required: true,
  },
  data() {
    return {
      img:
        "https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg",
    };
  },
  mounted() {},
  methods: {
    async selectUser(id) {
      try {
        let response = await axios.post("/rooms/create", { user_id: id });
        const { message } = response.data;
        this.$notify({
          group: "foo",
          text: `${message}`,
          type: "success",
        });
        $("#exampleModal").modal("hide");
      } catch (error) {
        if (!error.response) {
          this.$notify({
            group: "foo",
            text: `no internet access`,
            type: "error",
          });
        } else if (error.response.status == 400) {
          const { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: `${message}`,
            type: "error",
          });
        } else if (error.response.status == 422) {
          const { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: `${message}`,
            type: "error",
          });
          const { user_id } = error.response.data.errors;
          this.$notify({
            group: "foo",
            text: `${user_id}`,
            type: "error",
          });
        } else {
          const { message } = error.response.data;
          this.$notify({
            group: "foo",
            text: `${message}`,
            type: "error",
          });
        }
      }
    },
  },
};
</script>
<style scoped>
img {
  width: 10%;
}
</style>