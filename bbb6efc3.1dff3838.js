(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(198)),i={title:"Don't forget about T-Regx",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},c={permalink:"/blog/2019/10/15/dont-forget-about-t-regx",source:"@site/blog/2019-10-15-dont-forget-about-t-regx.md",description:"Some of you might have noticed that not many new features have been added to 0.9.2 release candidate, since few weeks.",date:"2019-10-15T00:00:00.000Z",tags:[],title:"Don't forget about T-Regx",readingTime:1.355,truncated:!1,prevItem:{title:"Release 0.9.2 - You're in for a treat!",permalink:"/blog/2020/02/18/release-0.9.2"},nextItem:{title:"The best Stargazers' Revolutions",permalink:"/blog/2019/08/31/super-duper-stargazers"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Some of you might have noticed that not many new features have been added to 0.9.2 release candidate, since few weeks.\nBut rest assured! :D Work on T-Regx hasn't slowed a bit! We've just put more effort on a more side-part of T-Regx."),Object(o.b)("p",null,"Thanks to the keen eye of T-Regx user, Andreas Leathley, it stroke us that phpDoc in public methods\nof ",Object(o.b)("inlineCode",{parentName:"p"},"preg")," class (so ",Object(o.b)("inlineCode",{parentName:"p"},"preg::match()"),", ",Object(o.b)("inlineCode",{parentName:"p"},"preg::replace()"),", etc.) were not only outdated, they were incorrect at times.\nThanks Andreas! :)"),Object(o.b)("p",null,"At first, we only wanted to correct the mistakes, but I quickly realized that mere phpDoc inherited from ",Object(o.b)("inlineCode",{parentName:"p"},"preg_*()"),"\nmethods is not enough :/ That could be easily found on php.net, what T-Regx users could really benefit from is\na really extensive, rich, long, detailed and robust documentation. "),Object(o.b)("p",null,"That's why we've spent a little over a week to create an application that's capable of generating a complex and rich\nphpDoc for ",Object(o.b)("inlineCode",{parentName:"p"},"preg")," class (of course we'll use it for more classes in T-Regx). Main updates for the documentation will include: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Robust description of every parameter of every ",Object(o.b)("inlineCode",{parentName:"li"},"preg_*()")),Object(o.b)("li",{parentName:"ul"},"Detailed description of every flag used (e.g. ",Object(o.b)("a",{parentName:"li",href:"https://www.php.net/manual/en/pcre.constants.php"},Object(o.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE")),")"),Object(o.b)("li",{parentName:"ul"},"Rich description of each method, it's relation, similarities and differences to other methods")),Object(o.b)("p",null,"And it will be much easier to maintain, because every class will have a phpDoc that's not written, but generated."),Object(o.b)("p",null,"I'm pretty certain T-Regx is going to have a documentation you've never seen before :D"),Object(o.b)("p",null,"Of course, there are also some minor changes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We've added ",Object(o.b)("inlineCode",{parentName:"li"},"pattern()->match()->group()->fluent()")),Object(o.b)("li",{parentName:"ul"},"Added callback for ",Object(o.b)("inlineCode",{parentName:"li"},"pattern()->match()->group()->first()")),Object(o.b)("li",{parentName:"ul"},"Updated detailed description in ",Object(o.b)("a",{parentName:"li",href:"https://github.com/T-Regx/T-Regx/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md"))),Object(o.b)("p",null,"Keep looking forward to T-Regx 0.9.2! :)"))}u.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);