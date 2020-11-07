(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),c=(n(0),n(173)),p={id:"identities",title:"Identities"},i={unversionedId:"identities",id:"identities",isDocsHomePage:!1,title:"Identities",description:"A curious user might notice, that some parts of T-Regx API are redundant and can be simplified. Here's a list of them:",source:"@site/../docs/identities.md",slug:"/identities",permalink:"/docs/identities",version:"current",lastUpdatedAt:1584222424},o=[],l={rightToc:o};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A curious user might notice, that some parts of T-Regx API are redundant and can be simplified. Here's a list of them:"),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->findFirst($callback)->orThrow();\n")),Object(c.b)("p",null,"can be simplified to"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->first($callback);\n")),Object(c.b)("p",null,"If the subject doesn't match the pattern - ",Object(c.b)("inlineCode",{parentName:"p"},"first()")," throws ",Object(c.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException"),", which is the default class\nfor ",Object(c.b)("inlineCode",{parentName:"p"},"orThrow()"),"."),Object(c.b)("hr",null),Object(c.b)("p",null,"Getting the matched text from ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(c.b)("inlineCode",{parentName:"a"},"Match")),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($subject)->map(function (Match $match) {\n\n    return $match->text();      // using text() method\n    return $match->group(0);    // group #0 is the whole match in all regexp engines\n    return (string) $match;     // cast it to string\n    return "$match";            // enclose it in double quotes\n});\n')),Object(c.b)("hr",null),Object(c.b)("p",null,"Mapping ",Object(c.b)("inlineCode",{parentName:"p"},"Match.text()")," or returning ",Object(c.b)("inlineCode",{parentName:"p"},"Match.all()")," from ",Object(c.b)("inlineCode",{parentName:"p"},"first()"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->first(function (Match $match) {\n    return $match->all();\n});\n\n// and\n\npattern($p)->match($s)->map(function (Match $match) {\n    return $match->text();\n});\n")),Object(c.b)("p",null,"can be simplified to"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"pattern($p)->match($s)->all();\n")),Object(c.b)("hr",null),Object(c.b)("p",null,"Similarly, mapping ",Object(c.b)("inlineCode",{parentName:"p"},"Match.group()")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->map(function (Match $match) {\n    return $match->group("capital")->text();\n});\n')),Object(c.b)("p",null,"can be simplified to"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->group("capital")->all();\n')),Object(c.b)("p",null,"Also with offsets"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->map(function (Match $match) {\n    return $match->group("capital")->offset();\n});\n')),Object(c.b)("p",null,"can be simplified to"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'pattern($p)->match($s)->group("capital")->offsets()->all();\n')))}b.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=b(n),m=a,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||c;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,p=new Array(c);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<c;l++)p[l]=n[l];return r.a.createElement.apply(null,p)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);