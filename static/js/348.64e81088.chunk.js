"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[348],{348:function(t,r,e){e.r(r),e.d(r,{default:function(){return l}});var n=e(861),a=e(439),c=e(757),u=e.n(c),i=e(791),s=e(689),o=e(969),p=e(540),f=e(29),d=e(184),h=function(t){var r=t.cast.map((function(t){return{name:t.name,img:t.profile_path,character:t.character,id:t.id}}));return(0,d.jsx)("ul",{children:r.map((function(t){var r=t.name,e=t.img,n=t.character;return(0,d.jsxs)("li",{children:[e?(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500"+e,width:115,height:133,alt:r}):(0,d.jsx)("img",{src:f,width:110,height:133,alt:"plug"}),(0,d.jsx)("p",{children:r}),(0,d.jsxs)("p",{children:["Character: ",n]})]},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,r){return t+((r&=63)<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r>62?"-":"_")}),"")}())}))})},l=function(){var t=(0,i.useState)([]),r=(0,a.Z)(t,2),e=r[0],c=r[1],f=(0,i.useState)(!1),l=(0,a.Z)(f,2),v=l[0],m=l[1],g=(0,i.useState)(null),x=(0,a.Z)(g,2),w=x[0],y=x[1],k=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.prev=1,t.next=4,(0,o.y)(k);case 4:r=t.sent,console.log(r),c(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),y(t.t0.message);case 12:return t.prev=12,m(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[1,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[k]),(0,d.jsxs)("div",{children:[e.length>0&&!v&&(0,d.jsx)(h,{cast:e}),v&&(0,d.jsx)(p.a,{}),w&&(0,d.jsx)("h3",{children:w})]})}},540:function(t,r,e){e.d(r,{a:function(){return u}});var n=e(643),a="Loader_loader__+lRPl",c=e(184),u=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(n.iT,{height:100,width:100,color:"#000",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#000",strokeWidth:2,strokeWidthSecondary:2})})}},969:function(t,r,e){e.d(r,{Bt:function(){return d},E3:function(){return p},Zn:function(){return s},wj:function(){return o},y:function(){return f}});var n=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="1d32ff7478bc0343f9347491f3fce9be",s=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return r=t.sent,e=r.data.results,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"?api_key=").concat(i));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(r));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/credits?api_key=").concat(i));case 2:return e=t.sent,n=e.data.cast,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),d=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(r,"/reviews?api_key=").concat(i));case 2:return e=t.sent,n=e.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},29:function(t,r,e){t.exports=e.p+"static/media/plug.3f37e96d8d04d1e67452.jpg"}}]);
//# sourceMappingURL=348.64e81088.chunk.js.map