(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{188:function(t,e,r){"use strict";r.r(e);var o={props:{error:{type:String,required:!0}}},n=r(23),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"m-1"},[e("span",{staticClass:"text-danger"},[this._v(this._s(this.error))])])}),[],!1,null,null,null);e.default=component.exports},189:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(65).default)("5a511c39",content,!0,{sourceMap:!1})},191:function(t,e,r){"use strict";var o=r(189);r.n(o).a},192:function(t,e,r){(e=r(64)(!1)).push([t.i,"#body[data-v-ab7e9120]{position:fixed;top:0;left:0;width:100%;overflow:auto;background:#f5cb04;height:100%;display:flex}.brand-link[data-v-ab7e9120],.form-control[data-v-ab7e9120],label[data-v-ab7e9120]{color:#838071}.card[data-v-ab7e9120]{border-radius:20px!important}.text-brand[data-v-ab7e9120]{font-weight:700;color:#fefefe;text-transform:uppercase}",""]),t.exports=e},197:function(t,e,r){"use strict";r.r(e);r(22);var o,n=r(2),c={components:{Error:r(188).default},head:function(){return{title:"Teleshop login"}},mounted:function(){},data:function(){return{errors:{email:[],password:[]}}},computed:{user:function(){return this.$store.state.login.user},app_logo:function(){return this.$store.state.public.app_logo}},methods:{login:(o=Object(n.a)(regeneratorRuntime.mark((function t(){var form,e,r,o,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return form=new FormData(event.target),t.prev=1,t.next=4,axios.post("/login",form);case 4:e=t.sent,this.errors={},this.$store.commit("login/login",e.data),this.$notify({group:"foo",text:"welcome back ".concat(this.user.first_name," ").concat(this.user.last_name),type:"success"}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),t.t0.response?422==t.t0.response.status?(this.errors=t.t0.response.data.errors,r=t.t0.response.data.message,this.$notify({group:"foo",text:r,type:"error"})):401==t.t0.response.status?(o=t.t0.response.data.message,this.$notify({group:"foo",text:o,type:"error"}),$nuxt.$store.commit("login/logout",{})):400==t.t0.response.status?(n=t.t0.response.data.message,this.$notify({group:"foo",text:n,type:"error"})):(c=t.t0.response.data.statusText,this.$notify({group:"foo",text:c,type:"error"})):(clg,this.$notify({group:"foo",text:"No internet access",type:"error"}));case 13:case"end":return t.stop()}}),t,this,[[1,10]])}))),function(){return o.apply(this,arguments)})}},l=(r(191),r(23)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"align-items-center",attrs:{id:"body"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-lg-end justify-content-md-center"},[r("form",{staticClass:"col-md-8 col-12 col-lg-5 card card-body shadow-lg rounded p-5",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.login()}}},[r("div",{staticClass:"text-center col-md-12 col-12 col-lg-12"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-5"},[r("img",{staticClass:"img-fluid",attrs:{src:t.app_logo,alt:""}})])])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{staticClass:"form-control",attrs:{type:"email",name:"email",id:"email"}}),t._v(" "),t._l(t.errors.email,(function(t,e){return r("Error",{key:e,attrs:{error:t}})}))],2)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),r("div",{staticClass:"col-md-9"},[r("input",{staticClass:"form-control",attrs:{type:"password",name:"password",id:"password"}}),t._v(" "),t._l(t.errors.password,(function(t,e){return r("Error",{key:e,attrs:{error:t}})}))],2)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"form-group form-check"},[r("div",{staticClass:"col-md-12"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"remember_me",id:"remember_me"}}),t._v(" "),r("label",{staticClass:"form-check-label",attrs:{for:"remember_me"}},[t._v("Remeber me")]),t._v(" "),t._l(t.errors.remember_me,(function(t,e){return r("Error",{key:e,attrs:{error:t}})}))],2)])]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-12 justify-content-between"},[r("button",{staticClass:"btn btn-warning text-brand"},[t._v("login")]),t._v(" "),r("div",{staticClass:"mt-2"},[r("small",[r("nuxt-link",{staticClass:"brand-link",attrs:{to:"/register"}},[t._v("Need to create account")])],1)])])])])])])])}),[],!1,null,"ab7e9120",null);e.default=component.exports;installComponents(component,{Error:r(188).default})}}]);