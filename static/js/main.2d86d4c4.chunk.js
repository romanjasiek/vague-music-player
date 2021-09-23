(this["webpackJsonpvague-music-player"]=this["webpackJsonpvague-music-player"]||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var i=a(2),r=a.n(i),c=a(12),n=a.n(c),s=a(4),o=a.n(s),d=a(6),l=a(3),u=a(8),p=(a(18),a(7)),m=a(5),b=a(0),j=function(e){var t=e.audioRef,a=e.currentSong,i=e.isPlaying,r=e.setIsPlaying,c=e.setSongInfo,n=e.songInfo,s=e.songs,u=e.setCurrentSong,j=e.setSongs,v=function(e){var t=s.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));j(t)},f=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},h=function(){var e=Object(d.a)(o.a.mark((function e(r){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=s.findIndex((function(e){return e.id===a.id})),"skip-forward"!==r){e.next=5;break}return e.next=4,u(s[(c+1)%s.length]);case 4:v(s[(c+1)%s.length]);case 5:if("skip-back"!==r){e.next=15;break}if((c-1)%s.length!==-1){e.next=12;break}return e.next=9,u(s[s.length-1]);case 9:return v(s[s.length-1]),i&&t.current.play(),e.abrupt("return");case 12:return e.next=14,u(s[(c-1)%s.length]);case 14:v(s[(c-1)%s.length]);case 15:i&&t.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g={transform:"translateX(".concat(n.animationPercentage,"%)")};return Object(b.jsxs)("div",{className:"player",children:[Object(b.jsxs)("div",{className:"time-control",children:[Object(b.jsx)("p",{children:f(n.currentTime)}),Object(b.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(a.color[0],", ").concat(a.color[1],")")},className:"track",children:[Object(b.jsx)("input",{min:0,max:n.duration||0,value:n.currentTime,onChange:function(e){t.current.currentTime=e.target.value,c(Object(l.a)(Object(l.a)({},n),{},{currentTime:e.target.value}))},type:"range"}),Object(b.jsx)("div",{style:g,className:"animate-track"})]}),Object(b.jsx)("p",{children:n.duration?f(n.duration):"0:00"})]}),Object(b.jsxs)("div",{className:"play-control",children:[Object(b.jsx)(p.a,{onClick:function(){h("skip-back")},className:"skip-back",size:"2x",icon:m.a}),Object(b.jsx)(p.a,{onClick:function(){i?(t.current.pause(),r(!i)):(t.current.play(),r(!i))},className:"play",size:"2x",icon:i?m.d:m.e}),Object(b.jsx)(p.a,{onClick:function(){h("skip-forward")},className:"skip-forward",size:"2x",icon:m.b})]})]})},v=function(e){var t=e.currentSong;return Object(b.jsxs)("div",{className:"song-container",children:[Object(b.jsx)("img",{src:t.cover,alt:t.name+" by "+t.artist}),Object(b.jsx)("h2",{children:t.name}),Object(b.jsx)("h3",{children:t.artist}),Object(b.jsx)("p",{children:t.credits}),Object(b.jsx)("p",{children:Object(b.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:t.link})})]})},f=function(e){var t=e.setLibraryStatus,a=e.libraryStatus;return Object(b.jsxs)("nav",{children:[Object(b.jsx)("h1",{children:"Mixtape"}),Object(b.jsxs)("button",{onClick:function(){return t(!a)},children:["Library ",Object(b.jsx)(p.a,{icon:m.c})]})]})},h=a(27),g=a.p+"static/media/sleepy-fish_rest-until-dark.1fac490c.mp3",y=a.p+"static/media/sleepy-fish_rest-until-dark.c56e68b3.jpg",O=a.p+"static/media/night-drive-ak-main-version-04-09-1328.3c59e599.mp3",k=a.p+"static/media/AK_Avatar_3032648670472391.5f34d6dd.jpg",x=a.p+"static/media/clear-sky-hartzmann-main-version-02-20-18592.a18b60aa.mp3",C=a.p+"static/media/Hartzmann_Avatar_6691536139022807.7da0d736.jpg",S=a.p+"static/media/big-dreams-simon-folwar-main-version-02-25-18020.8cf323bc.mp3",w=a.p+"static/media/simon-folwar-avatar-v1_2079212815531580.698f3b41.jpg",_=a.p+"static/media/babel-zayner-main-version-04-00-2158.01385a93.mp3",A=a.p+"static/media/zayner-avatar-v1_4284495953502456.4ab4b0b3.jpg",F=a.p+"static/media/adventure-is-calling-vens-adams-main-version-02-02-31.ecce8ad5.mp3",E=a.p+"static/media/vens-adams-avatar-v1_1721782353768003.391056c1.jpg",M=a.p+"static/media/mazko-seascape.b9eb77ab.mp3",N=a.p+"static/media/mazko-seascape.5df771bf.jpg",D=a.p+"static/media/aiguille-daydream.6c507565.mp3",z=a.p+"static/media/aiguille-nightfall.1001b2bf.mp3",T=a.p+"static/media/aiguille-daydream.c4fe382f.jpg",L=a.p+"static/media/sworn_keep-going.02a63332.mp3",P=a.p+"static/media/sworn_reflection.41b1a25e.mp3",B=a.p+"static/media/sworn.d3a65893.jpg",I=a.p+"static/media/the-kount_mazko_wayfare.8cd8b607.mp3",K=a.p+"static/media/the-kount_mazko_wayfare.e709358f.jpg",R=a.p+"static/media/nymano_epektase_new-horizon.dbc242aa.mp3",U=a.p+"static/media/nymano_epektase_new-horizon.2217ce11.jpg",H=a.p+"static/media/mama-aiuto_today-feels-like-everyday.701b33ef.mp3",J=a.p+"static/media/mama-aiuto-today-feels-like-everyday.0662bda5.jpg",V=a.p+"static/media/edapollo_sundreamer-vhs-tapes-1993-1996.5edf5811.mp3",Z=a.p+"static/media/edapollo_sundreamer-vhs-tapes-1993-1996.a7172604.jpg",G=a.p+"static/media/g-mills_kyle-mcevoy_lukeotwell-ocean-view.6cd551dc.mp3",W=a.p+"static/media/g-mills_kyle-mcevoy_lukeotwell-ocean-view.3b1312c4.jpg",X=a.p+"static/media/aso_middle-school_aviino_under-the-city-stars.6a78245e.mp3",Q=a.p+"static/media/aso_middle-school_aviino_under-the-city-stars.c42143a4.jpg";var q=function(){return[{name:"Rest Until Dark",cover:y,artist:"Sleepy Fish",credits:"Credits: Sleepy Fish - Rest Until Dark",link:"https://chll.to/4280d68a",audio:g,color:["#F1E2C6","#39A1BC"],id:Object(h.a)(),active:!0},{name:"Nightdrive",cover:k,artist:"AK",credits:"Credits: Music from Uppbeat (free for Creators!). License code: FFEZZKHNHD1PSTEI",link:"https://uppbeat.io/t/ak/night-drive",audio:O,color:["#A0988F","#5D6862"],id:Object(h.a)(),active:!1},{name:"Seascape",cover:N,artist:"Makzo",credits:"Credits: Makzo - Seascape",link:"https://chll.to/385f1eec",audio:M,color:["#6072AD","#E9866E"],id:Object(h.a)(),active:!1},{name:"Babel",cover:A,artist:"Zayner",credits:"Credits: Music from Uppbeat (free for Creators!). License code: 9JNPQK6KHA733TRS",link:"https://uppbeat.io/t/zayner/babel",audio:_,color:["#6072AD","#EEB99F"],id:Object(h.a)(),active:!1},{name:"Clear Sky",cover:C,artist:"Hartzmann",credits:"Credits: Music from Uppbeat (free for Creators!). License code: 2D8RFKI6HJIKVU8E",link:"https://uppbeat.io/t/hartzmann/clear-sky",audio:x,color:["#FB269F","#3B23A3"],id:Object(h.a)(),active:!1},{name:"Daydream",cover:T,artist:"Aiguille",credits:"Credits: Aiguille - Daydream",link:"https://chll.to/4936a39e",audio:D,color:["#EF8EA9","#ab417f"],id:Object(h.a)(),active:!1},{name:"Big Dreams",cover:w,artist:"Simon Folwar",credits:"Credits: Music from Uppbeat (free for Creators!). License code: J9CJXAWJXXF5VSMW",link:"https://uppbeat.io/t/simon-folwar/big-dreams",audio:S,color:["#3E7D80","#E47663"],id:Object(h.a)(),active:!1},{name:"Keep Going",cover:B,artist:"Sw\xf8rn",credits:"Credits: Sw\xf8rn - Keep Going",link:"https://chll.to/ba41907d",audio:L,color:["#CD607D","#c94043"],id:Object(h.a)(),active:!1},{name:"Wayfare",cover:K,artist:"The Kount, Makzo",credits:"Credits: The Kount, Makzo - Wayfare",link:"https://chll.to/1f3cc780",audio:I,color:["#ECC1B3","#B8BD34"],id:Object(h.a)(),active:!1},{name:"New Horizon",cover:U,artist:"Nymano, Epektase",credits:"Credits: Nymano - New Horizons",link:"https://chll.to/33999df0",audio:R,color:["#866A8D","#191514"],id:Object(h.a)(),active:!1},{name:"Today Feels Like Everyday",cover:J,artist:"Mama Aiuto",credits:"Credits: Mama Aiuto - Today Feels Like Everyday",link:"https://chll.to/6e187463",audio:H,color:["#203E3F","#3B0C0E"],id:Object(h.a)(),active:!1},{name:"vhs tapes 1993-1996",cover:Z,artist:"edapollo, Sundreamer",credits:"Credits: edapollo, Sundreamer - vhs tapes 1993-1996",link:"https://chll.to/2ac798fd",audio:V,color:["#FAB47C","#B85031"],id:Object(h.a)(),active:!1},{name:"Ocean View",cover:W,artist:"G Mills, Kyle McEvoy, Luke Otwell",credits:"Credits: G Mills, Kyle McEvoy, Luke Otwell - Ocean View",link:"https://chll.to/e6017a17",audio:G,color:["#DFC4D3","#123666"],id:Object(h.a)(),active:!1},{name:"Reflection",cover:B,artist:"Sw\xf8rn",credits:"Credits: Sw\xf8rn - Reflection",link:"https://chll.to/38dc7ff2",audio:P,color:["#CD607D","#c94043"],id:Object(h.a)(),active:!1},{name:"Under the City Stars",cover:Q,artist:"Aso, Middle School, Aviino",credits:"Credits: Aso, Middle School, Aviino - Under the City Stars",link:"https://chll.to/bf3c2e2e",audio:X,color:["#205950","#2ab3bf"],id:Object(h.a)(),active:!1},{name:"Nightfall",cover:T,artist:"Aiguille",credits:"Credits: Aiguille - Nightfall",link:"https://chll.to/cbab4c11",audio:z,color:["#EF8EA9","#ab417f"],id:Object(h.a)(),active:!1},{name:"Adventure Is Calling",cover:E,artist:"Vens Adams",credits:"Credits: Music from Uppbeat (free for Creators!). License code: FFEZZKHNHD1PSTEI",link:"https://uppbeat.io/t/vens-adams/adventure-is-calling",audio:F,color:["#FEF6DF","#9CB4D6"],id:Object(h.a)(),active:!1}]},Y=function(e){var t=e.song,a=e.songs,i=e.setCurrentSong,r=e.id,c=e.audioRef,n=e.isPlaying,s=e.setSongs,u=function(){var e=Object(d.a)(o.a.mark((function e(){var d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i(t);case 2:d=a.map((function(e){return e.id===r?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),s(d),n&&c.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{onClick:u,className:"library-song ".concat(t.active?"selected":""),children:[Object(b.jsx)("img",{src:t.cover,alt:t.name+" by "+t.artist}),Object(b.jsxs)("div",{className:"song-description",children:[Object(b.jsx)("h3",{children:t.name}),Object(b.jsx)("h4",{children:t.artist})]})]})},$=function(e){var t=e.songs,a=e.setCurrentSong,i=e.audioRef,r=e.isPlaying,c=e.setSongs,n=e.libraryStatus;return Object(b.jsxs)("div",{className:"library ".concat(n?"active-library":""),children:[Object(b.jsx)("h2",{children:"Library"}),Object(b.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(b.jsx)(Y,{songs:t,setCurrentSong:a,song:e,id:e.id,audioRef:i,isPlaying:r,setSongs:c},e.id)}))})]})};var ee=function(){var e=Object(i.useRef)(null),t=Object(i.useState)(q()),a=Object(u.a)(t,2),r=a[0],c=a[1],n=Object(i.useState)(r[0]),s=Object(u.a)(n,2),p=s[0],m=s[1],h=Object(i.useState)(!1),g=Object(u.a)(h,2),y=g[0],O=g[1],k=Object(i.useState)({currentTime:0,duration:0,animationPercentage:0}),x=Object(u.a)(k,2),C=x[0],S=x[1],w=Object(i.useState)(!1),_=Object(u.a)(w,2),A=_[0],F=_[1],E=function(e){var t=e.target.currentTime,a=e.target.duration,i=Math.round(t),r=Math.round(a),c=Math.round(i/r*100);S(Object(l.a)(Object(l.a)({},C),{},{currentTime:t,duration:a,animationPercentage:c}))},M=function(){var t=Object(d.a)(o.a.mark((function t(){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.findIndex((function(e){return e.id===p.id})),t.next=3,m(r[(a+1)%r.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App ".concat(A?"library-active":""),children:[Object(b.jsx)(f,{libraryStatus:A,setLibraryStatus:F}),Object(b.jsx)(v,{currentSong:p}),Object(b.jsx)(j,{audioRef:e,setIsPlaying:O,isPlaying:y,currentSong:p,setSongInfo:S,songInfo:C,songs:r,setCurrentSong:m,setSongs:c}),Object(b.jsx)($,{audioRef:e,songs:r,setCurrentSong:m,isPlaying:y,setSongs:c,libraryStatus:A}),Object(b.jsx)("audio",{onTimeUpdate:E,onLoadedMetadata:E,ref:e,src:p.audio,onEnded:M})]})},te=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),i(e),r(e),c(e),n(e)}))};n.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ee,{})}),document.getElementById("root")),te()}},[[25,1,2]]]);
//# sourceMappingURL=main.2d86d4c4.chunk.js.map