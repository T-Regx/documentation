(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(6),o=(a(0),a(179)),c=a(180),i={id:"match-iterator",title:"Iterator"},p={unversionedId:"match-iterator",id:"match-iterator",isDocsHomePage:!1,title:"Iterator",description:"T-Regx uses vanilla PHP [\\Iterator] with standard methods:",source:"@site/../docs/match-iterator.mdx",slug:"/match-iterator",permalink:"/docs/match-iterator",version:"current",lastUpdatedAt:1596999510,sidebar:"docs",previous:{title:"Filter an array",permalink:"/docs/filter"},next:{title:"Capturing groups - in depth",permalink:"/docs/match-groups-in-depth"}},l=[{value:"Iterator to array",id:"iterator-to-array",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"T-Regx uses vanilla PHP ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator"))," with standard methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"current()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"key(): scalar")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"next(): void")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"rewind(): void")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"valid(): bool"))),Object(o.b)("h2",{id:"iterator-to-array"},"Iterator to array"),Object(o.b)("p",null,"Method ",Object(o.b)("inlineCode",{parentName:"p"},"match()->getIterator()")," returns an implementation of PHP ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator"))," which you can be used with other ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator")),"\nmethods or within your own code, for example PHP methods ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.iterator-to-array.php"}),Object(o.b)("inlineCode",{parentName:"a"},"iterator_to_array()"))," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/function.iterator-count.php"}),Object(o.b)("inlineCode",{parentName:"a"},"iterator_count()")),"."),Object(o.b)(c.a,{tregx:"$iterator = pattern('\\w+')->match('Apples are cool')->getIterator();\n\nreturn $iterator->current()->text(); // Iterator contains \"Match\" details",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\n$iterator = new ArrayIterator($matches[0]);\n\nreturn $iterator->current();  // Iterator contains \"string\"",mdxType:"CodeTabs"}),Object(o.b)(c.b,{mdxType:"Result"},"'Apples'"),Object(o.b)("p",null,"It is useful with methods that only accept ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.php.net/manual/en/class.iterator.php"}),Object(o.b)("inlineCode",{parentName:"a"},"\\Iterator")),", and when an explicit iterator is needed. Using ",Object(o.b)("inlineCode",{parentName:"p"},"match()->getIterator()"),"\nfor methods that accept ",Object(o.b)("inlineCode",{parentName:"p"},"array")," is redundant :)"),Object(o.b)("p",null,"Also, please keep in mind that ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/match"}),Object(o.b)("inlineCode",{parentName:"a"},"match()"))," and other entities (such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/match-group"}),Object(o.b)("inlineCode",{parentName:"a"},"match()->group(string|int)"))," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/match-as-int"}),Object(o.b)("inlineCode",{parentName:"a"},"match()->asInt()")),")\nare also ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/match-for-each#vanilla-php-foreach"}),"iterable with ",Object(o.b)("inlineCode",{parentName:"a"},"foreach")),", making explicit usage of ",Object(o.b)("inlineCode",{parentName:"p"},"getIterator()")," even less likely."),Object(o.b)(c.a,{tregx:"foreach (pattern('\\w+')->match('Apples are cool') as $match) {\n    $text = $match->text();\n\n}",php:"preg::match_all('/\\w+/', 'Apples are cool', $matches);\nforeach ($matches[0] as $text) {\n    $text;\n\n}",mdxType:"CodeTabs"}))}b.isMDXComponent=!0},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r),o=a(184),c=a(185),i=a(186),p=a(4),l=a(181),s=a(48),b=a.n(s),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:b.a.code},n.a.createElement(l.a,{className:"language-"+this.language},this.code))},Object(i.a)(t,[{key:"language",get:function(){return this.props.language||"php"}},{key:"code",get:function(){var e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every((function(e){return"string"==typeof e})))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}]),t}(n.a.Component),u=function(e){var t=e.tregx,a=e.php,r=[t?{label:"T-Regx",value:"t-regx"}:{},a?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}));return n.a.createElement(o.a,{defaultValue:"t-regx",values:r},t&&n.a.createElement(c.a,{value:"t-regx"},n.a.createElement(h,null,t)),a&&n.a.createElement(c.a,{value:"php"},n.a.createElement(h,null,a)))},m=a(49),d=a.n(m),j=function(e){var t=e.text,a=e.children;return n.a.createElement("div",{className:d.a.result},n.a.createElement(h,{language:t?"text":"php"},a))}}}]);