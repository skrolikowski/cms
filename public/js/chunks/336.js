(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[336],{336:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(6072);const r={auth:function(){return{permission:"fieldsets.create"}},head:{title:function(){return{inner:"Create a Fieldset"}}},data:function(){return{form:new a.Z({name:"",handle:"",status:"1",fields:[]},!0)}},components:{"shared-form":s(1281).Z},methods:{submit:function(){var e=this;this.form.post("/api/fieldsets").then((function(t){e.$store.dispatch("navigation/fetchAdminNavigation"),toast("Fieldset successfully created","success"),e.$router.push("/fieldsets")})).catch((function(e){toast(e.message,"failed")}))}}};const i=(0,s(1900).Z)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"fieldset-page"},[s("portal",{attrs:{to:"title"}},[s("page-title",{attrs:{icon:"layer-group"}},[e._v("Create Fieldset")])],1),e._v(" "),s("shared-form",{attrs:{form:e.form,submit:e.submit}})],1)}),[],!1,null,null,null).exports},1281:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});const a={data:function(){return{placements:[{label:"Body",value:"body"},{label:"Sidebar",value:"sidebar"}]}},props:{form:{type:Object,required:!0},fieldset:{type:Object,required:!1},submit:{required:!0}},created:function(){this.$store.commit("fieldtypes/setExcluded",["fieldset"])},destroyed:function(){this.$store.commit("fieldtypes/setExcluded",[])}};const r=(0,s(1900).Z)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"actions"}},[s("div",{staticClass:"buttons"},["sm"!=e.$mq?s("ui-button",{attrs:{to:{name:"fieldsets"},variant:"secondary"}},[e._v("Go Back")]):e._e(),e._v(" "),s("ui-button",{attrs:{type:"submit",variant:"primary",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),s("portal",{attrs:{to:"sidebar-right"}},[s("sidebar",{attrs:{id:"fieldset-sidebar"}},[s("sidebar-section",{attrs:{id:"fieldset_panel_status",tabindex:"-1"}},[s("ui-toggle",{attrs:{id:"fieldset-status",name:"status",label:"Status",help:e.form.status?"Toggle to disable this fieldset.":"Toggle to enable this fieldset.","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1),e._v(" "),e.fieldset?s("status-card",{attrs:{entry:e.fieldset,id:"fieldset_panel_status_card",tabindex:"-1"}}):e._e()],1)],1),e._v(" "),s("section-card",{attrs:{id:"fieldset_panel_general",title:"General Information",description:"General information about your fieldset and what it manages.",tabindex:"-1"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full lg:w-1/2"},[s("ui-input-group",{attrs:{id:"fieldset-name",name:"name",label:"Name",help:"What should this fieldset be called?",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),s("div",{staticClass:"col w-full lg:w-1/2"},[s("ui-slug-group",{attrs:{id:"fieldset-handle",name:"handle",label:"Handle",help:"A developer-friendly identifier.",monospaced:"",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)])]),e._v(" "),s("section-card",{attrs:{id:"fieldset_panel_fields",grid:!1,title:"Fields",description:"Manage fields for this fieldset.",tabindex:"-1"}},[s("field-builder",{attrs:{handle:"fieldset"},model:{value:e.form.fields,callback:function(t){e.$set(e.form,"fields",t)},expression:"form.fields"}})],1)],1)}),[],!1,null,null,null).exports}}]);