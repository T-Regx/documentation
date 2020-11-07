(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{174:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a),c=n(177),o=n(178),u=n(180),i=n(4),p=n(175),l=n(48),b=n.n(l),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:b.a.code},r.a.createElement(p.a,{className:"language-"+this.language},this.code))},Object(u.a)(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(r.a.Component),m=function(e){var t=e.tregx,n=e.php,a=[t?{label:"T-Regx",value:"t-regx"}:{},n?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return r.a.createElement(c.a,{defaultValue:"t-regx",values:a},t&&r.a.createElement(o.a,{value:"t-regx"},r.a.createElement(s,null,t)),n&&r.a.createElement(o.a,{value:"php"},r.a.createElement(s,null,n)))},d=n(49),h=n.n(d),j=function(e){var t=e.text,n=e.children;return r.a.createElement("div",{className:h.a.result},r.a.createElement(s,{language:t?"text":"php"},n))}},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),c=(n(0),n(173)),o=n(174),u={id:"count",title:"Count occurrences"},i={unversionedId:"count",id:"count",isDocsHomePage:!1,title:"Count occurrences",description:"Sometimes, you might stumble upon a situation where an amount of occurrences is needed, but not the occurrences",source:"@site/../docs/count.mdx",slug:"/count",permalink:"/docs/count",version:"current",lastUpdatedAt:1601852136,sidebar:"docs",previous:{title:"Automatic delimiters",permalink:"/docs/delimiters"},next:{title:"T-Regx Utilities",permalink:"/docs/utils"}},p=[{value:"Unmatched subjects",id:"unmatched-subjects",children:[]},{value:"Invalid",id:"invalid",children:[]},{value:"Performance",id:"performance",children:[]}],l={rightToc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Sometimes, you might stumble upon a situation where an amount of occurrences is needed, but not the occurrences\nthemselves. In that case, ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()->count()")," is perfect:"),Object(c.b)(o.a,{tregx:"return pattern('[aeiouy]')->count('Computer');",php:"return preg::match_all('/[aeiouy]/', 'Computer');",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"3"),Object(c.b)("p",null,"Also, ",Object(c.b)("inlineCode",{parentName:"p"},"MatchPattern")," is ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.countable.php"}),Object(c.b)("inlineCode",{parentName:"a"},"\\Countable")),", so you can use PHP build-in methods, like ",Object(c.b)("inlineCode",{parentName:"p"},"count()"),":"),Object(c.b)(o.a,{tregx:"$match = pattern('[aeiouy]')->match('Computer');\n\ncount($match);",php:"preg::match_all('/[aeiouy]/', 'Computer', $match);\n\ncount($match[0]);",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"3"),Object(c.b)("h2",{id:"unmatched-subjects"},"Unmatched subjects"),Object(c.b)("p",null,"If your pattern does not match the subject, ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," simply returns ",Object(c.b)("inlineCode",{parentName:"p"},"0"),"."),Object(c.b)(o.a,{tregx:"return pattern('[0-9]')->count('Computer');",php:"return preg::match_all('/[0-9]/', 'Computer');",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"0"),Object(c.b)("h2",{id:"invalid"},"Invalid"),Object(c.b)("p",null,"Every use of ",Object(c.b)("inlineCode",{parentName:"p"},"pattern()")," with an invalid pattern will cause ",Object(c.b)("inlineCode",{parentName:"p"},"MalformedPatternException"),"."),Object(c.b)(o.a,{tregx:"try {\n    pattern('[aeiouy')->count('Computer');       // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",php:"try {\n    preg::match_all('/[aeiouy/', 'Computer');    // malformed pattern\n}\ncatch (MalformedPatternException $ex) {\n    echo $ex->getMessage();\n}",mdxType:"CodeTabs"}),Object(c.b)(o.b,{text:!0,mdxType:"Result"},"Missing terminating ] for character class at offset 7"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"In ",Object(c.b)("inlineCode",{parentName:"p"},"PHP")," snippet, ",Object(c.b)("inlineCode",{parentName:"p"},"MalformedPatternException")," is thrown because SafeRegex ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match_all()")," was used, instead\nof ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.preg-match-all.php"}),Object(c.b)("inlineCode",{parentName:"a"},"preg_match_all()")),". Vanilla PHP ",Object(c.b)("inlineCode",{parentName:"p"},"preg_*()")," method don't throw exceptions.")),Object(c.b)("h2",{id:"performance"},"Performance"),Object(c.b)("p",null,"You might be tempted to use ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," to check whether your subject was matched by the pattern, since ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," doesn't\nreturn any matches..."),Object(c.b)(o.a,{tregx:"$count = pattern('[aeiouy]')->count('Computer');\nreturn $count > 0;",php:"$count = preg::match_all('/[aeiouy]/', 'Computer');\nreturn $count > 0;",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"true"),Object(c.b)("p",null,"...but that would be wasteful. You're much better off using\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(c.b)("inlineCode",{parentName:"a"},"test()")),"/",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/match#test-a-subject"}),Object(c.b)("inlineCode",{parentName:"a"},"fails()")),":"),Object(c.b)(o.a,{tregx:"return pattern('[aeiouy]')->test('Computer');",php:"return preg::match('/[aeiouy]/', 'Computer') > 0;",mdxType:"CodeTabs"}),Object(c.b)(o.b,{mdxType:"Result"},"true"),Object(c.b)("p",null,"This is because ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," will go through each occurrence of a pattern in a subject, counting it; whereas ",Object(c.b)("inlineCode",{parentName:"p"},"test()"),"\nwill return right after it finds the first occurrence."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Under the hood, ",Object(c.b)("inlineCode",{parentName:"p"},"count()")," uses ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match_all()"),", whereas ",Object(c.b)("inlineCode",{parentName:"p"},"test()"),"/",Object(c.b)("inlineCode",{parentName:"p"},"fails()"),"/ use ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match()"),".")))}b.isMDXComponent=!0}}]);