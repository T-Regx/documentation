(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),c=(n(0),n(198)),o=n(200),i={id:"count",title:"Count occurrences"},u={unversionedId:"count",id:"count",isDocsHomePage:!1,title:"Count occurrences",description:"Sometimes, you might stumble upon a situation where an amount of occurrences is needed, but not the occurrences",source:"@site/../docs/count.mdx",slug:"/count",permalink:"/docs/count",version:"current",lastUpdatedAt:1611005578,sidebar:"docs",previous:{title:"Automatic delimiters",permalink:"/docs/delimiters"},next:{title:"T-Regx Utilities",permalink:"/docs/utils"}},p=[{value:"Unmatched subjects",id:"unmatched-subjects",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Performance",id:"performance",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Sometimes, you might stumble upon a situation where an amount of occurrences is needed, but not the occurrences\nthemselves. In that case, ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->count()")," is perfect:"),Object(c.b)(o.a,{tregx:"return pattern('[aeiouy]')->count('Computer');",php:"return preg::match_all('/[aeiouy]/', 'Computer');",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"3"),Object(c.b)("p",null,"Also, ",Object(c.b)("inlineCode",{parentName:"p"},"MatchPattern")," is ",Object(c.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.countable.php"},Object(c.b)("inlineCode",{parentName:"a"},"\\Countable")),", so you can use PHP build-in methods, like ",Object(c.b)("inlineCode",{parentName:"p"},"count()"),":"),Object(c.b)(o.a,{tregx:"$match = pattern('[aeiouy]')->match('Computer');\n\ncount($match);",php:"preg::match_all('/[aeiouy]/', 'Computer', $match);\n\ncount($match[0]);",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"3"),Object(c.b)("h2",{id:"unmatched-subjects"},"Unmatched subjects"),Object(c.b)("p",null,"If your pattern does not match the subject, ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," simply returns ",Object(c.b)("inlineCode",{parentName:"p"},"0"),"."),Object(c.b)(o.a,{tregx:"return pattern('[0-9]')->count('Computer');",php:"return preg::match_all('/[0-9]/', 'Computer');",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"0"),Object(c.b)("h2",{id:"invalid"},"Invalid"),Object(c.b)("p",null,"Every use of ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()")," with an invalid pattern will cause ",Object(c.b)("inlineCode",{parentName:"p"},"MalformedPatternException"),"."),Object(c.b)(o.a,{tregx:"try {\n    pattern('[aeiouy')->count('Computer');  // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",php:"try {\n    preg::match_all('/[aeiouy/', 'Computer');  // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{text:!0,mdxType:"Result"},"Missing terminating ] for character class at offset 7"),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"In ",Object(c.b)("inlineCode",{parentName:"p"},"PHP")," snippet, ",Object(c.b)("inlineCode",{parentName:"p"},"MalformedPatternException")," is thrown because SafeRegex ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match_all()")," was used, instead\nof ",Object(c.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.preg-match-all.php"},Object(c.b)("inlineCode",{parentName:"a"},"preg_match_all()")),". Vanilla ",Object(c.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/ref.pcre.php"},"PHP ",Object(c.b)("inlineCode",{parentName:"a"},"preg")," methods")," don't throw exceptions."))),Object(c.b)("h2",{id:"performance"},"Performance"),Object(c.b)("p",null,"You might be tempted to use ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," to check whether your subject was matched by the pattern, since ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," doesn't\nreturn any matches..."),Object(c.b)(o.a,{tregx:"$count = pattern('[aeiouy]')->count('Computer');\nreturn $count > 0;",php:"$count = preg::match_all('/[aeiouy]/', 'Computer');\nreturn $count > 0;",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"true"),Object(c.b)("p",null,"...but that would be wasteful. You're much better off using\n",Object(c.b)("a",{parentName:"p",href:"/docs/match#test-a-subject"},Object(c.b)("inlineCode",{parentName:"a"},"test()")),"/",Object(c.b)("a",{parentName:"p",href:"/docs/match#test-a-subject"},Object(c.b)("inlineCode",{parentName:"a"},"fails()")),":"),Object(c.b)(o.a,{tregx:"return pattern('[aeiouy]')->test('Computer');",php:"return preg::match('/[aeiouy]/', 'Computer') > 0;",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"true"),Object(c.b)("p",null,"This is because ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," will go through each occurrence of a pattern in a subject, counting it; whereas ",Object(c.b)("inlineCode",{parentName:"p"},"test()"),"\nwill return right after it finds the first occurrence."),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Under the hood, ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," uses ",Object(c.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.preg-match-all.php"},Object(c.b)("inlineCode",{parentName:"a"},"preg_match_all()")),", whereas ",Object(c.b)("a",{parentName:"p",href:"/docs/match#test-a-subject"},Object(c.b)("inlineCode",{parentName:"a"},"test()")),"/",Object(c.b)("a",{parentName:"p",href:"/docs/match#test-a-subject"},Object(c.b)("inlineCode",{parentName:"a"},"fails()"))," use ",Object(c.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.preg-match.php"},Object(c.b)("inlineCode",{parentName:"a"},"preg_match()")),"."))))}s.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||c;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a),c=n(204),o=n(199),i=n(55),u=n.n(i),p=37,l=39;var s=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,s=e.values,b=e.groupId,m=e.className,d=Object(c.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(a.useState)(i),j=O[0],v=O[1],g=a.Children.toArray(e.children);if(null!=b){var y=h[b];null!=y&&y!==j&&s.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=b&&f(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},s.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",u.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))};var b=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},m=n(205),d=n(56),h=n.n(d),f=function(e){var t=e.children,n=e.language;return r.a.createElement("div",{className:h.a.code},r.a.createElement(m.a,{className:"language-"+(n||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};var O=function(e){var t=e.tregx,n=e.php;return r.a.createElement(s,{defaultValue:"t-regx",values:j(t,n)},t&&r.a.createElement(b,{value:"t-regx"},r.a.createElement(f,null,t)),n&&r.a.createElement(b,{value:"php"},r.a.createElement(f,null,n)))};function j(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}var v=n(57),g=n.n(v),y=function(e){var t=e.text,n=e.children;return r.a.createElement("div",{className:g.a.result},r.a.createElement(f,{language:t?"text":"php"},n))}}}]);