import{u as L}from"./vuex.a200b86a.js";import{u as F,b as G}from"./vue-router.e1605198.js";import{K as pe,L as fe,M as ve,N as he,O as ge,h as ye,u as Te,i as we,q as Ee,r as Se,P as Ce,Q as be,R as $e,S as ke,y as xe,a as Ie,A as Pe}from"./element-plus.5729a83e.js";import{l as Le,S as Me,b as Oe,O as Z,I as ee,A as Ve,H as Ae,c as De,_ as j}from"./index.3b444863.js";import{m as Re,c as Ue,h as Ne,a as Be,b as He,d as Ye,p as Fe,e as ze,o as Xe,v as Ge,f as je,g as qe,i as Qe,j as Ke}from"./@element-plus.032e0b8e.js";import{d as P,Y as q,X as te,o as u,c as d,M as I,a3 as H,P as x,Q as r,a as g,R as W,U as T,V as z,u as e,L as C,S as t,O as A,b as f,x as se,q as oe,e as Y,a0 as $,D as We,b5 as Je,b4 as Ze,p as et,a5 as tt}from"./@vue.669e5f5d.js";import"./@vueuse.fb085ff4.js";import"./dayjs.66ec207c.js";import"./@intlify.679e9df6.js";import"./lodash-es.c5a0ee5e.js";import"./async-validator.5d25c98b.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.1c4ac15a.js";import"./axios.e9656f83.js";import"./nprogress.2355ac35.js";import"./vue-i18n.be86ef5e.js";import"./vue.e1b8ddc2.js";const st={class:"menu-icon"},ot={class:"menu-icon"},nt=P({props:{menu:{type:Array,default:()=>[]}},setup(w){const s=w,l=F(),y=G(),n=q(s.menu),c=L(),v={Menu:Re,Coordinate:Ue,Help:Ne,Histogram:Be,Setting:He,School:Ye,Postcard:Fe,PieChart:ze,Opportunity:Xe,VideoCameraFilled:Ge},E=m=>{l.name!==m.name&&y.push(m.path)};return(m,h)=>{const _=pe,p=te("menu-item",!0),o=fe;return u(),d("div",{class:A([e(c).getters.menuPosition?"":"flex","menu-item"])},[(u(!0),d(I,null,H(e(n),i=>(u(),d(I,{key:i.name},[!i.children||!i.children.length?(u(),x(_,{key:0,class:"menu-item-item",index:i.name,style:z({background:e(c).getters.menuPosition?typeof e(l).name=="string"&&i.path.includes(e(l).name)?e(c).getters.systemTheme:"":typeof e(l).name=="string"&&i.path.includes(e(l).name)?e(Le)(e(c).getters.headerTheme,30):"",color:e(c).getters.menuPosition&&typeof e(l).name=="string"&&i.path.includes(e(l).name)?"#fff":""}),onClick:M=>E(i)},{title:r(()=>[g("div",st,[(u(),x(W(i.meta&&v[i.meta.icon])))]),g("span",null,T(m.$t(i.name)),1)]),_:2},1032,["index","style","onClick"])):C("",!0),i.children&&i.children.length?(u(),x(o,{key:1,index:i.name},{title:r(()=>[g("div",ot,[(u(),x(W(i.meta&&v[i.meta.icon])))]),g("span",null,T(m.$t(i.name)),1)]),default:r(()=>[t(p,{menu:i.children},null,8,["menu"])]),_:2},1032,["index"])):C("",!0)],64))),128))],2)}}});const J=P({props:{menuList:{type:Array,default:()=>[]}},setup(w){const s=w;F();const l=L(),y=q(s.menuList);return(n,c)=>{const v=ve;return u(),x(v,{class:"left-menu scrollbar header-scrollbar-color","text-color":e(l).getters.menuTheme==="#ffffff"?"#303133":"#ffffffA6",style:z({background:e(l).getters.menuPosition?e(l).getters.menuTheme+"!important":"transform"}),mode:e(l).getters.menuPosition?"vertical":"horizontal","active-text-color":"#ffffff","default-active":e(l).getters.currentRoute.name,"collapse-transition":!1,ellipsis:!1,collapse:!1},{default:r(()=>[t(nt,{menu:e(y)},null,8,["menu"])]),_:1},8,["text-color","style","mode","default-active"])}}});class at{downTime;offsetX;offsetY;x;y;down;timer;constructor(){this.downTime=0,this.offsetX=0,this.offsetY=0,this.x=Me,this.y=Oe,this.down=!1,this.timer=null}mouseDown=s=>{this.downTime=new Date().getTime(),this.down=!0,this.offsetX=s.offsetX,this.offsetY=s.offsetY};mouseMove=s=>new Promise(l=>{clearTimeout(this.timer),this.down&&(this.x=s.clientX-this.offsetX,this.y=s.clientY-this.offsetY,l({x:this.x,y:this.y}))});mouseOut=()=>{this.timer=setTimeout(()=>{this.down=!1},500)};mouseUp=()=>new Promise(s=>{clearTimeout(this.timer),new Date().getTime()-this.downTime<300?s({drawer:!0}):(this.down=!1,s({x:this.x,y:this.y}))})}const lt={class:"prefix-cls"},it=["onClick"],X=P({props:{colorList:{type:Array,default:()=>[]},def:{type:String,default:""}},setup(w){const s=w,{proxy:l}=oe(),y=f(s.def||s.colorList[0]),n=f("#ffffff"),c=()=>{y.value==="#ffffff"?n.value="#000000":n.value="#ffffff"},v=E=>{y.value=E,c(),l.$emit("choose",E)};return se(()=>{c()}),(E,m)=>(u(),d("div",lt,[(u(!0),d(I,null,H(w.colorList||[],h=>(u(),d("span",{key:h,onClick:_=>v(h),class:A(["prefix-cls__item",{["prefix-cls__item--active"]:y.value===h}]),style:z({background:h})},[t(e(je),{color:n.value},null,8,["color"])],14,it))),128))]))}}),rt={class:"interface-set"},ne=P({props:{drawerVisible:{type:Boolean,default:!1}},emits:["visibleClose"],setup(w,{emit:s}){const l=w,{proxy:y}=oe(),n=L(),c=f(!1),v=f(n.getters.tabsShow),E=f(n.getters.menuPosition),m=f(n.getters.tabsType),h=f(n.getters.language),_=Ve,p=Ae,o=De,i=f(n.getters.systemTheme),M=f(n.getters.headerTheme),O=f(n.getters.menuTheme),V=f(n.getters.systemPosition),D=f(window.config.ArLanuages?.includes(h.value)?"ltr":"rtl");Y(()=>l.drawerVisible,a=>{c.value=a},{immediate:!0,deep:!0});const R=()=>{s("visibleClose")},ae=a=>{n.commit("SET_SYSTEM_THEME",a)},Q=a=>{n.commit("SET_MENU_THEME",a)},le=a=>{n.commit("SET_HEADER_THEME",a)},ie=a=>{n.commit("SET_SYSTEM_POSITION",a)},re=a=>{n.commit("SET_TABS_SHOW",a)},ue=a=>{n.commit("SET_TABS_TYPE",a)},ce=a=>{n.commit("SET_MENU_POSITION",a),a||Q(o[0])},me=a=>{const S=window.config.ArLanuages||[];y.$i18n.locale=a,D.value=S.includes(a)?"ltr":"rtl",n.commit("SET_LANGUAGE",a)};return Y(()=>n.getters.systemPosition,a=>{V.value=a},{immediate:!0,deep:!0}),(a,S)=>{const U=he,k=ye,N=Te,B=we,K=Ee,de=Se,_e=ge;return u(),d("div",null,[t(_e,{modelValue:c.value,"onUpdate:modelValue":S[5]||(S[5]=b=>c.value=b),size:"350px","custom-class":"system-drawer",direction:D.value,"before-close":R},{title:r(()=>[g("h3",null,T(a.$t("system")),1)]),default:r(()=>[g("div",null,[t(U,{class:"title"},{default:r(()=>[$(T(a.$t("systemTheme")),1)]),_:1}),t(X,{colorList:e(_),def:i.value,onChoose:ae},null,8,["colorList","def"]),t(U,{class:"title"},{default:r(()=>[$(T(a.$t("headerTheme")),1)]),_:1}),t(X,{colorList:e(p),def:M.value,onChoose:le},null,8,["colorList","def"]),e(n).getters.menuPosition?(u(),d(I,{key:0},[t(U,{class:"title"},{default:r(()=>[$(T(a.$t("menuTheme")),1)]),_:1}),t(X,{colorList:e(o),def:O.value,onChoose:Q},null,8,["colorList","def"])],64)):C("",!0)]),g("div",rt,[t(U,{class:"title"},{default:r(()=>[$(T(a.$t("interfaceSettings")),1)]),_:1}),t(B,{class:"row"},{default:r(()=>[t(k,{span:16},{default:r(()=>[$(T(a.$t("systemPosition")),1)]),_:1}),t(k,{span:8,align:"center"},{default:r(()=>[t(N,{"inline-prompt":"","active-text":a.$t("outSide"),"inactive-text":a.$t("inSide"),"active-value":e(Z),"inactive-value":e(ee),"inactive-color":e(n).getters.systemTheme,modelValue:V.value,"onUpdate:modelValue":S[0]||(S[0]=b=>V.value=b),onChange:ie},null,8,["active-text","inactive-text","active-value","inactive-value","inactive-color","modelValue"])]),_:1})]),_:1}),t(B,{class:"row"},{default:r(()=>[t(k,{span:v.value?8:16},{default:r(()=>[$(T(a.$t("labelTab")),1)]),_:1},8,["span"]),v.value?(u(),x(k,{key:0,span:8,align:"center"},{default:r(()=>[t(de,{modelValue:m.value,"onUpdate:modelValue":S[1]||(S[1]=b=>m.value=b),onChange:ue,placeholder:"Select",size:"small"},{default:r(()=>[t(K,{label:a.$t("tabSimple"),value:1},null,8,["label"]),t(K,{label:a.$t("tabCard"),value:2},null,8,["label"])]),_:1},8,["modelValue"])]),_:1})):C("",!0),t(k,{span:8,align:"center"},{default:r(()=>[t(N,{modelValue:v.value,"onUpdate:modelValue":S[2]||(S[2]=b=>v.value=b),onChange:re},null,8,["modelValue"])]),_:1})]),_:1}),t(B,{class:"row"},{default:r(()=>[t(k,{span:16},{default:r(()=>[$(T(a.$t("menuPosition")),1)]),_:1}),t(k,{span:8,align:"center"},{default:r(()=>[t(N,{"inline-prompt":"","active-text":"\u{1F448}","inactive-text":"\u{1F446}","inactive-color":e(n).getters.systemTheme,modelValue:E.value,"onUpdate:modelValue":S[3]||(S[3]=b=>E.value=b),onChange:ce},null,8,["inactive-color","modelValue"])]),_:1})]),_:1}),t(B,{class:"row"},{default:r(()=>[t(k,{span:16},{default:r(()=>[$(T(a.$t("language")),1)]),_:1}),t(k,{span:8,align:"center"},{default:r(()=>[t(N,{"inline-prompt":"","active-text":a.$t("chinese"),"inactive-text":a.$t("english"),"active-value":"zh","inactive-value":"en","inactive-color":e(n).getters.systemTheme,modelValue:h.value,"onUpdate:modelValue":S[4]||(S[4]=b=>h.value=b),onChange:me},null,8,["active-text","inactive-text","inactive-color","modelValue"])]),_:1})]),_:1})])]),_:1},8,["modelValue","direction"])])}}});const ut=P({setup(w){const s=L(),l=new at,y=f(!1),n=f(l.x),c=f(l.y),v=f(s.getters.systemPosition),E=o=>{l.mouseDown(o)},m=l.mouseOut,h=async o=>{const i=await l.mouseMove(o);n.value=i.x,c.value=i.y},_=async()=>{const o=await l.mouseUp();if(o.drawer){y.value=!0;return}n.value=o.x,c.value=o.y,s.commit("SET_SYSTEM_ICON_POSITION",{x:o.x,y:o.y})},p=()=>{y.value=!1};return Y(()=>s.getters.systemPosition,o=>{v.value=o},{immediate:!0,deep:!0}),se(()=>{const o=s.getters.systemIcon;o&&(n.value=o.x,c.value=o.y)}),(o,i)=>(u(),d(I,null,[v.value===e(Z)?(u(),d("div",{key:0,class:"system-setting",style:z({left:n.value+"px",top:c.value+"px"})},[g("div",{class:"box",onMousedown:E,onMousemove:h,onMouseup:_,onMouseout:i[0]||(i[0]=(...M)=>e(m)&&e(m)(...M))},null,32),t(e(qe),{class:"icon"})],4)):C("",!0),t(ne,{"drawer-visible":y.value,onVisibleClose:p},null,8,["drawer-visible"])],64))}});const ct=w=>(Je("data-v-53f826ce"),w=w(),Ze(),w),mt={class:"pages-header"},dt=ct(()=>g("div",{class:"header-background"},null,-1)),_t={class:"logo"},pt=["src"],ft={key:0,class:"menu-top"},vt={style:{display:"flex","align-items":"center"}},ht={class:"avatar"},gt=P({setup(w){const s=L(),l=G(),y=q(s.getters.userInfo),n=f("default"),c=f("https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"),v=f(!1),E=f(window.config?.title),m=f(window.config?.logo),h=f(s.getters.systemPosition),_=o=>{o===1?l.push("my"):o===2?v.value=!0:o===3&&xe.confirm("\u662F\u5426\u786E\u8BA4\u9000\u51FA\u767B\u5F55?","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}).then(()=>{l.push("login").then(()=>{s.commit("REMOVE_ROUTER_LIST"),Ie({type:"success",message:"\u9000\u51FA\u6210\u529F"})})}).catch(()=>{})},p=()=>{v.value=!1};return Y(()=>s.getters.systemPosition,o=>{h.value=o},{immediate:!0,deep:!0}),(o,i)=>{const M=Ce,O=be,V=$e,D=ke;return u(),d("div",mt,[dt,g("div",_t,[g("img",{src:m.value,alt:"",srcset:""},null,8,pt),g("i",null,T(E.value),1)]),e(s).getters.menuPosition?C("",!0):(u(),d("div",ft,[We(o.$slots,"menu",{},void 0,!0)])),g("div",vt,[t(D,{placement:"bottom-end"},{dropdown:r(()=>[t(V,null,{default:r(()=>[t(O,{onClick:i[0]||(i[0]=R=>_(1))},{default:r(()=>[$(T(o.$t("myInfo")),1)]),_:1}),h.value===e(ee)?(u(),x(O,{key:0,onClick:i[1]||(i[1]=R=>_(2))},{default:r(()=>[$(T(o.$t("system")),1)]),_:1})):C("",!0),t(O,{onClick:i[2]||(i[2]=R=>_(3))},{default:r(()=>[$(T(o.$t("logout")),1)]),_:1})]),_:1})]),default:r(()=>[g("div",ht,[g("span",null,T(e(y).userName),1),t(M,{size:n.value,src:c.value},null,8,["size","src"])])]),_:1}),t(ne,{"drawer-visible":v.value,onVisibleClose:p},null,8,["drawer-visible"])])])}}});var yt=j(gt,[["__scopeId","data-v-53f826ce"]]);const Tt={key:0,class:"router-history router-history-simple scrollbar"},wt={key:0,class:"current-router"},Et=["onClick"],St={key:1},Ct={key:1,class:"router-history router-history-card scrollbar"},bt=["onClick"],$t=P({setup(w){const s=L(),l=F(),y=G(),n=et(()=>{const m=s.getters.routeHistory,h=c(s.getters.routeList,[]),_=[];return m.map(p=>{h.map(o=>{o.path===p.path&&_.push(p)})}),s.commit("SET_ROUTE_HISTORY",_),_}),c=(m,h)=>(m.map(_=>(_.children?c(_.children,h):h.push(_),_)),h),v=m=>y.push(m),E=m=>{s.commit("REMOVE_ROUTE_HISTORY_INDEX",m)};return(m,h)=>{const _=Pe;return u(),d(I,null,[e(s).getters.tabsType===1?(u(),d("div",Tt,[(u(!0),d(I,null,H(e(n),(p,o)=>(u(),d("div",{class:A(["item",e(l).path===p.path?"router-history-active":""]),key:o},[e(l).path===p.path?(u(),d("b",wt)):C("",!0),g("span",{onClick:i=>v(p.path)},T(m.$t(p.label)),9,Et),p.path.includes("home")?C("",!0):(u(),d("span",St,[t(_,{size:16,color:e(l).path===p.path?"#fff":"#495060",onClick:i=>E(o)},{default:r(()=>[t(e(Qe))]),_:2},1032,["color","onClick"])]))],2))),128))])):C("",!0),e(s).getters.tabsType===2?(u(),d("div",Ct,[(u(!0),d(I,null,H(e(n),(p,o)=>(u(),d("div",{class:A(["item",e(l).path===p.path?"router-history-active":""]),key:o},[g("span",{class:"router-history-name",onClick:i=>v(p.path)},T(m.$t(p.label)),9,bt),p.path.includes("home")?C("",!0):(u(),x(_,{key:0,size:16,color:"#fff",onClick:i=>E(o)},{default:r(()=>[t(e(Ke))]),_:2},1032,["onClick"]))],2))),128))])):C("",!0)],64)}}});var kt=j($t,[["__scopeId","data-v-56a689a8"]]);const xt={class:"pages"},It={class:"pages-content"},Pt={key:0,class:"pages-left"},Lt={class:"pages-right"},Mt=P({setup(w){const s=L();F();const l=[...s.getters.routeList];return(y,n)=>{const c=te("router-view");return u(),d("div",xt,[t(yt,null,tt({_:2},[e(s).getters.menuPosition?void 0:{name:"menu",fn:r(()=>[t(J,{menuList:l})])}]),1024),g("div",It,[e(s).getters.menuPosition?(u(),d("div",Pt,[t(J,{menuList:l})])):C("",!0),g("div",Lt,[e(s).getters.tabsShow?(u(),x(kt,{key:0})):C("",!0),g("div",{class:A(["right-content",!e(s).getters.tabsShow||"mg-t-40","scrollbar"])},[t(c)],2)])]),t(ut)])}}});var Jt=j(Mt,[["__scopeId","data-v-363a5543"]]);export{Jt as default};