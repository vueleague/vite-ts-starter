import{_ as s}from"./index.88885fe5.js";import{s as r,r as a,o as c,t as k,m as t,l as o,v as i,I as N,h as b,u as B,k as S}from"./vendor.2890fcfb.js";import{N as j}from"./NavBar.53416543.js";import"./Translations.5dcb2c7e.js";const y=r({name:"NavigationSideGoBack",props:{title:{type:String,default:""}}}),h={class:"go-back-container"},w={class:"go-back-title"},x=r({name:"LayoutView",components:{NavigationNavBar:j,NavigationSideGoBack:s(y,[["render",function(e,u,d,f,v,p){const n=a("IconFont"),l=a("router-link");return c(),k("div",h,[t(l,{to:`/${e.$route.params.locale||""}`},{default:o(()=>[t(n,{icon:"iconarrow_left",class:"go-back-icon"}),i("h1",w,N(e.title),1)]),_:1},8,["to"])])}],["__scopeId","data-v-f11fc9f6"]])},setup:()=>(b(),B(),{})}),G=i("ul",null,[i("li",null,"111"),i("li",null,"222"),i("li",null,"333")],-1);var F=s(x,[["render",function(e,u,d,f,v,p){const n=a("NavigationSideGoBack"),l=a("NavigationNavBar"),m=a("LayoutSection"),g=a("router-view"),_=a("LayoutArea");return c(),S(_,null,{top:o(()=>[t(l,{fixed:!1},{default:o(()=>[t(n,{title:e._t("base.goback")},null,8,["title"])]),_:1})]),side:o(()=>[t(m,{"has-divider":"",title:e._t("result.title")},{default:o(()=>[G]),_:1},8,["title"])]),content:o(()=>[t(g)]),_:1})}]]);export{F as default};
