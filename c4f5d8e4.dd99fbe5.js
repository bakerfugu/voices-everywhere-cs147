(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{86:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),i=n.n(r),o=n(90),l=n(97),c=n(22),s=n(89),d=n(110),m=n(81),p=n.n(m),g=n(196),u=n(197),f=n(190),h=n(129);const E=({children:e,yRange:t=[0,200],easing:n=[.42,0,.58,1],...o})=>{const{scrollY:l}=Object(h.d)(),c=Object(r.useRef)(),[s,d]=Object(r.useState)(0),[m,p]=Object(r.useState)(0),[g,u]=Object(r.useState)(0);Object(r.useEffect)((()=>{if(!c.current)return;const e=()=>{d(c.current.offsetTop),p(c.current.offsetTop+c.current.offsetHeight),u(window.innerHeight)};return e(),document.addEventListener("load",e),window.addEventListener("resize",e),()=>{document.removeEventListener("load",e),window.removeEventListener("resize",e)}}),[c]);const f=Object(h.c)(l,t,[0,-m],n);return i.a.createElement(h.a.div,Object(a.a)({ref:c,initial:{y:0},style:{y:f}},o),e)};var b=n(189);const y=i.a.createContext({inView:!0}),v=({children:e,reset:t=!1})=>{const[n,a]=Object(r.useState)(!1),o=i.a.useRef(null),l=Object(b.a)(o,{threshold:0});return Object(r.useEffect)((()=>{const e=l&&l.intersectionRatio>0;return e?a(e):t?a(!1):void 0}),[l,t]),i.a.createElement(y.Provider,{value:{inView:n}},i.a.createElement("div",{ref:o},e))};var w=n(7),O=function(e){var t=e.children,n=e.delayOrder,o=void 0===n?0:n,l=e.duration,c=void 0===l?.8:l,s=e.easing,d=void 0===s?[.42,0,.58,1]:s,m=e.delayStart,p=void 0===m?.5:m,g=Object(w.a)(e,["children","delayOrder","duration","easing","delayStart"]),u=Object(r.useContext)(y).inView,f=Object(r.useMemo)((function(){return{duration:c,delay:p+o/5,ease:d}}),[c,o,d]),E={hidden:{scale:0,opacity:0,transition:f},show:{scale:1,opacity:1,transition:f}};return i.a.createElement(h.a.div,Object(a.a)({initial:"hidden",animate:u?"show":"hidden",exit:"hidden",variants:E},g),t)};const k=({children:e,childRef:t,offsetHeight:n=50,customChildHeight:o=0,scrollInputRange:l,opacityOutputRange:c=[0,1],...s})=>{const{scrollY:d}=Object(h.d)(),[m,p]=Object(r.useState)(0);i.a.useEffect((()=>{const e=t.current&&t.current.height||0;p(e||(o||window.innerHeight))}),[m]);const g=Object(h.c)(d,l||[m-n,0],c),u=Object(h.b)(g,{stiffness:400,damping:40});return i.a.createElement(h.a.div,Object(a.a)({alt:"gradient",style:{opacity:u}},s),e)};var j=n(193),S=n(194),P=n(55),x=n.n(P);function L({firstWord:e,secondWord:t,secondWordLink:n,thirdWord:a=null,thirdWordLink:r=null}){return i.a.createElement("div",{className:x.a.linkRow},i.a.createElement(f.a,{variant:"subtitle1"},`${e} `,n&&i.a.createElement("a",{href:n,style:{fontWeight:"bold"}},t),r&&" | ",r&&i.a.createElement("a",{href:r,style:{fontWeight:"bold"}},a)))}function R(e){var t=e.imageUrl,n=e.title,a=e.descriptionA,r=e.descriptionB,c=e.delay,d=e.linkTo,m=e.secondRowContent,p=e.reportLink,g=e.secondRowTitle,u=e.contentTitle,h=e.presentationGoogle,E=e.presentationGoogleLink,b=e.pdfLink,y=e.thirdRowContent,v=e.thirdRowTitle,w=e.invisionLink,k=e.readmeLink,P=e.secondRowOtherContent,R=e.icon,C=Object(s.a)(t),N=i.a.createElement("div",null,C&&i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{className:x.a.featureImage,src:C,alt:n})),i.a.createElement(f.a,{variant:"h5",component:"h4",align:"center",gutterBottom:!0},n),i.a.createElement("div",{style:{textAlign:"center",alignItems:"center"}},i.a.createElement("span",null,a,r?i.a.createElement("span",null,i.a.createElement("span",{style:{fontWeight:"800",color:"#1DDBB5"}}," x "),r," "):"")));return i.a.createElement("div",{className:Object(o.a)("col col--3",x.a.feature)},c?i.a.createElement(O,{delayOrder:c},N):d?i.a.createElement("div",null,i.a.createElement(j.a,{className:x.a.assignmentCardContent,style:{backgroundImage:"url(img/orb3.png)",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"110%",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}},i.a.createElement(l.a,{to:d},i.a.createElement(S.a,{title:n,titleTypographyProps:{align:"center"},className:x.a.assignmentCardTitle})),R),i.a.createElement(L,{firstWord:u,secondWord:h,secondWordLink:E,thirdWord:"PDF",thirdWordLink:b}),g&&i.a.createElement(L,{firstWord:g,secondWord:m,secondWordLink:p,thirdWord:P,thirdWordLink:k}),v&&i.a.createElement(L,{firstWord:v,secondWord:y,secondWordLink:w})):{featureContents:N})}var C=n(82),N=n.n(C);var T=function(e){var t=e.backgroundOrbSource,n=e.oneImage,a=e.imageSource;return n?i.a.createElement("div",{className:N.a.storyImageHolder},i.a.createElement("img",{alt:"Orb background",src:Object(s.a)(t),width:"120px"})):i.a.createElement("div",{className:N.a.storyImageHolder},i.a.createElement("img",{alt:"Orb background",src:Object(s.a)(t),width:"120px"}),i.a.createElement("img",{alt:"Orb image",src:Object(s.a)(a),className:N.a.storyImage}))},F=Object(r.forwardRef)((function(e,t){return i.a.createElement("div",{className:N.a.biggerStory,ref:t},i.a.createElement(O,{delayStart:.1,duration:.5},i.a.createElement("img",{alt:"Orb background",src:Object(s.a)("img/orb-yellow-background.png"),width:"400px"}),i.a.createElement(v,{reset:!0},i.a.createElement("div",{className:N.a.storyContent},i.a.createElement("div",{className:N.a.storyContentImageHolder},i.a.createElement(T,{backgroundOrbSource:e.backgroundOrbSource,oneImage:e.oneImage,imageSource:e.imageSource})),i.a.createElement(f.a,{align:"center",variant:"h6",gutterBottom:!0},e.title),i.a.createElement(Q,{audioFilePath:e.audioFilePath})))))}));function I(e){var t=e.imageSource,n=e.audioFilePath,a=e.title,o=e.oneImage,l=void 0!==o&&o,c=Object(w.a)(e,["imageSource","audioFilePath","title","oneImage"]),s=Object(r.useContext)(y).inView,d=Object(r.useState)(!1),m=d[0],p=d[1],g=Object(r.useRef)(null);!function(e,t){Object(r.useEffect)((function(){function n(n){e.current&&!e.current.contains(n.target)&&t((function(e){return!e&&e}))}return document.addEventListener("mousedown",n),function(){document.removeEventListener("mousedown",n)}}),[e])}(g,p);var u=l?t:"img/orb-yellow-background.png";return s?i.a.createElement("div",c,m?i.a.createElement(F,{ref:g,backgroundOrbSource:u,oneImage:l,imageSource:t,audioFilePath:n,title:a,stopIt:!m}):i.a.createElement("div",{className:N.a.smallerStory},i.a.createElement(O,{delayStart:.1,duration:.6,className:N.a.smallStoryOrb,onClick:function(){return p(!0)}},i.a.createElement(T,{backgroundOrbSource:u,oneImage:l,imageSource:t})))):null}var D=n(163);function W(){return(W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=r.createElement("path",{d:"M37.5 0C16.79 0 0 16.79 0 37.5S16.79 75 37.5 75 75 58.21 75 37.5 58.21 0 37.5 0zM20.677 18.086h11.357v38.828H20.677V18.086zm22.289 0h11.357v38.828H42.966V18.086z",fill:"#1DDBB5"});var G=function(e){var t=e.title,n=e.titleId,a=B(e,["title","titleId"]);return r.createElement("svg",W({width:75,height:75,viewBox:"0 0 75 75",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,A)};function z(){return(z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=r.createElement("path",{d:"M37.5.793C16.8.793 0 17.593 0 38.293s16.8 37.5 37.5 37.5 37.5-16.8 37.5-37.5S58.2.793 37.5.793zM30 55.168v-33.75l22.5 16.875L30 55.168z",fill:"#1DDBB5"});var V=function(e){var t=e.title,n=e.titleId,a=H(e,["title","titleId"]);return r.createElement("svg",z({width:75,height:76,viewBox:"0 0 75 76",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,M)};function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=r.createElement("circle",{cx:37.5,cy:37.5,r:37.5,fill:"#1DDBB5"}),J=r.createElement("path",{d:"M19.25 43.625a5.625 5.625 0 110-11.25 5.625 5.625 0 010 11.25zm18.75 0a5.625 5.625 0 110-11.25 5.625 5.625 0 010 11.25zm18.75 0a5.625 5.625 0 110-11.25 5.625 5.625 0 010 11.25z",fill:"#fff"});var q=function(e){var t=e.title,n=e.titleId,a=Y(e,["title","titleId"]);return r.createElement("svg",U({width:75,height:75,viewBox:"0 0 75 75",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},a),t?r.createElement("title",{id:n},t):null,_,J)},X=n(83),K=n.n(X);function Q(e){var t=e.audioFilePath,n=Object(r.useContext)(y).inView,a=Object(D.a)(t),o=a[0],l=a[1],c=l.pause,s=l.stop,d=l.isPlaying,m=l.duration;return Object(r.useEffect)((function(){return n||s(),function(){s()}}),[n]),Object(r.useEffect)((function(){return function(){s()}}),[]),i.a.createElement("div",{className:K.a.clickable,onClick:function(){d?c():o()}},m?d?i.a.createElement(G,null):i.a.createElement(V,null):i.a.createElement(q,null))}var $=n(164),Z=n.n($),ee=n(166),te=n.n(ee),ne=n(167),ae=n.n(ne),re=n(168),ie=n.n(re),oe=n(169),le=n.n(oe),ce=n(170),se=n.n(ce),de=n(172),me=n.n(de),pe=n(171),ge=n.n(pe),ue=[{title:"Ayelet D",imageUrl:"img/ayelet-face.png",descriptionA:"UI/UX Designer",descriptionB:"Researcher"},{title:"Baker S",imageUrl:"img/baker-face.png",descriptionA:"Lead Web Developer"},{title:"Krishnan N",imageUrl:"img/krishnan-face.png",descriptionA:"Lead Mobile Developer"},{title:"Taylor L",imageUrl:"img/taylor-face.png",descriptionA:"UI/UX Designer",descriptionB:"Developer"}],fe=[{title:"Needfinding",linkTo:"/docs/needfinding",presentationGoogle:"Slides",contentTitle:"Presentation:",pdfLink:"assets/Needfinding-Presentation.pdf",presentationGoogleLink:"assets/Assignment-1-Needfinding.pptx",icon:i.a.createElement(Z.a,{style:{fontSize:"45px",fill:"black"}})},{title:"POVs & Prototyping",linkTo:"/docs/pov-and-experience-prototyping",contentTitle:"Presentation:",presentationGoogle:"Slides",presentationGoogleLink:"assets/Assignment-2-Prototyping.pptx",pdfLink:"assets/Assignment-2-Prototyping.pdf",icon:i.a.createElement(te.a,{style:{fontSize:"45px",fill:"black"}})},{title:"Concept Video",linkTo:"/docs/concept-video",contentTitle:"Presentation:",secondRowTitle:"Video:",secondRowContent:"Watch ",presentationGoogle:"Slides",reportLink:"assets/concept-video-compressed.mp4",pdfLink:"assets/Assignment-3-Concept-Video.pdf",presentationGoogleLink:"assets/Assignment-3-Concept-Video.pptx",icon:i.a.createElement(ae.a,{style:{fontSize:"45px",fill:"black"}})},{title:"Low-fi Prototype",linkTo:"/docs/low-fi-prototype-and-test",contentTitle:"Presentation:",reportLink:"assets/Low-Fi-Prototyping-Report.pdf",secondRowTitle:"Report:",secondRowContent:"PDF",presentationGoogle:"Slides",thirdRowTitle:"Prototype:",thirdRowContent:"Invision",invisionLink:"https://projects.invisionapp.com/share/AP105Q3ADW7G#/screens",pdfLink:"assets/Low-Fi-Protoype-Presentation.pdf",presentationGoogleLink:"assets/Assignment-5-Low-Fi-Protoype.pptx",icon:i.a.createElement(ie.a,{style:{fontSize:"45px",fill:"black"}})}],he=[{title:"Med-fi Prototype",linkTo:"/docs/medium-fi-prototype",contentTitle:"Presentation:",presentationGoogle:"Slides",secondRowTitle:"Prototype:",secondRowContent:"Figma ",reportLink:"https://www.figma.com/proto/d1azqt8OHaDjVIs11hnwG9/Full-Medium-Fi-Prototype?scaling=scale-down&node-id=88%3A9695",pdfLink:"assets/Med-Fi-Prototype.pdf",presentationGoogleLink:"assets/Assignment-6-Med-Fi-Prototype.pptx",secondRowOtherContent:"README",readmeLink:"assets/README.pdf",icon:i.a.createElement(le.a,{style:{fontSize:"45px",fill:"black"}})},{title:"Heuristic Evaluation",linkTo:"/docs/group-heuristic-evaluation",contentTitle:"Report:",presentationGoogle:"PDF",presentationGoogleLink:"assets/voices-group-he.pdf",icon:i.a.createElement(se.a,{style:{fontSize:"45px",fill:"black"}})},{title:"Poster & Pitch",linkTo:"/docs/poster-and-pitch-slide",contentTitle:"Poster:",presentationGoogle:"Image",presentationGoogleLink:"assets/voices-poster-image.png",pdfLink:"assets/voices-final-poster.pdf",secondRowTitle:"Pitch Slide:",secondRowContent:"Image",reportLink:"assets/voices-pitch-slide-image.jpg",secondRowOtherContent:"PDF",readmeLink:"assets/voices-pitch-slide.pdf",icon:i.a.createElement(ge.a,{style:{fontSize:"45px"}})},{title:"Final Prototype",linkTo:"/docs/final-prototype",contentTitle:"Presentation:",presentationGoogle:"Slides",presentationGoogleLink:"assets/Assignment-8-Hi-Fi-Prototype.pptx",pdfLink:"assets/Assignment-8-Hi-Fi-Prototype.pdf",secondRowTitle:"Demo:",secondRowContent:"Watch",reportLink:"assets/hifiDemoVoices.mp4",secondRowOtherContent:"README",readmeLink:"assets/High-Fi-Prototype-README.pdf",thirdRowTitle:"Report:",thirdRowContent:"PDF",invisionLink:"assets/Final_Report.pdf",icon:i.a.createElement(me.a,{style:{fontSize:"45px",fill:"black"}})}];t.default=function(){var e=Object(c.default)().siteConfig,t=void 0===e?{}:e,n=Object(r.useRef)(),o=Object(r.useState)(900),l=o[0],m=o[1];Object(r.useEffect)((function(){var e=window?window.innerHeight:900;m(e)}),[]);var h=[0,l/3];return i.a.createElement(d.a,{title:"voices",description:"Cultural immersion by discovering personal stories."},i.a.createElement("main",null,i.a.createElement("div",{className:p.a.backgroundContainer},i.a.createElement(k,{childRef:n,scrollInputRange:[].concat(h,[l+100,l+400]),opacityOutputRange:[.2,.9,.9,.2]},i.a.createElement("img",{ref:n,src:Object(s.a)("img/Maps-Big-Screenshot-ColorFaded.png"),className:p.a.bgImg})),i.a.createElement(k,{childRef:n,scrollInputRange:h,opacityOutputRange:[1,0]},i.a.createElement("div",{ref:n,className:p.a.bgYellowGradient}))),i.a.createElement("div",{className:p.a.contentContainer},i.a.createElement(g.a,{height:l+"px",className:p.a.heroContainer},i.a.createElement(E,{yRange:h,easing:[.5,0,.75,0]},i.a.createElement("div",{className:p.a.heroBanner},i.a.createElement("img",{alt:"Voices text logo",src:Object(s.a)("img/voicesLogoFixed.png"),width:"400px"}),i.a.createElement("p",{className:"hero__subtitle"},t.tagline)))),i.a.createElement(g.a,{height:"200px"}),i.a.createElement(g.a,{height:l+"px"},i.a.createElement(v,{reset:!0},i.a.createElement(I,{className:p.a.storyCrossroads,imageSource:"img/crossroadsThrift.png",title:"Thrifting at Crossroads in the Fillmore",oneImage:!0,audioFilePath:Object(s.a)("audio/crossroadsStory.mp3")})),i.a.createElement(v,{reset:!0},i.a.createElement(I,{className:p.a.storyPOFA,imageSource:"img/pofa.png",audioFilePath:Object(s.a)("audio/swans-at-the-palace.mp3"),title:"The Swans at the Palace of Fine Arts",oneImage:!0})),i.a.createElement(v,{reset:!0},i.a.createElement(I,{className:p.a.storyGoldenGate,imageSource:"img/golden-gate-bridge.png",audioFilePath:Object(s.a)("audio/golden-gate-howl.mp3"),title:"Does the Golden Gate Bridge Howl?",oneImage:!0})),i.a.createElement(v,{reset:!0},i.a.createElement(I,{className:p.a.storyOceanBeach,imageSource:"img/ocean-beach-fog-burn.jpeg",title:'Flying Discs at Ocean Beach\'s "Fog Burn"',audioFilePath:Object(s.a)("audio/ocean-beach-fog-burn.mp3")})),i.a.createElement(v,{reset:!0},i.a.createElement(I,{className:p.a.saintStupid,imageSource:"img/saint-stupid.jpeg",title:"Saint Stupid's Parade on Market Street",audioFilePath:Object(s.a)("audio/parade-krishnan.mp3")}))),i.a.createElement(g.a,{height:"100px"}),i.a.createElement(g.a,{className:p.a.videoFrame},i.a.createElement("video",{width:"640",height:"360",controls:!0,className:p.a.video},i.a.createElement("source",{src:Object(s.a)("assets/concept-video-compressed.mp4"),type:"video/mp4"})),i.a.createElement(g.a,null,i.a.createElement("form",{action:"https://www.youtube.com/embed/cvilv2km4kE",style:{display:"inline"}},i.a.createElement(u.a,{type:"submit",variant:"contained",style:{backgroundColor:"#25c2a0",color:"white",fontWeight:800,width:"7%",fontSize:12,borderRadius:25}},"YouTube")),i.a.createElement("form",{method:"get",action:Object(s.a)("assets/concept-video-compressed.mp4"),style:{display:"inline"}},i.a.createElement(u.a,{type:"submit",variant:"contained",style:{backgroundColor:"#25c2a0",color:"white",fontWeight:800,width:"7%",fontSize:12,borderRadius:25,margin:"1%"}},"Download")))),i.a.createElement(g.a,null,i.a.createElement("img",{src:"img/exploring-new-cultures.png",style:{maxHeight:"400px",marginLeft:"20%",marginTop:"10%",overflow:"hidden",display:"inline"}})),i.a.createElement(g.a,null,i.a.createElement("img",{src:"img/share-and-listen.png",style:{maxHeight:"400px",marginLeft:"55%"}})),i.a.createElement(g.a,null,i.a.createElement("img",{src:"img/follow-the-voices.png",style:{maxHeight:"400px",marginLeft:"33%",marginBottom:"10%"}})),i.a.createElement(g.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},i.a.createElement(g.a,{style:{marginLeft:"10%",marginTop:"8%"}},i.a.createElement(f.a,{variant:"h2",component:"h2",align:"left",gutterBottom:!0,style:{fontWeight:800}},"Explore voices everywhere"),i.a.createElement(g.a,null,i.a.createElement("a",{href:"https://www.figma.com/proto/d1azqt8OHaDjVIs11hnwG9/Full-Medium-Fi-Prototype?node-id=88%3A9695&scaling=scale-down",target:"_blank",rel:"noopener noreferrer"},i.a.createElement(u.a,{type:"submit",variant:"contained",style:{backgroundColor:"#25c2a0",color:"white",fontWeight:800,width:"33%",fontSize:18,borderRadius:25}},"Try our prototype")))),i.a.createElement(g.a,null,i.a.createElement("img",{src:"img/demo.png",size:"large",style:{maxHeight:"550px",marginLeft:"-20%"}}))),i.a.createElement(g.a,{style:{paddingTop:"5%"}},i.a.createElement(f.a,{variant:"h2",component:"h2",align:"center",gutterBottom:!0},"Our Team"),ue&&ue.length>0&&i.a.createElement(v,{reset:!0},i.a.createElement("section",{className:p.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},ue.map((function(e,t){return i.a.createElement(R,Object(a.a)({key:t,delay:t+1},e))}))))))),i.a.createElement(g.a,{height:"200px"}),i.a.createElement(g.a,null,i.a.createElement(f.a,{variant:"h2",component:"h2",align:"center",gutterBottom:!0},"Our Journey"),fe&&fe.length>0&&i.a.createElement("section",{className:p.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},fe.map((function(e,t){return i.a.createElement(R,Object(a.a)({key:t},e))}))))),he&&he.length>0&&i.a.createElement("section",{className:p.a.features},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},he.map((function(e,t){return i.a.createElement(R,Object(a.a)({key:t},e))})))))),i.a.createElement(g.a,{height:"200px"}))))}}}]);