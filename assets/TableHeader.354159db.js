import{_ as o}from"./index.e0f9c139.js";import{I as i,V as d,i as l,o as a,s as r,C as m,B as p,a2 as j,H as u}from"./vendor.859b2cdd.js";const f=i({name:"ProjectTableHeader",setup(){const e=d(),s=l(()=>[{name:e.t("project.name")},{name:e.t("project.createDate"),width:"18%"},{name:e.t("project.state"),width:"19%"}]);return{localeInject:e,list:s,getHeadItem:function(t){return{width:t.width,flex:t.width?"initial":1}}}}}),h={class:"project-table-header-container"};var v=o(f,[["render",function(e,s,t,w,I,_){return a(),r("ul",h,[(a(!0),r(m,null,p(e.list,(n,c)=>(a(),r("li",{key:c,style:j(e.getHeadItem(n)),class:"project-table-header-container__head-item"},u(n.name),5))),128))])}],["__scopeId","data-v-55675c7f"]]);export{v as default};
