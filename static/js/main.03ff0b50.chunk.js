(this["webpackJsonpvague-music-player"]=this["webpackJsonpvague-music-player"]||[]).push([[0],{19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var i=a(2),c=a.n(i),r=a(13),n=a.n(r),s=a(6),o=a.n(s),l=a(8),d=a(3),u=a(7),m=(a(19),a(4)),b=a(5),j=a(0),p=function(e){var t=e.audioRef,a=e.currentSong,c=e.isPlaying,r=e.setIsPlaying,n=e.setSongInfo,s=e.songInfo,p=e.songs,h=e.setCurrentSong,f=e.setSongs,v=e.setIsRandom,O=e.isRandom,g=e.currentIndex,y=Object(i.useState)(!1),k=Object(u.a)(y,2),x=k[0],C=k[1],S=function(e){var t=p.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));f(t)};Object(i.useEffect)((function(){t.current.loop=x}),[x]);var _=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},w=function(){var e=Object(l.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("skip-forward"!==a){e.next=4;break}return e.next=3,h(p[(O?g:g+1)%p.length]);case 3:S(p[(O?g:g+1)%p.length]);case 4:if("skip-back"!==a){e.next=14;break}if((O?g:g-1)%p.length!==-1){e.next=11;break}return e.next=8,h(p[p.length-1]);case 8:return S(p[p.length-1]),c&&t.current.play(),e.abrupt("return");case 11:return e.next=13,h(p[(O?g:g-1)%p.length]);case 13:S(p[(O?g:g-1)%p.length]);case 14:c&&t.current.play();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N={transform:"translateX(".concat(s.animationPercentage,"%)")};return Object(j.jsxs)("div",{className:"player",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{children:_(s.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(a.color[0],", ").concat(a.color[1],")")},className:"track",children:[Object(j.jsx)("input",{min:0,max:s.duration||0,value:s.currentTime,onChange:function(e){t.current.currentTime=e.target.value,n(Object(d.a)(Object(d.a)({},s),{},{currentTime:e.target.value}))},type:"range"}),Object(j.jsx)("div",{style:N,className:"animate-track"})]}),Object(j.jsx)("p",{children:s.duration?_(s.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"play-control play-control__shadow",children:[Object(j.jsx)(m.a,{onClick:function(){w("skip-back")},className:"skip-back",size:"2x",icon:b.a}),Object(j.jsx)(m.a,{onClick:function(){c?(t.current.pause(),r(!c)):(t.current.play(),r(!c))},className:"play",size:"2x",icon:c?b.g:b.i}),Object(j.jsx)(m.a,{onClick:function(){w("skip-forward")},className:"skip-forward",size:"2x",icon:b.b}),Object(j.jsx)(m.a,{onClick:function(){return v(!O)},className:"random-repeat",size:"2x",icon:b.j,style:{color:O?"#E9C46A":""}}),Object(j.jsx)(m.a,{onClick:function(){return C(!x)},className:"random-repeat",size:"2x",icon:b.k,style:{color:x?"#E9C46A":""}})]})]})},h=function(e){var t=e.currentSong;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"vinyl-container",children:Object(j.jsxs)("div",{className:"case",children:[Object(j.jsx)("div",{className:"overlay"}),Object(j.jsx)("img",{className:"cover",src:t.cover,alt:t.name+" by "+t.artist}),Object(j.jsx)("div",{className:"slotwrapper",children:Object(j.jsx)("div",{className:"slot"})}),Object(j.jsx)("div",{className:"vinyl"})]})}),Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist}),Object(j.jsx)("p",{children:t.credits}),Object(j.jsx)("p",{children:Object(j.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})})]})]})},f=function(e){var t=e.setLibraryStatus,a=e.libraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"Coding Tunes"}),Object(j.jsxs)("button",{onClick:function(){return t(!a)},children:["Library ",Object(j.jsx)(m.a,{icon:b.f})]})]})},v=a(12),O=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)("ul",{className:"footer-menu",children:[Object(j.jsxs)("li",{className:"footer-menu-item",children:["Created by ",Object(j.jsx)("span",{className:"footer-icon",children:"Roman Jasiek"})," in 2021 with ",Object(j.jsx)(m.a,{className:"footer-icon",icon:b.e}),", ",Object(j.jsx)(m.a,{className:"footer-icon",icon:b.c})," and incredible support from ",Object(j.jsx)("span",{className:"footer-icon",children:"Ghassan Aldarwish"})]}),Object(j.jsx)("li",{className:"footer-menu-item",children:Object(j.jsxs)("a",{href:"tel:+491724563446",children:[Object(j.jsx)(m.a,{icon:b.h})," Mobile: +49 172 456 3 446"]})}),Object(j.jsx)("li",{className:"footer-menu-item",children:Object(j.jsxs)("a",{href:"mailto:romanjasiek@me.com?subject=Contact%20Request",children:[Object(j.jsx)(m.a,{icon:b.d})," romanjasiek@me.com"]})}),Object(j.jsx)("li",{className:"footer-menu-item",children:Object(j.jsxs)("a",{href:"https://www.linkedin.com/in/romanjasiek/",children:[Object(j.jsx)(m.a,{icon:v.b})," LinkedIn"]})}),Object(j.jsx)("li",{className:"footer-menu-item",children:Object(j.jsxs)("a",{href:"https://github.com/romanjasiek",children:[Object(j.jsx)(m.a,{icon:v.a})," GitHub"]})})]})})},g=a(28),y=a.p+"static/media/sleepy-fish_rest-until-dark.1fac490c.mp3",k=a.p+"static/media/sleepy-fish_rest-until-dark.c56e68b3.jpg",x=a.p+"static/media/night-drive-ak-main-version-04-09-1328.3c59e599.mp3",C=a.p+"static/media/AK_Avatar_3032648670472391.5f34d6dd.jpg",S=a.p+"static/media/clear-sky-hartzmann-main-version-02-20-18592.a18b60aa.mp3",_=a.p+"static/media/Hartzmann_Avatar_6691536139022807.7da0d736.jpg",w=a.p+"static/media/big-dreams-simon-folwar-main-version-02-25-18020.8cf323bc.mp3",N=a.p+"static/media/simon-folwar-avatar-v1_2079212815531580.698f3b41.jpg",E=a.p+"static/media/babel-zayner-main-version-04-00-2158.01385a93.mp3",M=a.p+"static/media/zayner-avatar-v1_4284495953502456.4ab4b0b3.jpg",A=a.p+"static/media/adventure-is-calling-vens-adams-main-version-02-02-31.ecce8ad5.mp3",F=a.p+"static/media/vens-adams-avatar-v1_1721782353768003.391056c1.jpg",z=a.p+"static/media/mazko-seascape.b9eb77ab.mp3",D=a.p+"static/media/mazko-seascape.5df771bf.jpg",I=a.p+"static/media/aiguille-daydream.6c507565.mp3",T=a.p+"static/media/aiguille-nightfall.1001b2bf.mp3",L=a.p+"static/media/aiguille-daydream.c4fe382f.jpg",P=a.p+"static/media/sworn_keep-going.02a63332.mp3",R=a.p+"static/media/sworn_reflection.41b1a25e.mp3",B=a.p+"static/media/sworn.d3a65893.jpg",K=a.p+"static/media/the-kount_mazko_wayfare.8cd8b607.mp3",H=a.p+"static/media/the-kount_mazko_wayfare.e709358f.jpg",U=a.p+"static/media/nymano_epektase_new-horizon.dbc242aa.mp3",G=a.p+"static/media/nymano_epektase_new-horizon.2217ce11.jpg",J=a.p+"static/media/mama-aiuto_today-feels-like-everyday.701b33ef.mp3",V=a.p+"static/media/mama-aiuto-today-feels-like-everyday.0662bda5.jpg",W=a.p+"static/media/edapollo_sundreamer-vhs-tapes-1993-1996.5edf5811.mp3",X=a.p+"static/media/edapollo_sundreamer-vhs-tapes-1993-1996.a7172604.jpg",Z=a.p+"static/media/g-mills_kyle-mcevoy_lukeotwell-ocean-view.6cd551dc.mp3",q=a.p+"static/media/g-mills_kyle-mcevoy_lukeotwell-ocean-view.3b1312c4.jpg",Q=a.p+"static/media/aso_middle-school_aviino_under-the-city-stars.6a78245e.mp3",Y=a.p+"static/media/aso_middle-school_aviino_under-the-city-stars.c42143a4.jpg",$=a.p+"static/media/hanz_conflicted.4b2e4b26.mp3",ee=a.p+"static/media/hanz_conflicted.b049b132.jpg",te=a.p+"static/media/delayde_anybodyy-where_the_sun_goes.4f43b745.mp3",ae=a.p+"static/media/delayde_anybodyy-where_the_sun_goes.ce09669b.jpg",ie=a.p+"static/media/yeti-music_prairie-tone.f0bf8566.mp3",ce=a.p+"static/media/yeti-music_prairie-tone.fac5b6db.jpg";var re=function(){return[{name:"Rest Until Dark",cover:k,artist:"Sleepy Fish",credits:"Credits: Sleepy Fish - Rest Until Dark",link:"https://chll.to/4280d68a",audio:y,color:["#F1E2C6","#39A1BC"],id:Object(g.a)(),active:!0},{name:"Nightdrive",cover:C,artist:"AK",credits:"Credits: Music from Uppbeat (free for Creators!). License code: FFEZZKHNHD1PSTEI",link:"https://uppbeat.io/t/ak/night-drive",audio:x,color:["#A0988F","#5D6862"],id:Object(g.a)(),active:!1},{name:"Seascape",cover:D,artist:"Makzo",credits:"Credits: Makzo - Seascape",link:"https://chll.to/385f1eec",audio:z,color:["#6072AD","#E9866E"],id:Object(g.a)(),active:!1},{name:"Babel",cover:M,artist:"Zayner",credits:"Credits: Music from Uppbeat (free for Creators!). License code: 9JNPQK6KHA733TRS",link:"https://uppbeat.io/t/zayner/babel",audio:E,color:["#6072AD","#EEB99F"],id:Object(g.a)(),active:!1},{name:"Clear Sky",cover:_,artist:"Hartzmann",credits:"Credits: Music from Uppbeat (free for Creators!). License code: 2D8RFKI6HJIKVU8E",link:"https://uppbeat.io/t/hartzmann/clear-sky",audio:S,color:["#FB269F","#3B23A3"],id:Object(g.a)(),active:!1},{name:"Daydream",cover:L,artist:"Aiguille",credits:"Credits: Aiguille - Daydream",link:"https://chll.to/4936a39e",audio:I,color:["#EF8EA9","#ab417f"],id:Object(g.a)(),active:!1},{name:"Big Dreams",cover:N,artist:"Simon Folwar",credits:"Credits: Music from Uppbeat (free for Creators!). License code: J9CJXAWJXXF5VSMW",link:"https://uppbeat.io/t/simon-folwar/big-dreams",audio:w,color:["#3E7D80","#E47663"],id:Object(g.a)(),active:!1},{name:"Keep Going",cover:B,artist:"Sw\xf8rn",credits:"Credits: Sw\xf8rn - Keep Going",link:"https://chll.to/ba41907d",audio:P,color:["#CD607D","#c94043"],id:Object(g.a)(),active:!1},{name:"Wayfare",cover:H,artist:"The Kount, Makzo",credits:"Credits: The Kount, Makzo - Wayfare",link:"https://chll.to/1f3cc780",audio:K,color:["#ECC1B3","#B8BD34"],id:Object(g.a)(),active:!1},{name:"New Horizon",cover:G,artist:"Nymano, Epektase",credits:"Credits: Nymano - New Horizons",link:"https://chll.to/33999df0",audio:U,color:["#866A8D","#191514"],id:Object(g.a)(),active:!1},{name:"Today Feels Like Everyday",cover:V,artist:"Mama Aiuto",credits:"Credits: Mama Aiuto - Today Feels Like Everyday",link:"https://chll.to/6e187463",audio:J,color:["#203E3F","#3B0C0E"],id:Object(g.a)(),active:!1},{name:"vhs tapes 1993-1996",cover:X,artist:"edapollo, Sundreamer",credits:"Credits: edapollo, Sundreamer - vhs tapes 1993-1996",link:"https://chll.to/2ac798fd",audio:W,color:["#FAB47C","#B85031"],id:Object(g.a)(),active:!1},{name:"Ocean View",cover:q,artist:"G Mills, Kyle McEvoy, Luke Otwell",credits:"Credits: G Mills, Kyle McEvoy, Luke Otwell - Ocean View",link:"https://chll.to/e6017a17",audio:Z,color:["#DFC4D3","#123666"],id:Object(g.a)(),active:!1},{name:"Reflection",cover:B,artist:"Sw\xf8rn",credits:"Credits: Sw\xf8rn - Reflection",link:"https://chll.to/38dc7ff2",audio:R,color:["#CD607D","#c94043"],id:Object(g.a)(),active:!1},{name:"Under the City Stars",cover:Y,artist:"Aso, Middle School, Aviino",credits:"Credits: Aso, Middle School, Aviino - Under the City Stars",link:"https://chll.to/bf3c2e2e",audio:Q,color:["#205950","#2ab3bf"],id:Object(g.a)(),active:!1},{name:"Nightfall",cover:L,artist:"Aiguille",credits:"Credits: Aiguille - Nightfall",link:"https://chll.to/cbab4c11",audio:T,color:["#EF8EA9","#ab417f"],id:Object(g.a)(),active:!1},{name:"Adventure Is Calling",cover:F,artist:"Vens Adams",credits:"Credits: Music from Uppbeat (free for Creators!). License code: FFEZZKHNHD1PSTEI",link:"https://uppbeat.io/t/vens-adams/adventure-is-calling",audio:A,color:["#FEF6DF","#9CB4D6"],id:Object(g.a)(),active:!1},{name:"Conflicted",cover:ee,artist:"Hanz",credits:"Hanz - Conflicted",link:"https://chll.to/840d86cf",audio:$,color:["#475671","#CE838B"],id:Object(g.a)(),active:!1},{name:"Where The Sun Goes",cover:ae,artist:"Delayde, anybodyy",credits:"Delayde, anybodyy - Where The Sun Goes",link:"https://chll.to/a710a02f",audio:te,color:["#6B37C4","#99D587"],id:Object(g.a)(),active:!1},{name:"Prairie Tone",cover:ce,artist:"Yeti Music",credits:"Credits: Music from Uppbeat (free for Creators!). License code: SPTXPMV1CVOXWTIP",link:"https://uppbeat.io/t/yeti-music/prairie-tone",audio:ie,color:["#452D35","#648DAE"],id:Object(g.a)(),active:!1}]},ne=function(e){var t=e.song,a=e.songs,i=e.setCurrentSong,c=e.id,r=e.audioRef,n=e.isPlaying,s=e.setSongs,u=function(){var e=Object(l.a)(o.a.mark((function e(){var l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:l=a.map((function(e){return e.id===c?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})})),s(l),n&&r.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{id:t.id,onClick:u,className:"library-song ".concat(t.active?"selected":""),children:[Object(j.jsx)("img",{src:t.cover,alt:t.name+" by "+t.artist}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:t.name}),Object(j.jsx)("h4",{children:t.artist})]})]})},se=function(e){var t=e.songs,a=e.setCurrentSong,i=e.audioRef,c=e.isPlaying,r=e.setSongs,n=e.setLibraryStatus,s=e.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(j.jsxs)("h2",{children:["Library ",Object(j.jsx)(m.a,{className:"close-button",icon:b.l,onClick:function(){return n(!s)}})]}),Object(j.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(j.jsx)(ne,{songs:t,setCurrentSong:a,song:e,id:e.id,audioRef:i,isPlaying:c,setSongs:r},e.id)}))})]})};var oe=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(!1),a=Object(u.a)(t,2),c=a[0],r=a[1],n=Object(i.useState)(re()),s=Object(u.a)(n,2),m=s[0],b=s[1],v=Object(i.useState)(m[0]),g=Object(u.a)(v,2),y=g[0],k=g[1],x=Object(i.useState)(!1),C=Object(u.a)(x,2),S=C[0],_=C[1],w=Object(i.useState)({currentTime:0,duration:0,animationPercentage:0}),N=Object(u.a)(w,2),E=N[0],M=N[1],A=Object(i.useState)(!1),F=Object(u.a)(A,2),z=F[0],D=F[1];Object(i.useEffect)((function(){if(c){var e,t=T(0,m.length-1),a=m[t],i=null===(e=function(e){for(var t,a=e.length;0!=a;){t=Math.floor(Math.random()*a),a--;var i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e}(m))||void 0===e?void 0:e.map((function(e){return e.id===a.id?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));b(i),k(a)}else{var r=m[0],n=m.map((function(e){return e.id===r.id?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));k(r),b(n)}}),[c]),Object(i.useEffect)((function(){var e=null===m||void 0===m?void 0:m.find((function(e){return 1==e.active})),t=null===e||void 0===e?void 0:e.id;t&&document.getElementById(t).scrollIntoView({behavior:"smooth"})}),[m]);var I=c?T(0,m.length-1):m.findIndex((function(e){return e.id===y.id}));function T(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}var L=function(e){var t=e.target.currentTime,a=e.target.duration,i=Math.round(t),c=Math.round(a),r=Math.round(i/c*100);M(Object(d.a)(Object(d.a)({},E),{},{currentTime:t,duration:a,animationPercentage:r}))},P=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(m[(c?I:I+1)%m.length]);case 2:S&&e.current.play();case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(z?"library-active":""),children:[Object(j.jsx)(f,{libraryStatus:z,setLibraryStatus:D}),Object(j.jsx)(h,{currentSong:y}),Object(j.jsx)(p,{audioRef:e,setIsPlaying:_,isPlaying:S,currentSong:y,setSongInfo:M,songInfo:E,songs:m,setCurrentSong:k,setSongs:b,isRandom:c,setIsRandom:r,currentIndex:I}),Object(j.jsx)(se,{currentIndex:I,audioRef:e,songs:m,setCurrentSong:k,isPlaying:S,setSongs:b,libraryStatus:z,setLibraryStatus:D}),Object(j.jsx)(O,{}),Object(j.jsx)("audio",{onTimeUpdate:L,onLoadedMetadata:L,ref:e,src:y.audio,onEnded:P})]})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then((function(t){var a=t.getCLS,i=t.getFID,c=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),i(e),c(e),r(e),n(e)}))};n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(oe,{})}),document.getElementById("root")),le()}},[[26,1,2]]]);
//# sourceMappingURL=main.03ff0b50.chunk.js.map