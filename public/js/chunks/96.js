(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{Y4gr:function(e,t,n){"use strict";n.r(t);var a=n("ke3Z"),o={head:{title:function(){return{inner:this.menu.name||"Loading..."}}},data:function(){return{menu:{},nodes:[],saving:!1,before:null,after:null,form:new a.a({name:"",url:"",new_window:0})}},computed:{options:function(){return _.map(this.nodes,(function(e){return{label:e.name,value:e.id}}))}},methods:{add:function(e){var t=this;this.saving=!0,this.form.post("/api/menus/"+this.menu.id+"/nodes").then((function(e){t.fetchNodes().then((function(e){t.reset(),t.saving=!1,toast("Menu node successfully added","success")}))})).catch((function(e){toast(e.message,"failed")}))},save:function(){var e=this;this.saving=!0;var t={};_.each(this.nodes,(function(e,n){t[e.id]={order:n+1}})),axios.post("/api/menus/"+this.menu.id+"/reorder",{nodes:t}).then((function(t){e.saving=!1,toast("Menu nodes successfully reordered.","success")}))},fetchNodes:function(){var e=this;return axios.get("/api/menus/"+this.menu.id).then((function(t){e.nodes=t.data.data.nodes}))},reset:function(){this.form.name="",this.form.url="",this.form.new_window=0},destroy:function(e){var t=this;axios.delete("/api/menus/"+this.menu.id+"/nodes/"+e).then((function(e){t.fetchNodes().then((function(){toast("Menu node successfully deleted.","success")}))}))},moveBefore:function(e){var t=this;axios.post("/api/menus/"+this.menu.id+"/nodes/move/before",{move:e,before:this.before}).then((function(e){t.fetchNodes().then((function(){t.before=null,toast("Menu node successfully moved.","success")}))}))},moveAfter:function(e){var t=this;axios.post("/api/menus/"+this.menu.id+"/nodes/move/after",{move:e,after:this.after}).then((function(e){t.fetchNodes().then((function(){t.after=null,toast("Menu node successfully moved.","success")}))}))}},beforeRouteEnter:function(e,t,n){axios.get("/api/menus/"+e.params.menu).then((function(e){n((function(t){t.menu=e.data.data,t.nodes=e.data.data.nodes,t.$emit("updateHead")}))}))},beforeRouteUpdate:function(e,t,n){var a=this;axios.get("/api/menus/"+e.params.menu).then((function(e){a.menu=e.data.data,a.nodes=e.data.data.nodes,a.$emit("updateHead")})),n()}},s=n("KHd+"),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[n("div",{staticClass:"card"},[n("div",{staticClass:"card__header"},[n("h3",{staticClass:"card__title"},[e._v("Custom URL")])]),e._v(" "),n("div",{staticClass:"card__body"},[n("p-input",{attrs:{name:"name",label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("p-input",{attrs:{name:"url",label:"URL"},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}}),e._v(" "),n("p-select",{attrs:{name:"new_window",label:"Open link where",help:"Determine where the link should open.",options:[{label:"New Window",value:1},{label:"Same Window",value:0}]},model:{value:e.form.new_window,callback:function(t){e.$set(e.form,"new_window",t)},expression:"form.new_window"}}),e._v(" "),n("p-button",{attrs:{theme:"primary"},on:{click:function(t){return t.preventDefault(),e.add("custom")}}},[e._v("Add")])],1)])]},proxy:!0}])},[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:"anchor"}},[e._v(e._s(e.menu.name))])],1),e._v(" "),n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},[n("router-link",{staticClass:"button",attrs:{to:{name:"menus"}}},[e._v("Go Back")]),e._v(" "),n("p-button",{attrs:{theme:"primary",disabled:e.saving},on:{click:function(t){return t.preventDefault(),e.save(t)}}},[e._v("Save")])],1)]),e._v(" "),0==e.nodes.length?n("div",{staticClass:"card"},[n("div",{staticClass:"card__body text-center"},[n("p",[e._v("Add your first node to get started.")])])]):n("div",{staticClass:"table__wrapper"},[n("table",{staticClass:"table"},[n("thead",[n("tr",[n("th",{staticClass:"w-20"}),e._v(" "),n("th",[e._v("Name")]),e._v(" "),n("th",[e._v("URL")]),e._v(" "),n("th",[e._v("Type")]),e._v(" "),n("th",{staticClass:"w-20"})])]),e._v(" "),n("p-sortable-list",{staticClass:"sortable-list",model:{value:e.nodes,callback:function(t){e.nodes=t},expression:"nodes"}},[n("tbody",e._l(e.nodes,(function(t){return n("p-sortable-item",{key:t.id},[n("tr",[n("td",{staticClass:"w-8"},[n("p-sortable-handle",{staticClass:"mr-6 text-gray-400"},[n("div",{staticClass:"w-6 h-6 flex items-center justify-center"},[n("fa-icon",{staticClass:"fa-fw",attrs:{icon:["fas","grip-vertical"]}})],1)])],1),e._v(" "),n("td",[n("p-status",{staticClass:"mr-2",attrs:{value:t.status}}),e._v(" "),n("router-link",{attrs:{to:{name:"menu.nodes.edit",params:{menu:e.menu.id,node:t.id}}}},[e._v(e._s(t.name))]),e._v(" "),t.new_window?n("fa-icon",{staticClass:"fa-fw text-gray-500 text-xs",attrs:{icon:["fas","external-link-alt"]}}):e._e()],1),e._v(" "),n("td",[n("span",{staticClass:"text-sm text-gray-600"},[e._v("\n                                    "+e._s(t.url)+"\n                                ")])]),e._v(" "),n("td",[n("span",{staticClass:"text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none"},[e._v("custom")])]),e._v(" "),n("td",{staticClass:"actions"},[n("div",{staticClass:"draggable__actions"},[n("p-actions",{key:"node_"+t.id+"_actions",attrs:{right:"",id:"node_"+t.id+"_actions"}},[n("p-dropdown-link",{attrs:{to:{name:"menu.nodes.edit",params:{menu:e.menu.id,node:t.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),n("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:move-before",value:t,expression:"node",arg:"move-before"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                            Move before...\n                                        ")]),e._v(" "),n("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:move-after",value:t,expression:"node",arg:"move-after"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                            Move after...\n                                        ")]),e._v(" "),n("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-node",value:t,expression:"node",arg:"delete-node"}],attrs:{classes:"link--danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                                            Delete\n                                        ")])],1)],1)])])])})),1)])],1)]),e._v(" "),e._v(" "),n("portal",{attrs:{to:"modals"}},[n("p-modal",{key:"delete_node",attrs:{name:"delete-node",title:"Delete Node"},scopedSlots:e._u([{key:"footer",fn:function(t){return[n("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-node",arg:"delete-node"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(n){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),n("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-node",arg:"delete-node"}]},[e._v("Cancel")])]}}])},[n("p",[e._v("Are you sure you want to permenantly delete this node?")])]),e._v(" "),n("p-modal",{key:"move_before",attrs:{name:"move-before",title:"Move before..."},scopedSlots:e._u([{key:"footer",fn:function(t){return[n("p-button",{directives:[{name:"modal",rawName:"v-modal:move-before",arg:"move-before"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(n){return e.moveBefore(t.data.id)}}},[e._v("Move")]),e._v(" "),n("p-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],on:{click:function(t){e.before=null}}},[e._v("Cancel")])]}}])},[[n("p",[e._v("Which node would you like to move before?")]),e._v(" "),n("p-select",{attrs:{name:"before",label:"Node",options:e.options},model:{value:e.before,callback:function(t){e.before=t},expression:"before"}})]],2),e._v(" "),n("p-modal",{key:"move_after",attrs:{name:"move-after",title:"Move after..."},scopedSlots:e._u([{key:"footer",fn:function(t){return[n("p-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(n){return e.moveAfter(t.data.id)}}},[e._v("Move")]),e._v(" "),n("p-button",{directives:[{name:"modal",rawName:"v-modal:move-after",arg:"move-after"}],on:{click:function(t){e.after=null}}},[e._v("Cancel")])]}}])},[[n("p",[e._v("Which node would you like to move after?")]),e._v(" "),n("p-select",{attrs:{name:"after",label:"Node",options:e.options},model:{value:e.after,callback:function(t){e.after=t},expression:"after"}})]],2)],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);