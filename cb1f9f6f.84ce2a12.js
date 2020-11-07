(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{145:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(173)),i={title:"Release 0.9.5 - Alternation in prepared patterns!",author:"Daniel Wilkowski",authorFBID:0x5af34da0d14b},l={permalink:"/blog/2020/03/15/release-0.9.5",source:"@site/blog/2020-03-15-release-0.9.5.md",description:"This release brings alternation in prepared patterns!",date:"2020-03-15T00:00:00.000Z",tags:[],title:"Release 0.9.5 - Alternation in prepared patterns!",readingTime:.955,truncated:!1,prevItem:{title:"Toss a coin to your T-Regx!",permalink:"/blog/2020/03/19/sponsor-t-regx"},nextItem:{title:"Release 0.9.4 - Exception changes and groupBy()",permalink:"/blog/2020/02/28/release-0.9.4"}},p=[],c={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This release brings alternation in prepared patterns!"),Object(o.b)("p",null,"Up to this point, there was no reasonable way to create a pattern from a variable number of inputs, for example\nyou allow your users to input 0, 1 or more tags, which later should be used in a pattern. In procedural world, probably\n",Object(o.b)("inlineCode",{parentName:"p"},"array_map()")," with ",Object(o.b)("inlineCode",{parentName:"p"},"preg::quote()")," would do the job, but wait! You don't have to code, it's already here:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"Pattern::bind('^user:@id/findBy:@tags/all$', [\n  'id'   => $user->id,\n  'tags' => $_GET['tags']\n]);\n")),Object(o.b)("p",null,"In other words:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"Pattern::bind('My tag is: \"@tags\"', ['tags' => ['one', 'two', 'three']]);\n")),Object(o.b)("p",null,"creates a pattern:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),'/My tag is: "(one|two|three)"/\n')),Object(o.b)("p",null,"Rest assured:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"the values are quoted with ",Object(o.b)("inlineCode",{parentName:"li"},"preg::quote()"),", to protect you from malicious code"),Object(o.b)("li",{parentName:"ul"},"the group is non-capturing (use ",Object(o.b)("inlineCode",{parentName:"li"},"'My tag is: \"(@tags)\"'")," for a capturing group, to be used with ",Object(o.b)("inlineCode",{parentName:"li"},"group()"),")")),Object(o.b)("p",null,"The alternation is really smart too - if you use ",Object(o.b)("inlineCode",{parentName:"p"},"i")," or ",Object(o.b)("inlineCode",{parentName:"p"},"u")," flag, T-Regx will perform certain optimization,\nfor example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"Pattern::inject('Find: @ :)', [['foo', 'bar', 'FOO']], 'i');\n")),Object(o.b)("p",null,"then it wil collapse ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," and ",Object(o.b)("inlineCode",{parentName:"p"},"FOO"),", since ",Object(o.b)("inlineCode",{parentName:"p"},"i")," flag is used:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"/Find: (foo|bar) :)/\n")),Object(o.b)("p",null,"That's it in this release! Stay tuned :)"))}u.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);