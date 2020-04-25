(this["webpackJsonpmui-template"]=this["webpackJsonpmui-template"]||[]).push([[0],{227:function(e,a,t){e.exports=t(255)},255:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(11),l=t.n(o),c=t(19),i=t(25),s=t(55),u=t(217),m=t(283),d=t(284),p=t(286),b=t(287),h=t(58),E=t(203),g=t.n(E),v=Object(u.a)("div")((function(e){var a=e.theme;return Object(s.a)({flexGrow:1,display:"flex",flexDirection:"column",margin:a.spacing(3)},a.breakpoints.up("md"),{width:"96%",minWidth:a.spacing(128),marginTop:a.spacing(4)})})),f=Object(m.a)((function(e){return{root:{flexGrow:1},appbar:{borderTop:"4px solid ".concat(e.palette.primary.dark)},menuButton:{color:e.palette.common.white},title:Object(s.a)({flexGrow:1,width:e.spacing(10),minWidth:e.spacing(8),color:e.palette.common.white,fontFamily:"'Baloo Paaji 2'"},e.breakpoints.down("xs"),{display:"none"})}})),C=function(e){var a=e.title,t=(e.subTitle,e.autocomplete),n=e.children,o=(Object(i.a)(e,["title","subTitle","autocomplete","children"]),f());return r.a.createElement("div",{className:o.root},r.a.createElement(d.a,{position:"static",className:o.appbar},r.a.createElement(p.a,null,r.a.createElement(b.a,{edge:"start",className:o.menuButton,color:"inherit","aria-label":"open drawer"},r.a.createElement(g.a,null)),r.a.createElement(h.a,{className:o.title,variant:"h6",noWrap:!0},a),t)),r.a.createElement(v,null,n))},S=t(207),y=t.n(S),O=t(206),A=t.n(O),w=t(208),N=t.n(w),j=t(302),k=t(5),T=t(288),x=Object(k.a)((function(e){return{tooltip:{backgroundColor:e.palette.primary.darker,padding:12,color:e.palette.tint10,marginTop:0,border:"1px solid "+e.palette.shade50}}}))(T.a),R=function(e){var a=e.html,t=e.title,n=Object(i.a)(e,["html","title"]);return r.a.createElement(x,Object.assign({title:r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{variant:"caption",color:"inherit"},t),a),arrow:!0},n))},B=function(e){var a=e.children,t=e.title,n=e.tooltipProps,o=Object(i.a)(e,["children","title","tooltipProps"]);return r.a.createElement(R,Object.assign({title:t},n),r.a.createElement(b.a,o,a))},_=function(){var e=function(e){window.open(e,"_blank")};return r.a.createElement(j.a,{flexDirection:"row"},r.a.createElement(h.a,{variant:"caption"},"Follow me on :"),r.a.createElement(B,{title:"linkedin",onClick:function(){return e("https://www.linkedin.com/in/cyianite/")}},r.a.createElement(A.a,null)),r.a.createElement(B,{title:"Github",onClick:function(){return e("https://github.com/christiancrisologo")}},r.a.createElement(y.a,null)),r.a.createElement(B,{title:"Working Portfolio",onClick:function(){return e("https://portfolio.cyianite.now.sh/")}},r.a.createElement(N.a,null)))},I=Object(m.a)((function(e){return{footer:{left:0,bottom:0,width:"100%",marginTop:e.spacing(50),padding:e.spacing(3),color:e.palette.shade60,marginBottom:-e.spacing(3),textAlign:"center",borderTop:"1px solid rgba(0,0,0,.2)"}}})),P=function(e){var a=e.children,t=I();return r.a.createElement("div",{className:t.footer},a)},H=function(e){var a=e.children,t=e.autocomplete;return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{title:"ABN / COMPANY SEARCH",autocomplete:t},a,r.a.createElement(P,null,r.a.createElement(h.a,{variant:"body2"},"CHRISTIAN R. CRISOLOGO - Full-stack / Senior Frontend Developer"),r.a.createElement(_,null))))},F=t(297),D=t(298),M=t(299),U=t(215),W=t.n(U),G=t(15),L=t(3),Y=t(8),J=t(290),z=t(291),V=t(292),$=t(212),q=t.n($),K=t(303),Q="Company",X="ABN",Z=t(57),ee=t.n(Z),ae=t(95),te=t(209),ne=t.n(te),re="".concat(window.location.protocol,"//").concat(window.location.hostname,":5000"),oe=function(){var e=Object(ae.a)(ee.a.mark((function e(a){var t,n,r=arguments;return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},e.next=3,ne()(Object(G.a)({url:a,method:t.method||"get"},t.data&&t.data,{},t.params&&t.params,{withCredentials:!1},t));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),le=function(e){return function(){var a=Object(ae.a)(ee.a.mark((function a(t){var n,r;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t({type:ie.SEARCH_ABN_STARTED}),a.next=3,oe("".concat(re,"/abn/").concat(e));case 3:if(!(n=a.sent)||!n.Abn){a.next=7;break}return t({type:ie.SEARCH_ABN_SUCCESS,payload:n}),a.abrupt("return",Promise.resolve(n));case 7:return a.next=9,oe("".concat(re,"/company/").concat(e));case 9:if(!((r=a.sent)&&r.Names&&r.Names.length)){a.next=13;break}return t({type:ie.SEARCH_COMPANY_SUCCESS,payload:r.Names}),a.abrupt("return",Promise.resolve(r.Names));case 13:return a.abrupt("return",Promise.resolve());case 14:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},ce=function(e){return function(a){a({type:ie.SEARCH_SELECTED,payload:e})}},ie={SEARCH_ABN_SUCCESS:"SEARCH_ABN_SUCCESS",SEARCH_COMPANY_SUCCESS:"SEARCH_COMPANY_SUCCESS",SEARCH_ABN_STARTED:"SEARCH_ABN_STARTED",SEARCH_SELECTED:"SEARCH_SELECTED"},se=Object(n.createContext)({}),ue={searchOptions:[],abn:null,searchSelected:null,searchType:""};function me(e,a){var t=a.type,n=a.payload;switch(t){case ie.SEARCH_ABN_STARTED:return Object(G.a)({},e,{},ue);case ie.SEARCH_SELECTED:return Object(G.a)({},e,{searchSelected:n});case ie.SEARCH_COMPANY_SUCCESS:return Object(G.a)({},e,{searchOptions:n,searchType:Q});case ie.SEARCH_ABN_SUCCESS:return Object(G.a)({},e,{searchOptions:[n],abn:n,searchType:X});default:return e}}var de=function(e){var a=e.children,t=Object(n.useReducer)(me,ue),o=Object(c.a)(t,2),l=o[0],i=o[1];return r.a.createElement(se.Provider,{value:[l,i]},a)},pe=Object(m.a)((function(e,a){return{root:{transition:e.transitions.create("width"),width:"100%",minWidth:310},searchTextfield:{color:e.palette.common.white,"& .MuiInputBase-root":{padding:e.spacing(.4,.5,.4,0),backgroundColor:Object(Y.c)(e.palette.shade60,.35),"&:hover":{backgroundColor:Object(Y.c)(e.palette.shade60,.75)}},"& .PrivateNotchedOutline-root, & .MuiOutlinedInput-notchedOutline":{display:"none"},"& .MuiInputBase-input":{color:e.palette.common.white,fontFamily:"Raleway",fontWeight:700,"&:focus":{color:Object(Y.c)(e.palette.primary.main,1)}}},searchIcon:{color:e.palette.common.white},progressIcon:{color:e.palette.secondary.main,marginLeft:e.spacing(1),marginRight:e.spacing(.5)}}})),be=function(){var e=r.a.useContext(se),a=Object(c.a)(e,2),t=a[0],n=a[1],o=pe(),l=r.a.useState(!1),i=Object(c.a)(l,2),s=i[0],u=i[1],m=r.a.useState(!1),d=Object(c.a)(m,2),p=d[0],h=d[1],E=r.a.useState([]),g=Object(c.a)(E,2),v=g[0],f=g[1];r.a.useEffect((function(){f([t.abn])}),[t.abn,n]);var C=r.a.useCallback((function(e){e.target.value.length>2&&(h(!0),le(e.target.value)(n).then((function(){return h(!1)})))}),[n]),S=r.a.useCallback((function(e,a){f(a),ce(a)(n)}),[n]);return r.a.createElement("div",{className:Object(L.a)(o.root),style:{width:s?500:300}},r.a.createElement(K.a,{className:o.autoComplete,id:"autocomplete-search",freeSolo:!0,options:t.searchOptions,getOptionSelected:function(e,a){return e.Abn===a.Abn},getOptionLabel:function(e){return e.Abn?"".concat(e.Name||e.EntityName," - ").concat(e.Abn):""},disableClearable:!0,loading:p,value:v,onChange:S,renderInput:function(e){return r.a.createElement(J.a,Object.assign({},e,{onChange:C,className:o.searchTextfield,onFocus:function(){return u(!0)},onBlur:function(){return u(!1)},InputProps:Object(G.a)({},e.InputProps,{type:"search",startAdornment:r.a.createElement(z.a,{position:"start"},r.a.createElement(b.a,{"aria-label":"search",className:o.searchIcon},r.a.createElement(q.a,null))),endAdornment:r.a.createElement(r.a.Fragment,null,p?r.a.createElement(V.a,{size:20,className:o.progressIcon}):null,e.InputProps.endAdornment)}),placeholder:"Search ABN or company name",variant:"outlined"}))}}))},he=t(293),Ee=t(294),ge=t(295),ve=t(296),fe=t(305),Ce=Object(m.a)((function(e){return{root:{width:e.spacing(5),height:e.spacing(5),color:e.palette.common.white},imageAvatar:{"& .MuiAvatar-img":{width:"auto"},padding:1.2}}})),Se=function(e){e.className;var a=e.label,t=e.useNameInitial,o=e.children,l=e.useRandomColors,c=e.color,s=void 0===c?"initial":c,u=(e.labelComponent,Object(i.a)(e,["className","label","useNameInitial","children","useRandomColors","color","labelComponent"]),Object(n.useMemo)((function(){return l?"#"+Math.random().toString(16).substr(-6):s}),[s,l])),m=t?function(e){if(!e||!e.length)return"";var a=e.match(/\b\w/g)||[];return((a.shift()||"")+(a.pop()||"")).toUpperCase()}(a||o):a||o;return r.a.createElement(fe.a,{style:{backgroundColor:u}},m)},ye=function(e){var a=e.className,t=e.label,n=e.useNameInitial,o=(e.children,e.useRandomColors),l=e.color,c=e.labelComponent,s=e.src,u=Object(i.a)(e,["className","label","useNameInitial","children","useRandomColors","color","labelComponent","src"]),m=Ce();return s?r.a.createElement(fe.a,Object.assign({},u,{src:s,className:Object(L.a)(m.root,m.imageAvatar,a)})):r.a.createElement(Se,Object.assign({},u,{className:Object(L.a)(m.root,a),label:t,useNameInitial:n,useRandomColors:o,color:l,labelComponent:c}))},Oe=t(214),Ae=t.n(Oe),we=t(213),Ne=t.n(we),je=Object(m.a)((function(e){return{root:{padding:e.spacing(2),boxShadow:e.shadows[2],cursor:"pointer","&:hover":{boxShadow:e.shadows[12],backgroundColor:e.palette.secondaryColors[50]}}}})),ke=function(e){var a=e.label,t=e.value;return r.a.createElement(j.a,{display:"flex",flexDirection:"row"},r.a.createElement(h.a,{variant:"body2",gutterBottom:!0,style:{minWidth:114}},r.a.createElement("strong",null,a," ")),r.a.createElement("span",{style:{padding:"0 4px"}},":"),r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},t))},Te=function(e){var a=e.title,t=e.subTitle,n=e.selected,o=void 0!==n&&n,l=e.children,i=je(),s=r.a.useState(!1),u=Object(c.a)(s,2),m=u[0],d=u[1];r.a.useEffect((function(){d(o)}),[o]);var p=r.a.useCallback((function(){d(!m)}),[m]);return r.a.createElement(he.a,{className:i.root,onClick:p},r.a.createElement(Ee.a,{avatar:r.a.createElement(ye,{"aria-label":"avatar",className:i.avatar,useNameInitial:!0,useRandomColors:!0,label:a}),action:r.a.createElement(b.a,{"aria-label":"expand"},m?r.a.createElement(Ne.a,null):r.a.createElement(Ae.a,null)),title:r.a.createElement(h.a,{variant:"h6",noWrap:!0},a),subheader:t}),r.a.createElement(ge.a,{in:m,timeout:"auto"},r.a.createElement(ve.a,null,l," ")))},xe=function(e){var a=e.EntityTypeCode,t=void 0===a?"":a,n=e.Abn,o=void 0===n?"":n,l=e.AbnStatus,c=void 0===l?"":l,i=e.EntityName,s=void 0===i?"":i,u=e.EntityTypeName,m=void 0===u?"":u,d=e.Gst,p=void 0===d?"":d,b=e.selected,h=void 0!==b&&b;return r.a.createElement(Te,{title:s,subTitle:o,selected:h},r.a.createElement(ke,{label:"ABN   ",value:o}),r.a.createElement(ke,{label:"Entity Type Code   ",value:t}),r.a.createElement(ke,{label:"Entity Name  ",value:s}),r.a.createElement(ke,{label:"Abn Status  ",value:c}),r.a.createElement(ke,{label:"Gst  ",value:p}),r.a.createElement(ke,{label:"EntityTypeName  ",value:m}))},Re=function(e){var a=e.Name,t=void 0===a?"":a,n=e.Abn,o=void 0===n?"":n,l=e.AbnStatus,c=void 0===l?"":l,i=e.IsCurrent,s=void 0===i?"":i,u=e.NameType,m=void 0===u?"":u,d=e.PostCode,p=void 0===d?"":d,b=e.State,h=void 0===b?"":b,E=e.Score,g=void 0===E?"":E,v=e.selected,f=void 0!==v&&v;return r.a.createElement(Te,{title:t,subTitle:o,selected:f},r.a.createElement(ke,{label:"Name   ",value:t}),r.a.createElement(ke,{label:"ABN   ",value:o}),r.a.createElement(ke,{label:"ABN Status   ",value:c}),r.a.createElement(ke,{label:"isCurrent  ",value:s}),r.a.createElement(ke,{label:"Name type ",value:m}),r.a.createElement(ke,{label:"Postcode  ",value:p}),r.a.createElement(ke,{label:"State  ",value:h}),r.a.createElement(ke,{label:"Score  ",value:g}))},Be=Object(m.a)((function(e){return{divider:{marginTop:e.spacing(1),marginBottom:e.spacing(2)},statusBar:{margin:e.spacing(2)},fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2),backgroundColor:e.palette.primary.dark,"& .MuiFab-label":{color:e.palette.common.white}}}})),_e=function(){var e=Be(),a=r.a.useContext(se),t=Object(c.a)(a,1)[0];return r.a.createElement(H,{autocomplete:r.a.createElement(be,null)},t.searchOptions&&t.searchOptions.length?r.a.createElement("div",{className:e.statusBar},r.a.createElement(h.a,{variant:"body2",gutterBottom:!0},t.searchType," search found (",t.searchOptions.length,")"),r.a.createElement(F.a,{className:e.divider})):null,r.a.createElement(D.a,{container:!0,spacing:2},t.searchSelected&&t.searchSelected.Abn||!t.searchOptions||!t.searchOptions.length?null:t.searchOptions.map((function(e){return r.a.createElement(D.a,{item:!0,xs:12,md:6,key:e.Abn},t.searchType===X?r.a.createElement(xe,e):r.a.createElement(Re,e))})),t.searchSelected&&t.searchSelected.Abn?r.a.createElement(D.a,{item:!0,xs:12,md:6},t.searchType===X?r.a.createElement(xe,Object.assign({},t.searchSelected,{selected:!0})):r.a.createElement(Re,Object.assign({},t.searchSelected,{selected:!0}))):null),r.a.createElement(M.a,{"aria-label":"up",className:e.fab,onClick:function(){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=a||e&&e.current&&e.current;window.scrollTo({top:t?t.offsetTop-90:0,behavior:"smooth"})}(0)}},r.a.createElement(W.a,null)))},Ie=t(9),Pe=t(300),He=t(216),Fe=t(301),De=Object(G.a)({},Ie.a,{tint5:"rgba(255, 255, 255, 0.95)",tint10:"rgba(255, 255, 255, 0.9)",tint20:"rgba(255, 255, 255, 0.8)",tint30:"rgba(255, 255, 255, 0.7)",tint40:"rgba(255, 255, 255, 0.6)",tint50:"rgba(255, 255, 255, 0.5)",tint60:"rgba(255, 255, 255, 0.4)",tint70:"rgba(255, 255, 255, 0.3)",tint80:"rgba(255, 255, 255, 0.2)",tint90:"rgba(255, 255, 255, 0.1)",tint100:"rgba(255, 255, 255, 0)",shade2:"rgba(0, 0, 0, 0.02)",shade5:"rgba(0, 0, 0, 0.05)",shade10:"rgba(0, 0, 0, 0.1)",shade20:"rgba(0, 0, 0, 0.2)",shade30:"rgba(0, 0, 0, 0.3)",shade40:"rgba(0, 0, 0, 0.4)",shade50:"rgba(0, 0, 0, 0.5)",shade60:"rgba(0, 0, 0, 0.6)",shade70:"rgba(0, 0, 0, 0.7)",shade80:"rgba(0, 0, 0, 0.8)",shade90:"rgba(0, 0, 0, 0.9)",shade100:"rgba(0, 0, 0, 1)",errorColor:"#F5222D",warningColor:"#FAAD14",successColor:"#4CAF50",infoColor:"#2979FF",textPrimaryColor:"rgba(0, 0, 0, 0.9)",textSecondaryColor:"rgba(0, 0, 0, 0.6)",textDisabledColor:"rgba(0, 0, 0, 0.3)",primaryColors:Ie.a.orange,secondaryColors:Ie.a.yellow}),Me={palette:Object(G.a)({},De,{background:{default:De.blueGrey[50]},primary:Object(G.a)({},Ie.a.cyan,{light:Ie.a.orange[200],main:Ie.a.orange[700],dark:Ie.a.orange[900],darker:Ie.a.orange[900]}),secondary:Object(G.a)({},Ie.a.yellow,{light:Ie.a.yellow[200],main:Ie.a.yellow[500],dark:Ie.a.yellow[700],darker:Ie.a.yellow[900]}),errorColors:Ie.a.cyan,warningColors:Ie.a.orange,successColors:Ie.a.green,infoColors:Ie.a.blue}),typography:{useNextVariants:!0,fontFamily:["Raleway","'Baloo Paaji 2'","-apple-system","BlinkMacSystemFont",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}},Ue=function(e){var a=e.children,t=e.theme,n=void 0===t?Me:t;return r.a.createElement(Pe.a,{theme:Object(He.a)(n)},r.a.createElement(Fe.a,null),a)};var We=function(){return r.a.createElement(Ue,null,r.a.createElement(de,null,r.a.createElement(_e,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[227,1,2]]]);
//# sourceMappingURL=main.03c0ed64.chunk.js.map