(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{162:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return h}));var n=a(2),c=a(6),r=(a(0),a(173)),o=a(174),s={id:"match-offsets",title:"Match offsets"},i={unversionedId:"match-offsets",id:"match-offsets",isDocsHomePage:!1,title:"Match offsets",description:"There are several ways to read offsets of your matched occurrences and your capturing groups.",source:"@site/../docs/match-offsets.mdx",slug:"/match-offsets",permalink:"/docs/match-offsets",version:"current",lastUpdatedAt:1586708537,sidebar:"docs",previous:{title:"Capturing groups",permalink:"/docs/match-groups"},next:{title:"Inline groups",permalink:"/docs/match-group"}},p=[{value:"Using Match details",id:"using-match-details",children:[]},{value:"Using inline <code>offsets()</code> method",id:"using-inline-offsets-method",children:[{value:"Many",id:"many",children:[]},{value:"One",id:"one",children:[]}]},{value:"Group offsets",id:"group-offsets",children:[{value:"Using Match details",id:"using-match-details-1",children:[]},{value:"Using inline <code>offsets()</code> method",id:"using-inline-offsets-method-1",children:[]}]}],b={rightToc:p};function h(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are several ways to read offsets of your matched occurrences and your capturing groups."),Object(r.b)("h2",{id:"using-match-details"},"Using ",Object(r.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details"),Object(r.b)("p",null,"If you use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details object (like the one passed to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(r.b)("inlineCode",{parentName:"a"},"first()")),", ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-for-each"}),Object(r.b)("inlineCode",{parentName:"a"},"forEach()"))," or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(r.b)("inlineCode",{parentName:"a"},"map()"))," callback) you can just use\n",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(r.b)("inlineCode",{parentName:"a"},"offset()"))," method."),Object(r.b)(o.a,{tregx:"pattern('\\d+')->match('I was born in 1996')->first(function (Match $match) {\n    return 'Match was found at ' . $match->offset();\n});",php:"preg::match_all('/\\d+/', 'I was born in 1996', $match, PREG_OFFSET_CAPTURE);\nreturn 'Match was found at ' . $match[0][0][1];",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"'Match was found at 14'"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Remember that ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(r.b)("inlineCode",{parentName:"a"},"offset()"))," is UTF-8 safe and returns offsets in characters, not bytes.\nFor bytes, consider using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(r.b)("inlineCode",{parentName:"a"},"byteOffset()"))," method.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(r.b)("inlineCode",{parentName:"a"},"offset()"))," with methods like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.mb-substr.php"}),Object(r.b)("inlineCode",{parentName:"a"},"mb_substr()")),", and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(r.b)("inlineCode",{parentName:"a"},"byteOffset()"))," with methods like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.substr.php"}),Object(r.b)("inlineCode",{parentName:"a"},"substr()")),".")),Object(r.b)("h2",{id:"using-inline-offsets-method"},"Using inline ",Object(r.b)("inlineCode",{parentName:"h2"},"offsets()")," method"),Object(r.b)("p",null,"Use inline methods to simply return the offsets - when there is no need for using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details or any other operations."),Object(r.b)("h3",{id:"many"},"Many"),Object(r.b)("p",null,"If you only want to get offsets of your matches, use ",Object(r.b)("inlineCode",{parentName:"p"},"offsets()->all()"),"."),Object(r.b)(o.a,{tregx:"pattern('[0-9]+')->match(\"I'm 19 years old. I was born in 1999, May 12\")->offsets()->all();",php:"preg::match_all('/[0-9]+/', \"I'm 19 years old. I was born in 1999, May 12\", $matches, PREG_OFFSET_CAPTURE);\nreturn array_map(function (array $match) {\n    return $match[1];\n}, $matches[0]);",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"[4, 32, 42]"),Object(r.b)("p",null,"You can also limit your matches."),Object(r.b)(o.a,{tregx:"pattern('[0-9]+')->match(\"I'm 19 years old. I was born in 1999, May 12\")->offsets()->only(2);",php:"preg::match_all('/[0-9]+/', \"I'm 19 years old. I was born in 1999, May 12\", $matches, PREG_OFFSET_CAPTURE);\nreturn array_slice(array_map(function (array $match) {\n    return $match[1];\n}, $matches[0]), 0, 2);",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"[4, 32]"),Object(r.b)("h3",{id:"one"},"One"),Object(r.b)("p",null,"To only get offset of the first occurrence of a matched pattern, call ",Object(r.b)("inlineCode",{parentName:"p"},"offsets()->first()"),"."),Object(r.b)(o.a,{tregx:"pattern('\\d+')->match(\"I was born in 1999\")->offsets()->first();",php:"preg::match('/[0-9]+/', \"I was born in 1999\", $match, PREG_OFFSET_CAPTURE);\nif ($match) {\n    return $match[0][1];\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"14"),Object(r.b)("p",null,"As any other ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(r.b)("inlineCode",{parentName:"a"},"first()"))," method, it throws ",Object(r.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," if the subject isn't matched by your pattern."),Object(r.b)("h2",{id:"group-offsets"},"Group offsets"),Object(r.b)("p",null,"In a similar manner you can get offsets of your capturing groups, either using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details or an inline method."),Object(r.b)("p",null,"These two snippets below are equal to each other."),Object(r.b)("h3",{id:"using-match-details-1"},"Using ",Object(r.b)("a",Object(n.a)({parentName:"h3"},{href:"/docs/match-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match"))," details"),Object(r.b)(o.a,{tregx:"pattern('(?<capital>[A-Z])[a-z]+')->match('my name is John Cena')->first(function (Match $match) {\n    return $match->group('capital')->offset();\n});",php:"if (preg::match('/(?<capital>[A-Z])[a-z]+/', 'my name is John Cena', $match, PREG_OFFSET_CAPTURE)) {\n\n    if (array_key_exists('capital', $match)) {\n        if ($match['capital'][1] === -1) {\n            throw new GroupNotMatchedException('capital');\n        }\n        return $match['capital'][1];\n    }\n\n    // preg_match() trims trailing empty elements, so additional checks are needed\n    // if there's no group key - the group is either un-matched or non-existent\n    if (validateGroupExists('capital', $match)) {\n        throw new GroupNotMatchedException('capital');\n    } else {\n        throw new NonexistentGroupException('capital');\n    }\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"11"),Object(r.b)("p",null,"Can also be written as..."),Object(r.b)("h3",{id:"using-inline-offsets-method-1"},"Using inline ",Object(r.b)("inlineCode",{parentName:"h3"},"offsets()")," method"),Object(r.b)(o.a,{tregx:"pattern('(?<capital>[A-Z])[a-z]+')->match('my name is John Cena')->group('capital')->offsets()->first();",php:"if (preg::match('/(?<capital>[A-Z])[a-z]+/', 'my name is John Cena', $match, PREG_OFFSET_CAPTURE)) {\n\n    if (array_key_exists('capital', $match)) {\n        if ($match['capital'][1] === -1) {\n            throw new GroupNotMatchedException('capital');\n        }\n        return $match['capital'][1];\n    }\n\n    // preg_match() trims trailing empty elements, so additional checks are needed\n    // if there's no group key - the group is either un-matched or non-existent\n    if (validateGroupExists('capital', $match)) {\n        throw new GroupNotMatchedException('capital');\n    } else {\n        throw new NonexistentGroupException('capital');\n    }\n}\nthrow new SubjectNotMatchedException();",mdxType:"CodeTabs"}),Object(r.b)(o.b,{mdxType:"Result"},"11"),Object(r.b)("p",null,"Both ",Object(r.b)("inlineCode",{parentName:"p"},"offsets()->first()")," and ",Object(r.b)("inlineCode",{parentName:"p"},"group()->offsets()->first()")," throw ",Object(r.b)("inlineCode",{parentName:"p"},"SubjectNotMatchedException")," if the subject isn't\nmatched by your pattern."),Object(r.b)("p",null,"Also, both ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups#group-details"}),Object(r.b)("inlineCode",{parentName:"a"},"Match.group()"))," details and inline ",Object(r.b)("inlineCode",{parentName:"p"},"match()->group()->offsets()")," throw ",Object(r.b)("inlineCode",{parentName:"p"},"GroupNotMatchedException"),", when used with an unmatched group."))}h.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(0),c=a.n(n),r=a(177),o=a(178),s=a(180),i=a(4),p=a(175),b=a(48),h=a.n(b),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){return c.a.createElement("div",{className:h.a.code},c.a.createElement(p.a,{className:"language-"+this.language},this.code))},Object(s.a)(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(c.a.Component),d=function(e){var t=e.tregx,a=e.php,n=[t?{label:"T-Regx",value:"t-regx"}:{},a?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return c.a.createElement(r.a,{defaultValue:"t-regx",values:n},t&&c.a.createElement(o.a,{value:"t-regx"},c.a.createElement(l,null,t)),a&&c.a.createElement(o.a,{value:"php"},c.a.createElement(l,null,a)))},m=a(49),u=a.n(m),f=function(e){var t=e.text,a=e.children;return c.a.createElement("div",{className:u.a.result},c.a.createElement(l,{language:t?"text":"php"},a))}}}]);