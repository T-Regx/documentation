(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(198)),i=n(200),o={id:"match-find-first",title:"Optional matches (Find first)"},l={unversionedId:"match-find-first",id:"match-find-first",isDocsHomePage:!1,title:"Optional matches (Find first)",description:"If you call [first()] on a subject that isn't matched by a pattern - SubjectNotMatchedException is",source:"@site/../docs/match-find-first.mdx",slug:"/match-find-first",permalink:"/docs/match-find-first",version:"current",lastUpdatedAt:1611615683,sidebar:"docs",previous:{title:"First occurrence",permalink:"/docs/match-first"},next:{title:"Iterate matches (For each)",permalink:"/docs/match-for-each"}},s=[{value:"Optional matches with <code>findFirst()</code>",id:"optional-matches-with-findfirst",children:[{value:"<code>orReturn()</code>",id:"orreturn",children:[]},{value:"<code>orElse()</code>",id:"orelse",children:[]},{value:"<code>orThrow()</code>",id:"orthrow",children:[]},{value:"Custom exceptions for <code>orThrow()</code>",id:"custom-exceptions-for-orthrow",children:[]}]},{value:"I don&#39;t like functional",id:"i-dont-like-functional",children:[]}],u={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"If you call ",Object(c.b)("a",{parentName:"p",href:"/docs/match-first"},Object(c.b)("inlineCode",{parentName:"a"},"first()"))," on a subject that isn't matched by a pattern - ",Object(c.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," is\nthrown. We discussed that in the previous chapter."),Object(c.b)("p",null,"But what if you ",Object(c.b)("strong",{parentName:"p"},"expected")," the subject not to be matched? And how do you to react to it? "),Object(c.b)("h2",{id:"optional-matches-with-findfirst"},"Optional matches with ",Object(c.b)("inlineCode",{parentName:"h2"},"findFirst()")),Object(c.b)("p",null,"Method ",Object(c.b)("inlineCode",{parentName:"p"},"findFirst()")," can be called with a callback (that accepts ",Object(c.b)("a",{parentName:"p",href:"/docs/match-details"},Object(c.b)("inlineCode",{parentName:"a"},"Detail")),") just like ",Object(c.b)("a",{parentName:"p",href:"/docs/match-first"},Object(c.b)("inlineCode",{parentName:"a"},"first()")),".\nThe difference is: ",Object(c.b)("inlineCode",{parentName:"p"},"findFirst()")," never throws ",Object(c.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException"),", and allows you to control an unmatched subject by\nappropriate control methods: ",Object(c.b)("inlineCode",{parentName:"p"},"orThrow()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"orReturn()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"orElse()"),"."),Object(c.b)("p",null,"For example:"),Object(c.b)(i.a,{tregx:"return pattern('[0-9]+')->match(\"I'm 19 years old\")\n   ->findFirst(function (Detail $match) {\n       // highlight-next-line\n       return \"I was born $match years ago\";\n   })\n   ->orReturn('Unmatched :/');",php:"if (preg::match('/[0-9]+/', \"I'm 19 years old\", $match)) {\n    $text = $match[0];\n    // highlight-next-line\n    return \"I was born $text years ago\";\n}\nreturn 'Unmatched :/';",mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"'I was born 19 years ago'"),Object(c.b)("p",null,"If a match is found, then the result of ",Object(c.b)("inlineCode",{parentName:"p"},"findFirst()")," callback is returned. If a match is not found, however, then the\nhandling of an unmatched subject relies in the chained method."),Object(c.b)("h3",{id:"orreturn"},Object(c.b)("inlineCode",{parentName:"h3"},"orReturn()")),Object(c.b)("p",null,"If a match is not found, it returns a default value."),Object(c.b)(i.a,{tregx:'return pattern(\'[0-9]+\')->match("I\'m a dog")\n    ->findFirst(function (Detail $match) {\n       return "I was born $match years ago";\n    })\n    // highlight-next-line\n    ->orReturn("Match is not found");',php:'if (preg::match(\'/[0-9]+/\', "I\'m a dog", $match)) {\n    $text = $match[0];\n    return "I was born $text years ago";\n}\n// highlight-next-line\nreturn "Match is not found";',mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"'Match is not found'"),Object(c.b)("h3",{id:"orelse"},Object(c.b)("inlineCode",{parentName:"h3"},"orElse()")),Object(c.b)("p",null,"If a match is not found, it calls ",Object(c.b)("inlineCode",{parentName:"p"},"orElse()")," callback and uses ",Object(c.b)("em",{parentName:"p"},"it")," to evaluate a return value."),Object(c.b)(i.a,{tregx:'return pattern(\'[0-9]+\')->match("I\'m a dog")\n    ->findFirst(function (Detail $match) {\n       return "I was born $match years ago";\n    })\n    ->orElse(function (NotMatched $notMatched) { \n        // highlight-next-line\n        return "I couldn\'t match subject: " . $notMatched->subject();\n    });',php:'$subject = "I\'m a dog";\nif (preg::match(\'/[0-9]+/\', $subject, $match)) {\n    $text = $match[0];\n    return "I was born $text years ago";\n}\n// highlight-next-line\nreturn "I couldn\'t match subject: $subject";',mdxType:"CodeTabs"}),Object(c.b)(i.b,{mdxType:"Result"},"\"I couldn't match subject: I'm a dog\""),Object(c.b)("p",null,"Callback of ",Object(c.b)("inlineCode",{parentName:"p"},"orElse()")," is called with ",Object(c.b)("inlineCode",{parentName:"p"},"NotMatched"),", which contains only a handful of methods\npresent in ",Object(c.b)("a",{parentName:"p",href:"/docs/match-details"},Object(c.b)("inlineCode",{parentName:"a"},"Detail")),": ",Object(c.b)("inlineCode",{parentName:"p"},"subject()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"groupNames()"),", ",Object(c.b)("inlineCode",{parentName:"p"},"groupsCount()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"hasGroup($nameOrIndex)"),"."),Object(c.b)("h3",{id:"orthrow"},Object(c.b)("inlineCode",{parentName:"h3"},"orThrow()")),Object(c.b)("p",null,"If a match is not found, it throws ",Object(c.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," by default."),Object(c.b)(i.a,{tregx:'try {\n    return pattern(\'[0-9]+\')->match("I\'m a dog")\n        ->findFirst(function (Detail $detail) {\n            return "Match is found!";\n        })\n        // highlight-next-line\n        ->orThrow();\n}\ncatch (SubjectNotMatchedException $e) {\n    // React to an unmatched subject\n    echo "Not matched: " . $e->getMessage();\n}',php:'try {\n    if (preg::match(\'/[0-9]+/\', "I\'m a dog")) {\n        return "Match is found!";\n    }\n    // highlight-next-line\n    throw new SubjectNotMatchedException(\n        // highlight-next-line\n        \'Expected to get the first match, but subject was not matched\',\n        // highlight-next-line\n        "I\'m a dog");\n}\ncatch (SubjectNotMatchedException $e) {\n    // React to an unmatched subject\n    echo "Not matched: " . $e->getMessage();\n}',mdxType:"CodeTabs"}),Object(c.b)("h3",{id:"custom-exceptions-for-orthrow"},"Custom exceptions for ",Object(c.b)("inlineCode",{parentName:"h3"},"orThrow()")),Object(c.b)("p",null,"You can also supply your own exception class name."),Object(c.b)(i.a,{tregx:'class MyException extends \\Exception {}\n\ntry {\n    return pattern(\'[0-9]+\')->match("I\'m a dog")\n        ->findFirst(function (Detail $detail) {\n            return "Match is found!";\n        })\n        // highlight-next-line\n        ->orThrow(MyException::class);\n}\ncatch (MyException $e) {\n    // React to an unmatched subject\n    echo "Not matched: " . $e->getMessage();\n}',php:'class MyException extends \\Exception {}\n\ntry {\n    if (preg::match(\'/[0-9]+/\', "I\'m a dog")) {\n        return "Match is found!";\n    } \n    // highlight-next-line\n    throw new MyException(\'Expected to get the first match, but subject was not matched\');\n}\ncatch (MyException $e) {\n    // React to an unmatched subject\n    echo "Not matched: " . $e->getMessage();\n}',mdxType:"CodeTabs"}),Object(c.b)("p",null,"Of course, your custom exception must meet certain requirements:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"It has to be a class")),Object(c.b)("p",{parentName:"li"},'Trying to instantiate interfaces or abstract classes would break our "Explicity rule"\nThe class must be concrete and explicit.')),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"It has to implement ",Object(c.b)("inlineCode",{parentName:"strong"},"\\Throwable"))),Object(c.b)("p",{parentName:"li"},"Obviously.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"It must have a suitable constructor")),Object(c.b)("p",{parentName:"li"},"The class must be instantiable with one of the following signatures and parameter types."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"__construct()")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"__construct($message)"),", where ",Object(c.b)("inlineCode",{parentName:"li"},"$message")," can be a string"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"__construct($message, $subject)"),", where ",Object(c.b)("inlineCode",{parentName:"li"},"$message")," and ",Object(c.b)("inlineCode",{parentName:"li"},"$subject")," can be strings")))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notice!")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Using ",Object(c.b)("inlineCode",{parentName:"p"},"findFirst()->orThrow()")," without your custom exception is ",Object(c.b)("strong",{parentName:"p"},"identical")," to ",Object(c.b)("inlineCode",{parentName:"p"},"first()"),"."))),Object(c.b)("h2",{id:"i-dont-like-functional"},"I don't like functional"),Object(c.b)("p",null,"If you don't like functional programming style, you are free to use ",Object(c.b)("a",{parentName:"p",href:"/docs/match-first"},Object(c.b)("inlineCode",{parentName:"a"},"first()")),"\n(which throws an exception) and just catch it."),Object(c.b)(i.a,{tregx:'try {\n    // highlight-next-line\n    return pattern(\'[0-9]+\')->match("I\'m a dog")->first();\n}\ncatch (SubjectNotMatchedException $e) {\n    return "Some other value";\n}',php:"try {\n    if (preg::match('/[0-9]+/', \"I'm a dog\", $match)) {\n        return $match[0];\n    }\n    // highlight-next-line\n    throw new SubjectNotMatchedException();\n}\ncatch (SubjectNotMatchedException $e) {\n    return 'Some other value';\n}",mdxType:"CodeTabs"}))}b.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,h=b["".concat(i,".").concat(p)]||b[p]||d[p]||c;return n?r.a.createElement(h,o(o({ref:t},s),{},{components:n})):r.a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},200:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a),c=n(204),i=n(199),o=n(55),l=n.n(o),s=37,u=39;var b=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,b=e.values,d=e.groupId,p=e.className,h=Object(c.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,j=Object(a.useState)(o),O=j[0],g=j[1],N=a.Children.toArray(e.children);if(null!=d){var y=m[d];null!=y&&y!==O&&b.some((function(e){return e.value===y}))&&g(y)}var x=function(e){g(e),null!=d&&f(d,e)},v=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(a.cloneElement)(N.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))};var d=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},p=n(205),h=n(56),m=n.n(h),f=function(e){var t=e.children,n=e.language;return r.a.createElement("div",{className:m.a.code},r.a.createElement(p.a,{className:"language-"+(n||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};var j=function(e){var t=e.tregx,n=e.php;return r.a.createElement(b,{defaultValue:"t-regx",values:O(t,n)},t&&r.a.createElement(d,{value:"t-regx"},r.a.createElement(f,null,t)),n&&r.a.createElement(d,{value:"php"},r.a.createElement(f,null,n)))};function O(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}var g=n(57),N=n.n(g),y=function(e){var t=e.text,n=e.children;return r.a.createElement("div",{className:N.a.result},r.a.createElement(f,{language:t?"text":"php"},n))}}}]);