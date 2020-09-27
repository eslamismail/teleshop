export const state = () => ({
  rooms: [],
  activeRoom: {},
  messages: []
});
const underscore = require("underscore");
const moment = require("moment");
export const mutations = {
  createRooms: (state, rooms) => {
    state.rooms = underscore.sortBy(rooms, item => {
      return -moment(item.message_send_at).valueOf();
    });
  },
  addRoom: (state, room) => {
    state.rooms.unshift(room);
  },
  setActive: (state, room) => {
    state.activeRoom = room;
  },
  setMessages: (state, messages) => {
    state.messages = messages;
  },
  addMessage: (state, message) => {
    state.messages.push(message);
    state.activeRoom.message_send_at = message.created_at;
    state.activeRoom.last_message = message.message;
  }
};
