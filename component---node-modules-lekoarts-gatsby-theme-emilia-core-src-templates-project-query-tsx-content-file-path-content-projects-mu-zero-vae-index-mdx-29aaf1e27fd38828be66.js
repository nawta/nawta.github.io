"use strict";(self.webpackChunkemilia=self.webpackChunkemilia||[]).push([[194],{9878:function(e,t,a){a.d(t,{p:function(){return y},A:function(){return Y}});var r=a(6540),n=a(557),i=a(6835),o=a(3628),l=a(2532),s=a(9745),c=a(8993),m=a(4810),d=a(1758),p=a(9383),u=a(2155);var g=e=>{var t,a;let{title:s,areas:g,description:h="",date:f}=e;const{name:x}=(0,p.A)(),v=(0,m.useStaticQuery)("468821756"),y=(0,o.zh)({config:o.$W.slow,from:{opacity:0,transform:"translate3d(0, -30px, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),Y=(0,o.zh)({config:o.$W.slow,from:{opacity:0,transform:"translate3d(-30px, 0, 0)"},to:{opacity:1,transform:"translate3d(0, 0, 0)"}}),w=(0,o.zh)({config:o.$W.slow,delay:500,from:{opacity:0},to:{opacity:1}});return(0,n.Y)(i.so,{as:"header",variant:"layout.header"},(0,n.Y)(d.A,null),(0,n.Y)(i.mc,{sx:{textAlign:"center",my:4,zIndex:10}},(0,n.Y)(o.CS.div,{style:Y},(0,n.Y)(m.Link,{to:"/","aria-label":`${x} - Back to homepage`,sx:{display:"flex",alignItems:"center",color:"text",textDecoration:"none",svg:{transition:"transform 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955)"},"&:hover, &:focus":{svg:{transform:"translateX(-6px)"}}}},(0,n.Y)(u.A,{id:"leftArrow",width:"20",height:"18"}),(0,n.Y)("div",{sx:{overflow:"hidden",borderRadius:"full",width:"40px",height:"40px",display:"inline-block",boxShadow:"md",mx:2}},(null==v||null===(t=v.file)||void 0===t||null===(a=t.childImageSharp)||void 0===a?void 0:a.gatsbyImageData)&&(0,n.Y)(l.G,{image:v.file.childImageSharp.gatsbyImageData,alt:"Avatar"})),(0,n.Y)("span",{sx:{fontWeight:"medium"}},x))),(0,n.Y)("div",{sx:{mt:4,mb:[6,6,7]}},(0,n.Y)(o.CS.div,{style:y},(0,n.Y)(i.DZ,{as:"h1",variant:"styles.h1"},s)),(0,n.Y)(o.CS.div,{style:w},(0,n.Y)(c.IE.p,{sx:{mb:0,mt:4}},f),(0,n.Y)("div",null,g.map(((e,t)=>(0,n.Y)(r.Fragment,{key:e},t>0&&", ",e)))),h&&(0,n.Y)("div",{sx:{maxWidth:"900px",mx:"auto",mt:5,p:{textAlign:"left",overflowWrap:"break-word"}}},h)))))},h=a(7019);var f=e=>{let{prev:t,next:a}=e;return(0,n.Y)("div",{sx:{mt:6,mb:4}},(0,n.Y)("div",{sx:{display:"grid",gridTemplateColumns:"250px 1fr",alignItems:"center",mb:4}},(0,n.Y)("h2",{sx:{color:"textMuted",fontWeight:"medium",letterSpacing:"widest",textTransform:"uppercase",fontSize:1,my:0}},"More Projects"),(0,n.Y)("div",{sx:{width:"100%",height:"2px",backgroundColor:"muted"}})),(0,n.Y)("div",{sx:{display:"grid",gridTemplateColumns:["1fr","1fr","1fr 1fr"],gridGap:[4,4,5],a:{position:"relative"},"[data-name='card-overlay']":{position:"absolute",top:0,left:0,right:0,bottom:0}}},t&&(0,n.Y)(h.A,{item:t}),a&&(0,n.Y)(h.A,{item:a})))},x=a(2455);var v=e=>{let{data:{project:t,images:a},pageContext:{prev:r,next:c},children:m}=e;const d=(0,o.zh)({config:o.$W.slow,delay:800,from:{opacity:0},to:{opacity:1}});return(0,n.Y)(s.A,null,(0,n.Y)(g,{title:t.title,description:m,areas:t.areas,date:t.date}),(0,n.Y)(i.mc,{sx:{mt:["-6rem","-6rem","-8rem"]}},a.nodes.map((e=>(0,n.Y)(o.CS.div,{key:e.name,style:d},(0,n.Y)(l.G,{image:e.childImageSharp.gatsbyImageData,alt:e.name,sx:{mb:[4,4,5],boxShadow:"xl"}})))),(0,n.Y)(f,{prev:r,next:c})))};const y=e=>{let{data:{project:t}}=e;return(0,n.Y)(x.A,{title:t.title,description:t.excerpt,pathname:t.slug,image:t.cover.childImageSharp.resize.src})};function Y(e){let{...t}=e;return r.createElement(v,t)}},6675:function(e,t,a){a.r(t),a.d(t,{Head:function(){return l.p},default:function(){return s}});var r=a(6540),n=a(8453);function i(e){const t=Object.assign({p:"p",a:"a"},(0,n.RP)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"人工知能の分野において，計画能力を備えたエージェントの開発は長年にわたる重要な課題である．完璧なシミュレーションが可能なチェスや囲碁のような分野では，木構造ベースの計画手法が顕著な成功を収めてきた．\nしかし，実世界の問題に直面すると，環境を動かすダイナミクスはしばしば複雑で未知である．\nこの課題に対応するため，以前には木構造ベースの探索と学習モデルを組み合わせた，世界モデルを活用するボードゲームAIであるMuZeroが開発された．\nこのアルゴリズムは，基盤となるダイナミクスの詳細を知らなくても，挑戦的で視覚的に複雑な領域で超人的なパフォーマンスを実現する．特に，囲碁，チェス，将棋において，MuZeroはゲームのルールが提供されたAlphaZeroアルゴリズムに匹敵する性能を示した．\n本研究では，MuZeroアルゴリズムを発展させ， VAE（Variational AutoEncoder）を使用してResNetの部分を変更した「MuZero VAE」という新しいアーキテクチャを提案する．\nこれによりオセロを学習する．MuzeroはRepresentationとDynamicsによる潜在空間を整合させる仕組みを持たないが，この2つの潜在空間を明示的に近づけることでPredictionの学習を安定化させる．\nまた，2つの潜在空間を近づけることで潜在空間の距離が近い位置で戦略的や評価値的に近い状況を学習することが期待され，VAEで盤面を再現することができる．これにより潜在空間内を探索し，戦略的に類似した盤面を再現することによりモデルの解釈性が増加するとともに，オセロというゲームの理解の深化にも大いに寄与する可能性が高い研究である．"),"\n",r.createElement(t.p,null,'このプロジェクトは「東京大学松尾研主催世界モデルと知能2023」最終課題において優秀プロジェクトの一つに選ばれました．\nThis project was selected as one of the excellent works at the end-term project in "World Model and Intelligence 2023" Course held by Matsuo Institute.'),"\n",r.createElement(t.p,null,"Paper Prescript: ",r.createElement(t.a,{href:"https://drive.google.com/file/d/1ZxZ6zm2DwHUqnFqtQskJjIxW03lqxJpg/view?usp=sharing"},"https://drive.google.com/file/d/1ZxZ6zm2DwHUqnFqtQskJjIxW03lqxJpg/view?usp=sharing"),"\nPoster: ",r.createElement(t.a,{href:"https://drive.google.com/file/d/131KIxNktSpwvC5Ta4RMRBIVFFKvPB380/view?usp=sharing"},"https://drive.google.com/file/d/131KIxNktSpwvC5Ta4RMRBIVFFKvPB380/view?usp=sharing")))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.RP)(),e.components);return t?r.createElement(t,e,r.createElement(i,e)):i(e)},l=a(9878);function s(e){return r.createElement(l.A,e,r.createElement(o,e))}l.A}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-emilia-core-src-templates-project-query-tsx-content-file-path-content-projects-mu-zero-vae-index-mdx-29aaf1e27fd38828be66.js.map