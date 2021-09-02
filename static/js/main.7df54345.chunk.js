(this["webpackJsonphackernews-clone"]=this["webpackJsonphackernews-clone"]||[]).push([[0],{26:function(e,t,r){},28:function(e,t,r){},84:function(e,t,r){"use strict";r.r(t);var n=r(5),c=r.n(n),a=r(18),s=r.n(a),o=(r(26),r(12)),i=r(17),u=r(10),l=r.n(u),j=r(16),b=r(9),h=(r(28),r(0));var d=function(e){var t=Object(n.useState)(""),r=Object(b.a)(t,2),c=r[0],a=r[1];return Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:"headTitle",children:"Hacker News"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{className:"inputField",onChange:function(e){a(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&e.getData(c)},id:"searchField",type:"search",value:c}),Object(h.jsx)("button",{onClick:function(){return e.getData(c)},children:"Search"})]})]})};var O=function(e){var t=e.result,r=e.query,n=t.title||t.story_title,c=function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()};n&&r&&(n=(n=(n=n.replaceAll(r.toLowerCase(),"<mark>"+r.toLowerCase()+"</mark>")).replaceAll(r.toUpperCase(),"<mark>"+r.toUpperCase()+"</mark>")).replaceAll(c(r),"<mark>"+c(r)+"</mark>"));var a={__html:n};return Object(h.jsxs)("li",{className:"contentRow",children:[Object(h.jsx)("a",{className:"title",href:t.url||t.story_url,dangerouslySetInnerHTML:a}),Object(h.jsxs)("p",{className:"subtext",children:["Points ",t.points,", By ",t.author]})]})},p=r(19),f=r(21),x=r.n(f);var g=function(){return Object(h.jsxs)("div",{className:"loader",children:[Object(h.jsx)(p.GooeyCircleLoader,Object(o.a)({},{loading:!0,size:275,duration:2,colors:["#99fffe","#f42e00","#042549"]})),Object(h.jsx)(x.a,{className:"loader-text",strings:["Loading..."],typeSpeed:60,backSpeed:0})]})};var v=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btnMore",onClick:e.loadMore,children:"More"})})};var m=function(e){console.log(e);var t,r=Object(n.useState)(!1),c=Object(b.a)(r,2),a=c[0],s=c[1];return e.searchResults?0===e.searchResults.hits.length?Object(h.jsx)("div",{className:"noResultsMessage",children:Object(h.jsx)("strong",{children:"No results found. Please try again."})}):(t=a?Object(h.jsx)(g,{}):e.searchResults.nbPages==e.searchResults.page?"":Object(h.jsx)(v,{loadMore:function(){s(!0),e.moreData(e.searchResults.query),setTimeout((function(){return s(!1)}),500)}}),Object(h.jsx)("main",{children:Object(h.jsxs)("ol",{className:"content",children:[e.searchResults.hits.map((function(t){return Object(h.jsx)(O,{result:t,query:e.searchResults.query},t.objectID)})),t]})})):Object(h.jsx)("div",{children:"Loading..."})},y=r.p+"static/media/errorIcon.44a635b3.png";var k=function(e){return Object(h.jsxs)("div",{id:"error",children:[Object(h.jsx)("p",{children:"Oops, something went wrong! Try again later!"}),Object(h.jsx)("img",{src:y,alt:"Error Icon"})]})};var w=function(e){return Object(h.jsx)("div",{id:"sortBar",children:Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"sort-select",children:"Sort by: "}),Object(h.jsxs)("select",{onChange:function(t){e.sortingToggle(t.target.value)},name:"sorting",id:"sort-select",children:[Object(h.jsx)("option",{value:"search",children:"Popularity"}),Object(h.jsx)("option",{value:"search_by_date",children:"Date"})]})]})})};var C=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),r=t[0],c=t[1],a=Object(n.useState)(1),s=Object(b.a)(a,2),u=s[0],O=s[1],p=Object(n.useState)(!1),f=Object(b.a)(p,2),x=f[0],v=f[1],y=Object(n.useState)(""),C=Object(b.a)(y,2),N=C[0],S=C[1];console.log(u);var R=Object(n.useState)("search"),L=Object(b.a)(R,2),D=L[0],T=L[1];Object(n.useEffect)((function(){return M(N.query||"")}),[D]);var F,I=function(){var e=Object(j.a)(l.a.mark((function e(t){var r,n,c,a,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]?s[1]:1,n={error:"unknown"},c="https://hn.algolia.com/api/v1/".concat(D,"?query="),e.prev=3,e.next=6,fetch(c+encodeURI(t)+"&page="+r,{cache:"no-cache"});case 6:if(a=e.sent,console.log(a),!a.ok){e.next=13;break}return v(!1),e.next=12,a.json();case 12:n=e.sent;case 13:e.next=20;break;case 15:e.prev=15,e.t0=e.catch(3),console.log(e.t0),v(!0),n.error=e.t0.message;case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(!0),e.next=3,I(t);case 3:r=e.sent,S(r),c(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t,u+1);case 2:r=e.sent,O((function(e){return e+1})),S((function(e){var t=[].concat(Object(i.a)(e.hits),Object(i.a)(r.hits));return Object(o.a)(Object(o.a)({},r),{},{hits:t})}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return F=r?Object(h.jsx)(g,{}):x?Object(h.jsx)(k,{}):Object(h.jsx)(m,{searchResults:N,moreData:P}),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(d,{getData:M}),Object(h.jsx)(w,{sortingToggle:function(e){O(1),T(e),console.log(e)}}),F]})},N=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,85)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root")),N()}},[[84,1,2]]]);
//# sourceMappingURL=main.7df54345.chunk.js.map