var I=Object.defineProperty,B=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var i=(a,o,s)=>o in a?I(a,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[o]=s,u=(a,o)=>{for(var s in o||(o={}))y.call(o,s)&&i(a,s,o[s]);if(p)for(var s of p(o))z.call(o,s)&&i(a,s,o[s]);return a},m=(a,o)=>B(a,M(o));import{_ as f,a as H,l as T}from"./index.56d4e75e.js";import{s as k,o as r,t as h,A as w,M as D,O as U,v as e,a4 as N,g as O,h as V,L as j,i as q,r as n,k as g,l as c,m as L,C as E,I as F,D as G}from"./vendor.0f9e0ce5.js";const J=k({name:"LogoIcon",props:{dark:{type:Boolean,default:!1}}}),K=[(a=>(D("data-v-6168be91"),a=a(),U(),a))(()=>e("svg",{viewBox:"0 0 512 512"},[e("path",{d:"M478.33 433.6l-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4zM334.83 362L368 281.65L401.17 362z",fill:"currentColor"}),e("path",{d:"M267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73c39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36c-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93c.92 1.19 1.83 2.35 2.74 3.51c-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59c22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9z",fill:"currentColor"})],-1))],P=k({name:"TranslationsBox",components:{ArrowDown:N,LogoIcon:f(J,[["render",function(a,o,s,t,l,C){return r(),h("span",{class:w(["locales-logo-icon",{"is-dark":a.dark}])},K,2)}],["__scopeId","data-v-6168be91"]])},props:{dark:{type:Boolean,default:!1}},setup(){const a=O(),o=V(),s=H();return{localesList:j(T),currentLocale:q(()=>s.state.UserAccount.locale),handleChange:t=>{setTimeout(()=>{const{localeCode:l}=t;o.replace({params:m(u({},a.params),{locale:l})}),s.dispatch("UserAccount/setLanguage",{locale:l})})}}}}),Q={class:"icon-outer"},R={class:"custom-dropdown-item"};var Y=f(P,[["render",function(a,o,s,t,l,C){const v=n("LogoIcon"),b=n("el-dropdown-item"),_=n("el-dropdown-menu"),x=n("el-dropdown");return r(),g(x,{class:w(["translations-box",{"is-dark":a.dark}]),"popper-class":"translations-box",trigger:"click",onCommand:a.handleChange},{dropdown:c(()=>[L(_,null,{default:c(()=>[(r(!0),h(G,null,E(a.localesList,(d,A)=>(r(),g(b,{key:A,command:d,disabled:a.currentLocale===d.localeCode},{default:c(()=>[e("span",R,F(d.localeName),1)]),_:2},1032,["command","disabled"]))),128))]),_:1})]),default:c(()=>[e("span",Q,[L(v,{dark:a.dark},null,8,["dark"])])]),_:1},8,["class","onCommand"])}]]);export{Y as T};
