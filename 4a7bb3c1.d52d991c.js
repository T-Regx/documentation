(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(6),o=(n(0),n(196)),c={title:"Release 0.9.4 - Exception changes and groupBy()",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},i={permalink:"/blog/2020/02/28/release-0.9.4",source:"@site/blog\\2020-02-28-release-0.9.4.md",description:"This release brings updates in exceptions (namespaces, new detailed exceptions) and a `groupBy()` method.\r",date:"2020-02-28T00:00:00.000Z",tags:[],title:"Release 0.9.4 - Exception changes and groupBy()",truncated:!1,prevItem:{title:"Release 0.9.5 - Alternation in prepared patterns!",permalink:"/blog/2020/03/15/release-0.9.5"},nextItem:{title:"Release 0.9.3 - Minor changes",permalink:"/blog/2020/02/22/release-0.9.3"}},p=[{value:"Exceptions",id:"exceptions",children:[]},{value:"<code>groupBy()</code>",id:"groupby",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release brings updates in exceptions (namespaces, new detailed exceptions) and a ",Object(o.b)("inlineCode",{parentName:"p"},"groupBy()")," method."),Object(o.b)("h3",{id:"exceptions"},"Exceptions"),Object(o.b)("p",null,"In previous release we renamed ",Object(o.b)("inlineCode",{parentName:"p"},"SafeRegexException")," to ",Object(o.b)("inlineCode",{parentName:"p"},"PregException"),". In this, we're renaming ",Object(o.b)("inlineCode",{parentName:"p"},"CleanRegexException")," to ",Object(o.b)("inlineCode",{parentName:"p"},"PatternException"),". So now, those two general exceptions sync nicely with their base methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"try {\n  return preg::match('/Foo/', $subject);\n} catch (PregException $e) {\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"try {\n  return pattern('Foo')->test($subject);\n} catch (PatternException $e) {\n")),Object(o.b)("p",null,"They both extend ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException")," - base for all exceptions thrown by T-Regx. So that's the first thing."),Object(o.b)("p",null,"The second exception update - previously, every exception thrown based on ",Object(o.b)("inlineCode",{parentName:"p"},"preg_last_error()")," method was ",Object(o.b)("inlineCode",{parentName:"p"},"RuntimePregException"),". Now, each error has a dedicated exception, which can be caught separately:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"try {\n  return preg::match($pattern, $subject);\n} catch (BacktrackLimitPregException $exception) {\n} catch (Utf8OffsetPregException $exception) {\n")),Object(o.b)("p",null,"The detailed list of changes is in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/blob/master/ChangeLog.md"}),"ChangeLog.md"),"."),Object(o.b)("h3",{id:"groupby"},Object(o.b)("inlineCode",{parentName:"h3"},"groupBy()")),Object(o.b)("p",null,"This release also comes with a brand new method - ",Object(o.b)("inlineCode",{parentName:"p"},"groupBy()")," which groups matches by a capturing group (name or index). It can match strings, offsets and also map them with ",Object(o.b)("inlineCode",{parentName:"p"},"map()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"flatMap()"),". Additionally, it can be chained with ",Object(o.b)("inlineCode",{parentName:"p"},"filter()")," to leave out unwanted matches:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"return pattern('(\\d)(?<unit>cm|mm)')->match($strings)\n  ->filter(function (Match $match) {\n    return $match->group(1)->toInt() % 2 == 0;\n  })\n  ->groupBy('unit')\n  ->map(function (Match $match) {\n    return $match->group(1)->toInt() * 100;\n  });\n")))}s.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},b=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=s(n),d=r,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,i({ref:t},l,{components:n})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);