"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[340],{540:function(r,e,t){t.d(e,{a:function(){return u}});var n=t(643),a="Loader_loader__+lRPl",c=t(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.iT,{height:100,width:100,color:"#000",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#000",strokeWidth:2,strokeWidthSecondary:2})})}},340:function(r,e,t){t.r(e),t.d(e,{default:function(){return h}});var n=t(861),a=t(439),c=t(757),u=t.n(c),s=t(540),i=t(969),o=t(791),f=t(689),p=t(184),v=function(r){var e=r.reviews;return(0,p.jsx)("ul",{children:e.map((function(r){var e=r.author,t=r.content,n=r.id;return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",e]}),(0,p.jsx)("p",{children:t})]},n)}))})},h=function(){var r=(0,o.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1],h=(0,o.useState)(!1),d=(0,a.Z)(h,2),l=d[0],w=d[1],x=(0,o.useState)(null),m=(0,a.Z)(x,2),k=m[0],y=m[1],Z=(0,f.UO)().movieId;return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return w(!0),r.prev=1,r.next=4,(0,i.Bt)(Z);case 4:e=r.sent,c(e),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),y(r.t0.message);case 11:return r.prev=11,w(!1),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(){return r.apply(this,arguments)}}();r()}),[Z]),(0,p.jsxs)(p.Fragment,{children:[t.length>0?(0,p.jsx)(v,{reviews:t}):(0,p.jsx)("p",{children:"We don't have any reviews for this movie"}),l&&(0,p.jsx)(s.a,{}),k&&(0,p.jsx)("h3",{children:k})]})}},969:function(r,e,t){t.d(e,{Bt:function(){return v},E3:function(){return f},Zn:function(){return i},wj:function(){return o},y:function(){return p}});var n=t(861),a=t(757),c=t.n(a),u=t(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="1d32ff7478bc0343f9347491f3fce9be",i=function(){var r=(0,n.Z)(c().mark((function r(){var e,t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s));case 2:return e=r.sent,t=e.data.results,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(e,"?api_key=").concat(s));case 2:return t=r.sent,n=t.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(e,"/credits?api_key=").concat(s));case 2:return t=r.sent,n=t.data.cast,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return t=r.sent,n=t.data.results,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=340.a60b84da.chunk.js.map