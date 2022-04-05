(self.webpackChunk=self.webpackChunk||[]).push([[4361],{333:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});const r={props:{endDate:{type:Number,required:!0}},data:function(){return{timer:null,interval:null}},watch:{endDate:function(t){t&&(this.destroy(),this.create())}},created:function(){this.create()},beforeDestroy:function(){this.destroy()},methods:{create:function(){this.tick(),this.interval=setInterval(this.tick,1e3)},destroy:function(){clearInterval(this.interval)},tick:function(){var t=Math.max(0,Math.round(this.endDate-Date.now()/1e3)),e=Math.floor(t%60),n=Math.floor(t/60%60),r=Math.floor(t/3600%24),a=Math.floor(t/86400);e=e<10?"0"+e:e,n=n<10?"0"+n:n,r=r<10?"0"+r:r,this.timer=(a>0?"".concat(a).concat(this.$t("d")," : "):"")+(r>0||a>0?"".concat(r).concat(this.$t("h")," : "):"")+"".concat(n).concat(this.$t("m")," : ").concat(e).concat(this.$t("s")),0===t&&this.interval&&clearInterval(this.interval)}}}},72283:(t,e,n)=>{"use strict";n.d(e,{s:()=>r,x:()=>a});var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.timer))])},a=[]},74317:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>F});var r=n(87757),a=n.n(r),o=n(50175),s=n.n(o),c=n(15566),i=n(9669),u=n.n(i),l=n(18623);function d(t,e,n,r,a,o,s){try{var c=t[o](s),i=c.value}catch(t){return void n(t)}c.done?e(i):Promise.resolve(i).then(r,a)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function s(t){d(o,r,a,s,c,"next",t)}function c(t){d(o,r,a,s,c,"throw",t)}s(void 0)}))}}const m={components:{CountdownTimer:n(74213).Z},mixins:[l.Z],middleware:["auth","verified","2fa_passed","faucet"],metaInfo:function(){return{title:this.$t("Faucet")}},data:function(){return{allowed:null,time:null,form:new(s()),url:"/api/user/account/faucet"}},computed:{amount:function(){return parseInt((0,c.v)("settings.bonuses.faucet.amount"),10)},interval:function(){return parseInt((0,c.v)("settings.bonuses.faucet.interval"),10)}},created:function(){var t=this;return f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.checkFaucet();case 1:case"end":return e.stop()}}),e)})))()},methods:{checkFaucet:function(){var t=this;return f(a().mark((function e(){var n,r,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get(t.url);case 2:n=e.sent,r=n.data,o=r.allowed,s=r.time,t.allowed=o,t.time=s;case 8:case"end":return e.stop()}}),e)})))()},claimFaucet:function(){var t=this;return f(a().mark((function e(){var n,r,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.form.submit("post",t.url);case 2:n=e.sent,r=n.data,o=r.success,s=r.time,o&&(t.allowed=!1,t.time=s,t.$store.dispatch("message/success",{text:t.$t("{0} credits added to your account.",[t.amount])}));case 7:case"end":return e.stop()}}),e)})))()}}};var v=n(51900),h=n(43453),p=n.n(h),w=n(4330),_=n(43776),b=n(5255),x=n(17024),y=n(66530),$=n(83240),k=n(57894),V=n(55515),Z=n(54933),g=n(40961),C=n(73845),I=(0,v.Z)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[n("v-card",[n("v-toolbar",[n("v-toolbar-title",[t._v("\n            "+t._s(t.$t("Faucet"))+"\n          ")])],1),t._v(" "),n("v-card-text",[n("p",[t._v("\n            "+t._s(t.$t("You can claim {0} credits every {1} {2}.",[t.amount,t.interval,1===t.interval?t.$t("hour"):t.$t("hours")]))+"\n          ")]),t._v(" "),n("v-form",{staticClass:"mt-3",on:{submit:function(e){return e.preventDefault(),t.claimFaucet(e)}},model:{value:t.formIsValid,callback:function(e){t.formIsValid=e},expression:"formIsValid"}},[n("v-text-field",{attrs:{value:t.amount,label:t.$t("Faucet amount"),suffix:t.$t("credits"),readonly:!0,error:t.form.errors.has("amount"),"error-messages":t.form.errors.get("amount"),outlined:""},scopedSlots:t._u([{key:"append-outer",fn:function(){return[n("v-skeleton-loader",{attrs:{type:"button",loading:null===t.allowed}},[n("v-btn",{staticClass:"mt-n3",attrs:{type:"submit",color:"primary",large:"",disabled:!t.allowed||!t.formIsValid||t.form.busy,loading:t.form.busy}},[t._v("\n                    "+t._s(t.$t("Get"))+"\n                  ")])],1)]},proxy:!0}])})],1),t._v(" "),!1===t.allowed&&t.time?[n("span",[t._v(t._s(t.$t("Wait time for the next faucet")))]),t._v(" "),n("countdown-timer",{staticClass:"text-no-wrap",attrs:{"end-date":t.time}})]:t._e()],2)],1)],1)],1)],1)}),[],!1,null,null,null);const F=I.exports;p()(I,{VBtn:w.Z,VCard:_.Z,VCardText:b.ZB,VCol:x.Z,VContainer:y.Z,VForm:$.Z,VRow:k.Z,VSkeletonLoader:V.Z,VTextField:Z.Z,VToolbar:g.Z,VToolbarTitle:C.qW})}}]);
//# sourceMappingURL=user-account-faucet.js.map