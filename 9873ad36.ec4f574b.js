(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),p=(n(0),n(181)),i={id:"match-groups-in-depth",title:"Capturing groups - in depth"},c={unversionedId:"match-groups-in-depth",id:"match-groups-in-depth",isDocsHomePage:!1,title:"Capturing groups - in depth",description:"In plain, old, vanilla PHP there's no difference between:",source:"@site/../docs/match-groups-in-depth.md",slug:"/match-groups-in-depth",permalink:"/docs/match-groups-in-depth",version:"current",lastUpdatedAt:1611615338,sidebar:"docs",previous:{title:"Exception structure",permalink:"/docs/exception-structure"},next:{title:"Capturing groups - J modifier",permalink:"/docs/match-groups-j-modifier"}},b=[],l={rightToc:b};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(p.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("p",null,"In plain, old, vanilla PHP there's no difference between:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"an invalid group (name ",Object(p.b)("inlineCode",{parentName:"li"},"2group")," or index ",Object(p.b)("inlineCode",{parentName:"li"},"-1"),")"),Object(p.b)("li",{parentName:"ul"},"valid, but non-existent group"),Object(p.b)("li",{parentName:"ul"},"existent, but not matched group"),Object(p.b)("li",{parentName:"ul"},"matched group, but value is ",Object(p.b)("inlineCode",{parentName:"li"},"''")," (empty string)")),Object(p.b)("p",null,"The two first cases always return ",Object(p.b)("inlineCode",{parentName:"p"},"null"),", the third one returns either ",Object(p.b)("inlineCode",{parentName:"p"},"''")," or ",Object(p.b)("inlineCode",{parentName:"p"},"null")," (depending on the ",Object(p.b)("strong",{parentName:"p"},"order of\ngroups!"),"). If you used ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(p.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE")),", it'll return ",Object(p.b)("inlineCode",{parentName:"p"},"['', -1]")," instead (so you need to compare the offset to ",Object(p.b)("inlineCode",{parentName:"p"},"-1"),").\nMatched empty string, of course, returns ",Object(p.b)("inlineCode",{parentName:"p"},"''")," (which might the same as the third)."),Object(p.b)("p",null,"Also, ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(p.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE"))," for ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match-all.php"}),Object(p.b)("inlineCode",{parentName:"a"},"preg_match_all()"))," works fine, but for ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match.php"}),Object(p.b)("inlineCode",{parentName:"a"},"preg_match()")),", if it's the last entry, it will\nnot be an ",Object(p.b)("inlineCode",{parentName:"p"},"array"),", but an empty string instead ;|"),Object(p.b)("p",null,"Since PHP 7.2, there's ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(p.b)("inlineCode",{parentName:"a"},"PREG_UNMATCHED_AS_NULL"))," - it's a little better, it allows distinguishing an unmatched subject\nfrom a matched empty string, but to distinguish invalid and non-existent groups from unmatched - you have to use ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.array-key-exists.php"}),Object(p.b)("inlineCode",{parentName:"a"},"array_key_exists()")),"."),Object(p.b)("p",null,"For ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match.php"}),Object(p.b)("inlineCode",{parentName:"a"},"preg_match()")),"/",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match-all.php"}),Object(p.b)("inlineCode",{parentName:"a"},"preg_match_all()"))," we can use ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(p.b)("inlineCode",{parentName:"a"},"PREG_UNMATCHED_AS_NULL")),", for ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-replace-callback.php"}),Object(p.b)("inlineCode",{parentName:"a"},"preg_replace_callback()"))," we\nhave... nothing. There's no way to verify it in vanilla-PHP."),Object(p.b)("p",null,"And T-Regx ",Object(p.b)("strong",{parentName:"p"},"hates")," it. So we fixed it all."),Object(p.b)("p",null,"That's why in T-Regx, ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(p.b)("inlineCode",{parentName:"a"},"Detail"))," has 3 separate methods to deal with each of these cases separately."),Object(p.b)("p",null,"Of course, the interface of ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(p.b)("inlineCode",{parentName:"a"},"Detail"))," is the same for matching, replacing and any other operation (unlike vanilla-PHP),\nso validation of groups in T-Regx works completely alike for ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match"}),Object(p.b)("inlineCode",{parentName:"a"},"pattern()->match()")),", ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/replace"}),Object(p.b)("inlineCode",{parentName:"a"},"pattern()->replace()"))," and any other\nmethod. ",Object(p.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match-details"}),Object(p.b)("inlineCode",{parentName:"a"},"Detail"))," always has the same interface and works exactly alike, no matter where it was used."),Object(p.b)("p",null,"Here's how they work:"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Group"),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"th"},"hasGroup()")),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"th"},"matched()")),Object(p.b)("th",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"th"},"text()")))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Invalid group"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.php.net/manual/en/class.invalidargumentexception.php"}),Object(p.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.php.net/manual/en/class.invalidargumentexception.php"}),Object(p.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.php.net/manual/en/class.invalidargumentexception.php"}),Object(p.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException")))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Nonexistent group"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"false")),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"NonexistentGroupException")),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"NonexistentGroupException"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not matched group"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"true")),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"false")),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"GroupNotMatchedException"))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Matched group"),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"true")),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(p.b)("inlineCode",{parentName:"td"},"true")),Object(p.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Value of the group")))),Object(p.b)("p",null,"In short:"),Object(p.b)("ul",null,Object(p.b)("li",{parentName:"ul"},"You're protected from using an invalid group (",Object(p.b)("inlineCode",{parentName:"li"},"2startingWithDigit")," or negative ",Object(p.b)("inlineCode",{parentName:"li"},"-1"),")"),Object(p.b)("li",{parentName:"ul"},"You're protected from using a non-existent method (except with ",Object(p.b)("inlineCode",{parentName:"li"},"hasGroup()"),")"),Object(p.b)("li",{parentName:"ul"},"You're protected from using a non-matched group (except with ",Object(p.b)("inlineCode",{parentName:"li"},"hasGroup()")," and with ",Object(p.b)("inlineCode",{parentName:"li"},"matched()"),")")))}o.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,O=u["".concat(i,".").concat(d)]||u[d]||m[d]||p;return n?r.a.createElement(O,c(c({ref:t},l),{},{components:n})):r.a.createElement(O,c({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<p;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);