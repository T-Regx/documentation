(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return we}));var a=n(0),r=n.n(a),l=n(175),c=n.n(l),s=n(163),o=n(167),i=n(172),m=n(169),p=n(181),h=n(164),u=n(170);function g(e){return Array.isArray(e)?e.join(""):e}const d=({children:e})=>r.a.createElement(u.a,{options:{overrides:{pre:E}}},g(e)),E=({children:e})=>r.a.createElement(h.a,e.props);var f=n(3),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){return r.a.createElement(r.a.Fragment,null)},t}(r.a.Component);class $ extends r.a.Component{render(){return r.a.createElement(r.a.Fragment,null)}}const w=(e,t)=>a.Children.map(e,(e,n)=>t(e.props,n));const v=({children:e})=>r.a.createElement(h.a,null,g(e)),y=({children:e})=>r.a.createElement(v,null,e.replace(/^<\?php\s+(use\s+[\w\\]+;\s+)*/,"").trim());var x=n(232),_=n.n(x),k=({index:e,body:t,children:n,selfExplanatory:l,onClick:c,onHover:s})=>{const[o,i]=Object(a.useState)(null),[m,p]=Object(a.useState)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Question #",e+1),t,r.a.createElement("ul",{className:_.a.answers},function(e,t){return w(e,(e,n)=>t(e,n))}(n,({correct:e,markdown:t,code:n,children:a,help:h,markdownHelp:u=!0,hoverCode:g},d)=>r.a.createElement(R,{key:d,selected:d===o,correct:null!==o?e:"Nice try, you hacker :D What else you got?",answered:null!==o,help:m&&h,hasHelp:!l,inactive:l?null!==o:m&&h,markdownHelp:u,onClick:()=>((e,t)=>{null===o?(c&&c(t),i(e)):p(!0)})(d,e),onMouseEnter:()=>s(g),onMouseLeave:()=>s(null)},r.a.createElement(C,{index:d,markdown:t,code:n,children:a})))))};const R=e=>{const{children:t,selected:n,correct:a,answered:l,inactive:s,hasHelp:o,help:i,markdownHelp:m}=e,{onClick:p,onMouseEnter:h,onMouseLeave:u}=e;return r.a.createElement("li",{onMouseEnter:h,onMouseLeave:u},r.a.createElement("div",{onClick:p,className:c()(_.a.listItem,{[_.a.selected]:n,[_.a.correct]:n&&a,[_.a.incorrect]:n&&!a,[_.a.alreadyAnswered]:l,[_.a.inactive]:s,[_.a.hasHelp]:o})},t,i&&r.a.createElement(T,{help:i,markdown:m})))},T=({help:e,markdown:t})=>{const n=Array.isArray(e)?e:[e];return r.a.createElement("div",{className:_.a.help},n.map(e=>r.a.createElement("p",null,"\u24d8 ",t?(e=>e.type===r.a.Fragment?r.a.createElement(d,{children:e.props.children}):r.a.createElement(d,{children:e}))(e):e)))},C=({index:e,markdown:t,children:n,code:a})=>{const l=t?r.a.createElement(d,null,n):n;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,function(e){return String.fromCharCode(e+65)}(e),".\xa0",l),a&&r.a.createElement("div",{style:{marginTop:"3px"}},r.a.createElement(y,null,a)))};var j=n(241),P=function(e){var t=e.value,n=e.children;return r.a.createElement(j.a,{withoutControls:!0,disableEdgeSwiping:!0,slideIndex:t,cellSpacing:700,slidesToShow:1,autoplay:!1,easing:"easeCubic",transitionMode:"scroll",slidesToScroll:"auto",frameOverflow:"visible",heightMode:"current",initialSlideWidth:100,wrapAround:!1,dragging:!1,swiping:!1,children:n})},N=({questions:e,slide:t,onSlideChange:n,firstSlide:l,lastSlide:c})=>r.a.createElement(P,{value:t},r.a.createElement("div",null,l),function(e,t){return w(e,(e,n)=>t(e,n))}(e,(t,l)=>{const{body:c,question:s,code:o,markdown:i,php:m,selfExplanatory:p,children:h,hoverExample:u}=t;let[g,E]=Object(a.useState)(o);const f=s&&(i?r.a.createElement(d,null,s):s),b=o&&(m?r.a.createElement(y,null,g||o):r.a.createElement(v,null,g||o));return r.a.createElement("div",{key:l},r.a.createElement(k,{index:l,body:c||r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,f),b),children:h,selfExplanatory:p,onHover:e=>E(e),onClick:t=>n(l,t,e.length-1===l)}))}),r.a.createElement("div",null,c)),S=n(239),W=n.n(S),H=({answers:e,current:t,onPointClick:n})=>{const[l,s]=Object(a.useState)(!1);return r.a.createElement("div",{className:W.a.container},e.map((a,l)=>r.a.createElement("span",{key:l,className:c()(W.a.openAnimation,{[W.a.dimmed]:l>t}),onClick:()=>{n(l),l<e.length-1&&s(!0)}},r.a.createElement(A,{value:a}))),e.length>1&&!l&&r.a.createElement("small",null,"Navigate back to see the explanations"))};const A=({value:e})=>"correct"===e?r.a.createElement("b",null,"\u2713"):"incorrect"===e?r.a.createElement("span",{style:{color:"#ff4242"}},"\u2718"):"pending"===e?r.a.createElement("span",null,"\u25cf"):"last"===e?r.a.createElement("span",null,"\u2605"):void 0;var O=({questions:e,openingSlide:t,finishSlide:n})=>{const[l,c]=Object(a.useState)(-1),[s,o]=Object(a.useState)({}),i=(e,t,n)=>{var a,r;o((a=s,r={[e]:t?"correct":"incorrect",[e+1]:n?"last":"pending"},Object.assign({},a,r)))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{questions:e,slide:l+1,onSlideChange:(e,t,n)=>{i(e,t,n),c(e+1)},firstSlide:t(()=>{c(0),o({0:"pending"})}),lastSlide:n()}),r.a.createElement(H,{answers:Object.values(s),current:l,onPointClick:e=>c(e)}))};const F=r.a.createElement(d,null,"There isn't a function to check if `$subject` matches the pattern. We can only perform a full match, and use the number of matched occurrences (`0` or more than `0`) to check if the subject was matched.");var I=r.a.createElement(b,{question:"Which function is used to check whether `$string` matches the pattern?",markdown:!0},r.a.createElement($,{markdown:!0,help:"There is no such function as `preg_find()`."},"`preg_find($pattern, $string);`"),r.a.createElement($,{markdown:!0,correct:!0,help:F,markdownHelp:!1},"`preg_match($pattern, $string);`"),r.a.createElement($,{markdown:!0,help:"There is no such function as `preg_test()`."},"`preg_test($pattern, $string);`"));var q=r.a.createElement(b,{question:"How many occurrences will `preg_match()` retrieve?",markdown:!0,code:"<?php\n$string = 'Joffrey, Cersei, IlynPayne, the Hound.';\n\n// highlight-next-line\nif (preg_match('/\\w+/', $string, $result)) {\n    $result === /* ... */;\n}\n",php:!0},r.a.createElement($,{code:"<?php\n$result === ['Joffrey'];\n",help:"`preg_match()` returns only the first match.",hoverCode:"<?php\n$string = 'Joffrey, Cersei, IlynPayne, the Hound.';\n\n// highlight-next-line\nif (preg_match('/\\w+/', $string, $result)) {\n    $result === ['Joffrey'];\n}\n",correct:!0},"Just the first"),r.a.createElement($,{code:"<?php\n$result === ['Joffrey', 'Cersei', 'IlynPayne', 'the Hound'];\n",help:"`preg_match()` returns only the first match. For all matches, use `preg_match_all()`.",hoverCode:"<?php\n$string = 'Joffrey, Cersei, IlynPayne, the Hound.';\n\n// highlight-next-line\nif (preg_match('/\\w+/', $string, $result)) {\n    $result === ['Joffrey', 'Cersei', 'IlynPayne', 'the Hound'];\n}\n"},"All of them"));const B=[r.a.createElement(r.a.Fragment,null,"In `preg_match()`, an *unmatched group* is represented as an empty string."),r.a.createElement(r.a.Fragment,null,'Empty, trailing values are also **trimmed** by `preg_match()`, but only from the end. That is,`["Foo", "Bar", ""]` would be trimmed to `["Foo", "Bar"]`; but `["Foo", "", "Bar"]` would not.'),r.a.createElement(r.a.Fragment,null,'The trailing happens, regardless of whether the value was really an empty string `""`, or it was *unmatched*, but represented as an empty string in the results (*unmatched* group is **indistinguishable** from a *matched* empty string).')],M=r.a.createElement(r.a.Fragment,null,"In `preg_match()`, *unmatched groups* are represented as *matched* empty strings (*unmatched* groups are **indistinguishable** from *matched* empty strings)."),D=[r.a.createElement(r.a.Fragment,null,"In `preg_match()`, an *unmatched group* is represented as an empty string."),r.a.createElement(r.a.Fragment,null,"It is possible to represent unmatched groups as `null`, but only with `preg_match_all()`, and only if `PREG_UNMATCHED_AS_NULL` is used. There is no similar functionality for `preg_match()` or `preg_replace()`.")];function G(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(d,null,"Given, an example result of `preg_match()`:")),r.a.createElement(y,null,"<?php\n// highlight-next-line\npreg_match('/cost: ([$\u20ac])(\\d+)?/', 'cost: $500', $match);\n$match == ['cost: $500', '$', '500'];\n"),r.a.createElement("p",null,r.a.createElement(d,null,e)),r.a.createElement(y,null,t))}var L=r.a.createElement(b,{body:G("How is an *optional*, unmatched group `#1` represented in `preg_match()`, when currency is missing?","<?php\n// highlight-next-line\npreg_match('/cost: ([$\u20ac])?(\\d+)/', 'cost: 500', $match);\n$match == ['cost: 500', /* here */, '500'];\n")},r.a.createElement($,{code:"<?php\n['cost: 500', '500']; // middle group missing\n",help:B},"Isn't present in the result"),r.a.createElement($,{code:"<?php\n['cost: 500', '', '500'];\n",help:M,correct:!0},"As an empty string"),r.a.createElement($,{code:"<?php\n['cost: 500', null, '500'];\n",help:D,markdown:!0},"As `null`"));const U=[r.a.createElement(r.a.Fragment,null,'In `preg_match()`, the *unmatched* group **would** be represented as an empty string, but empty, trailing values are also **trimmed** by `preg_match()`. That is, `["Foo", "Bar", ""]` is trimmed to `["Foo", "Bar"]`.'),r.a.createElement(r.a.Fragment,null,"In `preg_match()`, an *unmatched group* is represented as an empty string."),r.a.createElement(r.a.Fragment,null,'The trailing happens, regardless of whether the value was really an empty string `""`, or it was *unmatched*, but represented as an empty string in the results (*unmatched* group is **indistinguishable** from a *matched* empty string).')];var z=r.a.createElement(b,{body:G("How is an *optional*, unmatched group `#2` (last) represented in `preg_match()`, when currency is missing?","<?php\n// highlight-next-line\npreg_match('/cost: ([$\u20ac])?(\\d+)?/', 'cost: $', $match);\n$match == ['cost: $', '$', /* here */];\n")},r.a.createElement($,{code:"<?php\n['cost: 500', '$']; // last group missing\n",help:U,correct:!0},"Isn't present in the result"),r.a.createElement($,{code:"<?php\n['cost: 500', '$', ''];\n",help:U},"As an empty string"),r.a.createElement($,{code:"<?php\n['cost: 500', '$', null];\n",help:D,markdown:!0},"As `null`"));const V="`preg_match()` returns `false` on error.";var J=r.a.createElement(b,{markdown:!0,question:"This code will issue a warning, because the pattern is invalid. Afterwards, what will remain in `$result`?",code:"$result = preg_match('/invalid pattern{1,/', $subject);"},r.a.createElement($,{markdown:!0,help:V,hoverCode:"preg_match('/invalid pattern{1,/', $subject) === false;",correct:!0},"`$result === false`"),r.a.createElement($,{markdown:!0,help:V,hoverCode:"preg_match('/invalid pattern{1,/', $subject) === 0;"},"`$result === 0`"),r.a.createElement($,{markdown:!0,help:V,hoverCode:"preg_match('/invalid pattern{1,/', $subject) === '';"},"`$result === ''`"),r.a.createElement($,{markdown:!0,help:V,hoverCode:"preg_match('/invalid pattern{1,/', $subject) === [];"},"`$result === []`"),r.a.createElement($,{markdown:!0,help:V,hoverCode:"preg_match('/invalid pattern{1,/', $subject) === null;"},"`$result === null`"));const Q="`preg_match()` returns the number of matched occurrences, or `false` on error.";var Y=r.a.createElement(b,{question:"What's the value of `$result`?",markdown:!0,code:"$result = preg_match('/Foo (Bar)?/', $string);"},r.a.createElement($,{markdown:!0,help:Q},"`true` if matched, and `false` if not"),r.a.createElement($,{markdown:!0,help:Q,correct:!0},"`1` if matched, and `0` if not"),r.a.createElement($,{markdown:!0,help:"`preg_match()` doesn't return `true`. Only `0`/`1` on success, and `false` on error."},"`true`, because pattern is correct. To read the result, we need to pass `&$match`")),K=r.a.createElement(b,{question:"With `preg_match()`, is the result returned, or populated via `$ref`?",markdown:!0,code:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n/* here */ = preg_match('/\\w+/', $string, /* insert here */);\n\nif ($count > 0) {\n    echo \"Matched $count, first is: \" . $match[0];\n}\n",php:!0},r.a.createElement($,{markdown:!0,code:"<?php\n$match = preg_match(/* ... */ , $count);\n",hoverCode:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n$match     = preg_match('/\\w+/', $string, $count);\n\nif ($count > 0) {\n    echo \"Matched $count, first is: \" . $match[0];\n}\n",help:"`preg_match()` result is populated into `&$match` ref-argument; the `$count` is returned."},"Found matches are returned (`&$count` is passed as ref)"),r.a.createElement($,{markdown:!0,code:"<?php\n$count = preg_match(/* ... */ , $match);\n",correct:!0,hoverCode:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n$count     = preg_match('/\\w+/', $string, $match);\n\nif ($count > 0) {\n    echo \"Matched $count, first is: \" . $match[0];\n}\n",help:"`preg_match()` returns the number of matched occurrences (`0`, if none found; `1` if one found)."},"Amount is returned (found `&$matches` are passed as ref)"),r.a.createElement($,{markdown:!0,code:"<?php\n$success = preg_match(/* ... */ , $match, $count);\n",hoverCode:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n$success   = preg_match('/\\w+/', $string, $match, $count);\n\nif ($count > 0) {\n    echo \"Matched $count, first is: \" . $match[0];\n}\n",help:"`preg_match()` does return `false` on error, but `0`/`1` on unmatched/matched subject."},"Returns `true`/`false` on success/error (found `&$matches` and `&$count` are passed as ref)")),X="<?php\n$match === ['http://facebook.com', 'https://google.com'];\n",Z="<?php\n$match === [\n    ['http://facebook.com', 'http', 'facebook.com'],\n    ['https://google.com', 'https', 'google.com']\n];\n",ee="<?php\n$match === [\n    ['http://facebook.com', 'https://google.com'],\n    ['http', 'https'],\n    ['facebook.com', 'google.com']\n];\n",te="Result of `preg_match()`/`preg_match_all()`/`preg_replace()` is always an array (containing the match and its capturing groups), not just strings. It's an array for `preg_match()`/`preg_replace()` and an array of arrays for `preg_match_all()`.",ne="`preg_match_all()` groups results by matches, if flag `PREG_SET_ORDER` is used.",ae="`preg_match_all()` groups results by capturing groups, if flag `PREG_PATTERN_ORDER` is used, which is the default.",re=r.a.createElement(b,{question:"What's the value of `$match`?",markdown:!0,code:"<?php\n$subject = 'http://facebook.com and https://google.com';\n\n// highlight-next-line\npreg_match_all('#(https?)://(\\w+.com)#', $subject, $match);\n",php:!0},r.a.createElement($,{code:X,help:te},"Returns whole matches"),r.a.createElement($,{code:Z,help:ne},"Returns nested arrays, each grouped by matches"),r.a.createElement($,{code:ee,help:ae,correct:!0},"Returns nested arrays, each grouped by a capturing group")),le=r.a.createElement(b,{question:"What's the value of `$result`, with flag `PREG_PATTERN_ORDER`?",markdown:!0,code:"<?php\n$subject = 'http://facebook.com and https://google.com';\n\n// highlight-next-line\npreg_match_all('#(https?)://(\\w+.com)#', $subject, $match, PREG_PATTERN_ORDER);\n",php:!0},r.a.createElement($,{code:X,help:te},"Returns whole matches"),r.a.createElement($,{code:Z,help:ne},"Returns nested arrays, each grouped by matches"),r.a.createElement($,{code:ee,help:ae,correct:!0},"Returns nested arrays, each grouped by a capturing group")),ce=r.a.createElement(b,{question:"What's the value of `$result`, with flag `PREG_SET_ORDER`?",markdown:!0,code:"<?php\n$subject = 'http://facebook.com and https://google.com';\n\n// highlight-next-line\npreg_match_all('#(https?)://(\\w+.com)#', $subject, $match, PREG_SET_ORDER);\n",php:!0},r.a.createElement($,{code:X,help:te},"Returns whole matches"),r.a.createElement($,{code:Z,help:ne,correct:!0},"Returns nested arrays, each grouped by matches"),r.a.createElement($,{code:ee,help:ae},"Returns nested arrays, each grouped by a capturing group")),se=r.a.createElement(b,{question:"How many occurrences will be censored, if there are more than one link?",code:"<?php\n$subject = 'http://facebook.com and https://google.com';\n\n// highlight-next-line\npreg_replace('#https?://\\w+.com#', '***', $subject);\n",php:!0},r.a.createElement($,{help:"`preg_replace()` replaces all of the matched occurrences, unless `$limit` is used.",hoverCode:"<?php\n$subject = 'http://facebook.com and https://google.com';\n\n// highlight-next-line\npreg_replace('#https?://\\w+.com#', '***', $subject); // *** and https://google.com\n"},"Just the first"),r.a.createElement($,{help:"`preg_replace()` replaces all of the matched occurrences, unless `$limit` is used.",hoverCode:"<?php\n$subject = 'http://facebook.com and https://google.com';\n\n// highlight-next-line\npreg_replace('#https?://\\w+.com#', '***', $subject); // *** and ***\n",correct:!0},"All of them")),oe=r.a.createElement(b,{selfExplanatory:!0,question:"We need to censor the links (up to 10), and count the replacements. Which is the correct signature?",code:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n$maxLimit = 10;\n\n// highlight-next-line\npreg_replace('#https://\\w+.com#', '***', $string, /* here */);\n\necho \"We censored $count links!\";\n",php:!0},r.a.createElement($,{code:"<?php\npreg_replace('#https://\\w+.com#', '***', $string, $maxLimit, $count);\n",markdown:!0,hoverCode:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n$maxLimit = 10;\n\n// highlight-next-line\npreg_replace('#https://\\w+.com#', '***', $string, 10, $count);\n\necho \"We censored $count links!\";\n",correct:!0},"`/pattern/`, `$repl`, `$str`, `$maxLimit`, `&$count`"),r.a.createElement($,{code:"<?php\npreg_replace('#https://\\w+.com#', '***', $string, $count, $maxLimit);\n",markdown:!0,hoverCode:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n$maxLimit = 10;\n\n// highlight-next-line\npreg_replace('#https://\\w+.com#', '***', $string, $count, 10);\n\necho \"We censored $count links!\";\n"},"`/pattern/`, `$repl`, `$str`, `&$count`, `$maxLimit`")),ie=r.a.createElement(b,{selfExplanatory:!0,question:"We need to censor the external link. Which is the correct signature?",markdown:!0,code:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n\n// highlight-next-line\npreg_replace('#https://\\w+.com#', /* here */);\n",php:!0},r.a.createElement($,{code:"<?php\npreg_replace('#https://\\w+.com#', '***', $string);\n",markdown:!0,hoverCode:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n\n// highlight-next-line\npreg_replace('#https://\\w+.com#', '***', $string);\n",correct:!0},"`/pattern/`, `$replacement`, `$string`"),r.a.createElement($,{code:"<?php\npreg_replace('#https://\\w+.com#', $string, '***');\n",markdown:!0,hoverCode:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n\n// highlight-next-line\npreg_replace('#https://\\w+.com#', $string, '***');\n"},"`/pattern/`, `$string`, `$replacement`")),me="`preg_replace()` returns `null` on error.",pe=r.a.createElement(b,{markdown:!0,question:"This code will issue a warning, because the pattern is invalid. Afterwards, what will remain in `$result`?",code:"$result = preg_replace('/invalid pattern{1,/', $subject, '');"},r.a.createElement($,{markdown:!0,help:me,hoverCode:"preg_replace('/invalid pattern{1,/', $subject, '') === false;",correct:!0},"`$result === false`"),r.a.createElement($,{markdown:!0,help:me,hoverCode:"preg_replace('/invalid pattern{1,/', $subject, '') === 0;"},"`$result === 0`"),r.a.createElement($,{markdown:!0,help:me,hoverCode:"preg_replace('/invalid pattern{1,/', $subject, '') === '';"},"`$result === ''`"),r.a.createElement($,{markdown:!0,help:me,hoverCode:"preg_replace('/invalid pattern{1,/', $subject, '') === [];"},"`$result === []`"),r.a.createElement($,{markdown:!0,help:me,hoverCode:"preg_replace('/invalid pattern{1,/', $subject, '') === null;"},"`$result === null`")),he="`preg_replace()` returns the replaced string. Optionally, it populates `&$count` with the number of replacements done.",ue=[I,r.a.createElement(b,{question:"With `preg_replace()`, is the result returned, or populated via `$ref`?",markdown:!0,code:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n/* here */ = preg_replace('/\\s+/', '', $string, /* insert code here */);\n\nif ($count > 0) {\n    echo \"Replaced $count, result: $replaced\";\n}\n",php:!0},r.a.createElement($,{code:"<?php\n$replaced = preg_replace(/* ... */ , $count);\n",markdown:!0,help:he,hoverCode:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n$replaced  = preg_replace('/\\s+/', '', $string, $count);\n\nif ($count > 0) {\n    echo \"Replaced $count, result: $replaced\";\n}\n",correct:!0},"New string is returned (`&$count` is passed as ref)"),r.a.createElement($,{code:"<?php\n$count = preg_replace(/* ... */ , $replaced);\n",markdown:!0,help:he,hoverCode:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n$count     = preg_replace('/\\s+/', '', $string, $replaced);\n\nif ($count > 0) {\n    echo \"Replaced $count, result: $replaced\";\n}\n"},"Amount is returned (new `&$string` is passed as ref)"),r.a.createElement($,{code:"<?php\n$success = preg_replace(/* ... */ , $replaced, $count);\n",markdown:!0,help:"`preg_replace()` returns `null` on error, unlike `preg_match()` which returns `false`. It returns replaced `$string` on success.",hoverCode:"<?php\n$string = 'Welcome to my website';\n\n// highlight-next-line\n$success   = preg_replace('/\\s+/', '', $string, $replaced, $count);\n\nif ($count > 0) {\n    echo \"Replaced $count, result: $replaced\";\n}\n"},"Returns `true`/`false` on success/error (passes new `&$string` and `&$count` as ref)")),K,Y,ie,se,oe,q,re,le,ce,J,pe,L,z,r.a.createElement(b,{question:"We need to make the link UPPERCASE. Which is the correct signature?",code:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n\n// highlight-next-line\npreg_replace_callback('#https://\\w+.com#', /* here */);\n",php:!0,selfExplanatory:!0},r.a.createElement($,{code:"<?php\npreg_replace_callback('#https://\\w+.com#', function ($match) {\n    return strtoupper($match[0]);\n}, $string);\n",markdown:!0,hoverCode:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n\n// highlight-next-line\npreg_replace_callback('#https://\\w+.com#', function ($match) {}, $string);\n",correct:!0},"`/pattern/`, `callback()`, `$string`"),r.a.createElement($,{code:"<?php\npreg_replace_callback('#https://\\w+.com#', $string, function ($match) {\n    return strtoupper($match[0]);\n});\n",markdown:!0,hoverCode:"<?php\n$string = 'Welcome to my website (http://facebook.com)! Welcome!';\n\n// highlight-next-line\npreg_replace_callback('#https://\\w+.com#', $string, function ($match) {});\n"},"`/pattern/`, `$string`, `callback()`"))],ge=n(174),de=n(240);const Ee="https://repl.it/github/T-Regx/playground";var fe={automaticDelimiters:[{title:"Automatic delimiters",content:"You no longer need to delimiter your patterns. [T-Regx' smart delimiterer](docs/delimiters) will add one of many delimiters for you, if they're not already present."},{}],installation:[{title:"",content:"[![](img/t.regx.installation.png)](docs/installation)"},{title:"Installation",content:"```bash\ncomposer require rawr/t-regx\n```\n      "},{}],matchDetails:[{title:"Match details",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(d,null,"With [`pattern()->match()`](docs/match) and [`pattern()->replace()`](docs/replace), it's trivial to retrieve, iterate, map and filter matches with callbacks and a detailed [`Match` object](docs/match-details).")),r.a.createElement("p",null,r.a.createElement(d,null,"Checkout the documentation about [`Match` object](docs/match-details) with all [`Match`](docs/match-details) methods. You can also [try it online](",Ee,") in 10 seconds - there are examples as well as [sandbox](",Ee,") for your own tries.")))},{body:r.a.createElement(y,null,"<?php\n\nuse TRegx\\CleanRegex\\Match\\Details\\Match;\n\npattern('https?://(\\w+\\.\\w+)')->match($string)->first(function (Match $match) {\n    // cast to string\n    echo \"I matched: $match\";\n\n    // capturing group\n// highlight-next-line\n    $domain = $match->get(1);\n\n    // use offset (UTF-8 safe)\n// highlight-next-line\n    mb_substr($match, 0, $match->group(1)->offset());\n\n    // use offset (bytes)\n// highlight-next-line\n    substr($match, 0, $match->group(1)->byteOffset());\n});\n")}],features:[{title:"Written with clean design in mind",content:"`No Reflection used`, `No (...varargs)`, `No (boolean arguments, true)`, `(No flags, 1)`"},{title:"Based on exceptions!",body:r.a.createElement(d,null,"If any error occurs while using regexp (invalid pattern, malformed UTF8, backtrack limit, nonexistent group, anything!) T-Regx throws an exception, contrary to vanilla-PHP regexp, which use `preg_last_error()` or warnings, which can't be `try`/`catch`ed.")}],functionalProgramming:[{body:r.a.createElement(y,null,"<?php\n\n$message = \"Extensions: .mp3, .mp4, .jpg, jpeg, png, gif\";\n\n// highlight-next-line\npattern('\\b\\.?(?<ext>\\w{3,4})\\b')->replace($message)\n    ->all()\n    ->by()\n    ->group('ext')\n// highlight-next-line\n    ->mapIfExists([\n        'mp3' => 'Audio',\n        'gif' => 'Animation'\n    ]);\n")},{title:"Functional programming",body:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement(d,null,"T-Regx utilizes chainable, functional programming with methods like `filter()`, [`map()`](docs/match-map), [`flatMap()`](docs/match-map#flatmap), [`first()`](docs/match-first)/[`forFirst()`](docs/match-for-first), etc.")),r.a.createElement("p",null,r.a.createElement(d,null,"Apart from standard functional methods, T-Regx provides dedicated methods, suited more for working with `string`s and capturing groups from T-Regx, like `map()`, `mapIfExists()`, `mapAndCallback()`, etc.")))}],empty:[{},{}]},be=n(150),$e=n.n(be);function we(){const e=Object(s.a)(),{siteConfig:t={}}=e;return r.a.createElement(i.a,null,r.a.createElement(ve,{title:t.title,tagline:t.tagline}),r.a.createElement("div",{className:"mainContainer",style:{overflow:"hidden"}},r.a.createElement(Fe,{darkBackground:!0,scrollableBackground:!0},r.a.createElement(ye,null)),r.a.createElement(Re,null),r.a.createElement(Te,null),r.a.createElement(Ce,null),r.a.createElement(Pe,null),r.a.createElement(je,null),r.a.createElement(Ne,null)))}const ve=({title:e,tagline:t})=>r.a.createElement(Se,null,r.a.createElement(p.a,null),r.a.createElement(We,{title:e,tagline:t}),r.a.createElement(ge.a,null),r.a.createElement(He,null,r.a.createElement(Ae,{to:"docs/installation"},"Installation"),r.a.createElement(Ae,{to:"docs/introduction"},"See Docs"),r.a.createElement(Ae,{href:de.playgroundUrl},"Try online!"))),ye=()=>r.a.createElement(O,{questions:ue,openingSlide:e=>r.a.createElement(Ie,null,r.a.createElement(xe,{onStartQuiz:e}),r.a.createElement(ke,null)),finishSlide:()=>r.a.createElement(Ie,null,r.a.createElement(_e,null),r.a.createElement(ke,null))}),xe=({onStartQuiz:e})=>r.a.createElement("div",null,r.a.createElement("h1",null,"Quiz about Vanilla-PHP regular expressions"),r.a.createElement("p",null,"Super easy, see for yourself how well you know Vanilla-PHP regular expressions. Maybe it turns out you don't need T-Regx, after all :)"),e&&r.a.createElement(Oe,{onClick:e},"Start quiz")),_e=()=>r.a.createElement("div",null,r.a.createElement("h1",null,"Congratulations! Quiz completed!"),r.a.createElement("p",null,"You've finished the quiz! Feel free to see your result, or see the explanations of the answers. You can go back to previous answers and verify them.")),ke=()=>r.a.createElement("div",null,r.a.createElement("h1",null,"SafeRegex converts warnings to exceptions"),r.a.createElement("p",null,r.a.createElement(d,null,"SafeRegex watches for warnings, analyzes `preg_()` methods return values and looks up `preg_last_error()` to validate a call. If it fails, an exception is thrown."))),Re=()=>r.a.createElement(Fe,{columns:fe.installation,center:!0,layout:"threeColumn"},r.a.createElement(p.b,null)),Te=()=>r.a.createElement(Fe,{columns:fe.matchDetails,lightBackground:!0}),Ce=()=>r.a.createElement(Fe,{columns:fe.features,layout:"fourColumn"}),je=()=>r.a.createElement(Fe,{columns:fe.empty}),Pe=()=>r.a.createElement(Fe,{darkBackground:!0,scrollableBackground:!0,columns:fe.functionalProgramming}),Ne=()=>r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null)),Se=e=>r.a.createElement("div",{className:"hero"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"text--center"},e.children))),We=e=>r.a.createElement("h2",{className:$e.a.projectTitle},e.title,r.a.createElement("p",{className:$e.a.projectSubtitle},e.tagline),r.a.createElement("ul",{className:$e.a.iconList},r.a.createElement("li",null,"Lightweight"),r.a.createElement("li",null,"Reliable"),r.a.createElement("li",null,"Secure"),r.a.createElement("li",null,"Based on exceptions"))),He=e=>r.a.createElement("div",{className:$e.a.promoSection},r.a.createElement("div",{className:$e.a.headerButtons},e.children)),Ae=({to:e,href:t,children:n})=>r.a.createElement(m.a,{className:c()("button button--outline button--primary button--md"),to:t||Object(o.a)(e)},n),Oe=({children:e,onClick:t})=>r.a.createElement(m.a,{className:c()("button button--outline button--primary button--md"),onClick:t},e),Fe=e=>r.a.createElement("div",{className:c()("padding-vert--xl",{[$e.a.scrollBackground]:e.scrollableBackground,[$e.a.darkBackground]:e.darkBackground,[$e.a.lightBackground]:e.lightBackground,"text--center":e.center})},r.a.createElement("div",{className:"container"},e.children,e.columns&&r.a.createElement("div",{className:"row"},e.columns.map((e,t)=>r.a.createElement("div",{key:t,className:"col"},e.title&&r.a.createElement("h2",null,e.title),e.body||e.content&&r.a.createElement("div",null,r.a.createElement(d,null,e.content))))))),Ie=e=>r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},e.children.map((e,t)=>r.a.createElement("div",{key:t,className:"col"},e))))},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),l=n(163);function c(e){const{shortName:t="t-regx",identifier:n="46dff8e37535ddb3571510672d1af48683bad013",title:c="Questions about T-Regx"}=e,s=(Object(l.a)(),function(){this.page.identifier=n,c&&(this.page.title=c),this.page.url=location.href});return Object(a.useEffect)(()=>{if(window.DISQUS)window.DISQUS.reset({reload:!0,config:s});else{window.disqus_config=s;const e=document.createElement("script");e.src=`https://${t}.disqus.com/embed.js`,e.setAttribute("data-timestamp",+new Date),e.setAttribute("async",!0),document.body.appendChild(e)}}),r.a.createElement("div",{id:"disqus_thread"})}},174:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a),l=n(163);function c(){const e=Object(l.a)(),{siteConfig:t={}}=e;return r.a.createElement("a",{className:"github-button",href:t.customFields.mainRepoUrl,title:"See this project on GitHub","data-icon":"octicon-star","data-show-count":"true","data-count-href":`/${t.organizationName}/${t.projectName}/stargazers`,"data-count-aria-label":"# stargazers on GitHub","aria-label":"Star this project on GitHub"},"T-Regx")}},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return T.a})),n.d(t,"e",(function(){return C.a}));var a=n(0),r=n.n(a),l=n(167),c=n(175),s=n.n(c),o=n(49),i=n.n(o);function m({heart:e,dino:t}){return r.a.createElement("div",{className:i.a.valentinesDino},r.a.createElement("div",{className:i.a.subContainer},r.a.createElement("img",{src:e,alt:"",className:s()(i.a.heart,i.a.moveVertical)})),r.a.createElement("div",{className:s()(i.a.subContainer,i.a.c2)},r.a.createElement("img",{src:e,alt:"",className:s()(i.a.heart,i.a.moveVertical)})),r.a.createElement("div",{className:s()(i.a.subContainer,i.a.c3)},r.a.createElement("img",{src:e,alt:"",className:s()(i.a.heart,i.a.moveVertical)})),r.a.createElement("img",{src:t,alt:"",className:i.a.tRegx}))}var p=n(50),h=n.n(p);const u=({src:e,title:t=""})=>r.a.createElement("div",{className:h.a.projectLogo},r.a.createElement("img",{src:e,alt:"Project Logo",title:t})),g=({name:e})=>{if("valentine"===e)return r.a.createElement(m,{heart:Object(l.a)("img/heart.png"),dino:Object(l.a)("img/t.regx.png"),title:"Valentine's Day T-Regx"});const t={regular:{src:"t.regx.png",title:"T-Regx"},corona:{src:"t.regx.surgical.png",title:"Responsible T-Regx"},carnival:{src:"t.regx.carnival.png",title:"Carnival T-Regx"},easter:{src:"t.regx.easter.png",title:"Easter T-Regx"},holiday:{src:"t.regx.summer.png",title:"Holiday T-Regx"},halloween:{src:"t.regx.halloween.png",title:"Halloween T-Regx"},christmas:{src:"t.regx.santa.png",title:"Santa T-Regx"}}[e];return r.a.createElement(u,{src:Object(l.a)("img/"+t.src),title:t.name})};function d(){return r.a.createElement(g,{name:(()=>{new Date;return"corona"})()})}var E=n(2),f={upper:[{title:"Build Status",src:"https://travis-ci.org/T-Regx/T-Regx.svg?branch=master",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"Coverage Status",src:"https://coveralls.io/repos/github/T-Regx/T-Regx/badge.svg?branch=master",href:"https://coveralls.io/github/T-Regx/T-Regx?branch=master"},{title:"Dependencies",src:"https://img.shields.io/badge/dependencies-0-brightgreen.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"Repository Size",src:"https://github-size-badge.herokuapp.com/T-Regx/playground.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"License",src:"https://img.shields.io/github/license/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"GitHub last commit",src:"https://img.shields.io/github/last-commit/T-Regx/T-Regx/develop.svg",href:"https://github.com/T-Regx/T-Regx"},{title:'GitHub commit activity"',src:"https://img.shields.io/github/commit-activity/y/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"}],lower:[{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.1-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.2-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.3-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.4-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-8.0-yellow.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=popout",href:"http://makeapullrequest.com"}]},b=n(51),$=n.n(b);const w=e=>r.a.createElement("a",{href:e.href,title:e.title},r.a.createElement("img",{src:e.src,alt:e.title}));function v(){const{upper:e,lower:t}=f;return r.a.createElement("div",{className:$.a.badgesSection},r.a.createElement("div",{className:$.a.upperBadges},e.map((e,t)=>r.a.createElement(w,Object(E.a)({key:t},e)))),r.a.createElement("div",{className:$.a.lowerBadges},t.map((e,t)=>r.a.createElement(w,Object(E.a)({key:t},e))),r.a.createElement(C.a,null)))}var y=n(170),x=n(52),_=n.n(x);const k=[{title:"Invalid pattern<sup>(eg. `/unclosed[A-/`)</sup>",php:"Issues a warning",tRegx:"`MalformedPatternException` with descriptive message"},{title:"Corrupted subject<sup>(eg. malformed utf-8 sequence)</sup>",php:"\n* Different methods return different error values (`false`, `null` or `[]`)\n* `preg_last_error()` returns error code",tRegx:"`RuntimeCleanRegexException` with descriptive message"},{title:"Overly complex pattern<sup>(eg. containing `?R`)</sup>",php:"\n* No warning\n* `preg_last_error()` returns error code\n        ",tRegx:"`RuntimeSafeRegexException` with descriptive message"},{title:"Returning an invalid replacement value",php:"\n - `preg_last_error()` returns **success** code <sup>(returns `PREG_NO_ERROR`)</sup>\n - Silently converts the value to string <sup>(e.g. `integer`)<sup>\n - Raises a warning <sup>(e.g. `array`)<sup>\n - Throws a fatal error, terminating the application <sup>(e.g. `stdClass`, objects without `__toString`)<sup>",tRegx:"`InvalidReplacementException` with descriptive message"},{title:"Using an invalid capturing group name<sup>(eg. name `!@#$`, index `-2`)</sup>",php:"Actually tries to get the group",tRegx:"`InvalidArgumentException` with descriptive message"},{title:"Using a nonexistent group<sup>(group name typo, group deleted)</sup>",php:"Actually tries to get the group",tRegx:"`NonexistentGroupException` with descriptive message"},{title:"Using an un-matched group<sup>(conditional group, unmatched by subject)",php:"Actually tries to get the group",tRegx:"`GroupNotMatchedException` with descriptive message"},{title:"Offsets in UTF-8<sup>(eg. 18\u20ac)</sup>",php:"In bytes<sup>5 bytes</sup>",tRegx:" - Method `offset()`<sup>3 characters</sup>\n - Method `byteOffset()`<sup>5 bytes</sup>"},{title:"Offset while replacing",php:"No",tRegx:"Yes"},{title:"Worst case complexity",php:"`(string|int|null)[][][]`<sup>array of arrays of arrays of string/null and integer - `preg_match_all()` with `PREG_OFFSET_CAPTURE`</sup>",tRegx:"`string[]`<sup>array of strings</sup>"},{title:"Testing subject",php:" - `1`/`0` \\- matches/differs\n - `false` \\- some errors<sup>Don't use with `==`, only `===`</sup>\n - Issues a warning \\- other some errors",tRegx:" - `true`/`false` \\- matches/differs\n - `MalformedPatternException` \\- invalid pattern"}];function R(){const e=k.map((e,t)=>r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement(y.a,null,e.title)),r.a.createElement("td",null,r.a.createElement(y.a,null,e.php)),r.a.createElement("td",null,r.a.createElement(y.a,null,e.tRegx))));return r.a.createElement("table",{className:_.a.comparisonTable,width:"100%",border:"0",cellSpacing:"0",cellPadding:"0"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Plain PHP"),r.a.createElement("th",null,"T-Regx")),r.a.createElement("tr",{className:_.a.logoRow},r.a.createElement("th",null),r.a.createElement("th",null,r.a.createElement("img",{src:Object(l.a)("/img/comparison/php.png"),alt:"Plain PHP"})),r.a.createElement("th",null,r.a.createElement("img",{src:Object(l.a)("/img/t.regx.png"),alt:"T-Regx"})))),r.a.createElement("tbody",null,e))}var T=n(171),C=n(174)},232:function(e,t,n){e.exports={answers:"answers_20MG",listItem:"listItem_2cq8","codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-":"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-_3p5H",help:"help_2dAw",inactive:"inactive_1NO1",selected:"selected_26xY",correct:"correct_2xDv",hasHelp:"hasHelp_rjBD",incorrect:"incorrect_28Oo",alreadyAnswered:"alreadyAnswered_3fPr"}},239:function(e,t,n){e.exports={container:"container_1K9I",dimmed:"dimmed_3A6W",openAnimation:"openAnimation_21rh","fade-in":"fade-in_1D3G"}},240:function(e,t){e.exports={mainRepoUrl:"https://github.com/T-Regx/T-Regx",playgroundUrl:"https://repl.it/github/T-Regx/playground"}}}]);