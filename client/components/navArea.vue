<template>
  <div class="row d-flex flex-row align-items-center p-2" id="navbar">
    <img
      alt="Profile Photo"
      class="img-fluid rounded-circle mr-2"
      style="height: 50px; cursor: pointer"
      onclick="showProfileSettings()"
      id="display-pic"
      :src="user.profile_picture_url"
    />
    <div class="text-white font-weight-bold" id="username">
      {{ user.full_name }}
    </div>
    <div class="nav-item dropdown ml-auto">
      <a
        class="nav-link dropdown-toggle"
        data-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        ><i class="fas fa-ellipsis-v text-white"></i
      ></a>
      <div class="dropdown-menu dropdown-menu-right">
        <a class="dropdown-item" href="#">New Group</a>
        <a class="dropdown-item" href="#">Archived</a>
        <a class="dropdown-item" href="#">Starred</a>
        <a class="dropdown-item" href="#">Settings</a>
        <a class="dropdown-item" @click.prevent="logout" href="#">Log Out</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.login.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.post("/logout");
      } catch (error) {}
      this.$store.commit("login/logout", {});
    },
  },
};
</script>
