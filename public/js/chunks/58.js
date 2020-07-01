(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{Ft8u:function(e,t,r){"use strict";var o={data:function(){return{groups:{},groupOptions:[]}},props:{form:{type:Object,required:!0}},watch:{"form.module":function(e){this.setFormGroup(e)}},methods:{setFormGroup:function(e){this.groupOptions=[],this.form.group=0,_.has(this.groups,e)&&(this.groupOptions=this.groups[e],0==this.form.group&&(this.form.group=_.head(this.groupOptions).value))}},created:function(){axios.all([axios.get("/api/taxonomies"),axios.get("/api/matrices")]).then(axios.spread(function(e,t){this.groups.taxonomies=_.map(e.data.data,(function(e){return{label:e.name,value:e.id}})),this.groups.matrices=_.reject(t.data.data,["type","single"]),this.groups.matrices=_.map(this.groups.matrices,(function(e){return{label:e.name,value:e.id}})),this.setFormGroup(this.form.module)}.bind(this)))}},a=r("KHd+"),s=Object(a.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col w-full xxl:w-2/3"},[r("p-input",{attrs:{name:"name",label:"Name",help:"What this import feed be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-slug",{attrs:{name:"handle",label:"Handle",help:"Unique identifier to index this import feed.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),r("p-input",{attrs:{name:"source",label:"Source",help:"Google Sheets sheet reference URL.",autocomplete:"off",required:"","has-error":e.form.errors.has("source"),"error-message":e.form.errors.get("source")},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}}),e._v(" "),r("p-select",{attrs:{name:"module",label:"Module",help:"Which module do you wish to import to?",options:[{label:"Users",value:"users"},{label:"Taxonomies",value:"taxonomies"},{label:"Matrices",value:"matrices"}],"has-error":e.form.errors.has("module"),"error-message":e.form.errors.get("module")},model:{value:e.form.module,callback:function(t){e.$set(e.form,"module",t)},expression:"form.module"}}),e._v(" "),e.groupOptions.length>0?r("p-select",{attrs:{name:"group",label:"Group",help:"Which group do you wish to import to?",options:e.groupOptions,"has-error":e.form.errors.has("group"),"error-message":e.form.errors.get("group")},model:{value:e.form.group,callback:function(t){e.$set(e.form,"group",t)},expression:"form.group"}}):e._e(),e._v(" "),r("p-checkbox-group",{attrs:{label:"Strategy",help:"Strategy used when matching record is detected or missing from import (based on an unique identifier).","has-error":e.form.errors.has("strategy"),"error-message":e.form.errors.get("strategy")}},[r("p-checkbox",{attrs:{name:"create",id:"create","native-value":"create"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tCreate "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Adds new elements if they do not already exist.")])]),e._v(" "),r("p-checkbox",{attrs:{name:"update",id:"update","native-value":"update"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tUpdate "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Updates elements when matching record is found.")])]),e._v(" "),r("p-checkbox",{attrs:{name:"disable",id:"disable","native-value":"disable"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tDisable "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Disables any elements that are missing from the import.")])]),e._v(" "),r("p-checkbox",{attrs:{name:"delete",id:"delete","native-value":"delete"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tDelete "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Deletes any elements that are missing from the import.")])])],1)],1)])])],1)}),[],!1,null,null,null);t.a=s.exports},gxcE:function(e,t,r){"use strict";r.r(t);var o=r("nUVr"),a={head:{title:function(){return{inner:"Create a Import"}}},data:function(){return{form:new o.a({name:"",handle:"",source:"",schedule:null,module:"users",group:0,strategy:[],backup:!1},!0)}},components:{"shared-form":r("Ft8u").a},methods:{submit:function(){var e=this;this.form.post("/api/imports").then((function(t){toast("Import successfully saved","success"),e.$router.push("/importer/mapping/".concat(t.data.id))})).catch((function(e){toast(e.message,"failed")}))}},mounted:function(){this.$nextTick((function(){this.form.resetChangeListener()}))}},s=r("KHd+"),n=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"ship"}},[e._v("Create Import")])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button mr-3",attrs:{to:{name:"importer"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save & Continue")])],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("shared-form",{attrs:{form:e.form}})],1)])],1)}),[],!1,null,null,null);t.default=n.exports}}]);