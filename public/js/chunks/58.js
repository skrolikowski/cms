(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{BiPX:function(e,t,s){"use strict";var r={props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},a=s("KHd+"),n=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-slug",{attrs:{name:"handle",label:"Handle",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)])]},proxy:!0}])},[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button",attrs:{to:{name:"menus"}}},[e._v("Go Back")]),e._v(" "),s("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),s("p-tabs",[s("p-tab",{attrs:{name:"General"}},[s("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this menu will link to.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1),e._v(" "),s("p-tab",{attrs:{name:"Fields"}},[s("section-builder",{model:{value:e.$parent.sections,callback:function(t){e.$set(e.$parent,"sections",t)},expression:"$parent.sections"}})],1)],1)],1)])],1)}),[],!1,null,null,null);t.a=n.exports},XvHC:function(e,t,s){"use strict";s.r(t);var r=s("ke3Z"),a={head:{title:function(){return{inner:"Create a Menu"}}},data:function(){return{sections:[],form:new r.a({name:"",handle:"",description:"",fieldset:{}},!0)}},components:{"shared-form":s("BiPX").a},watch:{sections:{deep:!0,handler:function(e){this.hasChanges||this.form.onFirstChange()}}},methods:{submit:function(){var e=this;this.form.post("/api/menus").then((function(t){axios.post("/api/fieldsets/".concat(t.data.fieldset.id,"/sections"),{sections:e.sections}).then((function(t){toast("Menu successfully saved","success"),e.$router.push("/menus")})).catch((function(e){toast(e.message,"failed")}))})).catch((function(e){toast(e.message,"failed")}))}},mounted:function(){var e=this;this.$nextTick((function(){e.form.resetChangeListener()}))}},n=s("KHd+"),o=Object(n.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"anchor"}},[this._v("Create Menu")])],1),this._v(" "),t("shared-form",{attrs:{form:this.form}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);