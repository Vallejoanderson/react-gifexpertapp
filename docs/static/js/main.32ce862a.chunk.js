(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{17:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),o=n(0),u=function(t){var e=t.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],u=r[1];return Object(o.jsx)("form",{onSubmit:function(t){t.preventDefault(),console.log(a),a.trim().length>2&&(e((function(t){return[a].concat(Object(s.a)(t))})),u(""))},children:Object(o.jsx)("input",{type:"text",value:a,onChange:function(t){u(t.target.value)}})})},j=n(10),l=n(6),d=n.n(l),p=n(8),b=function(){var t=Object(p.a)(d.a.mark((function t(e){var n,c,r,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&api_key=gIGrkAJCAHQvlK1XOLg8Z6LKR0fdCrn3&limit=10"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return r=t.sent,a=r.data,i=a.map((function(t){return{id:t.id,title:t.title,url:t.images.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.id,n=t.title,c=t.url;return console.log(e,n,c),Object(o.jsxs)("div",{className:"card animate__animated animate__zoomIn",children:[Object(o.jsx)("img",{src:c,alt:n}),Object(o.jsxs)("p",{children:[" ",n]})]})},O=function(t){var e=t.category,n=function(t){var e=Object(c.useState)({data:[],loading:!0}),n=Object(i.a)(e,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){b(t).then((function(e){console.log(e),b(t).then((function(t){a({data:t,loading:!1})}))}))}),[t]),r}(e),r=n.data,a=n.loading;return console.log(a),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h3",{children:e}),a&&Object(o.jsx)("p",{children:"Loading"}),Object(o.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(o.jsx)(f,Object(j.a)({},t),t.id)}))})]})},g=function(){var t=Object(c.useState)(["One Punch"]),e=Object(i.a)(t,2),n=e[0],r=e[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:r}),Object(o.jsx)("hr",{}),Object(o.jsx)("ol",{children:n.map((function(t){return Object(o.jsx)(O,{category:t},t)}))})]})};n(17);a.a.render(Object(o.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.32ce862a.chunk.js.map