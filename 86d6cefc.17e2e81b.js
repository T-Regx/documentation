(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),i=(n(0),n(198)),o={title:"Support for PHP 5.3",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},l={permalink:"/blog/2018/03/03/php-5.3-support",source:"@site/blog/2018-03-03-php-5.3-support.md",description:"Hello there! Another update, this time there's more to it - much has changed.",date:"2018-03-03T00:00:00.000Z",tags:[],title:"Support for PHP 5.3",readingTime:1.04,truncated:!0,prevItem:{title:"Capturing groups update",permalink:"/blog/2018/09/01/groups"},nextItem:{title:"What's new, new, new!",permalink:"/blog/2017/12/30/delimiters"}},c=[],p={toc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Hello there! Another update, this time there's more to it - much has changed."),Object(i.b)("p",null,"Here's a quick list:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"ReadMe.md is now more throughout"),Object(i.b)("li",{parentName:"ul"},"CleanRegex runs on ",Object(i.b)("a",{parentName:"li",href:"https://travis-ci.org/T-Regx/T-Regx"},"Travis")," and ",Object(i.b)("a",{parentName:"li",href:"https://coveralls.io/github/T-Regx/T-Regx?branch=master"},"Coveralls")),Object(i.b)("li",{parentName:"ul"},"The library can now be required using ",Object(i.b)("a",{href:"https://packagist.org/packages/rawr/t-regx",target:"_blank"},"Composer")),Object(i.b)("li",{parentName:"ul"},"CleanRegex supports ",Object(i.b)("inlineCode",{parentName:"li"},"PHP 5.3")),Object(i.b)("li",{parentName:"ul"},"Handling compile pattern exceptions and runtime pattern exceptions"),Object(i.b)("li",{parentName:"ul"},"Passing callbacks with detailed object parameters (",Object(i.b)("inlineCode",{parentName:"li"},"Match")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ReplaceMatch"),")."),Object(i.b)("li",{parentName:"ul"},"Add a facade ",Object(i.b)("inlineCode",{parentName:"li"},"Pattern::of()"))),Object(i.b)("p",null,"In addition, I'd like to give a quick thanks to Bartek - my friend currently working at Thulium - for a nice suggestion :)"),Object(i.b)("p",null,"I plan on supporting older versions of PHP by maintaining two branches: ",Object(i.b)("inlineCode",{parentName:"p"},"master")," and ",Object(i.b)("inlineCode",{parentName:"p"},"master-php5.3"),". I will develop\nCleanRegex on ",Object(i.b)("inlineCode",{parentName:"p"},"master")," with PHP 7.1, and with each release, I will merge ",Object(i.b)("inlineCode",{parentName:"p"},"master")," to ",Object(i.b)("inlineCode",{parentName:"p"},"master-php5.3")," and remove any\nPHP 5.3 incompatibilities (type hints, scalar arguments, etc.)."),Object(i.b)("p",null,"I will not remove other incompatibilities, like missing constants, nonexistent methods, etc. because code on ",Object(i.b)("inlineCode",{parentName:"p"},"master"),"\nwill be developed not to relay on those that much. I will also write unit tests for breaking PHP changes. Some of them\nwill be skipped for PHP 7.1+, and some for PHP <7.1. "),Object(i.b)("p",null,"PS: Just letting you know that I plan on investing more time in maintaining CleanRegex now :)"))}u.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,d=s["".concat(o,".").concat(m)]||s[m]||b[m]||i;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);