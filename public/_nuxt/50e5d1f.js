(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{329:function(t,e,r){var content=r(334);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("63684162",content,!0,{sourceMap:!1})},332:function(t,e,r){"use strict";var o={props:{error:{type:String,required:!0}}},n=r(17),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-1"},[e("span",{staticClass:"text-danger"},[this._v(this._s(this.error))])])}),[],!1,null,null,null);e.a=component.exports},333:function(t,e,r){"use strict";var o=r(329);r.n(o).a},334:function(t,e,r){(e=r(49)(!1)).push([t.i,"#body[data-v-7c768d79],body[data-v-7c768d79],html[data-v-7c768d79]{margin:0;padding:0}#body[data-v-7c768d79]{width:100%;background:#67be4a;display:flex;min-height:100vh;align-items:center}.brand-link[data-v-7c768d79],.form-control[data-v-7c768d79],label[data-v-7c768d79]{color:#838071}.card[data-v-7c768d79]{border-radius:20px!important}.text-brand[data-v-7c768d79]{font-weight:700;color:#fefefe;text-transform:uppercase}",""]),t.exports=e},345:function(t,e,r){"use strict";r.r(e);r(25);var o,n=r(4),c={components:{Error:r(332).a},head:function(){return{title:"Teleshop login"}},mounted:function(){},created:function(){},data:function(){return{errors:{email:[],password:[]}}},computed:{user:function(){return this.$store.state.login.user},app_logo:function(){return this.$store.state.public.app_logo}},methods:{login:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var form,e,r,o,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return form=new FormData(event.target),t.prev=1,t.next=4,axios.post("/login",form);case 4:e=t.sent,this.errors={},this.$store.commit("login/login",e.data),this.$notify({group:"foo",text:"welcome back ".concat(this.user.first_name," ").concat(this.user.last_name),type:"success"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response?422==t.t0.response.status?(this.errors=t.t0.response.data.errors,r=t.t0.response.data.message,this.$notify({group:"foo",text:r,type:"error"})):401==t.t0.response.status?(o=t.t0.response.data.message,this.$notify({group:"foo",text:o,type:"error"}),$nuxt.$store.commit("login/logout",{})):400==t.t0.response.status?(n=t.t0.response.data.message,this.$notify({group:"foo",text:n,type:"error"})):(c=t.t0.response.data.statusText,this.$notify({group:"foo",text:c,type:"error"})):this.$notify({group:"foo",text:"No internet access",type:"error"});case 13:case"end":return t.stop()}}),t,this,[[1,10]])}))),function(){return o.apply(this,arguments)})}},l=(r(333),r(17)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"body"}},[r("div",{staticClass:"container mb-5"},[r("div",{staticClass:"row justify-content-lg-end justify-content-md-center"},[r("form",{staticClass:"col-md-8 col-12 col-lg-5 card card-body shadow-lg rounded p-5",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.login()}}},[t._m(0),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email"}}),t._v(" "),t._l(t.errors.email,(function(t,e){return r("Error",{key:e,attrs:{error:t}})}))],2)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{staticClass:"form-control",attrs:{type:"password",name:"password",id:"password"}}),t._v(" "),t._l(t.errors.password,(function(t,e){return r("Error",{key:e,attrs:{error:t}})}))],2)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"form-group form-check"},[r("div",{staticClass:"col-md-12"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"remember_me",id:"remember_me"}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"remember_me"}},[t._v("Remeber me")]),t._v(" "),t._l(t.errors.remember_me,(function(t,e){return r("Error",{key:e,attrs:{error:t}})}))],2)])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-12 justify-content-between"},[r("button",{staticClass:"btn btn-success text-brand"},[t._v("login")]),t._v(" "),r("div",{staticClass:"mt-2"},[r("small",[r("nuxt-link",{staticClass:"brand-link",attrs:{to:"/register"}},[t._v("Need to create account")])],1)])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center col-md-12 col-12 col-lg-12"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-5"})])])}],!1,null,"7c768d79",null);e.default=component.exports}}]);