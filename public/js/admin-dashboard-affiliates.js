(self.webpackChunk=self.webpackChunk||[]).push([[1217],{23817:(t,s,e)=>{"use strict";e.d(s,{Z:()=>a});const a={props:{disabled:{type:Boolean,required:!1,default:!1},hideDetails:{type:Boolean,required:!1,default:!1},solo:{type:Boolean,required:!1,default:!1}},data:function(){return{value:"month",options:[{text:this.$t("By day"),value:"day"},{text:this.$t("By week"),value:"week"},{text:this.$t("By month"),value:"month"},{text:this.$t("By year"),value:"year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},29839:(t,s,e)=>{"use strict";e.d(s,{Z:()=>a});const a={props:{disabled:{type:Boolean,required:!1,default:!1},hideDetails:{type:Boolean,required:!1,default:!1},solo:{type:Boolean,required:!1,default:!1}},data:function(){return{value:null,options:[{text:this.$t("All time"),value:null},{text:this.$t("This week"),value:"week"},{text:this.$t("Previous week"),value:"prev_week"},{text:this.$t("This month"),value:"month"},{text:this.$t("Previous month"),value:"prev_month"},{text:this.$t("This year"),value:"year"},{text:this.$t("Previous year"),value:"prev_year"}]}},methods:{change:function(){this.$emit("change",{period:this.value})}}}},10912:(t,s,e)=>{"use strict";e.d(s,{Z:()=>c});var a=e(87757),i=e.n(a),r=e(9669),o=e.n(r);function n(t,s,e,a,i,r,o){try{var n=t[r](o),l=n.value}catch(t){return void e(t)}n.done?s(l):Promise.resolve(l).then(a,i)}function l(t){return function(){var s=this,e=arguments;return new Promise((function(a,i){var r=t.apply(s,e);function o(t){n(r,a,i,o,l,"next",t)}function l(t){n(r,a,i,o,l,"throw",t)}o(void 0)}))}}const c={data:function(){return{data:{},endpoint:"/api/admin/dashboard/data"}},computed:{theme:function(){var t=this.$vuetify.theme.isDark?"dark":"light";return this.$vuetify.theme.themes[t]},chartLineColor:function(){return this.theme.primary}},created:function(){var t=this;this.queries.forEach((function(s){return t.loadData(s)}))},methods:{loadData:function(t){var s=arguments,e=this;return l(i().mark((function a(){var r,n,l;return i().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:null,e.data[t]&&e.$delete(e.data,t),a.next=4,o().get("".concat(e.endpoint,"/").concat(t),{params:r});case 4:n=a.sent,(l=n.data).success?e.$set(e.data,t,l.data):e.$store.dispatch("message/error",{text:l.message});case 7:case"end":return a.stop()}}),a)})))()}}}},57542:(t,s,e)=>{"use strict";e.d(s,{s:()=>a,x:()=>i});var a=function(){var t=this,s=t.$createElement;return(t._self._c||s)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,solo:t.solo,"hide-details":t.hideDetails,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})},i=[]},19394:(t,s,e)=>{"use strict";e.d(s,{s:()=>a,x:()=>i});var a=function(){var t=this,s=t.$createElement;return(t._self._c||s)("v-select",{attrs:{items:t.options,label:t.$t("Period"),disabled:t.disabled,solo:t.solo,"hide-details":t.hideDetails,outlined:""},on:{change:t.change},model:{value:t.value,callback:function(s){t.value=s},expression:"value"}})},i=[]},80285:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>$});var a=e(74155),i=e(69893),r=e(80141);const o={components:{PeriodFilter:e(307).Z,ComparisonPeriodFilter:r.Z},mixins:[i.Z],middleware:["auth","verified","2fa_passed","admin"],metaInfo:function(){return{title:this.$t("Dashboard")+" "+this.$t("Affiliates")}},data:function(){return{queries:["affiliates-commissions-history","affiliates-referrals-comparison","affiliates-commissions-by-status","affiliates-commissions-by-type"]}},computed:{referrals:function(){return this.data["affiliates-referrals-comparison"]||null},previousReferrals:function(){return null!==this.referrals?this.referrals[0]:0},currentReferrals:function(){return null!==this.referrals?this.referrals[1]:0},commissionsByStatus:function(){return this.data["affiliates-commissions-by-status"]||null},pendingCommissionsTotal:function(){return null!==this.commissionsByStatus?this.commissionsByStatus[0]:0},approvedCommissionsTotal:function(){return null!==this.commissionsByStatus?this.commissionsByStatus[1]:0},rejectedCommissionsTotal:function(){return null!==this.commissionsByStatus?this.commissionsByStatus[2]:0},commissionsTotal:function(){return this.pendingCommissionsTotal+this.approvedCommissionsTotal+this.rejectedCommissionsTotal},commissionsByType:function(){return this.data["affiliates-commissions-by-type"]||null}},methods:{integer:a.integer,decimal:a.decimal,short:a.short}};var n=e(51900),l=e(43453),c=e.n(l),u=e(43776),d=e(5255),m=e(17024),v=e(66530),h=e(9550),f=e(57894),p=e(23682),_=e(78720),y=e(55515),C=e(22515),g=e(17325),b=e(43398),x=e(40961),w=e(73845),T=(0,n.Z)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-container",[e("v-row",[e("v-col",{attrs:{cols:"12",lg:"6"}},[e("v-card",{staticClass:"text-center",attrs:{loading:!t.data["affiliates-commissions-history"]}},[e("v-toolbar",[e("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Commissions last 8 weeks"))+"\n          ")])],1),t._v(" "),e("v-card-text",[e("v-sheet",[e("v-sparkline",{key:!!t.data["affiliates-commissions-history"],attrs:{value:t.data["affiliates-commissions-history"]||Array(8).fill(0),color:t.chartLineColor,height:"150",padding:"24","stroke-linecap":"round","line-width":"2",smooth:"5","auto-draw":"","auto-draw-duration":2e3},scopedSlots:t._u([{key:"label",fn:function(s){return[t._v("\n                "+t._s(t.short(s.value))+"\n              ")]}}])})],1)],1)],1)],1),t._v(" "),e("v-col",{staticClass:"text-center",attrs:{cols:"12",lg:"6"}},[e("v-card",{attrs:{loading:!t.referrals}},[e("v-toolbar",[e("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Referrals"))+"\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("comparison-period-filter",{staticClass:"flex-grow-0",attrs:{disabled:!t.referrals,"hide-details":!0,solo:!0},on:{change:function(s){return t.loadData("affiliates-referrals-comparison",s)}}})],1),t._v(" "),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"6"}},[e("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.previousReferrals>0||t.currentReferrals>0?100*t.previousReferrals/(t.previousReferrals+t.currentReferrals):0,color:t.previousReferrals?"primary":""}},[e("span",{staticClass:"headline"},[t._v(t._s(t.previousReferrals))])]),t._v(" "),e("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("previous"))+"\n              ")])],1),t._v(" "),e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"6"}},[e("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.previousReferrals>0||t.currentReferrals>0?100*t.currentReferrals/(t.previousReferrals+t.currentReferrals):0,color:t.currentReferrals?"primary":""}},[e("span",{staticClass:"headline"},[t._v(t._s(t.currentReferrals))])]),t._v(" "),e("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("current"))+"\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),e("v-row",[e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[e("v-card",{attrs:{loading:!t.commissionsByStatus}},[e("v-toolbar",[e("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Commissions amounts by status"))+"\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("comparison-period-filter",{staticClass:"flex-grow-0",attrs:{disabled:!t.commissionsByStatus,"hide-details":!0,solo:!0},on:{change:function(s){return t.loadData("affiliates-commissions-by-status",s)}}})],1),t._v(" "),e("v-card-text",[e("v-row",[e("v-col",{attrs:{cols:"12",md:"4"}},[e("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.commissionsTotal>0?100*t.pendingCommissionsTotal/t.commissionsTotal:0,color:t.pendingCommissionsTotal>0?"primary":""}},[e("span",{staticClass:"headline"},[t._v(t._s(t.short(t.pendingCommissionsTotal)))])]),t._v(" "),e("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("Pending"))+"\n              ")])],1),t._v(" "),e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.commissionsTotal>0?100*t.approvedCommissionsTotal/t.commissionsTotal:0,color:t.approvedCommissionsTotal>0?"primary":""}},[e("span",{staticClass:"headline"},[t._v(t._s(t.short(t.approvedCommissionsTotal)))])]),t._v(" "),e("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("Approved"))+"\n              ")])],1),t._v(" "),e("v-col",{staticClass:"text-center",attrs:{cols:"12",md:"4"}},[e("v-progress-circular",{attrs:{rotate:-90,size:200,width:30,value:t.commissionsTotal>0?100*t.rejectedCommissionsTotal/t.commissionsTotal:0,color:t.rejectedCommissionsTotal>0?"primary":""}},[e("span",{staticClass:"headline"},[t._v(t._s(t.short(t.rejectedCommissionsTotal)))])]),t._v(" "),e("v-subheader",{staticClass:"title font-weight-thin justify-center mt-3"},[t._v("\n                "+t._s(t.$t("Rejected"))+"\n              ")])],1)],1)],1)],1)],1)],1),t._v(" "),e("v-row",[e("v-col",{attrs:{cols:"12",lg:"12"}},[e("v-card",{staticClass:"text-center",attrs:{loading:!t.commissionsByType}},[e("v-toolbar",[e("v-toolbar-title",{staticClass:"headline font-weight-thin"},[t._v("\n            "+t._s(t.$t("Commissions by type"))+"\n          ")]),t._v(" "),e("v-spacer"),t._v(" "),e("period-filter",{staticClass:"flex-grow-0",attrs:{disabled:!t.commissionsByType,"hide-details":!0,solo:!0},on:{change:function(s){return t.loadData("affiliates-commissions-by-type",s)}}})],1),t._v(" "),e("v-card-text",[e("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v(t._s(t.$t("Type")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Count")))]),t._v(" "),e("th",{staticClass:"text-right"},[t._v(t._s(t.$t("Total")))])])]),t._v(" "),e("tbody",[t.commissionsByType?[t.commissionsByType.length?t._l(t.commissionsByType,(function(s){return e("tr",{key:s.type},[e("td",{staticClass:"text-left"},[t._v(t._s(s.title))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.integer(s.commissions_count)))]),t._v(" "),e("td",{staticClass:"text-right"},[t._v(t._s(t.decimal(s.commissions_total)))])])})):e("tr",[e("td",{attrs:{colspan:"6"}},[t._v("\n                      "+t._s(t.$t("No data found"))+"\n                    ")])])]:t._l(Array(3).fill(0),(function(t,s){return e("tr",{key:s},[e("td",{attrs:{colspan:"3"}},[e("v-skeleton-loader",{attrs:{type:"text"}})],1)])}))],2)]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);const $=T.exports;c()(T,{VCard:u.Z,VCardText:d.ZB,VCol:m.Z,VContainer:v.Z,VProgressCircular:h.Z,VRow:f.Z,VSheet:p.Z,VSimpleTable:_.Z,VSkeletonLoader:y.Z,VSpacer:C.Z,VSparkline:g.Z,VSubheader:b.Z,VToolbar:x.Z,VToolbarTitle:w.qW})}}]);
//# sourceMappingURL=admin-dashboard-affiliates.js.map