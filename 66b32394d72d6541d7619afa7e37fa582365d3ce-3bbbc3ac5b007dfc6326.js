"use strict";(self.webpackChunkemilia=self.webpackChunkemilia||[]).push([[375],{153:function(e,r,a){a.d(r,{m4:function(){return x}});var t=a(7326),n=a(4578),f=a(2407);var o=function(e){function r(r){var a;return a=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+r+" for more information.")||this,(0,t.Z)(a)}return(0,n.Z)(r,e),r}((0,f.Z)(Error));function i(e){return Math.round(255*e)}function d(e,r,a){return i(e)+","+i(r)+","+i(a)}function l(e,r,a,t){if(void 0===t&&(t=d),0===r)return t(a,a,a);var n=(e%360+360)%360/60,f=(1-Math.abs(2*a-1))*r,o=f*(1-Math.abs(n%2-1)),i=0,l=0,s=0;n>=0&&n<1?(i=f,l=o):n>=1&&n<2?(i=o,l=f):n>=2&&n<3?(l=f,s=o):n>=3&&n<4?(l=o,s=f):n>=4&&n<5?(i=o,s=f):n>=5&&n<6&&(i=f,s=o);var u=a-f/2;return t(i+u,l+u,s+u)}var s={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var u=/^#[a-fA-F0-9]{6}$/,c=/^#[a-fA-F0-9]{8}$/,b=/^#[a-fA-F0-9]{3}$/,p=/^#[a-fA-F0-9]{4}$/,g=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,h=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,m=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,y=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function v(e){if("string"!=typeof e)throw new o(3);var r=function(e){if("string"!=typeof e)return e;var r=e.toLowerCase();return s[r]?"#"+s[r]:e}(e);if(r.match(u))return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16)};if(r.match(c)){var a=parseFloat((parseInt(""+r[7]+r[8],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[2],16),green:parseInt(""+r[3]+r[4],16),blue:parseInt(""+r[5]+r[6],16),alpha:a}}if(r.match(b))return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16)};if(r.match(p)){var t=parseFloat((parseInt(""+r[4]+r[4],16)/255).toFixed(2));return{red:parseInt(""+r[1]+r[1],16),green:parseInt(""+r[2]+r[2],16),blue:parseInt(""+r[3]+r[3],16),alpha:t}}var n=g.exec(r);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var f=h.exec(r.substring(0,50));if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])};var i=m.exec(r);if(i){var d="rgb("+l(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",v=g.exec(d);if(!v)throw new o(4,r,d);return{red:parseInt(""+v[1],10),green:parseInt(""+v[2],10),blue:parseInt(""+v[3],10)}}var w=y.exec(r.substring(0,50));if(w){var k="rgb("+l(parseInt(""+w[1],10),parseInt(""+w[2],10)/100,parseInt(""+w[3],10)/100)+")",I=g.exec(k);if(!I)throw new o(4,r,k);return{red:parseInt(""+I[1],10),green:parseInt(""+I[2],10),blue:parseInt(""+I[3],10),alpha:parseFloat(""+w[4])>1?parseFloat(""+w[4])/100:parseFloat(""+w[4])}}throw new o(5)}var w=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function k(e){var r=e.toString(16);return 1===r.length?"0"+r:r}function I(e,r,a){if("number"==typeof e&&"number"==typeof r&&"number"==typeof a)return w("#"+k(e)+k(r)+k(a));if("object"==typeof e&&void 0===r&&void 0===a)return w("#"+k(e.red)+k(e.green)+k(e.blue));throw new o(6)}function x(e,r,a,t){if("string"==typeof e&&"number"==typeof r){var n=v(e);return"rgba("+n.red+","+n.green+","+n.blue+","+r+")"}if("number"==typeof e&&"number"==typeof r&&"number"==typeof a&&"number"==typeof t)return t>=1?I(e,r,a):"rgba("+e+","+r+","+a+","+t+")";if("object"==typeof e&&void 0===r&&void 0===a&&void 0===t)return e.alpha>=1?I(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new o(7)}},4377:function(e,r,a){var t=a(4942),n=a(1349),f=a(1249),o=a(1597),i=a(153),d=a(7059);function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){(0,t.Z)(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}var u=["64px","32px","16px","8px","4px"].map((function(e){return"rgba(0, 0, 0, 0.15) 0px "+e+" "+e+" 0px"}));r.Z=function(e){var r=e.item,a=e.overlay,t=void 0===a?"#000":a,l=e.shadow,c=void 0===l?u:l,b=e.eager;return(0,n.tZ)(o.Link,{"aria-label":"Visit "+r.title+" project page",sx:function(e){var r;return s(s({},null===(r=e.styles)||void 0===r?void 0:r.a),{},{outline:"none","&:focus":{boxShadow:c.join(", ")+", "+(0,i.m4)(t,.5)+" 0px 0px 0px 10px"},"&:hover, &:focus":{"[data-name='card-overlay']":{opacity:1}},boxShadow:c.join(", "),position:"relative"})},to:r.slug},(0,n.tZ)("div",{sx:{zIndex:20,display:"flex",justifyContent:"center",alignItems:"center",opacity:0,transition:"all 0.3s ease-in-out",color:"white",backgroundColor:(0,i.m4)(t,.9),position:"absolute",top:0,left:0,right:0,bottom:0},"data-name":"card-overlay"},(0,n.tZ)(f.X6,{variant:"styles.h2",sx:{my:0,textShadow:"rgba(0, 0, 0, 0.2) 0px 2px 12px",color:"white"}},r.title)),(0,n.tZ)(d.G,{loading:b?"eager":"lazy",image:r.cover.childImageSharp.gatsbyImageData,alt:""}))}}}]);
//# sourceMappingURL=66b32394d72d6541d7619afa7e37fa582365d3ce-3bbbc3ac5b007dfc6326.js.map