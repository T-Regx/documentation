/*! For license information please see 7e32b34a.c36f31d5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return b}));var r=a(1),n=a(6),o=(a(0),a(196)),c=a(199),i=a(198),l={id:"match-iterator",title:"Iterator"},p={id:"match-iterator",title:"Iterator",description:"T-Regx uses vanilla PHP [`\\Iterator`] with standard methods:\r",source:"@site/..\\docs\\match-iterator.md",permalink:"/docs/match-iterator",lastUpdatedAt:1582207446,sidebar:"docs",previous:{title:"Map with keys (Flat map)",permalink:"/docs/match-flat-map"},next:{title:"Match details",permalink:"/docs/match-details"}},u=[],s={rightToc:u};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"T-Regx uses vanilla PHP ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator"))," with standard methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"current()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key(): scalar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"next(): void")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rewind(): void")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"valid(): bool"))),Object(o.b)("h1",{id:"iterator-to-array"},"Iterator to array"),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"match()->iterator()")," returns an implementation of PHP ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator"))," which you can be used with other ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator")),"\nmethods or your own code, for example PHP methods ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.iterator-to-array.php)"}),Object(o.b)("inlineCode",{parentName:"a"},"iterator_to_array()"))," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"(https://www.php.net/manual/en/function.iterator-count.php)"}),Object(o.b)("inlineCode",{parentName:"a"},"iterator_count()")),"."),Object(o.b)(c.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"T-Regx",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$iterator = pattern('\\w+')->match('Apples are cool')->iterator();\n\nreturn iterator_to_array($iterator);\n"))),Object(o.b)(i.a,{value:"PHP",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"preg::match_all('/\\w+/', 'Apples are cool', $matches);\n$iterator = new ArrayIterator($matches[0]);\n\nreturn iterator_to_array($iterator);\n")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"['Apples', 'are', 'cool']\n")),Object(o.b)("p",null,"It is useful with methods that only accept ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator")),", and an explicit iterator implementation is needed. Using ",Object(o.b)("inlineCode",{parentName:"p"},"match()->iterator()"),"\nfor methods that accept ",Object(o.b)("inlineCode",{parentName:"p"},"array")," as well is redundant :)"))}b.isMDXComponent=!0},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),m=r,d=s["".concat(c,".").concat(m)]||s[m]||b[m]||o;return a?n.a.createElement(d,i({ref:t},p,{components:a})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},197:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=n.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},198:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",null,e.children)}},199:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(200);var c=function(){return Object(r.useContext)(o.a)},i=a(197),l=a.n(i),p=a(93),u=a.n(p);const s=37,b=39;t.a=function(e){const{block:t,children:a,defaultValue:o,values:i,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:d}=c(),[f,h]=Object(r.useState)(o);if(null!=p){const e=m[p];null!=e&&e!==f&&h(e)}const O=e=>{h(e),null!=p&&d(p,e)},j=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":f===e,className:l()("tab-item",u.a.tabItem,{"tab-item--active":f===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case b:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter(e=>e.props.value===f)[0]))}},200:function(e,t,a){"use strict";var r=a(0);const n=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=n}}]);