/*! For license information please see 52df82c0.55f26b9e.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{192:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return p})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return o}));t(0);var n=t(269),r=t(271),l=t(272);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const p={id:"match-flat-map",title:"Map with keys (Flat map)"},b=[{value:"Making a flat map",id:"making-a-flat-map",children:[]},{value:"Return types",id:"return-types",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Mapping with keys",id:"mapping-with-keys",children:[]},{value:"Duplicate keys",id:"duplicate-keys",children:[]}],i={rightToc:b};function o({components:e,...a}){return Object(n.b)("wrapper",c({},i,a,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are cases when you would like to create a single list of all your matches. ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," is great for it."),Object(n.b)("h2",{id:"making-a-flat-map"},"Making a flat map"),Object(n.b)("p",null,"Method ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," is basically method ",Object(n.b)("inlineCode",{parentName:"p"},"map()"),", from which you can return multiple values."),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match('I have 19 trains')->flatMap(function (Match $match) {\n    return [\n        $match->text(), strlen($match)\n    ];\n});\n"))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"preg::match_all(\"/\\w+/\", 'I have 19 trains', $matches);\nreturn array_merge(...array_map(function (string $text) {\n    return [\n        $text, strlen($text)\n    ];\n}, $matches[0]));\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"['I', 1, 'have', 4, '19', 2, 'trains', 6]\n")),Object(n.b)("h2",{id:"return-types"},"Return types"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," only accepts an ",Object(n.b)("inlineCode",{parentName:"p"},"array")," as its return type. Returning a single element and implicitly creating a one-element\narray under the hood would break our ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/whats-the-point#t-regx-to-the-rescue"}),'"Explicity rule"'),"."),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match(\"I like trains\")->flatMap(function (Match $match) {\n    return $match;  // <- throws InvalidReturnValueException\n});\n")))),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match(\"I like trains\")->flatMap(function (Match $match) {\n    return [$match];  // ok\n});\n")))),Object(n.b)("h2",{id:"variable-callbacks"},"Variable callbacks"),Object(n.b)("p",null,"You can invoke ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," with any valid PHP ",Object(n.b)("inlineCode",{parentName:"p"},"callable"),", which accepts one or zero string parameters\n(just like ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-first"}),Object(n.b)("inlineCode",{parentName:"a"},"first()"))," and ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-map"}),Object(n.b)("inlineCode",{parentName:"a"},"map()")),") and returns ",Object(n.b)("inlineCode",{parentName:"p"},"array"),"."),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->flatMap('str_split');\n"))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_merge(...array_map('str_split', $matches[0]));\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"['I', '\\'', 'm', '1', '9', 'y', 'e', 'a', 'r', 's', 'o', 'l', 'd']\n")),Object(n.b)("p",null,"The ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(n.b)("inlineCode",{parentName:"a"},"callable"))," passed to ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," must return an array.\n",Object(n.b)("inlineCode",{parentName:"p"},"InvalidReturnValueException")," is thrown, otherwise."),Object(n.b)("h2",{id:"mapping-with-keys"},"Mapping with keys"),Object(n.b)("p",null,"Because ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," receives an array from its callback, it's possible to also return an associative array with\nspecified keys:"),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),'pattern("\\w+")->match("Apples are cool")->flatMap(function (Match $match) {\n    return [$match->text() => $match->offset()];   // offset is UTF-8 safe\n});\n'))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),'preg::match_all("/\\w+/", "Apples are cool", $matches, PREG_OFFSET_CAPTURE);\nreturn array_merge(...array_map(function (array $match) {\n    return [$match[0] => $match[1]];    // offset is given in bytes\n}, $matches[0]));\n')))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"[\n    'Apples' => 0,\n    'are'    => 7,\n    'cool'   => 11\n]\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Keep in mind that ",Object(n.b)("inlineCode",{parentName:"p"},"flatMap()")," uses ",Object(n.b)("inlineCode",{parentName:"p"},"array_merge()")," to flatten the results! So If you use ",Object(n.b)("inlineCode",{parentName:"p"},"int")," as a key, or even\na ",Object(n.b)("inlineCode",{parentName:"p"},"string")," with numeric values (like ",Object(n.b)("inlineCode",{parentName:"p"},"'19'"),") they will be ",Object(n.b)("strong",{parentName:"p"},"reindexed")," by ",Object(n.b)("inlineCode",{parentName:"p"},"array_merge()"),".")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("inlineCode",{parentName:"p"},"Match.offset()")," returns offset as a ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-details#offsets"}),"valid UTF-8 sequence"),", whereas ",Object(n.b)("inlineCode",{parentName:"p"},"preg::match_all"),"\ncounts them as ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-details#offsets"}),"bytes"),". To return bytes number with T-Regx as well,\nuse ",Object(n.b)("a",c({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(n.b)("inlineCode",{parentName:"a"},"byteOffset()")),".")),Object(n.b)("h2",{id:"duplicate-keys"},"Duplicate keys"),Object(n.b)("p",null,"Duplicate keys are not allowed in PHP arrays, so they'll only appear once in the results."),Object(n.b)(r.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(n.b)(l.a,{value:"T-Regx",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),'pattern("\\w+")->match("Apples are cool")->flatMap(function (Match $match) {\n    return [\n        $match->text() => $match->offset(),   // offset is UTF-8 safe\n        \'subject\'      => $match->subject()\n    ];\n});\n'))),Object(n.b)(l.a,{value:"PHP",mdxType:"TabItem"},Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"$subject = 'Apples are cool';\npreg::match_all(\"/\\w+/\", $subject, $matches, PREG_OFFSET_CAPTURE);\nreturn array_merge(...array_map(function (array $match) use ($subject) {\n    return [\n        $match[0] => $match[1],   // offset is given in bytes\n        'subject' => $subject\n    ];\n}, $matches[0]));\n")))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-php"}),"[\n    'Apples'  => 0,\n    'subject' => \"Apples are cool\",\n    'are'     => 7,\n    'cool'    => 11\n]\n")))}o.isMDXComponent=!0},269:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return f}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),o=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p({},a,{},e)),t},u=function(e){var a=o(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=o(t),m=n,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return t?r.a.createElement(f,p({ref:a},i,{components:t})):r.a.createElement(f,p({ref:a},i))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=m;var p={};for(var b in a)hasOwnProperty.call(a,b)&&(p[b]=a[b]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},270:function(e,a,t){var n;!function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var p in n)t.call(n,p)&&n[p]&&e.push(p)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()},271:function(e,a,t){"use strict";t(24),t(19),t(20);var n=t(0),r=t.n(n),l=t(270),c=t.n(l),p=t(124),b=t.n(p),i=37,o=39;a.a=function(e){var a=e.block,t=e.children,l=e.defaultValue,p=e.values,u=Object(n.useState)(l),s=u[0],m=u[1],f=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":a})},p.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":s===a,className:c()("tab-item",b.a.tabItem,{"tab-item--active":s===a}),key:a,ref:function(e){return f.push(e)},onKeyDown:function(e){return function(e,a,t){switch(t.keyCode){case o:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case i:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(f,e.target,e)},onFocus:function(){return m(a)},onClick:function(){return m(a)}},t)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(t).filter((function(e){return e.props.value===s}))[0]))}},272:function(e,a,t){"use strict";var n=t(0),r=t.n(n);a.a=function(e){return r.a.createElement("div",null,e.children)}}}]);