"use strict";(self.webpackChunkemilia=self.webpackChunkemilia||[]).push([[690],{9878:function(e,t,a){a.d(t,{p:function(){return b},A:function(){return Y}});var n=a(454),i=a(6540),r=a(557),o=a(6835),s=a(3628),l=a(2532),d=a(9745),c=a(8993),m=a(4810),p=a(1758),u=a(9383),g=a(2155);var f=e=>{var t,a;let{title:n,areas:d,description:f="",date:h}=e;const{name:v}=(0,u.A)(),x=(0,m.useStaticQuery)("468821756"),y=(0,s.zh)({config:s.$W.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),b=(0,s.zh)({config:s.$W.slow,from:{opacity:0,transform:"translate3d(-30px, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),Y=(0,s.zh)({config:s.$W.slow,delay:500,from:{opacity:0},to:{opacity:1}});return(0,r.Y)(o.so,{as:"header",variant:"layout.header"},(0,r.Y)(p.A,null),(0,r.Y)(o.mc,{sx:{textAlign:"center",my:4,zIndex:10}},(0,r.Y)(s.CS.div,{style:b},(0,r.Y)(m.Link,{to:"/","aria-label":v+" - Back to homepage",sx:{display:"flex",alignItems:"center",color:"text",textDecoration:"none",svg:{transition:"transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)"},"&:hover, &:focus":{svg:{transform:"translateX(-6px)"}}}},(0,r.Y)(g.A,{id:"leftArrow",width:"20",height:"18"}),(0,r.Y)("div",{sx:{overflow:"hidden",borderRadius:"full",width:"40px",height:"40px",display:"inline-block",boxShadow:"md",mx:2}},(null==x||null===(t=x.file)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,r.Y)(l.G,{image:x.file.childImageSharp.gatsbyImageData,alt:"Avatar"})),(0,r.Y)("span",{sx:{fontWeight:"medium"}},v))),(0,r.Y)("div",{sx:{mt:4,mb:[6,6,7]}},(0,r.Y)(s.CS.div,{style:y},(0,r.Y)(o.DZ,{as:"h1",variant:"styles.h1"},n)),(0,r.Y)(s.CS.div,{style:Y},(0,r.Y)(c.IE.p,{sx:{mb:0,mt:4}},h),(0,r.Y)("div",null,d.map(((e,t)=>(0,r.Y)(i.Fragment,{key:e},t>0&&", ",e)))),f&&(0,r.Y)("div",{sx:{maxWidth:"900px",mx:"auto",mt:5,p:{textAlign:"left",overflowWrap:"break-word"}}},f)))))},h=a(7019);var v=e=>{let{prev:t,next:a}=e;return(0,r.Y)("div",{sx:{mt:6,mb:4}},(0,r.Y)("div",{sx:{display:"grid",gridTemplateColumns:"250px 1fr",alignItems:"center",mb:4}},(0,r.Y)("h2",{sx:{color:"textMuted",fontWeight:"medium",letterSpacing:"widest",textTransform:"uppercase",fontSize:1,my:0}},"More Projects"),(0,r.Y)("div",{sx:{width:"100%",height:"2px",backgroundColor:"muted"}})),(0,r.Y)("div",{sx:{display:"grid",gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridGap:[4,4,5],a:{position:"relative"},"[data-name='card-overlay']":{position:"absolute",top:0,left:0,right:0,bottom:0}}},t&&(0,r.Y)(h.A,{item:t}),a&&(0,r.Y)(h.A,{item:a})))},x=a(2455);var y=e=>{let{data:{project:t,images:a},pageContext:{prev:n,next:i},children:c}=e;const m=(0,s.zh)({config:s.$W.slow,delay:800,from:{opacity:0},to:{opacity:1}});return(0,r.Y)(d.A,null,(0,r.Y)(f,{title:t.title,description:c,areas:t.areas,date:t.date}),(0,r.Y)(o.mc,{sx:{mt:["-6rem","-6rem","-8rem"]}},a.nodes.map((e=>(0,r.Y)(s.CS.div,{key:e.name,style:m},(0,r.Y)(l.G,{image:e.childImageSharp.gatsbyImageData,alt:e.name,sx:{mb:[4,4,5],boxShadow:"xl"}})))),(0,r.Y)(v,{prev:n,next:i})))};const b=e=>{let{data:{project:t}}=e;return(0,r.Y)(x.A,{title:t.title,description:t.excerpt,pathname:t.slug,image:t.cover.childImageSharp.resize.src})};function Y(e){let t=Object.assign({},((0,n.A)(e),e));return i.createElement(y,t)}},3688:function(e,t,a){a.r(t),a.d(t,{Head:function(){return s.p},default:function(){return l}});var n=a(6540),i=a(8453);function r(e){const t=Object.assign({p:"p"},(0,i.RP)(),e.components);return n.createElement(t.p,null,"We propose SUMART, a method for summarizing and compressing the volume of verbose subtitle translations.\nSUMART is designed for understanding translated captions (e.g., interlingual conversations via subtitle translation or when watching movies in foreign language audio and translated captions).\nSUMART is intended for users who want a big-picture and fast understanding of the conversation, audio, video content, and speech in a foreign language.\nDuring the training data collection, when a speaker makes a verbose statement, SUMART employs a large language model on-site to compress the volume of subtitles. This compressed data is then stored in a database for fine-tuning purposes.\nLater, SUMART uses data pairs from those non-compressed ASR results and compressed translated results for fine-tuning the translation model to generate more concise translations for practical uses.\nIn practical applications, SUMART utilizes this trained model to produce concise translation results.\nFurthermore, as a practical application, we developed an application that allows conversations using subtitle translation in augmented reality spaces.\nAs a pilot study, we conducted qualitative surveys using a SUMART prototype and a survey on the summarization model for SUMART.\nWe envision the most effective use case of this system is where users need to consume a lot of information quickly (e.g., Speech, lectures, podcasts, Q&A in conferences).")}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.RP)(),e.components);return t?n.createElement(t,e,n.createElement(r,e)):r(e)},s=a(9878);function l(e){return n.createElement(s.A,e,n.createElement(o,e))}s.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-emilia-core-src-templates-project-query-tsx-content-file-path-content-projects-sumart-index-mdx-baca08d89fef3dd18c54.js.map