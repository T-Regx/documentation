(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{111:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(169)),i={title:"Release 0.9.10",author:"Daniel Wilkowski"},c={permalink:"/blog/2020/09/22/release-0.9.10",source:"@site/blog\\2020-09-22-release-0.9.10.md",description:"We've released T-Regx 0.9.10, where we delivered what we described in previous blog post.",date:"2020-09-22T00:00:00.000Z",tags:[],title:"Release 0.9.10",readingTime:.28,truncated:!1,prevItem:{title:"Release 0.9.11",permalink:"/blog/2020/11/03/release-0.9.11"},nextItem:{title:"Removal of Pattern::prepare()",permalink:"/blog/2020/09/11/pattern-prepared"}},l=[],p={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We've released T-Regx 0.9.10, where we delivered what we described in previous blog post."),Object(o.b)("p",null,"There are some renames to make some methods more clear.  We also added ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()->match()->tuple()"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"pattern()->match()->triple()")," helper methods."),Object(o.b)("p",null,"As always, everything is described in ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/blob/develop/ChangeLog.md"}),"ChangeLog.md")," on github."),Object(o.b)("p",null,"PS: ",Object(o.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," is removed in this release, but is restored back in 0.9.11."))}u.isMDXComponent=!0},169:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=n,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return r?a.a.createElement(m,c(c({ref:t},p),{},{components:r})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);