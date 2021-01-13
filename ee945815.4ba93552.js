(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{163:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),i=(a(0),a(180)),l={id:"whats-the-point",title:"What's the point?",sidebar_label:"Why PHP sucks?"},c={unversionedId:"whats-the-point",id:"whats-the-point",isDocsHomePage:!1,title:"What's the point?",description:"This chapter highlights the differences, reasons and contrasts between T-Regx and PHP regular expressions.",source:"@site/../docs/whats-the-point.md",slug:"/whats-the-point",permalink:"/docs/whats-the-point",version:"current",lastUpdatedAt:1604751680,sidebar_label:"Why PHP sucks?",sidebar:"docs",previous:{title:"Migrate to T-Regx",permalink:"/docs/introduction-clean"},next:{title:"Match a subject",permalink:"/docs/match"}},p=[{value:"What&#39;s wrong with PHP Regular Expressions:",id:"whats-wrong-with-php-regular-expressions",children:[{value:"PHP is Implicit",id:"php-is-implicit",children:[]},{value:"PHP is Unintuitive",id:"php-is-unintuitive",children:[]},{value:"PHP is Messy",id:"php-is-messy",children:[]},{value:"PHP is Inconsistent",id:"php-is-inconsistent",children:[]},{value:"PHP is Deliberately buggy",id:"php-is-deliberately-buggy",children:[]}]},{value:"T-Regx showcase",id:"t-regx-showcase",children:[{value:"T-Regx eliminates gotcha&#39;s",id:"t-regx-eliminates-gotchas",children:[]},{value:"T-Regx is clean and simple",id:"t-regx-is-clean-and-simple",children:[]},{value:"T-Regx is really smart with its exceptions",id:"t-regx-is-really-smart-with-its-exceptions",children:[]}]}],b={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This chapter highlights the differences, reasons and contrasts between T-Regx and PHP regular expressions.\nTo learn more about T-Regx, feel free to skip to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match"}),"Match a subject"),"."),Object(i.b)("p",null,"If you'd like to learn the reasons behind certain T-Regx feature, and know how it manages to supercede PHP\nregular expressions, read on."),Object(i.b)("h2",{id:"whats-wrong-with-php-regular-expressions"},"What's wrong with PHP Regular Expressions:"),Object(i.b)("p",null,"PHP regular expressions API is far from perfect. Here's only a handful of what's wrong with it:"),Object(i.b)("h3",{id:"php-is-implicit"},"PHP is Implicit"),Object(i.b)("p",null,"You are probably a PHP developer. I would like to get ",Object(i.b)("inlineCode",{parentName:"p"},"'Robert likes apples'"),". Can you tell me which is the correct signature\nfor this task?"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"preg_replace('/Bob/', 'Robert', 'Bob likes apples');    // pattern, replacement, subject\n// or\npreg_replace('/Bob/', 'Bob likes apples', 'Robert');    // pattern, subject, replacement\n// ??\n")),Object(i.b)("p",null,"Another try. Let's say you'd like to limit replacements. But you remember that there's a reference parameter ",Object(i.b)("inlineCode",{parentName:"p"},"&$count"),"\nsomewhere. Again, which is the correct signature?"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$limit = 1;\n\npreg_replace(?, ?, ?, $limit, $count);\n// or\npreg_replace(?, ?, ?, $count, $limit);\n// ??\n")),Object(i.b)("h3",{id:"php-is-unintuitive"},"PHP is Unintuitive"),Object(i.b)("p",null,"Programming languages are ",Object(i.b)("strong",{parentName:"p"},"tools")," created to solve problems. An experienced programmer ",Object(i.b)("strong",{parentName:"p"},"should")," be able to look\nat the code and tell what it does."),Object(i.b)("p",null,"Someone who doesn't know PHP regular expressions, can probably ask themselves:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preg_replace('//', $r, $s)")," - will this replace all occurrences? Or just one?"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preg_match('//', $subject)")," - will ",Object(i.b)("em",{parentName:"li"},"this")," match the first occurrence? Or all?"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preg_match_all('//', $subject);")," Ok, this will find all matches, so preg_match() only finds the first."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"preg_filter('//', $replacements, $subject)")," - who needs ",Object(i.b)("inlineCode",{parentName:"li"},"$replacements")," in ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," method?")),Object(i.b)("h4",{id:"whats-more"},"What's more"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Parameters:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Functions with 4, 5, 6 parameters (3-4 of which are optional)."),Object(i.b)("p",{parentName:"li"},"It means that, whoever looks at the code has to ",Object(i.b)("strong",{parentName:"p"},"remember")," (or to look up) what those optional values are and in which order.")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Return types:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Array of arrays, which contain either a ",Object(i.b)("inlineCode",{parentName:"li"},"string"),", ",Object(i.b)("inlineCode",{parentName:"li"},"null"),", or an array of ",Object(i.b)("inlineCode",{parentName:"li"},"null"),"s, ",Object(i.b)("inlineCode",{parentName:"li"},"strings")," and ",Object(i.b)("inlineCode",{parentName:"li"},"int"),"s.")))),Object(i.b)("h3",{id:"php-is-messy"},"PHP is Messy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE")),' is a nightmare! It changes return type from "an array of arrays" to "an array of arrays of arrays".'),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_SET_ORDER"))," / ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_PATTERN_ORDER")),' change return values. It\'s either "groups of matches" or "matches of groups",\ndepending on the flag.')),Object(i.b)("p",null,"The worst part? You find yourself looking at this code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"return $match[1][0];\n")),Object(i.b)("p",null,"having no idea what. it. does. You have to see whether you're using ",Object(i.b)("inlineCode",{parentName:"p"},"preg_match()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"preg_match_all()")," and\nwhether any of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_SET_ORDER")),"/",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_PATTERN_ORDER")),"/",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE"))," were used."),Object(i.b)("p",null,"And to refactor it, later? Replace ",Object(i.b)("inlineCode",{parentName:"p"},"$match[1]")," with ",Object(i.b)("inlineCode",{parentName:"p"},"array_map($match, ...)"),". Good luck. With that."),Object(i.b)("h3",{id:"php-is-inconsistent"},"PHP is Inconsistent"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"How do you get results and the count of the results?"),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"th"},"preg_match()")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"th"},"preg_replace()")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Count"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return type"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argument reference")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Values"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Argument reference"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Return type")))),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"$replaced = preg_replace($p, $r, $s, $count);\n$count    = preg_match($p, $s, $matched);\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If you use ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/pcre.constants.php"}),Object(i.b)("inlineCode",{parentName:"a"},"PREG_OFFSET_CAPTURE"))," and your subject isn't matched with the pattern; these are the results:"),Object(i.b)("table",{parentName:"li"},Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Success"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"th"},"preg_match()")),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"th"},"preg_match_all()")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"true")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"['match', 2]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"['match', 2']"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"false")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"''")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"[null, -1]")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"preg_quote()")," quotes different characters for different PHP versions.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"preg_match()")," signature states it returns ",Object(i.b)("inlineCode",{parentName:"p"},"int"),", but it returns ",Object(i.b)("inlineCode",{parentName:"p"},"false")," on error.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"PHP ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://php.net/manual/en/function.preg-filter.php"}),"documentation")," promises that"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("inlineCode",{parentName:"p"},"preg_filter()")," is identical to ",Object(i.b)("inlineCode",{parentName:"p"},"preg_replace()")," except it only returns the (possibly transformed) subjects...")),Object(i.b)("p",{parentName:"li"},"but ",Object(i.b)("inlineCode",{parentName:"p"},"preg_filter()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"preg_replace()")," actually return ",Object(i.b)("em",{parentName:"p"},"completely")," different values for ",Object(i.b)("strong",{parentName:"p"},"the same")," parameters.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Found ",Object(i.b)("inlineCode",{parentName:"p"},"$matches")," received from ",Object(i.b)("inlineCode",{parentName:"p"},"preg_match()")," have completely different structure than those\nfrom ",Object(i.b)("inlineCode",{parentName:"p"},"preg_replace_callback()")," (so any function you have for one, won't work with the other)."))),Object(i.b)("h3",{id:"php-is-deliberately-buggy"},"PHP is Deliberately buggy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"preg_match()")," and ",Object(i.b)("inlineCode",{parentName:"p"},"preg_match_all()")," return either:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"(int) x")," - a number of matches, if a match is found"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"(int) 0")," - if no matches are found"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"(bool) false")," - if a runtime error occurred")),Object(i.b)("p",{parentName:"li"},"So if you do just this:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"if (preg_match('//', '')) {\n")),Object(i.b)("p",{parentName:"li"}," there's no way of knowing whether your pattern is ",Object(i.b)("em",{parentName:"p"},"incorrect")," or whether it's correct, but your subject isn't\nmatched by your pattern. "),Object(i.b)("p",{parentName:"li"}," You need to ",Object(i.b)("strong",{parentName:"p"},"remember")," to add an explicit ",Object(i.b)("inlineCode",{parentName:"p"},"!== false")," check each time you use it.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"All ",Object(i.b)("inlineCode",{parentName:"p"},"preg_*")," functions only return ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"/",Object(i.b)("inlineCode",{parentName:"p"},"null"),"/",Object(i.b)("inlineCode",{parentName:"p"},"[]")," on error. You have to remember to call ",Object(i.b)("inlineCode",{parentName:"p"},"preg_last_error()")," to get\nsome insight in the nature of your error. Of course, it only returns ",Object(i.b)("inlineCode",{parentName:"p"},"int"),"! So you have to look up that ",Object(i.b)("inlineCode",{parentName:"p"},"4"),' is\n"invalid utf8 sequence" and ',Object(i.b)("inlineCode",{parentName:"p"},"2"),' is "backtrack limit exceeded".')),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"However, ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"-check and ",Object(i.b)("inlineCode",{parentName:"p"},"preg_last_error()")," can only save you from runtime errors. So called compile errors don't\nwork that way and require either setting a custom error handler (bad idea) or read and clear just one of those errors\n(good luck with errors in ",Object(i.b)("inlineCode",{parentName:"p"},"preg_replace_callback()")," for example).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"preg_filter()")," for arrays returns ",Object(i.b)("inlineCode",{parentName:"p"},"[]")," if an error occurred; even though ",Object(i.b)("inlineCode",{parentName:"p"},"[]")," is the perfectly valid result for this\nfunction. For example, it could have filtered out all values or its input was an empty array right from the beginning.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"For certain parameter types, some PCRE methods (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"preg_filter()"),") raise ",Object(i.b)("strong",{parentName:"p"},"fatal errors")," terminating the application."))),Object(i.b)("h2",{id:"t-regx-showcase"},"T-Regx showcase"),Object(i.b)("p",null,"That's why T-Regx happened. It addresses all of PHP regular expressions flaws."),Object(i.b)("h3",{id:"t-regx-eliminates-gotchas"},"T-Regx eliminates gotcha's"),Object(i.b)("p",null,"If you try to use an invalid regular expression in Java or JavaScript, you would probably get a ",Object(i.b)("inlineCode",{parentName:"p"},"SyntaxError")," exception\nand you'd be forced to handle it. Such things don't happen in PHP regular expressions."),Object(i.b)("p",null,"T-Regx always throws an exception and never issues any warnings, fatals, errors or notices."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"try {\n    return pattern('Foo')->match('Bar')->all();\n}\ncatch (PatternException $exception) {\n    // handle the error\n}\n")),Object(i.b)("p",null,"Furthermore, T-Regx throws different exceptions for different errors:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"SubjectNotMatchedException"),Object(i.b)("li",{parentName:"ul"},"MalformedPatternException"),Object(i.b)("li",{parentName:"ul"},"FlagNotAllowedException"),Object(i.b)("li",{parentName:"ul"},"GroupNotMatchedException"),Object(i.b)("li",{parentName:"ul"},"NonexistentGroupException"),Object(i.b)("li",{parentName:"ul"},"InvalidReplacementException"),Object(i.b)("li",{parentName:"ul"},"InvalidReturnValueException"),Object(i.b)("li",{parentName:"ul"},"CatastrophicBacktrackingPregException"),Object(i.b)("li",{parentName:"ul"},"RecursionLimitPregException"),Object(i.b)("li",{parentName:"ul"},"Utf8OffsetPregException")),Object(i.b)("p",null,"They all extend ",Object(i.b)("inlineCode",{parentName:"p"},"PatternException")," though."),Object(i.b)("p",null,"Further, furthermore, if you pass an invalid data type to any of the T-Regx methods, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.invalidargumentexception.php"}),Object(i.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))," is thrown."),Object(i.b)("h3",{id:"t-regx-is-clean-and-simple"},"T-Regx is clean and simple"),Object(i.b)("p",null,"You will not find arrays, of arrays, of arrays in T-Regx API. Each functionality has a dedicated set of methods."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern($pattern)->match($subject)->first(function (Match $match) {\n    $match->offset();           // offset of a matched occurrence\n    $match->group(2)->offset(); // offset of a matched capturing group\n    $match->group(-3);          // throws \\InvalidArgumentException\n});\n")),Object(i.b)("p",null,"Furthermore, the API between matching and replacing is the same:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"// Matching\n\npattern($pattern)->match($subject)->first(function (Match $match) {\n    $match->offset();            // exactly the same interface\n    $match->group(2)->offset();\n    $match->group(-3);\n});\n\n// Replacing\n\npattern($pattern)->replace($subject)->first()->callback(function (Match $match) {\n    $match->offset();            // exactly the same interface\n    $match->group(2)->offset(); \n    $match->group(-3);\n});\n")),Object(i.b)("p",null,"Read more about ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(i.b)("inlineCode",{parentName:"a"},"Match")," details"),"."),Object(i.b)("h3",{id:"t-regx-is-really-smart-with-its-exceptions"},"T-Regx is really smart with its exceptions"),Object(i.b)("p",null,"We really did put a lot of thoughts to make T-Regx secure, so for example these code snippets aren't a big deal:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace($subject)->all()->callback(function (Match $match) {\n    try {\n        return pattern('intentionally (( invalid {{ pattern ')->match('Foo')->first();\n    }\n    catch (MalformedPatternException $ex) {\n        // it's all good and dandy\n        // this exception $ex here, won't interfere with the pattern \"outside\"\n        return $match;\n    }\n});\n")),Object(i.b)("p",null,"In other words, warnings and flags raised by the inner ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->match()")," invalid call will be represented as\n",Object(i.b)("inlineCode",{parentName:"p"},"MalformedPatternException"),", and won't interfere with the outer ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->replace()"),"."))}o.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=o(a),u=n,h=s["".concat(l,".").concat(u)]||s[u]||m[u]||i;return a?r.a.createElement(h,c(c({ref:t},b),{},{components:a})):r.a.createElement(h,c({ref:t},b))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);