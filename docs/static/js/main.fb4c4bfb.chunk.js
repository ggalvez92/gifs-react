(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(7),s=n.n(i),u=n(2),d=n(9),j=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(u.a)(n,2),i=r[0],s=r[1];return Object(a.jsx)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length<=2||(t((function(e){return[i].concat(Object(d.a)(e))})),s(""))},children:Object(a.jsx)("input",{type:"text",className:"searchBar",value:i,onChange:function(e){s(e.target.value)}})})},o=n(10),l=n(6),f=n.n(l),m=n(8),b=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=aDIDBV2rSf3xMm39d5KJX3MZRCkpR8i9"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){e.id;var t=e.title,n=e.url;return Object(a.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(a.jsx)("img",{src:n,alt:t}),Object(a.jsx)("p",{children:t})]})},p=function(e){var t=e.category,n=function(e){var t=Object(c.useState)({data:[],loading:!0}),n=Object(u.a)(t,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){b(e).then((function(e){return r({data:e,loading:!1})}))}),[e]),a}(t),r=n.data,i=n.loading;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),i&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(a.jsx)("div",{className:"cardGrid",children:r.map((function(e){return Object(a.jsx)(h,Object(o.a)({},e),e.id)}))})]})},O=function(){var e=Object(c.useState)(["One Punch"]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:"animate__animated animate__fadeIn",children:"GifExpertApp"}),Object(a.jsx)(j,{setCategories:r}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{children:n.map((function(e){return Object(a.jsx)(p,{category:e},e)}))})]})};n(17),n(18);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.fb4c4bfb.chunk.js.map