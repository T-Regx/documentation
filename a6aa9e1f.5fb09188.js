(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{192:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(201),c=t(210),o=t(224),i=t(203);var m=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){const{metadata:a,items:t}=e,{siteConfig:{title:n}}=Object(l.a)(),i="/"===a.permalink?n:"Blog";return r.a.createElement(c.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map(({content:e})=>r.a.createElement(o.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null))),r.a.createElement(m,{metadata:a})))))}},196:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return f}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),s=function(e){var a=r.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):o({},a,{},e)),t},u=function(e){var a=s(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=Object(n.forwardRef)((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return t?r.a.createElement(f,o({ref:a},m,{components:t})):r.a.createElement(f,o({ref:a},m))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=d;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var m=2;m<l;m++)c[m]=t[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},217:function(e,a,t){"use strict";var n=t(1),r=t(0),l=t.n(r),c=t(203),o=t(206),i=t(197),m=t.n(i),s=t(201),u=(t(100),t(101)),p=t.n(u);var d=e=>function({id:a,...t}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(s.a)();return a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:m()("anchor",{[p.a.enhancedAnchor]:!n}),id:a}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:`#${a}`,title:"Direct link to heading"},"#"),t.children):l.a.createElement(e,t)},f=t(102),g=t.n(f);a.a={code:e=>{const{children:a}=e;return"string"==typeof a?l.a.createElement(o.a,e):a},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:g.a.mdxCodeBlock},e)),h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")}},224:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(197),c=t.n(l),o=t(196),i=t(203),m=t(217),s=t(103),u=t.n(s);const p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:s=!1}=e,{date:d,permalink:f,tags:g}=n,{author:h,title:v}=t,E=t.author_url||t.authorURL,b=t.author_title||t.authorTitle,y=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:s?void 0:"margin-bottom--xl"},(()=>{const e=s?"h1":"h2",a=d.substring(0,10).split("-"),t=a[0],n=p[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},s?v:r.a.createElement(i.a,{to:f},v)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:d,className:u.a.blogPostDate},n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-vert--md"},y&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:E,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:y,alt:h})),r.a.createElement("div",{className:"avatar__intro"},h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},h)),r.a.createElement("small",{className:"avatar__subtitle"},b)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(o.a,{components:m.a},a)),(g.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},g.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),g.map(({label:e,permalink:a})=>r.a.createElement(i.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:n.permalink,"aria-label":`Read more about ${v}`},r.a.createElement("strong",null,"Read More")))))}}}]);