(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~Bot~Chat~Conversations~Greeting"],{wMS7:function(e,t,n){e.exports=function(){"use strict";var e=Object.freeze||function(e){return e},t=e(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),n=e(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"]),r=e(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),o=e(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),i=e(["#text"]),a=Object.freeze||function(e){return e},l=a(["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","minlength","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"]),c=a(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),s=a(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),u=a(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),d=Object.hasOwnProperty,f=Object.setPrototypeOf,p=("undefined"!=typeof Reflect&&Reflect).apply;function m(e,t){f&&f(e,null);for(var n=t.length;n--;){var r=t[n];if("string"==typeof r){var o=r.toLowerCase();o!==r&&(Object.isFrozen(t)||(t[n]=o),r=o)}e[r]=!0}return e}function h(e){var t={},n=void 0;for(n in e)p(d,e,[n])&&(t[n]=e[n]);return t}p||(p=function(e,t,n){return e.apply(t,n)});var g=Object.seal||function(e){return e},y=g(/\{\{[\s\S]*|[\s\S]*\}\}/gm),v=g(/<%[\s\S]*|[\s\S]*%>/gm),b=g(/^data-[\-\w.\u00B7-\uFFFF]/),T=g(/^aria-[\-\w]+$/),A=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),x=g(/^(?:\w+script|data):/i),L=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g),S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function w(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var M=("undefined"!=typeof Reflect&&Reflect).apply,E=Array.prototype.slice,k=Object.freeze,_=function(){return"undefined"==typeof window?null:window};M||(M=function(e,t,n){return e.apply(t,n)});var N=function(e,t){if("object"!==(void 0===e?"undefined":S(e))||"function"!=typeof e.createPolicy)return null;var n=null;t.currentScript&&t.currentScript.hasAttribute("data-tt-policy-suffix")&&(n=t.currentScript.getAttribute("data-tt-policy-suffix"));var r="dompurify"+(n?"#"+n:"");try{return e.createPolicy(r,{createHTML:function(e){return e}})}catch(e){return console.warn("TrustedTypes policy "+r+" could not be created."),null}};return function e(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_(),d=function(t){return e(t)};if(d.version="2.0.3",d.removed=[],!a||!a.document||9!==a.document.nodeType)return d.isSupported=!1,d;var f=a.document,p=!1,g=!1,O=!1,R=a.document,D=a.DocumentFragment,C=a.HTMLTemplateElement,H=a.Node,F=a.NodeFilter,z=a.NamedNodeMap,I=void 0===z?a.NamedNodeMap||a.MozNamedAttrMap:z,U=a.Text,j=a.Comment,P=a.DOMParser,B=a.TrustedTypes;if("function"==typeof C){var W=R.createElement("template");W.content&&W.content.ownerDocument&&(R=W.content.ownerDocument)}var G=N(B,f),q=G?G.createHTML(""):"",V=R,Y=V.implementation,J=V.createNodeIterator,K=V.getElementsByTagName,X=V.createDocumentFragment,$=f.importNode,Q={};d.isSupported=Y&&void 0!==Y.createHTMLDocument&&9!==R.documentMode;var Z=y,ee=v,te=b,ne=T,re=x,oe=L,ie=A,ae=null,le=m({},[].concat(w(t),w(n),w(r),w(o),w(i))),ce=null,se=m({},[].concat(w(l),w(c),w(s),w(u))),ue=null,de=null,fe=!0,pe=!0,me=!1,he=!1,ge=!1,ye=!1,ve=!1,be=!1,Te=!1,Ae=!1,xe=!1,Le=!1,Se=!0,we=!0,Me=!1,Ee={},ke=m({},["audio","colgroup","head","math","script","style","template","thead","svg","video"]),_e=m({},["audio","video","img","source","image"]),Ne=null,Oe=m({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),Re=null,De=R.createElement("form"),Ce=function(e){Re&&Re===e||(e&&"object"===(void 0===e?"undefined":S(e))||(e={}),ae="ALLOWED_TAGS"in e?m({},e.ALLOWED_TAGS):le,ce="ALLOWED_ATTR"in e?m({},e.ALLOWED_ATTR):se,Ne="ADD_URI_SAFE_ATTR"in e?m(h(Oe),e.ADD_URI_SAFE_ATTR):Oe,ue="FORBID_TAGS"in e?m({},e.FORBID_TAGS):{},de="FORBID_ATTR"in e?m({},e.FORBID_ATTR):{},Ee="USE_PROFILES"in e&&e.USE_PROFILES,fe=!1!==e.ALLOW_ARIA_ATTR,pe=!1!==e.ALLOW_DATA_ATTR,me=e.ALLOW_UNKNOWN_PROTOCOLS||!1,he=e.SAFE_FOR_JQUERY||!1,ge=e.SAFE_FOR_TEMPLATES||!1,ye=e.WHOLE_DOCUMENT||!1,Te=e.RETURN_DOM||!1,Ae=e.RETURN_DOM_FRAGMENT||!1,xe=e.RETURN_DOM_IMPORT||!1,Le=e.RETURN_TRUSTED_TYPE||!1,be=e.FORCE_BODY||!1,Se=!1!==e.SANITIZE_DOM,we=!1!==e.KEEP_CONTENT,Me=e.IN_PLACE||!1,ie=e.ALLOWED_URI_REGEXP||ie,ge&&(pe=!1),Ae&&(Te=!0),Ee&&(ae=m({},[].concat(w(i))),ce=[],!0===Ee.html&&(m(ae,t),m(ce,l)),!0===Ee.svg&&(m(ae,n),m(ce,c),m(ce,u)),!0===Ee.svgFilters&&(m(ae,r),m(ce,c),m(ce,u)),!0===Ee.mathMl&&(m(ae,o),m(ce,s),m(ce,u))),e.ADD_TAGS&&(ae===le&&(ae=h(ae)),m(ae,e.ADD_TAGS)),e.ADD_ATTR&&(ce===se&&(ce=h(ce)),m(ce,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&m(Ne,e.ADD_URI_SAFE_ATTR),we&&(ae["#text"]=!0),ye&&m(ae,["html","head","body"]),ae.table&&(m(ae,["tbody"]),delete ue.tbody),k&&k(e),Re=e)},He=function(e){d.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=q}},Fe=function(e,t){try{d.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){d.removed.push({attribute:null,from:t})}t.removeAttribute(e)},ze=function(e){var t=void 0,n=void 0;if(be)e="<remove></remove>"+e;else{var r=e.match(/^[\s]+/);(n=r&&r[0])&&(e=e.slice(n.length))}if(p)try{t=(new P).parseFromString(e,"text/html")}catch(e){}if(O&&m(ue,["title"]),!t||!t.documentElement){var o=(t=Y.createHTMLDocument("")).body;o.parentNode.removeChild(o.parentNode.firstElementChild),o.outerHTML=G?G.createHTML(e):e}return n&&t.body.insertBefore(R.createTextNode(n),t.body.childNodes[0]||null),K.call(t,ye?"html":"body")[0]};d.isSupported&&(function(){try{ze('<svg><p><textarea><img src="</textarea><img src=x abc=1//">').querySelector("svg img")&&(p=!0)}catch(e){}}(),function(){try{ze("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").innerHTML.match(/<\/title/)&&(O=!0)}catch(e){}}(),function(){try{ze("<svg></p></svg>").querySelector("svg p")&&(g=!0)}catch(e){}}());var Ie=function(e){return J.call(e.ownerDocument||e,e,F.SHOW_ELEMENT|F.SHOW_COMMENT|F.SHOW_TEXT,(function(){return F.FILTER_ACCEPT}),!1)},Ue=function(e){return!(e instanceof U||e instanceof j||"string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof I&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},je=function(e){return"object"===(void 0===H?"undefined":S(H))?e instanceof H:e&&"object"===(void 0===e?"undefined":S(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},Pe=function(e,t,n){Q[e]&&Q[e].forEach((function(e){e.call(d,t,n,Re)}))},Be=function(e){var t=void 0;if(Pe("beforeSanitizeElements",e,null),Ue(e))return He(e),!0;var n=e.nodeName.toLowerCase();if(Pe("uponSanitizeElement",e,{tagName:n,allowedTags:ae}),!ae[n]||ue[n]){if(we&&!ke[n]&&"function"==typeof e.insertAdjacentHTML)try{var r=e.innerHTML;e.insertAdjacentHTML("AfterEnd",G?G.createHTML(r):r)}catch(e){}return He(e),!0}return"noscript"===n&&e.innerHTML.match(/<\/noscript/i)||"noembed"===n&&e.innerHTML.match(/<\/noembed/i)||e.namespaceURI&&e.namespaceURI.match(/svg|math/i)&&e.textContent&&e.textContent.match(new RegExp("</"+n,"i"))?(He(e),!0):"svg"!==n&&"math"!==n||!(e.innerHTML&&e.innerHTML.match(/<template/i)||void 0===e.innerHTML&&g)?(!he||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(d.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),ge&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(Z," ")).replace(ee," "),e.textContent!==t&&(d.removed.push({element:e.cloneNode()}),e.textContent=t)),Pe("afterSanitizeElements",e,null),!1):(He(e),!0)},We=function(e,t,n){if(Se&&("id"===t||"name"===t)&&(n in R||n in De))return!1;if(pe&&te.test(t));else if(fe&&ne.test(t));else{if(!ce[t]||de[t])return!1;if(Ne[t]);else if(ie.test(n.replace(oe,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==n.indexOf("data:")||!_e[e])if(me&&!re.test(n.replace(oe,"")));else if(n)return!1}return!0},Ge=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;Pe("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ce};for(i=a.length;i--;){var c=t=a[i],s=c.name,u=c.namespaceURI;if(n=t.value.trim(),r=s.toLowerCase(),l.attrName=r,l.attrValue=n,l.keepAttr=!0,Pe("uponSanitizeAttribute",e,l),n=l.attrValue,g&&n.match(/<\//)&&He(e),"name"===r&&"IMG"===e.nodeName&&a.id)o=a.id,a=M(E,a,[]),Fe("id",e),Fe(s,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&l.keepAttr&&(ce[r]||!de[r]))continue;"id"===s&&e.setAttribute(s,""),Fe(s,e)}if(l.keepAttr){ge&&(n=(n=n.replace(Z," ")).replace(ee," "));var f=e.nodeName.toLowerCase();if(We(f,r,n))try{u?e.setAttributeNS(u,s,n):e.setAttribute(s,n),d.removed.pop()}catch(e){}}}Pe("afterSanitizeAttributes",e,null)}},qe=function e(t){var n=void 0,r=Ie(t);for(Pe("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Pe("uponSanitizeShadowNode",n,null),Be(n)||(n.content instanceof D&&e(n.content),Ge(n));Pe("afterSanitizeShadowDOM",t,null)};return d.sanitize=function(e,t){var n=void 0,r=void 0,o=void 0,i=void 0,l=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!je(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!d.isSupported){if("object"===S(a.toStaticHTML)||"function"==typeof a.toStaticHTML){if("string"==typeof e)return a.toStaticHTML(e);if(je(e))return a.toStaticHTML(e.outerHTML)}return e}if(ve||Ce(t),d.removed=[],Me);else if(e instanceof H)1===(r=(n=ze("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName||"HTML"===r.nodeName?n=r:n.appendChild(r);else{if(!Te&&!ge&&!ye&&Le&&-1===e.indexOf("<"))return G?G.createHTML(e):e;if(!(n=ze(e)))return Te?null:q}n&&be&&He(n.firstChild);for(var c=Ie(Me?e:n);o=c.nextNode();)3===o.nodeType&&o===i||Be(o)||(o.content instanceof D&&qe(o.content),Ge(o),i=o);if(i=null,Me)return e;if(Te){if(Ae)for(l=X.call(n.ownerDocument);n.firstChild;)l.appendChild(n.firstChild);else l=n;return xe&&(l=$.call(f,l,!0)),l}var s=ye?n.outerHTML:n.innerHTML;return ge&&(s=(s=s.replace(Z," ")).replace(ee," ")),G&&Le?G.createHTML(s):s},d.setConfig=function(e){Ce(e),ve=!0},d.clearConfig=function(){Re=null,ve=!1},d.isValidAttribute=function(e,t,n){Re||Ce({});var r=e.toLowerCase(),o=t.toLowerCase();return We(r,o,n)},d.addHook=function(e,t){"function"==typeof t&&(Q[e]=Q[e]||[],Q[e].push(t))},d.removeHook=function(e){Q[e]&&Q[e].pop()},d.removeHooks=function(e){Q[e]&&(Q[e]=[])},d.removeAllHooks=function(){Q={}},d}()}()}}]);