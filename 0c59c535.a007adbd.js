(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{198:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=i.a.createContext({}),b=function(e){var n=i.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(t),u=a,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||o;return t?i.a.createElement(m,c(c({ref:n},l),{},{components:t})):i.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=t[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return b}));var a=t(3),i=t(7),o=(t(0),t(198)),r={id:"exception-structure",title:"Exception structure",sidebar_label:"Exceptions overview"},c={unversionedId:"exception-structure",id:"exception-structure",isDocsHomePage:!1,title:"Exception structure",description:"T-Regx uses a variety of exceptions to provide proper flow control.",source:"@site/../docs/exception-structure.md",slug:"/exception-structure",permalink:"/docs/exception-structure",version:"current",lastUpdatedAt:1611595794,sidebar_label:"Exceptions overview",sidebar:"docs",previous:{title:"Iterator",permalink:"/docs/match-iterator"},next:{title:"Capturing groups - in depth",permalink:"/docs/match-groups-in-depth"}},p=[{value:"Don&#39;t live with the animals",id:"dont-live-with-the-animals",children:[]},{value:"Invalid arguments",id:"invalid-arguments",children:[]},{value:"SafeRegex exceptions vs. CleanRegex",id:"saferegex-exceptions-vs-cleanregex",children:[{value:"About SafeRegex exceptions",id:"about-saferegex-exceptions",children:[]},{value:"About CleanRegex exceptions",id:"about-cleanregex-exceptions",children:[]},{value:"Summary",id:"summary",children:[]}]},{value:"Malformed patterns",id:"malformed-patterns",children:[]}],l={toc:p};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"T-Regx uses a variety of exceptions to provide proper flow control."),Object(o.b)("p",null,"Additionally, T-Regx is composed of two sub-systems:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/introduction-safe"},"SafeRegex")," (which handles low-level PHP/PCRE integration, while keeping the API intact)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/docs/introduction-clean"},"CleanRegex")," (high-level API, which provides modern approach and eliminates false positives and false negatives, being consequence of\nPCRE).")),Object(o.b)("h2",{id:"dont-live-with-the-animals"},"Don't live with the animals"),Object(o.b)("p",null,"Above everything else, we wanted to avoid a situation where T-Regx users would catch ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/language.exceptions.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\Exception"))," to silence everything that comes out of\nT-Regx."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use Exception;\n\ntry {\n  pattern('Foo')->test('Foo');\n// highlight-next-line\n} catch (Exception $ignore) { // not smart\n}\n")),Object(o.b)("p",null,"This is potentially dangerous since, while doing that, it's possible to unknowingly silence/ignore other exceptions thrown near T-Regx call."),Object(o.b)("p",null,"That's why every T-Regx exception extends a common interface exception: ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException"),", which you can use to shut T-Regx up :)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use TRegx\\Exception\\RegexException;\n\ntry {\n  pattern('Foo')->test('Foo');\n// highlight-next-line\n} catch (RegexException $ignore) { // smart\n}\n")),Object(o.b)("h2",{id:"invalid-arguments"},"Invalid arguments"),Object(o.b)("p",null,"Apart from ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException"),", for certain arguments and methods ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))," is thrown, when arguments of invalid types or\narguments that are semantically inappropriate are used."),Object(o.b)("p",null,"For example, when ",Object(o.b)("inlineCode",{parentName:"p"},"only()")," is used with negative index:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use InvalidArgumentException;\n\ntry {\n  pattern('Foo')->match('Foo')->only(-1);\n// highlight-next-line\n} catch (InvalidArgumentException $exception) {\n}\n")),Object(o.b)("p",null,"So to really catch ",Object(o.b)("strong",{parentName:"p"},"every"),", ",Object(o.b)("em",{parentName:"p"},"single")," possible exception, you would need to catch both ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException")," and\n",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException")),". Nothing else could slip by."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use InvalidArgumentException;\nuse TRegx\\Exception\\RegexException;\n\ntry {\n  // any T-Regx code\n// highlight-next-line\n} catch (RegexException | InvalidArgumentException $ignore) {\n}\n")),Object(o.b)("p",null,"We decided to separate ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException")," and ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))," because we understand that sometimes, regular expression\nexceptions are wanted. For example, you might expect to use them against data which is unsafe. In that case, catching ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException"),"\nis a proper control of that case."),Object(o.b)("p",null,"However, we don't really believe passing ",Object(o.b)("inlineCode",{parentName:"p"},"-1")," to ",Object(o.b)("inlineCode",{parentName:"p"},"only()")," is ever a good idea, even when it comes from an unsafe place. Methods\nlike ",Object(o.b)("inlineCode",{parentName:"p"},"only()")," should never be called with arguments like ",Object(o.b)("inlineCode",{parentName:"p"},"-1"),", that's why this exception is not ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException"),", and it won't fall into the\nproper handling. It's most likely a mistake that shouldn't happen, and the developer should handle it in other way (for example, never\nlet ",Object(o.b)("inlineCode",{parentName:"p"},"only()")," be called with ",Object(o.b)("inlineCode",{parentName:"p"},"-1"),"\nin the first place)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use InvalidArgumentException;\nuse TRegx\\Exception\\RegexException;\n\ntry {\n  pattern($config['pattern'])->match($subject)->only($index);\n} catch (RegexException $exception) {\n// highlight-next-line\n  // probably config is not good\n} catch (InvalidArgumentException $exception) {\n// highlight-next-line\n  // you messed up, don't catch me\n}\n")),Object(o.b)("h2",{id:"saferegex-exceptions-vs-cleanregex"},"SafeRegex exceptions vs. CleanRegex"),Object(o.b)("p",null,"By this time, we're sure you must be aware that ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean"},"CleanRegex")," (so ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"pattern()")),", ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"Pattern::of()")),", ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"Pattern::prepare()")),")\nis built on top of ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe"},"SafeRegex")," (providing ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe#about-saferegex"},Object(o.b)("inlineCode",{parentName:"a"},"preg::match()")),", ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe#about-saferegex"},Object(o.b)("inlineCode",{parentName:"a"},"preg::replace()")),", etc.)."),Object(o.b)("p",null,"We tried really hard to design an exception structure in such a way, so it makes sense to the users, and so it resembles the real\ninteraction of these two systems. Here's what we came up with."),Object(o.b)("h3",{id:"about-saferegex-exceptions"},"About SafeRegex exceptions"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe"},"SafeRegex")," methods can throw ",Object(o.b)("inlineCode",{parentName:"p"},"PregException")," and ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException")),". ",Object(o.b)("inlineCode",{parentName:"p"},"PregException")," implements ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException")," so you can use\neither to catch ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/ref.pcre.php"},"preg functions")," exceptions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use TRegx\\Exception\\RegexException;\nuse TRegx\\SafeRegex\\Exception\\PregException;\nuse TRegx\\SafeRegex\\preg;\n\ntry {\n    preg::match('/foo/', 'foo');\n// highlight-next-line\n} catch (PregException $exception) {\n    $exception instanceof RegexException; // true\n}\n")),Object(o.b)("p",null,"We don't encourage it (since ",Object(o.b)("inlineCode",{parentName:"p"},"PregException")," unifies a broad family of exceptions), but should you wish to silence ",Object(o.b)("inlineCode",{parentName:"p"},"preg::")," methods, that's\nthe way to do it."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PregException")," actually represents a family of exceptions:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CatastrophicBacktrackingPregException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"SubjectEncodingPregException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Utf8OffsetPregException"),"; which T-Regx throws when\n",Object(o.b)("a",{parentName:"li",href:"https://www.php.net/manual/en/function.preg-last-error.php"},Object(o.b)("inlineCode",{parentName:"a"},"preg_last_error()"))," says so"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CompilePregException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"MalformedPatternException"),"; which T-Regx throws on warnings/errors emitted by PHP"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SubjectEncodingPregException")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Utf8OffsetPregException"),"; which T-Regx throws for invalid subject encoding or invalid unicode offset"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"InvalidReturnValueException")," which T-Regx throws for invalid value type returned from ",Object(o.b)("inlineCode",{parentName:"li"},"preg::replace_callback()")," callback"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SuspectedReturnPregException")," which T-Regx throws when ",Object(o.b)("a",{parentName:"li",href:"https://www.php.net/manual/en/ref.pcre.php"},"preg functions")," return values indicating error, but nature of the error couldn't\nbe determined by other means")),Object(o.b)("h3",{id:"about-cleanregex-exceptions"},"About CleanRegex exceptions"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean"},"CleanRegex")," methods can throw ",Object(o.b)("inlineCode",{parentName:"p"},"PatternException")," and ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException")),". "),Object(o.b)("p",null,"Additionally, because ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean"},"CleanRegex")," is built on top of ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe"},"SafeRegex"),", any ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe"},"SafeRegex")," exceptions can also be thrown with ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean"},"CleanRegex")," methods.\nFor example, it's possible to induce catastrophic backtracking with ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"pattern()")),", in that case ",Object(o.b)("inlineCode",{parentName:"p"},"CatastrophicBacktrackingPregException"),"\n(which is ",Object(o.b)("inlineCode",{parentName:"p"},"PregException"),") will be thrown."),Object(o.b)("p",null,"It doesn't work the other way, so ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe"},"SafeRegex")," will never throw ",Object(o.b)("inlineCode",{parentName:"p"},"PatternException"),"."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PatternException")," implements ",Object(o.b)("inlineCode",{parentName:"p"},"RegexException")," (just like ",Object(o.b)("inlineCode",{parentName:"p"},"PregException"),"), so you can use either to catch exceptions thrown from\n",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"pattern()")),", ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"Pattern::of()"))," and ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"Pattern::prepare()")),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use TRegx\\Exception\\RegexException;\nuse TRegx\\CleanRegex\\Exception\\PatternException;\nuse TRegx\\SafeRegex\\Exception\\PregException;\n\ntry {\n    pattern('foo')->test('foo');\n// highlight-next-line\n} catch (PatternException | PregException $exception) {\n    $exception instanceof RegexException; // true\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use TRegx\\Exception\\RegexException;\n\ntry {\n    pattern('foo')->test('foo');\n// highlight-next-line\n} catch (RegexException $exception) {\n    // good as well\n}\n")),Object(o.b)("p",null,"Similarly to how ",Object(o.b)("inlineCode",{parentName:"p"},"PregException")," unifies exceptions thrown from ",Object(o.b)("a",{parentName:"p",href:"https://www.php.net/manual/en/ref.pcre.php"},"preg functions"),", ",Object(o.b)("inlineCode",{parentName:"p"},"PatternException")," unifies exceptions thrown from\n",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"pattern()")),", ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"Pattern::of()"))," and ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"Pattern::prepare()")),". Because of that, we don't recommending catching ",Object(o.b)("inlineCode",{parentName:"p"},"PatternException"),", unless you\nactually need to handle every exception expected of those methods."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PatternException")," represents:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inappropriately constructed pattern being used: ",Object(o.b)("inlineCode",{parentName:"li"},"MalformedPatternException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ExplicitDelimiterRequiredException"),",\n",Object(o.b)("inlineCode",{parentName:"li"},"FormatMalformedPatternException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"DuplicateFlagsException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"FlagNotAllowedException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"TemplateFormatException")),Object(o.b)("li",{parentName:"ul"},"Match expectations weren't met: ",Object(o.b)("inlineCode",{parentName:"li"},"SubjectNotMatchedException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"NoSuchNthElementException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"NoSuchElementFluentException")),Object(o.b)("li",{parentName:"ul"},"Improper replacement attempted, or replacement expectations weren't met: ",Object(o.b)("inlineCode",{parentName:"li"},"NotReplacedException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"InvalidReplacementException"),"\n, ",Object(o.b)("inlineCode",{parentName:"li"},"InvalidReturnValueException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"MissingReplacementKeyException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"ReplacementExpectationFailedException")),Object(o.b)("li",{parentName:"ul"},"Capturing groups being used inappropriately: ",Object(o.b)("inlineCode",{parentName:"li"},"FocusGroupNotMatchedException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"GroupNotMatchedException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"NonexistentGroupException")),Object(o.b)("li",{parentName:"ul"},"Optionals being resolved to exception: ",Object(o.b)("inlineCode",{parentName:"li"},"ClassExpectedException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"NoSuitableConstructorException")),Object(o.b)("li",{parentName:"ul"},"Non-integer string being used as integer: ",Object(o.b)("inlineCode",{parentName:"li"},"IntegerFormatException"),", ",Object(o.b)("inlineCode",{parentName:"li"},"FluentMatchPatternException"))),Object(o.b)("p",null,"We don't encourage you to catch ",Object(o.b)("inlineCode",{parentName:"p"},"PatternException")," because of its broad usages, so please only do so when you wish to silence absolutely\nevery exception thrown from ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean#entry-points"},Object(o.b)("inlineCode",{parentName:"a"},"pattern()"))," and other CleanRegex methods."),Object(o.b)("h3",{id:"summary"},"Summary"),Object(o.b)("p",null,"To summarize everything so far:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://www.php.net/manual/en/class.invalidargumentexception.php"},Object(o.b)("inlineCode",{parentName:"a"},"\\InvalidArgumentException"))," is being thrown for obvious illegal arguments"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PregException")," is thrown by ",Object(o.b)("a",{parentName:"li",href:"/docs/introduction-safe"},"SafeRegex")," and ",Object(o.b)("a",{parentName:"li",href:"/docs/introduction-clean"},"CleanRegex"),", regarding low-level operations"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PatternException")," is thrown by ",Object(o.b)("a",{parentName:"li",href:"/docs/introduction-clean"},"CleanRegex")," regarding higher-API operations"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RegexException")," is ",Object(o.b)("inlineCode",{parentName:"li"},"PregException | PatternException"))),Object(o.b)("h2",{id:"malformed-patterns"},"Malformed patterns"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"MalformedPatternException")," should be used to handle pattern being malformed from every ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe"},"SafeRegex")," and ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean"},"CleanRegex")," entry point:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/docs/introduction-safe"},"SafeRegex")," methods:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use TRegx\\Exception\\MalformedPatternException;\nuse TRegx\\SafeRegex\\preg;\n\ntry {\n    preg::match('/(foo/', 'foo');\n// highlight-next-line\n} catch (MalformedPatternException $exception) {\n    // handle '/(foo/'\n}\n")),Object(o.b)("p",null,"...and ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean"},"CleanRegex")," methods:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use TRegx\\Exception\\MalformedPatternException;\n\ntry {\n    pattern('(foo')->test('foo');\n// highlight-next-line\n} catch (MalformedPatternException $exception) {\n    // handle '(foo'\n}\n")),Object(o.b)("p",null,"as well as ",Object(o.b)("a",{parentName:"p",href:"/docs/introduction-clean"},"CleanRegex")," API for ",Object(o.b)("a",{parentName:"p",href:"/docs/handling-user-input"},"Prepared Patterns"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-php"},"use TRegx\\CleanRegex\\Pattern;\nuse TRegx\\Exception\\MalformedPatternException;\n\ntry {\n    Pattern::inject('(foo:@', [$value])->test('foo:bar');\n// highlight-next-line\n} catch (MalformedPatternException $exception) {\n    // handle '(foo'\n}\n")))}b.isMDXComponent=!0}}]);