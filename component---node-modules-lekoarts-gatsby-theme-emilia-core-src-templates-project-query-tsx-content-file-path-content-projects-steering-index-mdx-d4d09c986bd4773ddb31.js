"use strict";(self.webpackChunkemilia=self.webpackChunkemilia||[]).push([[923],{9878:function(e,t,a){a.d(t,{p:function(){return y},A:function(){return Y}});var r=a(6540),n=a(557),i=a(6835),o=a(6284),l=a(2532),s=a(9745),m=a(8993),d=a(4810),c=a(1758),u=a(9383),p=a(2155);var h=e=>{var t,a;let{title:s,areas:h,description:f="",date:g}=e;const{name:v}=(0,u.A)(),x=(0,d.useStaticQuery)("468821756"),y=(0,o.zh)({config:o.$W.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),Y=(0,o.zh)({config:o.$W.slow,from:{opacity:0,transform:"translate3d(-30px, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),b=(0,o.zh)({config:o.$W.slow,delay:500,from:{opacity:0},to:{opacity:1}});return(0,n.Y)(i.so,{as:"header",variant:"layout.header"},(0,n.Y)(c.A,null),(0,n.Y)(i.mc,{sx:{textAlign:"center",my:4,zIndex:10}},(0,n.Y)(o.CS.div,{style:Y},(0,n.Y)(d.Link,{to:"/","aria-label":v+" - Back to homepage",sx:{display:"flex",alignItems:"center",color:"text",textDecoration:"none",svg:{transition:"transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)"},"&:hover, &:focus":{svg:{transform:"translateX(-6px)"}}}},(0,n.Y)(p.A,{id:"leftArrow",width:"20",height:"18"}),(0,n.Y)("div",{sx:{overflow:"hidden",borderRadius:"full",width:"40px",height:"40px",display:"inline-block",boxShadow:"md",mx:2}},(null==x||null===(t=x.file)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,n.Y)(l.G,{image:x.file.childImageSharp.gatsbyImageData,alt:"Avatar"})),(0,n.Y)("span",{sx:{fontWeight:"medium"}},v))),(0,n.Y)("div",{sx:{mt:4,mb:[6,6,7]}},(0,n.Y)(o.CS.div,{style:y},(0,n.Y)(i.DZ,{as:"h1",variant:"styles.h1"},s)),(0,n.Y)(o.CS.div,{style:b},(0,n.Y)(m.IE.p,{sx:{mb:0,mt:4}},g),(0,n.Y)("div",null,h.map(((e,t)=>(0,n.Y)(r.Fragment,{key:e},t>0&&", ",e)))),f&&(0,n.Y)("div",{sx:{maxWidth:"900px",mx:"auto",mt:5,p:{textAlign:"left",overflowWrap:"break-word"}}},f)))))},f=a(7019);var g=e=>{let{prev:t,next:a}=e;return(0,n.Y)("div",{sx:{mt:6,mb:4}},(0,n.Y)("div",{sx:{display:"grid",gridTemplateColumns:"250px 1fr",alignItems:"center",mb:4}},(0,n.Y)("h2",{sx:{color:"textMuted",fontWeight:"medium",letterSpacing:"widest",textTransform:"uppercase",fontSize:1,my:0}},"More Projects"),(0,n.Y)("div",{sx:{width:"100%",height:"2px",backgroundColor:"muted"}})),(0,n.Y)("div",{sx:{display:"grid",gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridGap:[4,4,5],a:{position:"relative"},"[data-name='card-overlay']":{position:"absolute",top:0,left:0,right:0,bottom:0}}},t&&(0,n.Y)(f.A,{item:t}),a&&(0,n.Y)(f.A,{item:a})))},v=a(2455);var x=e=>{let{data:{project:t,images:a},pageContext:{prev:r,next:m},children:d}=e;const c=(0,o.zh)({config:o.$W.slow,delay:800,from:{opacity:0},to:{opacity:1}});return(0,n.Y)(s.A,null,(0,n.Y)(h,{title:t.title,description:d,areas:t.areas,date:t.date}),(0,n.Y)(i.mc,{sx:{mt:["-6rem","-6rem","-8rem"]}},a.nodes.map((e=>(0,n.Y)(o.CS.div,{key:e.name,style:c},(0,n.Y)(l.G,{image:e.childImageSharp.gatsbyImageData,alt:e.name,sx:{mb:[4,4,5],boxShadow:"xl"}})))),(0,n.Y)(g,{prev:r,next:m})))};const y=e=>{let{data:{project:t}}=e;return(0,n.Y)(v.A,{title:t.title,description:t.excerpt,pathname:t.slug,image:t.cover.childImageSharp.resize.src})};function Y(e){let{...t}=e;return r.createElement(x,t)}},3590:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l.p},default:function(){return s}});var r=a(6540),n=a(8453);function i(e){const t=Object.assign({p:"p",em:"em",a:"a"},(0,n.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"The Steering Law is a robust model to predict the movement time (",r.createElement(t.em,null,"MT"),") for steering through a constrained path, and the most representative example in human-computer interaction (HCI) is navigating cascaded menus.\r\nIn typical implementations of cascaded menus, however, users can deviate from the path for a short time; we call this error-accepting delay, or ",r.createElement(t.em,null,"T",r.createElement("sub",null,"delay")),".\r\nYamanaka modified the Steering Law to predict ",r.createElement(t.em,null,"MT")," under several ",r.createElement(t.em,null,"T",r.createElement("sub",null,"delay"))," conditions, and our goal is to investigate the reproducibility of his model with more various ",r.createElement(t.em,null,"T",r.createElement("sub",null,"delay"))," values.\r\nIn addition, HCI researchers have recently formed a consensus that the goodness of models should be judged by the prediction accuracy for future (untested) task conditions.\r\nThus, for the sake of completeness, we conducted two analyses: a shuffle-split cross-validation and leave-one-",r.createElement(t.em,null,"T",r.createElement("sub",null,"delay")),"-out cross-validation.\r\nThe results showed that, regardless of the all-data and cross-validation analyses, Yamanaka's modified model outperformed the baseline Steering Law, which strengthened his original experimental report."),"\n",r.createElement(t.p,null,"DOI: ",r.createElement(t.a,{href:"http://doi.org/10.1080/10447318.2023.2192586"},"http://doi.org/10.1080/10447318.2023.2192586")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},l=a(9878);function s(e){return r.createElement(l.A,e,r.createElement(o,e))}l.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-emilia-core-src-templates-project-query-tsx-content-file-path-content-projects-steering-index-mdx-d4d09c986bd4773ddb31.js.map