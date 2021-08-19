(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{12:function(e,t,a){e.exports={wrapper:"header_wrapper__wZLBc",title:"header_title__dbjaC",form:"header_form__3Har7",textInput:"header_textInput__3vTaX",selectsWrapper:"header_selectsWrapper__1COzq",selectInput:"header_selectInput__2oES7",label:"header_label__KKKtC",submitBtn:"header_submitBtn__34_DB"}},13:function(e,t,a){e.exports={wrapper:"books-page_wrapper__cLC7D",coverWrapper:"books-page_coverWrapper__3LXJk",bookImage:"books-page_bookImage__23T9d",aboutWrapper:"books-page_aboutWrapper__2JhWV",categories:"books-page_categories__2Z5Q7",title:"books-page_title__C0t4C",authors:"books-page_authors__2gtl_",descWrapper:"books-page_descWrapper__371nw",description:"books-page_description__qtnwp"}},18:function(e,t,a){e.exports={wrapper:"book_wrapper__3Zzcv",image:"book_image__1sZUt",category:"book_category__4-FHd",title:"book_title__2H5UE",authors:"book_authors__23vf9"}},22:function(e,t,a){e.exports={wrapper:"books-list_wrapper__3MV3q",title:"books-list_title__1ezth",booksContainer:"books-list_booksContainer__1KKm_",moreBtn:"books-list_moreBtn__1KUu9"}},26:function(e,t,a){e.exports={wrapper:"loader_wrapper__vU9np",progressBar:"loader_progressBar__1nL-Y",progress:"loader_progress__1t44n",loader:"loader_loader__1Vi3h",mobilLoader:"loader_mobilLoader__3e8JU"}},40:function(e,t,a){e.exports={App:"App_App__38e29"}},42:function(e,t,a){e.exports={wrapper:"content_wrapper__cl3lO"}},48:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),c=a(23),s=a.n(c),l=(a(48),a(40)),i=a.n(l),u=a(14),b=a(12),p=a.n(b),j=a(11),d=a.n(j),_=a(31),O=a(16);!function(e){e.FETCH_BOOKS="FETCH_BOOKS",e.FETCH_BOOK="FETCH_BOOK",e.SET_ERROR="SET_ERROR",e.SET_FILTER="SET_FILTER",e.SET_SORT="SET_SORT",e.SET_CATEGORY="SET_CATEGORY",e.SET_CURRENT_PAGE="SET_CURRENT_PAGE",e.SET_TOTAL_PAGES="SET_TOTAL_PAGES",e.SET_TOTAL_ITEMS="SET_TOTAL_ITEMS"}(n||(n={}));var v=a(41),f=a.n(v).a.create({baseURL:" https://www.googleapis.com/books/v1/"}),h=function(e,t,a,n){return f.get("volumes?q=".concat(e,"+subject:").concat(t,"&startIndex=").concat(a,"&maxResults=30&orderBy=").concat(n,"&key=").concat("AIzaSyAyH3KajxlRxiVl6TopIf9mwIBZMIVms8c")).then((function(e){return e.data}))},m=function(e){return f.get("volumes".concat(e)).then((function(e){return e.data}))},x=function(e,t,a,n,r,o){return function(){var c=Object(O.a)(d.a.mark((function c(s){var l,i,u;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,"all"===t&&(t=""),c.next=4,h(e,t,n,a);case 4:l=c.sent,i=[].concat(Object(_.a)(r),Object(_.a)(l.items)),u=++n,o!==l.totalItems&&(o=Math.ceil(l.totalItems/30),s(R(o)),s(N(l.totalItems))),s(g(i)),s(w(u)),c.next=15;break;case 12:c.prev=12,c.t0=c.catch(0),s(k(!0));case 15:case"end":return c.stop()}}),c,null,[[0,12]])})));return function(e){return c.apply(this,arguments)}}()},T=function(e){return function(){var t=Object(O.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m(e);case 3:n=t.sent,a(E(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a(k(!0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:n.FETCH_BOOKS,payload:e}},E=function(e){return{type:n.FETCH_BOOK,payload:e}},k=function(e){return{type:n.SET_ERROR,payload:e}},S=function(e){return{type:n.SET_FILTER,payload:e}},y=function(e){return{type:n.SET_SORT,payload:e}},I=function(e){return{type:n.SET_CATEGORY,payload:e}},w=function(e){return{type:n.SET_CURRENT_PAGE,payload:e}},R=function(e){return{type:n.SET_TOTAL_PAGES,payload:e}},N=function(e){return{type:n.SET_TOTAL_ITEMS,payload:e}},C=a(9),A=a(3),L=a(1),B=function(){var e=Object(C.b)(),t=Object(A.f)(),a=Object(r.useState)(""),n=Object(u.a)(a,2),o=n[0],c=n[1],s=Object(r.useState)("relevance"),l=Object(u.a)(s,2),i=l[0],b=l[1],j=Object(r.useState)("all"),d=Object(u.a)(j,2),_=d[0],O=d[1],v=Object(r.useState)(!1),f=Object(u.a)(v,2),h=f[0],m=f[1];Object(r.useEffect)((function(){var a,n,r;h&&(e(function(e){return function(t){t(y(e))}}(i)),e(function(e){return function(t){t(I(e))}}(_)),e((r=o,function(e){e(S(r))})),e((n=1,function(e){e(w(n))})),e((a=[],function(e){e(g(a))})),m(!1),t.push("/"))}),[h]);return Object(L.jsxs)("header",{className:p.a.wrapper,children:[Object(L.jsx)("h1",{className:p.a.title,children:"Search for books"}),Object(L.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault(),m(!0)},children:[Object(L.jsx)("input",{className:p.a.textInput,type:"text",value:o,onChange:function(e){c(e.currentTarget.value)}}),Object(L.jsxs)("div",{className:p.a.selectsWrapper,children:[Object(L.jsxs)("label",{className:p.a.label,children:["Categories",Object(L.jsxs)("select",{className:p.a.selectInput,value:_,onChange:function(e){O(e.currentTarget.value)},children:[Object(L.jsx)("option",{value:"all",children:"all"}),Object(L.jsx)("option",{value:"art",children:"art"}),Object(L.jsx)("option",{value:"biography",children:"biography"}),Object(L.jsx)("option",{value:"computers",children:"computers"}),Object(L.jsx)("option",{value:"history",children:"history"}),Object(L.jsx)("option",{value:"medical",children:"medical"}),Object(L.jsx)("option",{value:"poetry",children:"poetry"})]})]}),Object(L.jsxs)("label",{className:p.a.label,children:["Sorting by",Object(L.jsxs)("select",{className:p.a.selectInput,value:i,onChange:function(e){b(e.currentTarget.value)},children:[Object(L.jsx)("option",{value:"relevance",children:"relevance"}),Object(L.jsx)("option",{value:"newest",children:"newest"})]})]}),Object(L.jsx)("button",{className:p.a.submitBtn,type:"submit"})]})]})]})},F=a(42),P=a.n(F),K=a(21),H=a(4),W={filter:"",category:"all",sort:"relevance",currentPage:0,totalPages:0,totalItems:0,isServerError:!1,books:[],book:{}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.FETCH_BOOKS:return Object(H.a)(Object(H.a)({},e),{},{books:t.payload});case n.FETCH_BOOK:return Object(H.a)(Object(H.a)({},e),{},{book:t.payload});case n.SET_ERROR:return Object(H.a)(Object(H.a)({},e),{},{isServerError:t.payload});case n.SET_FILTER:return Object(H.a)(Object(H.a)({},e),{},{filter:t.payload});case n.SET_SORT:return Object(H.a)(Object(H.a)({},e),{},{sort:t.payload});case n.SET_CATEGORY:return Object(H.a)(Object(H.a)({},e),{},{category:t.payload});case n.SET_TOTAL_PAGES:return Object(H.a)(Object(H.a)({},e),{},{totalPages:t.payload});case n.SET_CURRENT_PAGE:return Object(H.a)(Object(H.a)({},e),{},{currentPage:t.payload});case n.SET_TOTAL_ITEMS:return Object(H.a)(Object(H.a)({},e),{},{totalItems:t.payload});default:return e}},M=Object(K.b)({bookReducer:G}),U=C.c,J=a(26),V=a.n(J),Y=function(){return Object(L.jsxs)("div",{className:V.a.wrapper,children:[Object(L.jsx)("h4",{children:"Loading"}),Object(L.jsx)("div",{className:V.a.progressBar,children:Object(L.jsx)("span",{className:V.a.progress})})]})},Z=a(22),q=a.n(Z),z=a(18),D=a.n(z),X=a(15),Q=function(e){var t,a,n,r,o,c,s,l,i,u,b,p=e.book,j=(null===(t=p.volumeInfo)||void 0===t||null===(a=t.imageLinks)||void 0===a||null===(n=a.thumbnail)||void 0===n?void 0:n.length)?null===(r=p.volumeInfo.imageLinks)||void 0===r?void 0:r.thumbnail:"",d=(null===(o=p.volumeInfo)||void 0===o||null===(c=o.categories)||void 0===c?void 0:c.length)?p.volumeInfo.categories[0]:"",_=(null===(s=p.volumeInfo)||void 0===s||null===(l=s.title)||void 0===l?void 0:l.length)?p.volumeInfo.title:"",O=(null===(i=p.volumeInfo)||void 0===i||null===(u=i.authors)||void 0===u?void 0:u.length)?null===(b=p.volumeInfo.authors)||void 0===b?void 0:b.toString():"";return Object(L.jsx)(X.b,{to:"".concat(p.id),children:Object(L.jsxs)("div",{className:D.a.wrapper,children:[Object(L.jsx)("img",{className:D.a.image,src:j}),Object(L.jsx)("p",{className:D.a.category,children:d}),Object(L.jsx)("p",{className:D.a.title,children:_}),Object(L.jsx)("p",{className:D.a.authors,children:O})]})})},$=function(e){var t=e.booksState,a=Object(r.useState)(!1),n=Object(u.a)(a,2),o=n[0],c=n[1],s=Object(C.b)(),l=t.filter,i=t.sort,b=t.category,p=t.currentPage,j=t.totalPages,_=t.books,v=[];_!==[]&&(v=_.map((function(e,t){return Object(L.jsx)(Q,{book:e},t)})));var f=function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(x(l,b,i,p,_,j));case 2:c(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){o&&f()}),[o]);return Object(L.jsxs)("div",{className:q.a.wrapper,children:[Object(L.jsxs)("h3",{className:q.a.title,children:["Found ",t.totalItems," result"]}),Object(L.jsx)("div",{className:q.a.booksContainer,children:v}),o?Object(L.jsx)(Y,{}):Object(L.jsx)("button",{className:q.a.moreBtn,onClick:function(){c(!0)},children:"More books"})]})},ee=function(){var e=Object(C.b)(),t=U((function(e){return e.bookReducer})),a=t.filter,n=t.sort,o=t.category,c=t.currentPage,s=t.totalPages,l=t.books;return Object(r.useEffect)((function(){e(x(a,o,n,c,l,s))}),[a,n,o]),l.length?Object(L.jsx)($,{booksState:t}):Object(L.jsx)(Y,{})},te=a(13),ae=a.n(te),ne=function(e){e.isFetch,e.setIsFetch;var t,a,n,r,o,c,s,l,i,u=U((function(e){return e.bookReducer})),b=null===(t=u.book.volumeInfo)||void 0===t||null===(a=t.categories)||void 0===a?void 0:a.join(" / "),p=null===(n=u.book.volumeInfo)||void 0===n?void 0:n.title,j=null===(r=u.book.volumeInfo)||void 0===r||null===(o=r.authors)||void 0===o?void 0:o.join(", "),d="";(null===(c=u.book.volumeInfo)||void 0===c?void 0:c.description)&&(d=null===(i=u.book.volumeInfo)||void 0===i?void 0:i.description);return Object(L.jsxs)("div",{className:ae.a.wrapper,children:[Object(L.jsx)("div",{className:ae.a.coverWrapper,children:Object(L.jsx)("img",{className:ae.a.bookImage,src:null===(s=u.book.volumeInfo)||void 0===s||null===(l=s.imageLinks)||void 0===l?void 0:l.thumbnail})}),Object(L.jsxs)("div",{className:ae.a.aboutWrapper,children:[Object(L.jsx)("p",{className:ae.a.categories,children:b}),Object(L.jsx)("h3",{className:ae.a.title,children:p}),Object(L.jsx)("p",{className:ae.a.authors,children:j}),Object(L.jsx)("div",{className:ae.a.descWrapper,children:Object(L.jsx)("div",{className:ae.a.description,dangerouslySetInnerHTML:{__html:d}})})]})]})},re=function(){var e=Object(r.useState)(!0),t=Object(u.a)(e,2),a=t[0],n=t[1],o=Object(C.b)(),c=Object(A.g)().url,s=function(){var e=Object(O.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(T(c));case 2:n(!1);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s()}),[]),a?Object(L.jsx)(Y,{}):Object(L.jsx)(ne,{isFetch:a,setIsFetch:n})},oe=function(){return Object(L.jsx)("div",{className:P.a.wrapper,children:Object(L.jsxs)(A.c,{children:[Object(L.jsx)(A.a,{exact:!0,path:"/",render:function(){return Object(L.jsx)(ee,{})}}),Object(L.jsx)(A.a,{path:"/:bookId",render:function(){return Object(L.jsx)(re,{})}})]})})};var ce=function(){return Object(L.jsxs)("div",{className:i.a.App,children:[Object(L.jsx)(B,{}),Object(L.jsx)(oe,{})]})},se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,75)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))},le=a(43),ie=Object(K.c)(M,Object(K.a)(le.a));s.a.render(Object(L.jsx)(o.a.StrictMode,{children:Object(L.jsx)(C.a,{store:ie,children:Object(L.jsx)(X.a,{children:Object(L.jsx)(ce,{})})})}),document.getElementById("root")),se()}},[[74,1,2]]]);
//# sourceMappingURL=main.6f3d412f.chunk.js.map