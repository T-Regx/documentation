(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(198)),i={title:"Release 0.9.3 - Minor changes",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},c={permalink:"/blog/2020/02/22/release-0.9.3",source:"@site/blog/2020-02-22-release-0.9.3.md",description:"That's a really quick update, we just found a PHP bug report #78853,",date:"2020-02-22T00:00:00.000Z",tags:[],title:"Release 0.9.3 - Minor changes",readingTime:.95,truncated:!1,prevItem:{title:"Release 0.9.4 - Exception changes and groupBy()",permalink:"/blog/2020/02/28/release-0.9.4"},nextItem:{title:"Release 0.9.2 - You're in for a treat!",permalink:"/blog/2020/02/18/release-0.9.2"}},l=[],p={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"That's a really quick update, we just found a PHP bug report ",Object(o.b)("a",{parentName:"p",href:"https://bugs.php.net/bug.php?id=78853"},"#78853"),",\nthat's probably going to be fixed in future versions of PHP, but we decided to include the bugfix in T-Regx\nso it's fixed in PHP 7.1 (if you're using T-Regx :)"),Object(o.b)("p",null,"Apart from that, we added ",Object(o.b)("inlineCode",{parentName:"p"},"preg::last_error_msg()"),", which returns the same data as ",Object(o.b)("inlineCode",{parentName:"p"},"preg::last_error()"),", but in\nin human-readable ",Object(o.b)("inlineCode",{parentName:"p"},"string"),". There are suggestions on PHP source code, that this method might become part of standard\nPHP library, so we at T-Regx thought we might include it already :) And if it's not included, after all, that's still\na good idea to have this method :)"),Object(o.b)("p",null,"And there are some breaking changes, that should increase readability, for example this exception:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"try {\n  return preg::match('/pattern/', $word)\n}\ncatch (PregException $e) {\n")),Object(o.b)("p",null,"seems a bit more intuitive than"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"catch (SafeRegexException $e) {\n")),Object(o.b)("p",null,"So to name the exception based on a class/method, not the module :)"),Object(o.b)("p",null,"And FIY, the next feature we're working at T-Regx is ",Object(o.b)("inlineCode",{parentName:"p"},"groupBy()"),", which should complete ",Object(o.b)("inlineCode",{parentName:"p"},"groupByCallback()"),"\nfunctionality already present in T-Regx. So expect that method first! :)"),Object(o.b)("p",null,"That's it for today, thanks guys!"))}u.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,f=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);