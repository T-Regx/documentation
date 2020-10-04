(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{170:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var b=c.a.createContext({}),p=function(e){var t=c.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},s=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,u=d["".concat(l,".").concat(s)]||d[s]||m[s]||r;return a?c.a.createElement(u,i(i({ref:t},b),{},{components:a})):c.a.createElement(u,i({ref:t},b))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var b=2;b<r;b++)l[b]=a[b];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return p}));var n=a(2),c=a(6),r=(a(0),a(170)),l={id:"replace-match-details",title:"Advanced replace details"},i={unversionedId:"replace-match-details",id:"replace-match-details",isDocsHomePage:!1,title:"Advanced replace details",description:"Introduction",source:"@site/..\\docs\\replace-match-details.md",permalink:"/docs/replace-match-details",lastUpdatedAt:1601849194,sidebar:"docs",previous:{title:"Iterator",permalink:"/docs/match-iterator"},next:{title:"Prepared Patterns in details",permalink:"/docs/prepared-patterns-in-details"}},o=[{value:"Introduction",id:"introduction",children:[]},{value:"Examples",id:"examples",children:[{value:"<code>modifiedSubject()</code> example",id:"modifiedsubject-example",children:[]},{value:"<code>modifiedOffset()</code> example",id:"modifiedoffset-example",children:[]}]},{value:"Performance",id:"performance",children:[]}],b={rightToc:o};function p(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,"When using ",Object(r.b)("inlineCode",{parentName:"p"},"pattern()->match()")," all ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-for-each"}),"callbacks")," receive one parameter when\ncalled - ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match")),". You can learn more about it on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match")," details")," page."),Object(r.b)("p",null,"However, when using ",Object(r.b)("inlineCode",{parentName:"p"},"pattern()->replace()")," the callback receives ",Object(r.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," details object.\nIt extends ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," object, so they have exactly alike interfaces."),Object(r.b)("p",null,"Additionally, ",Object(r.b)("inlineCode",{parentName:"p"},"ReplaceMatch")," has two separate methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedSubject(): string")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ReplaceMatch.modifiedOffset(): int"))),Object(r.b)("p",null,"They work similarly to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-offsets"}),Object(r.b)("inlineCode",{parentName:"a"},"offset()"))," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#subject"}),Object(r.b)("inlineCode",{parentName:"a"},"subject()"))," methods,\nbut they take into account ",Object(r.b)("strong",{parentName:"p"},"results of previous callbacks"),". Basically, you can see into\nthe process of the new string being built."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"modifiedSubject()")," - current state of a subject being built."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"modifiedOffset()")," - occurrence's offset, but according to a current the ",Object(r.b)("inlineCode",{parentName:"li"},"modifiedSubject()"))),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("h3",{id:"modifiedsubject-example"},Object(r.b)("inlineCode",{parentName:"h3"},"modifiedSubject()")," example"),Object(r.b)("p",null,"Given a pattern, that matches capitalized words:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$subject = 'Me, Rihanna and my Mom really like Sweden';\n\n$result = pattern(\"[A-Z][a-z]+\")->replace($subject)->all()->callback(function ($match) {\n    // highlight-next-line\n    $match->subject(); // Me, Rihanna and my Mom really like Sweden\n\n    return '____';\n});\n")),Object(r.b)("p",null,"having iterated the subject looking for ",Object(r.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+")," - for each ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," the result of ",Object(r.b)("inlineCode",{parentName:"p"},"Match.subject()"),"\nmethod would always be the same. There are 4 occurrences matched by the pattern, so callback is invoked 4 times,\nand each time ",Object(r.b)("inlineCode",{parentName:"p"},"$match->subject()")," is equal to:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(r.b)("hr",null),Object(r.b)("p",null,"However, results of ",Object(r.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedSubject()")," would also contain results of ",Object(r.b)("strong",{parentName:"p"},"previous replacements"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n")),Object(r.b)("p",null,"And the ",Object(r.b)("inlineCode",{parentName:"p"},"$result")," would be equal to"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like ____\n")),Object(r.b)("h3",{id:"modifiedoffset-example"},Object(r.b)("inlineCode",{parentName:"h3"},"modifiedOffset()")," example"),Object(r.b)("p",null,"Have you iterated the subject looking for ",Object(r.b)("inlineCode",{parentName:"p"},"[A-Z][a-z]+"),", these would be the results of ",Object(r.b)("inlineCode",{parentName:"p"},"Match.offset()")," method."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\noffset() // 0\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n    \u2191\n    offset() // 4\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                   \u2191\n                   offset() // 19\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n                                   \u2191\n                                   offset() // 35\n")),Object(r.b)("hr",null),Object(r.b)("p",null,"But, if instead of ",Object(r.b)("inlineCode",{parentName:"p"},"ReplaceMatch.offset()")," you use ",Object(r.b)("inlineCode",{parentName:"p"},"ReplaceMatch.modifiedOffset()"),", these are the results:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Me, Rihanna and my Mom really like Sweden\n\u2191\nmodifiedOffset()  // 0\noffset()          // 0\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, Rihanna and my Mom really like Sweden\n      \u2191\n      modifiedOffset() // 6\n    \u2191\n    offset()           // 4\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my Mom really like Sweden\n                  \u2191\n                  modifiedOffset()  // 18\n                   \u2191\n                   offset()         // 19\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"____, ____ and my ____ really like Sweden\n                                   \u2191\n                                   modifiedOffset()  // 35\n                                   offset()          // 35\n")),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"But be sure, each of those examples only uses one call to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-replace-callback.php"}),Object(r.b)("inlineCode",{parentName:"a"},"preg_replace_callback()")),". :)"))}p.isMDXComponent=!0}}]);