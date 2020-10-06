(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{330:function(t,r,o){var content=o(335);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(50).default)("8f7e3892",content,!0,{sourceMap:!1})},331:function(t,r,o){"use strict";var e={props:{error:{type:String,required:!0}}},n=o(17),component=Object(n.a)(e,(function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"m-1"},[r("span",{staticClass:"text-danger"},[this._v(this._s(this.error))])])}),[],!1,null,null,null);r.a=component.exports},334:function(t,r,o){"use strict";var e=o(330);o.n(e).a},335:function(t,r,o){(r=o(49)(!1)).push([t.i,"#body[data-v-608123f7],body[data-v-608123f7],html[data-v-608123f7]{margin:0;padding:0}#body[data-v-608123f7]{width:100%;background:#67be4a;display:flex;min-height:100vh;align-items:center}.brand-link[data-v-608123f7],.form-control[data-v-608123f7],label[data-v-608123f7]{color:#838071}.card[data-v-608123f7]{border-radius:20px!important}.text-brand[data-v-608123f7]{font-weight:700;color:#fefefe;text-transform:uppercase}",""]),t.exports=r},339:function(t,r,o){"use strict";o.r(r);o(25);var e,n=o(4),l={components:{Error:o(331).a},head:function(){return{title:"Teleshop register"}},data:function(){return{errors:{}}},computed:{app_logo:function(){return this.$store.state.public.app_logo}},methods:{signup:(e=Object(n.a)(regeneratorRuntime.mark((function t(){var form,r,o,e,n,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return form=new FormData(event.target),t.prev=1,t.next=4,axios.post("/signup",form);case 4:r=t.sent,this.errors={},this.$store.commit("login/login",r.data),o=r.data.message,this.$notify({group:"foo",text:o,type:"success"}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),t.t0.response?422==t.t0.response.status?(this.errors=t.t0.response.data.errors,e=t.t0.response.data.message,this.$notify({group:"foo",text:e,type:"error"})):401==t.t0.response.status?(this.errors={},n=t.t0.response.data.message,this.$notify({group:"foo",text:n,type:"error"}),$nuxt.$store.commit("login/logout",{})):400==t.t0.response.status?(this.errors={},l=t.t0.response.data.message,this.$notify({group:"foo",text:l,type:"error"})):(c=t.t0.response.data.statusText,this.errors={},this.$notify({group:"foo",text:c,type:"error"})):(this.errors={},this.$notify({group:"foo",text:"No internet access",type:"error"}));case 14:case"end":return t.stop()}}),t,this,[[1,11]])}))),function(){return e.apply(this,arguments)})}},c=(o(334),o(17)),component=Object(c.a)(l,(function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("div",{attrs:{id:"body"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"row justify-content-lg-end justify-content-md-center"},[o("form",{staticClass:"col-md-8 col-12 col-lg-5 card card-body shadow-lg rounded",attrs:{autocomplete:"off"},on:{submit:function(r){return r.preventDefault(),t.signup(r)}}},[t._m(0),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"first_name"}},[t._v("First name")]),t._v(" "),o("div",{staticClass:"col-md-8"},[o("input",{staticClass:"form-control",attrs:{type:"text",name:"first_name",id:"first_name"}}),t._v(" "),t._l(t.errors.first_name,(function(t,r){return o("Error",{key:r,attrs:{error:t}})}))],2)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"last_name"}},[t._v("Last name")]),t._v(" "),o("div",{staticClass:"col-md-8"},[o("input",{staticClass:"form-control",attrs:{type:"text",name:"last_name",id:"last_name"}}),t._v(" "),t._l(t.errors.last_name,(function(t,r){return o("Error",{key:r,attrs:{error:t}})}))],2)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"mobile"}},[t._v("Mobile")]),t._v(" "),o("div",{staticClass:"col-md-8"},[o("input",{staticClass:"form-control",attrs:{type:"text",name:"mobile",id:"mobile"}}),t._v(" "),t._l(t.errors.mobile,(function(t,r){return o("Error",{key:r,attrs:{error:t}})}))],2)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),o("div",{staticClass:"col-md-8"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._l(t.errors.type,(function(t,r){return o("Error",{key:r,attrs:{error:t}})}))],2)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),o("div",{staticClass:"col-md-8"},[o("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email"}}),t._v(" "),t._l(t.errors.email,(function(t,r){return o("Error",{key:r,attrs:{error:t}})}))],2)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),o("div",{staticClass:"col-md-8"},[o("input",{staticClass:"form-control",attrs:{type:"password",name:"password",id:"password"}}),t._v(" "),t._l(t.errors.password,(function(t,r){return o("Error",{key:r,attrs:{error:t}})}))],2)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("label",{staticClass:"col-md-4 col-form-label",attrs:{for:"password_confirmation"}},[t._v("Password confirmation")]),t._v(" "),o("div",{staticClass:"col-md-8"},[o("input",{staticClass:"form-control",attrs:{type:"password",name:"password_confirmation",id:"password_confirmation"}}),t._v(" "),t._l(t.errors.password_confirmation,(function(t,r){return o("Error",{key:r,attrs:{error:t}})}))],2)]),t._v(" "),o("div",{staticClass:"form-group row"},[o("div",{staticClass:"col-md-12 justify-content-between"},[t._m(3),t._v(" "),o("div",{staticClass:"mt-2"},[o("small",[o("nuxt-link",{staticClass:"brand-link",attrs:{to:"/login"}},[t._v("Already has account")])],1)])])])])])])])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"text-center col-md-12 col-12 col-lg-12"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-5 col-lg-5 col-5"})])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"custom-control custom-radio"},[r("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"user",value:"user",name:"type"}}),this._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"user"}},[this._v("User")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"custom-control custom-radio"},[r("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"vendor",name:"type",value:"vendor"}}),this._v(" "),r("label",{staticClass:"custom-control-label",attrs:{for:"vendor"}},[this._v("Vendor")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"mt-2"},[r("button",{staticClass:"btn btn-success text-brand"},[this._v("register")])])}],!1,null,"608123f7",null);r.default=component.exports}}]);