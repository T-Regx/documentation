/*! For license information please see 0df88cbf.ea4c35c5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{167:function(e,n,t){"use strict";var r=t(0),a=t(21);n.a=function(){var e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},171:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},173:function(e,n,t){var r;!function(){"use strict";var t={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===l)for(var c in r)t.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(e.exports=r)}()},174:function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return i}));var r=t(0),a=t.n(r),l=t(168),o=t(176);function c(e){return Array.isArray(e)?e.join(""):e}const i=({children:e})=>a.a.createElement(o.a,{options:{overrides:{pre:s}}},c(e)),s=({children:e})=>a.a.createElement(l.a,e.props)},181:function(e,n,t){"use strict";var r=t(0),a=t.n(r).a.createContext(void 0);n.a=a},182:function(e,n,t){"use strict";var r=t(0),a=t(181);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},183:function(e,n,t){"use strict";t.d(n,"c",(function(){return c})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return s}));var r=t(0),a=t.n(r),l=t(168),o=t(174);function c(e){return String.fromCharCode(e+65)}const i=({children:e})=>a.a.createElement(l.a,null,Object(o.b)(e)),s=({children:e})=>a.a.createElement(i,null,e.replace(/^<\?php\s+(use\s+[\w\\]+;\s+)*/,"").trim())},185:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r);class l extends a.a.Component{render(){return a.a.createElement(a.a.Fragment,null)}}},186:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r);class l extends a.a.Component{render(){return a.a.createElement(a.a.Fragment,null)}}},192:function(e,n,t){"use strict";var r=t(0),a=t.n(r),l=t(174),o=t(173),c=t.n(o);t(185),t(186);const i=(e,n)=>r.Children.map(e,(e,t)=>n(e.props,t));var s=t(183),u=t(200),d=t.n(u),m=({index:e,body:n,children:t,selfExplanatory:l,onClick:o,onHover:c})=>{const[s,u]=Object(r.useState)(null),[m,h]=Object(r.useState)(!1);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Question #",e+1),n,a.a.createElement("ul",{className:d.a.answers},function(e,n){return i(e,(e,t)=>n(e,t))}(t,({correct:e,markdown:n,code:t,children:r,help:i,markdownHelp:d=!0,hoverCode:v},E)=>a.a.createElement(p,{key:E,selected:E===s,correct:null!==s?e:"Nice try, you hacker :D What else you got?",answered:null!==s,help:m&&i,hasHelp:!l,inactive:l?null!==s:m&&i,markdownHelp:d,onClick:()=>((e,n)=>{null===s?(o&&o(n),u(e)):h(!0)})(E,e),onMouseEnter:()=>c(v),onMouseLeave:()=>c(null)},a.a.createElement(f,{index:E,markdown:n,code:t,children:r})))))};const p=e=>{const{children:n,selected:t,correct:r,answered:l,inactive:o,hasHelp:i,help:s,markdownHelp:u}=e,{onClick:m,onMouseEnter:p,onMouseLeave:f}=e;return a.a.createElement("li",{onMouseEnter:p,onMouseLeave:f},a.a.createElement("div",{onClick:m,className:c()(d.a.listItem,{[d.a.selected]:t,[d.a.correct]:t&&r,[d.a.incorrect]:t&&!r,[d.a.alreadyAnswered]:l,[d.a.inactive]:o,[d.a.hasHelp]:i})},n,s&&a.a.createElement(h,{help:s,markdown:u})))},h=({help:e,markdown:n})=>{const t=Array.isArray(e)?e:[e];return a.a.createElement("div",{className:d.a.help},t.map(e=>a.a.createElement("p",null,"\u24d8 ",n?(e=>e.type===a.a.Fragment?a.a.createElement(l.a,{children:e.props.children}):a.a.createElement(l.a,{children:e}))(e):e)))},f=({index:e,markdown:n,children:t,code:r})=>{const o=n?a.a.createElement(l.a,null,t):t;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",null,Object(s.c)(e),".\xa0",o),r&&a.a.createElement("div",{style:{marginTop:"3px"}},a.a.createElement(s.b,null,r)))};var v=t(212),E=({value:e,children:n})=>a.a.createElement(v.a,{withoutControls:!0,disableEdgeSwiping:!0,slideIndex:e,cellSpacing:700,slidesToShow:1,autoplay:!1,easing:"easeQuadIn",transitionMode:"scroll",slidesToScroll:"auto",frameOverflow:"visible",heightMode:"current",wrapAround:!1,dragging:!1,swiping:!1,children:n}),g=({questions:e,slide:n,onSlideChange:t,firstSlide:o,lastSlide:c})=>a.a.createElement(E,{value:n},a.a.createElement("div",null,o),function(e,n){return i(e,(e,t)=>n(e,t))}(e,(n,o)=>{const{body:c,question:i,code:u,markdown:d,php:p,selfExplanatory:h,children:f,hoverExample:v}=n;let[E,g]=Object(r.useState)(u);const w=i&&(d?a.a.createElement(l.a,null,i):i),y=u&&(p?a.a.createElement(s.b,null,E||u):a.a.createElement(s.a,null,E||u));return a.a.createElement("div",{key:o},a.a.createElement(m,{index:o,body:c||a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,w),y),children:f,selfExplanatory:h,onHover:e=>g(e),onClick:n=>t(o,n,e.length-1===o)}))}),a.a.createElement("div",null,c)),w=t(207),y=t.n(w),b=({answers:e,current:n,onPointClick:t})=>{const[l,o]=Object(r.useState)(!1);return a.a.createElement("div",{className:y.a.container},e.map((r,l)=>a.a.createElement("span",{key:l,className:c()(y.a.openAnimation,{[y.a.dimmed]:l>n}),onClick:()=>{t(l),l<e.length-1&&o(!0)}},a.a.createElement(k,{value:r}))),e.length>1&&!l&&a.a.createElement("small",null,"Navigate back to see the explanations"))};const k=({value:e})=>"correct"===e?a.a.createElement("b",null,"\u2713"):"incorrect"===e?a.a.createElement("span",{style:{color:"#ff4242"}},"\u2718"):"pending"===e?a.a.createElement("span",null,"\u25cf"):"last"===e?a.a.createElement("span",null,"\u2605"):void 0;n.a=({questions:e,openingSlide:n,finishSlide:t})=>{const[l,o]=Object(r.useState)(-1),[c,i]=Object(r.useState)({}),s=(e,n,t)=>{var r,a;i((r=c,a={[e]:n?"correct":"incorrect",[e+1]:t?"last":"pending"},Object.assign({},r,a)))};return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,{questions:e,slide:l+1,onSlideChange:(e,n,t)=>{s(e,n,t),o(e+1)},firstSlide:n(()=>{o(0),i({0:"pending"})}),lastSlide:t()}),a.a.createElement(b,{answers:Object.values(c),current:l,onPointClick:e=>o(e)}))}},200:function(e,n,t){e.exports={answers:"answers_20MG",listItem:"listItem_2cq8","codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-":"codeBlockLines_node_modules-@docusaurus-theme-classic-lib-theme-CodeBlock-_3p5H",help:"help_2dAw",inactive:"inactive_1NO1",selected:"selected_26xY",correct:"correct_2xDv",hasHelp:"hasHelp_rjBD",incorrect:"incorrect_28Oo",alreadyAnswered:"alreadyAnswered_3fPr"}},207:function(e,n,t){e.exports={container:"container_1K9I",dimmed:"dimmed_3A6W",openAnimation:"openAnimation_21rh","fade-in":"fade-in_1D3G"}},54:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return o}));var r=t(0),a=t.n(r),l=t(192);class o extends r.Component{constructor(e,n){super(e,n),this.state={mountedOnce:!1}}componentDidMount(){this.setState({mountedOnce:!0})}render(){return this.state.mountedOnce?a.a.createElement(l.a,{questions:this.props.questions,openingSlide:this.props.openingSlide,finishSlide:this.props.finishSlide}):this.props.openingSlide?this.props.openingSlide(()=>{}):a.a.createElement(a.a.Fragment,null)}}}}]);