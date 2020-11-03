(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(169)),l={title:"Release 0.9.11",author:"Daniel Wilkowski"},o={permalink:"/blog/2020/11/03/release-0.9.11",source:"@site/blog\\2020-11-03-release-0.9.11.md",description:"Heey, there!",date:"2020-11-03T00:00:00.000Z",tags:[],title:"Release 0.9.11",readingTime:1.585,truncated:!1,nextItem:{title:"Release 0.9.10",permalink:"/blog/2020/09/22/release-0.9.10"}},c=[],b={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Heey, there!"),Object(i.b)("p",null,"Quick summary of changes in this release:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Every exception extending ",Object(i.b)("inlineCode",{parentName:"p"},"PregException")," (so ",Object(i.b)("inlineCode",{parentName:"p"},"MalformedPatternException"),", ",Object(i.b)("inlineCode",{parentName:"p"},"CatastrophicBacktrackingPregException"),", etc.)\nhave received new method ",Object(i.b)("inlineCode",{parentName:"p"},"getPregPattern()"),":"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"try {\n    pattern('foo')->...\n} catch (\\TRegx\\SafeRegex\\Exception\\PregException $exception) {\n    $exception->getPregPattern(); // '/foo/'\n}\n")),Object(i.b)("p",{parentName:"li"},"Some methods still throw ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.invalidargumentexception.php"}),Object(i.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException")),", and of course that exception is unchanged.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We brought back ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::prepare()")," (see ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/blob/develop/ChangeLog.md"}),"ChangeLog.md"),")")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We added ",Object(i.b)("inlineCode",{parentName:"p"},"Match.tail()")," method, which works like ",Object(i.b)("inlineCode",{parentName:"p"},"offset()")," but returns the position of the ",Object(i.b)("em",{parentName:"p"},"end")," of the occurrence\nin the subject (not the start like ",Object(i.b)("inlineCode",{parentName:"p"},"offset()"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"tail()")," also works for ",Object(i.b)("inlineCode",{parentName:"p"},"MatchGroup")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ReplaceMatch"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"There's also ",Object(i.b)("inlineCode",{parentName:"p"},"byteTail()"),", which returns the position in bytes, instead of characters (like ",Object(i.b)("inlineCode",{parentName:"p"},"byteOffset()"),").")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Fixed inconsistencies"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Duplicated pattern exception message changes offset after PHP 7.3. Since now,\nthe messages will be identical on every PHP version."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Added ",Object(i.b)("inlineCode",{parentName:"p"},"null"),"-safety to some replace methods. Returning ",Object(i.b)("inlineCode",{parentName:"p"},"null")," from any of those methods:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"replace()->callback()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"replace()->otherwise()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"replace()->by()->group()->orElse()"))),Object(i.b)("p",{parentName:"li"},"throws ",Object(i.b)("inlineCode",{parentName:"p"},"InvalidReturnValueException"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Renamed some ",Object(i.b)("inlineCode",{parentName:"p"},"or")," methods. Previously, what was used to handle the missing first value (result of ",Object(i.b)("inlineCode",{parentName:"p"},"findFirst()"),'),\nwas also used to specify the replacement of an optional, unmatched group. Sorry to say that, we made\na bad decision unifying this interface, since it turns out they\'re not even remotely connected. What fooled\nus, was we referred to each as "optional" (even tough one was "optional first match", and the second was\n"replacement of an optional group).'),Object(i.b)("p",{parentName:"li"},"In this release, we separate the interfaces, and assign new, better names for the specification of unmatched,\noptional groups: "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->replace()->by()->group()")," methods:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orThrow(string)")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseThrow(string)"),"."),Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orIgnore()")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseIgnore()"),"."),Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orEmpty()")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseEmpty()"),"."),Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orReturn(string)")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseWith(string)"),"."),Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orElse(callable)")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseCalling(callable)"),"."))),Object(i.b)("li",{parentName:"ul"},"Renamed and added ",Object(i.b)("inlineCode",{parentName:"li"},"pattern()->replace()->by()->group()->map()")," methods:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orThrow(string)")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseThrow(string)"),"."),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"orElseIgnore()"),"."),Object(i.b)("li",{parentName:"ul"},"Added ",Object(i.b)("inlineCode",{parentName:"li"},"orElseEmpty()"),"."),Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orReturn(string)")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseWith(string)"),"."),Object(i.b)("li",{parentName:"ul"},"Renamed ",Object(i.b)("inlineCode",{parentName:"li"},"orElse(callable)")," to ",Object(i.b)("inlineCode",{parentName:"li"},"orElseCalling(callable)"),".")))))),Object(i.b)("p",null,"As always, everything is described in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/T-Regx/T-Regx/blob/develop/ChangeLog.md"}),"ChangeLog.md")," on github."))}p.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,u=m["".concat(l,".").concat(d)]||m[d]||s[d]||i;return n?r.a.createElement(u,o(o({ref:t},b),{},{components:n})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);