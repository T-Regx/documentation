(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(6),i=(n(0),n(196)),o=n(204),c={id:"delimiters",title:"Automatic delimiters"},l={id:"delimiters",title:"Automatic delimiters",description:"import {CodeTabs, Result} from './code';\r",source:"@site/..\\docs\\delimiters.mdx",permalink:"/docs/delimiters",lastUpdatedAt:1586300962,sidebar:"docs",previous:{title:"Composite Pattern",permalink:"/docs/composite-pattern"},next:{title:"Count occurrences",permalink:"/docs/count"}},s=[{value:"Flags",id:"flags",children:[]},{value:"I want to break it",id:"i-want-to-break-it",children:[]}],p={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This chapter doesn't contain ",Object(i.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE require delimiters. There is no way to omit them\nin Vanilla PHP.")),Object(i.b)("p",null,"Thanks to automatic delimiters, one can use regular expressions without ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"overview.md#brain-strain"}),"brain strain")," and without spending time,\nchoosing a suitable delimiter."),Object(i.b)(o.a,{tregx:"pattern('#[A-Z]/[a-z]+')->match($subject)->first();",php:"preg_match('%#[A-Z]/[a-z]+%', $subject)",mdxType:"CodeTabs"}),Object(i.b)("p",null,"We can see it for ourselves, using ",Object(i.b)("inlineCode",{parentName:"p"},"delimiter")," method:"),Object(i.b)(o.a,{tregx:"echo pattern('Welcome/Or not')->delimiter() . \"\\n\";\necho pattern('https://github.com#heading')->delimiter() . \"\\n\";\necho pattern('https://github.com#heading?key=hello%20there')->delimiter() . \"\\n\";",mdxType:"CodeTabs"}),Object(i.b)(o.b,{text:!0,mdxType:"Result"},"#Welcome/Or not#\n%https://github.com#heading%\n~https://github.com#heading?key=hello%20there~"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If the was constructed with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::pcre()")),", ",Object(i.b)("inlineCode",{parentName:"p"},"delimiter()")," returns the pattern unchanged.")),Object(i.b)("h2",{id:"flags"},"Flags"),Object(i.b)("p",null,"There are two ways of passing flags:"),Object(i.b)("p",null,"Either pass a second argument to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(i.b)("inlineCode",{parentName:"a"},"pattern()")),"/",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::of()")),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"// global function\npattern('[A-Z][a-z]+', 'i')->match($subject)->first();\n\n// static method\nPattern::of('[A-Z][a-z]+', 'i')->match($subject)->first();\n")),Object(i.b)("p",null,"or use an old-school pattern:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"Pattern::pcre('/[A-Z][a-z]+/i')->match($subject)->first();\n")),Object(i.b)("h2",{id:"i-want-to-break-it"},"I want to break it"),Object(i.b)("p",null,"T-Regx has a set of predefined, suitable delimiters (like ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", ",Object(i.b)("inlineCode",{parentName:"p"},"#"),", ",Object(i.b)("inlineCode",{parentName:"p"},"~"),", ",Object(i.b)("inlineCode",{parentName:"p"},"%"),", etc.) and simply uses the first one, that\ndoesn't occur in your pattern. If you exhaust each of them; if you use every possible, predefined,\nsuitable delimiter - it will throw ",Object(i.b)("inlineCode",{parentName:"p"},"ExplicitDelimiterRequiredException"),"."),Object(i.b)("p",null,"In that case, you simply have to use an explicit delimiter with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/introduction#entry-points"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::pcre()")),"."),Object(i.b)("p",null,"If you think another automatic delimiter can be used, please create ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/issues/new/choose"}),"a github issue"),"."))}u.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},198:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(200);var o=function(){return Object(r.useContext)(i.a)},c=n(197),l=n.n(c),s=n(93),p=n.n(s);const u=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:i,values:c,groupId:s}=e,{tabGroupChoices:d,setTabGroupChoices:m}=o(),[h,f]=Object(r.useState)(i);if(null!=s){const e=d[s];null!=e&&e!==h&&f(e)}const O=e=>{f(e),null!=s&&m(s,e)},g=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},c.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:l()("tab-item",p.a.tabItem,{"tab-item--active":h===e}),key:e,ref:e=>g.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(g,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));n(12);var r=n(0),a=n.n(r),i=n(199),o=n(198);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=n(5),s=n(206),p=n(94),u=n.n(p),b=function(e){function t(){return e.apply(this,arguments)||this}var n,r,i;return Object(l.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:u.a.code},a.a.createElement(s.a,{className:"language-"+this.language},this.code))},n=t,(r=[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}])&&c(n.prototype,r),i&&c(n,i),t}(a.a.Component);class d extends a.a.Component{render(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&a.a.createElement(o.a,{value:"t-regx"},a.a.createElement(b,null,this.props.tregx)),this.props.php&&a.a.createElement(o.a,{value:"php"},a.a.createElement(b,null,this.props.php))))}get values(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter(e=>e.value)}}var m=n(95),h=n.n(m),f=({text:e,children:t})=>a.a.createElement("div",{className:h.a.result},a.a.createElement(b,{language:e?"text":"php"},t))}}]);