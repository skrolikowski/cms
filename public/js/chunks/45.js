(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"4DQ5":function(e,t,l){"use strict";l.r(t);var s={name:"us-state-fieldtype-settings",mixins:[l("EACl").a]},i=l("KHd+"),r=Object(i.a)(s,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"flex flex-wrap justify-between"},[l("p-select",{staticClass:"mr-5 w-full lg:w-2/5",attrs:{name:"settings.multiple",label:"Multi Select",help:"Should this field allow multiple options to be selected?",autocomplete:"off",options:[{label:"No",value:0},{label:"Yes",value:1}],"has-error":e.errors.has("settings.multiple"),"error-message":e.errors.get("settings.multiple")},model:{value:e.settings.multiple,callback:function(t){e.$set(e.settings,"multiple",t)},expression:"settings.multiple"}}),e._v(" "),l("p-toggle",{staticClass:"mr-5 w-full lg:w-2/5",attrs:{name:"settings.filterable",label:"Filterable",help:"Should this field offer a search filter?",checked:!!e.settings.filterable,"has-error":e.errors.has("settings.filterable"),"error-message":e.errors.get("settings.filterable")},model:{value:e.settings.filterable,callback:function(t){e.$set(e.settings,"filterable",t)},expression:"settings.filterable"}})],1)}),[],!1,null,null,null);t.default=r.exports},EACl:function(e,t,l){"use strict";t.a={props:{value:{type:Object,required:!0}},computed:{settings:function(){return this.value.settings||{}},errors:function(){return this.value.errors||{}}}}}}]);