<template>
  <div>
    <div>online</div>
    <p v-for="(item, index) in users" :key="index">{{item.first_name}} {{item.last_name}}</p>
    <p>{{message}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: [],
      message: "",
    };
  },
  mounted() {
    Echo.join("test")
      .listen("Test", (e) => {
        // console.log("object", e);
        this.message = e.data.message;
        console.log(this.message);
      })
      .here((users) => {
        this.users = users;

        // console.log(users);
      });
  },
};
</script>
