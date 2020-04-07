(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),c=(n(0),n(196)),o=n(204),i={id:"count",title:"Count occurrences"},u={id:"count",title:"Count occurrences",description:"import {CodeTabs, Result, Code} from './code';",source:"@site/..\\docs\\count.mdx",permalink:"/docs/count",lastUpdatedAt:1586286305,sidebar:"docs",previous:{title:"Automatic delimiters",permalink:"/docs/delimiters"},next:{title:"T-Regx Utilities",permalink:"/docs/utils"}},l=[{value:"Unmatched subjects",id:"unmatched-subjects",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Performance",id:"performance",children:[]}],p={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Sometimes, you might stumble upon a situation where an amount of occurrences is needed, but not the occurrences\nthemselves. In that case, ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->count()")," is perfect:"),Object(c.b)(o.a,{tregx:"return pattern('[aeiouy]')->count('Computer');",php:"return preg::match_all('/[aeiouy]/', 'Computer');",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"3"),Object(c.b)("p",null,"Also, ",Object(c.b)("inlineCode",{parentName:"p"},"MatchPattern")," is ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.countable.php"}),Object(c.b)("inlineCode",{parentName:"a"},"\\Countable")),", so you can use PHP build-in methods, like ",Object(c.b)("inlineCode",{parentName:"p"},"count()"),":"),Object(c.b)(o.a,{tregx:"$match = pattern('[aeiouy]')->match('Computer');\n\ncount($match);",php:"preg::match_all('/[aeiouy]/', 'Computer', $match);\n\ncount($match[0]);",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"3"),Object(c.b)("h2",{id:"unmatched-subjects"},"Unmatched subjects"),Object(c.b)("p",null,"If your pattern does not match the subject, ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," simply returns ",Object(c.b)("inlineCode",{parentName:"p"},"0"),"."),Object(c.b)(o.a,{tregx:"return pattern('[0-9]')->count('Computer');",php:"return preg::match_all('/[0-9]/', 'Computer');",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"0"),Object(c.b)("h2",{id:"invalid"},"Invalid"),Object(c.b)("p",null,"Every use of ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()")," with an invalid pattern will cause ",Object(c.b)("inlineCode",{parentName:"p"},"MalformedPatternException"),"."),Object(c.b)(o.a,{tregx:"try {\n    pattern('[aeiouy')->count('Computer');       // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",php:"try {\n    preg::match_all('/[aeiouy/', 'Computer');    // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{text:!0,mdxType:"Result"},"Missing terminating ] for character class at offset 7"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"In ",Object(c.b)("inlineCode",{parentName:"p"},"PHP")," snippet, ",Object(c.b)("inlineCode",{parentName:"p"},"MalformedPatternException")," is thrown because safe-regex ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match_all()")," was used, instead\nof ",Object(c.b)("inlineCode",{parentName:"p"},"preg_match_all()"),". Vanilla PHP ",Object(c.b)("inlineCode",{parentName:"p"},"preg_*()")," method don't throw exceptions.")),Object(c.b)("h2",{id:"performance"},"Performance"),Object(c.b)("p",null,"You might be tempted to use ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," to check whether your subject was matched by the pattern, since ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," doesn't\nreturn any matches..."),Object(c.b)(o.a,{tregx:"$count = pattern('[aeiouy]')->count('Computer');\nreturn $count > 0;",php:"$count = preg::match_all('/[aeiouy]/', 'Computer'); {'\n'} return $count > 0;",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"true"),Object(c.b)("p",null,"...but that would be wasteful. You're much better off using\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(c.b)("inlineCode",{parentName:"a"},"test()")),"/",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(c.b)("inlineCode",{parentName:"a"},"fails()")),":"),Object(c.b)(o.a,{tregx:"return pattern('[aeiouy]')->test('Computer');",php:"return preg::match('/[aeiouy]/', 'Computer') > 0;",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"true"),Object(c.b)("p",null,"This is because ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," will go through each occurrence of a pattern in a subject, counting it; whereas ",Object(c.b)("inlineCode",{parentName:"p"},"test()"),"\nwill return right after it finds the first occurrence."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Under the hood, ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," uses ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match_all()"),", whereas ",Object(c.b)("inlineCode",{parentName:"p"},"test()"),"/",Object(c.b)("inlineCode",{parentName:"p"},"fails()"),"/ use ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match()"),".")))}s.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||c;return n?a.a.createElement(d,i({ref:t},l,{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},198:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}},199:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(200);var o=function(){return Object(r.useContext)(c.a)},i=n(197),u=n.n(i),l=n(93),p=n.n(l);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:i,groupId:l}=e,{tabGroupChoices:m,setTabGroupChoices:d}=o(),[h,f]=Object(r.useState)(c);if(null!=l){const e=m[l];null!=e&&e!==h&&f(e)}const O=e=>{f(e),null!=l&&d(l,e)},j=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:u()("tabs",{"tabs--block":t})},i.map(({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===e,className:u()("tab-item",p.a.tabItem,{"tab-item--active":h===e}),key:e,ref:e=>j.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(j,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter(e=>e.props.value===h)[0]))}},204:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return f}));n(12);var r=n(0),a=n.n(r),c=n(199),o=n(198);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=n(5),l=n(206),p=n(94),s=n.n(p),b=function(e){function t(){return e.apply(this,arguments)||this}var n,r,c;return Object(u.a)(t,e),t.prototype.render=function(){return a.a.createElement("div",{className:s.a.code},a.a.createElement(l.a,{className:"language-"+this.language},this.code))},n=t,(r=[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}])&&i(n.prototype,r),c&&i(n,c),t}(a.a.Component);class m extends a.a.Component{render(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{defaultValue:"t-regx",values:this.values},this.props.tregx&&a.a.createElement(o.a,{value:"t-regx"},a.a.createElement(b,null,this.props.tregx)),this.props.php&&a.a.createElement(o.a,{value:"php"},a.a.createElement(b,null,this.props.php))))}get values(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter(e=>e.value)}}var d=n(95),h=n.n(d),f=({text:e,children:t})=>a.a.createElement("div",{className:h.a.result},a.a.createElement(b,{language:e?"text":"php"},t))}}]);