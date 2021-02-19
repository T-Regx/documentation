(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),i=(n(0),n(198)),c=n(200),o={id:"delimiters",title:"Automatic delimiters"},l={unversionedId:"delimiters",id:"delimiters",isDocsHomePage:!1,title:"Automatic delimiters",description:"This chapter doesn't contain PHP code snippets, because PHP PCRE require delimiters. There is no way to omit them",source:"@site/../docs/delimiters.mdx",slug:"/delimiters",permalink:"/docs/delimiters",version:"current",lastUpdatedAt:1611005578,sidebar:"docs",previous:{title:"Composite Pattern",permalink:"/docs/composite-pattern"},next:{title:"Count occurrences",permalink:"/docs/count"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Delimited pattern",id:"delimited-pattern",children:[]},{value:"PCRE-style patterns",id:"pcre-style-patterns",children:[]},{value:"Flags",id:"flags",children:[]},{value:"I want to break it",id:"i-want-to-break-it",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"This chapter doesn't contain ",Object(i.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE require delimiters. There is no way to omit them\nin Vanilla PHP."))),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Thanks to automatic delimiters, one can use regular expressions without ",Object(i.b)("a",{parentName:"p",href:"/docs/overview#brain-strain"},"brain strain")," and without spending time,\nchoosing a suitable delimiter."),Object(i.b)(c.a,{tregx:"pattern('#[A-Z]/[a-z]+')->match($subject)->all();",php:"preg_match_all('%#[A-Z]/[a-z]+%', $subject);",mdxType:"CodeTabs"}),Object(i.b)("h2",{id:"delimited-pattern"},"Delimited pattern"),Object(i.b)("p",null,"Calling method ",Object(i.b)("inlineCode",{parentName:"p"},"delimited()")," on any instance of T-Regx ",Object(i.b)("inlineCode",{parentName:"p"},"PatternInterface")," returns\na pattern, as it will be used with ",Object(i.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/ref.pcre.php"},"PHP PCRE methods"),"."),Object(i.b)(c.a,{tregx:"echo pattern('Welcome/Or not')->delimited() . \"\\n\";\necho pattern('https://github.com#heading')->delimited() . \"\\n\";\necho pattern('https://github.com#heading?key=hello%20there')->delimited() . \"\\n\";",mdxType:"CodeTabs"}),Object(i.b)(c.b,{text:!0,mdxType:"Result"},"#Welcome/Or not#\n%https://github.com#heading%\n~https://github.com#heading?key=hello%20there~\n"),Object(i.b)("h2",{id:"pcre-style-patterns"},"PCRE-style patterns"),Object(i.b)("p",null,"If the was constructed with ",Object(i.b)("a",{parentName:"p",href:"/docs/introduction-safe#entry-points"},Object(i.b)("inlineCode",{parentName:"a"},"Pattern::pcre()")),", method ",Object(i.b)("inlineCode",{parentName:"p"},"delimited()")," returns the pattern unchanged."),Object(i.b)(c.a,{tregx:"Pattern::pcre('#Welcome/Or not#')->delimited();",mdxType:"CodeTabs"}),Object(i.b)(c.b,{text:!0,mdxType:"Result"},"#Welcome/Or not#"),Object(i.b)("h2",{id:"flags"},"Flags"),Object(i.b)("p",null,"There are two ways of using patterns with PCRE modifiers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Either pass a second argument to ",Object(i.b)("a",{parentName:"p",href:"/docs/introduction-safe#entry-points"},Object(i.b)("inlineCode",{parentName:"a"},"pattern()")),"/",Object(i.b)("a",{parentName:"p",href:"/docs/introduction-safe#entry-points"},Object(i.b)("inlineCode",{parentName:"a"},"Pattern::of()")),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-php"},"// global function\npattern('[A-Z][a-z]+', 'i')->match($subject)->first();\n\n// static method\nPattern::of('[A-Z][a-z]+', 'i')->match($subject)->first();\n\n// prepared patterns\nPattern::inject('[A-Z]@', [$_GET['name']], 'i')->match($subject)->first();\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"or use an old-school pattern:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-php"},"Pattern::pcre('/[A-Z][a-z]+/i')->match($subject)->first();\n")))),Object(i.b)("h2",{id:"i-want-to-break-it"},"I want to break it"),Object(i.b)("p",null,"T-Regx has a set of predefined, suitable delimiters (like ",Object(i.b)("inlineCode",{parentName:"p"},"/"),", ",Object(i.b)("inlineCode",{parentName:"p"},"#"),", ",Object(i.b)("inlineCode",{parentName:"p"},"~"),", ",Object(i.b)("inlineCode",{parentName:"p"},"%"),", etc.) and simply uses the first one, that\ndoesn't occur in your pattern. If you exhaust each of them; if you use every possible, predefined,\nsuitable delimiter - it will throw ",Object(i.b)("inlineCode",{parentName:"p"},"ExplicitDelimiterRequiredException"),"."),Object(i.b)("p",null,"In that case, you simply have to use an explicit delimiter with ",Object(i.b)("a",{parentName:"p",href:"/docs/introduction-safe#entry-points"},Object(i.b)("inlineCode",{parentName:"a"},"Pattern::pcre()")),"."),Object(i.b)("p",null,"If you think another automatic delimiter can be used, please create ",Object(i.b)("a",{parentName:"p",href:"https://github.com/T-Regx/T-Regx/issues/new/choose"},"a github issue"),"."))}u.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,o(o({ref:t},s),{},{components:n})):r.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a),i=n(204),c=n(199),o=n(55),l=n.n(o),s=37,p=39;var u=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),h=m.tabGroupChoices,f=m.setTabGroupChoices,O=Object(a.useState)(o),v=O[0],j=O[1],g=a.Children.toArray(e.children);if(null!=d){var y=h[d];null!=y&&y!==v&&u.some((function(e){return e.value===y}))&&j(y)}var w=function(e){j(e),null!=d&&f(d,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))};var d=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},b=n(205),m=n(56),h=n.n(m),f=function(e){var t=e.children,n=e.language;return r.a.createElement("div",{className:h.a.code},r.a.createElement(b.a,{className:"language-"+(n||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};var O=function(e){var t=e.tregx,n=e.php;return r.a.createElement(u,{defaultValue:"t-regx",values:v(t,n)},t&&r.a.createElement(d,{value:"t-regx"},r.a.createElement(f,null,t)),n&&r.a.createElement(d,{value:"php"},r.a.createElement(f,null,n)))};function v(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}var j=n(57),g=n.n(j),y=function(e){var t=e.text,n=e.children;return r.a.createElement("div",{className:g.a.result},r.a.createElement(f,{language:t?"text":"php"},n))}}}]);