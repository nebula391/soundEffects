/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-animation-audio-canvas-canvasblending-canvaswinding-customelements-customevent-emoji-fullscreen-svg-todataurljpeg_todataurlpng_todataurlwebp-unicode-video-webgl-setclasses !*/
!function(e,n,t){function a(e){var n=T.className,t=Modernizr._config.classPrefix||"";if(w&&(n=n.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(a,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),w?T.className.baseVal=n:T.className=n)}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):w?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function o(e,n){return typeof e===n}function i(){var e,n,t,a,r,i,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,r=0;r<e.length;r++)i=e[r],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),h.push((a?"":"no-")+s.join("-"))}}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(){var e=n.body;return e||(e=r(w?"svg":"body"),e.fake=!0),e}function c(e,t,a,o){var i,s,c,u,d="modernizr",f=r("div"),p=l();if(parseInt(a,10))for(;a--;)c=r("div"),c.id=o?o[a]:d+(a+1),f.appendChild(c);return i=r("style"),i.type="text/css",i.id="s"+d,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=T.style.overflow,T.style.overflow="hidden",T.appendChild(p)),s=t(f,e),p.fake?(p.parentNode.removeChild(p),T.style.overflow=u,T.offsetHeight):f.parentNode.removeChild(f),!!s}function u(e,n){return!!~(""+e).indexOf(n)}function d(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var a;for(var r in e)if(e[r]in n)return t===!1?e[r]:(a=n[e[r]],o(a,"function")?d(a,t||n):a);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(n,t,a){var r;if("getComputedStyle"in e){r=getComputedStyle.call(e,n,t);var o=e.console;if(null!==r)a&&(r=r.getPropertyValue(a));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else r=!t&&n.currentStyle&&n.currentStyle[a];return r}function m(n,a){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(n[r]),a))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];r--;)o.push("("+p(n[r])+":"+a+")");return o=o.join(" or "),c("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==v(e,null,"position")})}return t}function g(e,n,a,i){function l(){d&&(delete $.style,delete $.modElem)}if(i=o(i,"undefined")?!1:i,!o(a,"undefined")){var c=m(e,a);if(!o(c,"undefined"))return c}for(var d,f,p,v,g,y=["modernizr","tspan","samp"];!$.style&&y.length;)d=!0,$.modElem=r(y.shift()),$.style=$.modElem.style;for(p=e.length,f=0;p>f;f++)if(v=e[f],g=$.style[v],u(v,"-")&&(v=s(v)),$.style[v]!==t){if(i||o(a,"undefined"))return l(),"pfx"==n?v:!0;try{$.style[v]=a}catch(h){}if($.style[v]!=g)return l(),"pfx"==n?v:!0}return l(),!1}function y(e,n,t,a,r){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+_.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?g(s,n,a,r):(s=(e+" "+L.join(i+" ")+i).split(" "),f(s,n,t))}var h=[],C=[],x={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("customelements","customElements"in e),Modernizr.addTest("customevent","CustomEvent"in e&&"function"==typeof e.CustomEvent);var T=n.documentElement,w="svg"===T.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=r("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("canvas",function(){var e=r("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("video",function(){var e=r("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("webanimations","animate"in r("div")),Modernizr.addTest("webgl",function(){var n=r("canvas"),t="probablySupportsContext"in n?"probablySupportsContext":"supportsContext";return t in n?n[t]("webgl")||n[t]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("canvasblending",function(){if(Modernizr.canvas===!1)return!1;var e=r("canvas").getContext("2d");try{e.globalCompositeOperation="screen"}catch(n){}return"screen"===e.globalCompositeOperation});var b=r("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===b.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===b.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===b.toDataURL("image/webp").indexOf("data:image/webp")}catch(n){}return e}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof r("canvas").getContext("2d").fillText}),Modernizr.addTest("emoji",function(){if(!Modernizr.canvastext)return!1;var n=e.devicePixelRatio||1,t=12*n,a=r("canvas"),o=a.getContext("2d");return o.fillStyle="#f00",o.textBaseline="top",o.font="32px Arial",o.fillText("🐨",0,0),0!==o.getImageData(t,t,1,1).data[0]}),Modernizr.addTest("canvaswinding",function(){if(Modernizr.canvas===!1)return!1;var e=r("canvas").getContext("2d");return e.rect(0,0,10,10),e.rect(2,2,6,6),e.isPointInPath(5,5,"evenodd")===!1});var S=x.testStyles=c;Modernizr.addTest("unicode",function(){var e,n=r("span"),t=r("span");return S("#modernizr{font-family:Arial,sans;font-size:300em;}",function(a){n.innerHTML=w?"妇":"&#5987;",t.innerHTML=w?"☆":"&#9734;",a.appendChild(n),a.appendChild(t),e="offsetWidth"in n&&n.offsetWidth!==t.offsetWidth}),e});var P="Moz O ms Webkit",_=x._config.usePrefixes?P.split(" "):[];x._cssomPrefixes=_;var E=function(n){var a,r=prefixes.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),a=n.replace(/-/g,"_").toUpperCase()+"_RULE",a in o)return"@"+n;for(var i=0;r>i;i++){var s=prefixes[i],l=s.toUpperCase()+"_"+a;if(l in o)return"@-"+s.toLowerCase()+"-"+n}return!1};x.atRule=E;var L=x._config.usePrefixes?P.toLowerCase().split(" "):[];x._domPrefixes=L;var R={elem:r("modernizr")};Modernizr._q.push(function(){delete R.elem});var $={style:R.elem.style};Modernizr._q.unshift(function(){delete $.style}),x.testAllProps=y;var z=x.prefixed=function(e,n,t){return 0===e.indexOf("@")?E(e):(-1!=e.indexOf("-")&&(e=s(e)),n?y(e,n,t):y(e,"pfx"))};Modernizr.addTest("fullscreen",!(!z("exitFullscreen",n,!1)&&!z("cancelFullScreen",n,!1))),i(),a(h),delete x.addTest,delete x.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);