(this.webpackJsonpsimplyFy=this.webpackJsonpsimplyFy||[]).push([[0],{153:function(e,t,n){},154:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(22),r=n.n(c),i=(n(153),n(154),n(29)),o=Object(i.a)(),l=(n(155),n(138)),j=n(21),u=n(128),d=n(43),h=n.n(d),b=n(72),O=n(129),x=n(130),p=n(144),f=n(141),g=n(131),y=n.n(g),v=n(246),m=n(64),w=n(36),C=n(252),k=n(251),S=n(250),E=n(249),F=n(255),M=n(73),D=n(248),P=n(247),U=n(7),B=function(e){var t=Object(a.useState)(),n=Object(M.a)(t,2),s=n[0],c=n[1],r=Object(a.useState)(),i=Object(M.a)(r,2),o=i[0],l=i[1],j=Object(a.useState)(),u=Object(M.a)(j,2),d=u[0],h=u[1],b=Object(a.useState)(),O=Object(M.a)(b,2),x=O[0],p=O[1];return Object(a.useEffect)((function(){return c(e.user.name),l(e.user.email),h(e.user.phone),p(e.user.website),function(){c(""),l(""),h(""),p("")}}),[e.visible]),Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)(D.a,{title:"Basic Modal",visible:e.visible,onOk:e.onOk,onCancel:e.onCancel,children:[Object(U.jsxs)(m.a,{style:{padding:5},justify:"space-around",children:[Object(U.jsxs)(w.a,{children:[Object(U.jsx)("span",{style:{color:"red"},children:"*"}),"Name:"]}),Object(U.jsx)(w.a,{children:Object(U.jsx)(P.a,{placeholder:"Name",value:s,onChange:function(e){return c(e.target.value)}})})]}),Object(U.jsxs)(m.a,{style:{padding:5},justify:"space-around",children:[Object(U.jsxs)(w.a,{children:[Object(U.jsx)("span",{style:{color:"red"},children:"*"}),"Email:"]}),Object(U.jsx)(w.a,{children:Object(U.jsx)(P.a,{placeholder:"Email",value:o,onChange:function(e){return l(e.target.value)}})})]}),Object(U.jsxs)(m.a,{style:{padding:5},justify:"space-around",children:[Object(U.jsxs)(w.a,{children:[Object(U.jsx)("span",{style:{color:"red"},children:"*"}),"Phone:"]}),Object(U.jsx)(w.a,{children:Object(U.jsx)(P.a,{width:"100%",placeholder:"Phone",value:d,onChange:function(e){return h(e.target.value)}})})]}),Object(U.jsxs)(m.a,{style:{padding:5},justify:"space-around",children:[Object(U.jsxs)(w.a,{children:[Object(U.jsx)("span",{style:{color:"red"},children:"*"}),"Website:"]}),Object(U.jsx)(w.a,{children:Object(U.jsx)(P.a,{placeholder:"Website",value:x,onChange:function(e){return p(e.target.value)}})})]})]})})},R=n(254),T=n(253),I=function(e){return Object(U.jsx)("div",{children:e.heart?Object(U.jsx)(R.a,{style:{color:"red"}}):Object(U.jsx)(T.a,{style:{color:"red"}})})},J=v.a.Meta,L=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(O.a)(this,n),(a=t.call(this,e)).componentDidMount=Object(b.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.getUser();case 1:case"end":return e.stop()}}),e)}))),a.getUser=function(){y.a.get("https://jsonplaceholder.typicode.com/users/").then((function(e){console.log("users",e.data),a.setState({users:e.data})})).catch((function(e){console.log(e)}))},a.handleDeleteUser=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.setState({users:a.state.users.filter((function(e){return e.id!==t}))});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.handleClose=function(e){a.setState({showModal:!1})},a.handleShow=function(){var e=Object(b.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("u",t.name),e.next=3,a.setState({userEdit:t});case 3:a.setState({showModal:!0});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={users:[],avatars:null,heart:!1,showModal:!0,userEdit:null},a}return Object(x.a)(n,[{key:"render",value:function(){var e=this;return Object(U.jsxs)(U.Fragment,{children:[null!=this.state.userEdit&&Object(U.jsx)(B,{onCancel:this.handleClose,visible:this.state.showModal,onOk:this.handleCommentEdit,user:this.state.userEdit}),Object(U.jsx)(m.a,{justify:"start",children:this.state.users.map((function(t,n){return Object(U.jsx)(w.a,{style:{paddingTop:20},lg:{span:5,offset:1},children:Object(U.jsx)(v.a,{style:{width:300},cover:Object(U.jsx)("img",{style:{width:"100%",backgroundColor:"lightgray"},alt:"example",src:"https://avatars.dicebear.com/v2/avataaars/".concat(t.name,".svg?options[mood][]=happy")}),actions:[Object(U.jsx)(I,{heart:e.state.heart,onClick:Object(b.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({heart:!0});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))}),Object(U.jsx)(C.a,{onClick:function(){return e.handleShow(t)}},"edit"),Object(U.jsx)(k.a,{onClick:function(){return e.handleDeleteUser(t.id)}},"delete")],children:Object(U.jsx)(J,Object(u.a)({style:{width:"100%",backgroundColor:"lightgray"},title:t.name,description:[Object(U.jsxs)("div",{children:[Object(U.jsxs)(m.a,{children:[Object(U.jsx)(w.a,{style:{paddingRight:15},children:Object(U.jsx)(S.a,{})}),Object(U.jsx)(w.a,{children:t.email})]}),Object(U.jsxs)(m.a,{children:[Object(U.jsx)(w.a,{style:{paddingRight:15},children:Object(U.jsx)(E.a,{})}),Object(U.jsx)(w.a,{children:t.phone})]}),Object(U.jsxs)(m.a,{children:[Object(U.jsx)(w.a,{style:{paddingRight:15},children:Object(U.jsx)(F.a,{})}),Object(U.jsx)(w.a,{children:t.website})]})]})]},"style",{color:"lightgrey"}))},n)})}))})]})}}]),n}(a.Component),N=function(){return Object(U.jsx)("div",{children:Object(U.jsx)(l.a,{history:o,children:Object(U.jsx)(j.c,{children:Object(U.jsx)(j.a,{exact:!0,path:"/",component:L})})})})};var W=function(){return Object(U.jsx)(N,{history:o})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,256)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};r.a.render(Object(U.jsx)(s.a.StrictMode,{children:Object(U.jsx)(W,{})}),document.getElementById("root")),q()}},[[245,1,2]]]);
//# sourceMappingURL=main.071342f3.chunk.js.map