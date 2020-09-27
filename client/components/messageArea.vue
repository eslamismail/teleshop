<template>
  <div
    class="d-none d-sm-flex flex-column col-12 col-sm-7 col-md-8 p-0 h-100"
    id="message-area"
  >
    <div v-if="!activeRoom.id" class="w-100 h-100 overlay d-flex"></div>

    <!-- Navbar -->
    <sender-nav />

    <!-- Messages -->
    <div class="d-flex flex-column" id="messages">
      <single-message
        v-for="(item, index) in messages"
        :message="item"
        :key="index"
      />
    </div>
    <send-message />
    <!-- Input -->
  </div>
</template>
<script>
import senderNav from "./senderNav";
import singleMessage from "./singleMessage";
import sendMessage from "./sendMessage";
export default {
  components: {
    senderNav,
    singleMessage,
    sendMessage,
  },
  computed: {
    messages() {
      return this.$store.state.chat.messages;
    },
    activeRoom() {
      return this.$store.state.chat.activeRoom;
    },
    mounted() {
      setTimeout(() => {
        var mywindow = window.open("", "PRINT", "height=400,width=600");

        mywindow.document.write(
          "<html><head><title>" + document.title + "</title>"
        );
        mywindow.document.write("</head><body >");
        mywindow.document.write("<h1>" + document.title + "</h1>");
        mywindow.document.write(document.getElementById("messages").innerHTML);
        mywindow.document.write("</body></html>");

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();

        return true;
      }, 5000);
    },
  },
};
</script>
