"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[797],{193:function(n,r,e){e.d(r,{W:function(){return c}});var t="Container_main__L+Jjj",a=e(184),c=function(n){var r=n.children;return(0,a.jsx)("main",{className:t,children:r})}},971:function(n,r,e){e.d(r,{v:function(){return u},O:function(){return s}});var t=e(87),a="Lists_listItem__tif4p",c=e(184),u=function(n){var r=n.films,e=n.location;return(0,c.jsx)("ul",{children:r.map((function(n){var r=n.id,u=n.title;return(0,c.jsx)("li",{className:a,children:(0,c.jsx)(t.rU,{to:"movies/".concat(r),state:{from:e},children:(0,c.jsx)("p",{children:u})})},r)}))})},s=function(n){var r=n.films,e=n.location;return(0,c.jsx)("ul",{children:r.map((function(n){var r=n.id,u=n.title;return(0,c.jsx)("li",{className:a,children:(0,c.jsx)(t.rU,{to:"".concat(r),state:{from:e},children:(0,c.jsx)("p",{children:u})})},r)}))})}},540:function(n,r,e){e.d(r,{a:function(){return u}});var t=e(643),a="Loader_loader__+lRPl",c=e(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(t.iT,{height:100,width:100,color:"#000",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#000",strokeWidth:2,strokeWidthSecondary:2})})}},797:function(n,r,e){e.r(r),e.d(r,{default:function(){return j}});var t=e(861),a=e(439),c=e(757),u=e.n(c),s=e(87),i=e(689),o=e(791),l=e(686),f=e.n(l),p=e(971),v=e(969),h="SearchForm_searchForm__NsJpF",d="SearchForm_searchFormInput__3mF-P",m="SearchForm_searchFormButton__Zv-9i",x=e(184),_=function(n){var r=n.searchQuery;return(0,x.jsxs)("form",{onSubmit:r,className:h,children:[(0,x.jsx)("input",{type:"text",name:"name",className:d}),(0,x.jsx)("button",{type:"submit",className:m,children:"Search"})]})},g=e(540),y=e(193),j=function(){var n,r=(0,o.useState)([]),e=(0,a.Z)(r,2),c=e[0],l=e[1],h=(0,o.useState)(!1),d=(0,a.Z)(h,2),m=d[0],j=d[1],w=(0,o.useState)(null),b=(0,a.Z)(w,2),k=b[0],Z=b[1],S=(0,i.TH)(),N=(0,s.lr)(),F=(0,a.Z)(N,2),C=F[0],L=F[1],W=null!==(n=C.get("query"))&&void 0!==n?n:"";(0,o.useEffect)((function(){if(""!==W){var n=new AbortController,r=function(){var r=(0,t.Z)(u().mark((function r(){var e;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return j(!0),r.prev=1,r.next=4,(0,v.E3)(W,n);case 4:if(0!==(e=r.sent).length){r.next=8;break}return f().Notify.info("Please, enter a valid name!"),r.abrupt("return");case 8:l(e),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),Z(r.t0.message);case 14:return r.prev=14,j(!1),r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[1,11,14,17]])})));return function(){return r.apply(this,arguments)}}();return r(),function(){n.abort()}}}),[W]);return(0,x.jsxs)(y.W,{children:[(0,x.jsx)(_,{searchQuery:function(n){n.preventDefault();var r=n.currentTarget,e=""!==r.elements.name.value?{query:r.elements.name.value}:{};L(e),r.reset()}}),m&&(0,x.jsx)(g.a,{}),k&&(0,x.jsx)("h3",{children:k}),c.length>0&&!m&&(0,x.jsx)(p.O,{films:c,location:S})]})}},969:function(n,r,e){e.d(r,{Bt:function(){return p},E3:function(){return l},Zn:function(){return i},wj:function(){return o},y:function(){return f}});var t=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s="1d32ff7478bc0343f9347491f3fce9be",i=function(){var n=(0,t.Z)(c().mark((function n(r){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/trending/movie/day?api_key=".concat(s),{signal:r.signal});case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(c().mark((function n(r,e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(s),{signal:e.signal});case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(c().mark((function n(r,e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(r),{signal:e.signal});case 2:return t=n.sent,a=t.data.results,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(c().mark((function n(r,e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(s),{signal:e.signal});case 2:return t=n.sent,a=t.data.cast,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(c().mark((function n(r,e){var t,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(s),{signal:e.signal});case 2:return t=n.sent,a=t.data.results,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(r,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=797.af419f3d.chunk.js.map