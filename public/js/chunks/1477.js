(self.webpackChunkfusioncms=self.webpackChunkfusioncms||[]).push([[1477],{79:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});const s={props:{field:{type:Object,required:!0},value:{required:!1,default:null},errors:{type:Object,required:!1,default:function(){}}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{hasError:function(e){return this.errors&&this.errors.has(e)},errorMessage:function(e){return this.hasError(e)?this.errors.get(e):""}}}},1477:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var s=n(6104),i=n.n(s);const l={name:"list-fieldtype",mixins:[n(79).Z],data:function(){return{newItem:""}},watch:{model:{deep:!0,handler:function(e){this.$emit("input",e)}}},methods:{new:function(e){return{_id:i()(),value:e}},add:function(){this.newItem&&(this.model.push(this.new(this.newItem)),this.newItem="")},remove:function(e){this.model=_.filter(this.model,(function(t){return t._id!==e}))}},created:function(){_.isEmpty(this.value)&&(this.model=[])}};const r=(0,n(1900).Z)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ui-field-group",{attrs:{name:e.field.handle,fieldId:e.field.handle+"-field",label:e.field.name,help:e.field.help,hasError:e.hasError(e.field.handle),errorMessage:e.errorMessage(e.field.handle)}},[e.model&&e.model.length>0?n("table",{staticClass:"table"},[n("ui-sortable-list",{class:e.field.handle+"-sortable-list",model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},[n("tbody",e._l(e.model,(function(t){return n("ui-sortable-item",{key:t._id},[n("tr",[n("td",{staticClass:"w-8"},[n("ui-sortable-handle",{staticClass:"cursor-move inline-block"},[n("fa-icon",{staticClass:"handle fa-fw text-gray-400 mr-3",attrs:{icon:"grip-vertical"}})],1)],1),e._v(" "),n("td",[n("ui-input-group",{attrs:{name:"value"},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"item.value"}})],1),e._v(" "),n("td",{staticClass:"w-16"},[n("ui-button",{attrs:{icon:""},on:{click:function(n){return n.preventDefault(),e.remove(t._id)}}},[n("fa-icon",{attrs:{icon:"times"}}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Destroy")])],1)],1)])])})),1)])],1):n("div",{staticClass:"help"},[e._v("Your list is empty.")]),e._v(" "),n("table",{staticClass:"table mt-3"},[n("tbody",[n("tr",[n("td",{staticClass:"w-8"}),e._v(" "),n("td",[n("ui-input-group",{attrs:{name:"value",placeholder:"Add new item..."},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.add(t)}},model:{value:e.newItem,callback:function(t){e.newItem=t},expression:"newItem"}})],1),e._v(" "),n("td",{staticClass:"w-16"},[n("ui-button",{attrs:{icon:""},on:{click:function(t){return t.preventDefault(),e.add(t)}}},[n("fa-icon",{attrs:{icon:"plus"}}),e._v(" "),n("span",{staticClass:"sr-only"},[e._v("Add")])],1)],1)])])])])}),[],!1,null,null,null).exports}}]);