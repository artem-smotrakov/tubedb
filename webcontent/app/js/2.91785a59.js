(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{2915:function(e,t,s){"use strict";s("6462")},"39b4":function(e,t,s){"use strict";s("8865")},"3a1b":function(e,t,s){"use strict";var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-toolbar",{staticClass:"title fit row wrap justify-between"},[s("pages-menu",{attrs:{active:e.active}}),s("div",{staticClass:"text-h5"},[e._v(e._s(e.title))]),s("div")],1)},i=[],l=(s("e6cf"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-btn",{attrs:{color:"primary",round:"",icon:"menu"}},[s("q-menu",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[s("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.items,(function(t){return s("q-item",{key:t.title,class:{activeitem:e.active===t.link},attrs:{to:t.link,clickable:""}},[s("q-item-section",[e._v("\r\n          "+e._s(t.title)+"\r\n        ")])],1)})),1)],1)],1)}),n=[],a={name:"pages-menu",props:["active"],data(){return{items:[{title:"Overview",link:"/overview"},{title:"Metadata",link:"/model"},{title:"Diagrams",link:"/diagram"}]}},computed:{},methods:{},watch:{},async mounted(){}},r=a,d=(s("2915"),s("2877")),c=s("9c40"),u=s("4e73"),m=s("1c1c"),h=s("66e5"),p=s("4074"),g=s("eebe"),v=s.n(g),f=Object(d["a"])(r,l,n,!1,null,"2f774f3d",null),b=f.exports;v()(f,"components",{QBtn:c["a"],QMenu:u["a"],QList:m["a"],QItem:h["a"],QItemSection:p["a"]});var q={name:"pages-toolbar",props:["title","active"],components:{pagesMenu:b},data(){return{}},computed:{},methods:{},watch:{},async mounted(){}},M=q,P=(s("611f"),s("65c6")),y=Object(d["a"])(M,o,i,!1,null,"9fde52e0",null);t["a"]=y.exports;v()(y,"components",{QToolbar:P["a"]})},"4dda":function(e,t,s){},"5e02":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-layout",{attrs:{view:"hHh LpR fFf"}},[s("q-header",{staticClass:"bg-grey-7 text-grey-4",attrs:{reveal:"",elevated:""}},[s("pages-toolbar",{attrs:{title:"TubeDB Diagram",active:"/diagram"}})],1),s("q-drawer",{attrs:{"show-if-above":"",side:"left",behavior:"desktop","content-class":"bg-grey-4",width:e.drawerWidth}},[s("div",{staticClass:"fit row"},[void 0!==e.model?s("q-scroll-area",{staticClass:"col-grow"},[s("q-list",[s("q-item",{attrs:{tag:"label"}},[s("q-item-section",[s("q-select",{attrs:{options:["none","hour","day","week","month","year"],label:"Aggregation by time","stack-label":"",borderless:"",dense:!0,"options-dense":!0,"transition-show":"scale","transition-hide":"scale"},model:{value:e.timeAggregation,callback:function(t){e.timeAggregation=t},expression:"timeAggregation"}})],1)],1),s("q-item",{attrs:{tag:"label"}},[s("q-item-section",[s("q-select",{attrs:{options:e.qualities,label:"Quality checks","stack-label":"",borderless:"",dense:!0,"options-dense":!0,"option-disable":function(t){return"none"===e.timeAggregation&&"empirical"===t},"transition-show":"scale","transition-hide":"scale"},model:{value:e.quality,callback:function(t){e.quality=t},expression:"quality"}})],1)],1),s("q-item",{staticStyle:{"user-select":"none"},attrs:{tag:"label",disable:"none"===e.timeAggregation}},[s("q-item-section",{attrs:{avatar:""}},[s("q-checkbox",{attrs:{color:"teal",size:"xs",disable:"none"===e.timeAggregation},model:{value:e.interpolation,callback:function(t){e.interpolation=t},expression:"interpolation"}})],1),"none"!==e.timeAggregation?s("q-item-section",[s("q-item-label",[e._v("Interpolation")])],1):s("q-item-section",[s("q-item-label",[e._v("(Interpolation not available for raw data.)")])],1)],1),s("q-separator"),s("q-item",[s("timeseries-selector",{attrs:{multiTimeseries:e.multiTimeseries,timeAggregation:e.timeAggregation},on:{"plot-sensor-changed":function(t){e.selectedPlots=t.plots,e.selectedSensors=t.sensors}}})],1),s("q-separator"),e.plotSensorList.length>0?[e._v("\n          Selected timeseries:\n        "),e._l(e.plotSensorList,(function(t){return s("q-item",{key:t.plot+"/"+t.sensor},[e._v("\n          "+e._s(t.plot)+" / "+e._s(t.sensor)+"\n        ")])}))]:e._e()],2)],1):s("div",{staticClass:"fit"},[e.modelLoading?s("div",[e._v("Loading metadata...")]):e.modelError?s("div",[e._v("Error loading metadata. "),s("q-btn",{on:{click:function(t){return e.$store.dispatch("model/refresh")}}},[e._v("try again")])],1):s("div",[e._v("Metadata not loaded.")])]),s("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.prevent.mouse",value:e.onChangeDrawerWidth,expression:"onChangeDrawerWidth",modifiers:{prevent:!0,mouse:!0}}],staticClass:"drawerChanger"})],1)]),s("q-page-container",[s("div",{staticStyle:{position:"relative"}},[e.dataRequestSentCounter>e.dataRequestReceivedCounter?s("div",{staticStyle:{position:"absolute",top:"50px",left:"50px"}},[e._v("\n      Waiting for data ...\n    ")]):e._e(),void 0!==e.dataRequestError?s("div",{staticStyle:{position:"absolute",top:"100px",left:"100px"}},[e._v("\n      "+e._s(e.dataRequestError)+"\n    ")]):e._e(),s("div",{staticStyle:{"margin-top":"10px","margin-left":"10px"}},[s("b",[e._v("Inspect timeseries values")]),e._v(": Move mouse over diagram to show time / measurement values.\n      "),s("br"),s("b",[e._v("Zoom in/out")]),e._v(": Place mouse on diagram and rotate the mouse wheel.\n    ")]),s("timeseries-diagram",{attrs:{data:e.data,timeAggregation:e.timeAggregation}})],1)])],1)},i=[],l=(s("fb6a"),s("ace4"),s("e6cf"),s("cfc3"),s("143c"),s("ddb0"),s("ded3")),n=s.n(l),a=s("2f62"),r=s("3a1b"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-item-section",[void 0!==e.model?s("q-list",[s("q-item",{attrs:{tag:"label"}},[s("q-item-section",[s("q-select",{attrs:{options:e.projects,"option-value":"id",for:"id","option-label":"title",label:"Projects","stack-label":"",borderless:"",dense:"","options-dense":"","options-cover":"",multiple:e.multiTimeseries,"transition-show":"scale","transition-hide":"scale"},scopedSlots:e._u([e.selectedProjects.length>0?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.selectedProjectsModel=null}}})]},proxy:!0}:null],null,!0),model:{value:e.selectedProjectsModel,callback:function(t){e.selectedProjectsModel=t},expression:"selectedProjectsModel"}})],1)],1),e.selectedProjects.length>0?[s("q-item",{attrs:{tag:"label"}},[s("q-item-section",[s("q-select",{attrs:{options:e.groups,"option-value":"id",for:"id","option-label":"title",label:"Groups","stack-label":"",borderless:"",dense:"","options-dense":"","options-cover":"",multiple:e.multiTimeseries,"transition-show":"scale","transition-hide":"scale"},scopedSlots:e._u([e.selectedGroups.length>0?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.selectedGroupsModel=null}}})]},proxy:!0}:null],null,!0),model:{value:e.selectedGroupsModel,callback:function(t){e.selectedGroupsModel=t},expression:"selectedGroupsModel"}})],1)],1),e.selectedGroups.length>0?[s("q-item",{attrs:{tag:"label"}},[s("q-item-section",[s("q-select",{attrs:{options:e.plots,label:"Plots","stack-label":"",borderless:"",dense:"","options-dense":"","options-cover":"",multiple:e.multiTimeseries,"transition-show":"scale","transition-hide":"scale"},scopedSlots:e._u([e.selectedPlots.length>0?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.selectedPlotsModel=null}}})]},proxy:!0}:null],null,!0),model:{value:e.selectedPlotsModel,callback:function(t){e.selectedPlotsModel=t},expression:"selectedPlotsModel"}}),1===e.plotstations.length&&1===e.selectedPlots.length&&e.plotstations[0].id!==e.selectedPlots[0].id?s("q-item-label",{attrs:{caption:""}},[e._v("\r\n              "+e._s(e.plotstations[0].id)+"\r\n            ")]):e._e()],1)],1),e.selectedPlots.length>0?[e.plotstations.length>1&&e.selectedPlotsHaveMultipleStations?s("q-item",{attrs:{tag:"label"}},[s("q-item-section",[s("q-select",{attrs:{options:e.plotstations,"option-value":"id",for:"id","option-label":"id",label:"Plot-Stations","stack-label":"",borderless:"",dense:"","options-dense":"","options-cover":"",multiple:e.multiTimeseries,"transition-show":"scale","transition-hide":"scale"},scopedSlots:e._u([null!==e.selectedPlotstationsModel?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.selectedPlotstationsModel=null}}})]},proxy:!0}:null,{key:"option",fn:function(t){var o=t.itemProps,i=t.itemEvents,l=t.opt;return[s("q-item",e._g(e._b({staticClass:"selection-not-active",attrs:{"active-class":"selection-active"}},"q-item",o,!1),i),[s("q-item-section",[l.merged?s("q-item-label",[s("b",[e._v(e._s(l.plot))]),e._v(" (merged)")]):l.plot===l.station?s("q-item-label",[s("b",[e._v(e._s(l.plot))])]):s("q-item-label",[e._v(e._s(l.plot)+"   "),s("b",[e._v(e._s(l.station))])])],1)],1)]}}],null,!0),model:{value:e.selectedPlotstationsModel,callback:function(t){e.selectedPlotstationsModel=t},expression:"selectedPlotstationsModel"}})],1)],1):e._e(),e.selectedPlotstations.length>0?[s("q-item",{attrs:{tag:"label"}},[e.sensors.length>0?s("q-item-section",[s("q-select",{attrs:{options:e.sensors,"option-value":"id",for:"id","option-label":"id",label:"Sensors","stack-label":"",borderless:"",dense:"","options-dense":"","options-cover":"",multiple:e.multiTimeseries,"transition-show":"scale","transition-hide":"scale"},scopedSlots:e._u([e.selectedSensors.length>0?{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:"cancel"},on:{click:function(t){t.stopPropagation(),e.selectedSensorsModel=null}}})]},proxy:!0}:null,{key:"option",fn:function(t){var o=t.itemProps,i=t.itemEvents,l=t.opt;return[s("q-item",e._g(e._b({staticClass:"selection-not-active",attrs:{title:l.description,disable:"none"!==e.timeAggregation&&"none"===l.aggregation_hour,"active-class":"selection-active"}},"q-item",o,!1),i),[s("q-item-section",["none"===l.aggregation_hour?s("q-item-label",{staticClass:"text-deep-orange-10"},[e._v(e._s(l.id)+" (raw)")]):l.derived?s("q-item-label",{staticClass:"text-teal-10"},[e._v(e._s(l.id))]):s("q-item-label",{staticClass:"text-black"},[e._v(e._s(l.id))])],1)],1)]}}],null,!0),model:{value:e.selectedSensorsModel,callback:function(t){e.selectedSensorsModel=t},expression:"selectedSensorsModel"}})],1):e._e(),0===e.sensors.length?s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"info",color:"blue-14"}})],1):e._e(),0===e.sensors.length?s("q-item-section",[e._v("No sensors available for selected plots / stations.")]):e._e()],1),e.selectedSensors.length>0?void 0:0!==e.sensors.length?s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"error_outline",color:"red-14"}})],1),s("q-item-section",[e._v("No sensor selected.")])],1):e._e()]:s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"error_outline",color:"red-14"}})],1),s("q-item-section",[e._v("No plot-station selected.")])],1)]:s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"error_outline",color:"red-14"}})],1),s("q-item-section",[e._v("No plot selected.")])],1)]:s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"error_outline",color:"red-14"}})],1),s("q-item-section",[e._v("No group selected.")])],1)]:s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"error_outline",color:"red-14"}})],1),s("q-item-section",[e._v("No project selected.")])],1)],2):e._e()],1)},c=[],u=(s("5db7"),s("4e82"),s("73d9"),{name:"timeseries-selector",props:["multiTimeseries","timeAggregation"],data(){return{selectedProjectsModel:null,selectedGroupsModel:null,selectedPlotsModel:null,selectedPlotstationsModel:null,selectedSensorsModel:null}},computed:n()(n()(n()({},Object(a["c"])({model:e=>e.model.data,modelLoading:e=>e.model.loading,modelError:e=>e.model.error})),Object(a["b"])({api:"api",apiGET:"apiGET",apiPOST:"apiPOST"})),{},{selectedProjects(){return null===this.selectedProjectsModel?[]:this.multiTimeseries?this.selectedProjectsModel:[this.selectedProjectsModel]},selectedGroups(){return null===this.selectedGroupsModel?[]:this.multiTimeseries?this.selectedGroupsModel:[this.selectedGroupsModel]},selectedPlots(){return null===this.selectedPlotsModel?[]:this.multiTimeseries?this.selectedPlotsModel.map((e=>this.model.plots[e])):[this.model.plots[this.selectedPlotsModel]]},selectedPlotstations(){return this.selectedPlotsHaveMultipleStations?null===this.selectedPlotstationsModel?0===this.plotstations.length?[]:[this.plotstations[0]]:this.multiTimeseries?this.selectedPlotstationsModel:[this.selectedPlotstationsModel]:this.selectedPlots.map((e=>this.plotstations.find((t=>t.plot===e.id))))},selectedSensors(){return null===this.selectedSensorsModel?[]:this.multiTimeseries?this.selectedSensorsModel:[this.selectedSensorsModel]},projects(){if(void 0===this.model)return[];let e=Object.values(this.model.projects);return e.sort(((e,t)=>{var s=e.title.toLowerCase(),o=t.title.toLowerCase();return s<o?-1:s>o?1:0})),e},groups(){if(void 0===this.model||0===this.selectedProjects.length)return[];var e=[];for(let t of this.selectedProjects){let s=t.groups.map((e=>this.model.groups[e]));e=e.concat(s)}return e.sort(((e,t)=>{var s=e.title.toLowerCase(),o=t.title.toLowerCase();return s<o?-1:s>o?1:0})),e},plots(){if(void 0===this.model||0===this.selectedGroups.length)return[];var e=new Set;for(let s of this.selectedGroups)for(let t of s.plots)e.add(t);let t=[...e];return t.sort(((e,t)=>{var s=e.toLowerCase(),o=t.toLowerCase();return s<o?-1:s>o?1:0})),t},selectedPlotsHaveMultipleStations(){return this.selectedPlots.some((e=>e.stations.length>1))},plotstations(){return this.selectedPlots.flatMap((e=>e.plotstations))},sensors(){if(void 0===this.model||void 0===this.selectedPlotstations||0===this.selectedPlotstations.length)return[];var e=new Set;for(let s of this.selectedPlotstations)for(let t of s.sensorSet)e.add(t);let t=[...e].map((e=>this.model.sensors[e]));return t.sort(((e,t)=>{var s=e.id.toLowerCase(),o=t.id.toLowerCase();return s<o?-1:s>o?1:0})),t}}),methods:{onPlotSensorChanged(){this.$emit("plot-sensor-changed",{plots:this.selectedPlotstations,sensors:this.selectedSensors})}},watch:{projects:{handler(){this.selectedProjectsModel=null,1===this.projects.length&&(this.multiTimeseries?this.selectedProjectsModel=[this.projects[0]]:this.selectedProjectsModel=this.projects[0])},immediate:!0},groups:{handler(){0===this.groups.length?this.selectedGroupsModel=null:1===this.groups.length?this.multiTimeseries?this.selectedGroupsModel=[this.groups[0]]:this.selectedGroupsModel=this.groups[0]:null!==this.selectedGroupsModel&&(this.multiTimeseries?(this.selectedGroupsModel=this.selectedGroupsModel.filter((e=>this.groups.some((t=>t.id===e.id)))),0===this.selectedGroupsModel.length&&(this.selectedGroupsModel=null)):this.selectedGroupsModel=this.groups.some((e=>e.id===this.selectedGroupsModel.id))?this.selectedGroupsModel:null)},immediate:!0},plots:{handler(){0===this.plots.length?this.selectedPlotsModel=null:1===this.plots.length?this.multiTimeseries?this.selectedPlotsModel=[this.plots[0]]:this.selectedPlotsModel=this.plots[0]:null!==this.selectedPlotsModel&&(this.multiTimeseries?(this.selectedPlotsModel=this.selectedPlotsModel.filter((e=>this.plots.some((t=>t===e)))),0===this.selectedPlotsModel.length&&(this.selectedPlotsModel=null)):this.selectedPlotsModel=this.plots.some((e=>e===this.selectedPlotsModel))?this.selectedPlotsModel:null)},immediate:!0},sensors:{handler(){0===this.sensors.length?this.selectedSensorsModel=null:1===this.sensors.length?this.multiTimeseries?this.selectedSensorsModel=[this.sensors[0]]:this.selectedSensorsModel=this.sensors[0]:null!==this.selectedSensorsModel&&(this.multiTimeseries?(this.selectedSensorsModel=this.selectedSensorsModel.filter((e=>this.sensors.some((t=>t.id===e.id)))),0===this.selectedSensorsModel.length&&(this.selectedSensorsModel=null)):this.selectedSensorsModel=this.sensors.some((e=>e.id===this.selectedSensorsModel.id))?this.selectedSensorsModel:null)},immediate:!0},selectedPlots:{handler(e,t){let s=e.filter((e=>void 0===t||t.some((t=>e.id===t.id)))),o=e.filter((e=>void 0===t||!t.some((t=>e.id===t.id))));null!==this.selectedPlotstationsModel&&(o=this.multiTimeseries?o.filter((e=>!this.selectedPlotstationsModel.some((t=>t.plot===e.id)))):o.filter((e=>this.selectedPlotstationsModel.plot!==e.id)));let i=o.map((e=>this.plotstations.find((t=>t.plot===e.id)))),l=[];null!==this.selectedPlotstationsModel&&(this.multiTimeseries?l=this.selectedPlotstationsModel.filter((e=>s.some((t=>e.plot===t.id)))):s.some((e=>this.selectedPlotstationsModel.plot===e.id))&&(l=[this.selectedPlotstationsModel])),l=l.concat(i),l.length>0?this.multiTimeseries?this.selectedPlotstationsModel=l:this.selectedPlotstationsModel=l[0]:this.selectedPlotstationsModel=null},immediate:!0},selectedPlotstations(){this.$nextTick((()=>this.onPlotSensorChanged()))},selectedSensors(){this.$nextTick((()=>this.onPlotSensorChanged()))},timeAggregation(e,t){"none"===t&&null!==this.selectedSensorsModel&&(this.multiTimeseries?this.selectedSensorsModel=this.selectedSensorsModel.filter((e=>"none"!==e.aggregation_hour)):"none"===this.selectedSensorsModel.aggregation_hour&&(this.selectedSensorsModel=null))}},async mounted(){this.$store.dispatch("model/init")}}),m=u,h=(s("aa06"),s("2877")),p=s("4074"),g=s("1c1c"),v=s("66e5"),f=s("ddd8"),b=s("0016"),q=s("0170"),M=s("eebe"),P=s.n(M),y=Object(h["a"])(m,d,c,!1,null,"789e1f75",null),x=y.exports;P()(y,"components",{QItemSection:p["a"],QList:g["a"],QItem:v["a"],QSelect:f["a"],QIcon:b["a"],QItemLabel:q["a"]});var S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"diagram"},[s("q-resize-observer",{attrs:{debounce:"250"},on:{resize:e.onChangeDiagramDimensions}})],1)},_=[],w=s("c71e");s("28d5");function C(e){function t(e,t,s){let o,i,l,n,a,r=e.root.querySelector(".u-over"),d={x:0,y:0,dx:0,dy:0},c={x:0,y:0,dx:0,dy:0};function u(e,t){let s=t.touches,i=s[0],l=i.clientX-o.left,n=i.clientY-o.top;if(1===s.length)e.x=l,e.y=n,e.d=e.dx=e.dy=1;else{let s=t.touches[1],i=s.clientX-o.left,a=s.clientY-o.top,r=Math.min(l,i),d=Math.min(n,a),c=Math.max(l,i),u=Math.max(n,a);e.y=(d+u)/2,e.x=(r+c)/2,e.dx=c-r,e.dy=u-d,e.d=Math.sqrt(e.dx*e.dx+e.dy*e.dy)}}let m=!1;function h(){m=!1;let t=c.x,s=c.y,r=d.d/c.d,u=d.d/c.d,h=t/o.width,p=1-s/o.height,g=i*r,v=n-h*g,f=v+g,b=l*u,q=a-p*b,M=q+b;e.batch((()=>{e.setScale("x",{min:v,max:f}),e.setScale("y",{min:q,max:M})}))}function p(e){u(c,e),m||(m=!0,requestAnimationFrame(h))}r.addEventListener("touchstart",(function(t){o=r.getBoundingClientRect(),u(d,t),i=e.scales.x.max-e.scales.x.min,l=e.scales.y.max-e.scales.y.min;let s=d.x,c=d.y;n=e.posToVal(s,"x"),a=e.posToVal(c,"y"),document.addEventListener("touchmove",p,{passive:!0})})),r.addEventListener("touchend",(function(e){document.removeEventListener("touchmove",p,{passive:!0})})),r.addEventListener("mousedown",(function(t){console.log("mousedown"),o=r.getBoundingClientRect(),u(d,t),i=e.scales.x.max-e.scales.x.min,l=e.scales.y.max-e.scales.y.min;let s=d.x,c=d.y;n=e.posToVal(s,"x"),a=e.posToVal(c,"y"),document.addEventListener("mousemove",p,{passive:!0})})),r.addEventListener("mouseup",(function(e){console.log("mouseup"),document.removeEventListener("mousemove",p,{passive:!0})}))}return{hooks:{init:t}}}function k(e){let t,s,o,i,l,n,a=e.factor||.75;function r(e,t,s,o,i,l){return e>o?(t=i,s=l):t<i?(t=i,s=i+e):s>l&&(s=l,t=l-e),[t,s]}return{hooks:{ready:e=>{t=e.scales.x.min,s=e.scales.x.max,o=e.scales.y.min,i=e.scales.y.max,l=s-t,n=i-o;let d=e.root.querySelector(".u-over"),c=d.getBoundingClientRect();d.addEventListener("mousedown",(t=>{if(1===t.button){t.preventDefault();let i=t.clientX,l=e.scales.x.min,n=e.scales.x.max,a=e.posToVal(1,"x")-e.posToVal(0,"x");function s(t){t.preventDefault();let s=t.clientX,o=a*(s-i);e.setScale("x",{min:l-o,max:n-o})}function o(e){document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o)}document.addEventListener("mousemove",s),document.addEventListener("mouseup",o)}})),d.addEventListener("wheel",(d=>{d.preventDefault();let{left:u,top:m}=e.cursor,h=u/c.width,p=1-m/c.height,g=e.posToVal(u,"x"),v=e.posToVal(m,"y"),f=e.scales.x.max-e.scales.x.min,b=e.scales.y.max-e.scales.y.min,q=d.deltaY<0?f*a:f/a,M=g-h*q,P=M+q;[M,P]=r(q,M,P,l,t,s);let y=d.deltaY<0?b*a:b/a,x=v-p*y,S=x+y;[x,S]=r(y,x,S,n,o,i),e.batch((()=>{e.setScale("x",{min:M,max:P})}))}))}}}}var T={name:"timeseries-diagram",props:["data","timeAggregation"],components:{},data(){return{uplot:void 0}},computed:n()(n()({},Object(a["c"])({})),Object(a["b"])({})),methods:{onChangeDiagramDimensions(){if(void 0!==this.uplot&&void 0!==this.$refs.diagram){var e=this.$refs.diagram.clientWidth,t=400;this.uplot.setSize({width:e,height:t})}},createDiagram(){if(void 0!==this.uplot&&(this.uplot.destroy(),this.uplot=void 0),void 0===this.data)return;var e=this.$refs.diagram.clientWidth,t=400;let s=[{}];this.data.length>1&&s.push({show:!0,spanGaps:"none"===this.timeAggregation,label:"Value",value:(e,t)=>null===t?"---":t.toFixed(2),stroke:"red",width:1}),this.data.length>2&&s.push({show:!0,spanGaps:"none"===this.timeAggregation,label:"Value",value:(e,t)=>null===t?"---":t.toFixed(2),stroke:"blue",width:1}),this.data.length>3&&s.push({show:!0,spanGaps:"none"===this.timeAggregation,label:"Value",value:(e,t)=>null===t?"---":t.toFixed(2),stroke:"green",width:1}),this.data.length>4&&s.push({show:!0,spanGaps:"none"===this.timeAggregation,label:"Value",value:(e,t)=>null===t?"---":t.toFixed(2),stroke:"violet",width:1});let o={width:e,height:t,cursor:{x:!1,y:!1,drag:{x:!1,y:!1}},plugins:[C({}),k({factor:.75})],series:s};this.$refs.diagram.innerHTML="",this.uplot=new w["a"](o,this.data,this.$refs.diagram)}},watch:{data(){this.createDiagram()}},async mounted(){}},L=T,j=s("3980"),E=Object(h["a"])(L,S,_,!1,null,"5740a16b",null),G=E.exports;function A(e){for(var t=[],s=0;s<e.length;s++){var o=e[s];t[s]=Number.isFinite(o)?o:null}return t}function Q(e){for(var t=[],s=0;s<e.length;s++){var o=e[s];t[s]=60*(o-36819360-60)}return t}P()(E,"components",{QResizeObserver:j["a"]});var R={name:"DiagramLayout",components:{pagesToolbar:r["a"],timeseriesSelector:x,timeseriesDiagram:G},data(){return{drawerWidth:400,data:void 0,dataRequestSentCounter:0,dataRequestReceivedCounter:0,dataRequestError:"no data loaded",timeAggregation:"hour",quality:"step",interpolation:!1,selectedPlots:[],selectedSensors:[],multiTimeseries:!0}},computed:n()(n()(n()({},Object(a["c"])({model:e=>e.model.data,modelLoading:e=>e.model.loading,modelError:e=>e.model.error})),Object(a["b"])({api:"api",apiGET:"apiGET",apiPOST:"apiPOST"})),{},{qualities(){return["none","physical","step","empirical"]},plotSensorList(){let e=[];for(let t of this.selectedSensors)for(let s of this.selectedPlots)if(s.sensorSet.has(t.id)){let o={plot:s.id,sensor:t.id};if(e.push(o),e.length>4)return e}return e}}),methods:{onChangeDrawerWidth(e){var t=e.delta.x;this.drawerWidth+=t,this.drawerWidth<30&&(this.drawerWidth=30),this.drawerWidth>800&&(this.drawerWidth=800)},settingsChanged(){this.requestData()},async requestData(){if(void 0!==this.model){if(this.plotSensorList.length<1)return void(this.data=void 0);try{this.dataRequestSentCounter++;var e=this.dataRequestSentCounter;this.dataRequestError=void 0;var t={responseType:"arraybuffer"},s={timeAggregation:this.timeAggregation,quality:this.quality};"none"!==this.timeAggregation&&(s.interpolation=this.interpolation);var o={settings:s,timeseries:this.plotSensorList.slice(0,4)},i=await this.apiPOST(["tsdb","query_js"],o,t);if(e<this.dataRequestSentCounter)return;this.dataRequestReceivedCounter=e;var l=i.data,n=new DataView(l),a=n.getInt32(0,!0),r=n.getInt32(4,!0);console.log("entryCount: "+a+"   schemaCount: "+r);var d=[],c=new Int32Array(l,8,a);d[0]=Q(c);for(var u=0;u<r;u++){var m=new Float32Array(l,8+4*a*(u+1),a);d[u+1]=A(m)}this.data=d}catch(h){if(console.log(h),e<this.dataRequestSentCounter)return;this.dataRequestError="ERROR receiving data",this.dataRequestReceivedCounter=e}}}},watch:{async model(){this.requestData()},timeAggregation:{handler(){(void 0===this.quality||null===this.quality||"none"===this.timeAggregation&&"empirical"===this.quality)&&(this.quality=this.qualities[2]),this.settingsChanged()},immediate:!0},quality(){this.settingsChanged()},interpolation(){this.settingsChanged()},plotSensorList(){this.settingsChanged()}},async mounted(){this.requestData(),this.$store.dispatch("model/init")}},D=R,O=(s("39b4"),s("4d5a")),$=s("e359"),I=s("9404"),V=s("4983"),W=s("8f8e"),F=s("eb85"),N=s("9c40"),B=s("09e3"),H=s("75c3"),z=Object(h["a"])(D,o,i,!1,null,"47b13e44",null);t["default"]=z.exports;P()(z,"components",{QLayout:O["a"],QHeader:$["a"],QDrawer:I["a"],QScrollArea:V["a"],QList:g["a"],QItem:v["a"],QItemSection:p["a"],QSelect:f["a"],QCheckbox:W["a"],QItemLabel:q["a"],QSeparator:F["a"],QBtn:N["a"],QPageContainer:B["a"]}),P()(z,"directives",{TouchPan:H["a"]})},"611f":function(e,t,s){"use strict";s("4dda")},6462:function(e,t,s){},8865:function(e,t,s){},"90e2":function(e,t,s){},aa06:function(e,t,s){"use strict";s("90e2")}}]);