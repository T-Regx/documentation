(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{109:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return p})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return s}));var n=t(2),r=t(6),l=(t(0),t(181)),c=t(182),i={id:"replace-callback",title:"Replace with callback"},p={unversionedId:"replace-callback",id:"replace-callback",isDocsHomePage:!1,title:"Replace with callback",description:"After replace(), you need to explicitly use one of first()/all()/only(int) methods, to express how many",source:"@site/../docs/replace-callback.mdx",slug:"/replace-callback",permalink:"/docs/replace-callback",version:"current",lastUpdatedAt:1611615338,sidebar:"docs",previous:{title:"Replace with a constant value",permalink:"/docs/replace-with"},next:{title:"Replace by group",permalink:"/docs/replace-by-group"}},o=[{value:"Replace first",id:"replace-first",children:[]},{value:"Replace multiple",id:"replace-multiple",children:[{value:"<code>all()</code>",id:"all",children:[]},{value:"<code>only()</code>",id:"only",children:[]}]},{value:"Return types",id:"return-types",children:[{value:"Explicit string",id:"explicit-string",children:[]}]},{value:"Variable callbacks",id:"variable-callbacks",children:[]}],b={rightToc:o};function s(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"After ",Object(l.b)("inlineCode",{parentName:"p"},"replace()"),", you need to explicitly use one of ",Object(l.b)("inlineCode",{parentName:"p"},"first()"),"/",Object(l.b)("inlineCode",{parentName:"p"},"all()"),"/",Object(l.b)("inlineCode",{parentName:"p"},"only(int)")," methods, to express how many\nreplacements should be done."),Object(l.b)("p",null,"Callback passed to ",Object(l.b)("inlineCode",{parentName:"p"},"replace()->callback()")," will only be invoked:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"for ",Object(l.b)("inlineCode",{parentName:"li"},"all()")," - as many times as there are occurrences matched in the subject."),Object(l.b)("li",{parentName:"ul"},"for ",Object(l.b)("inlineCode",{parentName:"li"},"only(int)")," - the same as ",Object(l.b)("inlineCode",{parentName:"li"},"all()"),", but up to an ",Object(l.b)("inlineCode",{parentName:"li"},"int")," limit."),Object(l.b)("li",{parentName:"ul"},"for ",Object(l.b)("inlineCode",{parentName:"li"},"first()")," - once if an occurrence is matched; or not at all if it's not.")),Object(l.b)("h2",{id:"replace-first"},"Replace first"),Object(l.b)(c.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->first()->callback(function (Detail $detail) {\n    return strtoupper($detail->text());\n});",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace_callback('/[A-Z][a-z]+/', function (array $match) {\n    return strtoupper($match[0]);\n}, $subject, 1);",mdxType:"CodeTabs"}),Object(l.b)(c.b,{mdxType:"Result"},"'I like scandinavia: SWEDEN, Norway and Denmark'"),Object(l.b)("h2",{id:"replace-multiple"},"Replace multiple"),Object(l.b)("h3",{id:"all"},Object(l.b)("inlineCode",{parentName:"h3"},"all()")),Object(l.b)("p",null,"Replacing all matched occurrences is the most common use-case:"),Object(l.b)(c.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npattern('[A-Z][a-z]+')->replace($subject)->all()->callback(function (Detail $m) {\n    return strtoupper($m->text());\n});",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\npreg::replace_callback('/[A-Z][a-z]+/', function (array $m) {\n    return strtoupper($m[0]);\n}, $subject);",mdxType:"CodeTabs"}),Object(l.b)(c.b,{mdxType:"Result"},"'I like scandinavia: SWEDEN, NORWAY and DENMARK'"),Object(l.b)("h3",{id:"only"},Object(l.b)("inlineCode",{parentName:"h3"},"only()")),Object(l.b)("p",null,"You can also limit the amount of replacements done with ",Object(l.b)("inlineCode",{parentName:"p"},"only()"),"."),Object(l.b)(c.a,{tregx:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\n// In T-Regx, Detail can be cast to string, returning the whole match\npattern('[A-Z][a-z]+')->replace($subject)->only(2)->callback('strtoupper');",php:"$subject = 'I like scandinavia: Sweden, Norway and Denmark';\n\n// In Vanilla, $match is an array, and arrays won't cast to string that easily\npreg::replace_callback('/[A-Z][a-z]+/', function (array $match) {\n    // $match[0] can be an empty string, even if a group is not matched\n    return call_user_func('strtoupper', $match[0]);\n}, $subject, 2);",mdxType:"CodeTabs"}),Object(l.b)(c.b,{mdxType:"Result"},"'I like scandinavia: SWEDEN, NORWAY and Denmark'"),Object(l.b)("h2",{id:"return-types"},"Return types"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"replace()->callback()")," only accepts ",Object(l.b)("inlineCode",{parentName:"p"},"string"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Detail"))," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups"}),Object(l.b)("inlineCode",{parentName:"a"},"MatchGroup"))," as its return type."),Object(l.b)("p",null,"We believe that returning anything, that's not a string, ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Detail"))," or a group can ",Object(l.b)("strong",{parentName:"p"},"be a sign of a bug"),'!\nMoreover, converting them silently would break our "Explicity rule".'),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace(\"Apples are cool\")->first()->callback(function (Detail $detail) {\n    return 2;       // <- throws InvalidReturnValueException\n    return true;    // <- throws InvalidReturnValueException\n    return null;    // <- throws InvalidReturnValueException\n});\n")),Object(l.b)("p",null,"Only ",Object(l.b)("inlineCode",{parentName:"p"},"string"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Detail"))," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-groups"}),Object(l.b)("inlineCode",{parentName:"a"},"MatchGroup"))," are allowed."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('([A-Z])\\w+')->replace(\"Apples are cool\")->first()->callback(function (Detail $detail) {\n    return 'orange';         // string\n    return $detail;           // match\n    return $detail->group(1); // group\n});\n")),Object(l.b)("h3",{id:"explicit-string"},"Explicit string"),Object(l.b)("p",null,"If you'd like to replace an occurrence with a numeric value (for example ",Object(l.b)("inlineCode",{parentName:"p"},"'12'"),"), an empty string or ",Object(l.b)("inlineCode",{parentName:"p"},"'true'"),"/",Object(l.b)("inlineCode",{parentName:"p"},"'false'"),"\nliterals - just return them as ",Object(l.b)("inlineCode",{parentName:"p"},"string")," ",Object(l.b)("strong",{parentName:"p"},"explicitly"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-php"}),"pattern('\\w+')->replace(\"Apples are cool\")->first()->callback(function (Detail $detail) {\n    return strval(2);                          // ok\n    return true ? 'true' : 'false';            // ok\n    return null ? '' : $something;             // ok\n\n    return $detail->text();                     // ok\n    return (string) $detail;                    // ok\n    return $detail->group('captured')->text();  // ok, if group exists and was matched\n\n    return $detail;                             // ok\n    return $detail->group('captured');          // ok, if group exists and was matched\n});\n")),Object(l.b)("h2",{id:"variable-callbacks"},"Variable callbacks"),Object(l.b)("p",null,"You can call ",Object(l.b)("inlineCode",{parentName:"p"},"replace()->callback()")," for any valid PHP ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.php.net/manual/en/language.types.callable.php"}),Object(l.b)("inlineCode",{parentName:"a"},"callable"))," which accepts one string parameter (or no parameters)\nand returns ",Object(l.b)("inlineCode",{parentName:"p"},"string"),"."),Object(l.b)(c.a,{tregx:"pattern('\\w+')->replace('Apples are cool')->first()->callback('strtoupper');",php:"// This code is actually impossible in Vanilla-PHP.\n// In T-Regx, Detail can be cast to string - that's the matched text\n// In Vanilla, $match is an array, and arrays won't cast to string that easily\n\n// preg::replace_callback('/\\w+/', 'strtoupper', $subject, 1);\n\npreg::replace_callback('/\\w+/', function (array $match) {\n    return strtoupper($match[0]);\n}, 'Apples are cool', 1);",mdxType:"CodeTabs"}),Object(l.b)(c.b,{mdxType:"Result"},"'APPLES are cool'"),Object(l.b)("p",null,"In this example, ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/match-details"}),Object(l.b)("inlineCode",{parentName:"a"},"Detail"))," will be cast to string, which is the same as calling ",Object(l.b)("inlineCode",{parentName:"p"},"Detail.text()")," method."))}s.isMDXComponent=!0},182:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return j}));var n=t(0),r=t.n(n),l=t(185),c=t(186),i=t(187),p=t(4),o=t(183),b=t(48),s=t.n(b),u=function(e){function a(){return e.apply(this,arguments)||this}return Object(p.a)(a,e),a.prototype.render=function(){return r.a.createElement("div",{className:s.a.code},r.a.createElement(o.a,{className:"language-"+this.language},this.code))},Object(i.a)(a,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),a}(r.a.Component),d=function(e){var a=e.tregx,t=e.php,n=[a?{label:"T-Regx",value:"t-regx"}:{},t?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return r.a.createElement(l.a,{defaultValue:"t-regx",values:n},a&&r.a.createElement(c.a,{value:"t-regx"},r.a.createElement(u,null,a)),t&&r.a.createElement(c.a,{value:"php"},r.a.createElement(u,null,t)))},m=t(49),h=t.n(m),j=function(e){var a=e.text,t=e.children;return r.a.createElement("div",{className:h.a.result},r.a.createElement(u,{language:a?"text":"php"},t))}}}]);