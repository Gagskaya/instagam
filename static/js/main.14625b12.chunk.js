(this.webpackJsonpinstagram=this.webpackJsonpinstagram||[]).push([[0],{16:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(33),a=(n(56),n(57),r.a.initializeApp({apiKey:"AIzaSyDpdc7ivHIHIeYHSSYTZQoTa8ejW9kj-5o",authDomain:"instagram-yt-34d29.firebaseapp.com",projectId:"instagram-yt-34d29",storageBucket:"instagram-yt-34d29.appspot.com",messagingSenderId:"991983088876",appId:"1:991983088876:web:b656b0202c5514b19061c9"})),c=r.a.firestore.FieldValue},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return s}));var r="/",a="/login",c="/sign-up",u="/p/:username",s="/not-found"},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),a=Object(r.createContext)(null)},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(3),a=Object(r.createContext)(null)},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"b",(function(){return v}));var r=n(13),a=n(10),c=n.n(a),u=n(18),s=n(16);function i(e){return o.apply(this,arguments)}function o(){return(o=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return e.data().length>0})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("username","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").where("userId","==",t).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(c.a.mark((function e(t,n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").limit(10).get();case 2:return a=e.sent,e.abrupt("return",a.docs.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{docId:e.id})})).filter((function(e){return e.userId!==t&&!n.includes(e.userId)})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").doc(t).update({following:s.a.arrayUnion(n)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("users").doc(n).update({followers:s.a.arrayUnion(t)});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(u.a)(c.a.mark((function e(t,n){var a,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.b.firestore().collection("photos").where("userId","in",n).get();case 2:return a=e.sent,i=a.docs.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(i.map(function(){var e=Object(u.a)(c.a.mark((function e(n){var a,u,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=!1,n.likes.includes(t)&&(a=!0),e.next=4,l(n.userId);case 4:return u=e.sent,s=u[0].username,e.abrupt("return",Object(r.a)(Object(r.a)({username:s},n),{},{userLikedPhoto:a}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r),c=n(41),u=n.n(c),s=n(24),i=n(9),o=n(22),f=n(25);var p=n(19),l=n(34),d=n(13),b=n(43),j=n(8);function h(e){var t=e.user,n=e.children,r=Object(b.a)(e,["user","children"]);return Object(j.jsx)(i.b,Object(d.a)(Object(d.a)({},r),{},{render:function(e){var r=e.location;return t?a.a.cloneElement(n,{user:t}):t?null:Object(j.jsx)(i.a,{to:{pathname:p.b,state:{from:r}}})}}))}var O=n(10),m=n.n(O),x=n(18),v=n(35);function g(){var e=Object(i.g)(),t=Object(i.h)().username,n=a.a.useState(null),r=Object(o.a)(n,2),c=(r[0],r[1]),u=a.a.useState(!1),s=Object(o.a)(u,2),f=s[0],l=s[1];return a.a.useEffect((function(){function n(){return(n=Object(x.a)(m.a.mark((function n(){var r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(v.e)(t);case 2:(r=n.sent).length>0?(c(r[0]),l(!0)):e.push(p.c);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t,e]),f&&Object(j.jsx)("div",{className:"bg-gray-background",children:Object(j.jsx)("div",{className:"max-auto max-w-screen-lg",children:t})})}var y=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,68))})),w=Object(r.lazy)((function(){return n.e(7).then(n.bind(null,69))})),I=Object(r.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,72))})),k=Object(r.lazy)((function(){return n.e(6).then(n.bind(null,70))}));var S=function(){var e=function(){var e=a.a.useState(JSON.parse(localStorage.getItem("authUser"))),t=Object(o.a)(e,2),n=t[0],r=t[1],c=a.a.useContext(f.a).firebase;return a.a.useEffect((function(){var e=c.auth().onAuthStateChanged((function(e){e?(localStorage.setItem("authUser",JSON.stringify(e)),r(e)):(localStorage.removeItem("authUser"),r(null))}));return function(){return e()}}),[c]),{user:n}}().user;return Object(j.jsx)(l.a.Provider,{value:{user:e},children:Object(j.jsx)(s.a,{children:Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)("p",{children:"Loading..."}),children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:p.b,component:y,exact:!0}),Object(j.jsx)(i.b,{path:p.e,component:w,exact:!0}),Object(j.jsx)(i.b,{path:p.d,component:g}),Object(j.jsx)(h,{user:e,path:p.a,exact:!0,children:Object(j.jsx)(I,{})}),Object(j.jsx)(i.b,{component:k})]})})})})},z=n(16);n(58);u.a.render(Object(j.jsx)(f.a.Provider,{value:{firebase:z.b,FieldValue:z.a},children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.14625b12.chunk.js.map