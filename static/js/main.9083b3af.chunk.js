(this.webpackJsonpconsume=this.webpackJsonpconsume||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),i=n(13),s=n.n(i),a=n(14),r=n(4),u=n.n(r),j=(n(37),n(0)),h=function(e){var t=Object(c.useState)([]),n=Object(a.a)(t,2),o=n[0],i=n[1];return Object(c.useEffect)((function(){u.a.get("https://api.chucknorris.io/jokes/random").then((function(e){i(e.data.value)})).catch((function(e){console.log(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("p",{children:o}),Object(j.jsx)("button",{className:"main-button",onClick:function(e){e.preventDefault(),u.a.get("https://api.chucknorris.io/jokes/random").then((function(e){i(e.data.value)})).catch((function(e){console.log(e)}))},children:"give me a joke Chuck!"})]})},l=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Get your daily joker from Chuck Norris!"}),Object(j.jsx)(h,{})]})};n(39);s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)("div",{className:"main-container",children:Object(j.jsx)(l,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.9083b3af.chunk.js.map