(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{M4DC:function(e,t,s){"use strict";var n={props:{resource:{type:Object,required:!1,default:function(){}},form:{type:Object,required:!0}}},a=s("KHd+"),r=Object(a.a)(n,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-slug",{attrs:{name:"handle",label:"Handle",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)]),e._v(" "),e.resource?s("p-definition-list",[s("p-definition",{attrs:{name:"Created At"}},[e._v("\n                    "+e._s(e.$moment(e.resource.created_at).format("Y-MM-DD, hh:mm a"))+"\n                ")]),e._v(" "),s("p-definition",{attrs:{name:"Updated At"}},[e._v("\n                    "+e._s(e.$moment(e.resource.updated_at).format("Y-MM-DD, hh:mm a"))+"\n                ")])],1):e._e()]},proxy:!0}])},[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},[s("router-link",{staticClass:"button",attrs:{to:{name:"fieldsets"}}},[e._v("Go Back")]),e._v(" "),s("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),s("section-builder",{staticClass:"mt-6",model:{value:e.$parent.sections,callback:function(t){e.$set(e.$parent,"sections",t)},expression:"$parent.sections"}})],1)])],1)}),[],!1,null,null,null);t.a=r.exports},WciM:function(e,t,s){"use strict";s.r(t),s.d(t,"getFieldset",(function(){return a}));var n=s("nUVr");function a(e,t){axios.get("/api/fieldsets/"+e).then((function(e){t(null,e.data.data)})).catch((function(e){t(new Error("The requested fieldset could not be found"))}))}var r={head:{title:function(){return{inner:_.has(this.form,"name")?this.form.name:"Loading..."}}},data:function(){return{id:null,resource:null,sections:[],form:null}},components:{"shared-form":s("M4DC").a},watch:{sections:{deep:!0,handler:function(e){this.hasChanges||this.form.onFirstChange()}}},methods:{submit:function(){var e=this;this.form.patch("/api/fieldsets/".concat(this.resource.id)).then((function(){axios.post("/api/fieldsets/".concat(e.resource.id,"/sections"),{sections:e.sections}).then((function(){toast("Fieldset successfully updated","success"),e.$router.push("/fieldsets")})).catch((function(e){toast(e.message,"failed")}))})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,s){a(e.params.fieldset,(function(e,t){s(e?function(t){t.$router.push("/fieldsets"),toast(e.toString(),"danger")}:function(e){e.resource=t,e.sections=t.sections,e.form=new n.a({name:t.name,handle:t.handle},!0),e.$nextTick((function(){e.$emit("updateHead"),e.form.resetChangeListener()}))})}))}},o=s("KHd+"),i=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"list"}},[this._v("Edit Fieldset")])],1),this._v(" "),this.form?t("shared-form",{attrs:{form:this.form,resource:this.resource}}):this._e()],1)}),[],!1,null,null,null);t.default=i.exports}}]);