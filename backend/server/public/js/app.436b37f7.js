(function(e){function t(t){for(var n,o,u=t[0],i=t[1],l=t[2],s=0,d=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({Footer:"Footer",Header:"Header"}[e]||e)+"."+{Footer:"46d11673",Header:"cdcab360"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={Footer:1,Header:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({Footer:"Footer",Header:"Header"}[e]||e)+"."+{Footer:"7ba1d67e",Header:"a4090108"}[e]+".css",a=i.p+n,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],s=l.getAttribute("data-href");if(s===n||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete o[e],f.parentNode.removeChild(f),r(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var n=a[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var d=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}a[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=s;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"04ab":function(e,t,r){"use strict";r("c3dc")},"48d4":function(e,t,r){"use strict";r("5ba2")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"weekly-vue"},a={class:"subcontent"},c={class:"sub-news"},u=Object(n["e"])("h2",null,"Subscribe.",-1),i=Object(n["e"])("h3",null,"to this newsletter",-1),l=Object(n["e"])("p",null,[Object(n["d"])(" You will receive weekly curated"),Object(n["e"])("br"),Object(n["d"])(" dose of Vue.js jobs ( Junior - Senior ) "),Object(n["e"])("br"),Object(n["d"])(" and Vue.js articles delivered to your mailbox. ")],-1);function s(e,t,r,s,d,f){var p=Object(n["u"])("Header"),b=Object(n["u"])("Footer");return Object(n["o"])(),Object(n["c"])("div",o,[Object(n["e"])(p),Object(n["e"])("div",a,[Object(n["e"])("div",c,[u,i,l,Object(n["e"])("form",{onSubmit:t[2]||(t[2]=Object(n["A"])((function(){return s.emailSub&&s.emailSub.apply(s,arguments)}),["prevent"]))},[Object(n["z"])(Object(n["e"])("input",{type:"email",placeholder:"E-mail address here","onUpdate:modelValue":t[1]||(t[1]=function(e){return s.email=e}),required:""},null,512),[[n["x"],s.email]])],32)])]),Object(n["e"])(b)])}r("d3b7"),r("96cf");var d=r("1da1"),f=r("d4ec"),p=r("bee2"),b=r("bc3a"),v=r.n(b),m="/subscribe",h=function(){function e(){Object(f["a"])(this,e)}return Object(p["a"])(e,null,[{key:"postEmail",value:function(e){return v.a.post(m,{text:e})}}]),e}(),j=h,O=Object(n["f"])((function(){return r.e("Header").then(r.bind(null,"0418"))})),y=Object(n["f"])((function(){return r.e("Footer").then(r.bind(null,"fd2d"))})),g={name:"App",components:{Header:O,Footer:y},setup:function(){var e=Object(n["t"])("");function t(){return r.apply(this,arguments)}function r(){return r=Object(d["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,j.postEmail(e.value);case 2:console.log(e.value),e.value="";case 4:case"end":return t.stop()}}),t)}))),r.apply(this,arguments)}return{email:e,emailSub:t}}};r("04ab");g.render=s;var w=g,S=r("6c02"),k={class:"contact"};function x(e,t,r,o,a,c){return Object(n["o"])(),Object(n["c"])("div",k,"Contact Weekly Vue")}var E={name:"Contact"};E.render=x;var F=E,H=Object(n["B"])("data-v-5e300e94");Object(n["r"])("data-v-5e300e94");var _={class:"notfound"},C=Object(n["e"])("h1",null,"404",-1),P=Object(n["e"])("p",null,"Oops! Something went wrong.",-1);Object(n["p"])();var A=H((function(e,t,r,o,a,c){return Object(n["o"])(),Object(n["c"])("div",_,[C,P])})),N={name:"Notfound"};r("48d4");N.render=A,N.__scopeId="data-v-5e300e94";var T=N,L=[{path:"/contact",name:"Contact",component:F},{path:"/:catchAll(.*)",name:"Notfound",component:T}],B=Object(S["a"])({history:Object(S["b"])(),routes:L}),M=B;Object(n["b"])(w).use(M).mount("#app")},"5ba2":function(e,t,r){},c3dc:function(e,t,r){}});
//# sourceMappingURL=app.436b37f7.js.map