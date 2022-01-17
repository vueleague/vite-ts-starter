import{s as p,Y as b,i as $,r as n,o as m,t as N,m as l,l as c,v as g,I as w,M as k,O as E,a0 as I,L as j,w as V,X as B,k as v,a2 as F,H as P,u as H,P as M,S as A}from"./vendor.7e121d3c.js";import{_ as f,u as x,c as R,P as y}from"./index.79bc179c.js";import{N as U}from"./NavBar.302663c0.js";import D from"./ProjectForm.466d7677.js";import K from"./TableHeader.843e1619.js";import O from"./TableBody.27a8245c.js";import{l as X}from"./lodash.5c2e5cc1.js";import"./Translations.41571d81.js";import"./ProjectItem.2b63f58e.js";const Y=p({name:"NavigationSideLogo",setup(){const e=b();return{title:$(()=>e.t("base.systemTitle"))}}}),q={class:"side-logo-container"},z=(e=>(k("data-v-1207b566"),e=e(),E(),e))(()=>g("img",{class:"side-logo-img",src:"assets/vue.20be1948.svg",alt:"\u5546\u6807"},null,-1)),G={class:"side-logo-title"};var J=f(Y,[["render",function(e,a,r,o,t,d){const s=n("router-link");return m(),N("div",q,[l(s,{to:`/${e.$route.params.locale||""}`},{default:c(()=>[z,g("h1",G,w(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-1207b566"]]);const Q=p({name:"SearchSelect",components:{Loading:I},props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""},fetch:{type:Function,default:()=>()=>{}}},emits:["update:modelValue","change","select"],setup(e){const{proxy:a}=x(),r=j(!1),o=j("");return V(()=>e.modelValue,t=>{o.value=t},{immediate:!0}),V(()=>o,X.exports.debounce(function(t){a.$emit("update:modelValue",t),a.$emit("change",t)},300)),{loading:r,searchValue:o}},methods:{keydown(e){e.keyCode===229&&(e.returnValue=!1,e.stopPropagation()),e.keyCode===32&&(e.returnValue=!1)},getExecText:e=>e.replace(new RegExp(/(<([^>]+)>)/,"gi"),""),handleSelect({value:e}){this.$emit("select",e)},async handleSearch(e,a){const r=e.toLowerCase().replace(new RegExp(/[-[\]{}()*+?.,\\^$|#\s]/g),"\\$&");let o=[];if(!r)return void a(o);this.loading=!0,o=await this.fetch(r)||[],o.forEach(t=>{t.label=t.label.replace(new RegExp(r,"gi"),d=>`<span class="search-select-highlight">${d}</span>`)}),a(o),setTimeout(()=>{B(()=>{this.loading=!1})},200)}}}),W=["title","innerHTML"],Z=p({name:"SearchCorporation",components:{SearchSelect:f(Q,[["render",function(e,a,r,o,t,d){const s=n("loading"),u=n("el-icon"),h=n("IconFont"),S=n("el-autocomplete");return m(),v(S,P({modelValue:e.searchValue,"onUpdate:modelValue":a[0]||(a[0]=i=>e.searchValue=i),modelModifiers:{trim:!0}},e.$attrs,{class:"search-input-container","popper-class":"search-select-container","trigger-on-focus":!1,"fetch-suggestions":e.handleSearch,placeholder:e.placeholder,onSelect:e.handleSelect,onKeydownCapture:a[1]||(a[1]=i=>e.keydown(i))}),F({default:c(({item:i})=>[g("span",{title:e.getExecText(i.label),innerHTML:i.label},null,8,W)]),_:2},[e.loading?{name:"suffix",fn:c(()=>[l(u,{class:"search-loading-icon"},{default:c(()=>[l(s)]),_:1})])}:{name:"suffix",fn:c(()=>[g("i",{class:"search-icon"},[l(h,{icon:"iconsearch"})])])}]),1040,["modelValue","fetch-suggestions","placeholder","onSelect"])}]])},emits:["select"],setup:()=>({searchValue:j("")}),methods:{handleFetchSearch:async e=>R.map(a=>({value:a,label:a})),handleSelectSearch(e){this.$emit("select",e)}}});var de=f(p({name:"ProjectList",components:{NavigationNavBar:U,NavigationSideLogo:J,ProjectTableHeader:K,ProjectTableBody:O,SearchCorporation:f(Z,[["render",function(e,a,r,o,t,d){const s=n("SearchSelect");return m(),v(s,P({modelValue:e.searchValue,"onUpdate:modelValue":a[0]||(a[0]=u=>e.searchValue=u),fetch:e.handleFetchSearch,placeholder:"\u641C\u7D22\u9879\u76EE","select-when-unmatched":"","highlight-first-item":""},e.$attrs,{onSelect:e.handleSelectSearch}),null,16,["modelValue","fetch","onSelect"])}]])},setup(){const{proxy:e}=x(),a=H(),r=b();function o(t){a.dispatch(y.getAction("getProjectList"),{kw:t})}return o(),{localeInject:r,handleCreateProject:function(){const t=A({name:"",corpName:"",notes:""});e.$ModalDialog({title:r.t("project.create"),top:"10vh",width:"50vw","show-close":!0,"close-on-click-modal":!1,"close-on-press-escape":!1,renderComponent:{data:t,component:D},async onConfirm(d,s){if(!await d.validateRules())return Promise.reject(new Error("error"));s.fullLoading=!0;const{error:u,data:h}=await a.dispatch(y.getAction("createProject"),t);if(s.fullLoading=!1,u)return Promise.reject(new Error("error"));a.dispatch(y.getAction("getProjectList"))}})},handleSelectSearch:o}}}),[["render",function(e,a,r,o,t,d){const s=n("NavigationSideLogo"),u=n("NavigationNavBar"),h=n("IconFont"),S=n("el-button"),i=n("LayoutSection"),L=n("SearchCorporation"),T=n("ProjectTableHeader"),_=n("ProjectTableBody"),C=n("LayoutArea");return m(),v(C,null,{top:c(()=>[l(u,{fixed:!1},{default:c(()=>[l(s)]),_:1})]),side:c(()=>[l(i,{title:e.localeInject.t("project.manageTitle")},{default:c(()=>[l(S,{type:"primary",class:"create-action",onClick:a[0]||(a[0]=ee=>e.handleCreateProject())},{default:c(()=>[l(h,{icon:"iconestablish"}),M(" "+w(e._t("project.create")),1)]),_:1})]),_:1},8,["title"])]),content:c(()=>[l(i,{"has-divider":"","flex-content":""},{head:c(()=>[l(L,{onSelect:e.handleSelectSearch},null,8,["onSelect"])]),default:c(()=>[l(T),l(_)]),_:1})]),_:1})}],["__scopeId","data-v-6b5d9458"]]);export{de as default};
