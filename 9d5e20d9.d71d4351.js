(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),o=(n(0),n(196)),i=n(206),c={id:"valid",title:"Validate a pattern"},l={id:"valid",title:"Validate a pattern",description:"import {CodeTabs, Result} from './code';\r",source:"@site/..\\docs\\valid.mdx",permalink:"/docs/valid",lastUpdatedAt:1586367925,sidebar:"docs",previous:{title:"Quote regular expression",permalink:"/docs/quote"},next:{title:"Split a string",permalink:"/docs/split"}},u=[],p={rightToc:u};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This chapter doesn't contain ",Object(o.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE doesn't provide a way to validate patterns.")),Object(o.b)("p",null,"You can check whether a pattern is valid with ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," method."),Object(o.b)(i.a,{tregx:"pattern('I am a valid pattern')->valid();",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"true"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Remember, ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," doesn't throw any exception nor issues any warnings. It only returns ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"/",Object(o.b)("inlineCode",{parentName:"p"},"false"),".")),Object(o.b)(i.a,{tregx:"pattern('I am an (( invalid }} pattern')->valid();",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"false"),Object(o.b)("h1",{id:"old-school-patterns"},"Old-school patterns"),Object(o.b)("p",null,"Undelimited patterns can be validated with ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()"),"/",Object(o.b)("inlineCode",{parentName:"p"},"Pattern::of()"),". To validate old-school patterns (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"/Hello/i"),"), use ",Object(o.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),":"),Object(o.b)(i.a,{tregx:"Pattern::pcre('/I am an valid pattern/m')->valid();",mdxType:"CodeTabs"}),Object(o.b)(i.b,{mdxType:"Result"},"true"))}s.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(f,c({ref:t},u,{components:n})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},198:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(200);var i=function(){return Object(r.useContext)(o.a)},c=n(197),l=n.n(c),u=n(93),p=n.n(u);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:c,groupId:u}=e,{tabGroupChoices:d,setTabGroupChoices:f}=i(),[m,v]=Object(r.useState)(o);if(null!=u){const e=d[u];null!=e&&e!==m&&v(e)}const y=e=>{v(e),null!=u&&f(u,e)},g=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":m===e,className:l()("tab-item",p.a.tabItem,{"tab-item--active":m===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>y(e),onClick:()=>y(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===m)[0]))}},204:function(e,t,n){"use strict";var r=n(205),a={};a[n(11)("toStringTag")]="z",a+""!="[object z]"&&n(19)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},205:function(e,t,n){var r=n(53),a=n(11)("toStringTag"),o="Arguments"==r(function(){return arguments}());e.exports=function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=Object(e),a))?n:o?r(t):"Object"==(i=r(t))&&"function"==typeof t.callee?"Arguments":i}},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y}));n(12),n(52),n(204);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var o=n(5),i=n(0),c=n.n(i),l=n(199),u=n(198),p=n(208),s=n(94),b=n.n(s),d=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:b.a.code},c.a.createElement(p.a,{className:"language-"+this.language},this.code))},a(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(c.a.Component),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&c.a.createElement(u.a,{value:"t-regx"},c.a.createElement(d,null,this.props.tregx)),this.props.php&&c.a.createElement(u.a,{value:"php"},c.a.createElement(d,null,this.props.php))))},a(t,[{key:"values",get:function(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}}]),t}(c.a.Component),m=n(95),v=n.n(m),y=function(e){var t=e.text,n=e.children;return c.a.createElement("div",{className:v.a.result},c.a.createElement(d,{language:t?"text":"php"},n))}}}]);