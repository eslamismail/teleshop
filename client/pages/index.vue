<template>
  <div>welcome</div>
</template>
<script>
export default {
  mounted() {
    Echo.join("test").listen("Test", function (e) {
      console.log("object", e);
    });
  },
};
</script>
