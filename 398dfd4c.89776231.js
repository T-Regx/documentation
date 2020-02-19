(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{124:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return i})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return s}));n(242),n(247),n(228),n(255),n(257),n(215);var r=n(207);function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var i={id:"introduction",title:"Introduction"},c=[{value:"Entry points",id:"entry-points",children:[]},{value:"Automatic delimiters",id:"automatic-delimiters",children:[{value:"Old-school patterns",id:"old-school-patterns",children:[]}]},{value:"Prepared Patterns",id:"prepared-patterns",children:[]}],a={rightToc:c},u="wrapper";function s(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,["components"]);return Object(r.b)(u,o({},a,n,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are two ways of instantiating a pattern for T-Regx. Each of them accepts an ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/delimiters"}),"undelimited")," pattern\nas the first argument and optional flags as the second argument. "),Object(r.b)("h2",{id:"entry-points"},"Entry points"),Object(r.b)("h4",{id:"class-method-style"},"Class method style:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"use TRegx\\CleanRegex\\Pattern;\n \nPattern::of('[A-Z][a-z]+')->test($subject);\n")),Object(r.b)("h4",{id:"global-function-style"},"Global function style:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"pattern('/[A-Z]#[a-z]+')->test($subject);\n")),Object(r.b)("h2",{id:"automatic-delimiters"},"Automatic delimiters"),Object(r.b)("p",null,"Notice, that these patterns ",Object(r.b)("strong",{parentName:"p"},"don't need to")," be delimited. Smart T-Regx will conveniently add them for you.\nYou can add flags to your regular expression by passing a second argument."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"pattern('[A-Z]+', 'im')->test($subject);\n")),Object(r.b)("p",null,"To learn more, go to ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/delimiters"}),"Automatic Delimiters"),"."),Object(r.b)("h3",{id:"old-school-patterns"},"Old-school patterns"),Object(r.b)("p",null,"Of course, you can still use delimited patterns with flags, with ",Object(r.b)("inlineCode",{parentName:"p"},"Pattern::pcre()"),". Both versions are equal with each other."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"Pattern::pcre('/[A-Z]+/im')->test($subject);\n")),Object(r.b)("h2",{id:"prepared-patterns"},"Prepared Patterns"),Object(r.b)("p",null,"To safely handle unsafe date or user input, see ",Object(r.b)("a",o({parentName:"p"},{href:"/docs/prepared-patterns"}),"Prepared Patterns"),"."))}s.isMDXComponent=!0},208:function(t,e,n){var r=n(249)("wks"),o=n(223),i=n(213).Symbol;t.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)("Symbol."+t))}},209:function(t,e,n){var r=n(214),o=n(222);t.exports=n(243)?function(t,e,n){return r.setDesc(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},213:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},214:function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},216:function(t,e,n){var r=n(213),o=n(217),i=n(209),c=n(219),a=n(244),u=function(t,e,n){var s,p,l,f,b=t&u.F,d=t&u.G,h=t&u.S,y=t&u.P,g=t&u.B,m=d?r:h?r[e]||(r[e]={}):(r[e]||{}).prototype,v=d?o:o[e]||(o[e]={}),O=v.prototype||(v.prototype={});for(s in d&&(n=e),n)l=((p=!b&&m&&s in m)?m:n)[s],f=g&&p?a(l,r):y&&"function"==typeof l?a(Function.call,l):l,m&&!p&&c(m,s,l),v[s]!=l&&i(v,s,f),y&&O[s]!=l&&(O[s]=l)};r.core=o,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},217:function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},218:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},219:function(t,e,n){var r=n(213),o=n(209),i=n(223)("src"),c=Function.toString,a=(""+c).split("toString");n(217).inspectSource=function(t){return c.call(t)},(t.exports=function(t,e,n,c){"function"==typeof n&&(n.hasOwnProperty(i)||o(n,i,t[e]?""+t[e]:a.join(String(e))),n.hasOwnProperty("name")||o(n,"name",e)),t===r?t[e]=n:(c||delete t[e],o(t,e,n))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[i]||c.call(this)}))},220:function(t,e){t.exports={}},222:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},223:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},224:function(t,e,n){var r=n(225);t.exports=function(t){return Object(r(t))}},225:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},226:function(t,e,n){var r=n(227);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},227:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},228:function(t,e,n){"use strict";var r=n(248),o=n(250),i=n(220),c=n(251);t.exports=n(252)(Array,"Array",(function(t,e){this._t=c(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},229:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},230:function(t,e,n){var r=n(214).setDesc,o=n(229),i=n(208)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},242:function(t,e,n){var r=n(216);r(r.S+r.F,"Object",{assign:n(246)})},243:function(t,e,n){t.exports=!n(218)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},244:function(t,e,n){var r=n(245);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},245:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},246:function(t,e,n){var r=n(214),o=n(224),i=n(226);t.exports=n(218)((function(){var t=Object.assign,e={},n={},r=Symbol(),o="abcdefghijklmnopqrst";return e[r]=7,o.split("").forEach((function(t){n[t]=t})),7!=t({},e)[r]||Object.keys(t({},n)).join("")!=o}))?function(t,e){for(var n=o(t),c=arguments,a=c.length,u=1,s=r.getKeys,p=r.getSymbols,l=r.isEnum;a>u;)for(var f,b=i(c[u++]),d=p?s(b).concat(p(b)):s(b),h=d.length,y=0;h>y;)l.call(b,f=d[y++])&&(n[f]=b[f]);return n}:Object.assign},247:function(t,e,n){n(228);var r=n(213),o=n(209),i=n(220),c=n(208)("iterator"),a=r.NodeList,u=r.HTMLCollection,s=a&&a.prototype,p=u&&u.prototype,l=i.NodeList=i.HTMLCollection=i.Array;s&&!s[c]&&o(s,c,l),p&&!p[c]&&o(p,c,l)},248:function(t,e,n){var r=n(208)("unscopables"),o=Array.prototype;null==o[r]&&n(209)(o,r,{}),t.exports=function(t){o[r][t]=!0}},249:function(t,e,n){var r=n(213),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},250:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},251:function(t,e,n){var r=n(226),o=n(225);t.exports=function(t){return r(o(t))}},252:function(t,e,n){"use strict";var r=n(253),o=n(216),i=n(219),c=n(209),a=n(229),u=n(220),s=n(254),p=n(230),l=n(214).getProto,f=n(208)("iterator"),b=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,h,y,g,m){s(n,e,h);var v,O,j=function(t){if(!b&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",w="values"==y,P=!1,_=t.prototype,S=_[f]||_["@@iterator"]||y&&_[y],N=S||j(y);if(S){var k=l(N.call(new t));p(k,x,!0),!r&&a(_,"@@iterator")&&c(k,f,d),w&&"values"!==S.name&&(P=!0,N=function(){return S.call(this)})}if(r&&!m||!b&&!P&&_[f]||c(_,f,N),u[e]=N,u[x]=d,y)if(v={values:w?N:j("values"),keys:g?N:j("keys"),entries:w?j("entries"):N},m)for(O in v)O in _||i(_,O,v[O]);else o(o.P+o.F*(b||P),e,v);return v}},253:function(t,e){t.exports=!1},254:function(t,e,n){"use strict";var r=n(214),o=n(222),i=n(230),c={};n(209)(c,n(208)("iterator"),(function(){return this})),t.exports=function(t,e,n){t.prototype=r.create(c,{next:o(1,n)}),i(t,e+" Iterator")}},255:function(t,e,n){"use strict";var r=n(256),o={};o[n(208)("toStringTag")]="z",o+""!="[object z]"&&n(219)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},256:function(t,e,n){var r=n(227),o=n(208)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=(e=Object(t))[o])?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},257:function(t,e,n){var r=n(224);n(258)("keys",(function(t){return function(e){return t(r(e))}}))},258:function(t,e,n){var r=n(216),o=n(217),i=n(218);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i((function(){n(1)})),"Object",c)}}}]);