(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Ap4v:function(e,r,s){"use strict";s.r(r),s.d(r,"getRoles",(function(){return a}));var t=s("nUVr");function a(e){axios.get("/api/roles").then((function(r){e(null,r.data.data)})).catch((function(r){e(new Error("Roles could not be found"))}))}var o={permission:"users.create",head:{title:function(){return{inner:"Create a User"}}},data:function(){return{roles:[],form:new t.a({name:"",email:"",role:null,password:"",password_confirmation:"",email_verified_at:this.$moment().format("X"),status:1},!0)}},components:{"shared-form":s("ZfHp").a},methods:{submit:function(){var e=this;this.form.post("/api/users").then((function(r){toast("User successfully created","success"),e.$router.push("/users")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,r,s){a((function(e,r){s(e?function(r){r.$router.push("/users"),toast(e.toString(),"danger")}:function(e){e.roles=r,e.$emit("updateHead")})}))}},i=s("KHd+"),n=Object(i.a)(o,(function(){var e=this.$createElement,r=this._self._c||e;return r("div",[r("portal",{attrs:{to:"title"}},[r("page-title",{attrs:{icon:"user-alt"}},[this._v("Create User")])],1),this._v(" "),r("shared-form",{attrs:{form:this.form,roles:this.roles,submit:this.submit}})],1)}),[],!1,null,null,null);r.default=n.exports},ZfHp:function(e,r,s){"use strict";var t={mixins:[s("udk0").default],props:{form:{type:Object,required:!0},submit:{required:!0},roles:{type:Array,required:!0},user:{type:Object,required:!1}},computed:{roleOptions:function(){var e=this,r=_.filter(this.roles,(function(r){return e.isAssignable(r.name)}));return _.map(r,(function(e){return{label:e.label,value:e.name}}))}}},a=s("KHd+"),o=Object(a.a)(t,(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("div",{staticClass:"user-page"},[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[s("ui-button",{key:"go-back-btn",attrs:{to:{name:"users"},variant:"secondary"}},[e._v("Go Back")]),e._v(" "),s("ui-button",{key:"save-btn",attrs:{variant:"primary",disabled:!e.form.hasChanges},on:{click:function(r){return r.preventDefault(),e.submit(r)}}},[e._v("Save")])],1)]),e._v(" "),s("section-card",{attrs:{title:"General Information",description:"General information about this user."}},[s("ui-input-group",{attrs:{id:"user-name",name:"name",label:"Name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(r){e.$set(e.form,"name",r)},expression:"form.name"}}),e._v(" "),s("ui-input-group",{attrs:{id:"user-id",type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":e.form.errors.has("email"),"error-message":e.form.errors.get("email"),required:""},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),s("ui-toggle",{attrs:{id:"user-status",name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(r){e.$set(e.form,"status",r)},expression:"form.status"}})],1),e._v(" "),s("section-card",{attrs:{title:"Permissions",description:"Select the role to determine which areas of the website this user can access."}},[s("ui-select-group",{attrs:{id:"user-role",name:"role",label:"Role",options:e.roleOptions,autocomplete:"off",value:e.user?e.user.roles.name:null,"has-error":e.form.errors.has("role"),"error-message":e.form.errors.get("role"),required:""},model:{value:e.form.role,callback:function(r){e.$set(e.form,"role",r)},expression:"form.role"}})],1),e._v(" "),s("section-card",{attrs:{title:"Security",description:"Configure this user's security details."}},[s("ui-fieldset",{attrs:{help:e.user?"Only fill out the password fields below if you intend to update the user account password.":null}},[s("ui-password-group",{attrs:{id:"user-password",type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":e.form.errors.has("password"),"error-message":e.form.errors.get("password")},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}}),e._v(" "),s("ui-password-group",{attrs:{id:"user-password-confirm",type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":e.form.errors.has("password_confirmation"),"error-message":e.form.errors.get("password_confirmation")},model:{value:e.form.password_confirmation,callback:function(r){e.$set(e.form,"password_confirmation",r)},expression:"form.password_confirmation"}})],1)],1),e._v(" "),e.user?s("section-card",{attrs:{title:"Actions",description:"Management actions that can be performed for this user."}},[s("div",{staticClass:"mb-4"},[s("span",{staticClass:"label"},[e._v("Verification Email")]),e._v(" "),s("p",{staticClass:"help mb-2"},[e._v("Re-send the verification email to this user.")]),e._v(" "),s("ui-button",{attrs:{variant:"secondary"}},[e._v("Send Verification")])],1),e._v(" "),s("div",{staticClass:"mb-4"},[s("span",{staticClass:"label"},[e._v("Password Reset")]),e._v(" "),s("p",{staticClass:"help mb-2"},[e._v("Force the user to reset their password upon next login attempt.")]),e._v(" "),s("ui-button",{attrs:{variant:"secondary"}},[e._v("Reset Password")])],1),e._v(" "),s("div",{staticClass:"mb-4"},[s("span",{staticClass:"label"},[e._v("Delete User")]),e._v(" "),s("p",{staticClass:"help mb-2"},[e._v("Once you delete this user, there is no going back. Please be certain.")]),e._v(" "),s("ui-button",{attrs:{variant:"danger"}},[e._v("Delete User")])],1)]):e._e()],1)}),[],!1,null,null,null);r.a=o.exports},udk0:function(e,r,s){"use strict";s.r(r),r.default={methods:{isAssignable:function(e){return!_.includes(["guest"],e)},isRemovable:function(e){return!_.includes(["owner","admin","user","guest"],e)},hasPermissions:function(e){return!_.includes(["owner"],e)}}}}}]);