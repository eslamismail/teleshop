(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{326:function(t,e,r){"use strict";var n={props:{error:{type:String,required:!0}}},o=r(16),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-1"},[e("span",{staticClass:"text-danger"},[this._v(this._s(this.error))])])}),[],!1,null,null,null);e.a=component.exports},333:function(t,e,r){"use strict";var n=r(7),o=r(334)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),n(n.P+n.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),r(86)("find")},334:function(t,e,r){var n=r(24),o=r(84),c=r(27),l=r(17),m=r(335);t.exports=function(t,e){var r=1==t,d=2==t,f=3==t,v=4==t,_=6==t,h=5==t||_,y=e||m;return function(e,m,x){for(var C,I,w=c(e),E=o(w),N=n(m,x,3),$=l(E.length),k=0,A=r?y(e,$):d?y(e,0):void 0;$>k;k++)if((h||k in E)&&(I=N(C=E[k],k,w),t))if(r)A[k]=I;else if(I)switch(t){case 3:return!0;case 5:return C;case 6:return k;case 2:A.push(C)}else if(v)return!1;return _?-1:f||v?v:A}}},335:function(t,e,r){var n=r(336);t.exports=function(t,e){return new(n(t))(e)}},336:function(t,e,r){var n=r(12),o=r(254),c=r(4)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),n(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},337:function(t,e,r){"use strict";var n=r(5),o=r(21),c=r(25),l=r(255),m=r(68),d=r(11),f=r(50).f,v=r(69).f,_=r(10).f,h=r(338).trim,y=n.Number,x=y,C=y.prototype,I="Number"==c(r(85)(C)),w="trim"in String.prototype,E=function(t){var e=m(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,c=(e=w?e.trim():h(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>o)return NaN;return parseInt(l,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(I?d((function(){C.valueOf.call(r)})):"Number"!=c(r))?l(new x(E(e)),r,y):E(e)};for(var N,$=r(9)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;$.length>k;k++)o(x,N=$[k])&&!o(y,N)&&_(y,N,v(x,N));y.prototype=C,C.constructor=y,r(13)(n,"Number",y)}},338:function(t,e,r){var n=r(7),o=r(26),c=r(11),l=r(339),m="["+l+"]",d=RegExp("^"+m+m+"*"),f=RegExp(m+m+"*$"),v=function(t,e,r){var o={},m=c((function(){return!!l[t]()||"​"!="​"[t]()})),d=o[t]=m?e(_):l[t];r&&(o[r]=d),n(n.P+n.F*m,"String",o)},_=v.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(f,"")),t};t.exports=v},339:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},340:function(t,e,r){"use strict";r.r(e);r(23);var n=r(3),o=(r(333),r(0)),c={props:{room:{type:Object,required:!0},active:{type:Boolean,default:!1}},data:function(){return{created_at:null,interval:null}},mounted:function(){this.solveDate()},updated:function(){this.solveDate()},methods:{solveDate:function(){var t=this;this.interval=setInterval((function(){var e=o(new Date),r=o(t.room.message_send_at),n=o.duration(e.diff(r)).asHours();n<=1?t.created_at="About "+o(t.room.message_send_at).fromNow():n<=168?t.created_at=o(t.room.message_send_at).calendar():(t.created_at=o(t.room.message_send_at).format("YYYY MMM DD | hh:mm:ss a"),clearInterval(t.interval))}),100)},setActive:function(){this.$emit("active","".concat(this.room.id))}}},l=r(16),m=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:"chat_list "+(t.active?"active_chat":""),attrs:{id:"chat_list_"+t.room.id},on:{click:function(e){return e.preventDefault(),t.setActive()}}},[r("div",{staticClass:"chat_people"},[r("div",{staticClass:"chat_img"},[t.room.room_image?r("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.room.room_image,alt:"sunil"}}):t._e()]),t._v(" "),r("div",{staticClass:"chat_ib"},[r("h5",[t._v("\n        "+t._s(t.room.room_name)+"\n        "),r("span",{staticClass:"chat_date"},[t._v(t._s(t.created_at))])]),t._v(" "),r("p",[t._v(t._s(t.room.last_message&&t.room.last_message.length>45?t.room.last_message.substr(0,45)+".....":t.room.last_message))])])])])}),[],!1,null,null,null).exports,d=r(0),f={props:{message:{type:Object,required:!0}},data:function(){return{created_at:null,interval:null}},beforeMount:function(){this.solveDate()},mounted:function(){var t=this,e=document.getElementById("msg_history"),r=setInterval((function(){e&&t.created_at&&(e.scrollTop=e.scrollHeight,clearInterval(r))}),100)},methods:{solveDate:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.interval=setInterval((function(){var e=d(new Date),r=d(t.message.created_at),n=d.duration(e.diff(r)).asHours();n<=1?t.created_at="About "+d(t.message.created_at).fromNow():n<=168?t.created_at=d(t.message.created_at).calendar():(t.created_at=d(t.message.created_at).format("YYYY MMM DD | hh:mm:ss a"),clearInterval(t.interval))}),100);case 1:case"end":return e.stop()}}),e)})))()}},computed:{user:function(){return this.$store.state.login.user}}},v=Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.user&&t.message.sender_id!=t.user.id?r("div",{staticClass:"incoming_msg"},[t.message.sender?r("div",{staticClass:"incoming_msg_img"},[r("img",{staticStyle:{"border-radius":"50%"},attrs:{src:t.message.sender.profile_picture_url,alt:"sunil"}})]):t._e(),t._v(" "),r("div",{staticClass:"received_msg"},[r("div",{staticClass:"received_withd_msg"},[r("p",[t._v(t._s(t.message.message))]),t._v(" "),r("span",{staticClass:"time_date"},[t._v(t._s(t.created_at))])])])]):r("div",{staticClass:"outgoing_msg"},[r("div",{staticClass:"sent_msg"},[r("p",[t._v(t._s(t.message.message))]),t._v(" "),r("span",{staticClass:"time_date"},[t._v(t._s(t.created_at))])])])}),[],!1,null,null,null).exports,_=Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"outgoing_msg"},[e("div",{staticClass:"sent_msg"},[e("p",[this._v("\n      Test which is a new approach to have all\n      solutions\n    ")]),this._v(" "),e("span",{staticClass:"time_date"},[this._v("11:01 AM | June 9")])])])}],!1,null,null,null).exports,h=(r(337),{components:{Error:r(326).a},props:{roomID:{type:Number,required:!0}},data:function(){return{errors:{message:[]}}},computed:{user:function(){return this.$store.state.login.user}},methods:{typing:function(){Echo.private("chat-".concat(this.roomID)).whisper("typing",{user:this.user})},sendMessage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=document.getElementById("message").value,e.prev=1,e.next=4,axios.post("/rooms/".concat(t.roomID,"/message"),{message:r});case 4:document.getElementById("message").value=null,t.errors={message:[]},e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response?422==e.t0.response.status?(t.errors=e.t0.response.data.errors,n=e.t0.response.data.message,t.$notify({group:"foo",text:n,type:"error"})):401==e.t0.response.status?(o=e.t0.response.data.message,t.$notify({group:"foo",text:o,type:"error"}),$nuxt.$store.commit("login/logout",{})):400==e.t0.response.status?(c=e.t0.response.data.message,t.$notify({group:"foo",text:c,type:"error"})):(l=e.t0.response.data.statusText,t.$notify({group:"foo",text:l,type:"error"})):t.$notify({group:"foo",text:"No internet access",type:"error"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}}),y={middleware:"auth",components:{chatList:m,incomming:v,outgoing:_,sendMessage:Object(l.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"type_msg"},[r("div",{staticClass:"input_msg_write"},[r("input",{staticClass:"write_msg",attrs:{type:"text",placeholder:"Type a message",id:"message",autocomplete:"off"},on:{keypress:t.typing,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMessage(e)}}}),t._v(" "),r("button",{staticClass:"msg_send_btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.sendMessage(e)}}},[r("i",{staticClass:"fa fa-paper-plane-o",attrs:{"aria-hidden":"true"}})]),t._v(" "),t._l(t.errors.message,(function(t,e){return r("error",{key:e,attrs:{error:t}})}))],2)])}),[],!1,null,null,null).exports},data:function(){return{rooms:[],typing:"",messages:[],room:null,lastRoom:null}},head:function(){return{link:[{href:"/css/chat.css",rel:"StyleSheet"},{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css",rel:"StyleSheet"}]}},computed:{user:function(){return this.$store.state.login.user}},mounted:function(){var t=this;this.getRooms();var e=document.getElementsByClassName("active_chat"),r=setInterval((function(){if(e[0]&&null==t.room){for(var n=0;n<e.length;n++){e[n].classList.remove("active_chat")}clearInterval(r)}setTimeout((function(){clearInterval(r)}),5e3)}),100)},methods:{scrollDown:function(){var t=document.getElementById("msg_history"),e=setInterval((function(){t&&(t.scrollTop=t.scrollHeight,clearInterval(e))}),100)},setActive:function(t){var e=document.getElementsByClassName("chat_list");this.room&&this.leavePrivate(this.room.id),this.scrollDown(),this.room=this.rooms.find((function(e){return e.id==t})),this.selectedRoom=!0;for(var r=0;r<e.length;r++){e[r].classList.remove("active_chat")}var n=setInterval((function(){document.getElementById("chat_list_".concat(t))&&(document.getElementById("chat_list_".concat(t)).classList.add("active_chat"),clearInterval(n))}),100);if(this.messages.length>0&&this.messages[0].room_id==this.room.id||this.lastRoom==this.room.id)return this.openSocket(t),!1;this.getMessages(t),this.lastRoom=t,this.openSocket(t)},openSocket:function(t){var e=this;Echo.private("chat-".concat(t)).listenForWhisper("typing",(function(t){e.user.id!=t.user.id&&(e.typing="".concat(t.user.full_name," typing"),setTimeout((function(){e.typing=""}),3e3))})).listen("NewMessage",(function(t){e.messages.push(t.message),e.room.message_send_at=t.message.created_at,e.room.last_message=t.message.message}))},leavePrivate:function(t){Echo.leave("chat-".concat(t))},getMessages:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,axios.get("/rooms/".concat(t));case 3:n=r.sent,e.messages=n.data.messages,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),r.t0.response?401==r.t0.response.status?(o=r.t0.response.data.message,e.$notify({group:"foo",text:o,type:"error"}),$nuxt.$store.commit("login/logout",{})):(c=r.t0.response.data.message,e.$notify({group:"foo",text:c,type:"error"})):e.$notify({group:"foo",text:"No internet access",type:"error"});case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},getRooms:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,axios.get("/rooms");case 3:r=e.sent,t.rooms=r.data.rooms,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response?401==e.t0.response.status?(n=e.t0.response.data.message,t.$notify({group:"foo",text:n,type:"error"}),$nuxt.$store.commit("login/logout",{})):(o=e.t0.response.data.message,t.$notify({group:"foo",text:o,type:"error"})):t.$notify({group:"foo",text:"No internet access",type:"error"});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},x=Object(l.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container h-100"},[r("div",{staticClass:"messaging"},[r("div",{staticClass:"inbox_msg"},[r("div",{staticClass:"inbox_people"},[r("div",{staticClass:"headind_srch"},[r("div",{staticClass:"recent_heading"},[t.user?r("h4",[r("img",{staticStyle:{"border-radius":"50%","max-width":"11%"},attrs:{src:t.user.profile_picture_url,alt:""}}),t._v("\n                "+t._s(t.user.full_name)+"\n              ")]):t._e()]),t._v(" "),t._m(0)]),t._v(" "),r("div",{staticClass:"inbox_chat"},t._l(t.rooms,(function(e,n){return r("chat-list",{key:n,attrs:{room:e},on:{active:t.setActive}})})),1)]),t._v(" "),r("div",{staticClass:"mesgs"},[t.messages.length>0?r("div",[r("div",{staticClass:"msg_history",attrs:{id:"msg_history"}},t._l(t.messages,(function(t,e){return r("incomming",{key:e,attrs:{message:t}})})),1)]):r("div",{staticClass:"msg_history align-content-center d-flex"},[r("div",{staticClass:"col-12 text-center"},[t._v("no message to show")])]),t._v(" "),r("div",{staticClass:"typing"},[t._v(t._s(t.typing))]),t._v(" "),t.room?r("send-message",{attrs:{roomID:t.room.id}}):t._e()],1)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"srch_bar"},[e("div",{staticClass:"stylish-input-group"},[e("button",{staticClass:"btn btn-default"},[this._v("+")])])])}],!1,null,null,null);e.default=x.exports}}]);