(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return p})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),c=(a(0),a(165)),l=a(166),p={id:"match-flat-map",title:"Map with keys (Flat map)"},i={unversionedId:"match-flat-map",id:"match-flat-map",isDocsHomePage:!1,title:"Map with keys (Flat map)",description:"There are cases when you would like to create a single list of all your matches. flatMap() is great for it.",source:"@site/..\\docs\\match-flat-map.mdx",permalink:"/docs/match-flat-map",lastUpdatedAt:1596999510,sidebar:"docs",previous:{title:"Map occurrences",permalink:"/docs/match-map"},next:{title:"Match details",permalink:"/docs/match-details"}},s=[{value:"Making a flat map",id:"making-a-flat-map",children:[]},{value:"Return types",id:"return-types",children:[]},{value:"Variable callbacks",id:"variable-callbacks",children:[]},{value:"Mapping with keys",id:"mapping-with-keys",children:[]},{value:"Duplicate keys",id:"duplicate-keys",children:[]}],o={rightToc:s};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"There are cases when you would like to create a single list of all your matches. ",Object(c.b)("inlineCode",{parentName:"p"},"flatMap()")," is great for it.\nIt other words it allows you to return one, zero or more elements from your mapping function."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"->map(function () {\n    return $value;        // Exactly one element\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{}),"->flatMap(function () {\n    return [...$values];  // Can be 1, many or even zero elements\n}\n")),Object(c.b)("h2",{id:"making-a-flat-map"},"Making a flat map"),Object(c.b)("p",null,"Method ",Object(c.b)("inlineCode",{parentName:"p"},"flatMap()")," is basically method ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(c.b)("inlineCode",{parentName:"a"},"map()")),", from which you can return multiple values."),Object(c.b)(l.a,{tregx:"pattern('\\w+')->match('I have 19 trains')->flatMap(function (Match $match) {\n    return [\n        $match->text(), strlen($match)\n    ];\n});",php:"preg::match_all(\"/\\w+/\", 'I have 19 trains', $matches);\nreturn array_merge(...array_map(function (string $text) {\n    return [\n        $text, strlen($text)\n    ];\n}, $matches[0]));",mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"['I', 1, 'have', 4, '19', 2, 'trains', 6]"),Object(c.b)("h2",{id:"return-types"},"Return types"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"flatMap()")," only accepts an ",Object(c.b)("inlineCode",{parentName:"p"},"array")," as its return type. Returning a single element and implicitly creating a one-element\narray under the hood would break our ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/whats-the-point#t-regx-to-the-rescue"}),'"Explicity rule"'),"."),Object(c.b)(l.a,{tregx:"pattern('\\w+')->match(\"I like trains\")->flatMap(function (Match $match) {\n    return $match;  // <- throws InvalidReturnValueException\n});",php:"preg::match_all(\"/\\w+/\", 'I like trains', $matches);\nreturn array_merge(...array_map(function (string $text) {\n    throw new InvalidReturnValueException(); // <- throws InvalidReturnValueException\n}, $matches[0]));",mdxType:"CodeTabs"}),Object(c.b)("p",null,"So always remember to return an array."),Object(c.b)(l.a,{tregx:"pattern('\\w+')->match(\"I like trains\")->flatMap(function (Match $match) {\n    return [$match->text()];  // ok\n});",php:"preg::match_all(\"/\\w+/\", 'I like trains', $matches);\nreturn array_merge(...array_map(function (string $text) {\n    return [$text];   // ok\n}, $matches[0]));",mdxType:"CodeTabs"}),Object(c.b)("h2",{id:"variable-callbacks"},"Variable callbacks"),Object(c.b)("p",null,"You can invoke ",Object(c.b)("inlineCode",{parentName:"p"},"flatMap()")," with any valid PHP ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(c.b)("inlineCode",{parentName:"a"},"callable")),", which accepts one or zero string parameters\n(just like ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-first"}),Object(c.b)("inlineCode",{parentName:"a"},"first()"))," and ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-map"}),Object(c.b)("inlineCode",{parentName:"a"},"map()")),") and returns ",Object(c.b)("inlineCode",{parentName:"p"},"array"),"."),Object(c.b)(l.a,{tregx:"pattern(\"[\\w']+\")->match(\"I'm 19 years old\")->flatMap('str_split');",php:"preg::match_all(\"/[\\w']+/\", \"I'm 19 years old\", $matches);\nreturn array_merge(...array_map('str_split', $matches[0]));",mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"['I', '\\'', 'm', '1', '9', 'y', 'e', 'a', 'r', 's', 'o', 'l', 'd']"),Object(c.b)("p",null,"The ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(c.b)("inlineCode",{parentName:"a"},"callable"))," passed to ",Object(c.b)("inlineCode",{parentName:"p"},"flatMap()")," must return an array. ",Object(c.b)("inlineCode",{parentName:"p"},"InvalidReturnValueException")," is thrown, otherwise."),Object(c.b)("h2",{id:"mapping-with-keys"},"Mapping with keys"),Object(c.b)("p",null,"Because ",Object(c.b)("inlineCode",{parentName:"p"},"flatMap()")," receives an array from its callback, it's possible to also return an associative array with\nspecified keys:"),Object(c.b)(l.a,{tregx:'pattern("\\w+")->match("Apples are cool")->flatMap(function (Match $match) {\n    return [$match->text() => $match->offset()];   // offset is UTF-8 safe\n});',php:'preg::match_all("/\\w+/", "Apples are cool", $matches, PREG_OFFSET_CAPTURE);\nreturn array_merge(...array_map(function (array $match) {\n    return [$match[0] => $match[1]];    // offset is given in bytes\n}, $matches[0]));',mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"[\n    'Apples' => 0,\n    'are'    => 7,\n    'cool'   => 11\n]"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Keep in mind that ",Object(c.b)("inlineCode",{parentName:"p"},"flatMap()")," uses ",Object(c.b)("inlineCode",{parentName:"p"},"array_merge()")," to flatten the results! So If you use ",Object(c.b)("inlineCode",{parentName:"p"},"int")," as a key, or even\na ",Object(c.b)("inlineCode",{parentName:"p"},"string")," with numeric values (like ",Object(c.b)("inlineCode",{parentName:"p"},"'19'"),") they will be ",Object(c.b)("strong",{parentName:"p"},"reindexed")," by ",Object(c.b)("inlineCode",{parentName:"p"},"array_merge()"),".")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"Match.offset()")," returns offset as a ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),"valid UTF-8 sequence"),", whereas ",Object(c.b)("inlineCode",{parentName:"p"},"preg::match_all"),"\ncounts them as ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),"bytes"),". To return bytes number with T-Regx as well,\nuse ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details#offsets"}),Object(c.b)("inlineCode",{parentName:"a"},"byteOffset()")),".")),Object(c.b)("h2",{id:"duplicate-keys"},"Duplicate keys"),Object(c.b)("p",null,"Duplicate keys are not allowed in PHP arrays, so they'll only appear once in the results."),Object(c.b)(l.a,{tregx:'pattern("\\w+")->match("Apples are cool")->flatMap(function (Match $match) {\n    return [\n        $match->text() => $match->offset(),   // offset is UTF-8 safe\n        \'subject\'      => $match->subject()\n    ];\n});',php:"$subject = 'Apples are cool';\npreg::match_all(\"/\\w+/\", $subject, $matches, PREG_OFFSET_CAPTURE);\nreturn array_merge(...array_map(function (array $match) use ($subject) {\n    return [\n        $match[0] => $match[1],   // offset is given in bytes\n        'subject' => $subject\n    ];\n}, $matches[0]));",mdxType:"CodeTabs"}),Object(c.b)(l.b,{mdxType:"Result"},"[\n    'Apples'  => 0,\n    'subject' => \"Apples are cool\",\n    'are'     => 7,\n    'cool'    => 11\n]"))}b.isMDXComponent=!0},166:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n),c=a(169),l=a(170),p=a(168),i=a(47),s=a.n(i);class o extends r.a.Component{render(){return r.a.createElement("div",{className:s.a.code},r.a.createElement(p.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){const e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}var b=({tregx:e,php:t})=>{const a=[e?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter(e=>e.value);return r.a.createElement(c.a,{defaultValue:"t-regx",values:a,groupId:"language"},e&&r.a.createElement(l.a,{value:"t-regx"},r.a.createElement(o,null,e)),t&&r.a.createElement(l.a,{value:"php"},r.a.createElement(o,null,t)))},m=a(48),u=a.n(m),h=({text:e,children:t})=>r.a.createElement("div",{className:u.a.result},r.a.createElement(o,{language:e?"text":"php"},t))}}]);