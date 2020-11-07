(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(173)),o={title:"Match details update",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},c={permalink:"/blog/2019/01/31/match-details-update",source:"@site/blog/2019-01-31-match-details-update.md",description:"Most changes in T-Regx since the last Blog post were to Match details. We",date:"2019-01-31T00:00:00.000Z",tags:[],title:"Match details update",readingTime:.64,truncated:!1,prevItem:{title:"The best Stargazers!",permalink:"/blog/2019/06/05/stargazers"},nextItem:{title:"Santa Clause Day Update",permalink:"/blog/2018/12/06/santa-clause-update"}},p=[],l={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Most changes in T-Regx since the last Blog post were to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(i.b)("inlineCode",{parentName:"a"},"Match")," details"),". We\nadded ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details#user-data"}),"user data")," (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details#user-data"}),Object(i.b)("inlineCode",{parentName:"a"},"getUserData()"),"/",Object(i.b)("inlineCode",{parentName:"a"},"setUserData()")),")\nwhich can be used in chained calls (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"filter()->map()"),")."),Object(i.b)("p",null,"The second change is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details#integers"}),Object(i.b)("inlineCode",{parentName:"a"},"isInt()"),"/",Object(i.b)("inlineCode",{parentName:"a"},"parseInt()")),' which allow you to handle "real" integers safetly -\nwithout the fear of "PHP smart" integers (e.g. PHP thinks that ',Object(i.b)("inlineCode",{parentName:"p"},'"1e3"')," is ",Object(i.b)("inlineCode",{parentName:"p"},"1000"),"). T-Regx understands that robust applications\ncan't allow numbers to be ",Object(i.b)("inlineCode",{parentName:"p"},"10e4")," - it should be treated as an invalid integer by default!"),Object(i.b)("p",null,"And last, ",Object(i.b)("inlineCode",{parentName:"p"},"Match.group(int|string)")," is now validated (T-Regx was waiting a bit for this change!). We believe that using an\ninvalid group name is a sign of a bug, so using ",Object(i.b)("inlineCode",{parentName:"p"},"group(-1)")," or ",Object(i.b)("inlineCode",{parentName:"p"},"group('!@#')")," now throws ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.invalidargumentexception.php"}),Object(i.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException")),",\nas it's more suitable than assuming that ",Object(i.b)("inlineCode",{parentName:"p"},"-1")," is just an unmatched group."))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);