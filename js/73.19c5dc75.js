"use strict";(globalThis["webpackChunkquasar_todo"]=globalThis["webpackChunkquasar_todo"]||[]).push([[73],{5073:(e,a,l)=>{l.r(a),l.d(a,{default:()=>C});var t=l(9835),s=l(1957),o=l(6970);const n={class:"row q-pa-sm bg-primary"},d={key:0,class:"no-task absolute-center"},i=(0,t._)("div",{class:"text-h5 text-primary text-center"},"No Task",-1);function c(e,a,l,c,u,r){const p=(0,t.up)("q-btn"),k=(0,t.up)("q-input"),m=(0,t.up)("q-checkbox"),w=(0,t.up)("q-item-section"),h=(0,t.up)("q-item-label"),g=(0,t.up)("q-item"),b=(0,t.up)("q-list"),q=(0,t.up)("q-icon"),T=(0,t.up)("q-page"),f=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.j4)(T,{class:"bg-grey-3 column"},{default:(0,t.w5)((()=>[(0,t._)("div",n,[(0,t.Wm)(k,{onKeyup:(0,s.D2)(e.addTask,["enter"]),modelValue:e.newTask,"onUpdate:modelValue":a[0]||(a[0]=a=>e.newTask=a),class:"col",placeholder:"Add Task",filled:"","bg-color":"white",square:"",dense:""},{append:(0,t.w5)((()=>[(0,t.Wm)(p,{onClick:e.addTask,round:"",dense:"",flat:"",icon:"add"},null,8,["onClick"])])),_:1},8,["onKeyup","modelValue"])]),(0,t.Wm)(b,{class:"bg-white",separator:"",bordered:""},{default:(0,t.w5)((()=>[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.tasks,((a,l)=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(g,{key:a.title,onClick:e=>a.done=!a.done,class:(0,o.C_)({"done bg-blue-1":a.done}),clickable:""},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(m,{class:"no-pointer-events",modelValue:a.done,"onUpdate:modelValue":e=>a.done=e,color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,t.Wm)(w,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,o.zw)(a.title),1)])),_:2},1024)])),_:2},1024),a.done?((0,t.wg)(),(0,t.j4)(w,{key:0,side:""},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{onClick:(0,s.iM)((a=>e.deleteTask(l)),["stop"]),flat:"",round:"",dense:"",color:"primary",icon:"delete"},null,8,["onClick"])])),_:2},1024)):(0,t.kq)("",!0)])),_:2},1032,["onClick","class"])),[[f]]))),128))])),_:1}),e.tasks.length?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",d,[(0,t.Wm)(q,{name:"check",size:"100px",color:"primary"}),i]))])),_:1})}l(9665);const u=(0,t.aZ)({name:"TodoPage",data(){return{newTask:"",tasks:[]}},methods:{deleteTask(e){this.$q.dialog({title:"Confirm",message:"Really delete?",cancel:!0,persistent:!0}).onOk((()=>{this.tasks.splice(e,1),this.$q.notify("Task deleted")}))},addTask(){this.tasks.push({title:this.newTask,done:!1}),this.newTask=""}}});var r=l(1639),p=l(9885),k=l(1169),m=l(4455),w=l(3246),h=l(490),g=l(1233),b=l(1221),q=l(3115),T=l(2857),f=l(1136),y=l(9984),_=l.n(y);const Z=(0,r.Z)(u,[["render",c]]),C=Z;_()(u,"components",{QPage:p.Z,QInput:k.Z,QBtn:m.Z,QList:w.Z,QItem:h.Z,QItemSection:g.Z,QCheckbox:b.Z,QItemLabel:q.Z,QIcon:T.Z}),_()(u,"directives",{Ripple:f.Z})}}]);