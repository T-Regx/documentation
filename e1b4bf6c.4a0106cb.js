(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),i=(n(0),n(169)),o={id:"handling-user-input",title:"Handling user input"},p={unversionedId:"handling-user-input",id:"handling-user-input",isDocsHomePage:!1,title:"Handling user input",description:"Prepared Patterns allow you to confidently use user-input or unsafe data that might contain regular expression special",source:"@site/..\\docs\\handling-user-input.md",permalink:"/docs/handling-user-input",lastUpdatedAt:1604361272,sidebar:"docs",previous:{title:"Replace by map",permalink:"/docs/replace-by-map"},next:{title:"Prepared Patterns - User input",permalink:"/docs/prepared-patterns"}},c=[{value:"Why handling user input is important",id:"why-handling-user-input-is-important",children:[]},{value:"Why not just preg_quote()",id:"why-not-just-preg_quote",children:[]}],l={rightToc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Prepared Patterns allow you to confidently use user-input or unsafe data that might contain regular expression special\ncharacters. It's also integrated with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/delimiters"}),"Automatic Delimiters"),", so they're quoted with regard to the delimiter\nthat was chosen automatically for you."),Object(i.b)("p",null,"There are two entry points for prepared patterns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/prepared-patterns#with-pattern-prepare"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::prepare()"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/prepared-patterns#with-pattern-inject"}),Object(i.b)("inlineCode",{parentName:"a"},"Pattern::inject()")))),Object(i.b)("p",null,"You can read about each of them in the next section, but for now, let's cover the basics."),Object(i.b)("h2",{id:"why-handling-user-input-is-important"},"Why handling user input is important"),Object(i.b)("p",null,"Let's say, you would like to search a subject for ",Object(i.b)("inlineCode",{parentName:"p"},"My dog's name is Barky"),", where the dog's name is user input."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),"$input = $_GET['name'];\n\nPattern::of(\"(My|Our) dog's name is \" . $input . '!');\n")),Object(i.b)("p",null,"Immediately though, you can see that ",Object(i.b)("inlineCode",{parentName:"p"},"$input")," may contain special characters (like ",Object(i.b)("inlineCode",{parentName:"p"},"."),", ",Object(i.b)("inlineCode",{parentName:"p"},"?"),") that might interfere with your pattern.\nIt also poses a threat to ReDOS attack, if the unsafe values aren't handled properly."),Object(i.b)("p",null,"For example, given this code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-php"}),'Pattern::of("(My|Our) dog\'s name is (Barky!");\n')),Object(i.b)("p",null,"If, by accident, ",Object(i.b)("inlineCode",{parentName:"p"},"$input")," had a value of ",Object(i.b)("inlineCode",{parentName:"p"},"B(arky")," - you would receive an exception ",Object(i.b)("inlineCode",{parentName:"p"},"missing ) at offset 31")),Object(i.b)("p",null,"Read on, to learn about proper handling of user input."),Object(i.b)("h2",{id:"why-not-just-preg_quote"},"Why not just ",Object(i.b)("a",Object(a.a)({parentName:"h2"},{href:"https://www.php.net/manual/en/function.preg-quote.php"}),Object(i.b)("inlineCode",{parentName:"a"},"preg_quote()"))),Object(i.b)("p",null,"Good question."),Object(i.b)("p",null,"The same reason why good programmers use Prepared SQL Statements, instead of ",Object(i.b)("inlineCode",{parentName:"p"},"mysql_real_escape_string()"),".\nThey allow you to separate regular expression from unsafe data, which helps with making the pattern safer:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"delimiters become an implementation detail, about which programmer doesn't have to care"),Object(i.b)("li",{parentName:"ul"},"some flags (e.g. ",Object(i.b)("inlineCode",{parentName:"li"},"x"),") require spaces and whitespaces to also be quoted, which ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-quote.php"}),Object(i.b)("inlineCode",{parentName:"a"},"preg_quote()"))," doesn't quote"),Object(i.b)("li",{parentName:"ul"},"inside comments (",Object(i.b)("inlineCode",{parentName:"li"},"\\Q")," and ",Object(i.b)("inlineCode",{parentName:"li"},"\\E"),"), values shouldn't be quoted! This would cause double quotation, which ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-quote.php"}),Object(i.b)("inlineCode",{parentName:"a"},"preg_quote()"))," does\n",Object(i.b)("em",{parentName:"li"},"(kinda how ",Object(i.b)("inlineCode",{parentName:"em"},">")," becomes ",Object(i.b)("inlineCode",{parentName:"em"},"&amp;gt;")," when double quoted)"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.php.net/manual/en/function.preg-quote.php"}),Object(i.b)("inlineCode",{parentName:"a"},"preg_quote()"))," doesn't quote comments before PHP 7.1.3, in T-Regx this is handled.")))}u.isMDXComponent=!0},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return n?r.a.createElement(m,p(p({ref:t},l),{},{components:n})):r.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);