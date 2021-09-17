(this["webpackJsonpreact.aniviks"]=this["webpackJsonpreact.aniviks"]||[]).push([[0],{110:function(e,t,a){},116:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){},145:function(e,t,a){},148:function(e,t,a){},149:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(29),s=a.n(i),r=(a(110),a(13)),j=a(14),l=a(36),o=(a(116),a(190)),d=a(195),h=a(193),b=a(192),x=a(196),O=a(194),m=a(188),u=a(189),g=a(44),v=a.n(g),p=a(59),f=Object(p.b)({name:"anilist",initialState:{anilist:[],anilikes:[],aninew:[]},reducers:{getShikiApi:function(e,t){e.anilist=t.payload},getNew:function(e,t){e.aninew=t.payload}}}),k=f.actions,N=k.getShikiApi,w=k.getNew,y=f.reducer,S=a(1),C=function(){var e=Object(l.c)((function(e){return e.anilist})),t=Object(l.b)(),a=Object(c.useState)("https://shikimori.one/api/animes?limit=50&order=popularity"),n=Object(r.a)(a,2),i=n[0];n[1];Object(c.useEffect)((function(){var e=v.a.CancelToken.source();return v.a.get(i,{cancelToken:e.token}).then((function(e){t(N(e.data))})).catch((function(e){console.log(e)})),e.cancel}),[i]);var s=Object(S.jsx)(u.a,{sx:{bgcolor:"#121212",p:8,width:"100%",display:"flex",justifyContent:"center"},children:Object(S.jsx)(m.a,{sx:{bgcolor:"grey.900"},variant:"rectangular",width:210,height:118})}),j=e.anilist.length<1?s:e.anilist.map((function(e){return Object(S.jsxs)(o.a,{sx:{maxWidth:200,minWidth:200},className:"ani-card",children:[Object(S.jsx)(b.a,{component:"img",height:"140",image:"https://shikimori.one/"+e.image.preview.split("?")[0],alt:"green iguana"}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.name}),Object(S.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["Score: ",e.score]})]}),Object(S.jsxs)(d.a,{children:[Object(S.jsx)(x.a,{size:"small",children:"+"}),Object(S.jsx)(x.a,{size:"small",children:"Learn More"})]})]},e.id)}));return Object(S.jsx)("section",{className:"anilist",children:j})},_=(a(139),function(){return Object(S.jsx)("div",{className:"logo",children:"React-AniViks"})}),W=a(43),z=(a(140),function(){return Object(S.jsx)("nav",{className:"nav",children:Object(S.jsxs)("ul",{className:"nav-list",children:[Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(W.b,{to:"/react-aniviks/",children:"\u041f\u0440\u043e\u0444\u0456\u043b\u044c"})}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)(W.b,{to:"/react-aniviks/anilist",children:"\u0421\u043f\u0438\u0441\u043e\u043a"})})]})})}),A=(a(145),a(197)),L=a(198),T=a(199),E=a(91),B=a.n(E),q=function(e){return Object(S.jsx)(A.a,{position:"static",children:Object(S.jsxs)(L.a,{className:"app-bar",children:[Object(S.jsx)(T.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(S.jsx)(B.a,{})}),Object(S.jsx)(O.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(S.jsx)(_,{})}),Object(S.jsx)(z,{}),Object(S.jsx)(x.a,{color:"inherit",children:"Login"}),Object(S.jsx)(x.a,{variant:"outlined",color:"error",onClick:e.handleThemeChange,children:"Change theme"})]})})},J=(a(148),a(185)),M=a(200),G=a(191),I=function(){return Object(S.jsx)(o.a,{sx:{maxWidth:200,minWidth:200},children:Object(S.jsxs)(M.a,{children:[Object(S.jsx)(b.a,{component:"img",height:"140",image:"./img/ava.jpg",alt:"green iguana"}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:"Lizard"}),Object(S.jsx)(O.a,{variant:"body2",color:"text.secondary",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]})})},K=function(){var e=Object(l.c)((function(e){return e.anilist.aninew})),t=Object(l.b)(),a=Object(c.useState)("https://shikimori.one/api/animes?limit=20&order=aired_on"),n=Object(r.a)(a,2),i=n[0];n[1];Object(c.useEffect)((function(){var e=v.a.CancelToken.source();return v.a.get(i,{cancelToken:e.token}).then((function(e){t(w(e.data))})).catch((function(e){console.log(e)})),e.cancel}),[i]);var s=e.length>1?e.map((function(e){return Object(S.jsx)(J.a,{color:"secondary",badgeContent:"NEW",children:Object(S.jsx)(o.a,{sx:{maxWidth:200,minWidth:200},className:"ani-card",children:Object(S.jsxs)(M.a,{children:[Object(S.jsx)(b.a,{component:"img",height:"140",image:"https://shikimori.one/"+e.image.preview.split("?")[0],alt:"green iguana"}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)(O.a,{gutterBottom:!0,variant:"h5",component:"div",children:e.name}),Object(S.jsxs)(O.a,{variant:"body2",color:"text.secondary",children:["Score: ",e.score]})]})]})})},e.id)})):Object(S.jsx)("div",{children:"Kraiviks"});return Object(S.jsxs)("section",{className:"profile",children:[Object(S.jsxs)(o.a,{sx:{maxWidth:345},className:"user",children:[Object(S.jsxs)(M.a,{children:[Object(S.jsx)(b.a,{component:"img",height:"140",image:"./img/ava.jpg",alt:"green iguana"}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)("h2",{className:"user-name",children:"kraiviks"}),Object(S.jsx)("div",{className:"user-age",children:"25"}),Object(S.jsx)("div",{className:"user-country",children:"Country: Ukraine"}),Object(S.jsx)("div",{className:"user-about",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(S.jsx)(d.a,{children:Object(S.jsx)(x.a,{size:"small",color:"primary",children:"Share"})})]}),Object(S.jsxs)(G.a,{elevation:3,className:"user-box",children:[Object(S.jsxs)(G.a,{elevation:2,className:"user__counter",children:[Object(S.jsx)("div",{className:"title user__counter-anime",children:"All anime: 120"}),Object(S.jsx)("div",{className:"title user__likes-anime",children:"Likes anime: 0"}),Object(S.jsx)("div",{className:"title user__end-anime",children:"End anime: 10"})]}),Object(S.jsxs)(G.a,{elevation:3,style:{overflow:"hidden"},children:[Object(S.jsx)("h2",{children:"20 \u041d\u043e\u0432\u0438\u043d\u043e\u043a"}),Object(S.jsx)(G.a,{elevation:2,className:"new-anime",children:s})]})]}),Object(S.jsxs)(G.a,{elevation:24,className:"tags",children:[Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{}),Object(S.jsx)(I,{})]})]})},R=(a(149),a(93)),U=a(187),V=a(201),D=a(183);var F=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(S.jsx)(D.a,{onClose:function(){return n(!a)},open:a,children:Object(S.jsx)(V.a,{children:"Set backup account"})})},H=function(){var e=Object(c.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1],i=a?"dark":"light",s=Object(R.a)({palette:{mode:i}});return Object(S.jsx)(U.a,{theme:s,children:Object(S.jsxs)("div",{className:"app",children:[Object(S.jsx)(q,{handleThemeChange:function(){n(!a)}}),Object(S.jsx)(G.a,{elevation:20,className:"main",children:Object(S.jsxs)(j.c,{children:[Object(S.jsx)(j.a,{exact:!0,path:"/react-aniviks/",children:Object(S.jsx)(K,{})}),Object(S.jsx)(j.a,{path:"/react-aniviks/anilist",children:Object(S.jsx)(C,{})})]})}),Object(S.jsx)(F,{})]})})},P=Object(p.a)({reducer:{anilist:y}});s.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(l.a,{store:P,children:Object(S.jsx)(W.a,{children:Object(S.jsx)(H,{})})})}),document.getElementById("root"))}},[[151,1,2]]]);
//# sourceMappingURL=main.9eae6904.chunk.js.map