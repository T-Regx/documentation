(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),o=(t(0),t(198)),i=t(200),c={id:"replace-by-map",title:"Replace by map"},p={unversionedId:"replace-by-map",id:"replace-by-map",isDocsHomePage:!1,title:"Replace by map",description:"There are cases when you have to use more than one replacement (so with() won't work),",source:"@site/../docs/replace-by-map.mdx",slug:"/replace-by-map",permalink:"/docs/replace-by-map",version:"current",lastUpdatedAt:1611615683,sidebar:"docs",previous:{title:"Replace by group",permalink:"/docs/replace-by-group"},next:{title:"Handling user input",permalink:"/docs/handling-user-input"}},l=[{value:"Standard map",id:"standard-map",children:[{value:"Undefined mapping",id:"undefined-mapping",children:[]},{value:"Ignored replacements",id:"ignored-replacements",children:[]}]},{value:"Groups",id:"groups",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are cases when you have to use more than one replacement (so ",Object(o.b)("inlineCode",{parentName:"p"},"with()")," won't work),\nbut you also don't need ",Object(o.b)("a",{parentName:"p",href:"/docs/match-details"},Object(o.b)("inlineCode",{parentName:"a"},"Detail"))," details or\nany replacement logic, really (so ",Object(o.b)("inlineCode",{parentName:"p"},"callback()")," is a little too much)."),Object(o.b)("h2",{id:"standard-map"},"Standard map"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"replace()->all()->by()->map()")," to replace a matched, predefined value (",Object(o.b)("inlineCode",{parentName:"p"},'"mp3"'),", ",Object(o.b)("inlineCode",{parentName:"p"},'"mp4"')," or ",Object(o.b)("inlineCode",{parentName:"p"},'"gif"'),")\nby its direct counter-part (",Object(o.b)("inlineCode",{parentName:"p"},"'Audio file'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'Video file'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'Animation'"),"):"),Object(o.b)(i.a,{tregx:"$message = 'My words: \"mp3\", \"mp4\", \"gif\"';\n\npattern('\\b\\w{3}\\b')->replace($message)->all()->by()->map([\n    'mp3' => 'Audio file',\n    'mp4' => 'Video file',\n    'gif' => 'Animation'\n]);",php:"$message = 'My words: \"mp3\", \"mp4\", \"gif\"';\n\npreg::replace_callback('/\\b\\w{3}\\b/', function ($match) {\n    $map = [\n        'mp3' => 'Audio file',\n        'mp4' => 'Video file',\n        'gif' => 'Animation'\n    ];\n    if (!array_key_exists($match[0], $map)) {\n        throw new MissingReplacementKeyException();\n    }\n    $result = $map[$match[0]];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $message);",mdxType:"CodeTabs"}),Object(o.b)(i.b,{text:!0,mdxType:"Result"},'My words: "Audio file", "Video file", "Animation"'),Object(o.b)("p",null,"Here, we used ",Object(o.b)("inlineCode",{parentName:"p"},"replace()->all()")," as an example, but of course ",Object(o.b)("inlineCode",{parentName:"p"},"replace()->first()")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"replace()->only(int)")," could be used and would replace only the first, or the first few matches."),Object(o.b)("h3",{id:"undefined-mapping"},"Undefined mapping"),Object(o.b)("p",null,"Normally, had you matched a string that's not present in your map, a ",Object(o.b)("inlineCode",{parentName:"p"},"MissingReplacementKeyException")," would be thrown:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"$message = 'My words: \"mp3\", \"mp4\", \"xxx\"';\n\npattern('\\w{3}')->replace($message)->all()->by()->map([\n   'mp3'  => 'Audio file',\n   'mp4'  => 'Video file',\n   'gif'  => 'Animation'\n]);\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MissingReplacementKeyException")," is a safe-guard, since ",Object(o.b)("inlineCode",{parentName:"p"},"map()")," is supposed to be only used with a predefined\nset of expected matches, and if a different string is matched (like ",Object(o.b)("inlineCode",{parentName:"p"},'"xxx"'),"), that's a heads up\nthat perhaps something went wrong. Either the map was incomplete, or the pattern allowed some unexpected values."),Object(o.b)("h3",{id:"ignored-replacements"},"Ignored replacements"),Object(o.b)("p",null,"On the other hand, if you want to ignore unexpected values - use ",Object(o.b)("inlineCode",{parentName:"p"},"mapIfExists()"),"."),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"mapIfExists()"),", superfluous occurrences are left unchanged:"),Object(o.b)(i.a,{tregx:"$message = \"Extensions: mp3, mp4, jpg, jpeg, png, gif\";\n\npattern('\\b\\w{3,4}\\b')->replace($message)->all()->by()->mapIfExists([\n   'mp3' => 'Audio',\n   'gif' => 'Animation'\n]);",php:"$message = \"Extensions: mp3, mp4, jpg, jpeg, png, gif\";\n\npreg::replace_callback('/\\b\\w{3}\\b/', function ($match) {\n    $map = [\n        'mp3' => 'Audio',\n        'gif' => 'Animation'\n    ];\n    if (!array_key_exists($match[0], $map)) {\n        return $match[0];\n    }\n    $result = $map[$match[0]];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $message);",mdxType:"CodeTabs"}),Object(o.b)(i.b,{text:!0,mdxType:"Result"},"Extensions: Audio, mp4, jpg, jpeg, png, Animation"),Object(o.b)("h2",{id:"groups"},"Groups"),Object(o.b)("p",null,"Resolving a replacement based on a ",Object(o.b)("strong",{parentName:"p"},"whole match")," however, is both uncommon and unpractical. It's much more elastic to resolve\nit based on a specific capturing group, using ",Object(o.b)("inlineCode",{parentName:"p"},"by()->group()->map()"),"."),Object(o.b)("p",null,"Remember, that groups can be matched or not matched, so we need to specify how to\nhandle an unmatched group. In this case, we'll use ",Object(o.b)("inlineCode",{parentName:"p"},"orElseThrow()"),", since we don't\nexpect the group to ever be unmatched."),Object(o.b)(i.a,{tregx:"$links = 'Links: www.google.com, http://socket.io, facebook.com, https://t-regx.com';\n\npattern('(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)')\n    ->replace($links)\n    ->all()\n    ->by()\n    ->group('domain')\n    ->map([\n       'google'   => 'Search Engine',\n       'socket'   => 'Documentation',\n       'facebook' => 'Social Portal',\n       't-regx'   => 'Documentation',\n    ])\n    ->orElseThrow();",php:"$links = 'Links: www.google.com, http://socket.io, facebook.com, https://t-regx.com';\n\npreg::replace_callback('#(https?://)?(www\\.)?(?<domain>[\\w-]+)\\.(com|io)#', function (array $match) {\n    // possible invalid group, e.g. \"2group\" or -2\n    validateGroupName('domain');\n\n    $group = $match['domain'];\n    if (!array_key_exists('domain', $match)) {\n        // group is either un-matched or non-existent\n        if (validateGroupExists('domain', $match)) {\n            $group = $match['domain'];\n        } else {\n            throw new NonexistentGroupException('domain');\n        }\n    }\n    if ($match['domain'] === '') {\n        // group is either un-matched or matched an empty string\n        if (validateGroupMatched('domain', $match)) {\n            $group = $match['domain'];\n        } else {\n            throw new GroupNotMatchedException();\n        }\n    }\n\n    $map = [\n        'google'   => 'Search Engine',\n        'socket'   => 'Documentation',\n        'facebook' => 'Social Portal',\n        't-regx'   => 'Documentation',\n    ];\n    if (!array_key_exists($group, $map)) {\n        throw new MissingReplacementKeyException();\n    }\n    $result = $map[$group];\n    if (!is_string($result)) {\n        throw new InvalidArgumentException();\n    }\n    return $result;\n}, $links);",mdxType:"CodeTabs"}),Object(o.b)(i.b,{text:!0,mdxType:"Result"},"Links: Search Engine, Documentation, Social Portal, Documentation"))}u.isMDXComponent=!0},198:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),s=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?r.a.createElement(b,c(c({ref:n},l),{},{components:t})):r.a.createElement(b,c({ref:n},l))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},200:function(e,n,t){"use strict";t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return v}));var a=t(0),r=t.n(a),o=t(204),i=t(199),c=t(55),p=t.n(c),l=37,s=39;var u=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,u=e.values,m=e.groupId,d=e.className,b=Object(o.a)(),f=b.tabGroupChoices,g=b.setTabGroupChoices,h=Object(a.useState)(c),y=h[0],w=h[1],O=a.Children.toArray(e.children);if(null!=m){var v=f[m];null!=v&&v!==y&&u.some((function(e){return e.value===v}))&&w(v)}var j=function(e){w(e),null!=m&&g(m,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},d)},u.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===n,className:Object(i.a)("tabs__item",p.a.tabItem,{"tabs__item--active":y===n}),key:n,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(x,e.target,e)},onFocus:function(){return j(n)},onClick:function(){j(n)}},t)}))),n?Object(a.cloneElement)(O.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))};var m=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)},d=t(205),b=t(56),f=t.n(b),g=function(e){var n=e.children,t=e.language;return r.a.createElement("div",{className:f.a.code},r.a.createElement(d.a,{className:"language-"+(t||"php")},function(e){if("string"==typeof e)return e;if(!Array.isArray(e))throw console.log(this.props.children),"Unexpected child of <Code>";if(e.every((function(e){return"string"==typeof e})))return e.join("")}(n)))};var h=function(e){var n=e.tregx,t=e.php;return r.a.createElement(u,{defaultValue:"t-regx",values:y(n,t)},n&&r.a.createElement(m,{value:"t-regx"},r.a.createElement(g,null,n)),t&&r.a.createElement(m,{value:"php"},r.a.createElement(g,null,t)))};function y(e,n){return[e?{label:"T-Regx",value:"t-regx"}:{},n?{label:"PHP",value:"php"}:{}].filter((function(e){return e.value}))}var w=t(57),O=t.n(w),v=function(e){var n=e.text,t=e.children;return r.a.createElement("div",{className:O.a.result},r.a.createElement(g,{language:n?"text":"php"},t))}}}]);