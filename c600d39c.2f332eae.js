/*! For license information please see c600d39c.2f332eae.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{193:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(197),o=n.n(i),c=n(205),s=n(210),l=(n(203),n(213));var u=[{title:"Browse Docs",content:"Learn more using the [documentation on this site](/docs/introduction). Feel free to visit:\n\n* [Matching](/docs/match)\n* [Match details](docs/match-details)\n* [Replacing](docs/replace)\n* [Prepared patterns](docs/prepared-patterns)\n* [Automatic delimiters](docs/delimiters)\n* [Validate pattern](docs/valid)\n    "},{title:"Stay up to date",content:"Find out what's new with this project on [Blog](blog). We'll inform about new releases in advances and anything that needs to happen sooner than a new version.\n    \nCan you find a hidden Matrix reference? :)    \n    "},{title:"Create GitHub issue",content:"Issues on [github](https://github.com/T-Regx/T-Regx/issues/new/choose) are more than welcome. Feel free to:\n  \n* create a [feature request](https://github.com/T-Regx/T-Regx/issues/new?template=feature-request.md)\n* report [a bug](https://github.com/T-Regx/T-Regx/issues/new?template=i-found-a-bug.md)\n* or simply ask a [question](https://github.com/T-Regx/T-Regx/issues/new?template=i-have-a-question.md)\n\nWe'll answer as fast as we can :)\n    "},{title:"Robust Docs",content:"Continuous integration tests are being run for each code example in the documentation every new update of the documentation. That way, we can be 100% sure the code examples you see in the documentation are compatible with the given T-Regx version."},{title:"Join the discussion below!",content:"Ask as many questions about the documentation and the project as you need We'll try to answer them as fast as we can! <br><br><br> ![style](img/t.regx.discussion.png)"}];t.default=function(){return a.a.createElement(s.a,null,a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",null,a.a.createElement("h1",null,"Need help?"),a.a.createElement("p",null,"This project is maintained by a dedicated group of people. If you have experienced any bugs or problems, you're welcome to submit an"," ",a.a.createElement("a",{href:"https://github.com/T-Regx/T-Regx/issues/new/choose"},"issue on github!")," :) It never takes us more than 24h to respond!"),a.a.createElement("div",{className:"row"},u.map(({title:e,content:t},n)=>a.a.createElement("div",{key:n,className:o()("col margin-vert--md",{"col--4":n<=2,"col-6":n>2})},a.a.createElement("h2",null,e),a.a.createElement(c.a,null,t)))),a.a.createElement(l.d,null))))}},197:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},200:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=a},201:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},205:function(e,t,n){"use strict";n.d(t,"a",(function(){return De}));var r=n(0),a=n.n(r),i=n(208),o=n.n(i),c=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var l={accesskey:"accessKey",allowfullscreen:"allowFullScreen",allowtransparency:"allowTransparency",autocomplete:"autoComplete",autofocus:"autoFocus",autoplay:"autoPlay",cellpadding:"cellPadding",cellspacing:"cellSpacing",charset:"charSet",class:"className",classid:"classId",colspan:"colSpan",contenteditable:"contentEditable",contextmenu:"contextMenu",crossorigin:"crossOrigin",enctype:"encType",for:"htmlFor",formaction:"formAction",formenctype:"formEncType",formmethod:"formMethod",formnovalidate:"formNoValidate",formtarget:"formTarget",frameborder:"frameBorder",hreflang:"hrefLang",inputmode:"inputMode",keyparams:"keyParams",keytype:"keyType",marginheight:"marginHeight",marginwidth:"marginWidth",maxlength:"maxLength",mediagroup:"mediaGroup",minlength:"minLength",novalidate:"noValidate",radiogroup:"radioGroup",readonly:"readOnly",rowspan:"rowSpan",spellcheck:"spellCheck",srcdoc:"srcDoc",srclang:"srcLang",srcset:"srcSet",tabindex:"tabIndex",usemap:"useMap"},u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"\u201c"},p=["style","script"],g=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,m=/mailto:/i,d=/\n{2,}$/,h=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,f=/^ *> ?/gm,y=/^ {2,}\n/,v=/^(?:( *[-*_]) *){3,}(?:\n *)+\n/,b=/^\s*(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n *)+\n?/,x=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,k=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,R=/^(?:\n *)*\n/,T=/\r\n?/g,w=/^\[\^(.*)\](:.*)\n/,E=/^\[\^(.*)\]/,S=/\f/g,P=/^\s*?\[(x|\s)\]/,C=/^ *(#{1,6}) *([^\n]+)\n{0,2}/,O=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,j=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,N=/&([a-z]+);/g,_=/^<!--.*?-->/,A=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,H=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,$=/^\{.*\}$/,I=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,z=/^<([^ >]+@[^ >]+)>/,D=/^<([^ >]+:\/[^ >]+)>/,U=/ *\n+$/,L=/(?:^|\n)( *)$/,B=/-([a-z])?/gi,G=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,M=/^((?:[^\n]|\n(?! *\n))+)(?:\n *)+\n/,V=/^\[([^\]]*)\]:\s*(\S+)\s*("([^"]*)")?/,q=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,F=/^\[([^\]]*)\] ?\[([^\]]*)\]/,W=/(\[|\])/g,Q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,J=/^ *\| */,K=/(^ *\||\| *$)/g,X=/ *$/,Y=/^ *:-+: *$/,ee=/^ *:-+ *$/,te=/^ *-+: *$/,ne=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,re=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1)/,ae=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,ie=/^\\([^0-9A-Za-z\s])/,oe=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ce=/(^\n+|\n+$|\s+$)/g,se=/^([ \t]*)/,le=/\\([^0-9A-Z\s])/gi,ue=/^( *)((?:[*+-]|\d+\.)) +/,pe=/( *)((?:[*+-]|\d+\.)) +[^\n]*(?:\n(?!\1(?:[*+-]|\d+\.) )[^\n]*)*(\n|$)/gm,ge=/^( *)((?:[*+-]|\d+\.)) [\s\S]+?(?:\n{2,}(?! )(?!\1(?:[*+-]|\d+\.) (?!(?:[*+-]|\d+\.) ))\n*|\s*\n*$)/,me=/^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,de=/^!\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/,he=[h,x,b,C,O,j,_,H,pe,ge,G,M];function fe(e){return e.replace(/[\xc0\xc1\xc2\xc3\xc4\xc5\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xc6]/g,"a").replace(/[\xe7\xc7]/g,"c").replace(/[\xf0\xd0]/g,"d").replace(/[\xc8\xc9\xca\xcb\xe9\xe8\xea\xeb]/g,"e").replace(/[\xcf\xef\xce\xee\xcd\xed\xcc\xec]/g,"i").replace(/[\xd1\xf1]/g,"n").replace(/[\xf8\xd8\u0153\u0152\xd5\xf5\xd4\xf4\xd3\xf3\xd2\xf2]/g,"o").replace(/[\xdc\xfc\xdb\xfb\xda\xfa\xd9\xf9]/g,"u").replace(/[\u0178\xff\xdd\xfd]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function ye(e){return te.test(e)?"right":Y.test(e)?"center":ee.test(e)?"left":null}function ve(e,t,n){var r=n.inTable;n.inTable=!0;var a=t(e.trim(),n);n.inTable=r;var i=[[]];return a.forEach((function(e,t){"tableSeparator"===e.type?0!==t&&t!==a.length-1&&i.push([]):("text"===e.type&&(null==a[t+1]||"tableSeparator"===a[t+1].type)&&(e.content=e.content.replace(X,"")),i[i.length-1].push(e))})),i}function be(e,t,n){n.inline=!0;var r=ve(e[1],t,n),a=function(e){return e.replace(K,"").split("|").map(ye)}(e[2]),i=function(e,t,n){return e.trim().split("\n").map((function(e){return ve(e,t,n)}))}(e[3],t,n);return n.inline=!1,{align:a,cells:i,header:r,type:"table"}}function xe(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ke(e){function t(r,a){for(var i=[],o="";r;)for(var c=0;c<n.length;){var s=n[c],l=e[s],u=l.match(r,a,o);if(u){var p=u[0];r=r.substring(p.length);var g=l.parse(u,t,a);null==g.type&&(g.type=s),i.push(g),o=p;break}c++}return i}var n=Object.keys(e);return n.sort((function(t,n){var r=e[t].order,a=e[n].order;return r===a?t<n?-1:1:r-a})),function(e,n){return t(function(e){return e.replace(T,"\n").replace(S,"").replace(Z,"    ")}(e),n)}}function Re(e){return function(t,n){return n.inline?e.exec(t):null}}function Te(e){return function(t,n){return n.inline||n.simple?e.exec(t):null}}function we(e){return function(t,n){return n.inline||n.simple?null:e.exec(t)}}function Ee(e){return function(t){return e.exec(t)}}function Se(e){try{if(decodeURIComponent(e).match(/^\s*javascript:/i))return null}catch(t){return null}return e}function Pe(e){return e.replace(le,"$1")}function Ce(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!0,n.simple=!0;var i=e(t,n);return n.inline=r,n.simple=a,i}function Oe(e,t,n){var r=n.inline||!1,a=n.simple||!1;n.inline=!1,n.simple=!0;var i=e(t,n);return n.inline=r,n.simple=a,i}function je(e,t,n){return n.inline=!1,e(t+"\n\n",n)}function Ne(e,t,n){return{content:Ce(t,e[1],n)}}function _e(){return{}}function Ae(){return null}function He(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function $e(e,t,n){for(var r=e,a=t.split(".");a.length&&void 0!==(r=r[a[0]]);)a.shift();return r||n}function Ie(e,t){var n=$e(t,e);return n?"function"==typeof n||"object"===(void 0===n?"undefined":s(n))&&"render"in n?n:$e(t,e+".component",e):e}function ze(e,t){function n(e,n){for(var r=$e(t.overrides,e+".props",{}),a=arguments.length,i=Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];return s.apply(void 0,[Ie(e,t.overrides),c({},n,r,{className:He(n&&n.className,r.className)||void 0})].concat(i))}function r(e){var r=!1;t.forceInline?r=!0:!t.forceBlock&&(r=!1===Q.test(e));var a=X(K(r?e:e.replace(ce,"")+"\n\n",{inline:r})),i=void 0;return a.length>1?i=n(r?"span":"div",{key:"outer"},a):1===a.length?"string"==typeof(i=a[0])&&(i=n("span",{key:"outer"},i)):i=n("span",{key:"outer"}),i}function i(e){var t=e.match(g);return t?t.reduce((function(e,t,n){var i=t.indexOf("=");if(-1!==i){var c=function(e){return-1!==e.indexOf("-")&&null===e.match(A)&&(e=e.replace(B,(function(e,t){return t.toUpperCase()}))),e}(t.slice(0,i)).trim(),s=o()(t.slice(i+1).trim()),u=l[c]||c,p=e[u]=function(e,t){return"style"===e?t.split(/;\s?/).reduce((function(e,t){var n=t.slice(0,t.indexOf(":")),r=n.replace(/(-[a-z])/g,(function(e){return e[1].toUpperCase()}));return e[r]=t.slice(n.length+1).trim(),e}),{}):"href"===e?Se(t):(t.match($)&&(t=t.slice(1,t.length-1)),"true"===t||"false"!==t&&t)}(c,s);(j.test(p)||H.test(p))&&(e[u]=a.a.cloneElement(r(p.trim()),{key:n}))}else"style"!==t&&(e[l[t]||t]=!0);return e}),{}):void 0}(t=t||{}).overrides=t.overrides||{},t.slugify=t.slugify||fe,t.namedCodesToUnicode=t.namedCodesToUnicode?c({},u,t.namedCodesToUnicode):u;var s=t.createElement||a.a.createElement;var T=[],S={},Z={blockQuote:{match:we(h),order:2,parse:function(e,t,n){return{content:t(e[0].replace(f,""),n)}},react:function(e,t,r){return n("blockquote",{key:r.key},t(e.content,r))}},breakLine:{match:Ee(y),order:2,parse:_e,react:function(e,t,r){return n("br",{key:r.key})}},breakThematic:{match:we(v),order:2,parse:_e,react:function(e,t,r){return n("hr",{key:r.key})}},codeBlock:{match:we(x),order:1,parse:function(e){return{content:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),lang:void 0}},react:function(e,t,r){return n("pre",{key:r.key},n("code",{className:e.lang?"lang-"+e.lang:""},e.content))}},codeFenced:{match:we(b),order:1,parse:function(e){return{content:e[3],lang:e[2]||void 0,type:"codeBlock"}}},codeInline:{match:Te(k),order:4,parse:function(e){return{content:e[2]}},react:function(e,t,r){return n("code",{key:r.key},e.content)}},footnote:{match:we(w),order:1,parse:function(e){return T.push({footnote:e[2],identifier:e[1]}),{}},react:Ae},footnoteReference:{match:Re(E),order:2,parse:function(e){return{content:e[1],target:"#"+e[1]}},react:function(e,t,r){return n("a",{key:r.key,href:Se(e.target)},n("sup",{key:r.key},e.content))}},gfmTask:{match:Re(P),order:2,parse:function(e){return{completed:"x"===e[1].toLowerCase()}},react:function(e,t,r){return n("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})}},heading:{match:we(C),order:2,parse:function(e,n,r){return{content:Ce(n,e[2],r),id:t.slugify(e[2]),level:e[1].length}},react:function(e,t,r){return n("h"+e.level,{id:e.id,key:r.key},t(e.content,r))}},headingSetext:{match:we(O),order:1,parse:function(e,t,n){return{content:Ce(t,e[1],n),level:"="===e[2]?1:2,type:"heading"}}},htmlComment:{match:Ee(_),order:2,parse:function(){return{}},react:Ae},image:{match:Te(de),order:2,parse:function(e){return{alt:e[1],target:Pe(e[2]),title:e[3]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt||void 0,title:e.title||void 0,src:Se(e.target)})}},link:{match:Re(me),order:4,parse:function(e,t,n){return{content:Oe(t,e[1],n),target:Pe(e[2]),title:e[3]}},react:function(e,t,r){return n("a",{key:r.key,href:Se(e.target),title:e.title},t(e.content,r))}},linkAngleBraceStyleDetector:{match:Re(D),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],type:"link"}}},linkBareUrlDetector:{match:Re(I),order:1,parse:function(e){return{content:[{content:e[1],type:"text"}],target:e[1],title:void 0,type:"link"}}},linkMailtoDetector:{match:Re(z),order:1,parse:function(e){var t=e[1],n=e[1];return m.test(n)||(n="mailto:"+n),{content:[{content:t.replace("mailto:",""),type:"text"}],target:n,type:"link"}}},list:{match:function(e,t,n){var r=L.exec(n),a=t._list||!t.inline;return r&&a?(e=r[1]+e,ge.exec(e)):null},order:2,parse:function(e,t,n){var r=e[2],a=r.length>1,i=a?+r:void 0,o=e[0].replace(d,"\n").match(pe),c=!1;return{items:o.map((function(e,r){var a=ue.exec(e)[0].length,i=new RegExp("^ {1,"+a+"}","gm"),s=e.replace(i,"").replace(ue,""),l=r===o.length-1,u=-1!==s.indexOf("\n\n")||l&&c;c=u;var p,g=n.inline,m=n._list;n._list=!0,u?(n.inline=!1,p=s.replace(U,"\n\n")):(n.inline=!0,p=s.replace(U,""));var d=t(p,n);return n.inline=g,n._list=m,d})),ordered:a,start:i}},react:function(e,t,r){return n(e.ordered?"ol":"ul",{key:r.key,start:e.start},e.items.map((function(e,a){return n("li",{key:a},t(e,r))})))}},newlineCoalescer:{match:we(R),order:4,parse:_e,react:function(){return"\n"}},paragraph:{match:we(M),order:4,parse:Ne,react:function(e,t,r){return n("p",{key:r.key},t(e.content,r))}},ref:{match:Re(V),order:1,parse:function(e){return S[e[1]]={target:e[2],title:e[4]},{}},react:Ae},refImage:{match:Te(q),order:1,parse:function(e){return{alt:e[1]||void 0,ref:e[2]}},react:function(e,t,r){return n("img",{key:r.key,alt:e.alt,src:Se(S[e.ref].target),title:S[e.ref].title})}},refLink:{match:Re(F),order:1,parse:function(e,t,n){return{content:t(e[1],n),fallbackContent:t(e[0].replace(W,"\\$1"),n),ref:e[2]}},react:function(e,t,r){return S[e.ref]?n("a",{key:r.key,href:Se(S[e.ref].target),title:S[e.ref].title},t(e.content,r)):n("span",{key:r.key},t(e.fallbackContent,r))}},table:{match:we(G),order:2,parse:be,react:function(e,t,r){return n("table",{key:r.key},n("thead",null,n("tr",null,e.header.map((function(a,i){return n("th",{key:i,style:xe(e,i)},t(a,r))})))),n("tbody",null,e.cells.map((function(a,i){return n("tr",{key:i},a.map((function(a,i){return n("td",{key:i,style:xe(e,i)},t(a,r))})))}))))}},tableSeparator:{match:function(e,t){return t.inTable?J.exec(e):null},order:2,parse:function(){return{type:"tableSeparator"}},react:function(){return" | "}},text:{match:Ee(oe),order:5,parse:function(e){return{content:e[0].replace(N,(function(e,n){return t.namedCodesToUnicode[n]?t.namedCodesToUnicode[n]:e}))}},react:function(e){return e.content}},textBolded:{match:Te(ne),order:3,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("strong",{key:r.key},t(e.content,r))}},textEmphasized:{match:Te(re),order:4,parse:function(e,t,n){return{content:t(e[2],n)}},react:function(e,t,r){return n("em",{key:r.key},t(e.content,r))}},textEscaped:{match:Te(ie),order:2,parse:function(e){return{content:e[1],type:"text"}}},textStrikethroughed:{match:Te(ae),order:4,parse:Ne,react:function(e,t,r){return n("del",{key:r.key},t(e.content,r))}}};!0!==t.disableParsingRawHTML&&(Z.htmlBlock={match:Ee(j),order:2,parse:function(e,t,n){var r=e[3].match(se)[1],a=new RegExp("^"+r,"gm"),o=e[3].replace(a,""),c=function(e){return he.some((function(t){return t.test(e)}))}(o)?je:Ce,s=e[1].toLowerCase(),l=-1!==p.indexOf(s);return{attrs:i(e[2]),content:l?e[3]:c(t,o,n),noInnerParse:l,tag:l?s:e[1]}},react:function(e,t,r){return n(e.tag,c({key:r.key},e.attrs),e.noInnerParse?e.content:t(e.content,r))}},Z.htmlSelfClosing={match:Ee(H),order:2,parse:function(e){return{attrs:i(e[2]||""),tag:e[1]}},react:function(e,t,r){return n(e.tag,c({},e.attrs,{key:r.key}))}});var K=ke(Z),X=function(e){return function t(n,r){if(r=r||{},Array.isArray(n)){for(var a=r.key,i=[],o=!1,c=0;c<n.length;c++){r.key=c;var s=t(n[c],r),l="string"==typeof s;l&&o?i[i.length-1]+=s:i.push(s),o=l}return r.key=a,i}return e(n,t,r)}}(function(e){return function(t,n,r){return e[t.type].react(t,n,r)}}(Z)),Y=r(function(e){return e.replace(/<!--[\s\S]*?(?:-->)/g,"")}(e));return T.length&&Y.props.children.push(n("footer",{key:"footer"},T.map((function(e){return n("div",{id:e.identifier,key:e.identifier},e.identifier,X(K(e.footnote,{inline:!0})))})))),Y}function De(e){var t=e.children,n=e.options,r=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","options"]);return a.a.cloneElement(ze(t,n),r)}},207:function(e,t,n){"use strict";var r=n(0);const a=n.n(r).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=a},208:function(e,t){var n=/[\'\"]/;e.exports=function(e){return e?(n.test(e.charAt(0))&&(e=e.substr(1)),n.test(e.charAt(e.length-1))&&(e=e.substr(0,e.length-1)),e):""}},211:function(e,t,n){"use strict";var r=n(0),a=n(207);t.a=function(){return Object(r.useContext)(a.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return h})),n.d(t,"b",(function(){return k})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return C})),n.d(t,"e",(function(){return O}));var r=n(0),a=n.n(r),i=n(202),o=n(96),c=n.n(o);const s=({src:e,title:t=""})=>a.a.createElement("div",{className:c.a.projectLogo},a.a.createElement("img",{src:e,alt:"Project Logo",title:t})),l=({name:e})=>{if("valentine"===e)return a.a.createElement(h,{heart:Object(i.a)("img/heart.png"),dino:Object(i.a)("img/t.regx.png"),title:"Valentine's Day T-Regx"});const t={regular:{src:"t.regx.png",title:"T-Regx"},carnival:{src:"t.regx.carnival.png",title:"Carnival T-Regx"},easter:{src:"t.regx.easter.png",title:"Easter T-Regx"},holiday:{src:"t.regx.summer.png",title:"Holiday T-Regx"},halloween:{src:"t.regx.halloween.png",title:"Halloween T-Regx"},christmas:{src:"t.regx.santa.png",title:"Santa T-Regx"}}[e];return a.a.createElement(s,{src:Object(i.a)(`img/${t.src}`),title:t.name})},u=()=>{const e=(e,t)=>e+31*t;return a.a.createElement(l,{name:(()=>{const t=new Date;return((t,n)=>{const r=[{start:[30,12],end:[2,1],name:"newyears"},{start:[12,2],end:[17,2],name:"valentine"},{start:[6,1],end:[25,2],name:"carnival"},{start:[20,3],end:[4,4],name:"easter"},{start:[30,6],end:[31,8],name:"holiday"},{start:[30,10],end:[31,10],name:"halloween"},{start:[6,12],end:[29,12],name:"christmas"}].find(({start:r,end:a})=>{const i=e(...r),o=e(...a),c=e(t,n);return i<=c&&c<=o});return r?r.name:"regular"})(t.getDate(),t.getMonth()+1)})()})};var p=n(197),g=n.n(p),m=n(97),d=n.n(m);const h=({heart:e,dino:t})=>a.a.createElement("div",{className:d.a.valentinesDino},a.a.createElement("div",{className:d.a.subContainer},a.a.createElement("img",{src:e,alt:"",className:g()(d.a.heart,d.a.moveVertical)})),a.a.createElement("div",{className:g()(d.a.subContainer,d.a.c2)},a.a.createElement("img",{src:e,alt:"",className:g()(d.a.heart,d.a.moveVertical)})),a.a.createElement("div",{className:g()(d.a.subContainer,d.a.c3)},a.a.createElement("img",{src:e,alt:"",className:g()(d.a.heart,d.a.moveVertical)})),a.a.createElement("img",{src:t,alt:"",className:d.a.tRegx}));var f={upper:[{title:"Build Status",src:"https://travis-ci.org/T-Regx/T-Regx.svg?branch=master",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"Coverage Status",src:"https://coveralls.io/repos/github/T-Regx/T-Regx/badge.svg?branch=master",href:"https://coveralls.io/github/T-Regx/T-Regx?branch=master"},{title:"Dependencies",src:"https://img.shields.io/badge/dependencies-0-brightgreen.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"Repository Size",src:"https://github-size-badge.herokuapp.com/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"License",src:"https://img.shields.io/github/license/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"},{title:"GitHub last commit",src:"https://img.shields.io/github/last-commit/T-Regx/T-Regx/develop.svg",href:"https://github.com/T-Regx/T-Regx"},{title:'GitHub commit activity"',src:"https://img.shields.io/github/commit-activity/y/T-Regx/T-Regx.svg",href:"https://github.com/T-Regx/T-Regx"}],lower:[{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.1-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.2-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.3-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-7.4-blue.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PHP-8.0-yellow.svg",href:"https://travis-ci.org/T-Regx/T-Regx"},{title:"PHP Version",src:"https://img.shields.io/badge/PR-welcome-brightgreen.svg?style=popout",href:"http://makeapullrequest.com"}]},y=n(98),v=n.n(y);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const x=e=>a.a.createElement("a",{href:e.href,title:e.title},a.a.createElement("img",{src:e.src,alt:e.title,className:v.a.badge})),k=()=>{const{upper:e,lower:t}=f;return a.a.createElement("div",{className:v.a.badgesSection},a.a.createElement("div",{className:v.a.upperBadges},e.map((e,t)=>a.a.createElement(x,b({key:t},e)))),a.a.createElement("div",{className:v.a.lowerBadges},t.map((e,t)=>a.a.createElement(x,b({key:t},e)))))};var R=n(205),T=n(99),w=n.n(T);const E=[{title:"Invalid pattern<sup>(eg. `/unclosed[A-/`)</sup>",php:"Issues a warning",tRegx:"`MalformedPatternException` with descriptive message"},{title:"Corrupted subject<sup>(eg. malformed utf-8 sequence)</sup>",php:"\n* Different methods return different error values (`false`, `null` or `[]`)\n* `preg_last_error()` returns error code",tRegx:"`RuntimeCleanRegexException` with descriptive message"},{title:"Overly complex pattern<sup>(eg. containing `?R`)</sup>",php:"\n* No warning\n* `preg_last_error()` returns error code\n        ",tRegx:"`RuntimeSafeRegexException` with descriptive message"},{title:"Returning an invalid replacement value",php:"\n - `preg_last_error()` returns **success** code <sup>(returns `PREG_NO_ERROR`)</sup>\n - Silently converts the value to string <sup>(e.g. `integer`)<sup>\n - Raises a warning <sup>(e.g. `array`)<sup>\n - Throws a fatal error, terminating the application <sup>(e.g. `stdClass`, objects without `__toString`)<sup>",tRegx:"`InvalidReplacementException` with descriptive message"},{title:"Using an invalid capturing group name<sup>(eg. name `!@#$`, index `-2`)</sup>",php:"Actually tries to get the group",tRegx:"`InvalidArgumentException` with descriptive message"},{title:"Using a nonexistent group<sup>(group name typo, group deleted)</sup>",php:"Actually tries to get the group",tRegx:"`NonexistentGroupException` with descriptive message"},{title:"Using an un-matched group<sup>(conditional group, unmatched by subject)",php:"Actually tries to get the group",tRegx:"`GroupNotMatchedException` with descriptive message"},{title:"Offsets in UTF-8<sup>(eg. 18\u20ac)</sup>",php:"In bytes<sup>5 bytes</sup>",tRegx:" - Method `offset()` - 3 characters\n - Method `byteOffset()` - 5 bytes"},{title:"Worst case complexity",php:"`(string|int|null)[][][]`<sup>array of arrays of arrays of string/null and integer - `preg_match_all()` with `PREG_OFFSET_CAPTURE`</sup>",tRegx:"`string[]`<sup>array of strings</sup>"}];const S=()=>{const e=E.map((e,t)=>a.a.createElement("tr",{key:t},a.a.createElement("td",null,a.a.createElement(R.a,null,e.title)),a.a.createElement("td",null,a.a.createElement(R.a,null,e.php)),a.a.createElement("td",null,a.a.createElement(R.a,null,e.tRegx))));return a.a.createElement("table",{className:w.a.comparisonTable,width:"100%",border:"0",cellSpacing:"0",cellPadding:"0"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null),a.a.createElement("th",null,"Plain PHP"),a.a.createElement("th",null,"T-Regx")),a.a.createElement("tr",{className:w.a.logoRow},a.a.createElement("th",null),a.a.createElement("th",null,a.a.createElement("img",{src:Object(i.a)("/img/comparison/php.png"),alt:"Plain PHP"})),a.a.createElement("th",null,a.a.createElement("img",{src:Object(i.a)("/img/t.regx.png"),alt:"T-Regx"})))),a.a.createElement("tbody",null,e))};var P=n(201);const C=e=>{const{shortName:t="t-regx",identifier:n="46dff8e37535ddb3571510672d1af48683bad013",title:i="Questions about T-Regx",path:o=""}=e,c=(Object(P.a)(),function(){this.page.identifier=n,i&&(this.page.title=i),this.page.url=location.href});return Object(r.useEffect)(()=>{if(window.DISQUS)window.DISQUS.reset({reload:!0,config:c});else{window.disqus_config=c;const e=document.createElement("script");e.src=`https://${t}.disqus.com/embed.js`,e.setAttribute("data-timestamp",+new Date),e.setAttribute("async",!0),document.body.appendChild(e)}}),a.a.createElement("div",{id:"disqus_thread"})},O=()=>{const e=Object(P.a)(),{siteConfig:t={}}=e;return a.a.createElement("a",{className:"github-button",href:t.customFields.mainRepoUrl,title:"See this project on GitHub","data-icon":"octicon-star","data-show-count":"true","data-count-href":`/${t.organizationName}/${t.projectName}/stargazers`,"data-count-aria-label":"# stargazers on GitHub","aria-label":"Star this project on GitHub"},"T-Regx")}}}]);