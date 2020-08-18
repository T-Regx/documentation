(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(2),r=a(6),i=(a(0),a(161)),p=a(162),l={id:"valid",title:"Validate a pattern"},o={unversionedId:"valid",id:"valid",isDocsHomePage:!1,title:"Validate a pattern",description:"This chapter doesn't contain PHP code snippets, because PHP PCRE doesn't provide a way to validate patterns.",source:"@site/..\\docs\\valid.mdx",permalink:"/docs/valid",lastUpdatedAt:1586367925,sidebar:"docs",previous:{title:"Quote regular expression",permalink:"/docs/quote"},next:{title:"Split a string",permalink:"/docs/split"}},s=[],d={rightToc:s};function c(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This chapter doesn't contain ",Object(i.b)("inlineCode",{parentName:"p"},"PHP")," code snippets, because PHP PCRE doesn't provide a way to validate patterns.")),Object(i.b)("p",null,"You can check whether a pattern is valid with ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," method."),Object(i.b)(p.a,{tregx:"pattern('I am a valid pattern')->valid();",mdxType:"CodeTabs"}),Object(i.b)(p.b,{mdxType:"Result"},"true"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Remember, ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()->valid()")," doesn't throw any exception nor issues any warnings. It only returns ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"/",Object(i.b)("inlineCode",{parentName:"p"},"false"),".")),Object(i.b)(p.a,{tregx:"pattern('I am an (( invalid }} pattern')->valid();",mdxType:"CodeTabs"}),Object(i.b)(p.b,{mdxType:"Result"},"false"),Object(i.b)("h1",{id:"old-school-patterns"},"Old-school patterns"),Object(i.b)("p",null,"Undelimited patterns can be validated with ",Object(i.b)("inlineCode",{parentName:"p"},"pattern()"),"/",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::of()"),". To validate old-school patterns (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"/Hello/i"),"), use ",Object(i.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),":"),Object(i.b)(p.a,{tregx:"Pattern::pcre('/I am an valid pattern/m')->valid();",mdxType:"CodeTabs"}),Object(i.b)(p.b,{mdxType:"Result"},"true"))}c.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n),i=a(165),p=a(166),l=a(164),o=a(47),s=a.n(o);class d extends r.a.Component{render(){return r.a.createElement("div",{className:s.a.code},r.a.createElement(l.a,{className:"language-"+this.language},this.code))}get language(){return this.props.language||"php"}get code(){let e=this.props.children;if("string"==typeof e)return e;if(Array.isArray(e)&&e.every(e=>"string"==typeof e))return e.join("");throw console.log(this.props.children),"Unexpected child of <Code>"}}class c extends r.a.Component{render(){return r.a.createElement(i.a,{defaultValue:"t-regx",values:this.values,groupId:"language"},this.props.tregx&&r.a.createElement(p.a,{value:"t-regx"},r.a.createElement(d,null,this.props.tregx)),this.props.php&&r.a.createElement(p.a,{value:"php"},r.a.createElement(d,null,this.props.php)))}get values(){return[this.props.tregx?{label:"T-Regx",value:"t-regx"}:{},this.props.php?{label:"PHP",value:"php"}:{}].filter(e=>e.value)}}var u=a(48),b=a.n(u),m=({text:e,children:t})=>r.a.createElement("div",{className:b.a.result},r.a.createElement(d,{language:e?"text":"php"},t))}}]);