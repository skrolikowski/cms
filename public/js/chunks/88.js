(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"09eI":function(t,e,r){"use strict";r.r(e);var o={head:{title:function(){return{inner:"Forms"}}},data:function(){return{endpoint:"/datatable/forms"}},methods:{destroy:function(t){axios.delete("/api/forms/"+t).then((function(t){toast("Form successfully deleted.","success"),proton().$emit("refresh-datatable-forms")}))}}},a=r("KHd+"),n=Object(a.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"paper-plane"}},[t._v("Forms")])],1),t._v(" "),r("portal",{attrs:{to:"actions"}},[r("div",{staticClass:"buttons"},[r("router-link",{staticClass:"button",attrs:{to:{name:"inbox"}}},[t._v("View Inbox")]),t._v(" "),r("router-link",{staticClass:"button",attrs:{to:{name:"forms.create"}}},[t._v("Create Form")])],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("p-table",{key:"forms_table",attrs:{endpoint:t.endpoint,id:"forms","sort-by":"name","primary-key":"handle"},scopedSlots:t._u([{key:"name",fn:function(e){return[r("p-status",{staticClass:"mr-2",attrs:{value:e.record.status}}),t._v(" "),r("router-link",{attrs:{to:{name:"forms.edit",params:{form:e.record.id}}}},[t._v(t._s(e.record.name))])]}},{key:"handle",fn:function(e){return[r("code",[t._v(t._s(e.record.handle))])]}},{key:"description",fn:function(e){return[r("span",{staticClass:"text-gray-800 text-sm"},[t._v(t._s(e.record.description))])]}},{key:"actions",fn:function(e){return[r("p-actions",{key:"form_"+e.record.id+"_actions",attrs:{id:"form_"+e.record.id+"_actions"}},[r("p-dropdown-link",{attrs:{to:{name:"forms.edit",params:{form:e.record.id}}}},[t._v("Edit")]),t._v(" "),r("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-form",value:e.record,expression:"table.record",arg:"delete-form"}],attrs:{classes:"link--danger"},on:{click:function(t){t.preventDefault()}}},[t._v("\n                            Delete\n                        ")])],1)]}}])})],1)]),t._v(" "),r("portal",{attrs:{to:"modals"}},[r("p-modal",{key:"delete_form",attrs:{name:"delete-form",title:"Delete Form"},scopedSlots:t._u([{key:"footer",fn:function(e){return[r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-form",arg:"delete-form"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(r){return t.destroy(e.data.id)}}},[t._v("Delete")]),t._v(" "),r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-form",arg:"delete-form"}]},[t._v("Cancel")])]}}])},[r("p",[t._v("Are you sure you want to permenantly delete this form?")])])],1)],1)}),[],!1,null,null,null);e.default=n.exports}}]);