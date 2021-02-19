(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),o=(a(0),a(198)),c=a(200),i={id:"match-iterator",title:"Iterator"},l={unversionedId:"match-iterator",id:"match-iterator",isDocsHomePage:!1,title:"Iterator",description:"T-Regx uses vanilla PHP [\\Iterator] with standard methods:",source:"@site/../docs/match-iterator.mdx",slug:"/match-iterator",permalink:"/docs/match-iterator",version:"current",lastUpdatedAt:1611615683,sidebar:"docs",previous:{title:"Filter an array",permalink:"/docs/filter"},next:{title:"Exception structure",permalink:"/docs/exception-structure"}},p=[{value:"Iterator to array",id:"iterator-to-array",children:[]}],u={toc:p};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"T-Regx uses vanilla PHP ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.iterator.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator"))," with standard methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"current()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key(): scalar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"next(): void")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rewind(): void")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"valid(): bool"))),Object(o.b)("h2",{id:"iterator-to-array"},"Iterator to array"),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"match()->getIterator()")," returns an implementation of PHP ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.iterator.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator"))," which you can be used with other ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.iterator.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator")),"\nmethods or within your own code, for example PHP methods ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.iterator-to-array.php"},Object(o.b)("inlineCode",{parentName:"a"},"iterator_to_array()"))," and ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/function.iterator-count.php"},Object(o.b)("inlineCode",{parentName:"a"},"iterator_count()")),"."),Object(o.b)(c.a,{tregx:"$iterator = pattern('\\w+')->match('Apples are cool')->getIterator();\n\nreturn $iterator->current()->text(); // Iterator contains \"Detail\"",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\n$iterator = new ArrayIterator($matches[0]);\n\nreturn $iterator->current();  // Iterator contains \"string\"",mdxType:"CodeTabs"}),Object(o.b)(c.b,{mdxType:"Result"},"'Apples'"),Object(o.b)("p",null,"It is useful with methods that only accept ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.iterator.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator")),", and when an explicit iterator is needed. Using ",Object(o.b)("inlineCode",{parentName:"p"},"match()->getIterator()"),"\nfor methods that accept ",Object(o.b)("inlineCode",{parentName:"p"},"array")," is redundant :)"),Object(o.b)("p",null,"Also, please keep in mind that ",Object(o.b)("a",{parentName:"p",href:"/docs/match"},Object(o.b)("inlineCode",{parentName:"a"},"match()"))," and other entities (such as ",Object(o.b)("a",{parentName:"p",href:"/docs/match-group"},Object(o.b)("inlineCode",{parentName:"a"},"match()->group(string|int)"))," or ",Object(o.b)("a",{parentName:"p",href:"/docs/match-as-int"},Object(o.b)("inlineCode",{parentName:"a"},"match()->asInt()")),")\nare also ",Object(o.b)("a",{parentName:"p",href:"/docs/match-for-each#vanilla-php-foreach"},"iterable with ",Object(o.b)("inlineCode",{parentName:"a"},"foreach")),", making explicit usage of ",Object(o.b)("inlineCode",{parentName:"p"},"getIterator()")," even less likely."),Object(o.b)(c.a,{tregx:"foreach (pattern('\\w+')->match('Apples are cool') as $match) {\n    $text = $match->text();\n\n}",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\nforeach ($matches[0] as $text) {\n    $text;\n\n}",mdxType:"CodeTabs"}))}s.isMDXComponent=!0},198:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(a),b=r,d=s["".concat(c,".").concat(b)]||s[b]||m[b]||o;return a?n.a.createElement(d,i(i({ref:t},p),{},{components:a})):n.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=a[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},200:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return g}));var r=a(0),n=a.n(r),o=a(204),c=a(199),i=a(55),l=a.n(i),p=37,u=39;var s=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,s=e.values,m=e.groupId,b=e.className,d=Object(o.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(r.useState)(i),j=O[0],v=O[1],y=r.Children.toArray(e.children);if(null!=m){var g=h[m];null!=g&&g!==j&&s.some((function(e){return e.value===g}))&&v(g)}var w=function(e){v(e),null!=m&&f(m,e)},N=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},b)},s.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},a)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))};var m=function(e){var t=e.children,a=e.hidden,r=e.className;return n.a.createElement("div",{role:"tabpanel",hidden:a,className:r},t)},b=a(205),d=a(56),h=a.n(d),f=function(e){var t=e.children,a=e.language;return n.a.createElement("div",{className:h.a.code},n.a.createElement(b.a,{className:"language-"+(a||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(t)))};var O=function(e){var t=e.tregx,a=e.php;return n.a.createElement(s,{defaultValue:"t-regx",values:j(t,a)},t&&n.a.createElement(m,{value:"t-regx"},n.a.createElement(f,null,t)),a&&n.a.createElement(m,{value:"php"},n.a.createElement(f,null,a)))};function j(e,t){return[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}var v=a(57),y=a.n(v),g=function(e){var t=e.text,a=e.children;return n.a.createElement("div",{className:y.a.result},n.a.createElement(f,{language:t?"text":"php"},a))}}}]);