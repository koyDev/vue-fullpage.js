/*!
 * vue-fullpage.js v0.1.6
 * https://github.com/alvarotrigo/vue-fullpage.js
 *
 * @license vue-fullpage is released under the MIT license but notice
 * fullPage.js is licensed under GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/vue-fullpage/ - A project by Alvaro Trigo
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueFullpageJs"] = factory();
	else
		root["VueFullpageJs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.0.9 - Extensions 0.1.9
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e.fullpage=o(t,n),e.fullpage}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,function(an,sn){"use strict";var cn="fullpage-wrapper",un="."+cn,fn="fp-responsive",dn="fp-notransition",vn="fp-destroyed",pn="fp-enabled",hn="fp-viewing",gn="active",mn="."+gn,Sn="fp-completely",bn="fp-section",wn="."+bn,yn=wn+mn,En="fp-tableCell",xn="."+En,An="fp-auto-height",Ln="fp-normal-scroll",Mn="fp-nav",Tn="#"+Mn,On="fp-tooltip",kn="fp-slide",Cn="."+kn,Hn=Cn+mn,Rn="fp-slides",In="."+Rn,zn="fp-slidesContainer",Bn="."+zn,Nn="fp-table",jn="fp-slidesNav",Pn="."+jn,Wn=Pn+" a",e="fp-controlArrow",Dn="."+e,Yn="fp-prev",Vn=Dn+".fp-prev",Zn=Dn+".fp-next";function Xn(e,t){an.console&&an.console[e]&&an.console[e]("fullPage: "+t)}function Gn(e,t){return(t=1<arguments.length?t:sn)?t.querySelectorAll(e):null}function Fn(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Fn(e[r],o[r]))}return e}function Un(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Qn(){return"innerHeight"in an?an.innerHeight:sn.documentElement.offsetHeight}function _n(){return an.innerWidth}function Jn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!yo(o,t);)o=o[n];return o}function Kn(e,t){return n(e,t,"previousElementSibling")}function $n(e,t){return n(e,t,"nextElementSibling")}function qn(e,t){if(null==t)return e.previousElementSibling;var n=qn(e);return n&&yo(n,t)?n:null}function eo(e,t){if(null==t)return e.nextElementSibling;var n=eo(e);return n&&yo(n,t)?n:null}function to(e){return e[e.length-1]}function no(e,t){e=io(e)?e[0]:e;for(var n=null!=t?Gn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return io(e)?e:[e]}function oo(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ro(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function io(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function lo(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ao(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function so(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||sn.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function co(e,t){o(e,t,!0)}function uo(e,t){for("string"==typeof t&&(t=xo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function fo(e){for(var t=sn.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function vo(e,t){return e&&1===e.nodeType?yo(e,t)?e:vo(e.parentNode,t):null}function po(e,t){r(e,e.nextSibling,t)}function ho(e,t){r(e,e,t)}function r(e,t,n){io(n)||("string"==typeof n&&(n=xo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function go(){var e=sn.documentElement;return(an.pageYOffset||e.scrollTop)-(e.clientTop||0)}function mo(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function So(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function bo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function wo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof an.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=sn.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function yo(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Eo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function xo(e){var t=sn.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Ao(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(yo(o,t)||null==t)&&r.push(o),o=o[n];return r}function Lo(e,t){return i(e,t,"nextElementSibling")}function Mo(e,t){return i(e,t,"previousElementSibling")}function To(e,t){e.insertBefore(t,e.firstChild)}return an.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||an;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),an.fp_utils={$:Gn,deepExtend:Fn,hasClass:Un,getWindowHeight:Qn,css:Jn,until:n,prevUntil:Kn,nextUntil:$n,prev:qn,next:eo,last:to,index:no,getList:l,hide:oo,show:ro,isArrayOrList:io,addClass:lo,removeClass:ao,appendTo:so,wrap:o,wrapAll:co,wrapInner:uo,unwrap:fo,closest:vo,after:po,before:ho,insertBefore:r,getScrollTop:go,siblings:mo,preventDefault:So,isFunction:bo,trigger:wo,matches:yo,toggle:Eo,createElementFromHTML:xo,remove:Ao,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:Lo,prevAll:Mo,showError:Xn,prependTo:To,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Un(e,t);o&&null==n||!n?ao(e,t):(!o&&null==n||n)&&lo(e,t)}}},function(e,g){var n=g&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(g.licenseKey)||-1<sn.domain.indexOf("alvarotrigo.com"),r=Gn("html, body"),s=Gn("html")[0],m=Gn("body")[0];if(!Un(s,pn)){var S={};g=Fn({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:an.fp_scrolloverflow?an.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Gn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},g);var b,i,c,o,a=!1,l=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),u="ontouchstart"in an||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Gn(e)[0]:e,y=Qn(),f=_n(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Fn({},v.m);var p,h,A,L,M,T,O,k,C,H,R=Vt(),I={touchmove:"ontouchmove"in an?"touchmove":R.move,touchstart:"ontouchstart"in an?"touchstart":R.down},z=!1,B=!Un(m,ot("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),N='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',j=!1;try{var P=Object.defineProperty({},"passive",{get:function(){j=!0}});an.addEventListener("testPassive",null,P),an.removeEventListener("testPassive",null,P)}catch(e){}var W,D,Y,V=Fn({},g),Z=!1,X=!0,G={};en(),an.fp_easings=Fn(an.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(S.version="3.0.9",S.setAutoScrolling=re,S.setRecordHistory=ie,S.setScrollingSpeed=le,S.setFitToSection=ae,S.setLockAnchors=function(e){g.lockAnchors=e},S.setMouseWheelScrolling=se,S.setAllowScrolling=ce,S.setKeyboardScrolling=fe,S.moveSectionUp=de,S.moveSectionDown=ve,S.silentMoveTo=pe,S.moveTo=he,S.moveSlideRight=ge,S.moveSlideLeft=me,S.fitToSection=Re,S.reBuild=Se,S.setResponsive=we,S.getFullpageData=function(){return{options:g,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ve,isTouch:u,c:at,getXmovement:Ht,removeAnimation:Ot,getTransforms:Ft,lazyLoad:Ke,addAnimation:Tt,performHorizontalMove:xt,landscapeScroll:wt,silentLandscapeScroll:Xt,keepSlidesPosition:Ye,silentScroll:Gt,styleSlides:Me,styleSection:Oe,scrollHandler:He,getEventsPage:Zt,getMSPointer:Vt,isReallyTouch:Ne,usingExtension:_t,toggleControlArrows:yt,touchStartHandler:je,touchMoveHandler:Be}}},S.destroy=function(e){wo(w,"destroy",e),re(!1,"internal"),ce(!0),ue(!1),fe(!1),lo(w,vn),[M,L,h,T,O,C,A,Y].forEach(function(e){clearTimeout(e)}),an.removeEventListener("scroll",He),an.removeEventListener("hashchange",ut),an.removeEventListener("resize",At),sn.removeEventListener("keydown",dt),sn.removeEventListener("keyup",vt),["click","touchstart"].forEach(function(e){sn.removeEventListener(e,ye)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){sn.removeEventListener(e,xe,!0)}),Jt("dragAndMove","destroy"),e&&(Gt(0),Gn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){_e(e,"src")}),Gn("img[data-srcset]").forEach(function(e){_e(e,"srcset")}),Ao(Gn(Tn+", "+Pn+", "+Dn)),Jn(Gn(wn),{height:"","background-color":"",padding:""}),Jn(Gn(Cn),{width:""}),Jn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Jn(r,{overflow:"",height:""}),ao(s,pn),ao(m,fn),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(hn)&&ao(m,e)}),Gn(wn+", "+Cn).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),ao(e,Nn+" "+gn+" "+Sn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Un(e,bn)&&!Z&&e.removeAttribute("data-anchor")}),Qt(w),[xn,Bn,In].forEach(function(e){Gn(e,w).forEach(function(e){fo(e)})}),an.scrollTo(0,0),[bn,kn,zn].forEach(function(e){ao(Gn("."+e),e)}))},S.getActiveSection=function(){return new rn(Gn(yn)[0])},S.getActiveSlide=function(){return Fe(Gn(Hn,Gn(yn)[0])[0])},S.landscapeScroll=wt,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Gn(g.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Gn(g.sectionSelector,w).length;t++)e.push(0);return e}(),options:g,setAutoScrolling:re},S.shared={afterRenderActions:Ce,isNormalScrollElement:!1},an.fullpage_api=S,an.fullpage_extensions=!0,g.$&&Object.keys(S).forEach(function(e){g.$.fn.fullpage[e]=S[e]}),Le("continuousHorizontal"),Le("scrollHorizontally"),Le("resetSliders"),Le("interlockedSlides"),Le("responsiveSlides"),Le("fadingEffect"),Le("dragAndMove"),Le("offsetSections"),Le("scrollOverflowReset"),Le("parallax"),Le("cards"),Jt("dragAndMove","init"),g.css3&&(g.css3=function(){var e,t=sn.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",sn.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=an.getComputedStyle(t).getPropertyValue(n[o]));return sn.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=Gn(g.sectionSelector.split(",").join(e+",")+e,w);t.length&&t.length===Gn(g.sectionSelector,w).length&&(Z=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!g.navigationTooltips.length){var n="[data-tooltip]",o=Gn(g.sectionSelector.split(",").join(n+",")+n,w);o.length&&o.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Jn(w,{height:"100%",position:"relative"}),lo(w,cn),lo(s,pn),y=Qn(),ao(w,vn),lo(Gn(g.sectionSelector,w),bn),lo(Gn(g.slideSelector,w),kn),Jt("parallax","init");for(var e=Gn(wn),t=0;t<e.length;t++){var n=t,o=e[t],r=Gn(Cn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Oe(o,n),l=o,a=n,void 0!==g.anchors[a]&&Un(l,gn)&&kt(g.anchors[a],a),g.menu&&g.css3&&null!=vo(Gn(g.menu)[0],un)&&Gn(g.menu).forEach(function(e){m.appendChild(e)}),0<i?Me(o,r,i):g.verticalCentered&&Rt(o)}var l,a;g.fixedElements&&g.css3&&Gn(g.fixedElements).forEach(function(e){m.appendChild(e)}),g.navigation&&function(){var e=sn.createElement("div");e.setAttribute("id",Mn);var t=sn.createElement("ul");e.appendChild(t),so(e,m);var n=Gn(Tn)[0];lo(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&lo(n,"fp-show-active");for(var o="",r=0;r<Gn(wn).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ke(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+On+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}Gn("ul",n)[0].innerHTML=o,lo(Gn("a",Gn("li",Gn(Tn)[0])[no(Gn(yn)[0],wn)]),gn)}(),Gn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Jt("fadingEffect","apply"),Jt("cards","init"),g.scrollOverflow&&(p=g.scrollOverflowHandler.init(g))}(),ce(!0),ue(!0),re(g.autoScrolling,"internal"),Mt(),Yt(),"complete"===sn.readyState&&ct(),an.addEventListener("load",ct),g.scrollOverflow||Ce(),function(){for(var e=1;e<4;e++)C=setTimeout(Ae,350*e)}(),B||at("l"),an.addEventListener("scroll",He),an.addEventListener("hashchange",ut),an.addEventListener("focus",mt),an.addEventListener("blur",St),an.addEventListener("resize",At),sn.addEventListener("keydown",dt),sn.addEventListener("keyup",vt),["click","touchstart"].forEach(function(e){sn.addEventListener(e,ye)}),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ee(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ee(e,!0)})),Jt("dragAndMove","turnOffTouch"));var F,U,Q,_=!1,J=0,K=0,$=0,q=0,ee=(new Date).getTime(),te=0,ne=0,oe=y;return S}function re(e,t){e||Gt(0),qt("autoScrolling",e,t);var n=Gn(yn)[0];if(g.autoScrolling&&!g.scrollBar)Jn(r,{overflow:"hidden",height:"100%"}),ie(V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Gt(n.offsetTop);else if(Jn(r,{overflow:"visible",height:"initial"}),ie(!!g.autoScrolling&&V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"","touch-action":""}),Qt(w),null!=n){var o=Ue(n.offsetTop);o.element.scrollTo(0,o.options)}wo(w,"setAutoScrolling",e)}function ie(e,t){qt("recordHistory",e,t)}function le(e,t){"internal"!==t&&_t("fadingEffect")&&S.fadingEffect.update(e),_t("cards")&&S.cards.update(e),qt("scrollingSpeed",e,t)}function ae(e,t){qt("fitToSection",e,t)}function se(e){e?(function(){var e,t="";an.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in sn.createElement("div")?"wheel":void 0!==sn.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!j&&{passive:!1};"DOMMouseScroll"==n?sn[e](t+"MozMousePixelScroll",We,o):sn[e](t+n,We,o)}(),w.addEventListener("mousedown",pt),w.addEventListener("mouseup",ht)):(sn.addEventListener?(sn.removeEventListener("mousewheel",We,!1),sn.removeEventListener("wheel",We,!1),sn.removeEventListener("MozMousePixelScroll",We,!1)):sn.detachEvent("onmousewheel",We),w.removeEventListener("mousedown",pt),w.removeEventListener("mouseup",ht))}function ce(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ut(t,e,"m")}):Ut(t,"all","m"),wo(w,"setAllowScrolling",{value:t,directions:e})}function ue(e){e?(se(!0),function(){if((l||u)&&(!_t("dragAndMove")||"mouseonly"===g.dragAndMove)){g.autoScrolling&&(m.removeEventListener(I.touchmove,ze,{passive:!1}),m.addEventListener(I.touchmove,ze,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,je),e.removeEventListener(I.touchmove,Be,{passive:!1}),e.addEventListener(I.touchstart,je),e.addEventListener(I.touchmove,Be,{passive:!1})}}()):(se(!1),function(){if(l||u){g.autoScrolling&&(m.removeEventListener(I.touchmove,Be,{passive:!1}),m.removeEventListener(I.touchmove,ze,{passive:!1}));var e=g.touchWrapper;e.removeEventListener(I.touchstart,je),e.removeEventListener(I.touchmove,Be,{passive:!1})}}())}function fe(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ut(t,e,"k")}):(Ut(t,"all","k"),g.keyboardScrolling=t)}function de(){var e=Kn(Gn(yn)[0],wn);e||!g.loopTop&&!g.continuousVertical||(e=to(Gn(wn))),null!=e&&Ze(e,null,!0)}function ve(){var e=$n(Gn(yn)[0],wn);e||!g.loopBottom&&!g.continuousVertical||(e=Gn(wn)[0]),null!=e&&Ze(e,null,!1)}function pe(e,t){le(0,"internal"),he(e,t),le(V.scrollingSpeed,"internal")}function he(e,t){var n=Bt(e);void 0!==t?Nt(e,t):null!=n&&Ze(n)}function ge(e){De("right",e)}function me(e){De("left",e)}function Se(e){if(!Un(w,vn)){E=!0,y=Qn(),f=_n();for(var t=Gn(wn),n=0;n<t.length;++n){var o=t[n],r=Gn(In,o)[0],i=Gn(Cn,o);g.verticalCentered&&Jn(Gn(xn,o),{height:It(o)+"px"}),Jn(o,{height:Te(o)+"px"}),1<i.length&&wt(r,Gn(Hn,r)[0])}g.scrollOverflow&&p.createScrollBarForAll();var l=no(Gn(yn)[0],wn);l&&!_t("fadingEffect")&&pe(l+1),E=!1,bo(g.afterResize)&&e&&g.afterResize.call(w,an.innerWidth,an.innerHeight),bo(g.afterReBuild)&&!e&&g.afterReBuild.call(w),wo(w,"afterRebuild")}}function be(){return Un(m,fn)}function we(e){var t=be();e?t||(re(!1,"internal"),ae(!1,"internal"),oo(Gn(Tn)),lo(m,fn),bo(g.afterResponsive)&&g.afterResponsive.call(w,e),Jt("responsiveSlides","toSections"),wo(w,"afterResponsive",e),g.scrollOverflow&&p.createScrollBarForAll()):t&&(re(V.autoScrolling,"internal"),ae(V.autoScrolling,"internal"),ro(Gn(Tn)),ao(m,fn),bo(g.afterResponsive)&&g.afterResponsive.call(w,e),Jt("responsiveSlides","toSlides"),wo(w,"afterResponsive",e))}function ye(e){var t=e.target;t&&vo(t,Tn+" a")?function(e){So(e);var t=no(vo(this,Tn+" li"));Ze(Gn(wn)[t])}.call(t,e):yo(t,".fp-tooltip")?function(){wo(qn(this),"click")}.call(t):yo(t,Dn)?function(){var e=vo(this,wn);Un(this,Yn)?v.m.left&&me(e):v.m.right&&ge(e)}.call(t,e):yo(t,Wn)||null!=vo(t,Wn)?function(e){So(e);var t=Gn(In,vo(this,wn))[0],n=Gn(Cn,t)[no(vo(this,"li"))];wt(t,n)}.call(t,e):vo(t,g.menu+" [data-menuanchor]")&&function(e){!Gn(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(So(e),he(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ee(e,t){sn["fp_"+e]=t,sn.addEventListener(e,xe,!0)}function xe(e){var t=e.type,o=!1,r=g.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==sn||!i)return ue(!0),void(r&&g.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(X=!1,setTimeout(function(){X=!0},800)),("mouseenter"!==t||X)&&(g.normalScrollElements.split(",").forEach(function(e){if(!o){var t=yo(i,e),n=vo(i,e);(t||n)&&(S.shared.isNormalScrollElement||(ue(!1),r&&g.scrollOverflowHandler.setIscroll(i,!1)),S.shared.isNormalScrollElement=!0,o=!0)}}),!o&&S.shared.isNormalScrollElement&&(ue(!0),r&&g.scrollOverflowHandler.setIscroll(i,!0),S.shared.isNormalScrollElement=!1))}function Ae(){var e=Qn(),t=_n();y===e&&f===t||(y=e,f=t,Se(!0))}function Le(e){var t="fp_"+e+"Extension";G[e]=g[e+"Key"],S[e]=void 0!==an[t]?new an[t]:null,S[e]&&S[e].c(e)}function Me(e,t,n){var o=100*n,r=100/n,i=sn.createElement("div");i.className=Rn,co(t,i);var l,a,s=sn.createElement("div");s.className=zn,co(t,s),Jn(Gn(Bn,e),{width:o+"%"}),1<n&&(g.controlArrows&&(l=e,a=[xo('<div class="fp-controlArrow fp-prev"></div>'),xo('<div class="fp-controlArrow fp-next"></div>')],po(Gn(In,l)[0],a),"#fff"!==g.controlArrowColor&&(Jn(Gn(Zn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}),Jn(Gn(Vn,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"})),g.loopHorizontal||oo(Gn(Vn,l))),g.slidesNavigation&&function(e,t){so(xo('<div class="'+jn+'"><ul></ul></div>'),e);var n=Gn(Pn,e)[0];lo(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++){var r=Gn(Cn,e)[o];so(xo('<li><a href="#"><span class="fp-sr-only">'+ke(o,"Slide",r)+"</span><span></span></a></li>"),Gn("ul",n)[0])}Jn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),lo(Gn("a",Gn("li",n)[0]),gn)}(e,n)),t.forEach(function(e){Jn(e,{width:r+"%"}),g.verticalCentered&&Rt(e)});var c=Gn(Hn,e)[0];null!=c&&(0!==no(Gn(yn),wn)||0===no(Gn(yn),wn)&&0!==no(c))?(Xt(c,"internal"),lo(c,"fp-initial")):lo(t[0],gn)}function Te(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Qn()}function Oe(e,t){t||null!=Gn(yn)[0]||lo(e,gn),o=Gn(yn)[0],Jn(e,{height:Te(e)+"px"}),g.paddingTop&&Jn(e,{"padding-top":g.paddingTop}),g.paddingBottom&&Jn(e,{"padding-bottom":g.paddingBottom}),void 0!==g.sectionsColor[t]&&Jn(e,{"background-color":g.sectionsColor[t]}),void 0!==g.anchors[t]&&e.setAttribute("data-anchor",g.anchors[t])}function ke(e,t,n){var o="Section"===t?g.anchors[e]:n.getAttribute("data-anchor");return g.navigationTooltips[e]||o||t+" "+(e+1)}function Ce(){var e,t,n=Gn(yn)[0];lo(n,Sn),Ke(n),Je(),qe(n),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),e=ft(),t=Bt(e.section),e.section&&t&&(void 0===t||no(t)!==no(o))||!bo(g.afterLoad)||Xe("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:no(n,wn)}),bo(g.afterRender)&&Xe("afterRender"),wo(w,"afterRender")}function He(){var e;if(wo(w,"onScroll"),(!g.autoScrolling||g.scrollBar||_t("dragAndMove"))&&!$t()){var t=_t("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):go(),n=0,o=t+Qn()/2,r=(_t("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Qn())===t,i=Gn(wn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Un(e=i[n],gn)){_=!0;var a,s,c=Gn(yn)[0],u=no(c,wn)+1,f=Ct(e),d=e.getAttribute("data-anchor"),v=no(e,wn)+1,p=Gn(Hn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(s=p.getAttribute("data-anchor"),a=no(p)),x&&(lo(e,gn),ao(mo(e),gn),Jt("parallax","afterLoad"),bo(g.onLeave)&&Xe("onLeave",h),bo(g.afterLoad)&&Xe("afterLoad",h),_t("resetSliders")&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}),tt(c),Ke(e),qe(e),kt(d,v-1),g.anchors.length&&(b=d),Pt(a,s,d)),clearTimeout(T),T=setTimeout(function(){_=!1},100)}g.fitToSection&&(clearTimeout(O),O=setTimeout(function(){g.fitToSection&&Gn(yn)[0].offsetHeight<=y&&Re()},g.fitToSectionDelay))}}function Re(){x&&(E=!0,Ze(Gn(yn)[0]),E=!1)}function Ie(e){if(v.m[e]){var t="down"===e?ve:de;if(_t("scrollHorizontally")&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(Gn(yn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function ze(e){g.autoScrolling&&Ne(e)&&v.m.up&&So(e)}function Be(e){var t=vo(e.target,wn)||Gn(yn)[0];if(Ne(e)){g.autoScrolling&&So(e);var n=Zt(e);$=n.y,q=n.x,Gn(In,t).length&&Math.abs(K-q)>Math.abs(J-$)?!a&&Math.abs(K-q)>_n()/100*g.touchSensitivity&&(q<K?v.m.right&&ge(t):v.m.left&&me(t)):g.autoScrolling&&x&&Math.abs(J-$)>an.innerHeight/100*g.touchSensitivity&&($<J?Ie("down"):J<$&&Ie("up"))}}function Ne(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function je(e){if(g.fitToSection&&(W=!1),Ne(e)){var t=Zt(e);J=t.y,K=t.x}}function Pe(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function We(e){var t=(new Date).getTime(),n=Un(Gn(".fp-completely")[0],Ln);if(!v.m.down&&!v.m.up)return So(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||an.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),g.scrollBar&&So(e);var a=t-ee;if(ee=t,200<a&&(d=[]),x&&!Kt()){var s=Pe(d,10);Pe(d,70)<=s&&l&&Ie(r<0?"down":"up")}return!1}g.fitToSection&&(W=!1)}function De(e,t){var n=null==t?Gn(yn)[0]:t,o=Gn(In,n)[0];if(!(null==o||Kt()||a||Gn(Cn,o).length<2)){var r=Gn(Hn,o)[0],i=null;if(null==(i="left"===e?Kn(r,Cn):$n(r,Cn))){if(!g.loopHorizontal)return;var l=mo(r);i="left"===e?l[l.length-1]:l[0]}a=!S.test.isTesting,wt(o,i,e)}}function Ye(){for(var e=Gn(Hn),t=0;t<e.length;t++)Xt(e[t],"internal")}function Ve(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=_t("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():te<n,i=o-y+t,l=g.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==eo(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),te=o}function Ze(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ve(e),yMovement:Ct(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:no(e,wn),activeSlide:Gn(Hn,e)[0],activeSection:Gn(yn)[0],leavingSection:no(Gn(yn),wn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||g.scrollBar&&go()===i.dtop&&!Un(e,An))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=no(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,bo(g.onLeave)&&!1===Xe("onLeave",i))return}var a;Jt("parallax","apply",i),Jt("cards","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?ho(Gn(yn)[0],Lo(s.activeSection,wn)):po(Gn(yn)[0],Mo(s.activeSection,wn).reverse()),Gt(Gn(yn)[0].offsetTop),Ye(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=Ct(s.element),s.leavingSection=no(s.activeSection,wn)+1,s.sectionIndex=no(s.element,wn),wo(Gn(un)[0],"onContinuousVertical",s),i=s),_t("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||tt(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),lo(e,gn),ao(mo(e),gn),Ke(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,Pt(r,o,i.anchorLink,i.sectionIndex),function(e){var t=g.scrollingSpeed<700,n=t?700:g.scrollingSpeed;if(g.css3&&g.autoScrolling&&!g.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";zt(o,!0),g.scrollingSpeed?(clearTimeout(L),L=setTimeout(function(){Qe(e),x=!t},g.scrollingSpeed)):Qe(e)}else{var r=Ue(e.dtop);S.test.top=-e.dtop+"px",tn(r.element,r.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){Qe(e)},30):(Qe(e),x=!t)})}t&&(clearTimeout(Y),Y=setTimeout(function(){x=!0},n))}(i),b=i.anchorLink,kt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Gn(wn).length-1:0)}}var s}function Xe(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ge(Gn(yn)[0]),slide:Fe(Gn(Hn,Gn(yn)[0])[0])}},onLeave:function(){return{origin:Ge(r.activeSection),destination:Ge(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ge(r.section),origin:Fe(r.prevSlide),destination:Fe(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}else if(wo(w,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ge(e){return e?new rn(e):null}function Fe(e){return e?new ln(e):null}function Ue(e){var t={};return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=Gn(un)[0]):(t.options=e,t.element=an),t}function Qe(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?ho(Gn(wn)[0],t.wrapAroundElements):po(Gn(wn)[Gn(wn).length-1],t.wrapAroundElements),Gt(Gn(yn)[0].offsetTop),Ye(),t.sectionIndex=no(t.element,wn),t.leavingSection=no(t.activeSection,wn)+1),bo(g.afterLoad)&&!e.localIsResizing&&Xe("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),Jt("parallax","afterLoad"),Jt("scrollOverflowReset","reset"),_t("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||qe(e.element),lo(e.element,Sn),ao(mo(e.element),Sn),Je(),x=!0,bo(e.callback)&&e.callback()}function _e(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Je(){var e=Gn(".fp-auto-height")[0]||be()&&Gn(".fp-auto-height-responsive")[0];g.lazyLoading&&e&&Gn(wn+":not("+mn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&Ke(e)})}function Ke(o){g.lazyLoading&&Gn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",nt(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(_e(n,e),n.addEventListener("load",function(){$e(o)}))}),yo(n,"source")){var e=vo(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){$e(o)})}})}function $e(e){g.scrollOverflow&&(clearTimeout(D),D=setTimeout(function(){Un(m,fn)||p.createScrollBar(e)},200))}function qe(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&et(e),e.onload=function(){e.hasAttribute("data-autoplay")&&et(e)}})}function et(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function tt(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function nt(e){var t=Gn(Hn,e);return t.length&&(e=t[0]),e}function ot(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function rt(f){var d=void 0!==G[f]&&G[f].length,e=[],v=!1;return io(G[f])?e=G[f]:e.push(G[f]),e.forEach(function(e){var t=function(){if(sn.domain.length){for(var e=sn.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=ot(n[0]),r=ot(n[1]),i=ot(n[2]),l=ot(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length;if(!d&&a)return!1;var s=d?ot(e):"",c=1<(s=s.split("_")).length&&-1<s[1].indexOf(f,s[1].length-f.length),u=s[0].indexOf(t,s[0].length-t.length)<0;v=v||!(u&&a&&l!=s[0])&&c||!a}),v}function it(e){e.forEach(function(e){if(e.removedNodes[0]&&e.removedNodes[0].isEqualNode(U)){clearTimeout(Q);var t=ot("bDIwc2V0VGltZW91dDAzbA==");Q=an[t](lt,900)}})}function lt(){z=!1}function at(e){if(U=sn.createElement("div"),F=ot("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),B||(F=F.replace("extensions/","").replace("Extension","")),U.innerHTML=F,U=U.firstChild,"MutationObserver"in an&&new MutationObserver(it).observe(sn.body,{childList:!0,subtree:!1}),(!B||_t(e)&&S[e])&&(!rt(e)||!B)){st();var t=ot("MzQ1c2V0SW50ZXJ2YWwxMjM=");an[t](st,2e3)}}function st(){U&&(z||(Math.random()<.5?To(m,U):so(U,m),z=!0),U.setAttribute("style",ot("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,ot("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function ct(){var e=ft(),t=e.section,n=e.slide;t&&(g.animateAnchor?Nt(t,n):pe(t,n))}function ut(){if(!_&&!g.lockAnchors){var e=ft(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;t&&t.length&&(t&&t!==b&&!o||r||!a&&i!=n&&!Kt())&&Nt(t,n)}}function ft(){var e,t,n=an.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function dt(e){clearTimeout(k);var t=sn.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=sn.activeElement,u=gt(nt(Gn(yn)[0]));function f(e){return So(e),u[0]?u[0].focus():null}(t=e,n=gt(sn),o=n.indexOf(sn.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Fe(vo(i,Cn)),a=Ge(vo(i,wn)),l||a)&&(c?null==vo(c,yn+","+yn+" "+Hn)&&(c=f(e)):f(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&So(e))}(e):yo(t,"textarea")||yo(t,"input")||yo(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&So(e),c=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=sn.activeElement,o=yo(n,"video")||yo(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&de();break;case 32:if(t&&v.k.up&&!o){de();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||ve());break;case 36:v.k.up&&he(1);break;case 35:v.k.down&&he(Gn(wn).length);break;case 37:v.k.left&&me();break;case 39:v.k.right&&ge()}}(e)},150))}function vt(e){t&&(c=e.ctrlKey)}function pt(e){2==e.which&&(ne=e.pageY,w.addEventListener("mousemove",bt))}function ht(e){2==e.which&&w.removeEventListener("mousemove",bt)}function gt(e){return[].slice.call(Gn(N,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function mt(){t=!0}function St(){c=t=!1}function bt(e){g.autoScrolling&&(x&&(e.pageY<ne&&v.m.up?de():e.pageY>ne&&v.m.down&&ve()),ne=e.pageY)}function wt(e,t,n){var o=vo(e,wn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:no(t),section:o,sectionIndex:no(o,wn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Gn(Pn,o)[0],slideAnchor:Dt(t),prevSlide:Gn(Hn,o)[0],prevSlideIndex:no(Gn(Hn,o)[0]),localIsResizing:E};r.xMovement=Ht(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Jt("parallax","applyHorizontal",r),Jt("cards","apply",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&bo(g.onSlideLeave)&&!1===Xe("onSlideLeave",r)?a=!1:(lo(t,gn),ao(mo(t),gn),r.localIsResizing||(tt(r.prevSlide),Ke(t)),yt(r),Un(o,gn)&&!r.localIsResizing&&Pt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),$t()?Et(r):xt(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(_t("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}function yt(e){!g.loopHorizontal&&g.controlArrows&&(Eo(Gn(Vn,e.section),0!==e.slideIndex),Eo(Gn(Zn,e.section),null!=eo(e.destiny)))}function Et(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(ao(Gn(mn,t),gn),lo(Gn("a",Gn("li",t)[n]),gn)),e.localIsResizing||(Jt("parallax","afterSlideLoads"),Jt("scrollOverflowReset","setPrevious",e.prevSlide),Jt("scrollOverflowReset","reset"),bo(g.afterSlideLoad)&&Xe("afterSlideLoad",e),x=!0,qe(e.destiny)),a=!1,_t("interlockedSlides")&&S.interlockedSlides.apply(e)}function xt(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Jn(Tt(Gn(Bn,e)),Ft(r)),M=setTimeout(function(){n&&Et(t)},g.scrollingSpeed)}else S.test.left[t.sectionIndex]=Math.round(o.left),tn(e,Math.round(o.left),g.scrollingSpeed,function(){n&&Et(t)})}function At(){E=!0,clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)A=setTimeout(Lt,200*e)},200)}function Lt(){if(wo(w,"onResize"),Mt(),l){var e=sn.activeElement;if(!yo(e,"textarea")&&!yo(e,"input")&&!yo(e,"select")){var t=Qn();Math.abs(t-oe)>20*Math.max(oe,t)/100&&(Se(!0),oe=t)}}else Ae()}function Mt(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&an.innerWidth<e,o=t&&an.innerHeight<t;e&&t?we(n||o):e?we(n):t&&we(o)}function Tt(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return ao(e,dn),Jn(e,{"-webkit-transition":t,transition:t})}function Ot(e){return lo(e,dn)}function kt(e,t){var n,o,r,i;n=e,Gn(g.menu).forEach(function(e){g.menu&&null!=e&&(ao(Gn(mn,e),gn),lo(Gn('[data-menuanchor="'+n+'"]',e),gn))}),o=e,r=t,i=Gn(Tn)[0],g.navigation&&null!=i&&"none"!==i.style.display&&(ao(Gn(mn,Gn(Tn)[0]),gn),lo(o?Gn('a[href="#'+o+'"]',Gn(Tn)[0]):Gn("a",Gn("li",Gn(Tn)[0])[r]),gn))}function Ct(e){var t=no(Gn(yn)[0],wn),n=no(e,wn);return t==n?"none":n<t?"up":"down"}function Ht(e,t){return e==t?"none":t<e?"left":"right"}function Rt(e){if(!Un(e,Nn)){var t=sn.createElement("div");t.className=En,t.style.height=It(e)+"px",lo(e,Nn),uo(e,t)}}function It(e){var t=Te(e);if(g.paddingTop||g.paddingBottom){var n=e;Un(n,bn)||(n=vo(e,wn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function zt(e,t){t?Tt(w):Ot(w),clearTimeout(H),Jn(w,Ft(e)),S.test.translate3d=e,H=setTimeout(function(){ao(w,dn)},10)}function Bt(e){var t=Gn(wn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Gn(wn)[n]}return t}function Nt(e,t){var n=Bt(e);if(null!=n){var o,r,i,l=(null==(i=Gn(Cn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Gn(Cn,r)[o]),i);Dt(n)===b||Un(n,gn)?jt(l):Ze(n,function(){jt(l)})}}function jt(e){null!=e&&wt(vo(e,In),e)}function Pt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Wt(r+"/"+(i=t))):(null!=e&&(i=t),Wt(n))),Yt()}function Wt(e){if(g.recordHistory)location.hash=e;else if(l||u)an.history.replaceState(void 0,void 0,"#"+e);else{var t=an.location.href.split("#")[0];an.location.replace(t+"#"+e)}}function Dt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=no(e);return null==t&&(t=n),t}function Yt(){var e=Gn(yn)[0],t=Gn(Hn,e)[0],n=Dt(e),o=Dt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+hn+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),lo(m,hn+"-"+r)}function Vt(){return an.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Zt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,u&&Ne(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Xt(e,t){le(0,"internal"),void 0!==t&&(E=!0),wt(vo(e,In),e),void 0!==t&&(E=!1),le(V.scrollingSpeed,"internal")}function Gt(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)zt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Jn(w,{top:-t+"px"}),S.test.top=-t+"px";else{var n=Ue(t);nn(n.element,n.options)}}function Ft(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ut(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function Qt(e){return Jn(e,{"-webkit-transition":"none",transition:"none"})}function _t(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}function Jt(e,t,n){if(_t(e))return S[e][t](n)}function Kt(){return _t("dragAndMove")&&S.dragAndMove.isAnimating}function $t(){return _t("dragAndMove")&&S.dragAndMove.isGrabbing}function qt(e,t,n){g[e]=t,"internal"!==n&&(V[e]=t)}function en(){var e=g.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Xn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Xn("error","https://github.com/alvarotrigo/fullPage.js#options.")),Un(s,pn)?Xn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Xn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Xn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Xn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Xn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(Gn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Gn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Xn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Xn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function tn(t,n,o,r){var e,i=(e=t).self!=an&&Un(e,Rn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?go():e.offsetTop,l=n-i,a=0;W=!0;var s=function(){if(W){var e=n;a+=20,o&&(e=an.fp_easings[g.easing](a,i,l,o)),nn(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function nn(e,t){!g.autoScrolling||g.scrollBar||e.self!=an&&Un(e,Rn)?e.self!=an&&Un(e,Rn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function on(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=no(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function rn(e){on.call(this,e,wn)}function ln(e){on.call(this,e,Cn)}en()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(6),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/alvarotrigolopez/Sites/vue-fullpage.js/src/FullPage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] FullPage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-103a4254", Component.options)
  } else {
    hotAPI.reload("data-v-103a4254", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

var _constants = __webpack_require__(3);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } //
//
//
//
//
//

function camelToKebab(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

exports.default = {
  methods: {
    build: function build() {
      var slideSelector = this.options.slideSelector || '.slide';
      var sectionSelector = this.options.sectionSelector || '.section';
      var activeSectionIndex = fp_utils.index(document.querySelector(sectionSelector + '.active'));
      var activeSlide = document.querySelector(sectionSelector + '.active ' + slideSelector + '.active');
      var activeSlideIndex = activeSlide ? fp_utils.index(activeSlide) : -1;

      this.destroy();

      if (activeSectionIndex > -1) {
        fp_utils.addClass(document.querySelectorAll(sectionSelector)[activeSectionIndex], 'active');
      }

      if (activeSlideIndex > -1) {
        fp_utils.addClass(activeSlide, 'active');
      }

      this.init();
    },
    destroy: function destroy() {
      if (typeof fullpage_api !== 'undefined' && typeof fullpage_api.destroy !== 'undefined') {
        fullpage_api.destroy('all');
      }
    },
    emitEvent: function emitEvent(name, args) {
      // Emit event on Vue way
      this.$emit.apply(this, [camelToKebab(name)].concat(_toConsumableArray(args)));

      // Run event's handler with non Vue way
      if (this.options.hasOwnProperty(name)) {
        this.options[name].apply(this, args);
      }
    },
    init: function init() {
      // eslint-disable-next-line
      this.api = new _fullpageExtensions2.default(this.$refs.fullpage, this.options);
    }
  },
  mounted: function mounted() {
    !this.skipInit && this.init();
  },
  beforeDestroy: function beforeDestroy() {
    if (typeof this.api !== 'undefined') {
      this.destroy();
    }
  },
  data: function data() {
    var _this = this;

    return {
      events: constants.EVENTS.reduce(function (eventsHandlers, event) {
        return _extends({}, eventsHandlers, _defineProperty({}, event, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.emitEvent(event, args);
        }));
      }, {}),
      api: undefined
    };
  },

  props: {
    options: {
      type: Object,
      required: true
    },
    skipInit: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    options: {
      deep: true,
      handler: function handler() {
        this.build();
      }
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = exports.EVENTS = ['afterLoad', 'onLeave', 'afterRender', 'afterResize', 'afterResponsive', 'afterSlideLoad', 'onSlideLeave'];

var METHODS = exports.METHODS = ['moveSectionUp', 'moveSectionDown', 'moveTo', 'silentMoveTo', 'moveSlideRight', 'moveSlideLeft', 'setAutoScrolling', 'setFitToSection', 'fitToSection', 'setLockAnchors', 'setAllowScrolling', 'setKeyboardScrolling', 'setRecordHistory', 'setScrollingSpeed', 'destroy', 'reBuild', 'setResponsive', 'responsiveSlidesToSections', 'responsiveSlidesToSlides'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.version = exports.FullPage = undefined;

var _FullPage = __webpack_require__(1);

var _FullPage2 = _interopRequireDefault(_FullPage);

var _fullpageExtensions = __webpack_require__(0);

var _fullpageExtensions2 = _interopRequireDefault(_fullpageExtensions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function plugin(Vue) {
  Vue.component('full-page', _FullPage2.default);
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}
if (!window.fullpage_api) {
  window.fullpage = _fullpageExtensions2.default;
}

exports.default = plugin;

var version = '__VERSION__';
// Export all components too
exports.FullPage = _FullPage2.default;
exports.version = version;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    ref: "fullpage"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-103a4254", module.exports)
  }
}

/***/ })
/******/ ]);
});