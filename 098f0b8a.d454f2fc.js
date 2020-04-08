/*! For license information please see 098f0b8a.d454f2fc.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{119:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return u}));var n=a(1),c=a(6),r=(a(0),a(196)),l=a(199),b=a(198),o={id:"match-first",title:"First occurrence"},p={id:"match-first",title:"First occurrence",description:"Matching a first occurrence in a string is the most common use-case.\r",source:"@site/..\\docs\\match-first.md",permalink:"/docs/match-first",lastUpdatedAt:1586367927,sidebar:"docs",previous:{title:"Match a subject",permalink:"/docs/match"},next:{title:"Optional matches",permalink:"/docs/match-find-first"}},i=[{value:"Return from <code>first()</code>",id:"return-from-first",children:[]},{value:"Use <code>first()</code> with callback",id:"use-first-with-callback",children:[{value:"Match details",id:"match-details",children:[]},{value:"Groups in match",id:"groups-in-match",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Arbitrary return types",id:"arbitrary-return-types",children:[]}]},{value:"<code>findFirst()</code>",id:"findfirst",children:[]}],s={rightToc:i};function u(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Matching a first occurrence in a string is the most common use-case."),Object(r.b)("h2",{id:"return-from-first"},"Return from ",Object(r.b)("inlineCode",{parentName:"h2"},"first()")),Object(r.b)("p",null,"You can get the first occurrence of a pattern in a subject by calling ",Object(r.b)("inlineCode",{parentName:"p"},"first()"),"."),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('[0-9]+')->match(\"I'm 19 years old\")->first();\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg::match('/[0-9]+/', \"I'm 19 years old\", $match)) {\n    return $match[0];\n}\nthrow new SubjectNotMatchedException();\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'19'\n")),Object(r.b)("p",null,"If a match is ",Object(r.b)("strong",{parentName:"p"},"not found")," in a subject, ",Object(r.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," is thrown. This is done to relieve you from the\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"overview.md#brain-strain"}),Object(r.b)("strong",{parentName:"a"},"brain strain")),". It's much easier to develop an application and ",Object(r.b)("em",{parentName:"p"},"just assume")," that this\nmethod ",Object(r.b)("strong",{parentName:"p"},"has")," to return a value and go on. No more bothers about empty arrays and empty strings, or a possible\n",Object(r.b)("inlineCode",{parentName:"p"},"null"),"/",Object(r.b)("inlineCode",{parentName:"p"},"false")," hiding somewhere."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If you would like to control the subject that ",Object(r.b)("strong",{parentName:"p"},"isn't matched")," with your pattern though;\nyou can do it ",Object(r.b)("strong",{parentName:"p"},"explicitly")," with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#findFirst"}),Object(r.b)("inlineCode",{parentName:"a"},"findFirst()"))," (and ",Object(r.b)("inlineCode",{parentName:"p"},"orReturn()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"orElse()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"orThrow()"),").")),Object(r.b)("h2",{id:"use-first-with-callback"},"Use ",Object(r.b)("inlineCode",{parentName:"h2"},"first()")," with callback"),Object(r.b)("p",null,"You can call an anonymous function for the first matched occurrence. In this example, we'll print the matched text to the\nstandard output."),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match(\"Apples are cool\")->first(function (string $match) {\n    echo 'I matched ' . $match;\n});\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg::match('/\\w+/', \"Apples are cool\", $match)) {\n    echo 'I matched ' . $match[0];\n} \nelse {\n    throw new SubjectNotMatchedException();\n}\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"I matched Apples\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Casting ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," to a string is the same as calling a ",Object(r.b)("inlineCode",{parentName:"p"},"text()")," method.")),Object(r.b)("h3",{id:"match-details"},"Match details"),Object(r.b)("p",null,"With ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details, you can gain access to useful information about the matched occurrence. "),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->match(\"Apples are cool\")->first(function (Match $match) {\n    $subject = $match->subject();\n    echo \"Match '$match' was matched inside '$subject'.\";\n});\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$subject = \"Apples are cool\";\nif (preg::match('/\\w+/', $subject, $match)) {\n    $text = $match[0];\n    echo \"Match '$text' was matched inside '$subject'.\";\n} \nelse {\n    throw new SubjectNotMatchedException();\n}\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Match 'Apples' was matched inside 'Apples are cool'.\n")),Object(r.b)("p",null,"You can read more extensively about ",Object(r.b)("inlineCode",{parentName:"p"},"Match")," on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match")," details")," page."),Object(r.b)("h3",{id:"groups-in-match"},"Groups in match"),Object(r.b)("p",null,"Retrieving capturing groups from a match is really simple."),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('(?<capital>[A-Z])')->match('hello there, General Kenobi')->first(function (Match $match) {\n    $capital = $match->group('capital')->text();\n    \n    return $capital;\n});\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg::match('~(?<capital>[A-Z])[a-z]+~', 'hello there, General Kenobi', $match)) {\n    $capital = $match['capital'][0];\n    \n    return $capital;\n}\nelse {\n    throw new SubjectNotMatchedException();\n}\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'G'\n")),Object(r.b)("p",null,"Of course, ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," callback will only be invoked if your pattern matches the subject."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"You can learn more about groups on ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups"}),"Capturing Group")," page. ")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Even more, you can visit ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-group"}),"Inline groups")," and use familiar ",Object(r.b)("inlineCode",{parentName:"p"},"all()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"first()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"only()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"offsets()"),"\nmethods on groups. ")),Object(r.b)("h3",{id:"return-value"},"Return value"),Object(r.b)("p",null,"It's also possible to return your custom value from within ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," callback. This custom value will be then returned\nfrom ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," function."),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$first = pattern('\\w+')->match('Apples are cool')->first(function (Match $match) {\n    return [\n        $match->text(), \n        strtoupper($match->text()),\n        lcfirst($match->text())\n    ];\n});\n\nreturn $first;\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    $first = [\n        $match[0],\n        strtoupper($match[0]),\n        lcfirst($match[0])\n    ];\n}\nelse {\n    throw new SubjectNotMatchedException();\n}\n\nreturn $first;\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"['Apples', 'APPLES', 'apples']\n")),Object(r.b)("h3",{id:"variable-callbacks"},"Variable callbacks"),Object(r.b)("p",null,"You can call ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," for any valid PHP ",Object(r.b)("inlineCode",{parentName:"p"},"callable")," which accepts one string parameter (or no parameters)."),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"return pattern('\\w+')->match('Apples are cool')->first('strtoupper');\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    $method = 'strtoupper';\n    return $method($match[0]);\n}\nelse {\n    throw new SubjectNotMatchedException();\n}\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"'APPLES'\n")),Object(r.b)("p",null,"In this example, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," will be cast to string, which is the same as calling ",Object(r.b)("inlineCode",{parentName:"p"},"Match.text()")," method."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Of course, ",Object(r.b)("inlineCode",{parentName:"p"},"strtoupper")," (or any other callback) is only invoked ",Object(r.b)("strong",{parentName:"p"},"if")," your subject is matched with the pattern.")),Object(r.b)("h3",{id:"arbitrary-return-types"},"Arbitrary return types"),Object(r.b)("p",null,"From within ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," callback, you can return any value:"),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"return pattern('\\w+')->match('Apples are cool')->first('str_split');\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg::match('/\\w+/', 'Apples are cool', $match)) {\n    $method = 'str_split';\n    return $method($match[0]);\n}\nelse {\n    throw new SubjectNotMatchedException();\n}\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"['A', 'p', 'p', 'l', 'e', 's']\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"first()")," callback accepts all return types, including: numbers, objects, arrays, booleans and ",Object(r.b)("inlineCode",{parentName:"p"},"null"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$p = '(?<value>\\d+)(?<unit>cm|mm)';\n$s = '192mm and 168cm or 18mm and 12cm';\n\npattern($p)->match($s)->first();                 // '192mm'\npattern($p)->match($s)->first('str_split');      // ['1', '9', '2', 'm', 'm']\npattern($p)->match($s)->first('strlen')          // 5\n")),Object(r.b)("h2",{id:"findfirst"},Object(r.b)("inlineCode",{parentName:"h2"},"findFirst()")),Object(r.b)("p",null,"This method allows you to explicitly specify how to handle an unmatched subject. Just chain ",Object(r.b)("inlineCode",{parentName:"p"},"findFirst()")," with\none of the following ",Object(r.b)("inlineCode",{parentName:"p"},"orReturn()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"orElse()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"orThrow()"),"."),Object(r.b)(l.a,{defaultValue:"T-Regx",values:[{label:"T-Regx",value:"T-Regx"},{label:"PHP",value:"PHP"}],mdxType:"Tabs"},Object(r.b)(b.a,{value:"T-Regx",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"echo pattern('\\w+')->match('Dog')\n         ->findFirst(function (Match $match) {\n             return \"Yay $match\";\n         })\n         ->orReturn('Aw, man :/');\n"))),Object(r.b)(b.a,{value:"PHP",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg::match('/\\w+/', 'Dog', $match)) {\n    echo \"Yay {$match[0]}\";\n}\nelse {\n    echo 'Aw, man :/';\n}\n")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"Yay Dog\n")),Object(r.b)("hr",null),Object(r.b)("p",null,"Read on to learn more about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-find-first"}),Object(r.b)("inlineCode",{parentName:"a"},"findFirst()")),"."))}u.isMDXComponent=!0},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var p=c.a.createContext({}),i=function(e){var t=c.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},s=function(e){var t=i(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=i(a),m=n,h=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return a?c.a.createElement(h,b({ref:t},p,{components:a})):c.a.createElement(h,b({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var p=2;p<r;p++)l[p]=a[p];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},197:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function c(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var l=c.apply(null,n);l&&e.push(l)}else if("object"===r)for(var b in n)a.call(n,b)&&n[b]&&e.push(b)}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(n=function(){return c}.apply(t,[]))||(e.exports=n)}()},198:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(e){return c.a.createElement("div",null,e.children)}},199:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(200);var l=function(){return Object(n.useContext)(r.a)},b=a(197),o=a.n(b),p=a(93),i=a.n(p);const s=37,u=39;t.a=function(e){const{block:t,children:a,defaultValue:r,values:b,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:h}=l(),[d,j]=Object(n.useState)(r);if(null!=p){const e=m[p];null!=e&&e!==d&&j(e)}const O=e=>{j(e),null!=p&&h(p,e)},f=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>c.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:o()("tab-item",i.a.tabItem,{"tab-item--active":d===e}),key:e,ref:e=>f.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case u:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),onFocus:()=>O(e),onClick:()=>O(e)},t))),c.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter(e=>e.props.value===d)[0]))}},200:function(e,t,a){"use strict";var n=a(0);const c=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=c}}]);