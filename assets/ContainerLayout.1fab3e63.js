var $=Object.defineProperty;var x=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var g=(e,t,o)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))P.call(t,o)&&g(e,o,t[o]);if(x)for(var o of x(t))V.call(t,o)&&g(e,o,t[o]);return e};import{s as E,O as h,r as n,o as l,t as f,v as c,k as v,K as w,J as O,I as d,m,l as u,D as A,C,a6 as U,T as _,H as b,a2 as K,x as H,a7 as J}from"./vendor.1ba42f6c.js";import{l as T}from"./lodash.07e20355.js";import{_ as z,u as B,i as G}from"./index.3343e366.js";const M=E({name:"UserAccountContainerLayout",props:{title:{type:String,default:"",required:!0},titleIcon:{type:String,default:""},desc:{type:String,default:""},actionList:{type:Array,default:()=>[],required:!0},formData:{type:Object,default:()=>({}),required:!0},formConfig:{type:Array,default:()=>[],required:!0}},emits:["on-submit"],setup(){const{proxy:e}=B(),t=h(!1),o=h();return{showPassword:t,boxForm:o,tooglePassword:function(){t.value=!t.value},getInputItemAttrs:function(s){const r={},i=s.type==="password";return r.type=i?t.value?"text":"password":"text",k({clearable:!i,placeholder:s.placeholder},r)},getFormItemAttrs:function(s){return k({rules:G(s.rules)?s.rules.call(e):""},T.exports.omit(s,["rules"]))},getActionItemEvent:function(s){const r={};return Object.keys(s).forEach(i=>{r[i]=s[i].bind(e.$parent,o.value)}),r},handleClickLink:function(s){s.click.call(e.$parent,o.value)},onSubmit:function(){e.$emit("on-submit",o.value)}}}}),N={class:"user-account-container-layout"},Q={class:"form-title"},R={class:"form-title-icon"},W={class:"form-title-text"},X={class:"form-desc-text"},Y={class:"form-custom-label"};var ae=z(M,[["render",function(e,t,o,s,r,i){const F=n("IconFont"),L=n("el-link"),I=n("FontAwesomeIcon"),j=n("el-input"),q=n("el-form-item"),D=n("el-button"),S=n("el-form");return l(),f("div",N,[c("div",Q,[c("div",R,[e.titleIcon?(l(),v(F,{key:0,icon:e.titleIcon},null,8,["icon"])):w("",!0),O(e.$slots,"titleIcon",{},void 0,!0)]),c("p",W,d(e.title),1),c("p",X,d(e.desc),1)]),m(S,{ref:"boxForm",model:e.formData,"label-position":"top","hide-required-asterisk":"",onKeyup:t[1]||(t[1]=U(a=>e.onSubmit(),["enter"]))},{default:u(()=>[(l(!0),f(A,null,C(e.formConfig,(a,p)=>(l(),v(q,H(b({key:p},e.getFormItemAttrs(a.attrs))),{default:u(()=>[c("div",Y,[c("p",null,d(a.label),1),a.link?(l(),v(L,{key:0,type:"primary",underline:!1,onClick:y=>e.handleClickLink(a.link)},{default:u(()=>[_(d(a.link.text),1)]),_:2},1032,["onClick"])):w("",!0)]),m(j,b({modelValue:e.formData[a.attrs.prop],"onUpdate:modelValue":y=>e.formData[a.attrs.prop]=y},e.getInputItemAttrs(a)),K({_:2},[a.prefixIcon?{name:"prefix",fn:u(()=>[m(I,{class:"input-icon-prefix",icon:a.prefixIcon},null,8,["icon"])])}:void 0,a.type==="password"?{name:"suffix",fn:u(()=>[m(I,{class:"input-icon-lock",icon:e.showPassword?"eye":"eye-slash",onClick:t[0]||(t[0]=y=>e.tooglePassword())},null,8,["icon"])])}:void 0]),1040,["modelValue","onUpdate:modelValue"])]),_:2},1040))),128)),(l(!0),f(A,null,C(e.actionList,(a,p)=>(l(),f("div",{key:`${p}-`,class:"submit-form-action-list"},[m(D,b(a.attrs,{class:"submit-form-action-button"},J(e.getActionItemEvent(a.on)||{})),{default:u(()=>[_(d(a.text),1)]),_:2},1040)]))),128))]),_:1},8,["model"])])}],["__scopeId","data-v-493bf324"]]);export{ae as default};
