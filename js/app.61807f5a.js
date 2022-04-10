(function(){var o={9046:function(o,t,e){"use strict";var n=e(9242),r=e(3396);function i(o,t,e,n,i,s){const a=(0,r.up)("TopNavBar"),u=(0,r.up)("LeftNavBar"),c=(0,r.up)("ToDoList");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a),(0,r.Wm)(u),(0,r.Wm)(c)],64)}const s={class:"main-container"};function a(o,t,e,n,i,a){const u=(0,r.up)("HoverImgButton");return(0,r.wg)(),(0,r.iD)("div",s,[(0,r._)("table",null,[(0,r._)("tr",null,[(0,r._)("td",null,[(0,r.Wm)(u,{type:"outline",path:"Icon_exit.svg",padding:"10px",borderRadius:"15px",BgColor:"#1f1f1f",BgColorHover:"#3a3a3a"})]),(0,r._)("td",null,[(0,r.Wm)(u,{type:"outline",path:"Icon_home.svg",padding:"10px",borderRadius:"15px",BgColor:"#1f1f1f",BgColorHover:"#3a3a3a"})])])])])}const u=["src"];function c(o,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("img",{class:"enter-active leave-active",onMouseover:t[0]||(t[0]=(...o)=>a.BackgroundColorOnHover&&a.BackgroundColorOnHover(...o)),onMouseleave:t[1]||(t[1]=(...o)=>a.BackgroundColorNoHover&&a.BackgroundColorNoHover(...o)),src:e(5080)("./"+n.type+"/"+n.path)},null,40,u)}const l={name:"HoverImgButton",props:{type:String,path:String,size:String,borderRadius:String,BgColor:String,BgColorHover:String},data(){return{bgcolor:this.BgColor}},methods:{BackgroundColorOnHover(){this.bgcolor=this.BgColorHover},BackgroundColorNoHover(){this.bgcolor=this.BgColor}}},d=()=>{(0,n.sj)((o=>({"26bb9c62":o.size,dd3a7182:o.borderRadius,"4aec3b86":o.bgcolor})))},v=l.setup;l.setup=v?(o,t)=>(d(),v(o,t)):d;var g=l,p=e(89);const f=(0,p.Z)(g,[["render",c],["__scopeId","data-v-765046c2"]]);var b=f,k={name:"TopNavBar",components:{HoverImgButton:b}};const m=(0,p.Z)(k,[["render",a],["__scopeId","data-v-183ed635"]]);var h=m;const B={class:"main-container"},_={class:"group-container"};function C(o,t,e,n,i,s){const a=(0,r.up)("HoverTextButton");return(0,r.wg)(),(0,r.iD)("div",B,[(0,r._)("div",_,[(0,r.Wm)(a,{text:"Входящие"}),(0,r.Wm)(a,{text:"Сегодня"}),(0,r.Wm)(a,{text:"Предстоящие"})])])}var x=e(7139);function w(o,t,e,n,i,s){return(0,r.wg)(),(0,r.iD)("div",{class:"main-container-text enter-active leave-active",onMouseover:t[0]||(t[0]=(...o)=>s.BackgroundColorOnHover&&s.BackgroundColorOnHover(...o)),onMouseleave:t[1]||(t[1]=(...o)=>s.BackgroundColorNoHover&&s.BackgroundColorNoHover(...o))},(0,x.zw)(e.text),33)}const y={name:"HoverTextButton",props:{text:String},data(){return{bgColor:"#ededed"}},methods:{BackgroundColorOnHover(){this.bgColor="#cfcfcf"},BackgroundColorNoHover(){this.bgColor="#ededed"}}},H=()=>{(0,n.sj)((o=>({"6462610e":o.bgColor})))},T=y.setup;y.setup=T?(o,t)=>(H(),T(o,t)):H;var I=y;const D=(0,p.Z)(I,[["render",w],["__scopeId","data-v-da1b7bbc"]]);var O=D,M={name:"LeftNavBar",components:{HoverTextButton:O}};const W=(0,p.Z)(M,[["render",C],["__scopeId","data-v-2226c8a1"]]);var N=W;const V=o=>((0,r.dD)("data-v-2b9342b6"),o=o(),(0,r.Cn)(),o),j={class:"main-container"},z=V((()=>(0,r._)("div",{class:"bold-text-container"},"Сегодня",-1))),S={class:"bleak-text-container"};function F(o,t,e,n,i,s){const a=(0,r.up)("TaskWindow"),u=(0,r.up)("HoverImgButton");return(0,r.wg)(),(0,r.iD)("div",j,[z,(0,r._)("div",S,(0,x.zw)(i.message),1),(0,r._)("ul",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.TaskWindows,(o=>((0,r.wg)(),(0,r.iD)("li",{key:o.id},[(0,r.Wm)(a,{onDeleteTask:s.deleteTask,id:o.id},null,8,["onDeleteTask","id"])])))),128)),(0,r._)("li",null,[(0,r.Wm)(u,{style:{"margin-top":"10px"},onClick:s.addTask,type:"line",path:"Icon_plus.svg",size:"3px",borderRadius:"5px",BgColorHover:"#f0f0f0"},null,8,["onClick"])])])])}const L=o=>((0,r.dD)("data-v-5700e626"),o=o(),(0,r.Cn)(),o),R={key:0,class:"task-container"},Z={class:"task-text-container"},q={class:"buttons-container"},E={key:1,class:"input-container"},U=L((()=>(0,r._)("hr",null,null,-1)));function Y(o,t,e,i,s,a){const u=(0,r.up)("HoverImgButton");return(0,r.wg)(),(0,r.iD)("div",{class:"task-main-container",onMouseenter:t[2]||(t[2]=(...o)=>a.setButtonVisibilityTrue&&a.setButtonVisibilityTrue(...o)),onMouseleave:t[3]||(t[3]=(...o)=>a.setButtonVisibilityFalse&&a.setButtonVisibilityFalse(...o))},[s.editMode?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",R,[(0,r._)("div",Z,(0,x.zw)(s.task),1),(0,r._)("div",q,[s.buttonsVisible&&!s.editMode?((0,r.wg)(),(0,r.j4)(u,{key:0,onClick:a.changeMode,type:"line",path:"Icon_edit.svg",size:"3px",borderRadius:"5px",BgColorHover:"#f0f0f0"},null,8,["onClick"])):(0,r.kq)("",!0),s.buttonsVisible&&!s.editMode?((0,r.wg)(),(0,r.j4)(u,{key:1,onClick:a.deleteTask,type:"line",path:"Icon_delete.svg",size:"3px",borderRadius:"5px",BgColorHover:"#f0f0f0"},null,8,["onClick"])):(0,r.kq)("",!0)])])),s.editMode?((0,r.wg)(),(0,r.iD)("div",E,[(0,r.wy)((0,r._)("textarea",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.task=o),placeholder:"Описание"},null,512),[[n.nr,s.task]]),(0,r._)("button",{class:"save-btn",onClick:t[1]||(t[1]=o=>{a.changeMode(),a.setButtonVisibilityFalse()})}," Сохранить ")])):(0,r.kq)("",!0),U],32)}var P={name:"TaskWindow",props:{id:String},components:{HoverImgButton:b},data(){return{editMode:!1,buttonsVisible:!1,task:""}},methods:{changeMode(){this.editMode=!this.editMode},deleteTask(){this.$emit("delete-task",this.id)},setButtonVisibilityTrue(){this.buttonsVisible=!0},setButtonVisibilityFalse(){this.buttonsVisible=!1}}};const K=(0,p.Z)(P,[["render",Y],["__scopeId","data-v-5700e626"]]);var $=K,A=e(9157),G=e.n(A);function J(){var o=new Date,t=o.getFullYear(),e=o.getMonth()+1,n=o.getDate(),r=o.getDay();return 0===r?r="Вс":1===r?r="Пн":2===r?r="Вт":3===r?r="Ср":4===r?r="Чт":5===r?r="Пт":6===r&&(r="Сб"),r+" "+n+"."+e+"."+t}const Q=function(o){return console.log(o.id==this.id),o.id!==this.id};var X={name:"ToDoList",components:{HoverImgButton:b,TaskWindow:$},data(){return{TaskWindows:[{id:G()("")}],message:J()}},methods:{deleteTask(o){this.TaskWindows=this.TaskWindows.filter(Q,{id:o})},addTask(){this.TaskWindows.push({id:G()("")})}}};const oo=(0,p.Z)(X,[["render",F],["__scopeId","data-v-2b9342b6"]]);var to=oo,eo={name:"app",components:{TopNavBar:h,LeftNavBar:N,ToDoList:to}};const no=(0,p.Z)(eo,[["render",i]]);var ro=no;(0,n.ri)(ro).mount("#app")},5080:function(o,t,e){var n={"./line/Icon_delete.svg":5268,"./line/Icon_edit.svg":3804,"./line/Icon_plus.svg":207,"./outline/Icon_exit.svg":8584,"./outline/Icon_home.svg":4024};function r(o){var t=i(o);return e(t)}function i(o){if(!e.o(n,o)){var t=new Error("Cannot find module '"+o+"'");throw t.code="MODULE_NOT_FOUND",t}return n[o]}r.keys=function(){return Object.keys(n)},r.resolve=i,o.exports=r,r.id=5080},5268:function(o,t,e){"use strict";o.exports=e.p+"img/Icon_delete.85e84a98.svg"},3804:function(o,t,e){"use strict";o.exports=e.p+"img/Icon_edit.d235e5aa.svg"},207:function(o,t,e){"use strict";o.exports=e.p+"img/Icon_plus.3883ecfd.svg"},8584:function(o,t,e){"use strict";o.exports=e.p+"img/Icon_exit.034ea41c.svg"},4024:function(o,t,e){"use strict";o.exports=e.p+"img/Icon_home.c65c6105.svg"}},t={};function e(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return o[n](i,i.exports,e),i.exports}e.m=o,function(){var o=[];e.O=function(t,n,r,i){if(!n){var s=1/0;for(l=0;l<o.length;l++){n=o[l][0],r=o[l][1],i=o[l][2];for(var a=!0,u=0;u<n.length;u++)(!1&i||s>=i)&&Object.keys(e.O).every((function(o){return e.O[o](n[u])}))?n.splice(u--,1):(a=!1,i<s&&(s=i));if(a){o.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=o.length;l>0&&o[l-1][2]>i;l--)o[l]=o[l-1];o[l]=[n,r,i]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){e.p="/todolist/"}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var r,i,s=n[0],a=n[1],u=n[2],c=0;if(s.some((function(t){return 0!==o[t]}))){for(r in a)e.o(a,r)&&(e.m[r]=a[r]);if(u)var l=u(e)}for(t&&t(n);c<s.length;c++)i=s[c],e.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return e.O(l)},n=self["webpackChunktodolist"]=self["webpackChunktodolist"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(9046)}));n=e.O(n)})();
//# sourceMappingURL=app.61807f5a.js.map