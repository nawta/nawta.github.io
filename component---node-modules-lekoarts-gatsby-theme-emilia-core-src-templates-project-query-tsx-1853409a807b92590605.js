(self.webpackChunkemilia=self.webpackChunkemilia||[]).push([[568],{2102:function(t,e,r){var n=r(2632);t.exports={MDXRenderer:n}},2632:function(t,e,r){var n=r(3515),o=r(861),a=r(8416),i=r(7071),s=["scope","children"];function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=r(7294),p=r(4983).mdx,d=r(6948).useMDXScope;t.exports=function(t){var e=t.scope,r=t.children,a=i(t,s),l=d(e),f=u.useMemo((function(){if(!r)return null;var t=c({React:u,mdx:p},l),e=Object.keys(t),a=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(o(e),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,e]);return u.createElement(f,c({},a))}},3583:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var n=r(7294),o=r(977),a=r(9983),i=r(6787),s=r(7059),l=r(1103),c=r(2877),u=r(1597),p=r(2102),d=r(6450),f=function(){return n.createElement("svg",{width:"20",height:"18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.832 17.642L.345 9.864a1.256 1.256 0 0 1 0-1.728L7.832.358a1.146 1.146 0 0 1 1.663 0c.46.477.46 1.251 0 1.728L4.017 7.778H20v2.444H4.017l5.478 5.692c.46.477.46 1.25 0 1.728a1.146 1.146 0 0 1-1.663 0z",fill:"currentColor"}))},m=r(2795),x=function(t){var e,r,l=t.title,x=t.areas,y=t.description,g=void 0===y?"":y,v=t.date,b=(0,m.Z)().name,h=(0,u.useStaticQuery)("468821756"),Z=(0,i.useSpring)({config:i.config.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),w=(0,i.useSpring)({config:i.config.slow,from:{opacity:0,transform:"translate3d(-30px, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),O=(0,i.useSpring)({config:i.config.slow,delay:500,from:{opacity:0},to:{opacity:1}});return(0,o.tZ)(a.kC,{as:"header",variant:"layout.header"},(0,o.tZ)(d.Z,null),(0,o.tZ)(a.W2,{sx:{textAlign:"center",my:4,zIndex:10}},(0,o.tZ)(i.animated.div,{style:w},(0,o.tZ)(u.Link,{to:"/","aria-label":b+" - Back to homepage",sx:{display:"flex",alignItems:"center",color:"text",textDecoration:"none",svg:{transition:"transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)"},"&:hover, &:focus":{svg:{transform:"translateX(-6px)"}}}},(0,o.tZ)(f,null),(0,o.tZ)("div",{sx:{overflow:"hidden",borderRadius:"full",width:"40px",height:"40px",display:"inline-block",boxShadow:"md",mx:2}},(null==h||null===(e=h.file)||void 0===e||null===(r=e.childImageSharp)||void 0===r?void 0:r.gatsbyImageData)&&(0,o.tZ)(s.G,{image:h.file.childImageSharp.gatsbyImageData,alt:"Avatar"})),(0,o.tZ)("span",{sx:{fontWeight:"medium"}},b))),(0,o.tZ)("div",{sx:{mt:4,mb:[6,6,7]}},(0,o.tZ)(i.animated.div,{style:Z},(0,o.tZ)(a.X6,{as:"h1",variant:"styles.h1"},l)),(0,o.tZ)(i.animated.div,{style:O},(0,o.tZ)(c.Ge.p,{sx:{mb:0,mt:4}},v),(0,o.tZ)("div",null,x.map((function(t,e){return(0,o.tZ)(n.Fragment,{key:t},e>0&&", ",t)}))),g&&(0,o.tZ)("div",{sx:{maxWidth:"900px",mx:"auto",mt:5,p:{textAlign:"left",overflowWrap:"break-word"}}},(0,o.tZ)(p.MDXRenderer,null,g))))))},y=r(638),g=function(t){var e=t.prev,r=t.next;return(0,o.tZ)("div",{sx:{mt:6,mb:4}},(0,o.tZ)("div",{sx:{display:"grid",gridTemplateColumns:"250px 1fr",alignItems:"center",mb:4}},(0,o.tZ)("h2",{sx:{color:"textMuted",fontWeight:"medium",letterSpacing:"widest",textTransform:"uppercase",fontSize:1,my:0}},"More Projects"),(0,o.tZ)("div",{sx:{width:"100%",height:"2px",backgroundColor:"muted"}})),(0,o.tZ)("div",{sx:{display:"grid",gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridGap:[4,4,5],a:{position:"relative"},"[data-name='card-overlay']":{position:"absolute",top:0,left:0,right:0,bottom:0}}},e&&(0,o.tZ)(y.Z,{item:e}),r&&(0,o.tZ)(y.Z,{item:r})))},v=r(6460),b=function(t){var e=t.data,r=e.project,n=e.images,c=t.pageContext,u=c.prev,p=c.next,d=(0,i.useSpring)({config:i.config.slow,delay:800,from:{opacity:0},to:{opacity:1}});return(0,o.tZ)(l.Z,null,(0,o.tZ)(v.Z,{title:r.title,description:r.excerpt,pathname:r.slug,image:r.cover.childImageSharp.resize.src}),(0,o.tZ)(x,{title:r.title,description:r.body,areas:r.areas,date:r.date}),(0,o.tZ)(a.W2,{sx:{mt:["-6rem","-6rem","-8rem"]}},n.nodes.map((function(t){return(0,o.tZ)(i.animated.div,{key:t.name,style:d},(0,o.tZ)(s.G,{image:t.childImageSharp.gatsbyImageData,alt:t.name,sx:{mb:[4,4,5],boxShadow:"xl"}}))})),(0,o.tZ)(g,{prev:u,next:p})))};var h=function(t){var e=Object.assign({},t);return n.createElement(b,e)}},3405:function(t,e,r){var n=r(3897);t.exports=function(t){if(Array.isArray(t))return n(t)},t.exports.__esModule=!0,t.exports.default=t.exports},3515:function(t,e,r){var n=r(6015),o=r(9617);function a(e,r,i){return o()?(t.exports=a=Reflect.construct.bind(),t.exports.__esModule=!0,t.exports.default=t.exports):(t.exports=a=function(t,e,r){var o=[null];o.push.apply(o,e);var a=new(Function.bind.apply(t,o));return r&&n(a,r.prototype),a},t.exports.__esModule=!0,t.exports.default=t.exports),a.apply(null,arguments)}t.exports=a,t.exports.__esModule=!0,t.exports.default=t.exports},8416:function(t){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},9617:function(t){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}},t.exports.__esModule=!0,t.exports.default=t.exports},9498:function(t){t.exports=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)},t.exports.__esModule=!0,t.exports.default=t.exports},2281:function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},861:function(t,e,r){var n=r(3405),o=r(9498),a=r(6116),i=r(2281);t.exports=function(t){return n(t)||o(t)||a(t)||i()},t.exports.__esModule=!0,t.exports.default=t.exports}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-emilia-core-src-templates-project-query-tsx-1853409a807b92590605.js.map