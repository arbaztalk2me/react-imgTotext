(this["webpackJsonpimage-to-text"]=this["webpackJsonpimage-to-text"]||[]).push([[0],{33:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(26),r=a.n(s),i=(a(33),a(3)),l=a.n(i),o=a(12),d=a(7),u=a(27),j=a.n(u),h=a(28),b=a.n(h),m=(a(76),a(0));var x=function(e){return Object(m.jsx)("form",{style:{height:"100%",widht:"auto"},children:Object(m.jsx)("div",{class:"d-flex justify-content-center align-items-center",style:{height:"100%",widht:"auto"},children:0==e.loader?Object(m.jsx)("input",{type:"file",name:"image",onChange:function(t){return e.uploadFile(t)}}):Object(m.jsx)("h1",{children:"Image is being uploaded Please Wait.."})})})};var f=function(e){return Object(m.jsx)("form",{style:{height:"100%",widht:"100%"},children:Object(m.jsx)("textarea",{style:{height:"100%",width:"100%"},children:e.text})})};var p=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),r=Object(d.a)(s,2),i=r[0],u=r[1],h=Object(n.useState)(null),p=Object(d.a)(h,2),O=p[0],g=p[1],v=function(){var e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),e.next=3,j.a.recognize(a,"eng",{logger:function(e){return console.log(e)}});case 3:t=e.sent,console.log(t.data.text),u(!1),g(t.data.text);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(o.a)(l.a.mark((function e(t){var a,n,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),console.log(t.target.files[0]),(a=new FormData).append("image",t.target.files[0]),n={headers:{"content-type":"multipart/form-data"}},e.next=7,b.a.post("https://api.imgbb.com/1/upload?expiration=600&key=3792efa6e56c8cf6cb872b7ab67729e4",a,n);case 7:s=e.sent,c(s.data.data.image.url),u(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){null!==a&&v()}),[a]),Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)("div",{className:"container pb-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded ",children:[Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"col d-flex justify-content-center align-items-center",children:[Object(m.jsx)("i",{className:"far fa-3x fa-file-image"}),Object(m.jsx)("h3",{className:"ms-2",children:"Image To Text Converter"})]})}),Object(m.jsx)("div",{className:"row mt-5",children:Object(m.jsx)("div",{className:"col-md-8 m-auto",children:Object(m.jsx)("div",{className:"card ",style:{height:"60vh",widht:"auto"},children:Object(m.jsxs)("div",{className:"card-body",children:[1==i&&Object(m.jsx)("div",{className:"text-center mt-5",children:Object(m.jsx)("div",{className:"spinner-border",role:"status",children:Object(m.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),null===O?Object(m.jsx)(x,{uploadFile:y,loader:i}):Object(m.jsx)(f,{text:O})]})})})})]})})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(p,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.f9928311.chunk.js.map