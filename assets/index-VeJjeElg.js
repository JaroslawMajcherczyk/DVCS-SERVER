function XS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function JS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cv={exports:{}},uu={},Iv={exports:{}},Q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=Symbol.for("react.element"),ZS=Symbol.for("react.portal"),eC=Symbol.for("react.fragment"),tC=Symbol.for("react.strict_mode"),nC=Symbol.for("react.profiler"),rC=Symbol.for("react.provider"),iC=Symbol.for("react.context"),sC=Symbol.for("react.forward_ref"),oC=Symbol.for("react.suspense"),lC=Symbol.for("react.memo"),aC=Symbol.for("react.lazy"),Lm=Symbol.iterator;function uC(t){return t===null||typeof t!="object"?null:(t=Lm&&t[Lm]||t["@@iterator"],typeof t=="function"?t:null)}var Tv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kv=Object.assign,Rv={};function es(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||Tv}es.prototype.isReactComponent={};es.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};es.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Nv(){}Nv.prototype=es.prototype;function Dd(t,e,n){this.props=t,this.context=e,this.refs=Rv,this.updater=n||Tv}var Ld=Dd.prototype=new Nv;Ld.constructor=Dd;kv(Ld,es.prototype);Ld.isPureReactComponent=!0;var bm=Array.isArray,Pv=Object.prototype.hasOwnProperty,bd={current:null},Av={key:!0,ref:!0,__self:!0,__source:!0};function xv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pv.call(e,r)&&!Av.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:zo,type:t,key:s,ref:o,props:i,_owner:bd.current}}function cC(t,e){return{$$typeof:zo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===zo}function hC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hC(""+t.key):e.toString(36)}function Kl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case zo:case ZS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yc(o,0):r,bm(i)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),Kl(i,e,n,"",function(h){return h})):i!=null&&(Md(i)&&(i=cC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bm(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+yc(s,a);o+=Kl(s,e,n,u,i)}else if(u=uC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+yc(s,a++),o+=Kl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Cl(t,e,n){if(t==null)return t;var r=[],i=0;return Kl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},ql={transition:null},fC={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:ql,ReactCurrentOwner:bd};function Ov(){throw Error("act(...) is not supported in production builds of React.")}Q.Children={map:Cl,forEach:function(t,e,n){Cl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Cl(t,function(){e++}),e},toArray:function(t){return Cl(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Q.Component=es;Q.Fragment=eC;Q.Profiler=nC;Q.PureComponent=Dd;Q.StrictMode=tC;Q.Suspense=oC;Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fC;Q.act=Ov;Q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=kv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Pv.call(e,u)&&!Av.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:zo,type:t.type,key:i,ref:s,props:r,_owner:o}};Q.createContext=function(t){return t={$$typeof:iC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:rC,_context:t},t.Consumer=t};Q.createElement=xv;Q.createFactory=function(t){var e=xv.bind(null,t);return e.type=t,e};Q.createRef=function(){return{current:null}};Q.forwardRef=function(t){return{$$typeof:sC,render:t}};Q.isValidElement=Md;Q.lazy=function(t){return{$$typeof:aC,_payload:{_status:-1,_result:t},_init:dC}};Q.memo=function(t,e){return{$$typeof:lC,type:t,compare:e===void 0?null:e}};Q.startTransition=function(t){var e=ql.transition;ql.transition={};try{t()}finally{ql.transition=e}};Q.unstable_act=Ov;Q.useCallback=function(t,e){return ct.current.useCallback(t,e)};Q.useContext=function(t){return ct.current.useContext(t)};Q.useDebugValue=function(){};Q.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};Q.useEffect=function(t,e){return ct.current.useEffect(t,e)};Q.useId=function(){return ct.current.useId()};Q.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};Q.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};Q.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};Q.useMemo=function(t,e){return ct.current.useMemo(t,e)};Q.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};Q.useRef=function(t){return ct.current.useRef(t)};Q.useState=function(t){return ct.current.useState(t)};Q.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};Q.useTransition=function(){return ct.current.useTransition()};Q.version="18.3.1";Iv.exports=Q;var b=Iv.exports;const pC=JS(b),mC=XS({__proto__:null,default:pC},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gC=b,_C=Symbol.for("react.element"),vC=Symbol.for("react.fragment"),yC=Object.prototype.hasOwnProperty,wC=gC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,EC={key:!0,ref:!0,__self:!0,__source:!0};function Dv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yC.call(e,r)&&!EC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:_C,type:t,key:s,ref:o,props:i,_owner:wC.current}}uu.Fragment=vC;uu.jsx=Dv;uu.jsxs=Dv;Cv.exports=uu;var x=Cv.exports,Lv={exports:{}},Tt={},bv={exports:{}},Mv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,V){var G=z.length;z.push(V);e:for(;0<G;){var he=G-1>>>1,ne=z[he];if(0<i(ne,V))z[he]=V,z[G]=ne,G=he;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var V=z[0],G=z.pop();if(G!==V){z[0]=G;e:for(var he=0,ne=z.length,me=ne>>>1;he<me;){var Rt=2*(he+1)-1,cn=z[Rt],hn=Rt+1,dn=z[hn];if(0>i(cn,G))hn<ne&&0>i(dn,cn)?(z[he]=dn,z[hn]=G,he=hn):(z[he]=cn,z[Rt]=G,he=Rt);else if(hn<ne&&0>i(dn,G))z[he]=dn,z[hn]=G,he=hn;else break e}}return V}function i(z,V){var G=z.sortIndex-V.sortIndex;return G!==0?G:z.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],p=1,f=null,m=3,k=!1,R=!1,A=!1,L=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var V=n(h);V!==null;){if(V.callback===null)r(h);else if(V.startTime<=z)r(h),V.sortIndex=V.expirationTime,e(u,V);else break;V=n(h)}}function O(z){if(A=!1,I(z),!R)if(n(u)!==null)R=!0,dt(M);else{var V=n(h);V!==null&&ke(O,V.startTime-z)}}function M(z,V){R=!1,A&&(A=!1,C(_),_=-1),k=!0;var G=m;try{for(I(V),f=n(u);f!==null&&(!(f.expirationTime>V)||z&&!T());){var he=f.callback;if(typeof he=="function"){f.callback=null,m=f.priorityLevel;var ne=he(f.expirationTime<=V);V=t.unstable_now(),typeof ne=="function"?f.callback=ne:f===n(u)&&r(u),I(V)}else r(u);f=n(u)}if(f!==null)var me=!0;else{var Rt=n(h);Rt!==null&&ke(O,Rt.startTime-V),me=!1}return me}finally{f=null,m=G,k=!1}}var U=!1,w=null,_=-1,v=5,E=-1;function T(){return!(t.unstable_now()-E<v)}function N(){if(w!==null){var z=t.unstable_now();E=z;var V=!0;try{V=w(!0,z)}finally{V?S():(U=!1,w=null)}}else U=!1}var S;if(typeof y=="function")S=function(){y(N)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,ce=ie.port2;ie.port1.onmessage=N,S=function(){ce.postMessage(null)}}else S=function(){L(N,0)};function dt(z){w=z,U||(U=!0,S())}function ke(z,V){_=L(function(){z(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){R||k||(R=!0,dt(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var V=3;break;default:V=m}var G=m;m=V;try{return z()}finally{m=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=m;m=z;try{return V()}finally{m=G}},t.unstable_scheduleCallback=function(z,V,G){var he=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?he+G:he):G=he,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=G+ne,z={id:p++,callback:V,priorityLevel:z,startTime:G,expirationTime:ne,sortIndex:-1},G>he?(z.sortIndex=G,e(h,z),n(u)===null&&z===n(h)&&(A?(C(_),_=-1):A=!0,ke(O,G-he))):(z.sortIndex=ne,e(u,z),R||k||(R=!0,dt(M))),z},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(z){var V=m;return function(){var G=m;m=V;try{return z.apply(this,arguments)}finally{m=G}}}})(Mv);bv.exports=Mv;var SC=bv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var CC=b,It=SC;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Uv=new Set,ao={};function ti(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(ao[t]=e,t=0;t<e.length;t++)Uv.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hh=Object.prototype.hasOwnProperty,IC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Um={},Fm={};function TC(t){return hh.call(Fm,t)?!0:hh.call(Um,t)?!1:IC.test(t)?Fm[t]=!0:(Um[t]=!0,!1)}function kC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function RC(t,e,n,r){if(e===null||typeof e>"u"||kC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ht(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ht(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ht(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ht(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ht(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ht(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ht(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ht(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ht(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ht(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ud=/[\-:]([a-z])/g;function Fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ud,Fd);He[e]=new ht(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ud,Fd);He[e]=new ht(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ud,Fd);He[e]=new ht(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ht(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ht(t,1,!1,t.toLowerCase(),null,!0,!0)});function jd(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(RC(e,n,i,r)&&(n=null),r||i===null?TC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ln=CC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Il=Symbol.for("react.element"),fi=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),dh=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),jv=Symbol.for("react.context"),zd=Symbol.for("react.forward_ref"),fh=Symbol.for("react.suspense"),ph=Symbol.for("react.suspense_list"),$d=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Bv=Symbol.for("react.offscreen"),jm=Symbol.iterator;function Is(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,wc;function Us(t){if(wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Ec=!1;function Sc(t,e){if(!t||Ec)return"";Ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{Ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Us(t):""}function NC(t){switch(t.tag){case 5:return Us(t.type);case 16:return Us("Lazy");case 13:return Us("Suspense");case 19:return Us("SuspenseList");case 0:case 2:case 15:return t=Sc(t.type,!1),t;case 11:return t=Sc(t.type.render,!1),t;case 1:return t=Sc(t.type,!0),t;default:return""}}function mh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pi:return"Fragment";case fi:return"Portal";case dh:return"Profiler";case Bd:return"StrictMode";case fh:return"Suspense";case ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jv:return(t.displayName||"Context")+".Consumer";case Fv:return(t._context.displayName||"Context")+".Provider";case zd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case $d:return e=t.displayName||null,e!==null?e:mh(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return mh(t(e))}catch{}}return null}function PC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mh(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function mr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function zv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AC(t){var e=zv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Tl(t){t._valueTracker||(t._valueTracker=AC(t))}function $v(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=zv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ha(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gh(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=mr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Vv(t,e){e=e.checked,e!=null&&jd(t,"checked",e,!1)}function _h(t,e){Vv(t,e);var n=mr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?vh(t,e.type,n):e.hasOwnProperty("defaultValue")&&vh(t,e.type,mr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function vh(t,e,n){(e!=="number"||ha(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Fs=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+mr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $m(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Fs(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:mr(n)}}function Wv(t,e){var n=mr(e.value),r=mr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var kl,Gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(kl=kl||document.createElement("div"),kl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=kl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xC=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){xC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function Kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function qv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var OC=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eh(t,e){if(e){if(OC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Sh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ch=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ih=null,Pi=null,Ai=null;function Wm(t){if(t=Wo(t)){if(typeof Ih!="function")throw Error(F(280));var e=t.stateNode;e&&(e=pu(e),Ih(t.stateNode,t.type,e))}}function Yv(t){Pi?Ai?Ai.push(t):Ai=[t]:Pi=t}function Qv(){if(Pi){var t=Pi,e=Ai;if(Ai=Pi=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function Xv(t,e){return t(e)}function Jv(){}var Cc=!1;function Zv(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return Xv(t,e,n)}finally{Cc=!1,(Pi!==null||Ai!==null)&&(Jv(),Qv())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Th=!1;if(kn)try{var Ts={};Object.defineProperty(Ts,"passive",{get:function(){Th=!0}}),window.addEventListener("test",Ts,Ts),window.removeEventListener("test",Ts,Ts)}catch{Th=!1}function DC(t,e,n,r,i,s,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Ws=!1,da=null,fa=!1,kh=null,LC={onError:function(t){Ws=!0,da=t}};function bC(t,e,n,r,i,s,o,a,u){Ws=!1,da=null,DC.apply(LC,arguments)}function MC(t,e,n,r,i,s,o,a,u){if(bC.apply(this,arguments),Ws){if(Ws){var h=da;Ws=!1,da=null}else throw Error(F(198));fa||(fa=!0,kh=h)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ey(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Hm(t){if(ni(t)!==t)throw Error(F(188))}function UC(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Hm(i),t;if(s===r)return Hm(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function ty(t){return t=UC(t),t!==null?ny(t):null}function ny(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ny(t);if(e!==null)return e;t=t.sibling}return null}var ry=It.unstable_scheduleCallback,Gm=It.unstable_cancelCallback,FC=It.unstable_shouldYield,jC=It.unstable_requestPaint,Ne=It.unstable_now,BC=It.unstable_getCurrentPriorityLevel,Wd=It.unstable_ImmediatePriority,iy=It.unstable_UserBlockingPriority,pa=It.unstable_NormalPriority,zC=It.unstable_LowPriority,sy=It.unstable_IdlePriority,cu=null,rn=null;function $C(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:HC,VC=Math.log,WC=Math.LN2;function HC(t){return t>>>=0,t===0?32:31-(VC(t)/WC|0)|0}var Rl=64,Nl=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ma(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=js(a):(s&=o,s!==0&&(r=js(s)))}else o=n&~i,o!==0?r=js(o):s!==0&&(r=js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function GC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function KC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=GC(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Rh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function oy(){var t=Rl;return Rl<<=1,!(Rl&4194240)&&(Rl=64),t}function Ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function qC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function ly(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ay,Gd,uy,cy,hy,Nh=!1,Pl=[],nr=null,rr=null,ir=null,ho=new Map,fo=new Map,Wn=[],YC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Km(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function ks(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&Gd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function QC(t,e,n,r,i){switch(e){case"focusin":return nr=ks(nr,t,e,n,r,i),!0;case"dragenter":return rr=ks(rr,t,e,n,r,i),!0;case"mouseover":return ir=ks(ir,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ho.set(s,ks(ho.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,fo.set(s,ks(fo.get(s)||null,t,e,n,r,i)),!0}return!1}function dy(t){var e=Mr(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=ey(n),e!==null){t.blockedOn=e,hy(t.priority,function(){uy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ph(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ch=r,n.target.dispatchEvent(r),Ch=null}else return e=Wo(n),e!==null&&Gd(e),t.blockedOn=n,!1;e.shift()}return!0}function qm(t,e,n){Yl(t)&&n.delete(e)}function XC(){Nh=!1,nr!==null&&Yl(nr)&&(nr=null),rr!==null&&Yl(rr)&&(rr=null),ir!==null&&Yl(ir)&&(ir=null),ho.forEach(qm),fo.forEach(qm)}function Rs(t,e){t.blockedOn===e&&(t.blockedOn=null,Nh||(Nh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,XC)))}function po(t){function e(i){return Rs(i,t)}if(0<Pl.length){Rs(Pl[0],t);for(var n=1;n<Pl.length;n++){var r=Pl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(nr!==null&&Rs(nr,t),rr!==null&&Rs(rr,t),ir!==null&&Rs(ir,t),ho.forEach(e),fo.forEach(e),n=0;n<Wn.length;n++)r=Wn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Wn.length&&(n=Wn[0],n.blockedOn===null);)dy(n),n.blockedOn===null&&Wn.shift()}var xi=Ln.ReactCurrentBatchConfig,ga=!0;function JC(t,e,n,r){var i=re,s=xi.transition;xi.transition=null;try{re=1,Kd(t,e,n,r)}finally{re=i,xi.transition=s}}function ZC(t,e,n,r){var i=re,s=xi.transition;xi.transition=null;try{re=4,Kd(t,e,n,r)}finally{re=i,xi.transition=s}}function Kd(t,e,n,r){if(ga){var i=Ph(t,e,n,r);if(i===null)Lc(t,e,r,_a,n),Km(t,r);else if(QC(i,t,e,n,r))r.stopPropagation();else if(Km(t,r),e&4&&-1<YC.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&ay(s),s=Ph(t,e,n,r),s===null&&Lc(t,e,r,_a,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lc(t,e,r,null,n)}}var _a=null;function Ph(t,e,n,r){if(_a=null,t=Vd(r),t=Mr(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ey(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _a=t,null}function fy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BC()){case Wd:return 1;case iy:return 4;case pa:case zC:return 16;case sy:return 536870912;default:return 16}default:return 16}}var Xn=null,qd=null,Ql=null;function py(){if(Ql)return Ql;var t,e=qd,n=e.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ql=i.slice(t,1<r?1-r:void 0)}function Xl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function Ym(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Al:Ym,this.isPropagationStopped=Ym,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yd=kt(ts),Vo=ye({},ts,{view:0,detail:0}),eI=kt(Vo),Tc,kc,Ns,hu=ye({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Tc=t.screenX-Ns.screenX,kc=t.screenY-Ns.screenY):kc=Tc=0,Ns=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),Qm=kt(hu),tI=ye({},hu,{dataTransfer:0}),nI=kt(tI),rI=ye({},Vo,{relatedTarget:0}),Rc=kt(rI),iI=ye({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),sI=kt(iI),oI=ye({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),lI=kt(oI),aI=ye({},ts,{data:0}),Xm=kt(aI),uI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hI[t])?!!e[t]:!1}function Qd(){return dI}var fI=ye({},Vo,{key:function(t){if(t.key){var e=uI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pI=kt(fI),mI=ye({},hu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jm=kt(mI),gI=ye({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),_I=kt(gI),vI=ye({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),yI=kt(vI),wI=ye({},hu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),EI=kt(wI),SI=[9,13,27,32],Xd=kn&&"CompositionEvent"in window,Hs=null;kn&&"documentMode"in document&&(Hs=document.documentMode);var CI=kn&&"TextEvent"in window&&!Hs,my=kn&&(!Xd||Hs&&8<Hs&&11>=Hs),Zm=" ",eg=!1;function gy(t,e){switch(t){case"keyup":return SI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mi=!1;function II(t,e){switch(t){case"compositionend":return _y(e);case"keypress":return e.which!==32?null:(eg=!0,Zm);case"textInput":return t=e.data,t===Zm&&eg?null:t;default:return null}}function TI(t,e){if(mi)return t==="compositionend"||!Xd&&gy(t,e)?(t=py(),Ql=qd=Xn=null,mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return my&&e.locale!=="ko"?null:e.data;default:return null}}var kI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kI[t.type]:e==="textarea"}function vy(t,e,n,r){Yv(r),e=va(e,"onChange"),0<e.length&&(n=new Yd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Gs=null,mo=null;function RI(t){Py(t,0)}function du(t){var e=vi(t);if($v(e))return t}function NI(t,e){if(t==="change")return e}var yy=!1;if(kn){var Nc;if(kn){var Pc="oninput"in document;if(!Pc){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),Pc=typeof ng.oninput=="function"}Nc=Pc}else Nc=!1;yy=Nc&&(!document.documentMode||9<document.documentMode)}function rg(){Gs&&(Gs.detachEvent("onpropertychange",wy),mo=Gs=null)}function wy(t){if(t.propertyName==="value"&&du(mo)){var e=[];vy(e,mo,t,Vd(t)),Zv(RI,e)}}function PI(t,e,n){t==="focusin"?(rg(),Gs=e,mo=n,Gs.attachEvent("onpropertychange",wy)):t==="focusout"&&rg()}function AI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return du(mo)}function xI(t,e){if(t==="click")return du(e)}function OI(t,e){if(t==="input"||t==="change")return du(e)}function DI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:DI;function go(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hh.call(e,i)||!Yt(t[i],e[i]))return!1}return!0}function ig(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sg(t,e){var n=ig(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ig(n)}}function Ey(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ey(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Sy(){for(var t=window,e=ha();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ha(t.document)}return e}function Jd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function LI(t){var e=Sy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ey(n.ownerDocument.documentElement,n)){if(r!==null&&Jd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sg(n,s);var o=sg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bI=kn&&"documentMode"in document&&11>=document.documentMode,gi=null,Ah=null,Ks=null,xh=!1;function og(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||gi==null||gi!==ha(r)||(r=gi,"selectionStart"in r&&Jd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ks&&go(Ks,r)||(Ks=r,r=va(Ah,"onSelect"),0<r.length&&(e=new Yd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gi)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var _i={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Ac={},Cy={};kn&&(Cy=document.createElement("div").style,"AnimationEvent"in window||(delete _i.animationend.animation,delete _i.animationiteration.animation,delete _i.animationstart.animation),"TransitionEvent"in window||delete _i.transitionend.transition);function fu(t){if(Ac[t])return Ac[t];if(!_i[t])return t;var e=_i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cy)return Ac[t]=e[n];return t}var Iy=fu("animationend"),Ty=fu("animationiteration"),ky=fu("animationstart"),Ry=fu("transitionend"),Ny=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){Ny.set(t,e),ti(e,[t])}for(var xc=0;xc<lg.length;xc++){var Oc=lg[xc],MI=Oc.toLowerCase(),UI=Oc[0].toUpperCase()+Oc.slice(1);Sr(MI,"on"+UI)}Sr(Iy,"onAnimationEnd");Sr(Ty,"onAnimationIteration");Sr(ky,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(Ry,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,MC(r,e,void 0,t),t.currentTarget=null}function Py(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ag(i,a,h),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ag(i,a,h),s=u}}}if(fa)throw t=kh,fa=!1,kh=null,t}function fe(t,e){var n=e[Mh];n===void 0&&(n=e[Mh]=new Set);var r=t+"__bubble";n.has(r)||(Ay(e,t,2,!1),n.add(r))}function Dc(t,e,n){var r=0;e&&(r|=4),Ay(n,t,r,e)}var Ol="_reactListening"+Math.random().toString(36).slice(2);function _o(t){if(!t[Ol]){t[Ol]=!0,Uv.forEach(function(n){n!=="selectionchange"&&(FI.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ol]||(e[Ol]=!0,Dc("selectionchange",!1,e))}}function Ay(t,e,n,r){switch(fy(e)){case 1:var i=JC;break;case 4:i=ZC;break;default:i=Kd}n=i.bind(null,e,n,t),i=void 0,!Th||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Zv(function(){var h=s,p=Vd(n),f=[];e:{var m=Ny.get(t);if(m!==void 0){var k=Yd,R=t;switch(t){case"keypress":if(Xl(n)===0)break e;case"keydown":case"keyup":k=pI;break;case"focusin":R="focus",k=Rc;break;case"focusout":R="blur",k=Rc;break;case"beforeblur":case"afterblur":k=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=nI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=_I;break;case Iy:case Ty:case ky:k=sI;break;case Ry:k=yI;break;case"scroll":k=eI;break;case"wheel":k=EI;break;case"copy":case"cut":case"paste":k=lI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Jm}var A=(e&4)!==0,L=!A&&t==="scroll",C=A?m!==null?m+"Capture":null:m;A=[];for(var y=h,I;y!==null;){I=y;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,C!==null&&(O=co(y,C),O!=null&&A.push(vo(y,O,I)))),L)break;y=y.return}0<A.length&&(m=new k(m,R,null,n,p),f.push({event:m,listeners:A}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",m&&n!==Ch&&(R=n.relatedTarget||n.fromElement)&&(Mr(R)||R[Rn]))break e;if((k||m)&&(m=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,k?(R=n.relatedTarget||n.toElement,k=h,R=R?Mr(R):null,R!==null&&(L=ni(R),R!==L||R.tag!==5&&R.tag!==6)&&(R=null)):(k=null,R=h),k!==R)){if(A=Qm,O="onMouseLeave",C="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(A=Jm,O="onPointerLeave",C="onPointerEnter",y="pointer"),L=k==null?m:vi(k),I=R==null?m:vi(R),m=new A(O,y+"leave",k,n,p),m.target=L,m.relatedTarget=I,O=null,Mr(p)===h&&(A=new A(C,y+"enter",R,n,p),A.target=I,A.relatedTarget=L,O=A),L=O,k&&R)t:{for(A=k,C=R,y=0,I=A;I;I=hi(I))y++;for(I=0,O=C;O;O=hi(O))I++;for(;0<y-I;)A=hi(A),y--;for(;0<I-y;)C=hi(C),I--;for(;y--;){if(A===C||C!==null&&A===C.alternate)break t;A=hi(A),C=hi(C)}A=null}else A=null;k!==null&&ug(f,m,k,A,!1),R!==null&&L!==null&&ug(f,L,R,A,!0)}}e:{if(m=h?vi(h):window,k=m.nodeName&&m.nodeName.toLowerCase(),k==="select"||k==="input"&&m.type==="file")var M=NI;else if(tg(m))if(yy)M=OI;else{M=AI;var U=PI}else(k=m.nodeName)&&k.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=xI);if(M&&(M=M(t,h))){vy(f,M,n,p);break e}U&&U(t,m,h),t==="focusout"&&(U=m._wrapperState)&&U.controlled&&m.type==="number"&&vh(m,"number",m.value)}switch(U=h?vi(h):window,t){case"focusin":(tg(U)||U.contentEditable==="true")&&(gi=U,Ah=h,Ks=null);break;case"focusout":Ks=Ah=gi=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,og(f,n,p);break;case"selectionchange":if(bI)break;case"keydown":case"keyup":og(f,n,p)}var w;if(Xd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else mi?gy(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(my&&n.locale!=="ko"&&(mi||_!=="onCompositionStart"?_==="onCompositionEnd"&&mi&&(w=py()):(Xn=p,qd="value"in Xn?Xn.value:Xn.textContent,mi=!0)),U=va(h,_),0<U.length&&(_=new Xm(_,t,null,n,p),f.push({event:_,listeners:U}),w?_.data=w:(w=_y(n),w!==null&&(_.data=w)))),(w=CI?II(t,n):TI(t,n))&&(h=va(h,"onBeforeInput"),0<h.length&&(p=new Xm("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:h}),p.data=w))}Py(f,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function va(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=co(t,n),s!=null&&r.unshift(vo(t,s,i)),s=co(t,e),s!=null&&r.push(vo(t,s,i))),t=t.return}return r}function hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=co(n,s),u!=null&&o.unshift(vo(n,u,a))):i||(u=co(n,s),u!=null&&o.push(vo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jI=/\r\n?/g,BI=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(jI,`
`).replace(BI,"")}function Dl(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(F(425))}function ya(){}var Oh=null,Dh=null;function Lh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bh=typeof setTimeout=="function"?setTimeout:void 0,zI=typeof clearTimeout=="function"?clearTimeout:void 0,hg=typeof Promise=="function"?Promise:void 0,$I=typeof queueMicrotask=="function"?queueMicrotask:typeof hg<"u"?function(t){return hg.resolve(null).then(t).catch(VI)}:bh;function VI(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);po(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ns=Math.random().toString(36).slice(2),en="__reactFiber$"+ns,yo="__reactProps$"+ns,Rn="__reactContainer$"+ns,Mh="__reactEvents$"+ns,WI="__reactListeners$"+ns,HI="__reactHandles$"+ns;function Mr(t){var e=t[en];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[en]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[en])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[en]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function pu(t){return t[yo]||null}var Uh=[],yi=-1;function Cr(t){return{current:t}}function pe(t){0>yi||(t.current=Uh[yi],Uh[yi]=null,yi--)}function ue(t,e){yi++,Uh[yi]=t.current,t.current=e}var gr={},Ze=Cr(gr),vt=Cr(!1),Wr=gr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return gr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function wa(){pe(vt),pe(Ze)}function fg(t,e,n){if(Ze.current!==gr)throw Error(F(168));ue(Ze,e),ue(vt,n)}function xy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,PC(t)||"Unknown",i));return ye({},n,r)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||gr,Wr=Ze.current,ue(Ze,t),ue(vt,vt.current),!0}function pg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=xy(t,e,Wr),r.__reactInternalMemoizedMergedChildContext=t,pe(vt),pe(Ze),ue(Ze,t)):pe(vt),ue(vt,n)}var gn=null,mu=!1,Mc=!1;function Oy(t){gn===null?gn=[t]:gn.push(t)}function GI(t){mu=!0,Oy(t)}function Ir(){if(!Mc&&gn!==null){Mc=!0;var t=0,e=re;try{var n=gn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,mu=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),ry(Wd,Ir),i}finally{re=e,Mc=!1}}return null}var wi=[],Ei=0,Sa=null,Ca=0,Pt=[],At=0,Hr=null,_n=1,vn="";function Or(t,e){wi[Ei++]=Ca,wi[Ei++]=Sa,Sa=t,Ca=e}function Dy(t,e,n){Pt[At++]=_n,Pt[At++]=vn,Pt[At++]=Hr,Hr=t;var r=_n;t=vn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,_n=1<<32-Gt(e)+i|n<<i|r,vn=s+t}else _n=1<<s|n<<i|r,vn=t}function Zd(t){t.return!==null&&(Or(t,1),Dy(t,1,0))}function ef(t){for(;t===Sa;)Sa=wi[--Ei],wi[Ei]=null,Ca=wi[--Ei],wi[Ei]=null;for(;t===Hr;)Hr=Pt[--At],Pt[At]=null,vn=Pt[--At],Pt[At]=null,_n=Pt[--At],Pt[At]=null}var Ct=null,St=null,ge=!1,$t=null;function Ly(t,e){var n=xt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,St=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:_n,overflow:vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,St=null,!0):!1;default:return!1}}function Fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jh(t){if(ge){var e=St;if(e){var n=e;if(!mg(t,e)){if(Fh(t))throw Error(F(418));e=sr(n.nextSibling);var r=Ct;e&&mg(t,e)?Ly(r,n):(t.flags=t.flags&-4097|2,ge=!1,Ct=t)}}else{if(Fh(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,Ct=t}}}function gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function Ll(t){if(t!==Ct)return!1;if(!ge)return gg(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lh(t.type,t.memoizedProps)),e&&(e=St)){if(Fh(t))throw by(),Error(F(418));for(;e;)Ly(t,e),e=sr(e.nextSibling)}if(gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Ct?sr(t.stateNode.nextSibling):null;return!0}function by(){for(var t=St;t;)t=sr(t.nextSibling)}function zi(){St=Ct=null,ge=!1}function tf(t){$t===null?$t=[t]:$t.push(t)}var KI=Ln.ReactCurrentBatchConfig;function Ps(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function bl(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function _g(t){var e=t._init;return e(t._payload)}function My(t){function e(C,y){if(t){var I=C.deletions;I===null?(C.deletions=[y],C.flags|=16):I.push(y)}}function n(C,y){if(!t)return null;for(;y!==null;)e(C,y),y=y.sibling;return null}function r(C,y){for(C=new Map;y!==null;)y.key!==null?C.set(y.key,y):C.set(y.index,y),y=y.sibling;return C}function i(C,y){return C=ur(C,y),C.index=0,C.sibling=null,C}function s(C,y,I){return C.index=I,t?(I=C.alternate,I!==null?(I=I.index,I<y?(C.flags|=2,y):I):(C.flags|=2,y)):(C.flags|=1048576,y)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function a(C,y,I,O){return y===null||y.tag!==6?(y=Vc(I,C.mode,O),y.return=C,y):(y=i(y,I),y.return=C,y)}function u(C,y,I,O){var M=I.type;return M===pi?p(C,y,I.props.children,O,I.key):y!==null&&(y.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&_g(M)===y.type)?(O=i(y,I.props),O.ref=Ps(C,y,I),O.return=C,O):(O=ia(I.type,I.key,I.props,null,C.mode,O),O.ref=Ps(C,y,I),O.return=C,O)}function h(C,y,I,O){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Wc(I,C.mode,O),y.return=C,y):(y=i(y,I.children||[]),y.return=C,y)}function p(C,y,I,O,M){return y===null||y.tag!==7?(y=$r(I,C.mode,O,M),y.return=C,y):(y=i(y,I),y.return=C,y)}function f(C,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Vc(""+y,C.mode,I),y.return=C,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Il:return I=ia(y.type,y.key,y.props,null,C.mode,I),I.ref=Ps(C,null,y),I.return=C,I;case fi:return y=Wc(y,C.mode,I),y.return=C,y;case $n:var O=y._init;return f(C,O(y._payload),I)}if(Fs(y)||Is(y))return y=$r(y,C.mode,I,null),y.return=C,y;bl(C,y)}return null}function m(C,y,I,O){var M=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return M!==null?null:a(C,y,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case Il:return I.key===M?u(C,y,I,O):null;case fi:return I.key===M?h(C,y,I,O):null;case $n:return M=I._init,m(C,y,M(I._payload),O)}if(Fs(I)||Is(I))return M!==null?null:p(C,y,I,O,null);bl(C,I)}return null}function k(C,y,I,O,M){if(typeof O=="string"&&O!==""||typeof O=="number")return C=C.get(I)||null,a(y,C,""+O,M);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Il:return C=C.get(O.key===null?I:O.key)||null,u(y,C,O,M);case fi:return C=C.get(O.key===null?I:O.key)||null,h(y,C,O,M);case $n:var U=O._init;return k(C,y,I,U(O._payload),M)}if(Fs(O)||Is(O))return C=C.get(I)||null,p(y,C,O,M,null);bl(y,O)}return null}function R(C,y,I,O){for(var M=null,U=null,w=y,_=y=0,v=null;w!==null&&_<I.length;_++){w.index>_?(v=w,w=null):v=w.sibling;var E=m(C,w,I[_],O);if(E===null){w===null&&(w=v);break}t&&w&&E.alternate===null&&e(C,w),y=s(E,y,_),U===null?M=E:U.sibling=E,U=E,w=v}if(_===I.length)return n(C,w),ge&&Or(C,_),M;if(w===null){for(;_<I.length;_++)w=f(C,I[_],O),w!==null&&(y=s(w,y,_),U===null?M=w:U.sibling=w,U=w);return ge&&Or(C,_),M}for(w=r(C,w);_<I.length;_++)v=k(w,C,_,I[_],O),v!==null&&(t&&v.alternate!==null&&w.delete(v.key===null?_:v.key),y=s(v,y,_),U===null?M=v:U.sibling=v,U=v);return t&&w.forEach(function(T){return e(C,T)}),ge&&Or(C,_),M}function A(C,y,I,O){var M=Is(I);if(typeof M!="function")throw Error(F(150));if(I=M.call(I),I==null)throw Error(F(151));for(var U=M=null,w=y,_=y=0,v=null,E=I.next();w!==null&&!E.done;_++,E=I.next()){w.index>_?(v=w,w=null):v=w.sibling;var T=m(C,w,E.value,O);if(T===null){w===null&&(w=v);break}t&&w&&T.alternate===null&&e(C,w),y=s(T,y,_),U===null?M=T:U.sibling=T,U=T,w=v}if(E.done)return n(C,w),ge&&Or(C,_),M;if(w===null){for(;!E.done;_++,E=I.next())E=f(C,E.value,O),E!==null&&(y=s(E,y,_),U===null?M=E:U.sibling=E,U=E);return ge&&Or(C,_),M}for(w=r(C,w);!E.done;_++,E=I.next())E=k(w,C,_,E.value,O),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?_:E.key),y=s(E,y,_),U===null?M=E:U.sibling=E,U=E);return t&&w.forEach(function(N){return e(C,N)}),ge&&Or(C,_),M}function L(C,y,I,O){if(typeof I=="object"&&I!==null&&I.type===pi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case Il:e:{for(var M=I.key,U=y;U!==null;){if(U.key===M){if(M=I.type,M===pi){if(U.tag===7){n(C,U.sibling),y=i(U,I.props.children),y.return=C,C=y;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===$n&&_g(M)===U.type){n(C,U.sibling),y=i(U,I.props),y.ref=Ps(C,U,I),y.return=C,C=y;break e}n(C,U);break}else e(C,U);U=U.sibling}I.type===pi?(y=$r(I.props.children,C.mode,O,I.key),y.return=C,C=y):(O=ia(I.type,I.key,I.props,null,C.mode,O),O.ref=Ps(C,y,I),O.return=C,C=O)}return o(C);case fi:e:{for(U=I.key;y!==null;){if(y.key===U)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(C,y.sibling),y=i(y,I.children||[]),y.return=C,C=y;break e}else{n(C,y);break}else e(C,y);y=y.sibling}y=Wc(I,C.mode,O),y.return=C,C=y}return o(C);case $n:return U=I._init,L(C,y,U(I._payload),O)}if(Fs(I))return R(C,y,I,O);if(Is(I))return A(C,y,I,O);bl(C,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(C,y.sibling),y=i(y,I),y.return=C,C=y):(n(C,y),y=Vc(I,C.mode,O),y.return=C,C=y),o(C)):n(C,y)}return L}var $i=My(!0),Uy=My(!1),Ia=Cr(null),Ta=null,Si=null,nf=null;function rf(){nf=Si=Ta=null}function sf(t){var e=Ia.current;pe(Ia),t._currentValue=e}function Bh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){Ta=t,nf=Si=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gt=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(nf!==t)if(t={context:t,memoizedValue:e,next:null},Si===null){if(Ta===null)throw Error(F(308));Si=t,Ta.dependencies={lanes:0,firstContext:t}}else Si=Si.next=t;return e}var Ur=null;function of(t){Ur===null?Ur=[t]:Ur.push(t)}function Fy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,of(e)):(n.next=i.next,i.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vn=!1;function lf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function or(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Nn(t,n)}return i=r.interleaved,i===null?(e.next=e,of(r)):(e.next=i.next,i.next=e),r.interleaved=e,Nn(t,n)}function Jl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hd(t,n)}}function vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ka(t,e,n,r){var i=t.updateQueue;Vn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=h:a.next=h,p.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,p=h=u=null,a=s;do{var m=a.lane,k=a.eventTime;if((r&m)===m){p!==null&&(p=p.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,A=a;switch(m=e,k=n,A.tag){case 1:if(R=A.payload,typeof R=="function"){f=R.call(k,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,m=typeof R=="function"?R.call(k,f,m):R,m==null)break e;f=ye({},f,m);break e;case 2:Vn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else k={eventTime:k,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(h=p=k,u=f):p=p.next=k,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(p===null&&(u=f),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Kr|=o,t.lanes=o,t.memoizedState=f}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var Ho={},sn=Cr(Ho),wo=Cr(Ho),Eo=Cr(Ho);function Fr(t){if(t===Ho)throw Error(F(174));return t}function af(t,e){switch(ue(Eo,e),ue(wo,t),ue(sn,Ho),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wh(e,t)}pe(sn),ue(sn,e)}function Vi(){pe(sn),pe(wo),pe(Eo)}function By(t){Fr(Eo.current);var e=Fr(sn.current),n=wh(e,t.type);e!==n&&(ue(wo,t),ue(sn,n))}function uf(t){wo.current===t&&(pe(sn),pe(wo))}var _e=Cr(0);function Ra(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function cf(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Zl=Ln.ReactCurrentDispatcher,Fc=Ln.ReactCurrentBatchConfig,Gr=0,ve=null,xe=null,Ue=null,Na=!1,qs=!1,So=0,qI=0;function Qe(){throw Error(F(321))}function hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function df(t,e,n,r,i,s){if(Gr=s,ve=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Zl.current=t===null||t.memoizedState===null?JI:ZI,t=n(r,i),qs){s=0;do{if(qs=!1,So=0,25<=s)throw Error(F(301));s+=1,Ue=xe=null,e.updateQueue=null,Zl.current=eT,t=n(r,i)}while(qs)}if(Zl.current=Pa,e=xe!==null&&xe.next!==null,Gr=0,Ue=xe=ve=null,Na=!1,e)throw Error(F(300));return t}function ff(){var t=So!==0;return So=0,t}function Zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Mt(){if(xe===null){var t=ve.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Ue===null?ve.memoizedState:Ue.next;if(e!==null)Ue=e,xe=t;else{if(t===null)throw Error(F(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Ue===null?ve.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function Co(t,e){return typeof e=="function"?e(t):e}function jc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,h=s;do{var p=h.lane;if((Gr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var f={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,ve.lanes|=p,Kr|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=a,Yt(r,e.memoizedState)||(gt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ve.lanes|=s,Kr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yt(s,e.memoizedState)||(gt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function zy(){}function $y(t,e){var n=ve,r=Mt(),i=e(),s=!Yt(r.memoizedState,i);if(s&&(r.memoizedState=i,gt=!0),r=r.queue,pf(Hy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Io(9,Wy.bind(null,n,r,i,e),void 0,null),je===null)throw Error(F(349));Gr&30||Vy(n,e,i)}return i}function Vy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Wy(t,e,n,r){e.value=n,e.getSnapshot=r,Gy(e)&&Ky(t)}function Hy(t,e,n){return n(function(){Gy(e)&&Ky(t)})}function Gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function Ky(t){var e=Nn(t,1);e!==null&&Kt(e,t,1,-1)}function wg(t){var e=Zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:t},e.queue=t,t=t.dispatch=XI.bind(null,ve,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ve.updateQueue,e===null?(e={lastEffect:null,stores:null},ve.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qy(){return Mt().memoizedState}function ea(t,e,n,r){var i=Zt();ve.flags|=t,i.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function gu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&hf(r,o.deps)){i.memoizedState=Io(e,n,s,r);return}}ve.flags|=t,i.memoizedState=Io(1|e,n,s,r)}function Eg(t,e){return ea(8390656,8,t,e)}function pf(t,e){return gu(2048,8,t,e)}function Yy(t,e){return gu(4,2,t,e)}function Qy(t,e){return gu(4,4,t,e)}function Xy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Jy(t,e,n){return n=n!=null?n.concat([t]):null,gu(4,4,Xy.bind(null,e,t),n)}function mf(){}function Zy(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function e0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&hf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function t0(t,e,n){return Gr&21?(Yt(n,e)||(n=oy(),ve.lanes|=n,Kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gt=!0),t.memoizedState=n)}function YI(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=Fc.transition;Fc.transition={};try{t(!1),e()}finally{re=n,Fc.transition=r}}function n0(){return Mt().memoizedState}function QI(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},r0(t))i0(e,n);else if(n=Fy(t,e,n,r),n!==null){var i=lt();Kt(n,t,r,i),s0(n,e,r)}}function XI(t,e,n){var r=ar(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(r0(t))i0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Yt(a,o)){var u=e.interleaved;u===null?(i.next=i,of(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Fy(t,e,i,r),n!==null&&(i=lt(),Kt(n,t,r,i),s0(n,e,r))}}function r0(t){var e=t.alternate;return t===ve||e!==null&&e===ve}function i0(t,e){qs=Na=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function s0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Hd(t,n)}}var Pa={readContext:bt,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useInsertionEffect:Qe,useLayoutEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useMutableSource:Qe,useSyncExternalStore:Qe,useId:Qe,unstable_isNewReconciler:!1},JI={readContext:bt,useCallback:function(t,e){return Zt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:Eg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ea(4194308,4,Xy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ea(4194308,4,t,e)},useInsertionEffect:function(t,e){return ea(4,2,t,e)},useMemo:function(t,e){var n=Zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=QI.bind(null,ve,t),[r.memoizedState,t]},useRef:function(t){var e=Zt();return t={current:t},e.memoizedState=t},useState:wg,useDebugValue:mf,useDeferredValue:function(t){return Zt().memoizedState=t},useTransition:function(){var t=wg(!1),e=t[0];return t=YI.bind(null,t[1]),Zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ve,i=Zt();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),je===null)throw Error(F(349));Gr&30||Vy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Eg(Hy.bind(null,r,s,t),[t]),r.flags|=2048,Io(9,Wy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Zt(),e=je.identifierPrefix;if(ge){var n=vn,r=_n;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=So++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=qI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZI={readContext:bt,useCallback:Zy,useContext:bt,useEffect:pf,useImperativeHandle:Jy,useInsertionEffect:Yy,useLayoutEffect:Qy,useMemo:e0,useReducer:jc,useRef:qy,useState:function(){return jc(Co)},useDebugValue:mf,useDeferredValue:function(t){var e=Mt();return t0(e,xe.memoizedState,t)},useTransition:function(){var t=jc(Co)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:zy,useSyncExternalStore:$y,useId:n0,unstable_isNewReconciler:!1},eT={readContext:bt,useCallback:Zy,useContext:bt,useEffect:pf,useImperativeHandle:Jy,useInsertionEffect:Yy,useLayoutEffect:Qy,useMemo:e0,useReducer:Bc,useRef:qy,useState:function(){return Bc(Co)},useDebugValue:mf,useDeferredValue:function(t){var e=Mt();return xe===null?e.memoizedState=t:t0(e,xe.memoizedState,t)},useTransition:function(){var t=Bc(Co)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:zy,useSyncExternalStore:$y,useId:n0,unstable_isNewReconciler:!1};function Bt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function zh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _u={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ar(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Jl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ar(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=or(t,s,i),e!==null&&(Kt(e,t,i,r),Jl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=ar(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=or(t,i,r),e!==null&&(Kt(e,t,r,n),Jl(e,t,r))}};function Sg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(i,s):!0}function o0(t,e,n){var r=!1,i=gr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=yt(e)?Wr:Ze.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):gr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_u,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Cg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_u.enqueueReplaceState(e,e.state,null)}function $h(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},lf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=yt(e)?Wr:Ze.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(zh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_u.enqueueReplaceState(i,i.state,null),ka(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=NC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function zc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tT=typeof WeakMap=="function"?WeakMap:Map;function l0(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xa||(xa=!0,Zh=r),Vh(t,e)},n}function a0(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vh(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mT.bind(null,t,e,n),e.then(t,t))}function Tg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function kg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,or(n,e,1))),n.lanes|=1),t)}var nT=Ln.ReactCurrentOwner,gt=!1;function rt(t,e,n,r){e.child=t===null?Uy(e,null,n,r):$i(e,t.child,n,r)}function Rg(t,e,n,r,i){n=n.render;var s=e.ref;return Oi(e,i),r=df(t,e,n,r,s,i),n=ff(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ge&&n&&Zd(e),e.flags|=1,rt(t,e,r,i),e.child)}function Ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,u0(t,e,s,r,i)):(t=ia(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Pn(t,e,i)}return e.flags|=1,t=ur(s,r),t.ref=e.ref,t.return=e,e.child=t}function u0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(go(s,r)&&t.ref===e.ref)if(gt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(gt=!0);else return e.lanes=t.lanes,Pn(t,e,i)}return Wh(t,e,n,r,i)}function c0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(Ii,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(Ii,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(Ii,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(Ii,Et),Et|=r;return rt(t,e,i,n),e.child}function h0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wh(t,e,n,r,i){var s=yt(n)?Wr:Ze.current;return s=Bi(e,s),Oi(e,i),n=df(t,e,n,r,s,i),r=ff(),t!==null&&!gt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Pn(t,e,i)):(ge&&r&&Zd(e),e.flags|=1,rt(t,e,n,i),e.child)}function Pg(t,e,n,r,i){if(yt(n)){var s=!0;Ea(e)}else s=!1;if(Oi(e,i),e.stateNode===null)ta(t,e),o0(e,n,r),$h(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=bt(h):(h=yt(n)?Wr:Ze.current,h=Bi(e,h));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&Cg(e,o,r,h),Vn=!1;var m=e.memoizedState;o.state=m,ka(e,r,o,i),u=e.memoizedState,a!==r||m!==u||vt.current||Vn?(typeof p=="function"&&(zh(e,n,p,r),u=e.memoizedState),(a=Vn||Sg(e,n,a,r,m,u,h))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,jy(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:Bt(e.type,a),o.props=h,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=yt(n)?Wr:Ze.current,u=Bi(e,u));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&Cg(e,o,r,u),Vn=!1,m=e.memoizedState,o.state=m,ka(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||vt.current||Vn?(typeof k=="function"&&(zh(e,n,k,r),R=e.memoizedState),(h=Vn||Sg(e,n,h,r,m,R,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Hh(t,e,n,r,s,i)}function Hh(t,e,n,r,i,s){h0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pg(e,n,!1),Pn(t,e,s);r=e.stateNode,nT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$i(e,t.child,null,s),e.child=$i(e,null,a,s)):rt(t,e,a,s),e.memoizedState=r.state,i&&pg(e,n,!0),e.child}function d0(t){var e=t.stateNode;e.pendingContext?fg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fg(t,e.context,!1),af(t,e.containerInfo)}function Ag(t,e,n,r,i){return zi(),tf(i),e.flags|=256,rt(t,e,n,r),e.child}var Gh={dehydrated:null,treeContext:null,retryLane:0};function Kh(t){return{baseLanes:t,cachePool:null,transitions:null}}function f0(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(_e,i&1),t===null)return jh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wu(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Kh(n),e.memoizedState=Gh,t):gf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return rT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ur(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ur(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Kh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gh,r}return s=t.child,t=s.sibling,r=ur(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gf(t,e){return e=wu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ml(t,e,n,r){return r!==null&&tf(r),$i(e,t.child,null,n),t=gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=zc(Error(F(422))),Ml(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wu({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$i(e,t.child,null,o),e.child.memoizedState=Kh(o),e.memoizedState=Gh,s);if(!(e.mode&1))return Ml(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(F(419)),r=zc(s,r,void 0),Ml(t,e,o,r)}if(a=(o&t.childLanes)!==0,gt||a){if(r=je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Nn(t,i),Kt(r,t,i,-1))}return Sf(),r=zc(Error(F(421))),Ml(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=sr(i.nextSibling),Ct=e,ge=!0,$t=null,t!==null&&(Pt[At++]=_n,Pt[At++]=vn,Pt[At++]=Hr,_n=t.id,vn=t.overflow,Hr=e),e=gf(e,r.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bh(t.return,e,n)}function $c(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function p0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ra(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),$c(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ra(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}$c(e,!0,n,null,s);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ta(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iT(t,e,n){switch(e.tag){case 3:d0(e),zi();break;case 5:By(e);break;case 1:yt(e.type)&&Ea(e);break;case 4:af(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(Ia,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?f0(t,e,n):(ue(_e,_e.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);ue(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return p0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,c0(t,e,n)}return Pn(t,e,n)}var m0,qh,g0,_0;m0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};qh=function(){};g0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(sn.current);var s=null;switch(n){case"input":i=gh(t,i),r=gh(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=yh(t,i),r=yh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ya)}Eh(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ao.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ao.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&fe("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};_0=function(t,e,n,r){n!==r&&(e.flags|=4)};function As(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sT(t,e,n){var r=e.pendingProps;switch(ef(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&wa(),Xe(e),null;case 3:return r=e.stateNode,Vi(),pe(vt),pe(Ze),cf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ll(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$t!==null&&(nd($t),$t=null))),qh(t,e),Xe(e),null;case 5:uf(e);var i=Fr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)g0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Xe(e),null}if(t=Fr(sn.current),Ll(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[en]=e,r[yo]=s,t=(e.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Bs.length;i++)fe(Bs[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Bm(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":$m(r,s),fe("invalid",r)}Eh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Dl(r.textContent,a,t),i=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":Tl(r),zm(r,s,!0);break;case"textarea":Tl(r),Vm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ya)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[en]=e,t[yo]=r,m0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Sh(n,r),n){case"dialog":fe("cancel",t),fe("close",t),i=r;break;case"iframe":case"object":case"embed":fe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Bs.length;i++)fe(Bs[i],t);i=r;break;case"source":fe("error",t),i=r;break;case"img":case"image":case"link":fe("error",t),fe("load",t),i=r;break;case"details":fe("toggle",t),i=r;break;case"input":Bm(t,r),i=gh(t,r),fe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),fe("invalid",t);break;case"textarea":$m(t,r),i=yh(t,r),fe("invalid",t);break;default:i=r}Eh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?qv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Gv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&uo(t,u):typeof u=="number"&&uo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?u!=null&&s==="onScroll"&&fe("scroll",t):u!=null&&jd(t,s,u,o))}switch(n){case"input":Tl(t),zm(t,r,!1);break;case"textarea":Tl(t),Vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+mr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ya)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)_0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Fr(Eo.current),Fr(sn.current),Ll(e)){if(r=e.stateNode,n=e.memoizedProps,r[en]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:Dl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Dl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[en]=e,e.stateNode=r}return Xe(e),null;case 13:if(pe(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&St!==null&&e.mode&1&&!(e.flags&128))by(),zi(),e.flags|=98560,s=!1;else if(s=Ll(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[en]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else $t!==null&&(nd($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Le===0&&(Le=3):Sf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return Vi(),qh(t,e),t===null&&_o(e.stateNode.containerInfo),Xe(e),null;case 10:return sf(e.type._context),Xe(e),null;case 17:return yt(e.type)&&wa(),Xe(e),null;case 19:if(pe(_e),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)As(s,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ra(t),o!==null){for(e.flags|=128,As(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ne()>Hi&&(e.flags|=128,r=!0,As(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ra(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),As(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Xe(e),null}else 2*Ne()-s.renderingStartTime>Hi&&n!==1073741824&&(e.flags|=128,r=!0,As(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ne(),e.sibling=null,n=_e.current,ue(_e,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return Ef(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function oT(t,e){switch(ef(e),e.tag){case 1:return yt(e.type)&&wa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vi(),pe(vt),pe(Ze),cf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return uf(e),null;case 13:if(pe(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return pe(_e),null;case 4:return Vi(),null;case 10:return sf(e.type._context),null;case 22:case 23:return Ef(),null;case 24:return null;default:return null}}var Ul=!1,Je=!1,lT=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ci(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function Yh(t,e,n){try{n()}catch(r){we(t,e,r)}}var Og=!1;function aT(t,e){if(Oh=ga,t=Sy(),Jd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,p=0,f=t,m=null;t:for(;;){for(var k;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(k=f.firstChild)!==null;)m=f,f=k;for(;;){if(f===t)break t;if(m===n&&++h===i&&(a=o),m===s&&++p===r&&(u=o),(k=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dh={focusedElem:t,selectionRange:n},ga=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,L=R.memoizedState,C=e.stateNode,y=C.getSnapshotBeforeUpdate(e.elementType===e.type?A:Bt(e.type,A),L);C.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(O){we(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return R=Og,Og=!1,R}function Ys(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yh(e,n,s)}i=i.next}while(i!==r)}}function vu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function v0(t){var e=t.alternate;e!==null&&(t.alternate=null,v0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[en],delete e[yo],delete e[Mh],delete e[WI],delete e[HI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function y0(t){return t.tag===5||t.tag===3||t.tag===4}function Dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||y0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ya));else if(r!==4&&(t=t.child,t!==null))for(Xh(t,e,n),t=t.sibling;t!==null;)Xh(t,e,n),t=t.sibling}function Jh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jh(t,e,n),t=t.sibling;t!==null;)Jh(t,e,n),t=t.sibling}var $e=null,zt=!1;function Bn(t,e,n){for(n=n.child;n!==null;)w0(t,e,n),n=n.sibling}function w0(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:Je||Ci(n,e);case 6:var r=$e,i=zt;$e=null,Bn(t,e,n),$e=r,zt=i,$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(zt?(t=$e,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),po(t)):bc($e,n.stateNode));break;case 4:r=$e,i=zt,$e=n.stateNode.containerInfo,zt=!0,Bn(t,e,n),$e=r,zt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yh(n,e,o),i=i.next}while(i!==r)}Bn(t,e,n);break;case 1:if(!Je&&(Ci(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}Bn(t,e,n);break;case 21:Bn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Bn(t,e,n),Je=r):Bn(t,e,n);break;default:Bn(t,e,n)}}function Lg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new lT),e.forEach(function(r){var i=_T.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,zt=!1;break e;case 3:$e=a.stateNode.containerInfo,zt=!0;break e;case 4:$e=a.stateNode.containerInfo,zt=!0;break e}a=a.return}if($e===null)throw Error(F(160));w0(s,o,i),$e=null,zt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){we(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)E0(e,t),e=e.sibling}function E0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jt(e,t),Xt(t),r&4){try{Ys(3,t,t.return),vu(3,t)}catch(A){we(t,t.return,A)}try{Ys(5,t,t.return)}catch(A){we(t,t.return,A)}}break;case 1:jt(e,t),Xt(t),r&512&&n!==null&&Ci(n,n.return);break;case 5:if(jt(e,t),Xt(t),r&512&&n!==null&&Ci(n,n.return),t.flags&32){var i=t.stateNode;try{uo(i,"")}catch(A){we(t,t.return,A)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Vv(i,s),Sh(a,o);var h=Sh(a,s);for(o=0;o<u.length;o+=2){var p=u[o],f=u[o+1];p==="style"?qv(i,f):p==="dangerouslySetInnerHTML"?Gv(i,f):p==="children"?uo(i,f):jd(i,p,f,h)}switch(a){case"input":_h(i,s);break;case"textarea":Wv(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var k=s.value;k!=null?Ni(i,!!s.multiple,k,!1):m!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[yo]=s}catch(A){we(t,t.return,A)}}break;case 6:if(jt(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(A){we(t,t.return,A)}}break;case 3:if(jt(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(A){we(t,t.return,A)}break;case 4:jt(e,t),Xt(t);break;case 13:jt(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yf=Ne())),r&4&&Lg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(h=Je)||p,jt(e,t),Je=h):jt(e,t),Xt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(f=$=p;$!==null;){switch(m=$,k=m.child,m.tag){case 0:case 11:case 14:case 15:Ys(4,m,m.return);break;case 1:Ci(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(A){we(r,n,A)}}break;case 5:Ci(m,m.return);break;case 22:if(m.memoizedState!==null){Mg(f);continue}}k!==null?(k.return=m,$=k):Mg(f)}p=p.sibling}e:for(p=null,f=t;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Kv("display",o))}catch(A){we(t,t.return,A)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=h?"":f.memoizedProps}catch(A){we(t,t.return,A)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jt(e,t),Xt(t),r&4&&Lg(t);break;case 21:break;default:jt(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(y0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(uo(i,""),r.flags&=-33);var s=Dg(t);Jh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Dg(t);Xh(t,a,o);break;default:throw Error(F(161))}}catch(u){we(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uT(t,e,n){$=t,S0(t)}function S0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ul;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Je;a=Ul;var h=Je;if(Ul=o,(Je=u)&&!h)for($=i;$!==null;)o=$,u=o.child,o.tag===22&&o.memoizedState!==null?Ug(i):u!==null?(u.return=o,$=u):Ug(i);for(;s!==null;)$=s,S0(s),s=s.sibling;$=i,Ul=a,Je=h}bg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):bg(t)}}function bg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||vu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Bt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&yg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&po(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Je||e.flags&512&&Qh(e)}catch(m){we(e,e.return,m)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Mg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Ug(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vu(4,e)}catch(u){we(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){we(e,i,u)}}var s=e.return;try{Qh(e)}catch(u){we(e,s,u)}break;case 5:var o=e.return;try{Qh(e)}catch(u){we(e,o,u)}}}catch(u){we(e,e.return,u)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var cT=Math.ceil,Aa=Ln.ReactCurrentDispatcher,_f=Ln.ReactCurrentOwner,Dt=Ln.ReactCurrentBatchConfig,J=0,je=null,Ae=null,We=0,Et=0,Ii=Cr(0),Le=0,To=null,Kr=0,yu=0,vf=0,Qs=null,ft=null,yf=0,Hi=1/0,mn=null,xa=!1,Zh=null,lr=null,Fl=!1,Jn=null,Oa=0,Xs=0,ed=null,na=-1,ra=0;function lt(){return J&6?Ne():na!==-1?na:na=Ne()}function ar(t){return t.mode&1?J&2&&We!==0?We&-We:KI.transition!==null?(ra===0&&(ra=oy()),ra):(t=re,t!==0||(t=window.event,t=t===void 0?16:fy(t.type)),t):1}function Kt(t,e,n,r){if(50<Xs)throw Xs=0,ed=null,Error(F(185));$o(t,n,r),(!(J&2)||t!==je)&&(t===je&&(!(J&2)&&(yu|=n),Le===4&&Hn(t,We)),wt(t,r),n===1&&J===0&&!(e.mode&1)&&(Hi=Ne()+500,mu&&Ir()))}function wt(t,e){var n=t.callbackNode;KC(t,e);var r=ma(t,t===je?We:0);if(r===0)n!==null&&Gm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Gm(n),e===1)t.tag===0?GI(Fg.bind(null,t)):Oy(Fg.bind(null,t)),$I(function(){!(J&6)&&Ir()}),n=null;else{switch(ly(r)){case 1:n=Wd;break;case 4:n=iy;break;case 16:n=pa;break;case 536870912:n=sy;break;default:n=pa}n=A0(n,C0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function C0(t,e){if(na=-1,ra=0,J&6)throw Error(F(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=ma(t,t===je?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Da(t,r);else{e=r;var i=J;J|=2;var s=T0();(je!==t||We!==e)&&(mn=null,Hi=Ne()+500,zr(t,e));do try{fT();break}catch(a){I0(t,a)}while(!0);rf(),Aa.current=s,J=i,Ae!==null?e=0:(je=null,We=0,e=Le)}if(e!==0){if(e===2&&(i=Rh(t),i!==0&&(r=i,e=td(t,i))),e===1)throw n=To,zr(t,0),Hn(t,r),wt(t,Ne()),n;if(e===6)Hn(t,r);else{if(i=t.current.alternate,!(r&30)&&!hT(i)&&(e=Da(t,r),e===2&&(s=Rh(t),s!==0&&(r=s,e=td(t,s))),e===1))throw n=To,zr(t,0),Hn(t,r),wt(t,Ne()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Dr(t,ft,mn);break;case 3:if(Hn(t,r),(r&130023424)===r&&(e=yf+500-Ne(),10<e)){if(ma(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=bh(Dr.bind(null,t,ft,mn),e);break}Dr(t,ft,mn);break;case 4:if(Hn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cT(r/1960))-r,10<r){t.timeoutHandle=bh(Dr.bind(null,t,ft,mn),r);break}Dr(t,ft,mn);break;case 5:Dr(t,ft,mn);break;default:throw Error(F(329))}}}return wt(t,Ne()),t.callbackNode===n?C0.bind(null,t):null}function td(t,e){var n=Qs;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=Da(t,e),t!==2&&(e=ft,ft=n,e!==null&&nd(e)),t}function nd(t){ft===null?ft=t:ft.push.apply(ft,t)}function hT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hn(t,e){for(e&=~vf,e&=~yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function Fg(t){if(J&6)throw Error(F(327));Di();var e=ma(t,0);if(!(e&1))return wt(t,Ne()),null;var n=Da(t,e);if(t.tag!==0&&n===2){var r=Rh(t);r!==0&&(e=r,n=td(t,r))}if(n===1)throw n=To,zr(t,0),Hn(t,e),wt(t,Ne()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Dr(t,ft,mn),wt(t,Ne()),null}function wf(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(Hi=Ne()+500,mu&&Ir())}}function qr(t){Jn!==null&&Jn.tag===0&&!(J&6)&&Di();var e=J;J|=1;var n=Dt.transition,r=re;try{if(Dt.transition=null,re=1,t)return t()}finally{re=r,Dt.transition=n,J=e,!(J&6)&&Ir()}}function Ef(){Et=Ii.current,pe(Ii)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zI(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(ef(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wa();break;case 3:Vi(),pe(vt),pe(Ze),cf();break;case 5:uf(r);break;case 4:Vi();break;case 13:pe(_e);break;case 19:pe(_e);break;case 10:sf(r.type._context);break;case 22:case 23:Ef()}n=n.return}if(je=t,Ae=t=ur(t.current,null),We=Et=e,Le=0,To=null,vf=yu=Kr=0,ft=Qs=null,Ur!==null){for(e=0;e<Ur.length;e++)if(n=Ur[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ur=null}return t}function I0(t,e){do{var n=Ae;try{if(rf(),Zl.current=Pa,Na){for(var r=ve.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Na=!1}if(Gr=0,Ue=xe=ve=null,qs=!1,So=0,_f.current=null,n===null||n.return===null){Le=1,To=e,Ae=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=We,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var m=p.alternate;m?(p.updateQueue=m.updateQueue,p.memoizedState=m.memoizedState,p.lanes=m.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=Tg(o);if(k!==null){k.flags&=-257,kg(k,o,a,s,e),k.mode&1&&Ig(s,h,e),e=k,u=h;var R=e.updateQueue;if(R===null){var A=new Set;A.add(u),e.updateQueue=A}else R.add(u);break e}else{if(!(e&1)){Ig(s,h,e),Sf();break e}u=Error(F(426))}}else if(ge&&a.mode&1){var L=Tg(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),kg(L,o,a,s,e),tf(Wi(u,a));break e}}s=u=Wi(u,a),Le!==4&&(Le=2),Qs===null?Qs=[s]:Qs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var C=l0(s,u,e);vg(s,C);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(lr===null||!lr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=a0(s,a,e);vg(s,O);break e}}s=s.return}while(s!==null)}R0(n)}catch(M){e=M,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function T0(){var t=Aa.current;return Aa.current=Pa,t===null?Pa:t}function Sf(){(Le===0||Le===3||Le===2)&&(Le=4),je===null||!(Kr&268435455)&&!(yu&268435455)||Hn(je,We)}function Da(t,e){var n=J;J|=2;var r=T0();(je!==t||We!==e)&&(mn=null,zr(t,e));do try{dT();break}catch(i){I0(t,i)}while(!0);if(rf(),J=n,Aa.current=r,Ae!==null)throw Error(F(261));return je=null,We=0,Le}function dT(){for(;Ae!==null;)k0(Ae)}function fT(){for(;Ae!==null&&!FC();)k0(Ae)}function k0(t){var e=P0(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?R0(t):Ae=e,_f.current=null}function R0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oT(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,Ae=null;return}}else if(n=sT(n,e,Et),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Le===0&&(Le=5)}function Dr(t,e,n){var r=re,i=Dt.transition;try{Dt.transition=null,re=1,pT(t,e,n,r)}finally{Dt.transition=i,re=r}return null}function pT(t,e,n,r){do Di();while(Jn!==null);if(J&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(qC(t,s),t===je&&(Ae=je=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,A0(pa,function(){return Di(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=re;re=1;var a=J;J|=4,_f.current=null,aT(t,n),E0(n,t),LI(Dh),ga=!!Oh,Dh=Oh=null,t.current=n,uT(n),jC(),J=a,re=o,Dt.transition=s}else t.current=n;if(Fl&&(Fl=!1,Jn=t,Oa=i),s=t.pendingLanes,s===0&&(lr=null),$C(n.stateNode),wt(t,Ne()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xa)throw xa=!1,t=Zh,Zh=null,t;return Oa&1&&t.tag!==0&&Di(),s=t.pendingLanes,s&1?t===ed?Xs++:(Xs=0,ed=t):Xs=0,Ir(),null}function Di(){if(Jn!==null){var t=ly(Oa),e=Dt.transition,n=re;try{if(Dt.transition=null,re=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,Oa=0,J&6)throw Error(F(331));var i=J;for(J|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for($=h;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:Ys(8,p,s)}var f=p.child;if(f!==null)f.return=p,$=f;else for(;$!==null;){p=$;var m=p.sibling,k=p.return;if(v0(p),p===h){$=null;break}if(m!==null){m.return=k,$=m;break}$=k}}}var R=s.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var L=A.sibling;A.sibling=null,A=L}while(A!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ys(9,s,s.return)}var C=s.sibling;if(C!==null){C.return=s.return,$=C;break e}$=s.return}}var y=t.current;for($=y;$!==null;){o=$;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,$=I;else e:for(o=y;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:vu(9,a)}}catch(M){we(a,a.return,M)}if(a===o){$=null;break e}var O=a.sibling;if(O!==null){O.return=a.return,$=O;break e}$=a.return}}if(J=i,Ir(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(cu,t)}catch{}r=!0}return r}finally{re=n,Dt.transition=e}}return!1}function jg(t,e,n){e=Wi(n,e),e=l0(t,e,1),t=or(t,e,1),e=lt(),t!==null&&($o(t,1,e),wt(t,e))}function we(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Wi(n,t),t=a0(e,t,1),e=or(e,t,1),t=lt(),e!==null&&($o(e,1,t),wt(e,t));break}}e=e.return}}function mT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,je===t&&(We&n)===n&&(Le===4||Le===3&&(We&130023424)===We&&500>Ne()-yf?zr(t,0):vf|=n),wt(t,e)}function N0(t,e){e===0&&(t.mode&1?(e=Nl,Nl<<=1,!(Nl&130023424)&&(Nl=4194304)):e=1);var n=lt();t=Nn(t,e),t!==null&&($o(t,e,n),wt(t,n))}function gT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),N0(t,n)}function _T(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),N0(t,n)}var P0;P0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)gt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gt=!1,iT(t,e,n);gt=!!(t.flags&131072)}else gt=!1,ge&&e.flags&1048576&&Dy(e,Ca,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ta(t,e),t=e.pendingProps;var i=Bi(e,Ze.current);Oi(e,n),i=df(null,e,r,t,i,n);var s=ff();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Ea(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,lf(e),i.updater=_u,e.stateNode=i,i._reactInternals=e,$h(e,r,t,n),e=Hh(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&Zd(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ta(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yT(r),t=Bt(r,t),i){case 0:e=Wh(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=Rg(null,e,r,t,n);break e;case 14:e=Ng(null,e,r,Bt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Pg(t,e,r,i,n);case 3:e:{if(d0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,jy(t,e),ka(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(F(423)),e),e=Ag(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(F(424)),e),e=Ag(t,e,r,n,i);break e}else for(St=sr(e.stateNode.containerInfo.firstChild),Ct=e,ge=!0,$t=null,n=Uy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===i){e=Pn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return By(e),t===null&&jh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Lh(r,i)?o=null:s!==null&&Lh(r,s)&&(e.flags|=32),h0(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&jh(e),null;case 13:return f0(t,e,n);case 4:return af(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$i(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),Rg(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(Ia,r._currentValue),r._currentValue=o,s!==null)if(Yt(s.value,o)){if(s.children===i.children&&!vt.current){e=Pn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Bh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oi(e,n),i=bt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Bt(r,e.pendingProps),i=Bt(r.type,i),Ng(t,e,r,i,n);case 15:return u0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Bt(r,i),ta(t,e),e.tag=1,yt(r)?(t=!0,Ea(e)):t=!1,Oi(e,n),o0(e,r,i),$h(e,r,i,n),Hh(null,e,r,!0,t,n);case 19:return p0(t,e,n);case 22:return c0(t,e,n)}throw Error(F(156,e.tag))};function A0(t,e){return ry(t,e)}function vT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(t,e,n,r){return new vT(t,e,n,r)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yT(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zd)return 11;if(t===$d)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=xt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ia(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pi:return $r(n.children,i,s,e);case Bd:o=8,i|=8;break;case dh:return t=xt(12,n,e,i|2),t.elementType=dh,t.lanes=s,t;case fh:return t=xt(13,n,e,i),t.elementType=fh,t.lanes=s,t;case ph:return t=xt(19,n,e,i),t.elementType=ph,t.lanes=s,t;case Bv:return wu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Fv:o=10;break e;case jv:o=9;break e;case zd:o=11;break e;case $d:o=14;break e;case $n:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=xt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=xt(7,t,r,e),t.lanes=n,t}function wu(t,e,n,r){return t=xt(22,t,r,e),t.elementType=Bv,t.lanes=n,t.stateNode={isHidden:!1},t}function Vc(t,e,n){return t=xt(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=xt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ic(0),this.expirationTimes=Ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ic(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function If(t,e,n,r,i,s,o,a,u){return t=new wT(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},lf(s),t}function ET(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x0(t){if(!t)return gr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(yt(n))return xy(t,n,e)}return e}function O0(t,e,n,r,i,s,o,a,u){return t=If(n,r,!0,t,i,s,o,a,u),t.context=x0(null),n=t.current,r=lt(),i=ar(n),s=Cn(r,i),s.callback=e??null,or(n,s,i),t.current.lanes=i,$o(t,i,r),wt(t,r),t}function Eu(t,e,n,r){var i=e.current,s=lt(),o=ar(i);return n=x0(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=or(i,e,o),t!==null&&(Kt(t,i,o,s),Jl(t,i,o)),o}function La(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Tf(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function ST(){return null}var D0=typeof reportError=="function"?reportError:function(t){console.error(t)};function kf(t){this._internalRoot=t}Su.prototype.render=kf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Eu(t,e,null,null)};Su.prototype.unmount=kf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;qr(function(){Eu(null,t,null,null)}),e[Rn]=null}};function Su(t){this._internalRoot=t}Su.prototype.unstable_scheduleHydration=function(t){if(t){var e=cy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wn.length&&e!==0&&e<Wn[n].priority;n++);Wn.splice(n,0,t),n===0&&dy(t)}};function Rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function CT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=La(o);s.call(h)}}var o=O0(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[Rn]=o.current,_o(t.nodeType===8?t.parentNode:t),qr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=La(u);a.call(h)}}var u=If(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=u,t[Rn]=u.current,_o(t.nodeType===8?t.parentNode:t),qr(function(){Eu(e,u,n,r)}),u}function Iu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=La(o);a.call(u)}}Eu(e,o,t,i)}else o=CT(n,e,t,i,r);return La(o)}ay=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(Hd(e,n|1),wt(e,Ne()),!(J&6)&&(Hi=Ne()+500,Ir()))}break;case 13:qr(function(){var r=Nn(t,1);if(r!==null){var i=lt();Kt(r,t,1,i)}}),Tf(t,1)}};Gd=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=lt();Kt(e,t,134217728,n)}Tf(t,134217728)}};uy=function(t){if(t.tag===13){var e=ar(t),n=Nn(t,e);if(n!==null){var r=lt();Kt(n,t,e,r)}Tf(t,e)}};cy=function(){return re};hy=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};Ih=function(t,e,n){switch(e){case"input":if(_h(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pu(r);if(!i)throw Error(F(90));$v(r),_h(r,i)}}}break;case"textarea":Wv(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};Xv=wf;Jv=qr;var IT={usingClientEntryPoint:!1,Events:[Wo,vi,pu,Yv,Qv,wf]},xs={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},TT={bundleType:xs.bundleType,version:xs.version,rendererPackageName:xs.rendererPackageName,rendererConfig:xs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ty(t),t===null?null:t.stateNode},findFiberByHostInstance:xs.findFiberByHostInstance||ST,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{cu=jl.inject(TT),rn=jl}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=IT;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rf(e))throw Error(F(200));return ET(t,e,null,n)};Tt.createRoot=function(t,e){if(!Rf(t))throw Error(F(299));var n=!1,r="",i=D0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=If(t,1,!1,null,null,n,!1,r,i),t[Rn]=e.current,_o(t.nodeType===8?t.parentNode:t),new kf(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=ty(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return qr(t)};Tt.hydrate=function(t,e,n){if(!Cu(e))throw Error(F(200));return Iu(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!Rf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=D0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=O0(e,null,t,1,n??null,i,!1,s,o),t[Rn]=e.current,_o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Su(e)};Tt.render=function(t,e,n){if(!Cu(e))throw Error(F(200));return Iu(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Cu(t))throw Error(F(40));return t._reactRootContainer?(qr(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Tt.unstable_batchedUpdates=wf;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Iu(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(t){console.error(t)}}L0(),Lv.exports=Tt;var kT=Lv.exports,b0,$g=kT;b0=$g.createRoot,$g.hydrateRoot;/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ko.apply(this,arguments)}var Zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zn||(Zn={}));const Vg="popstate";function RT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return rd("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ba(i)}return PT(e,n,null,t)}function Pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function M0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NT(){return Math.random().toString(36).substr(2,8)}function Wg(t,e){return{usr:t.state,key:t.key,idx:e}}function rd(t,e,n,r){return n===void 0&&(n=null),ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?rs(e):e,{state:n,key:e&&e.key||r||NT()})}function ba(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function rs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function PT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Zn.Pop,u=null,h=p();h==null&&(h=0,o.replaceState(ko({},o.state,{idx:h}),""));function p(){return(o.state||{idx:null}).idx}function f(){a=Zn.Pop;let L=p(),C=L==null?null:L-h;h=L,u&&u({action:a,location:A.location,delta:C})}function m(L,C){a=Zn.Push;let y=rd(A.location,L,C);h=p()+1;let I=Wg(y,h),O=A.createHref(y);try{o.pushState(I,"",O)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;i.location.assign(O)}s&&u&&u({action:a,location:A.location,delta:1})}function k(L,C){a=Zn.Replace;let y=rd(A.location,L,C);h=p();let I=Wg(y,h),O=A.createHref(y);o.replaceState(I,"",O),s&&u&&u({action:a,location:A.location,delta:0})}function R(L){let C=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof L=="string"?L:ba(L);return y=y.replace(/ $/,"%20"),Pe(C,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,C)}let A={get action(){return a},get location(){return t(i,o)},listen(L){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Vg,f),u=L,()=>{i.removeEventListener(Vg,f),u=null}},createHref(L){return e(i,L)},createURL:R,encodeLocation(L){let C=R(L);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:m,replace:k,go(L){return o.go(L)}};return A}var Hg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Hg||(Hg={}));function AT(t,e,n){return n===void 0&&(n="/"),xT(t,e,n,!1)}function xT(t,e,n,r){let i=typeof e=="string"?rs(e):e,s=Nf(i.pathname||"/",n);if(s==null)return null;let o=U0(t);OT(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let h=VT(s);a=zT(o[u],h,r)}return a}function U0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Pe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=cr([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(Pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),U0(s.children,e,p,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:jT(h,s.index),routesMeta:p})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of F0(s.path))i(s,o,u)}),e}function F0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=F0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function OT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:BT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const DT=/^:[\w-]+$/,LT=3,bT=2,MT=1,UT=10,FT=-2,Gg=t=>t==="*";function jT(t,e){let n=t.split("/"),r=n.length;return n.some(Gg)&&(r+=FT),e&&(r+=bT),n.filter(i=>!Gg(i)).reduce((i,s)=>i+(DT.test(s)?LT:s===""?MT:UT),r)}function BT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function zT(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],h=a===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",f=Kg({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},p),m=u.route;if(!f&&h&&n&&!r[r.length-1].route.index&&(f=Kg({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:cr([s,f.pathname]),pathnameBase:KT(cr([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=cr([s,f.pathnameBase]))}return o}function Kg(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=$T(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,p,f)=>{let{paramName:m,isOptional:k}=p;if(m==="*"){let A=a[f]||"";o=s.slice(0,s.length-A.length).replace(/(.)\/+$/,"$1")}const R=a[f];return k&&!R?h[m]=void 0:h[m]=(R||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function $T(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),M0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function VT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return M0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function WT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?rs(t):t;return{pathname:n?n.startsWith("/")?n:HT(n,e):e,search:qT(r),hash:YT(i)}}function HT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function GT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Pf(t,e){let n=GT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Af(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=rs(t):(i=ko({},t),Pe(!i.pathname||!i.pathname.includes("?"),Hc("?","pathname","search",i)),Pe(!i.pathname||!i.pathname.includes("#"),Hc("#","pathname","hash",i)),Pe(!i.search||!i.search.includes("#"),Hc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let u=WT(i,a),h=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||p)&&(u.pathname+="/"),u}const cr=t=>t.join("/").replace(/\/\/+/g,"/"),KT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),qT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function QT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const j0=["post","put","patch","delete"];new Set(j0);const XT=["get",...j0];new Set(XT);/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ro(){return Ro=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ro.apply(this,arguments)}const xf=b.createContext(null),JT=b.createContext(null),Tr=b.createContext(null),Tu=b.createContext(null),bn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),B0=b.createContext(null);function ZT(t,e){let{relative:n}=e===void 0?{}:e;is()||Pe(!1);let{basename:r,navigator:i}=b.useContext(Tr),{hash:s,pathname:o,search:a}=V0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:cr([r,o])),i.createHref({pathname:u,search:a,hash:s})}function is(){return b.useContext(Tu)!=null}function Go(){return is()||Pe(!1),b.useContext(Tu).location}function z0(t){b.useContext(Tr).static||b.useLayoutEffect(t)}function ku(){let{isDataRoute:t}=b.useContext(bn);return t?p1():e1()}function e1(){is()||Pe(!1);let t=b.useContext(xf),{basename:e,future:n,navigator:r}=b.useContext(Tr),{matches:i}=b.useContext(bn),{pathname:s}=Go(),o=JSON.stringify(Pf(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return z0(()=>{a.current=!0}),b.useCallback(function(h,p){if(p===void 0&&(p={}),!a.current)return;if(typeof h=="number"){r.go(h);return}let f=Af(h,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:cr([e,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[e,r,o,s,t])}const $0=b.createContext(null);function t1(){return b.useContext($0)}function n1(t){let e=b.useContext(bn).outlet;return e&&b.createElement($0.Provider,{value:t},e)}function V0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Tr),{matches:i}=b.useContext(bn),{pathname:s}=Go(),o=JSON.stringify(Pf(i,r.v7_relativeSplatPath));return b.useMemo(()=>Af(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function r1(t,e){return i1(t,e)}function i1(t,e,n,r){is()||Pe(!1);let{navigator:i}=b.useContext(Tr),{matches:s}=b.useContext(bn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=Go(),p;if(e){var f;let L=typeof e=="string"?rs(e):e;u==="/"||(f=L.pathname)!=null&&f.startsWith(u)||Pe(!1),p=L}else p=h;let m=p.pathname||"/",k=m;if(u!=="/"){let L=u.replace(/^\//,"").split("/");k="/"+m.replace(/^\//,"").split("/").slice(L.length).join("/")}let R=AT(t,{pathname:k}),A=u1(R&&R.map(L=>Object.assign({},L,{params:Object.assign({},a,L.params),pathname:cr([u,i.encodeLocation?i.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?u:cr([u,i.encodeLocation?i.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),s,n,r);return e&&A?b.createElement(Tu.Provider,{value:{location:Ro({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Zn.Pop}},A):A}function s1(){let t=f1(),e=QT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const o1=b.createElement(s1,null);class l1 extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(bn.Provider,{value:this.props.routeContext},b.createElement(B0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a1(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(xf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(bn.Provider,{value:e},r)}function u1(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||Pe(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let f=o[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(h=p),f.route.id){let{loaderData:m,errors:k}=n,R=f.route.loader&&m[f.route.id]===void 0&&(!k||k[f.route.id]===void 0);if(f.route.lazy||R){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,f,m)=>{let k,R=!1,A=null,L=null;n&&(k=a&&f.route.id?a[f.route.id]:void 0,A=f.route.errorElement||o1,u&&(h<0&&m===0?(R=!0,L=null):h===m&&(R=!0,L=f.route.hydrateFallbackElement||null)));let C=e.concat(o.slice(0,m+1)),y=()=>{let I;return k?I=A:R?I=L:f.route.Component?I=b.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=p,b.createElement(a1,{match:f,routeContext:{outlet:p,matches:C,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?b.createElement(l1,{location:n.location,revalidation:n.revalidation,component:A,error:k,children:y(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):y()},null)}var W0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(W0||{}),Ma=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ma||{});function c1(t){let e=b.useContext(xf);return e||Pe(!1),e}function h1(t){let e=b.useContext(JT);return e||Pe(!1),e}function d1(t){let e=b.useContext(bn);return e||Pe(!1),e}function H0(t){let e=d1(),n=e.matches[e.matches.length-1];return n.route.id||Pe(!1),n.route.id}function f1(){var t;let e=b.useContext(B0),n=h1(Ma.UseRouteError),r=H0(Ma.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function p1(){let{router:t}=c1(W0.UseNavigateStable),e=H0(Ma.UseNavigateStable),n=b.useRef(!1);return z0(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ro({fromRouteId:e},s)))},[t,e])}function qg(t){let{to:e,replace:n,state:r,relative:i}=t;is()||Pe(!1);let{future:s,static:o}=b.useContext(Tr),{matches:a}=b.useContext(bn),{pathname:u}=Go(),h=ku(),p=Af(e,Pf(a,s.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(p);return b.useEffect(()=>h(JSON.parse(f),{replace:n,state:r,relative:i}),[h,f,i,n,r]),null}function m1(t){return n1(t.context)}function Jt(t){Pe(!1)}function g1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:s,static:o=!1,future:a}=t;is()&&Pe(!1);let u=e.replace(/^\/*/,"/"),h=b.useMemo(()=>({basename:u,navigator:s,static:o,future:Ro({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=rs(r));let{pathname:p="/",search:f="",hash:m="",state:k=null,key:R="default"}=r,A=b.useMemo(()=>{let L=Nf(p,u);return L==null?null:{location:{pathname:L,search:f,hash:m,state:k,key:R},navigationType:i}},[u,p,f,m,k,R,i]);return A==null?null:b.createElement(Tr.Provider,{value:h},b.createElement(Tu.Provider,{children:n,value:A}))}function _1(t){let{children:e,location:n}=t;return r1(id(e),n)}new Promise(()=>{});function id(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,id(r.props.children,s));return}r.type!==Jt&&Pe(!1),!r.props.index||!r.props.children||Pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=id(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sd(){return sd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},sd.apply(this,arguments)}function v1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function y1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function w1(t,e){return t.button===0&&(!e||e==="_self")&&!y1(t)}const E1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],S1="6";try{window.__reactRouterVersion=S1}catch{}const C1="startTransition",Yg=mC[C1];function I1(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=RT({window:i,v5Compat:!0}));let o=s.current,[a,u]=b.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},p=b.useCallback(f=>{h&&Yg?Yg(()=>u(f)):u(f)},[u,h]);return b.useLayoutEffect(()=>o.listen(p),[o,p]),b.createElement(g1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const T1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",k1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Gc=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:h,preventScrollReset:p,unstable_viewTransition:f}=e,m=v1(e,E1),{basename:k}=b.useContext(Tr),R,A=!1;if(typeof h=="string"&&k1.test(h)&&(R=h,T1))try{let I=new URL(window.location.href),O=h.startsWith("//")?new URL(I.protocol+h):new URL(h),M=Nf(O.pathname,k);O.origin===I.origin&&M!=null?h=M+O.search+O.hash:A=!0}catch{}let L=ZT(h,{relative:i}),C=R1(h,{replace:o,state:a,target:u,preventScrollReset:p,relative:i,unstable_viewTransition:f});function y(I){r&&r(I),I.defaultPrevented||C(I)}return b.createElement("a",sd({},m,{href:R||L,onClick:A||s?r:y,ref:n,target:u}))});var Qg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Qg||(Qg={}));var Xg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Xg||(Xg={}));function R1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=ku(),h=Go(),p=V0(t,{relative:o});return b.useCallback(f=>{if(w1(f,n)){f.preventDefault();let m=r!==void 0?r:ba(h)===ba(p);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[h,u,p,r,i,n,t,s,o,a])}var Jg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=function(t,e){if(!t)throw ss(e)},ss=function(t){return new Error("Firebase Database ("+G0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},N1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|h>>6,k=h&63;u||(k=64,o||(m=64)),r.push(n[p],n[f],n[m],n[k])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(K0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):N1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||f==null)throw new P1;const m=s<<2|a>>4;if(r.push(m),h!==64){const k=a<<4&240|h>>2;if(r.push(k),f!==64){const R=h<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class P1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const q0=function(t){const e=K0(t);return Of.encodeByteArray(e,!0)},Ua=function(t){return q0(t).replace(/\./g,"")},Fa=function(t){try{return Of.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){return Y0(void 0,t)}function Y0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!x1(n)||(t[n]=Y0(t[n],e[n]));return t}function x1(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=()=>O1().__FIREBASE_DEFAULTS__,L1=()=>{if(typeof process>"u"||typeof Jg>"u")return;const t=Jg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},b1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fa(t[1]);return e&&JSON.parse(e)},Df=()=>{try{return D1()||L1()||b1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Q0=t=>{var e,n;return(n=(e=Df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lf=t=>{const e=Q0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},X0=()=>{var t;return(t=Df())===null||t===void 0?void 0:t.config},J0=t=>{var e;return(e=Df())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ua(JSON.stringify(n)),Ua(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function M1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function U1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Z0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function F1(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ew(){return G0.NODE_ADMIN===!0}function j1(){try{return typeof indexedDB=="object"}catch{return!1}}function B1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=z1,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qo.prototype.create)}}class qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?$1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new an(i,a,r)}}function $1(t,e){return t.replace(V1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const V1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=No(Fa(s[0])||""),n=No(Fa(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},W1=function(t){const e=tw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},H1=function(t){const e=tw(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function od(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ja(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zg(s)&&Zg(o)){if(!Ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const m=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(m<<1|m>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,p;for(let f=0;f<80;f++){f<40?f<20?(h=a^s&(o^a),p=1518500249):(h=s^o^a,p=1859775393):f<60?(h=s&o|a&(s|o),p=2400959708):(h=s^o^a,p=3395469782);const m=(i<<5|i>>>27)+h+u+p+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=m}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function K1(t,e){const n=new q1(t,e);return n.subscribe.bind(n)}class q1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kc),i.error===void 0&&(i.error=Kc),i.complete===void 0&&(i.complete=Kc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}function Ru(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,j(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ko;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z1(e))try{this.getOrInitializeService({instanceIdentifier:Lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lr){return this.instances.has(e)}getOptions(e=Lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Lr){return this.component?this.component.multipleInstances?e:Lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(t){return t===Lr?void 0:t}function Z1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const tk={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},nk=te.INFO,rk={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},ik=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pu{constructor(e){this.name=e,this._logLevel=nk,this._logHandler=ik,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const sk=(t,e)=>e.some(n=>t instanceof n);let e_,t_;function ok(){return e_||(e_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lk(){return t_||(t_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const nw=new WeakMap,ld=new WeakMap,rw=new WeakMap,qc=new WeakMap,Uf=new WeakMap;function ak(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(hr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&nw.set(n,t)}).catch(()=>{}),Uf.set(e,t),e}function uk(t){if(ld.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ld.set(t,e)}let ad={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ld.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return hr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ck(t){ad=t(ad)}function hk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yc(this),e,...n);return rw.set(r,e.sort?e.sort():[e]),hr(r)}:lk().includes(t)?function(...e){return t.apply(Yc(this),e),hr(nw.get(this))}:function(...e){return hr(t.apply(Yc(this),e))}}function dk(t){return typeof t=="function"?hk(t):(t instanceof IDBTransaction&&uk(t),sk(t,ok())?new Proxy(t,ad):t)}function hr(t){if(t instanceof IDBRequest)return ak(t);if(qc.has(t))return qc.get(t);const e=dk(t);return e!==t&&(qc.set(t,e),Uf.set(e,t)),e}const Yc=t=>Uf.get(t);function fk(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=hr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(hr(o.result),u.oldVersion,u.newVersion,hr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const pk=["get","getKey","getAll","getAllKeys","count"],mk=["put","add","delete","clear"],Qc=new Map;function n_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mk.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pk.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return Qc.set(e,s),s}ck(t=>({...t,get:(e,n,r)=>n_(e,n)||t.get(e,n,r),has:(e,n)=>!!n_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_k(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _k(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ud="@firebase/app",r_="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new Pu("@firebase/app"),vk="@firebase/app-compat",yk="@firebase/analytics-compat",wk="@firebase/analytics",Ek="@firebase/app-check-compat",Sk="@firebase/app-check",Ck="@firebase/auth",Ik="@firebase/auth-compat",Tk="@firebase/database",kk="@firebase/data-connect",Rk="@firebase/database-compat",Nk="@firebase/functions",Pk="@firebase/functions-compat",Ak="@firebase/installations",xk="@firebase/installations-compat",Ok="@firebase/messaging",Dk="@firebase/messaging-compat",Lk="@firebase/performance",bk="@firebase/performance-compat",Mk="@firebase/remote-config",Uk="@firebase/remote-config-compat",Fk="@firebase/storage",jk="@firebase/storage-compat",Bk="@firebase/firestore",zk="@firebase/vertexai-preview",$k="@firebase/firestore-compat",Vk="firebase",Wk="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="[DEFAULT]",Hk={[ud]:"fire-core",[vk]:"fire-core-compat",[wk]:"fire-analytics",[yk]:"fire-analytics-compat",[Sk]:"fire-app-check",[Ek]:"fire-app-check-compat",[Ck]:"fire-auth",[Ik]:"fire-auth-compat",[Tk]:"fire-rtdb",[kk]:"fire-data-connect",[Rk]:"fire-rtdb-compat",[Nk]:"fire-fn",[Pk]:"fire-fn-compat",[Ak]:"fire-iid",[xk]:"fire-iid-compat",[Ok]:"fire-fcm",[Dk]:"fire-fcm-compat",[Lk]:"fire-perf",[bk]:"fire-perf-compat",[Mk]:"fire-rc",[Uk]:"fire-rc-compat",[Fk]:"fire-gcs",[jk]:"fire-gcs-compat",[Bk]:"fire-fst",[$k]:"fire-fst-compat",[zk]:"fire-vertex","fire-js":"fire-js",[Vk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map,Gk=new Map,hd=new Map;function i_(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _r(t){const e=t.name;if(hd.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;hd.set(e,t);for(const n of za.values())i_(n,t);for(const n of Gk.values())i_(n,t);return!0}function Yo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},dr=new qo("app","Firebase",Kk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qk{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw dr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=Wk;function iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:cd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw dr.create("bad-app-name",{appName:String(i)});if(n||(n=X0()),!n)throw dr.create("no-options");const s=za.get(i);if(s){if(Ba(n,s.options)&&Ba(r,s.config))return s;throw dr.create("duplicate-app",{appName:i})}const o=new ek(i);for(const u of hd.values())o.addComponent(u);const a=new qk(n,r,o);return za.set(i,a),a}function Au(t=cd){const e=za.get(t);if(!e&&t===cd&&X0())return iw();if(!e)throw dr.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let i=(r=Hk[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(a.join(" "));return}_r(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk="firebase-heartbeat-database",Qk=1,Po="firebase-heartbeat-store";let Xc=null;function sw(){return Xc||(Xc=fk(Yk,Qk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Po)}catch(n){console.warn(n)}}}}).catch(t=>{throw dr.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function Xk(t){try{const n=(await sw()).transaction(Po),r=await n.objectStore(Po).get(ow(t));return await n.done,r}catch(e){if(e instanceof an)xn.warn(e.message);else{const n=dr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function s_(t,e){try{const r=(await sw()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,ow(t)),await r.done}catch(n){if(n instanceof an)xn.warn(n.message);else{const r=dr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function ow(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=1024,Zk=30*24*60*60*1e3;class eR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new nR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=o_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Zk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=o_(),{heartbeatsToSend:r,unsentEntries:i}=tR(this._heartbeatsCache.heartbeats),s=Ua(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return xn.warn(n),""}}}function o_(){return new Date().toISOString().substring(0,10)}function tR(t,e=Jk){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),l_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),l_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class nR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return j1()?B1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Xk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return s_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function l_(t){return Ua(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t){_r(new An("platform-logger",e=>new gk(e),"PRIVATE")),_r(new An("heartbeat",e=>new eR(e),"PRIVATE")),Lt(ud,r_,t),Lt(ud,r_,"esm2017"),Lt("fire-js","")}rR("");function Ff(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function lw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iR=lw,aw=new qo("auth","Firebase",lw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=new Pu("@firebase/auth");function sR(t,...e){$a.logLevel<=te.WARN&&$a.warn(`Auth (${kr}): ${t}`,...e)}function sa(t,...e){$a.logLevel<=te.ERROR&&$a.error(`Auth (${kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,...e){throw jf(t,...e)}function on(t,...e){return jf(t,...e)}function uw(t,e,n){const r=Object.assign(Object.assign({},iR()),{[e]:n});return new qo("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return uw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return aw.create(t,...e)}function H(t,e,...n){if(!t)throw jf(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sa(e),new Error(e)}function On(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oR(){return a_()==="http:"||a_()==="https:"}function a_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oR()||U1()||"connection"in navigator)?navigator.onLine:!0}function aR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=Mf()||Z0()}get(){return lR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR=new Qo(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nr(t,e,n,r,i={}){return hw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=os(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return M1()||(h.referrerPolicy="no-referrer"),cw.fetch()(dw(t,t.config.apiHost,n,a),h)})}async function hw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},uR),e);try{const i=new dR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Bl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Bl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Bl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw uw(t,p,h);Qt(t,p)}}catch(i){if(i instanceof an)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function Xo(t,e,n,r,i={}){const s=await Nr(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function dw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bf(t.config,i):`${t.config.apiScheme}://${i}`}function hR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),cR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Bl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function u_(t){return t!==void 0&&t.enterprise!==void 0}class fR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pR(t,e){return Nr(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e){return Nr(t,"POST","/v1/accounts:delete",e)}async function fw(t,e){return Nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gR(t,e=!1){const n=be(t),r=await n.getIdToken(e),i=zf(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(Jc(i.auth_time)),issuedAtTime:Js(Jc(i.iat)),expirationTime:Js(Jc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function zf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sa("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fa(n);return i?JSON.parse(i):(sa("Failed to decode base64 JWT payload"),null)}catch(i){return sa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function c_(t){const e=zf(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ao(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&_R(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _R({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Va(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ao(t,fw(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?pw(s.providerUserInfo):[],a=wR(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),p=u?h:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new fd(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,f)}async function yR(t){const e=be(t);await Va(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function pw(t){return t.map(e=>{var{providerId:n}=e,r=Ff(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ER(t,e){const n=await hw(t,{},async()=>{const r=os({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=dw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function SR(t,e){return Nr(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):c_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=c_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ER(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Li;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ff(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new fd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ao(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gR(this,e)}reload(){return yR(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Va(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Ao(this,mR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,h,p;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,k=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:I,emailVerified:O,isAnonymous:M,providerData:U,stsTokenManager:w}=n;H(I&&w,e,"internal-error");const _=Li.fromJSON(this.name,w);H(typeof I=="string",e,"internal-error"),zn(f,e.name),zn(m,e.name),H(typeof O=="boolean",e,"internal-error"),H(typeof M=="boolean",e,"internal-error"),zn(k,e.name),zn(R,e.name),zn(A,e.name),zn(L,e.name),zn(C,e.name),zn(y,e.name);const v=new wn({uid:I,auth:e,email:m,emailVerified:O,displayName:f,isAnonymous:M,photoURL:R,phoneNumber:k,tenantId:A,stsTokenManager:_,createdAt:C,lastLoginAt:y});return U&&Array.isArray(U)&&(v.providerData=U.map(E=>Object.assign({},E))),L&&(v._redirectEventId=L),v}static async _fromIdTokenResponse(e,n,r=!1){const i=new Li;i.updateFromServerResponse(n);const s=new wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Va(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?pw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Li;a.updateFromIdToken(r);const u=new wn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new fd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;function En(t){On(t instanceof Function,"Expected a class definition");let e=h_.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,h_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mw.type="NONE";const d_=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t,e,n){return`firebase:${t}:${e}:${n}`}class bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=oa(this.userKey,i.apiKey,s),this.fullPersistenceKey=oa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bi(En(d_),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||En(d_);const o=oa(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const p=await h._get(o);if(p){const f=wn._fromJSON(e,p);h!==s&&(a=f),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new bi(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(Sw(e))return"Webos";if(_w(e))return"Safari";if((e.includes("chrome/")||vw(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gw(t=ut()){return/firefox\//i.test(t)}function _w(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function vw(t=ut()){return/crios\//i.test(t)}function yw(t=ut()){return/iemobile/i.test(t)}function ww(t=ut()){return/android/i.test(t)}function Ew(t=ut()){return/blackberry/i.test(t)}function Sw(t=ut()){return/webos/i.test(t)}function $f(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function CR(t=ut()){var e;return $f(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IR(){return F1()&&document.documentMode===10}function Cw(t=ut()){return $f(t)||ww(t)||Sw(t)||Ew(t)||/windows phone/i.test(t)||yw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(t,e=[]){let n;switch(t){case"Browser":n=f_(ut());break;case"Worker":n=`${f_(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kR(t,e={}){return Nr(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=6;class NR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:RR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new p_(this),this.idTokenSubscription=new p_(this),this.beforeStateQueue=new TR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=aw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await fw(this,{idToken:e}),r=await wn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Va(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=aR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(In(this));const n=e?be(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kR(this),n=new NR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await SR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Iw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&sR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ri(t){return be(t)}class p_{constructor(e){this.auth=e,this.observer=null,this.addObserver=K1(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AR(t){xu=t}function Tw(t){return xu.loadJS(t)}function xR(){return xu.recaptchaEnterpriseScript}function OR(){return xu.gapiScript}function DR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LR="recaptcha-enterprise",bR="NO_RECAPTCHA";class MR{constructor(e){this.type=LR,this.auth=ri(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new fR(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;u_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(bR)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&u_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=xR();u.length!==0&&(u+=a),Tw(u).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function m_(t,e,n,r=!1){const i=new MR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function pd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await m_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await m_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t,e){const n=Yo(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ba(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function FR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jR(t,e,n){const r=ri(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kw(e),{host:o,port:a}=BR(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),zR()}function kw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BR(t){const e=kw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:g_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:g_(o)}}}function g_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function $R(t,e){return Nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VR(t,e){return Xo(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WR(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function HR(t,e){return Xo(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo extends Vf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new xo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new xo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,n,"signInWithPassword",VR);case"emailLink":return WR(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return pd(e,r,"signUpPassword",$R);case"emailLink":return HR(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t,e){return Xo(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR="http://localhost";class Yr extends Vf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ff(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:GR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=os(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function qR(t){const e=zs($s(t)).link,n=e?zs($s(e)).deep_link_id:null,r=zs($s(t)).deep_link_id;return(r?zs($s(r)).link:null)||r||n||e||t}class Wf{constructor(e){var n,r,i,s,o,a;const u=zs($s(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,f=KR((i=u.mode)!==null&&i!==void 0?i:null);H(h&&p&&f,"argument-error"),this.apiKey=h,this.operation=f,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=qR(e);try{return new Wf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(){this.providerId=ls.PROVIDER_ID}static credential(e,n){return xo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wf.parseLink(n);return H(r,"argument-error"),xo._fromEmailAndCode(e,r.code,r.tenantId)}}ls.PROVIDER_ID="password";ls.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ls.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Rw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Jo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Jo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Jo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Jo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YR(t,e){return Xo(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await wn._fromIdTokenResponse(e,r,i),o=__(r);return new Qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=__(r);return new Qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function __(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends an{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wa(e,n,r,i)}}function Nw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wa._fromErrorAndOperation(t,s,e,r):s})}async function QR(t,e,n=!1){const r=await Ao(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Qr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XR(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await Ao(t,Nw(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=zf(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),Qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(t,e,n=!1){if(tn(t.app))return Promise.reject(In(t));const r="signIn",i=await Nw(t,r,e),s=await Qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JR(t,e){return Pw(ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t){const e=ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function ZR(t,e,n){if(tn(t.app))return Promise.reject(In(t));const r=ri(t),o=await pd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YR).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Aw(t),u}),a=await Qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function v_(t,e,n){return tn(t.app)?Promise.reject(In(t)):JR(be(t),ls.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Aw(t),r})}function eN(t,e,n,r){return be(t).onIdTokenChanged(e,n,r)}function tN(t,e,n){return be(t).beforeAuthStateChanged(e,n)}const Ha="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ha,"1"),this.storage.removeItem(Ha),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN=1e3,rN=10;class Ow extends xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);IR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ow.type="LOCAL";const iN=Ow;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw extends xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Dw.type="SESSION";const Lw=Dw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ou(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),u=await sN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ou.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const h=Hf("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function lN(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function aN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cN(){return bw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="firebaseLocalStorageDb",hN=1,Ga="firebaseLocalStorage",Uw="fbase_key";class Zo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Du(t,e){return t.transaction([Ga],e?"readwrite":"readonly").objectStore(Ga)}function dN(){const t=indexedDB.deleteDatabase(Mw);return new Zo(t).toPromise()}function md(){const t=indexedDB.open(Mw,hN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ga,{keyPath:Uw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ga)?e(r):(r.close(),await dN(),e(await md()))})})}async function y_(t,e,n){const r=Du(t,!0).put({[Uw]:e,value:n});return new Zo(r).toPromise()}async function fN(t,e){const n=Du(t,!1).get(e),r=await new Zo(n).toPromise();return r===void 0?null:r.value}function w_(t,e){const n=Du(t,!0).delete(e);return new Zo(n).toPromise()}const pN=800,mN=3;class Fw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await md(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ou._getInstance(cN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aN(),!this.activeServiceWorker)return;this.sender=new oN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await md();return await y_(e,Ha,"1"),await w_(e,Ha),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>y_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>w_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Du(i,!1).getAll();return new Zo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fw.type="LOCAL";const gN=Fw;new Qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t,e){return e?En(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends Vf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vN(t){return Pw(t.auth,new Gf(t),t.bypassAuthState)}function yN(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),XR(n,new Gf(t),t.bypassAuthState)}async function wN(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),QR(n,new Gf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vN;case"linkViaPopup":case"linkViaRedirect":return wN;case"reauthViaPopup":case"reauthViaRedirect":return yN;default:Qt(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=new Qo(2e3,1e4);class Ti extends jw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ti.currentPopupAction&&Ti.currentPopupAction.cancel(),Ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Hf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EN.get())};e()}}Ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN="pendingRedirect",la=new Map;class CN extends jw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=la.get(this.auth._key());if(!e){try{const r=await IN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}la.set(this.auth._key(),e)}return this.bypassAuthState||la.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IN(t,e){const n=RN(e),r=kN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function TN(t,e){la.set(t._key(),e)}function kN(t){return En(t._redirectPersistence)}function RN(t){return oa(SN,t.config.apiKey,t.name)}async function NN(t,e,n=!1){if(tn(t.app))return Promise.reject(In(t));const r=ri(t),i=_N(r,e),o=await new CN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=10*60*1e3;class AN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PN&&this.cachedEventUids.clear(),this.cachedEventUids.has(E_(e))}saveEventToCache(e){this.cachedEventUids.add(E_(e)),this.lastProcessedEventTime=Date.now()}}function E_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e={}){return Nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,LN=/^https?/;async function bN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ON(t);for(const n of e)try{if(MN(n))return}catch{}Qt(t,"unauthorized-domain")}function MN(t){const e=dd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!LN.test(n))return!1;if(DN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new Qo(3e4,6e4);function S_(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function FN(t){return new Promise((e,n)=>{var r,i,s;function o(){S_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S_(),n(on(t,"network-request-failed"))},timeout:UN.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=DR("iframefcb");return ln()[a]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},Tw(`${OR()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw aa=null,e})}let aa=null;function jN(t){return aa=aa||FN(t),aa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=new Qo(5e3,15e3),zN="__/auth/iframe",$N="emulator/auth/iframe",VN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HN(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bf(e,$N):`https://${t.config.authDomain}/${zN}`,r={apiKey:e.apiKey,appName:t.name,v:kr},i=WN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${os(r).slice(1)}`}async function GN(t){const e=await jN(t),n=ln().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:HN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:VN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},BN.get());function u(){ln().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qN=500,YN=600,QN="_blank",XN="http://localhost";class C_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JN(t,e,n,r=qN,i=YN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},KN),{width:r.toString(),height:i.toString(),top:s,left:o}),h=ut().toLowerCase();n&&(a=vw(h)?QN:n),gw(h)&&(e=e||XN,u.scrollbars="yes");const p=Object.entries(u).reduce((m,[k,R])=>`${m}${k}=${R},`,"");if(CR(h)&&a!=="_self")return ZN(e||"",a),new C_(null);const f=window.open(e||"",a,p);H(f,t,"popup-blocked");try{f.focus()}catch{}return new C_(f)}function ZN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="__/auth/handler",tP="emulator/auth/handler",nP=encodeURIComponent("fac");async function I_(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:i};if(e instanceof Rw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",od(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,f]of Object.entries({}))o[p]=f}if(e instanceof Jo){const p=e.getScopes().filter(f=>f!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const u=await t._getAppCheckToken(),h=u?`#${nP}=${encodeURIComponent(u)}`:"";return`${rP(t)}?${os(a).slice(1)}${h}`}function rP({config:t}){return t.emulator?Bf(t,tP):`https://${t.authDomain}/${eP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc="webStorageSupport";class iP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lw,this._completeRedirectFn=NN,this._overrideRedirectResult=TN}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await I_(e,n,r,dd(),i);return JN(e,o,Hf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await I_(e,n,r,dd(),i);return lN(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GN(e),r=new AN(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zc];o!==void 0&&n(!!o),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cw()||_w()||$f()}}const sP=iP;var T_="@firebase/auth",k_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function aP(t){_r(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Iw(t)},h=new PR(r,i,s,u);return FR(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_r(new An("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(r=>new oP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(T_,k_,lP(t)),Lt(T_,k_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=5*60,cP=J0("authIdTokenMaxAge")||uP;let R_=null;const hP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cP)return;const i=n==null?void 0:n.token;R_!==i&&(R_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ki(t=Au()){const e=Yo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=UR(t,{popupRedirectResolver:sP,persistence:[gN,iN,Lw]}),r=J0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hP(s.toString());tN(n,o,()=>o(n.currentUser)),eN(n,a=>o(a))}}const i=Q0("auth");return i&&jR(n,`http://${i}`),n}function dP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}AR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});aP("Browser");var N_={};const P_="@firebase/database",A_="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zw="";function fP(t){zw=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:No(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return un(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $w=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new pP(e)}}catch{}return new mP},jr=$w("localStorage"),gP=$w("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new Pu("@firebase/database"),_P=function(){let t=1;return function(){return t++}}(),Vw=function(t){const e=Q1(t),n=new G1;n.update(e);const r=n.digest();return Of.encodeByteArray(r)},el=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=el.apply(null,r):typeof r=="object"?e+=De(r):e+=r,e+=" "}return e};let Zs=null,x_=!0;const vP=function(t,e){j(!e,"Can't turn on custom loggers persistently."),Ui.logLevel=te.VERBOSE,Zs=Ui.log.bind(Ui)},Ve=function(...t){if(x_===!0&&(x_=!1,Zs===null&&gP.get("logging_enabled")===!0&&vP()),Zs){const e=el.apply(null,t);Zs(e)}},tl=function(t){return function(...e){Ve(t,...e)}},gd=function(...t){const e="FIREBASE INTERNAL ERROR: "+el(...t);Ui.error(e)},Dn=function(...t){const e=`FIREBASE FATAL ERROR: ${el(...t)}`;throw Ui.error(e),new Error(e)},at=function(...t){const e="FIREBASE WARNING: "+el(...t);Ui.warn(e)},yP=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&at("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Kf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},wP=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},qi="[MIN_NAME]",Xr="[MAX_NAME]",ii=function(t,e){if(t===e)return 0;if(t===qi||e===Xr)return-1;if(e===qi||t===Xr)return 1;{const n=O_(t),r=O_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},EP=function(t,e){return t===e?0:t<e?-1:1},Os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},qf=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=De(e[r]),n+=":",n+=qf(t[e[r]]);return n+="}",n},Ww=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ge(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Hw=function(t){j(!Kf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const p=h.join("");let f="";for(u=0;u<64;u+=8){let m=parseInt(p.substr(u,8),2).toString(16);m.length===1&&(m="0"+m),f=f+m}return f.toLowerCase()},SP=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CP=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IP(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const TP=new RegExp("^-?(0*)\\d{1,10}$"),kP=-2147483648,RP=2147483647,O_=function(t){if(TP.test(t)){const e=Number(t);if(e>=kP&&e<=RP)return e}return null},as=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw at("Exception was thrown by user callback.",n),e},Math.floor(0))}},NP=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},eo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){at(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ve("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',at(e)}}class ua{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ua.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="5",Gw="v",Kw="s",qw="r",Yw="f",Qw=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xw="ls",Jw="p",_d="ac",Zw="websocket",eE="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=jr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&jr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xP(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function nE(t,e,n){j(typeof e=="string","typeof type must == string"),j(typeof n=="object","typeof params must == object");let r;if(e===Zw)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===eE)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xP(t)&&(n.ns=t.namespace);const i=[];return Ge(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OP{constructor(){this.counters_={}}incrementCounter(e,n=1){un(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return A1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh={},th={};function Qf(t){const e=t.toString();return eh[e]||(eh[e]=new OP),eh[e]}function DP(t,e){const n=t.toString();return th[n]||(th[n]=e()),th[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&as(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_="start",bP="close",MP="pLPCommand",UP="pRTLPCB",rE="id",iE="pw",sE="ser",FP="cb",jP="seg",BP="ts",zP="d",$P="dframe",oE=1870,lE=30,VP=oE-lE,WP=25e3,HP=3e4;class ki{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tl(e),this.stats_=Qf(n),this.urlFn=u=>(this.appCheckToken&&(u[_d]=this.appCheckToken),nE(n,eE,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new LP(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(HP)),wP(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xf((...s)=>{const[o,a,u,h,p]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===D_)this.id=a,this.password=u;else if(o===bP)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[D_]="t",r[sE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[FP]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Gw]=Yf,this.transportSessionId&&(r[Kw]=this.transportSessionId),this.lastSessionId&&(r[Xw]=this.lastSessionId),this.applicationId&&(r[Jw]=this.applicationId),this.appCheckToken&&(r[_d]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qw.test(location.hostname)&&(r[qw]=Yw);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ki.forceAllow_=!0}static forceDisallow(){ki.forceDisallow_=!0}static isAvailable(){return ki.forceAllow_?!0:!ki.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SP()&&!CP()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=q0(n),i=Ww(r,VP);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[$P]="t",r[rE]=e,r[iE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=_P(),window[MP+this.uniqueCallbackIdentifier]=e,window[UP+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ve("frame writing exception"),a.stack&&Ve(a.stack),Ve(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ve("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rE]=this.myID,e[iE]=this.myPW,e[sE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lE+r.length<=oE;){const o=this.pendingSegs.shift();r=r+"&"+jP+i+"="+o.seg+"&"+BP+i+"="+o.ts+"&"+zP+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(WP)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ve("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=16384,KP=45e3;let Ka=null;typeof MozWebSocket<"u"?Ka=MozWebSocket:typeof WebSocket<"u"&&(Ka=WebSocket);class Vt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tl(this.connId),this.stats_=Qf(n),this.connURL=Vt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Gw]=Yf,typeof location<"u"&&location.hostname&&Qw.test(location.hostname)&&(o[qw]=Yw),n&&(o[Kw]=n),r&&(o[Xw]=r),i&&(o[_d]=i),s&&(o[Jw]=s),nE(e,Zw,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,jr.set("previous_websocket_failure",!0);try{let r;ew(),this.mySock=new Ka(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ka!==null&&!Vt.forceDisallow_}static previouslyFailed(){return jr.isInMemoryStorage||jr.get("previous_websocket_failure")===!0}markConnectionHealthy(){jr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=No(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(j(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ww(n,GP);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(KP))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ki,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Vt&&Vt.isAvailable();let r=n&&!Vt.previouslyFailed();if(e.webSocketOnly&&(n||at("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Vt];else{const i=this.transports_=[];for(const s of Oo.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Oo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Oo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP=6e4,YP=5e3,QP=10*1024,XP=100*1024,nh="t",L_="d",JP="s",b_="r",ZP="e",M_="o",U_="a",F_="n",j_="p",eA="h";class tA{constructor(e,n,r,i,s,o,a,u,h,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tl("c:"+this.id+":"),this.transportManager_=new Oo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=eo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XP?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QP?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nh in e){const n=e[nh];n===U_?this.upgradeIfSecondaryHealthy_():n===b_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===M_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:j_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:U_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:F_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Os(nh,e);if(L_ in e){const r=e[L_];if(n===eA){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===F_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JP?this.onConnectionShutdown_(r):n===b_?this.onReset_(r):n===ZP?gd("Server Error: "+r):n===M_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Yf!==r&&at("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),eo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qP))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):eo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YP))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:j_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(jr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e){this.allowedEvents_=e,this.listeners_={},j(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){j(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends uE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new qa}getInitialEvent(e){return j(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=32,z_=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new se("")}function K(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function vr(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function Jf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function nA(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Do(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function cE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Se(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function Y(t){return t.pieceNum_>=t.pieces_.length}function st(t,e){const n=K(t),r=K(e);if(n===null)return e;if(n===r)return st(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function rA(t,e){const n=Do(t,0),r=Do(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=ii(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Zf(t,e){if(vr(t)!==vr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(vr(t)>vr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class iA{constructor(e,n){this.errorPrefix_=n,this.parts_=Do(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Nu(this.parts_[r]);hE(this)}}function sA(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Nu(e),hE(t)}function oA(t){const e=t.parts_.pop();t.byteLength_-=Nu(e),t.parts_.length>0&&(t.byteLength_-=1)}function hE(t){if(t.byteLength_>z_)throw new Error(t.errorPrefix_+"has a key path longer than "+z_+" bytes ("+t.byteLength_+").");if(t.parts_.length>B_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+B_+") or object contains a cycle "+br(t))}function br(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep extends uE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ep}getInitialEvent(e){return j(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=1e3,lA=60*5*1e3,$_=30*1e3,aA=1.3,uA=3e4,cA="server_kill",V_=3;class Tn extends aE{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Tn.nextPersistentConnectionId_++,this.log_=tl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ds,this.maxReconnectDelay_=lA,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!ew())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ep.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&qa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(De(s)),j(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Ko,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),j(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,h=a.s;Tn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&un(e,"w")){const r=Gi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();at(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||H1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=$_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=W1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),j(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):gd("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){j(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>uA&&(this.reconnectDelay_=Ds),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aA)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Tn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(f){j(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:h};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,m]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?Ve("getToken() completed but was canceled"):(Ve("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=m&&m.token,a=new tA(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,k=>{at(k+" ("+this.repoInfo_.toString()+")"),this.interrupt(cA)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&at(f),u())}}}interrupt(e){Ve("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ve("Resuming connection for reason: "+e),delete this.interruptReasons_[e],od(this.interruptReasons_)&&(this.reconnectDelay_=Ds,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>qf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ve("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=V_&&(this.reconnectDelay_=$_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ve("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=V_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+zw.replace(/\./g,"-")]=1,Mf()?e["framework.cordova"]=1:Z0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=qa.getInstance().currentlyOnline();return od(this.interruptReasons_)&&e}}Tn.nextPersistentConnectionId_=0;Tn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new q(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new q(qi,e),i=new q(qi,n);return this.compare(r,i)!==0}minPost(){return q.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zl;class dE extends Lu{static get __EMPTY_NODE(){return zl}static set __EMPTY_NODE(e){zl=e}compare(e,n){return ii(e.name,n.name)}isDefinedOn(e){throw ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return q.MIN}maxPost(){return new q(Xr,zl)}makePost(e,n){return j(typeof e=="string","KeyIndex indexValue must always be a string."),new q(e,zl)}toString(){return".key"}}const Fi=new dE;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Fe.RED,this.left=i??_t.EMPTY_NODE,this.right=s??_t.EMPTY_NODE}copy(e,n,r,i,s){return new Fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class hA{copy(e,n,r,i,s){return this}insert(e,n,r){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $l(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new $l(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new $l(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new hA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t,e){return ii(t.name,e.name)}function tp(t,e){return ii(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vd;function fA(t){vd=t}const fE=function(t){return typeof t=="number"?"number:"+Hw(t):"string:"+t},pE=function(t){if(t.isLeafNode()){const e=t.val();j(typeof e=="string"||typeof e=="number"||typeof e=="object"&&un(e,".sv"),"Priority must be a string or number.")}else j(t===vd||t.isEmpty(),"priority of unexpected type.");j(t===vd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W_;class Me{constructor(e,n=Me.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,j(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pE(this.priorityNode_)}static set __childrenNodeConstructor(e){W_=e}static get __childrenNodeConstructor(){return W_}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Me(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Y(e)?this:K(e)===".priority"?this.priorityNode_:Me.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Me.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=K(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(j(r!==".priority"||vr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Me.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Hw(this.value_):e+=this.value_,this.lazyHash_=Vw(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Me.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Me.__childrenNodeConstructor?-1:(j(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Me.VALUE_TYPE_ORDER.indexOf(n),s=Me.VALUE_TYPE_ORDER.indexOf(r);return j(i>=0,"Unknown leaf type: "+n),j(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Me.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mE,gE;function pA(t){mE=t}function mA(t){gE=t}class gA extends Lu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return q.MIN}maxPost(){return new q(Xr,new Me("[PRIORITY-POST]",gE))}makePost(e,n){const r=mE(e);return new q(n,new Me("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ce=new gA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=Math.log(2);class vA{constructor(e){const n=s=>parseInt(Math.log(s)/_A,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ya=function(t,e,n,r){t.sort(e);const i=function(u,h){const p=h-u;let f,m;if(p===0)return null;if(p===1)return f=t[u],m=n?n(f):f,new Fe(m,f.node,Fe.BLACK,null,null);{const k=parseInt(p/2,10)+u,R=i(u,k),A=i(k+1,h);return f=t[k],m=n?n(f):f,new Fe(m,f.node,Fe.BLACK,R,A)}},s=function(u){let h=null,p=null,f=t.length;const m=function(R,A){const L=f-R,C=f;f-=R;const y=i(L+1,C),I=t[L],O=n?n(I):I;k(new Fe(O,I.node,A,null,y))},k=function(R){h?(h.left=R,h=R):(p=R,h=R)};for(let R=0;R<u.count;++R){const A=u.nextBitIsOne(),L=Math.pow(2,u.count-(R+1));A?m(L,Fe.BLACK):(m(L,Fe.BLACK),m(L,Fe.RED))}return p},o=new vA(t.length),a=s(o);return new _t(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rh;const di={};class Sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return j(di&&Ce,"ChildrenNode.ts has not been loaded"),rh=rh||new Sn({".priority":di},{".priority":Ce}),rh}get(e){const n=Gi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return un(this.indexSet_,e.toString())}addIndex(e,n){j(e!==Fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(q.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ya(r,e.getCompare()):a=di;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const p=Object.assign({},this.indexes_);return p[u]=a,new Sn(p,h)}addToIndexes(e,n){const r=ja(this.indexes_,(i,s)=>{const o=Gi(this.indexSet_,s);if(j(o,"Missing index implementation for "+s),i===di)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(q.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),Ya(a,o.getCompare())}else return di;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new q(e.name,a))),u.insert(e,e.node)}});return new Sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=ja(this.indexes_,i=>{if(i===di)return i;{const s=n.get(e.name);return s?i.remove(new q(e.name,s)):i}});return new Sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ls;class W{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&pE(this.priorityNode_),this.children_.isEmpty()&&j(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ls||(Ls=new W(new _t(tp),null,Sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ls}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ls:n}}getChild(e){const n=K(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(j(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new q(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ls:this.priorityNode_;return new W(i,o,s)}}updateChild(e,n){const r=K(e);if(r===null)return n;{j(K(e)!==".priority"||vr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ce,(o,a)=>{n[o]=a.val(e),r++,s&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fE(this.getPriority().val())+":"),this.forEachChild(Ce,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Vw(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new q(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new q(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new q(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,q.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nl?-1:0}withIndex(e){if(e===Fi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ce),i=n.getIterator(Ce);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fi?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yA extends W{constructor(){super(new _t(tp),W.EMPTY_NODE,Sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const nl=new yA;Object.defineProperties(q,{MIN:{value:new q(qi,W.EMPTY_NODE)},MAX:{value:new q(Xr,nl)}});dE.__EMPTY_NODE=W.EMPTY_NODE;Me.__childrenNodeConstructor=W;fA(nl);mA(nl);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=!0;function Oe(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),j(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Me(n,Oe(e))}if(!(t instanceof Array)&&wA){const n=[];let r=!1;if(Ge(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=Oe(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new q(o,u)))}}),n.length===0)return W.EMPTY_NODE;const s=Ya(n,dA,o=>o.name,tp);if(r){const o=Ya(n,Ce.getCompare());return new W(s,Oe(e),new Sn({".priority":o},{".priority":Ce}))}else return new W(s,Oe(e),Sn.Default)}else{let n=W.EMPTY_NODE;return Ge(t,(r,i)=>{if(un(t,r)&&r.substring(0,1)!=="."){const s=Oe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Oe(e))}}pA(Oe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA extends Lu{constructor(e){super(),this.indexPath_=e,j(!Y(e)&&K(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}makePost(e,n){const r=Oe(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,r);return new q(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,nl);return new q(Xr,e)}toString(){return Do(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA extends Lu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ii(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return q.MIN}maxPost(){return q.MAX}makePost(e,n){const r=Oe(e);return new q(n,r)}toString(){return".value"}}const CA=new SA;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _E(t){return{type:"value",snapshotNode:t}}function Yi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Lo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function IA(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){j(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Lo(n,a)):j(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Yi(n,r)):o.trackChildChange(bo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(Ce,(i,s)=>{n.hasChild(i)||r.trackChildChange(Lo(i,s))}),n.isLeafNode()||n.forEachChild(Ce,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(bo(i,s,o))}else r.trackChildChange(Yi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this.indexedFilter_=new np(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Mo.getStartPost_(e),this.endPost_=Mo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new q(n,r))||(r=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const s=this;return n.forEachChild(Ce,(o,a)=>{s.matches(new q(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Mo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new q(n,r))||(r=W.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(m,k)=>f(k,m)}else o=this.index_.getCompare();const a=e;j(a.numChildren()===this.limit_,"");const u=new q(n,r),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),p=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let m=i.getChildAfterChild(this.index_,h,this.reverse_);for(;m!=null&&(m.name===n||a.hasChild(m.name));)m=i.getChildAfterChild(this.index_,m,this.reverse_);const k=m==null?1:o(m,u);if(p&&!r.isEmpty()&&k>=0)return s!=null&&s.trackChildChange(bo(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Lo(n,f));const A=a.updateImmediateChild(n,W.EMPTY_NODE);return m!=null&&this.rangedFilter_.matches(m)?(s!=null&&s.trackChildChange(Yi(m.name,m.node)),A.updateImmediateChild(m.name,m.node)):A}}else return r.isEmpty()?e:p&&o(h,u)>=0?(s!=null&&(s.trackChildChange(Lo(h.name,h.node)),s.trackChildChange(Yi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(h.name,W.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ce}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return j(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return j(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:qi}hasEnd(){return this.endSet_}getIndexEndValue(){return j(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return j(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return j(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ce}copy(){const e=new rp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function kA(t){return t.loadsAllData()?new np(t.getIndex()):t.hasLimit()?new TA(t):new Mo(t)}function H_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ce?n="$priority":t.index_===CA?n="$value":t.index_===Fi?n="$key":(j(t.index_ instanceof EA,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=De(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+De(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=De(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+De(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function G_(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ce&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends aE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=tl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(j(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Qa.getListenId_(e,r),a={};this.listens_[o]=a;const u=H_(e._queryParams);this.restRequest_(s+".json",u,(h,p)=>{let f=p;if(h===404&&(f=null,h=null),h===null&&this.onDataUpdate_(s,f,!1,r),Gi(this.listens_,o)===a){let m;h?h===401?m="permission_denied":m="rest_error:"+h:m="ok",i(m,null)}})}unlisten(e,n){const r=Qa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=H_(e._queryParams),r=e._path.toString(),i=new Ko;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+os(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=No(a.responseText)}catch{at("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&at("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(){return{value:null,children:new Map}}function vE(t,e,n){if(Y(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=K(e);t.children.has(r)||t.children.set(r,Xa());const i=t.children.get(r);e=ae(e),vE(i,e,n)}}function yd(t,e,n){t.value!==null?n(e,t.value):NA(t,(r,i)=>{const s=new se(e.toString()+"/"+r);yd(i,s,n)})}function NA(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ge(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=10*1e3,AA=30*1e3,xA=5*60*1e3;class OA{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PA(e);const r=K_+(AA-K_)*Math.random();eo(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ge(e,(i,s)=>{s>0&&un(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),eo(this.reportStats_.bind(this),Math.floor(Math.random()*2*xA))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Wt||(Wt={}));function ip(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function sp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function op(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Wt.ACK_USER_WRITE,this.source=ip()}operationForChild(e){if(Y(this.path)){if(this.affectedTree.value!=null)return j(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Ja(ee(),n,this.revert)}}else return j(K(this.path)===e,"operationForChild called for unrelated child."),new Ja(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.source=e,this.path=n,this.type=Wt.LISTEN_COMPLETE}operationForChild(e){return Y(this.path)?new Uo(this.source,ee()):new Uo(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Wt.OVERWRITE}operationForChild(e){return Y(this.path)?new Jr(this.source,ee(),this.snap.getImmediateChild(e)):new Jr(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Wt.MERGE}operationForChild(e){if(Y(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Jr(this.source,ee(),n.value):new Qi(this.source,ee(),n)}else return j(K(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Qi(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Y(e))return this.isFullyInitialized()&&!this.filtered_;const n=K(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function LA(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(IA(o.childName,o.snapshotNode))}),bs(t,i,"child_removed",e,r,n),bs(t,i,"child_added",e,r,n),bs(t,i,"child_moved",s,r,n),bs(t,i,"child_changed",e,r,n),bs(t,i,"value",e,r,n),i}function bs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>MA(t,a,u)),o.forEach(a=>{const u=bA(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function bA(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MA(t,e,n){if(e.childName==null||n.childName==null)throw ss("Should only compare child_ events.");const r=new q(e.childName,e.snapshotNode),i=new q(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t,e){return{eventCache:t,serverCache:e}}function to(t,e,n,r){return bu(new yr(e,n,r),t.serverCache)}function yE(t,e,n,r){return bu(t.eventCache,new yr(e,n,r))}function Za(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Zr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ih;const UA=()=>(ih||(ih=new _t(EP)),ih);class le{constructor(e,n=UA()){this.value=e,this.children=n}static fromObject(e){let n=new le(null);return Ge(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(Y(e))return null;{const r=K(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ae(e),n);return s!=null?{path:Se(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Y(e))return this;{const n=K(e),r=this.children.get(n);return r!==null?r.subtree(ae(e)):new le(null)}}set(e,n){if(Y(e))return new le(n,this.children);{const r=K(e),s=(this.children.get(r)||new le(null)).set(ae(e),n),o=this.children.insert(r,s);return new le(this.value,o)}}remove(e){if(Y(e))return this.children.isEmpty()?new le(null):new le(null,this.children);{const n=K(e),r=this.children.get(n);if(r){const i=r.remove(ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new le(null):new le(this.value,s)}else return this}}get(e){if(Y(e))return this.value;{const n=K(e),r=this.children.get(n);return r?r.get(ae(e)):null}}setTree(e,n){if(Y(e))return n;{const r=K(e),s=(this.children.get(r)||new le(null)).setTree(ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new le(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Se(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(Y(e))return null;{const s=K(e),o=this.children.get(s);return o?o.findOnPath_(ae(e),Se(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(Y(e))return this;{this.value&&r(n,this.value);const i=K(e),s=this.children.get(i);return s?s.foreachOnPath_(ae(e),Se(n,i),r):new le(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Se(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.writeTree_=e}static empty(){return new qt(new le(null))}}function no(t,e,n){if(Y(e))return new qt(new le(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=st(i,e);return s=s.updateChild(o,n),new qt(t.writeTree_.set(i,s))}else{const i=new le(n),s=t.writeTree_.setTree(e,i);return new qt(s)}}}function wd(t,e,n){let r=t;return Ge(n,(i,s)=>{r=no(r,Se(e,i),s)}),r}function q_(t,e){if(Y(e))return qt.empty();{const n=t.writeTree_.setTree(e,new le(null));return new qt(n)}}function Ed(t,e){return si(t,e)!=null}function si(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(st(n.path,e)):null}function Y_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ce,(r,i)=>{e.push(new q(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new q(r,i.value))}),e}function fr(t,e){if(Y(e))return t;{const n=si(t,e);return n!=null?new qt(new le(n)):new qt(t.writeTree_.subtree(e))}}function Sd(t){return t.writeTree_.isEmpty()}function Xi(t,e){return wE(ee(),t.writeTree_,e)}function wE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(j(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=wE(Se(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Se(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(t,e){return IE(e,t)}function FA(t,e,n,r,i){j(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=no(t.visibleWrites,e,n)),t.lastWriteId=r}function jA(t,e,n,r){j(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=wd(t.visibleWrites,e,n),t.lastWriteId=r}function BA(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function zA(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);j(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$A(a,r.path)?i=!1:Ot(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return VA(t),!0;if(r.snap)t.visibleWrites=q_(t.visibleWrites,r.path);else{const a=r.children;Ge(a,u=>{t.visibleWrites=q_(t.visibleWrites,Se(r.path,u))})}return!0}else return!1}function $A(t,e){if(t.snap)return Ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ot(Se(t.path,n),e))return!0;return!1}function VA(t){t.visibleWrites=EE(t.allWrites,WA,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function WA(t){return t.visible}function EE(t,e,n){let r=qt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Ot(n,o)?(a=st(n,o),r=no(r,a,s.snap)):Ot(o,n)&&(a=st(o,n),r=no(r,ee(),s.snap.getChild(a)));else if(s.children){if(Ot(n,o))a=st(n,o),r=wd(r,a,s.children);else if(Ot(o,n))if(a=st(o,n),Y(a))r=wd(r,ee(),s.children);else{const u=Gi(s.children,K(a));if(u){const h=u.getChild(ae(a));r=no(r,ee(),h)}}}else throw ss("WriteRecord should have .snap or .children")}}return r}function SE(t,e,n,r,i){if(!r&&!i){const s=si(t.visibleWrites,e);if(s!=null)return s;{const o=fr(t.visibleWrites,e);if(Sd(o))return n;if(n==null&&!Ed(o,ee()))return null;{const a=n||W.EMPTY_NODE;return Xi(o,a)}}}else{const s=fr(t.visibleWrites,e);if(!i&&Sd(s))return n;if(!i&&n==null&&!Ed(s,ee()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&(Ot(h.path,e)||Ot(e,h.path))},a=EE(t.allWrites,o,e),u=n||W.EMPTY_NODE;return Xi(a,u)}}}function HA(t,e,n){let r=W.EMPTY_NODE;const i=si(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ce,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=fr(t.visibleWrites,e);return n.forEachChild(Ce,(o,a)=>{const u=Xi(fr(s,new se(o)),a);r=r.updateImmediateChild(o,u)}),Y_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=fr(t.visibleWrites,e);return Y_(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function GA(t,e,n,r,i){j(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Se(e,n);if(Ed(t.visibleWrites,s))return null;{const o=fr(t.visibleWrites,s);return Sd(o)?i.getChild(n):Xi(o,i.getChild(n))}}function KA(t,e,n,r){const i=Se(e,n),s=si(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=fr(t.visibleWrites,i);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function qA(t,e){return si(t.visibleWrites,e)}function YA(t,e,n,r,i,s,o){let a;const u=fr(t.visibleWrites,e),h=si(u,ee());if(h!=null)a=h;else if(n!=null)a=Xi(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const p=[],f=o.getCompare(),m=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let k=m.getNext();for(;k&&p.length<i;)f(k,r)!==0&&p.push(k),k=m.getNext();return p}else return[]}function QA(){return{visibleWrites:qt.empty(),allWrites:[],lastWriteId:-1}}function eu(t,e,n,r){return SE(t.writeTree,t.treePath,e,n,r)}function lp(t,e){return HA(t.writeTree,t.treePath,e)}function Q_(t,e,n,r){return GA(t.writeTree,t.treePath,e,n,r)}function tu(t,e){return qA(t.writeTree,Se(t.treePath,e))}function XA(t,e,n,r,i,s){return YA(t.writeTree,t.treePath,e,n,r,i,s)}function ap(t,e,n){return KA(t.writeTree,t.treePath,e,n)}function CE(t,e){return IE(Se(t.treePath,e),t.writeTree)}function IE(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;j(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),j(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,bo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Lo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Yi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,bo(r,e.snapshotNode,i.oldSnap));else throw ss("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const TE=new ZA;class up{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ap(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zr(this.viewCache_),s=XA(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){return{filter:t}}function tx(t,e){j(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),j(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function nx(t,e,n,r,i){const s=new JA;let o,a;if(n.type===Wt.OVERWRITE){const h=n;h.source.fromUser?o=Cd(t,e,h.path,h.snap,r,i,s):(j(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!Y(h.path),o=nu(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===Wt.MERGE){const h=n;h.source.fromUser?o=ix(t,e,h.path,h.children,r,i,s):(j(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Id(t,e,h.path,h.children,r,i,a,s))}else if(n.type===Wt.ACK_USER_WRITE){const h=n;h.revert?o=lx(t,e,h.path,r,i,s):o=sx(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===Wt.LISTEN_COMPLETE)o=ox(t,e,n.path,r,s);else throw ss("Unknown operation type: "+n.type);const u=s.getChanges();return rx(e,o,u),{viewCache:o,changes:u}}function rx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Za(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(_E(Za(e)))}}function kE(t,e,n,r,i,s){const o=e.eventCache;if(tu(r,n)!=null)return e;{let a,u;if(Y(n))if(j(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Zr(e),p=h instanceof W?h:W.EMPTY_NODE,f=lp(r,p);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const h=eu(r,Zr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=K(n);if(h===".priority"){j(vr(n)===1,"Can't have a priority with additional path components");const p=o.getNode();u=e.serverCache.getNode();const f=Q_(r,n,p,u);f!=null?a=t.filter.updatePriority(p,f):a=o.getNode()}else{const p=ae(n);let f;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const m=Q_(r,n,o.getNode(),u);m!=null?f=o.getNode().getImmediateChild(h).updateChild(p,m):f=o.getNode().getImmediateChild(h)}else f=ap(r,h,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),h,f,p,i,s):a=o.getNode()}}return to(e,a,o.isFullyInitialized()||Y(n),t.filter.filtersNodes())}}function nu(t,e,n,r,i,s,o,a){const u=e.serverCache;let h;const p=o?t.filter:t.filter.getIndexedFilter();if(Y(n))h=p.updateFullNode(u.getNode(),r,null);else if(p.filtersNodes()&&!u.isFiltered()){const k=u.getNode().updateChild(n,r);h=p.updateFullNode(u.getNode(),k,null)}else{const k=K(n);if(!u.isCompleteForPath(n)&&vr(n)>1)return e;const R=ae(n),L=u.getNode().getImmediateChild(k).updateChild(R,r);k===".priority"?h=p.updatePriority(u.getNode(),L):h=p.updateChild(u.getNode(),k,L,R,TE,null)}const f=yE(e,h,u.isFullyInitialized()||Y(n),p.filtersNodes()),m=new up(i,f,s);return kE(t,f,n,i,m,a)}function Cd(t,e,n,r,i,s,o){const a=e.eventCache;let u,h;const p=new up(i,e,s);if(Y(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=to(e,h,!0,t.filter.filtersNodes());else{const f=K(n);if(f===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=to(e,h,a.isFullyInitialized(),a.isFiltered());else{const m=ae(n),k=a.getNode().getImmediateChild(f);let R;if(Y(m))R=r;else{const A=p.getCompleteChild(f);A!=null?Jf(m)===".priority"&&A.getChild(cE(m)).isEmpty()?R=A:R=A.updateChild(m,r):R=W.EMPTY_NODE}if(k.equals(R))u=e;else{const A=t.filter.updateChild(a.getNode(),f,R,m,p,o);u=to(e,A,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function X_(t,e){return t.eventCache.isCompleteForChild(e)}function ix(t,e,n,r,i,s,o){let a=e;return r.foreach((u,h)=>{const p=Se(n,u);X_(e,K(p))&&(a=Cd(t,a,p,h,i,s,o))}),r.foreach((u,h)=>{const p=Se(n,u);X_(e,K(p))||(a=Cd(t,a,p,h,i,s,o))}),a}function J_(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Id(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;Y(n)?h=r:h=new le(null).setTree(n,r);const p=e.serverCache.getNode();return h.children.inorderTraversal((f,m)=>{if(p.hasChild(f)){const k=e.serverCache.getNode().getImmediateChild(f),R=J_(t,k,m);u=nu(t,u,new se(f),R,i,s,o,a)}}),h.children.inorderTraversal((f,m)=>{const k=!e.serverCache.isCompleteForChild(f)&&m.value===null;if(!p.hasChild(f)&&!k){const R=e.serverCache.getNode().getImmediateChild(f),A=J_(t,R,m);u=nu(t,u,new se(f),A,i,s,o,a)}}),u}function sx(t,e,n,r,i,s,o){if(tu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(Y(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return nu(t,e,n,u.getNode().getChild(n),i,s,a,o);if(Y(n)){let h=new le(null);return u.getNode().forEachChild(Fi,(p,f)=>{h=h.set(new se(p),f)}),Id(t,e,n,h,i,s,a,o)}else return e}else{let h=new le(null);return r.foreach((p,f)=>{const m=Se(n,p);u.isCompleteForPath(m)&&(h=h.set(p,u.getNode().getChild(m)))}),Id(t,e,n,h,i,s,a,o)}}function ox(t,e,n,r,i){const s=e.serverCache,o=yE(e,s.getNode(),s.isFullyInitialized()||Y(n),s.isFiltered());return kE(t,o,n,r,TE,i)}function lx(t,e,n,r,i,s){let o;if(tu(r,n)!=null)return e;{const a=new up(r,e,i),u=e.eventCache.getNode();let h;if(Y(n)||K(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=eu(r,Zr(e));else{const f=e.serverCache.getNode();j(f instanceof W,"serverChildren would be complete if leaf node"),p=lp(r,f)}p=p,h=t.filter.updateFullNode(u,p,s)}else{const p=K(n);let f=ap(r,p,e.serverCache);f==null&&e.serverCache.isCompleteForChild(p)&&(f=u.getImmediateChild(p)),f!=null?h=t.filter.updateChild(u,p,f,ae(n),a,s):e.eventCache.getNode().hasChild(p)?h=t.filter.updateChild(u,p,W.EMPTY_NODE,ae(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=eu(r,Zr(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||tu(r,ee())!=null,to(e,h,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new np(r.getIndex()),s=kA(r);this.processor_=ex(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode(W.EMPTY_NODE,a.getNode(),null),p=new yr(u,o.isFullyInitialized(),i.filtersNodes()),f=new yr(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=bu(f,p),this.eventGenerator_=new DA(this.query_)}get query(){return this.query_}}function ux(t){return t.viewCache_.serverCache.getNode()}function cx(t){return Za(t.viewCache_)}function hx(t,e){const n=Zr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Y(e)&&!n.getImmediateChild(K(e)).isEmpty())?n.getChild(e):null}function Z_(t){return t.eventRegistrations_.length===0}function dx(t,e){t.eventRegistrations_.push(e)}function ev(t,e,n){const r=[];if(n){j(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function tv(t,e,n,r){e.type===Wt.MERGE&&e.source.queryId!==null&&(j(Zr(t.viewCache_),"We should always have a full cache before handling merges"),j(Za(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=nx(t.processor_,i,e,n,r);return tx(t.processor_,s.viewCache),j(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,RE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function fx(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ce,(s,o)=>{r.push(Yi(s,o))}),n.isFullyInitialized()&&r.push(_E(n.getNode())),RE(t,r,n.getNode(),e)}function RE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return LA(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;class NE{constructor(){this.views=new Map}}function px(t){j(!ru,"__referenceConstructor has already been defined"),ru=t}function mx(){return j(ru,"Reference.ts has not been loaded"),ru}function gx(t){return t.views.size===0}function cp(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return j(s!=null,"SyncTree gave us an op for an invalid query."),tv(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(tv(o,e,n,r));return s}}function PE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=eu(n,i?r:null),u=!1;a?u=!0:r instanceof W?(a=lp(n,r),u=!1):(a=W.EMPTY_NODE,u=!1);const h=bu(new yr(a,u,!1),new yr(r,i,!1));return new ax(e,h)}return o}function _x(t,e,n,r,i,s){const o=PE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),dx(o,n),fx(o,n)}function vx(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=wr(t);if(i==="default")for(const[u,h]of t.views.entries())o=o.concat(ev(h,n,r)),Z_(h)&&(t.views.delete(u),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=t.views.get(i);u&&(o=o.concat(ev(u,n,r)),Z_(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!wr(t)&&s.push(new(mx())(e._repo,e._path)),{removed:s,events:o}}function AE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function pr(t,e){let n=null;for(const r of t.views.values())n=n||hx(r,e);return n}function xE(t,e){if(e._queryParams.loadsAllData())return Uu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function OE(t,e){return xE(t,e)!=null}function wr(t){return Uu(t)!=null}function Uu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iu;function yx(t){j(!iu,"__referenceConstructor has already been defined"),iu=t}function wx(){return j(iu,"Reference.ts has not been loaded"),iu}let Ex=1;class nv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new le(null),this.pendingWriteTree_=QA(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function DE(t,e,n,r,i){return FA(t.pendingWriteTree_,e,n,r,i),i?us(t,new Jr(ip(),e,n)):[]}function Sx(t,e,n,r){jA(t.pendingWriteTree_,e,n,r);const i=le.fromObject(n);return us(t,new Qi(ip(),e,i))}function er(t,e,n=!1){const r=BA(t.pendingWriteTree_,e);if(zA(t.pendingWriteTree_,e)){let s=new le(null);return r.snap!=null?s=s.set(ee(),!0):Ge(r.children,o=>{s=s.set(new se(o),!0)}),us(t,new Ja(r.path,s,n))}else return[]}function rl(t,e,n){return us(t,new Jr(sp(),e,n))}function Cx(t,e,n){const r=le.fromObject(n);return us(t,new Qi(sp(),e,r))}function Ix(t,e){return us(t,new Uo(sp(),e))}function Tx(t,e,n){const r=dp(t,n);if(r){const i=fp(r),s=i.path,o=i.queryId,a=st(s,e),u=new Uo(op(o),a);return pp(t,s,u)}else return[]}function su(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||OE(o,e))){const u=vx(o,e,n,r);gx(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const h=u.removed;if(a=u.events,!i){const p=h.findIndex(m=>m._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(m,k)=>wr(k));if(p&&!f){const m=t.syncPointTree_.subtree(s);if(!m.isEmpty()){const k=Nx(m);for(let R=0;R<k.length;++R){const A=k[R],L=A.query,C=UE(t,A);t.listenProvider_.startListening(ro(L),Fo(t,L),C.hashFn,C.onComplete)}}}!f&&h.length>0&&!r&&(p?t.listenProvider_.stopListening(ro(e),null):h.forEach(m=>{const k=t.queryToTagMap.get(Fu(m));t.listenProvider_.stopListening(ro(m),k)}))}Px(t,h)}return a}function LE(t,e,n,r){const i=dp(t,r);if(i!=null){const s=fp(i),o=s.path,a=s.queryId,u=st(o,e),h=new Jr(op(a),u,n);return pp(t,o,h)}else return[]}function kx(t,e,n,r){const i=dp(t,r);if(i){const s=fp(i),o=s.path,a=s.queryId,u=st(o,e),h=le.fromObject(n),p=new Qi(op(a),u,h);return pp(t,o,p)}else return[]}function Td(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(m,k)=>{const R=st(m,i);s=s||pr(k,R),o=o||wr(k)});let a=t.syncPointTree_.get(i);a?(o=o||wr(a),s=s||pr(a,ee())):(a=new NE,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((k,R)=>{const A=pr(R,ee());A&&(s=s.updateImmediateChild(k,A))}));const h=OE(a,e);if(!h&&!e._queryParams.loadsAllData()){const m=Fu(e);j(!t.queryToTagMap.has(m),"View does not exist, but we have a tag");const k=Ax();t.queryToTagMap.set(m,k),t.tagToQueryMap.set(k,m)}const p=Mu(t.pendingWriteTree_,i);let f=_x(a,e,n,p,s,u);if(!h&&!o&&!r){const m=xE(a,e);f=f.concat(xx(t,e,m))}return f}function hp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=st(o,e),h=pr(a,u);if(h)return h});return SE(i,e,s,n,!0)}function Rx(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(h,p)=>{const f=st(h,n);r=r||pr(p,f)});let i=t.syncPointTree_.get(n);i?r=r||pr(i,ee()):(i=new NE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new yr(r,!0,!1):null,a=Mu(t.pendingWriteTree_,e._path),u=PE(i,e,a,s?o.getNode():W.EMPTY_NODE,s);return cx(u)}function us(t,e){return bE(e,t.syncPointTree_,null,Mu(t.pendingWriteTree_,ee()))}function bE(t,e,n,r){if(Y(t.path))return ME(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=pr(i,ee()));let s=[];const o=K(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,p=CE(r,o);s=s.concat(bE(a,u,h,p))}return i&&(s=s.concat(cp(i,t,r,n))),s}}function ME(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=pr(i,ee()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=CE(r,o),p=t.operationForChild(o);p&&(s=s.concat(ME(p,a,u,h)))}),i&&(s=s.concat(cp(i,t,r,n))),s}function UE(t,e){const n=e.query,r=Fo(t,n);return{hashFn:()=>(ux(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?Tx(t,n._path,r):Ix(t,n._path);{const s=IP(i,n);return su(t,n,null,s)}}}}function Fo(t,e){const n=Fu(e);return t.queryToTagMap.get(n)}function Fu(t){return t._path.toString()+"$"+t._queryIdentifier}function dp(t,e){return t.tagToQueryMap.get(e)}function fp(t){const e=t.indexOf("$");return j(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function pp(t,e,n){const r=t.syncPointTree_.get(e);j(r,"Missing sync point for query tag that we're tracking");const i=Mu(t.pendingWriteTree_,e);return cp(r,n,i,null)}function Nx(t){return t.fold((e,n,r)=>{if(n&&wr(n))return[Uu(n)];{let i=[];return n&&(i=AE(n)),Ge(r,(s,o)=>{i=i.concat(o)}),i}})}function ro(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(wx())(t._repo,t._path):t}function Px(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Fu(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Ax(){return Ex++}function xx(t,e,n){const r=e._path,i=Fo(t,e),s=UE(t,n),o=t.listenProvider_.startListening(ro(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)j(!wr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((h,p,f)=>{if(!Y(h)&&p&&wr(p))return[Uu(p).query];{let m=[];return p&&(m=m.concat(AE(p).map(k=>k.query))),Ge(f,(k,R)=>{m=m.concat(R)}),m}});for(let h=0;h<u.length;++h){const p=u[h];t.listenProvider_.stopListening(ro(p),Fo(t,p))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new mp(n)}node(){return this.node_}}class gp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Se(this.path_,e);return new gp(this.syncTree_,n)}node(){return hp(this.syncTree_,this.path_)}}const Ox=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},rv=function(t,e,n){if(!t||typeof t!="object")return t;if(j(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Dx(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Lx(t[".sv"],e);j(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Dx=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:j(!1,"Unexpected server value: "+t)}},Lx=function(t,e,n){t.hasOwnProperty("increment")||j(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&j(!1,"Unexpected increment value: "+r);const i=e.node();if(j(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},FE=function(t,e,n,r){return _p(e,new gp(n,t),r)},jE=function(t,e,n){return _p(t,new mp(e),n)};function _p(t,e,n){const r=t.getPriority().val(),i=rv(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=rv(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Me(a,Oe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Me(i))),o.forEachChild(Ce,(a,u)=>{const h=_p(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function yp(t,e){let n=e instanceof se?e:new se(e),r=t,i=K(n);for(;i!==null;){const s=Gi(r.node.children,i)||{children:{},childCount:0};r=new vp(i,r,s),n=ae(n),i=K(n)}return r}function cs(t){return t.node.value}function BE(t,e){t.node.value=e,kd(t)}function zE(t){return t.node.childCount>0}function bx(t){return cs(t)===void 0&&!zE(t)}function ju(t,e){Ge(t.node.children,(n,r)=>{e(new vp(n,t,r))})}function $E(t,e,n,r){n&&!r&&e(t),ju(t,i=>{$E(i,e,!0,r)}),n&&r&&e(t)}function Mx(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function il(t){return new se(t.parent===null?t.name:il(t.parent)+"/"+t.name)}function kd(t){t.parent!==null&&Ux(t.parent,t.name,t)}function Ux(t,e,n){const r=bx(n),i=un(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,kd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,kd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fx=/[\[\].#$\/\u0000-\u001F\u007F]/,jx=/[\[\].#$\u0000-\u001F\u007F]/,sh=10*1024*1024,wp=function(t){return typeof t=="string"&&t.length!==0&&!Fx.test(t)},VE=function(t){return typeof t=="string"&&t.length!==0&&!jx.test(t)},Bx=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),VE(t)},zx=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Kf(t)||t&&typeof t=="object"&&un(t,".sv")},$x=function(t,e,n,r){Bu(Ru(t,"value"),e,n)},Bu=function(t,e,n){const r=n instanceof se?new iA(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+br(r));if(typeof e=="function")throw new Error(t+"contains a function "+br(r)+" with contents = "+e.toString());if(Kf(e))throw new Error(t+"contains "+e.toString()+" "+br(r));if(typeof e=="string"&&e.length>sh/3&&Nu(e)>sh)throw new Error(t+"contains a string greater than "+sh+" utf8 bytes "+br(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ge(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!wp(o)))throw new Error(t+" contains an invalid key ("+o+") "+br(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);sA(r,o),Bu(t,a,r),oA(r)}),i&&s)throw new Error(t+' contains ".value" child '+br(r)+" in addition to actual children.")}},Vx=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Do(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!wp(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(rA);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Ot(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},Wx=function(t,e,n,r){const i=Ru(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ge(e,(o,a)=>{const u=new se(o);if(Bu(i,a,Se(n,u)),Jf(u)===".priority"&&!zx(a))throw new Error(i+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),Vx(i,s)},WE=function(t,e,n,r){if(!VE(n))throw new Error(Ru(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Hx=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),WE(t,e,n)},HE=function(t,e){if(K(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},Gx=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wp(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Bx(n))throw new Error(Ru(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zu(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Zf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function GE(t,e,n){zu(t,n),KE(t,r=>Zf(r,e))}function Ut(t,e,n){zu(t,n),KE(t,r=>Ot(r,e)||Ot(e,r))}function KE(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(qx(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function qx(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Zs&&Ve("event: "+n.toString()),as(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="repo_interrupt",Qx=25;class Xx{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Kx,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xa(),this.transactionQueueTree_=new vp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jx(t,e,n){if(t.stats_=Qf(t.repoInfo_),t.forceRestClient_||NP())t.server_=new Qa(t.repoInfo_,(r,i,s,o)=>{iv(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>sv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Tn(t.repoInfo_,e,(r,i,s,o)=>{iv(t,r,i,s,o)},r=>{sv(t,r)},r=>{eO(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=DP(t.repoInfo_,()=>new OA(t.stats_,t.server_)),t.infoData_=new RA,t.infoSyncTree_=new nv({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=rl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ep(t,"connected",!1),t.serverSyncTree_=new nv({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const h=o(a,u);Ut(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Zx(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function $u(t){return Ox({timestamp:Zx(t)})}function iv(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=ja(n,h=>Oe(h));o=kx(t.serverSyncTree_,s,u,i)}else{const u=Oe(n);o=LE(t.serverSyncTree_,s,u,i)}else if(r){const u=ja(n,h=>Oe(h));o=Cx(t.serverSyncTree_,s,u)}else{const u=Oe(n);o=rl(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Ji(t,s)),Ut(t.eventQueue_,a,o)}function sv(t,e){Ep(t,"connected",e),e===!1&&iO(t)}function eO(t,e){Ge(e,(n,r)=>{Ep(t,n,r)})}function Ep(t,e,n){const r=new se("/.info/"+e),i=Oe(n);t.infoData_.updateSnapshot(r,i);const s=rl(t.infoSyncTree_,r,i);Ut(t.eventQueue_,r,s)}function Sp(t){return t.nextWriteId_++}function tO(t,e,n){const r=Rx(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Oe(i).withIndex(e._queryParams.getIndex());Td(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=rl(t.serverSyncTree_,e._path,s);else{const a=Fo(t.serverSyncTree_,e);o=LE(t.serverSyncTree_,e._path,s,a)}return Ut(t.eventQueue_,e._path,o),su(t.serverSyncTree_,e,n,null,!0),s},i=>(sl(t,"get for query "+De(e)+" failed: "+i),Promise.reject(new Error(i))))}function nO(t,e,n,r,i){sl(t,"set",{path:e.toString(),value:n,priority:r});const s=$u(t),o=Oe(n,r),a=hp(t.serverSyncTree_,e),u=jE(o,a,s),h=Sp(t),p=DE(t.serverSyncTree_,e,u,h,!0);zu(t.eventQueue_,p),t.server_.put(e.toString(),o.val(!0),(m,k)=>{const R=m==="ok";R||at("set at "+e+" failed: "+m);const A=er(t.serverSyncTree_,h,!R);Ut(t.eventQueue_,e,A),Rd(t,i,m,k)});const f=Ip(t,e);Ji(t,f),Ut(t.eventQueue_,f,[])}function rO(t,e,n,r){sl(t,"update",{path:e.toString(),value:n});let i=!0;const s=$u(t),o={};if(Ge(n,(a,u)=>{i=!1,o[a]=FE(Se(e,a),Oe(u),t.serverSyncTree_,s)}),i)Ve("update() called with empty data.  Don't do anything."),Rd(t,r,"ok",void 0);else{const a=Sp(t),u=Sx(t.serverSyncTree_,e,o,a);zu(t.eventQueue_,u),t.server_.merge(e.toString(),n,(h,p)=>{const f=h==="ok";f||at("update at "+e+" failed: "+h);const m=er(t.serverSyncTree_,a,!f),k=m.length>0?Ji(t,e):e;Ut(t.eventQueue_,k,m),Rd(t,r,h,p)}),Ge(n,h=>{const p=Ip(t,Se(e,h));Ji(t,p)}),Ut(t.eventQueue_,e,[])}}function iO(t){sl(t,"onDisconnectEvents");const e=$u(t),n=Xa();yd(t.onDisconnect_,ee(),(i,s)=>{const o=FE(i,s,t.serverSyncTree_,e);vE(n,i,o)});let r=[];yd(n,ee(),(i,s)=>{r=r.concat(rl(t.serverSyncTree_,i,s));const o=Ip(t,i);Ji(t,o)}),t.onDisconnect_=Xa(),Ut(t.eventQueue_,ee(),r)}function sO(t,e,n){let r;K(e._path)===".info"?r=Td(t.infoSyncTree_,e,n):r=Td(t.serverSyncTree_,e,n),GE(t.eventQueue_,e._path,r)}function oO(t,e,n){let r;K(e._path)===".info"?r=su(t.infoSyncTree_,e,n):r=su(t.serverSyncTree_,e,n),GE(t.eventQueue_,e._path,r)}function lO(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Yx)}function sl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ve(n,...e)}function Rd(t,e,n,r){e&&as(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function qE(t,e,n){return hp(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function Cp(t,e=t.transactionQueueTree_){if(e||Vu(t,e),cs(e)){const n=QE(t,e);j(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&aO(t,il(e),n)}else zE(e)&&ju(e,n=>{Cp(t,n)})}function aO(t,e,n){const r=n.map(h=>h.currentWriteId),i=qE(t,e,r);let s=i;const o=i.hash();for(let h=0;h<n.length;h++){const p=n[h];j(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const f=st(e,p.path);s=s.updateChild(f,p.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{sl(t,"transaction put response",{path:u.toString(),status:h});let p=[];if(h==="ok"){const f=[];for(let m=0;m<n.length;m++)n[m].status=2,p=p.concat(er(t.serverSyncTree_,n[m].currentWriteId)),n[m].onComplete&&f.push(()=>n[m].onComplete(null,!0,n[m].currentOutputSnapshotResolved)),n[m].unwatcher();Vu(t,yp(t.transactionQueueTree_,e)),Cp(t,t.transactionQueueTree_),Ut(t.eventQueue_,e,p);for(let m=0;m<f.length;m++)as(f[m])}else{if(h==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{at("transaction at "+u.toString()+" failed: "+h);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=h}Ji(t,e)}},o)}function Ji(t,e){const n=YE(t,e),r=il(n),i=QE(t,n);return uO(t,i,r),r}function uO(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=st(n,u.path);let p=!1,f;if(j(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)p=!0,f=u.abortReason,i=i.concat(er(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Qx)p=!0,f="maxretry",i=i.concat(er(t.serverSyncTree_,u.currentWriteId,!0));else{const m=qE(t,u.path,o);u.currentInputSnapshot=m;const k=e[a].update(m.val());if(k!==void 0){Bu("transaction failed: Data returned ",k,u.path);let R=Oe(k);typeof k=="object"&&k!=null&&un(k,".priority")||(R=R.updatePriority(m.getPriority()));const L=u.currentWriteId,C=$u(t),y=jE(R,m,C);u.currentOutputSnapshotRaw=R,u.currentOutputSnapshotResolved=y,u.currentWriteId=Sp(t),o.splice(o.indexOf(L),1),i=i.concat(DE(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(er(t.serverSyncTree_,L,!0))}else p=!0,f="nodata",i=i.concat(er(t.serverSyncTree_,u.currentWriteId,!0))}Ut(t.eventQueue_,n,i),i=[],p&&(e[a].status=2,function(m){setTimeout(m,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Vu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)as(r[a]);Cp(t,t.transactionQueueTree_)}function YE(t,e){let n,r=t.transactionQueueTree_;for(n=K(e);n!==null&&cs(r)===void 0;)r=yp(r,n),e=ae(e),n=K(e);return r}function QE(t,e){const n=[];return XE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function XE(t,e,n){const r=cs(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ju(e,i=>{XE(t,i,n)})}function Vu(t,e){const n=cs(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,BE(e,n.length>0?n:void 0)}ju(e,r=>{Vu(t,r)})}function Ip(t,e){const n=il(YE(t,e)),r=yp(t.transactionQueueTree_,e);return Mx(r,i=>{oh(t,i)}),oh(t,r),$E(r,i=>{oh(t,i)}),n}function oh(t,e){const n=cs(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(j(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(j(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(er(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?BE(e,void 0):n.length=s+1,Ut(t.eventQueue_,il(e),i);for(let o=0;o<r.length;o++)as(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function hO(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):at(`Invalid query segment '${n}' in query '${t}'`)}return e}const ov=function(t,e){const n=dO(t),r=n.namespace;n.domain==="firebase.com"&&Dn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Dn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yP();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new tE(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},dO=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let p=t.indexOf("/");p===-1&&(p=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(p,f)),p<f&&(i=cO(t.substring(p,f)));const m=hO(t.substring(Math.min(t.length,f)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const k=e.slice(0,h);if(k.toLowerCase()==="localhost")n="localhost";else if(k.split(".").length<=2)n=k;else{const R=e.indexOf(".");r=e.substring(0,R).toLowerCase(),n=e.substring(R+1),s=r}"ns"in m&&(s=m.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fO{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class pO{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return j(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return Y(this._path)?null:Jf(this._path)}get ref(){return new Mn(this._repo,this._path)}get _queryIdentifier(){const e=G_(this._queryParams),n=qf(e);return n==="{}"?"default":n}get _queryObject(){return G_(this._queryParams)}isEqual(e){if(e=be(e),!(e instanceof Tp))return!1;const n=this._repo===e._repo,r=Zf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+nA(this._path)}}class Mn extends Tp{constructor(e,n){super(e,n,new rp,!1)}get parent(){const e=cE(this._path);return e===null?null:new Mn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class jo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Nd(this.ref,e);return new jo(this._node.getChild(n),r,Ce)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new jo(i,Nd(this.ref,r),Ce)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ee(t,e){return t=be(t),t._checkNotDeleted("ref"),e!==void 0?Nd(t._root,e):t._root}function Nd(t,e){return t=be(t),K(t._path)===null?Hx("child","path",e):WE("child","path",e),new Mn(t._repo,Se(t._path,e))}function mO(t){return HE("remove",t._path),tr(t,null)}function tr(t,e){t=be(t),HE("set",t._path),$x("set",e,t._path);const n=new Ko;return nO(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ca(t,e){Wx("update",e,t._path);const n=new Ko;return rO(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Bo(t){t=be(t);const e=new JE(()=>{}),n=new Wu(e);return tO(t._repo,t,n).then(r=>new jo(r,new Mn(t._repo,t._path),t._queryParams.getIndex()))}class Wu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new fO("value",this,new jo(e.snapshotNode,new Mn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new pO(this,e,n):null}matches(e){return e instanceof Wu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function gO(t,e,n,r,i){const s=new JE(n,void 0),o=new Wu(s);return sO(t._repo,t,o),()=>oO(t._repo,t,o)}function ou(t,e,n,r){return gO(t,"value",e)}px(Mn);yx(Mn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _O="FIREBASE_DATABASE_EMULATOR_HOST",Pd={};let vO=!1;function yO(t,e,n,r){t.repoInfo_=new tE(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function wO(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Dn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ve("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=ov(s,i),a=o.repoInfo,u;typeof process<"u"&&N_&&(u=N_[_O]),u?(s=`http://${u}?ns=${a.namespace}`,o=ov(s,i),a=o.repoInfo):o.repoInfo.secure;const h=new AP(t.name,t.options,e);Gx("Invalid Firebase Database URL",o),Y(o.path)||Dn("Database URL must point to the root of a Firebase Database (not including a child path).");const p=SO(a,t,h,new PP(t.name,n));return new CO(p,t)}function EO(t,e){const n=Pd[e];(!n||n[t.key]!==t)&&Dn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),lO(t),delete n[t.key]}function SO(t,e,n,r){let i=Pd[e.name];i||(i={},Pd[e.name]=i);let s=i[t.toURLString()];return s&&Dn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Xx(t,vO,n,r),i[t.toURLString()]=s,s}class CO{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jx(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Dn("Cannot call "+e+" on a deleted database.")}}function Er(t=Au(),e){const n=Yo(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=Lf("database");r&&IO(n,...r)}return n}function IO(t,e,n,r={}){t=be(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Dn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Dn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ua(ua.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:bf(r.mockUserToken,t.app.options.projectId);s=new ua(o)}yO(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(t){fP(kr),_r(new An("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wO(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Lt(P_,A_,t),Lt(P_,A_,"esm2017")}Tn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Tn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TO();var lv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ZE;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,_){function v(){}v.prototype=_.prototype,w.D=_.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(E,T,N){for(var S=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)S[ie-2]=arguments[ie];return _.prototype[T].apply(E,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,_,v){v||(v=0);var E=Array(16);if(typeof _=="string")for(var T=0;16>T;++T)E[T]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(T=0;16>T;++T)E[T]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=w.g[0],v=w.g[1],T=w.g[2];var N=w.g[3],S=_+(N^v&(T^N))+E[0]+3614090360&4294967295;_=v+(S<<7&4294967295|S>>>25),S=N+(T^_&(v^T))+E[1]+3905402710&4294967295,N=_+(S<<12&4294967295|S>>>20),S=T+(v^N&(_^v))+E[2]+606105819&4294967295,T=N+(S<<17&4294967295|S>>>15),S=v+(_^T&(N^_))+E[3]+3250441966&4294967295,v=T+(S<<22&4294967295|S>>>10),S=_+(N^v&(T^N))+E[4]+4118548399&4294967295,_=v+(S<<7&4294967295|S>>>25),S=N+(T^_&(v^T))+E[5]+1200080426&4294967295,N=_+(S<<12&4294967295|S>>>20),S=T+(v^N&(_^v))+E[6]+2821735955&4294967295,T=N+(S<<17&4294967295|S>>>15),S=v+(_^T&(N^_))+E[7]+4249261313&4294967295,v=T+(S<<22&4294967295|S>>>10),S=_+(N^v&(T^N))+E[8]+1770035416&4294967295,_=v+(S<<7&4294967295|S>>>25),S=N+(T^_&(v^T))+E[9]+2336552879&4294967295,N=_+(S<<12&4294967295|S>>>20),S=T+(v^N&(_^v))+E[10]+4294925233&4294967295,T=N+(S<<17&4294967295|S>>>15),S=v+(_^T&(N^_))+E[11]+2304563134&4294967295,v=T+(S<<22&4294967295|S>>>10),S=_+(N^v&(T^N))+E[12]+1804603682&4294967295,_=v+(S<<7&4294967295|S>>>25),S=N+(T^_&(v^T))+E[13]+4254626195&4294967295,N=_+(S<<12&4294967295|S>>>20),S=T+(v^N&(_^v))+E[14]+2792965006&4294967295,T=N+(S<<17&4294967295|S>>>15),S=v+(_^T&(N^_))+E[15]+1236535329&4294967295,v=T+(S<<22&4294967295|S>>>10),S=_+(T^N&(v^T))+E[1]+4129170786&4294967295,_=v+(S<<5&4294967295|S>>>27),S=N+(v^T&(_^v))+E[6]+3225465664&4294967295,N=_+(S<<9&4294967295|S>>>23),S=T+(_^v&(N^_))+E[11]+643717713&4294967295,T=N+(S<<14&4294967295|S>>>18),S=v+(N^_&(T^N))+E[0]+3921069994&4294967295,v=T+(S<<20&4294967295|S>>>12),S=_+(T^N&(v^T))+E[5]+3593408605&4294967295,_=v+(S<<5&4294967295|S>>>27),S=N+(v^T&(_^v))+E[10]+38016083&4294967295,N=_+(S<<9&4294967295|S>>>23),S=T+(_^v&(N^_))+E[15]+3634488961&4294967295,T=N+(S<<14&4294967295|S>>>18),S=v+(N^_&(T^N))+E[4]+3889429448&4294967295,v=T+(S<<20&4294967295|S>>>12),S=_+(T^N&(v^T))+E[9]+568446438&4294967295,_=v+(S<<5&4294967295|S>>>27),S=N+(v^T&(_^v))+E[14]+3275163606&4294967295,N=_+(S<<9&4294967295|S>>>23),S=T+(_^v&(N^_))+E[3]+4107603335&4294967295,T=N+(S<<14&4294967295|S>>>18),S=v+(N^_&(T^N))+E[8]+1163531501&4294967295,v=T+(S<<20&4294967295|S>>>12),S=_+(T^N&(v^T))+E[13]+2850285829&4294967295,_=v+(S<<5&4294967295|S>>>27),S=N+(v^T&(_^v))+E[2]+4243563512&4294967295,N=_+(S<<9&4294967295|S>>>23),S=T+(_^v&(N^_))+E[7]+1735328473&4294967295,T=N+(S<<14&4294967295|S>>>18),S=v+(N^_&(T^N))+E[12]+2368359562&4294967295,v=T+(S<<20&4294967295|S>>>12),S=_+(v^T^N)+E[5]+4294588738&4294967295,_=v+(S<<4&4294967295|S>>>28),S=N+(_^v^T)+E[8]+2272392833&4294967295,N=_+(S<<11&4294967295|S>>>21),S=T+(N^_^v)+E[11]+1839030562&4294967295,T=N+(S<<16&4294967295|S>>>16),S=v+(T^N^_)+E[14]+4259657740&4294967295,v=T+(S<<23&4294967295|S>>>9),S=_+(v^T^N)+E[1]+2763975236&4294967295,_=v+(S<<4&4294967295|S>>>28),S=N+(_^v^T)+E[4]+1272893353&4294967295,N=_+(S<<11&4294967295|S>>>21),S=T+(N^_^v)+E[7]+4139469664&4294967295,T=N+(S<<16&4294967295|S>>>16),S=v+(T^N^_)+E[10]+3200236656&4294967295,v=T+(S<<23&4294967295|S>>>9),S=_+(v^T^N)+E[13]+681279174&4294967295,_=v+(S<<4&4294967295|S>>>28),S=N+(_^v^T)+E[0]+3936430074&4294967295,N=_+(S<<11&4294967295|S>>>21),S=T+(N^_^v)+E[3]+3572445317&4294967295,T=N+(S<<16&4294967295|S>>>16),S=v+(T^N^_)+E[6]+76029189&4294967295,v=T+(S<<23&4294967295|S>>>9),S=_+(v^T^N)+E[9]+3654602809&4294967295,_=v+(S<<4&4294967295|S>>>28),S=N+(_^v^T)+E[12]+3873151461&4294967295,N=_+(S<<11&4294967295|S>>>21),S=T+(N^_^v)+E[15]+530742520&4294967295,T=N+(S<<16&4294967295|S>>>16),S=v+(T^N^_)+E[2]+3299628645&4294967295,v=T+(S<<23&4294967295|S>>>9),S=_+(T^(v|~N))+E[0]+4096336452&4294967295,_=v+(S<<6&4294967295|S>>>26),S=N+(v^(_|~T))+E[7]+1126891415&4294967295,N=_+(S<<10&4294967295|S>>>22),S=T+(_^(N|~v))+E[14]+2878612391&4294967295,T=N+(S<<15&4294967295|S>>>17),S=v+(N^(T|~_))+E[5]+4237533241&4294967295,v=T+(S<<21&4294967295|S>>>11),S=_+(T^(v|~N))+E[12]+1700485571&4294967295,_=v+(S<<6&4294967295|S>>>26),S=N+(v^(_|~T))+E[3]+2399980690&4294967295,N=_+(S<<10&4294967295|S>>>22),S=T+(_^(N|~v))+E[10]+4293915773&4294967295,T=N+(S<<15&4294967295|S>>>17),S=v+(N^(T|~_))+E[1]+2240044497&4294967295,v=T+(S<<21&4294967295|S>>>11),S=_+(T^(v|~N))+E[8]+1873313359&4294967295,_=v+(S<<6&4294967295|S>>>26),S=N+(v^(_|~T))+E[15]+4264355552&4294967295,N=_+(S<<10&4294967295|S>>>22),S=T+(_^(N|~v))+E[6]+2734768916&4294967295,T=N+(S<<15&4294967295|S>>>17),S=v+(N^(T|~_))+E[13]+1309151649&4294967295,v=T+(S<<21&4294967295|S>>>11),S=_+(T^(v|~N))+E[4]+4149444226&4294967295,_=v+(S<<6&4294967295|S>>>26),S=N+(v^(_|~T))+E[11]+3174756917&4294967295,N=_+(S<<10&4294967295|S>>>22),S=T+(_^(N|~v))+E[2]+718787259&4294967295,T=N+(S<<15&4294967295|S>>>17),S=v+(N^(T|~_))+E[9]+3951481745&4294967295,w.g[0]=w.g[0]+_&4294967295,w.g[1]=w.g[1]+(T+(S<<21&4294967295|S>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+N&4294967295}r.prototype.u=function(w,_){_===void 0&&(_=w.length);for(var v=_-this.blockSize,E=this.B,T=this.h,N=0;N<_;){if(T==0)for(;N<=v;)i(this,w,N),N+=this.blockSize;if(typeof w=="string"){for(;N<_;)if(E[T++]=w.charCodeAt(N++),T==this.blockSize){i(this,E),T=0;break}}else for(;N<_;)if(E[T++]=w[N++],T==this.blockSize){i(this,E),T=0;break}}this.h=T,this.o+=_},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var _=1;_<w.length-8;++_)w[_]=0;var v=8*this.o;for(_=w.length-8;_<w.length;++_)w[_]=v&255,v/=256;for(this.u(w),w=Array(16),_=v=0;4>_;++_)for(var E=0;32>E;E+=8)w[v++]=this.g[_]>>>E&255;return w};function s(w,_){var v=a;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=_(w)}function o(w,_){this.h=_;for(var v=[],E=!0,T=w.length-1;0<=T;T--){var N=w[T]|0;E&&N==_||(v[T]=N,E=!1)}this.g=v}var a={};function u(w){return-128<=w&&128>w?s(w,function(_){return new o([_|0],0>_?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return f;if(0>w)return L(h(-w));for(var _=[],v=1,E=0;w>=v;E++)_[E]=w/v|0,v*=4294967296;return new o(_,0)}function p(w,_){if(w.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(w.charAt(0)=="-")return L(p(w.substring(1),_));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),E=f,T=0;T<w.length;T+=8){var N=Math.min(8,w.length-T),S=parseInt(w.substring(T,T+N),_);8>N?(N=h(Math.pow(_,N)),E=E.j(N).add(h(S))):(E=E.j(v),E=E.add(h(S)))}return E}var f=u(0),m=u(1),k=u(16777216);t=o.prototype,t.m=function(){if(A(this))return-L(this).m();for(var w=0,_=1,v=0;v<this.g.length;v++){var E=this.i(v);w+=(0<=E?E:4294967296+E)*_,_*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(A(this))return"-"+L(this).toString(w);for(var _=h(Math.pow(w,6)),v=this,E="";;){var T=O(v,_).g;v=C(v,T.j(_));var N=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=T,R(v))return N+E;for(;6>N.length;)N="0"+N;E=N+E}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var _=0;_<w.g.length;_++)if(w.g[_]!=0)return!1;return!0}function A(w){return w.h==-1}t.l=function(w){return w=C(this,w),A(w)?-1:R(w)?0:1};function L(w){for(var _=w.g.length,v=[],E=0;E<_;E++)v[E]=~w.g[E];return new o(v,~w.h).add(m)}t.abs=function(){return A(this)?L(this):this},t.add=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0,T=0;T<=_;T++){var N=E+(this.i(T)&65535)+(w.i(T)&65535),S=(N>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);E=S>>>16,N&=65535,S&=65535,v[T]=S<<16|N}return new o(v,v[v.length-1]&-2147483648?-1:0)};function C(w,_){return w.add(L(_))}t.j=function(w){if(R(this)||R(w))return f;if(A(this))return A(w)?L(this).j(L(w)):L(L(this).j(w));if(A(w))return L(this.j(L(w)));if(0>this.l(k)&&0>w.l(k))return h(this.m()*w.m());for(var _=this.g.length+w.g.length,v=[],E=0;E<2*_;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var T=0;T<w.g.length;T++){var N=this.i(E)>>>16,S=this.i(E)&65535,ie=w.i(T)>>>16,ce=w.i(T)&65535;v[2*E+2*T]+=S*ce,y(v,2*E+2*T),v[2*E+2*T+1]+=N*ce,y(v,2*E+2*T+1),v[2*E+2*T+1]+=S*ie,y(v,2*E+2*T+1),v[2*E+2*T+2]+=N*ie,y(v,2*E+2*T+2)}for(E=0;E<_;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=_;E<2*_;E++)v[E]=0;return new o(v,0)};function y(w,_){for(;(w[_]&65535)!=w[_];)w[_+1]+=w[_]>>>16,w[_]&=65535,_++}function I(w,_){this.g=w,this.h=_}function O(w,_){if(R(_))throw Error("division by zero");if(R(w))return new I(f,f);if(A(w))return _=O(L(w),_),new I(L(_.g),L(_.h));if(A(_))return _=O(w,L(_)),new I(L(_.g),_.h);if(30<w.g.length){if(A(w)||A(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,E=_;0>=E.l(w);)v=M(v),E=M(E);var T=U(v,1),N=U(E,1);for(E=U(E,2),v=U(v,2);!R(E);){var S=N.add(E);0>=S.l(w)&&(T=T.add(v),N=S),E=U(E,1),v=U(v,1)}return _=C(w,T.j(_)),new I(T,_)}for(T=f;0<=w.l(_);){for(v=Math.max(1,Math.floor(w.m()/_.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),N=h(v),S=N.j(_);A(S)||0<S.l(w);)v-=E,N=h(v),S=N.j(_);R(N)&&(N=m),T=T.add(N),w=C(w,S)}return new I(T,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)&w.i(E);return new o(v,this.h&w.h)},t.or=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)|w.i(E);return new o(v,this.h|w.h)},t.xor=function(w){for(var _=Math.max(this.g.length,w.g.length),v=[],E=0;E<_;E++)v[E]=this.i(E)^w.i(E);return new o(v,this.h^w.h)};function M(w){for(var _=w.g.length+1,v=[],E=0;E<_;E++)v[E]=w.i(E)<<1|w.i(E-1)>>>31;return new o(v,w.h)}function U(w,_){var v=_>>5;_%=32;for(var E=w.g.length-v,T=[],N=0;N<E;N++)T[N]=0<_?w.i(N+v)>>>_|w.i(N+v+1)<<32-_:w.i(N+v);return new o(T,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,ZE=o}).apply(typeof lv<"u"?lv:typeof self<"u"?self:typeof window<"u"?window:{});var Vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,c,d){return l==Array.prototype||l==Object.prototype||(l[c]=d.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vl=="object"&&Vl];for(var c=0;c<l.length;++c){var d=l[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(l,c){if(c)e:{var d=r;l=l.split(".");for(var g=0;g<l.length-1;g++){var P=l[g];if(!(P in d))break e;d=d[P]}l=l[l.length-1],g=d[l],c=c(g),c!=g&&c!=null&&e(d,l,{configurable:!0,writable:!0,value:c})}}function s(l,c){l instanceof String&&(l+="");var d=0,g=!1,P={next:function(){if(!g&&d<l.length){var D=d++;return{value:c(D,l[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(l){return l||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var c=typeof l;return c=c!="object"?c:l?Array.isArray(l)?"array":c:"null",c=="array"||c=="object"&&typeof l.length=="number"}function h(l){var c=typeof l;return c=="object"&&l!=null||c=="function"}function p(l,c,d){return l.call.apply(l.bind,arguments)}function f(l,c,d){if(!l)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),l.apply(c,P)}}return function(){return l.apply(c,arguments)}}function m(l,c,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:f,m.apply(null,arguments)}function k(l,c){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),l.apply(this,g)}}function R(l,c){function d(){}d.prototype=c.prototype,l.aa=c.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(g,P,D){for(var B=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)B[oe-2]=arguments[oe];return c.prototype[P].apply(g,B)}}function A(l){const c=l.length;if(0<c){const d=Array(c);for(let g=0;g<c;g++)d[g]=l[g];return d}return[]}function L(l,c){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(u(g)){const P=l.length||0,D=g.length||0;l.length=P+D;for(let B=0;B<D;B++)l[P+B]=g[B]}else l.push(g)}}class C{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var M=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function U(l,c,d){for(const g in l)c.call(d,l[g],g,l)}function w(l,c){for(const d in l)c.call(void 0,l[d],d,l)}function _(l){const c={};for(const d in l)c[d]=l[d];return c}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(l,c){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)l[d]=g[d];for(let D=0;D<v.length;D++)d=v[D],Object.prototype.hasOwnProperty.call(g,d)&&(l[d]=g[d])}}function T(l){var c=1;l=l.split(":");const d=[];for(;0<c&&l.length;)d.push(l.shift()),c--;return l.length&&d.push(l.join(":")),d}function N(l){a.setTimeout(()=>{throw l},0)}function S(){var l=V;let c=null;return l.g&&(c=l.g,l.g=l.g.next,l.g||(l.h=null),c.next=null),c}class ie{constructor(){this.h=this.g=null}add(c,d){const g=ce.get();g.set(c,d),this.h?this.h.next=g:this.g=g,this.h=g}}var ce=new C(()=>new dt,l=>l.reset());class dt{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ke,z=!1,V=new ie,G=()=>{const l=a.Promise.resolve(void 0);ke=()=>{l.then(he)}};var he=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(d){N(d)}var c=ce;c.j(l),100>c.h&&(c.h++,l.next=c.g,c.g=l)}z=!1};function ne(){this.s=this.s,this.C=this.C}ne.prototype.s=!1,ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(l,c){this.type=l,this.g=this.target=c,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var Rt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,c=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return l}();function cn(l,c){if(me.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,g=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=c,c=l.relatedTarget){if(M){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else d=="mouseover"?c=l.fromElement:d=="mouseout"&&(c=l.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:hn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&cn.aa.h.call(this)}}R(cn,me);var hn={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var dn="closure_listenable_"+(1e6*Math.random()|0),vS=0;function yS(l,c,d,g,P){this.listener=l,this.proxy=null,this.src=c,this.type=d,this.capture=!!g,this.ha=P,this.key=++vS,this.da=this.fa=!1}function al(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ul(l){this.src=l,this.g={},this.h=0}ul.prototype.add=function(l,c,d,g,P){var D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);var B=Yu(l,c,g,P);return-1<B?(c=l[B],d||(c.fa=!1)):(c=new yS(c,this.src,D,!!g,P),c.fa=d,l.push(c)),c};function qu(l,c){var d=c.type;if(d in l.g){var g=l.g[d],P=Array.prototype.indexOf.call(g,c,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(al(c),l.g[d].length==0&&(delete l.g[d],l.h--))}}function Yu(l,c,d,g){for(var P=0;P<l.length;++P){var D=l[P];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==g)return P}return-1}var Qu="closure_lm_"+(1e6*Math.random()|0),Xu={};function Up(l,c,d,g,P){if(Array.isArray(c)){for(var D=0;D<c.length;D++)Up(l,c[D],d,g,P);return null}return d=Bp(d),l&&l[dn]?l.K(c,d,h(g)?!!g.capture:!!g,P):wS(l,c,d,!1,g,P)}function wS(l,c,d,g,P,D){if(!c)throw Error("Invalid event type");var B=h(P)?!!P.capture:!!P,oe=Zu(l);if(oe||(l[Qu]=oe=new ul(l)),d=oe.add(c,d,g,B,D),d.proxy)return d;if(g=ES(),d.proxy=g,g.src=l,g.listener=d,l.addEventListener)Rt||(P=B),P===void 0&&(P=!1),l.addEventListener(c.toString(),g,P);else if(l.attachEvent)l.attachEvent(jp(c.toString()),g);else if(l.addListener&&l.removeListener)l.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ES(){function l(d){return c.call(l.src,l.listener,d)}const c=SS;return l}function Fp(l,c,d,g,P){if(Array.isArray(c))for(var D=0;D<c.length;D++)Fp(l,c[D],d,g,P);else g=h(g)?!!g.capture:!!g,d=Bp(d),l&&l[dn]?(l=l.i,c=String(c).toString(),c in l.g&&(D=l.g[c],d=Yu(D,d,g,P),-1<d&&(al(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete l.g[c],l.h--)))):l&&(l=Zu(l))&&(c=l.g[c.toString()],l=-1,c&&(l=Yu(c,d,g,P)),(d=-1<l?c[l]:null)&&Ju(d))}function Ju(l){if(typeof l!="number"&&l&&!l.da){var c=l.src;if(c&&c[dn])qu(c.i,l);else{var d=l.type,g=l.proxy;c.removeEventListener?c.removeEventListener(d,g,l.capture):c.detachEvent?c.detachEvent(jp(d),g):c.addListener&&c.removeListener&&c.removeListener(g),(d=Zu(c))?(qu(d,l),d.h==0&&(d.src=null,c[Qu]=null)):al(l)}}}function jp(l){return l in Xu?Xu[l]:Xu[l]="on"+l}function SS(l,c){if(l.da)l=!0;else{c=new cn(c,this);var d=l.listener,g=l.ha||l.src;l.fa&&Ju(l),l=d.call(g,c)}return l}function Zu(l){return l=l[Qu],l instanceof ul?l:null}var ec="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bp(l){return typeof l=="function"?l:(l[ec]||(l[ec]=function(c){return l.handleEvent(c)}),l[ec])}function Ke(){ne.call(this),this.i=new ul(this),this.M=this,this.F=null}R(Ke,ne),Ke.prototype[dn]=!0,Ke.prototype.removeEventListener=function(l,c,d,g){Fp(this,l,c,d,g)};function et(l,c){var d,g=l.F;if(g)for(d=[];g;g=g.F)d.push(g);if(l=l.M,g=c.type||c,typeof c=="string")c=new me(c,l);else if(c instanceof me)c.target=c.target||l;else{var P=c;c=new me(g,l),E(c,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var B=c.g=d[D];P=cl(B,g,!0,c)&&P}if(B=c.g=l,P=cl(B,g,!0,c)&&P,P=cl(B,g,!1,c)&&P,d)for(D=0;D<d.length;D++)B=c.g=d[D],P=cl(B,g,!1,c)&&P}Ke.prototype.N=function(){if(Ke.aa.N.call(this),this.i){var l=this.i,c;for(c in l.g){for(var d=l.g[c],g=0;g<d.length;g++)al(d[g]);delete l.g[c],l.h--}}this.F=null},Ke.prototype.K=function(l,c,d,g){return this.i.add(String(l),c,!1,d,g)},Ke.prototype.L=function(l,c,d,g){return this.i.add(String(l),c,!0,d,g)};function cl(l,c,d,g){if(c=l.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,D=0;D<c.length;++D){var B=c[D];if(B&&!B.da&&B.capture==d){var oe=B.listener,Be=B.ha||B.src;B.fa&&qu(l.i,B),P=oe.call(Be,g)!==!1&&P}}return P&&!g.defaultPrevented}function zp(l,c,d){if(typeof l=="function")d&&(l=m(l,d));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(l,c||0)}function $p(l){l.g=zp(()=>{l.g=null,l.i&&(l.i=!1,$p(l))},l.l);const c=l.h;l.h=null,l.m.apply(null,c)}class CS extends ne{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$p(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function hs(l){ne.call(this),this.h=l,this.g={}}R(hs,ne);var Vp=[];function Wp(l){U(l.g,function(c,d){this.g.hasOwnProperty(d)&&Ju(c)},l),l.g={}}hs.prototype.N=function(){hs.aa.N.call(this),Wp(this)},hs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tc=a.JSON.stringify,IS=a.JSON.parse,TS=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function nc(){}nc.prototype.h=null;function Hp(l){return l.h||(l.h=l.i())}function kS(){}var ds={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rc(){me.call(this,"d")}R(rc,me);function ic(){me.call(this,"c")}R(ic,me);var oi={},Gp=null;function sc(){return Gp=Gp||new Ke}oi.La="serverreachability";function Kp(l){me.call(this,oi.La,l)}R(Kp,me);function fs(l){const c=sc();et(c,new Kp(c))}oi.STAT_EVENT="statevent";function qp(l,c){me.call(this,oi.STAT_EVENT,l),this.stat=c}R(qp,me);function tt(l){const c=sc();et(c,new qp(c,l))}oi.Ma="timingevent";function Yp(l,c){me.call(this,oi.Ma,l),this.size=c}R(Yp,me);function ps(l,c){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},c)}function ms(){this.g=!0}ms.prototype.xa=function(){this.g=!1};function RS(l,c,d,g,P,D){l.info(function(){if(l.g)if(D)for(var B="",oe=D.split("&"),Be=0;Be<oe.length;Be++){var Z=oe[Be].split("=");if(1<Z.length){var qe=Z[0];Z=Z[1];var Ye=qe.split("_");B=2<=Ye.length&&Ye[1]=="type"?B+(qe+"="+Z+"&"):B+(qe+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+d+`
`+B})}function NS(l,c,d,g,P,D,B){l.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+d+`
`+D+" "+B})}function li(l,c,d,g){l.info(function(){return"XMLHTTP TEXT ("+c+"): "+AS(l,d)+(g?" "+g:"")})}function PS(l,c){l.info(function(){return"TIMEOUT: "+c})}ms.prototype.info=function(){};function AS(l,c){if(!l.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var g=d[l];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return tc(d)}catch{return c}}var oc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xS={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lc;function hl(){}R(hl,nc),hl.prototype.g=function(){return new XMLHttpRequest},hl.prototype.i=function(){return{}},lc=new hl;function Un(l,c,d,g){this.j=l,this.i=c,this.l=d,this.R=g||1,this.U=new hs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qp}function Qp(){this.i=null,this.g="",this.h=!1}var Xp={},ac={};function uc(l,c,d){l.L=1,l.v=ml(fn(c)),l.m=d,l.P=!0,Jp(l,null)}function Jp(l,c){l.F=Date.now(),dl(l),l.A=fn(l.v);var d=l.A,g=l.R;Array.isArray(g)||(g=[String(g)]),dm(d.i,"t",g),l.C=0,d=l.j.J,l.h=new Qp,l.g=Am(l.j,d?c:null,!l.m),0<l.O&&(l.M=new CS(m(l.Y,l,l.g),l.O)),c=l.U,d=l.g,g=l.ca;var P="readystatechange";Array.isArray(P)||(P&&(Vp[0]=P.toString()),P=Vp);for(var D=0;D<P.length;D++){var B=Up(d,P[D],g||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,c)):(l.u="GET",l.g.ea(l.A,l.u,null,c)),fs(),RS(l.i,l.u,l.A,l.l,l.R,l.m)}Un.prototype.ca=function(l){l=l.target;const c=this.M;c&&pn(l)==3?c.j():this.Y(l)},Un.prototype.Y=function(l){try{if(l==this.g)e:{const Ye=pn(this.g);var c=this.g.Ba();const ci=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||ym(this.g)))){this.J||Ye!=4||c==7||(c==8||0>=ci?fs(3):fs(2)),cc(this);var d=this.g.Z();this.X=d;t:if(Zp(this)){var g=ym(this.g);l="";var P=g.length,D=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),gs(this);var B="";break t}this.h.i=new a.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,l+=this.h.i.decode(g[c],{stream:!(D&&c==P-1)});g.length=0,this.h.g+=l,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,NS(this.i,this.u,this.A,this.l,this.R,Ye,d),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Be=this.g;if((oe=Be.g?Be.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(oe)){var Z=oe;break t}}Z=null}if(d=Z)li(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hc(this,d);else{this.o=!1,this.s=3,tt(12),Pr(this),gs(this);break e}}if(this.P){d=!0;let Ft;for(;!this.J&&this.C<B.length;)if(Ft=OS(this,B),Ft==ac){Ye==4&&(this.s=4,tt(14),d=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Xp){this.s=4,tt(15),li(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else li(this.i,this.l,Ft,null),hc(this,Ft);if(Zp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||B.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)li(this.i,this.l,B,"[Invalid Chunked Response]"),Pr(this),gs(this);else if(0<B.length&&!this.W){this.W=!0;var qe=this.j;qe.g==this&&qe.ba&&!qe.M&&(qe.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),_c(qe),qe.M=!0,tt(11))}}else li(this.i,this.l,B,null),hc(this,B);Ye==4&&Pr(this),this.o&&!this.J&&(Ye==4?km(this.j,this):(this.o=!1,dl(this)))}else YS(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Pr(this),gs(this)}}}catch{}finally{}};function Zp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function OS(l,c){var d=l.C,g=c.indexOf(`
`,d);return g==-1?ac:(d=Number(c.substring(d,g)),isNaN(d)?Xp:(g+=1,g+d>c.length?ac:(c=c.slice(g,g+d),l.C=g+d,c)))}Un.prototype.cancel=function(){this.J=!0,Pr(this)};function dl(l){l.S=Date.now()+l.I,em(l,l.I)}function em(l,c){if(l.B!=null)throw Error("WatchDog timer not null");l.B=ps(m(l.ba,l),c)}function cc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Un.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(PS(this.i,this.A),this.L!=2&&(fs(),tt(17)),Pr(this),this.s=2,gs(this)):em(this,this.S-l)};function gs(l){l.j.G==0||l.J||km(l.j,l)}function Pr(l){cc(l);var c=l.M;c&&typeof c.ma=="function"&&c.ma(),l.M=null,Wp(l.U),l.g&&(c=l.g,l.g=null,c.abort(),c.ma())}function hc(l,c){try{var d=l.j;if(d.G!=0&&(d.g==l||dc(d.h,l))){if(!l.K&&dc(d.h,l)&&d.G==3){try{var g=d.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)El(d),yl(d);else break e;gc(d),tt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ps(m(d.Za,d),6e3));if(1>=rm(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else xr(d,11)}else if((l.K||d.g==l)&&El(d),!y(c))for(P=d.Da.g.parse(c),c=0;c<P.length;c++){let Z=P[c];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const qe=Z[3];qe!=null&&(d.la=qe,d.j.info("VER="+d.la));const Ye=Z[4];Ye!=null&&(d.Aa=Ye,d.j.info("SVER="+d.Aa));const ci=Z[5];ci!=null&&typeof ci=="number"&&0<ci&&(g=1.5*ci,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ft=l.g;if(Ft){const Sl=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sl){var D=g.h;D.g||Sl.indexOf("spdy")==-1&&Sl.indexOf("quic")==-1&&Sl.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(fc(D,D.h),D.h=null))}if(g.D){const vc=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(g.ya=vc,de(g.I,g.D,vc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var B=l;if(g.qa=Pm(g,g.J?g.ia:null,g.W),B.K){im(g.h,B);var oe=B,Be=g.L;Be&&(oe.I=Be),oe.B&&(cc(oe),dl(oe)),g.g=B}else Im(g);0<d.i.length&&wl(d)}else Z[0]!="stop"&&Z[0]!="close"||xr(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?xr(d,7):mc(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}fs(4)}catch{}}var DS=class{constructor(l,c){this.g=l,this.map=c}};function tm(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function rm(l){return l.h?1:l.g?l.g.size:0}function dc(l,c){return l.h?l.h==c:l.g?l.g.has(c):!1}function fc(l,c){l.g?l.g.add(c):l.h=c}function im(l,c){l.h&&l.h==c?l.h=null:l.g&&l.g.has(c)&&l.g.delete(c)}tm.prototype.cancel=function(){if(this.i=sm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function sm(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let c=l.i;for(const d of l.g.values())c=c.concat(d.D);return c}return A(l.i)}function LS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var c=[],d=l.length,g=0;g<d;g++)c.push(l[g]);return c}c=[],d=0;for(g in l)c[d++]=l[g];return c}function bS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var c=[];l=l.length;for(var d=0;d<l;d++)c.push(d);return c}c=[],d=0;for(const g in l)c[d++]=g;return c}}}function om(l,c){if(l.forEach&&typeof l.forEach=="function")l.forEach(c,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,c,void 0);else for(var d=bS(l),g=LS(l),P=g.length,D=0;D<P;D++)c.call(void 0,g[D],d&&d[D],l)}var lm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function MS(l,c){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var g=l[d].indexOf("="),P=null;if(0<=g){var D=l[d].substring(0,g);P=l[d].substring(g+1)}else D=l[d];c(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ar(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Ar){this.h=l.h,fl(this,l.j),this.o=l.o,this.g=l.g,pl(this,l.s),this.l=l.l;var c=l.i,d=new ys;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),am(this,d),this.m=l.m}else l&&(c=String(l).match(lm))?(this.h=!1,fl(this,c[1]||"",!0),this.o=_s(c[2]||""),this.g=_s(c[3]||"",!0),pl(this,c[4]),this.l=_s(c[5]||"",!0),am(this,c[6]||"",!0),this.m=_s(c[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}Ar.prototype.toString=function(){var l=[],c=this.j;c&&l.push(vs(c,um,!0),":");var d=this.g;return(d||c=="file")&&(l.push("//"),(c=this.o)&&l.push(vs(c,um,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(vs(d,d.charAt(0)=="/"?jS:FS,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",vs(d,zS)),l.join("")};function fn(l){return new Ar(l)}function fl(l,c,d){l.j=d?_s(c,!0):c,l.j&&(l.j=l.j.replace(/:$/,""))}function pl(l,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);l.s=c}else l.s=null}function am(l,c,d){c instanceof ys?(l.i=c,$S(l.i,l.h)):(d||(c=vs(c,BS)),l.i=new ys(c,l.h))}function de(l,c,d){l.i.set(c,d)}function ml(l){return de(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function _s(l,c){return l?c?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function vs(l,c,d){return typeof l=="string"?(l=encodeURI(l).replace(c,US),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function US(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var um=/[#\/\?@]/g,FS=/[#\?:]/g,jS=/[#\?]/g,BS=/[#\?@]/g,zS=/#/g;function ys(l,c){this.h=this.g=null,this.i=l||null,this.j=!!c}function Fn(l){l.g||(l.g=new Map,l.h=0,l.i&&MS(l.i,function(c,d){l.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ys.prototype,t.add=function(l,c){Fn(this),this.i=null,l=ai(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(c),this.h+=1,this};function cm(l,c){Fn(l),c=ai(l,c),l.g.has(c)&&(l.i=null,l.h-=l.g.get(c).length,l.g.delete(c))}function hm(l,c){return Fn(l),c=ai(l,c),l.g.has(c)}t.forEach=function(l,c){Fn(this),this.g.forEach(function(d,g){d.forEach(function(P){l.call(c,P,g,this)},this)},this)},t.na=function(){Fn(this);const l=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let g=0;g<c.length;g++){const P=l[g];for(let D=0;D<P.length;D++)d.push(c[g])}return d},t.V=function(l){Fn(this);let c=[];if(typeof l=="string")hm(this,l)&&(c=c.concat(this.g.get(ai(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)c=c.concat(l[d])}return c},t.set=function(l,c){return Fn(this),this.i=null,l=ai(this,l),hm(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[c]),this.h+=1,this},t.get=function(l,c){return l?(l=this.V(l),0<l.length?String(l[0]):c):c};function dm(l,c,d){cm(l,c),0<d.length&&(l.i=null,l.g.set(ai(l,c),A(d)),l.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var g=c[d];const D=encodeURIComponent(String(g)),B=this.V(g);for(g=0;g<B.length;g++){var P=D;B[g]!==""&&(P+="="+encodeURIComponent(String(B[g]))),l.push(P)}}return this.i=l.join("&")};function ai(l,c){return c=String(c),l.j&&(c=c.toLowerCase()),c}function $S(l,c){c&&!l.j&&(Fn(l),l.i=null,l.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(cm(this,g),dm(this,P,d))},l)),l.j=c}function VS(l,c){const d=new ms;if(a.Image){const g=new Image;g.onload=k(jn,d,"TestLoadImage: loaded",!0,c,g),g.onerror=k(jn,d,"TestLoadImage: error",!1,c,g),g.onabort=k(jn,d,"TestLoadImage: abort",!1,c,g),g.ontimeout=k(jn,d,"TestLoadImage: timeout",!1,c,g),a.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=l}else c(!1)}function WS(l,c){const d=new ms,g=new AbortController,P=setTimeout(()=>{g.abort(),jn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(l,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?jn(d,"TestPingServer: ok",!0,c):jn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),jn(d,"TestPingServer: error",!1,c)})}function jn(l,c,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function HS(){this.g=new TS}function GS(l,c,d){const g=d||"";try{om(l,function(P,D){let B=P;h(P)&&(B=tc(P)),c.push(g+D+"="+encodeURIComponent(B))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function gl(l){this.l=l.Ub||null,this.j=l.eb||!1}R(gl,nc),gl.prototype.g=function(){return new _l(this.l,this.j)},gl.prototype.i=function(l){return function(){return l}}({});function _l(l,c){Ke.call(this),this.D=l,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(_l,Ke),t=_l.prototype,t.open=function(l,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=c,this.readyState=1,Es(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(c.body=l),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;fm(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function fm(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var c=l.value?l.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!l.done}))&&(this.response=this.responseText+=c)}l.done?ws(this):Es(this),this.readyState==3&&fm(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,ws(this))},t.Qa=function(l){this.g&&(this.response=l,ws(this))},t.ga=function(){this.g&&ws(this)};function ws(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Es(l)}t.setRequestHeader=function(l,c){this.u.append(l,c)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=c.next();return l.join(`\r
`)};function Es(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function pm(l){let c="";return U(l,function(d,g){c+=g,c+=":",c+=d,c+=`\r
`}),c}function pc(l,c,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=pm(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):de(l,c,d))}function Re(l){Ke.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Re,Ke);var KS=/^https?$/i,qS=["POST","PUT"];t=Re.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,c,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);c=c?c.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lc.g(),this.v=this.o?Hp(this.o):Hp(lc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(c,String(l),!0),this.B=!1}catch(D){mm(this,D);return}if(l=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(qS,c,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of d)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{vm(this),this.u=!0,this.g.send(l),this.u=!1}catch(D){mm(this,D)}};function mm(l,c){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=c,l.m=5,gm(l),vl(l)}function gm(l){l.A||(l.A=!0,et(l,"complete"),et(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,et(this,"complete"),et(this,"abort"),vl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),vl(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?_m(this):this.bb())},t.bb=function(){_m(this)};function _m(l){if(l.h&&typeof o<"u"&&(!l.v[1]||pn(l)!=4||l.Z()!=2)){if(l.u&&pn(l)==4)zp(l.Ea,0,l);else if(et(l,"readystatechange"),pn(l)==4){l.h=!1;try{const B=l.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var g;if(g=B===0){var P=String(l.D).match(lm)[1]||null;!P&&a.self&&a.self.location&&(P=a.self.location.protocol.slice(0,-1)),g=!KS.test(P?P.toLowerCase():"")}d=g}if(d)et(l,"complete"),et(l,"success");else{l.m=6;try{var D=2<pn(l)?l.g.statusText:""}catch{D=""}l.l=D+" ["+l.Z()+"]",gm(l)}}finally{vl(l)}}}}function vl(l,c){if(l.g){vm(l);const d=l.g,g=l.v[0]?()=>{}:null;l.g=null,l.v=null,c||et(l,"ready");try{d.onreadystatechange=g}catch{}}}function vm(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function pn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var c=this.g.responseText;return l&&c.indexOf(l)==0&&(c=c.substring(l.length)),IS(c)}};function ym(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function YS(l){const c={};l=(l.g&&2<=pn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<l.length;g++){if(y(l[g]))continue;var d=T(l[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[P]||[];c[P]=D,D.push(d)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ss(l,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||c}function wm(l){this.Aa=0,this.i=[],this.j=new ms,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ss("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ss("baseRetryDelayMs",5e3,l),this.cb=Ss("retryDelaySeedMs",1e4,l),this.Wa=Ss("forwardChannelMaxRetries",2,l),this.wa=Ss("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new tm(l&&l.concurrentRequestLimit),this.Da=new HS,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=wm.prototype,t.la=8,t.G=1,t.connect=function(l,c,d,g){tt(0),this.W=l,this.H=c||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Pm(this,null,this.W),wl(this)};function mc(l){if(Em(l),l.G==3){var c=l.U++,d=fn(l.I);if(de(d,"SID",l.K),de(d,"RID",c),de(d,"TYPE","terminate"),Cs(l,d),c=new Un(l,l.j,c),c.L=2,c.v=ml(fn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.v,d=!0),d||(c.g=Am(c.j,null),c.g.ea(c.v)),c.F=Date.now(),dl(c)}Nm(l)}function yl(l){l.g&&(_c(l),l.g.cancel(),l.g=null)}function Em(l){yl(l),l.u&&(a.clearTimeout(l.u),l.u=null),El(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function wl(l){if(!nm(l.h)&&!l.s){l.s=!0;var c=l.Ga;ke||G(),z||(ke(),z=!0),V.add(c,l),l.B=0}}function QS(l,c){return rm(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=c.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=ps(m(l.Ga,l,c),Rm(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const P=new Un(this,this.j,l);let D=this.o;if(this.S&&(D?(D=_(D),E(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Cm(this,P,c),d=fn(this.I),de(d,"RID",l),de(d,"CVER",22),this.D&&de(d,"X-HTTP-Session-Id",this.D),Cs(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(pm(D)))+"&"+c:this.m&&pc(d,this.m,D)),fc(this.h,P),this.Ua&&de(d,"TYPE","init"),this.P?(de(d,"$req",c),de(d,"SID","null"),P.T=!0,uc(P,d,null)):uc(P,d,c),this.G=2}}else this.G==3&&(l?Sm(this,l):this.i.length==0||nm(this.h)||Sm(this))};function Sm(l,c){var d;c?d=c.l:d=l.U++;const g=fn(l.I);de(g,"SID",l.K),de(g,"RID",d),de(g,"AID",l.T),Cs(l,g),l.m&&l.o&&pc(g,l.m,l.o),d=new Un(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),c&&(l.i=c.D.concat(l.i)),c=Cm(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),fc(l.h,d),uc(d,g,c)}function Cs(l,c){l.H&&U(l.H,function(d,g){de(c,g,d)}),l.l&&om({},function(d,g){de(c,g,d)})}function Cm(l,c,d){d=Math.min(l.i.length,d);var g=l.l?m(l.l.Na,l.l,l):null;e:{var P=l.i;let D=-1;for(;;){const B=["count="+d];D==-1?0<d?(D=P[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let oe=!0;for(let Be=0;Be<d;Be++){let Z=P[Be].g;const qe=P[Be].map;if(Z-=D,0>Z)D=Math.max(0,P[Be].g-100),oe=!1;else try{GS(qe,B,"req"+Z+"_")}catch{g&&g(qe)}}if(oe){g=B.join("&");break e}}}return l=l.i.splice(0,d),c.D=l,g}function Im(l){if(!l.g&&!l.u){l.Y=1;var c=l.Fa;ke||G(),z||(ke(),z=!0),V.add(c,l),l.v=0}}function gc(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=ps(m(l.Fa,l),Rm(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Tm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=ps(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),yl(this),Tm(this))};function _c(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Tm(l){l.g=new Un(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var c=fn(l.qa);de(c,"RID","rpc"),de(c,"SID",l.K),de(c,"AID",l.T),de(c,"CI",l.F?"0":"1"),!l.F&&l.ja&&de(c,"TO",l.ja),de(c,"TYPE","xmlhttp"),Cs(l,c),l.m&&l.o&&pc(c,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=ml(fn(c)),d.m=null,d.P=!0,Jp(d,l)}t.Za=function(){this.C!=null&&(this.C=null,yl(this),gc(this),tt(19))};function El(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function km(l,c){var d=null;if(l.g==c){El(l),_c(l),l.g=null;var g=2}else if(dc(l.h,c))d=c.D,im(l.h,c),g=1;else return;if(l.G!=0){if(c.o)if(g==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var P=l.B;g=sc(),et(g,new Yp(g,d)),wl(l)}else Im(l);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&QS(l,c)||g==2&&gc(l)))switch(d&&0<d.length&&(c=l.h,c.i=c.i.concat(d)),P){case 1:xr(l,5);break;case 4:xr(l,10);break;case 3:xr(l,6);break;default:xr(l,2)}}}function Rm(l,c){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*c}function xr(l,c){if(l.j.info("Error code "+c),c==2){var d=m(l.fb,l),g=l.Xa;const P=!g;g=new Ar(g||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||fl(g,"https"),ml(g),P?VS(g.toString(),d):WS(g.toString(),d)}else tt(2);l.G=0,l.l&&l.l.sa(c),Nm(l),Em(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Nm(l){if(l.G=0,l.ka=[],l.l){const c=sm(l.h);(c.length!=0||l.i.length!=0)&&(L(l.ka,c),L(l.ka,l.i),l.h.i.length=0,A(l.i),l.i.length=0),l.l.ra()}}function Pm(l,c,d){var g=d instanceof Ar?fn(d):new Ar(d);if(g.g!="")c&&(g.g=c+"."+g.g),pl(g,g.s);else{var P=a.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var D=new Ar(null);g&&fl(D,g),c&&(D.g=c),P&&pl(D,P),d&&(D.l=d),g=D}return d=l.D,c=l.ya,d&&c&&de(g,d,c),de(g,"VER",l.la),Cs(l,g),g}function Am(l,c,d){if(c&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=l.Ca&&!l.pa?new Re(new gl({eb:d})):new Re(l.pa),c.Ha(l.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xm(){}t=xm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Nt(l,c){Ke.call(this),this.g=new wm(c),this.l=l,this.h=c&&c.messageUrlParams||null,l=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(l?l["X-WebChannel-Content-Type"]=c.messageContentType:l={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(l?l["X-WebChannel-Client-Profile"]=c.va:l={"X-WebChannel-Client-Profile":c.va}),this.g.S=l,(l=c&&c.Sb)&&!y(l)&&(this.g.m=l),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,l=this.h,l!==null&&c in l&&(l=this.h,c in l&&delete l[c])),this.j=new ui(this)}R(Nt,Ke),Nt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Nt.prototype.close=function(){mc(this.g)},Nt.prototype.o=function(l){var c=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=tc(l),l=d);c.i.push(new DS(c.Ya++,l)),c.G==3&&wl(c)},Nt.prototype.N=function(){this.g.l=null,delete this.j,mc(this.g),delete this.g,Nt.aa.N.call(this)};function Om(l){rc.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var c=l.__sm__;if(c){e:{for(const d in c){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,c=c!==null&&l in c?c[l]:void 0),this.data=c}else this.data=l}R(Om,rc);function Dm(){ic.call(this),this.status=1}R(Dm,ic);function ui(l){this.g=l}R(ui,xm),ui.prototype.ua=function(){et(this.g,"a")},ui.prototype.ta=function(l){et(this.g,new Om(l))},ui.prototype.sa=function(l){et(this.g,new Dm)},ui.prototype.ra=function(){et(this.g,"b")},Nt.prototype.send=Nt.prototype.o,Nt.prototype.open=Nt.prototype.m,Nt.prototype.close=Nt.prototype.close,oc.NO_ERROR=0,oc.TIMEOUT=8,oc.HTTP_ERROR=6,xS.COMPLETE="complete",kS.EventType=ds,ds.OPEN="a",ds.CLOSE="b",ds.ERROR="c",ds.MESSAGE="d",Ke.prototype.listen=Ke.prototype.K,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha}).apply(typeof Vl<"u"?Vl:typeof self<"u"?self:typeof window<"u"?window:{});const av="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ol="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Pu("@firebase/firestore");function Ht(t,...e){if(Zi.logLevel<=te.DEBUG){const n=e.map(kp);Zi.debug(`Firestore (${ol}): ${t}`,...n)}}function eS(t,...e){if(Zi.logLevel<=te.ERROR){const n=e.map(kp);Zi.error(`Firestore (${ol}): ${t}`,...n)}}function kO(t,...e){if(Zi.logLevel<=te.WARN){const n=e.map(kp);Zi.warn(`Firestore (${ol}): ${t}`,...n)}}function kp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t="Unexpected state"){const e=`FIRESTORE (${ol}) INTERNAL ASSERTION FAILED: `+t;throw eS(e),new Error(e)}function io(t,e){t||Rp()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class mt extends an{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class NO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PO{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){io(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new so;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new so,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{Ht("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(Ht("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new so)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Ht("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(io(typeof r.accessToken=="string"),new tS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return io(e===null||typeof e=="string"),new it(e)}}class AO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new AO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){io(this.o===void 0);const r=s=>{s.error!=null&&Ht("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Ht("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Ht("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Ht("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(io(typeof n.token=="string"),this.R=n.token,new OO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function LO(t){return t.name==="IndexedDbTransactionError"}class lu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var uv,X;(X=uv||(uv={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new ZE([4294967295,4294967295],0);function lh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&Ht("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new so,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Np(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new mt(pt.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var cv,hv;(hv=cv||(cv={})).ea="default",hv.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MO(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=new Map;function UO(t,e,n,r){if(e===!0&&r===!0)throw new mt(pt.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function FO(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Rp()}function jO(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new mt(pt.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=FO(t);throw new mt(pt.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new mt(pt.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new mt(pt.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}UO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=MO((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new mt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new mt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new mt(pt.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nS{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fv({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new mt(pt.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new mt(pt.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fv(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RO;switch(r.type){case"firstParty":return new xO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new mt(pt.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dv.get(n);r&&(Ht("ComponentProvider","Removing Datastore"),dv.delete(n),r.terminate())}(this),Promise.resolve()}}function BO(t,e,n,r={}){var i;const s=(t=jO(t,nS))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&kO("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=it.MOCK_USER;else{a=bf(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new mt(pt.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(h)}t._authCredentials=new NO(new tS(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new bO(this,"async_queue_retry"),this.Vu=()=>{const r=lh();r&&Ht("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new so;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!LO(e))throw e;Ht("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw eS("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Np.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&Rp()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class zO extends nS{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new pv,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new pv(e),this._firestoreClient=void 0,await e}}}function $O(t,e){const n=typeof t=="object"?t:Au(),r=typeof t=="string"?t:"(default)",i=Yo(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Lf("firestore");s&&BO(i,...s)}return i}(function(e,n=!0){(function(i){ol=i})(kr),_r(new An("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new zO(new PO(r.getProvider("auth-internal")),new DO(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new mt(pt.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lu(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Lt(av,"4.7.3",e),Lt(av,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS="firebasestorage.googleapis.com",iS="storageBucket",VO=2*60*1e3,WO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends an{constructor(e,n,r=0){super(ah(e),`Firebase Storage: ${n} (${ah(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ah(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function ah(t){return"storage/"+t}function Pp(){const t="An unknown error occurred, please check the error payload for server response.";return new Te(Ie.UNKNOWN,t)}function HO(t){return new Te(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function GO(t){return new Te(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function KO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(Ie.UNAUTHENTICATED,t)}function qO(){return new Te(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YO(t){return new Te(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function QO(){return new Te(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function XO(){return new Te(Ie.CANCELED,"User canceled the upload/download.")}function JO(t){return new Te(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function ZO(t){return new Te(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function eD(){return new Te(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+iS+"' property when initializing the app?")}function tD(){return new Te(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function nD(){return new Te(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rD(t){return new Te(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ad(t){return new Te(Ie.INVALID_ARGUMENT,t)}function sS(){return new Te(Ie.APP_DELETED,"The Firebase app was deleted.")}function iD(t){return new Te(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function oo(t,e){return new Te(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ms(t){throw new Te(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(r.path==="")return r;throw ZO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const p="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",k=new RegExp(`^https?://${f}/${p}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},A=n===rS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,L="([^?#]*)",C=new RegExp(`^https?://${A}/${i}/${L}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:k,indices:R,postModify:h},{regex:C,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<I.length;O++){const M=I[O],U=M.regex.exec(e);if(U){const w=U[M.indices.bucket];let _=U[M.indices.path];_||(_=""),r=new ot(w,_),M.postModify(r);break}}if(r==null)throw JO(e);return r}}class sD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let h=!1;function p(...L){h||(h=!0,e.apply(null,L))}function f(L){i=setTimeout(()=>{i=null,t(k,u())},L)}function m(){s&&clearTimeout(s)}function k(L,...C){if(h){m();return}if(L){m(),p.call(null,L,...C);return}if(u()||o){m(),p.call(null,L,...C);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let R=!1;function A(L){R||(R=!0,m(),!h&&(i!==null?(L||(a=2),clearTimeout(i),f(0)):L||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,A(!0)},n),A}function lD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aD(t){return t!==void 0}function uD(t){return typeof t=="object"&&!Array.isArray(t)}function Ap(t){return typeof t=="string"||t instanceof String}function mv(t){return xp()&&t instanceof Blob}function xp(){return typeof Blob<"u"}function xd(t,e,n,r){if(r<e)throw Ad(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ad(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function oS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Vr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vr||(Vr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e,n,r,i,s,o,a,u,h,p,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,R)=>{this.resolve_=k,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Wl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Vr.NO_ERROR,u=s.getStatus();if(!a||cD(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Vr.ABORT;r(!1,new Wl(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new Wl(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());aD(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Pp();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?sS():XO();o(u)}else{const u=QO();o(u)}};this.canceled_?n(!1,new Wl(!1,null,!0)):this.backoffId_=oD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&lD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Wl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fD(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pD(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mD(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gD(t,e,n,r,i,s,o=!0){const a=oS(t.urlParams),u=t.url+a,h=Object.assign({},t.headers);return pD(h,e),dD(h,n),fD(h,s),mD(h,r),new hD(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function vD(...t){const e=_D();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xp())return new Blob(t);throw new Te(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function yD(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(t){if(typeof atob>"u")throw rD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class uh{constructor(e,n){this.data=e,this.contentType=n||null}}function ED(t,e){switch(t){case nn.RAW:return new uh(lS(e));case nn.BASE64:case nn.BASE64URL:return new uh(aS(t,e));case nn.DATA_URL:return new uh(CD(e),ID(e))}throw Pp()}function lS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function SD(t){let e;try{e=decodeURIComponent(t)}catch{throw oo(nn.DATA_URL,"Malformed data URL.")}return lS(e)}function aS(t,e){switch(t){case nn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw oo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case nn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw oo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=wD(e)}catch(i){throw i.message.includes("polyfill")?i:oo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class uS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw oo(nn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=TD(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function CD(t){const e=new uS(t);return e.base64?aS(nn.BASE64,e.rest):SD(e.rest)}function ID(t){return new uS(t).contentType}function TD(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n){let r=0,i="";mv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(mv(this.data_)){const r=this.data_,i=yD(r,e,n);return i===null?null:new Qn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Qn(r,!0)}}static getBlob(...e){if(xp()){const n=e.map(r=>r instanceof Qn?r.data_:r);return new Qn(vD.apply(null,n))}else{const n=e.map(o=>Ap(o)?ED(nn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Qn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t){let e;try{e=JSON.parse(t)}catch{return null}return uD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kD(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RD(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function cS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ND(t,e){return e}class nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ND}}let Hl=null;function PD(t){return!Ap(t)||t.length<2?t:cS(t)}function hS(){if(Hl)return Hl;const t=[];t.push(new nt("bucket")),t.push(new nt("generation")),t.push(new nt("metageneration")),t.push(new nt("name","fullPath",!0));function e(s,o){return PD(o)}const n=new nt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new nt("size");return i.xform=r,t.push(i),t.push(new nt("timeCreated")),t.push(new nt("updated")),t.push(new nt("md5Hash",null,!0)),t.push(new nt("cacheControl",null,!0)),t.push(new nt("contentDisposition",null,!0)),t.push(new nt("contentEncoding",null,!0)),t.push(new nt("contentLanguage",null,!0)),t.push(new nt("contentType",null,!0)),t.push(new nt("metadata","customMetadata",!0)),Hl=t,Hl}function AD(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new ot(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function xD(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return AD(r,t),r}function dS(t,e,n){const r=Op(e);return r===null?null:xD(t,r,n)}function OD(t,e,n,r){const i=Op(e);if(i===null||!Ap(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const p=t.bucket,f=t.fullPath,m="/b/"+o(p)+"/o/"+o(f),k=ll(m,n,r),R=oS({alt:"media",token:h});return k+R})[0]}function DD(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="prefixes",_v="items";function LD(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[gv])for(const i of n[gv]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new ot(e,s));r.prefixes.push(o)}if(n[_v])for(const i of n[_v]){const s=t._makeStorageReference(new ot(e,i.name));r.items.push(s)}return r}function bD(t,e,n){const r=Op(n);return r===null?null:LD(t,e,r)}class Hu{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t){if(!t)throw Pp()}function MD(t,e){function n(r,i){const s=dS(t,i,e);return Dp(s!==null),s}return n}function UD(t,e){function n(r,i){const s=bD(t,e,i);return Dp(s!==null),s}return n}function FD(t,e){function n(r,i){const s=dS(t,i,e);return Dp(s!==null),OD(s,i,t.host,t._protocol)}return n}function Lp(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=qO():i=KO():n.getStatus()===402?i=GO(t.bucket):n.getStatus()===403?i=YO(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function fS(t){const e=Lp(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=HO(t.path)),s.serverResponse=i.serverResponse,s}return n}function jD(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=ll(o,t.host,t._protocol),u="GET",h=t.maxOperationRetryTime,p=new Hu(a,u,UD(t,e.bucket),h);return p.urlParams=s,p.errorHandler=Lp(e),p}function BD(t,e,n){const r=e.fullServerUrl(),i=ll(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Hu(i,s,FD(t,n),o);return a.errorHandler=fS(e),a}function zD(t,e){const n=e.fullServerUrl(),r=ll(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(u,h){}const a=new Hu(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=fS(e),a}function $D(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function VD(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=$D(null,e)),r}function WD(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let O=0;O<2;O++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const h=VD(e,r,i),p=DD(h,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,m=`\r
--`+u+"--",k=Qn.getBlob(f,r,m);if(k===null)throw tD();const R={name:h.fullPath},A=ll(s,t.host,t._protocol),L="POST",C=t.maxUploadRetryTime,y=new Hu(A,L,MD(t,n),C);return y.urlParams=R,y.headers=o,y.body=k.uploadData(),y.errorHandler=Lp(e),y}class HD{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ms("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ms("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ms("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ms("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ms("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class GD extends HD{initXhr(){this.xhr_.responseType="text"}}function Gu(){return new GD}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ei(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cS(this._location.path)}get storage(){return this._service}get parent(){const e=kD(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new ei(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw iD(e)}}function KD(t,e,n){t._throwIfRoot("uploadBytes");const r=WD(t.storage,t._location,hS(),new Qn(e,!0),n);return t.storage.makeRequestWithTokens(r,Gu).then(i=>({metadata:i,ref:t}))}function qD(t){const e={prefixes:[],items:[]};return pS(t,e).then(()=>e)}async function pS(t,e,n){const i=await YD(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await pS(t,e,i.nextPageToken)}function YD(t,e){e!=null&&typeof e.maxResults=="number"&&xd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=jD(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Gu)}function QD(t){t._throwIfRoot("getDownloadURL");const e=BD(t.storage,t._location,hS());return t.storage.makeRequestWithTokens(e,Gu).then(n=>{if(n===null)throw nD();return n})}function XD(t){t._throwIfRoot("deleteObject");const e=zD(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Gu)}function JD(t,e){const n=RD(t._location.path,e),r=new ot(t._location.bucket,n);return new ei(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZD(t){return/^[A-Za-z]+:\/\//.test(t)}function e2(t,e){return new ei(t,e)}function mS(t,e){if(t instanceof bp){const n=t;if(n._bucket==null)throw eD();const r=new ei(n,n._bucket);return e!=null?mS(r,e):r}else return e!==void 0?JD(t,e):t}function t2(t,e){if(e&&ZD(e)){if(t instanceof bp)return e2(t,e);throw Ad("To use ref(service, url), the first argument must be a Storage instance.")}else return mS(t,e)}function vv(t,e){const n=e==null?void 0:e[iS];return n==null?null:ot.makeFromBucketSpec(n,t)}function n2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:bf(i,t.app.options.projectId))}class bp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=rS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=VO,this._maxUploadRetryTime=WO,this._requests=new Set,i!=null?this._bucket=ot.makeFromBucketSpec(i,this._host):this._bucket=vv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=vv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ei(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new sD(sS());{const o=gD(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const yv="@firebase/storage",wv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="storage";function Ev(t,e,n){return t=be(t),KD(t,e,n)}function _S(t){return t=be(t),qD(t)}function r2(t){return t=be(t),QD(t)}function i2(t){return t=be(t),XD(t)}function Ri(t,e){return t=be(t),t2(t,e)}function lo(t=Au(),e){t=be(t);const r=Yo(t,gS).getImmediate({identifier:e}),i=Lf("storage");return i&&s2(r,...i),r}function s2(t,e,n,r={}){n2(t,e,n,r)}function o2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new bp(n,r,i,e,kr)}function l2(){_r(new An(gS,o2,"PUBLIC").setMultipleInstances(!0)),Lt(yv,wv,""),Lt(yv,wv,"esm2017")}l2();var a2="firebase",u2="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt(a2,u2,"app");const c2={apiKey:"AIzaSyByd9TQ9IMR6z6Qx2ippm_doqDfCQoGI40",authDomain:"dvcs-43628.firebaseapp.com",databaseURL:"https://dvcs-43628-default-rtdb.europe-west1.firebasedatabase.app",projectId:"dvcs-43628",storageBucket:"dvcs-43628.appspot.com",messagingSenderId:"1050171742403",appId:"1:1050171742403:web:9eca0cd7212f5fb3f02a76"},Ku=iw(c2),au=Ki(Ku),Od=Er(Ku);$O(Ku);lo(Ku);function h2({onLogin:t}){const[e,n]=b.useState(""),[r,i]=b.useState(""),[s,o]=b.useState(null),a=ku();b.useEffect(()=>{const h=localStorage.getItem("email"),p=localStorage.getItem("password");h&&p&&v_(au,h,p).then(f=>{t(f.user.email),a("/dashboard")}).catch(f=>{console.error("Auto-login failed:",f),localStorage.removeItem("email"),localStorage.removeItem("password")})},[a,t]);const u=async h=>{h.preventDefault();try{const p=await v_(au,e,r);localStorage.setItem("email",e),localStorage.setItem("password",r),t(p.user.email),a("/dashboard/profile")}catch(p){o("Login failed: "+p.message)}};return x.jsxs("div",{children:[x.jsx("h1",{className:"login_header",children:"DVCS SERVER"}),x.jsx("h2",{className:"login_subheader",children:"Login"}),x.jsxs("form",{onSubmit:u,children:[x.jsx("input",{className:"login-input",type:"email",placeholder:"Email",value:e,onChange:h=>n(h.target.value)}),x.jsx("input",{className:"login-input",type:"password",placeholder:"Password",value:r,onChange:h=>i(h.target.value)}),s&&x.jsx("p",{className:"error-message",children:s}),x.jsx("button",{className:"login-button",type:"submit",children:"Login"})]}),x.jsx("button",{className:"register-button",onClick:()=>a("/register"),children:"Register"})]})}function d2(){const[t,e]=b.useState(""),[n,r]=b.useState(""),[i,s]=b.useState(""),[o,a]=b.useState(null),u=ku(),h=async f=>{f.preventDefault();try{const k=(await ZR(au,t,i)).user,R=Ee(Od,`users/${k.uid}`);await tr(R,{uid:k.uid,username:n,email:t}),console.log("User registered:",k),u("/")}catch(m){a("Registration failed: "+m.message)}},p=()=>{u("/")};return x.jsxs("div",{className:"registration-container",children:[x.jsxs("div",{children:[x.jsx("h1",{className:"registration-header",children:"DVCS SERVER"}),x.jsx("h2",{className:"registration-subheader",children:"Registration"}),x.jsxs("form",{className:"registration-form",onSubmit:h,children:[x.jsx("input",{className:"registration-input",type:"text",placeholder:"Username",value:n,onChange:f=>r(f.target.value)}),x.jsx("input",{className:"registration-input",type:"email",placeholder:"Email",value:t,onChange:f=>e(f.target.value)}),x.jsx("input",{className:"registration-input",type:"password",placeholder:"Password",value:i,onChange:f=>s(f.target.value)}),o&&x.jsx("p",{className:"error-message",children:o}),x.jsx("button",{className:"registration-button",type:"submit",children:"Register"})]})]}),x.jsx("div",{children:x.jsx("button",{className:"return-button",onClick:p,children:"Return to Login"})})]})}function Mp({repoId:t}){const[e,n]=b.useState(""),[r,i]=b.useState([]),[s,o]=b.useState([]),[a,u]=b.useState(""),[h,p]=b.useState(""),[f,m]=b.useState(""),[k,R]=b.useState(""),A=lo(),L=Er();b.useEffect(()=>{if(!t)return;const M=Ee(L,`repositories/${t}`);ou(M,w=>{const _=w.val();_&&_.repositoryName&&n(_.repositoryName)}),(()=>{const w=Ee(L,`repositories/${t}/commits`);ou(w,_=>{const v=_.val();if(!v)return;const E=Object.entries(v).reduce((T,[N,S])=>!T||new Date(S.timestamp)>new Date(T.timestamp)?{id:N,...S}:T,null);if(E){R(E.message);const T=`databases/${t}/commits/${E.id}`;m(T),p(T),I(T)}})})()},[t,L,A]);const C=async M=>{const U=Ri(A,`${h}/${M}`);try{const w=await r2(U),_=await fetch(w);u(await _.text())}catch(w){console.error("Error fetching file:",w)}},y=M=>{const U=`${h}/${M}`;p(U),u(""),I(U)},I=async M=>{try{const U=await _S(Ri(A,M));i(U.prefixes.map(w=>w.name)),o(U.items.map(w=>w.name))}catch(U){console.error("Error listing contents:",U)}},O=M=>{const U=[f,...h.replace(f,"").split("/").slice(1,M+1)].join("/");p(U),u(""),I(U)};return x.jsxs("div",{className:"repoDetails_wrapper",children:[x.jsxs("h2",{className:"repoDetails_subheader",children:["Repository: ",e]})," ",x.jsx("h3",{className:"repoDetails_header",children:"Path Navigation"}),x.jsx("div",{className:"repoDetails_container",children:[k,...h.replace(f,"").split("/").slice(1)].map((M,U)=>x.jsxs("span",{className:"repoDetails_index",children:[x.jsx("button",{className:"repoDetails_buttonIndex",onClick:()=>O(U),children:M}),U<h.split("/").length-1&&" / "]},U))}),x.jsx("h3",{className:"repoDetails_subheader",children:"Folders"}),x.jsx("ul",{className:"repoDetails_mapContainer",children:r.map(M=>x.jsx("li",{className:"repoDetails_keyContainer",children:x.jsx("button",{className:"repoDetails_buttonOpenFolder",onClick:()=>y(M),children:M})},M))}),x.jsx("h3",{className:"repoDetails_subheader",children:"Files"}),x.jsx("ul",{className:"repoDetails_mapContainer",children:s.map(M=>x.jsx("li",{className:"repoDetails_keyContainer",children:x.jsx("button",{className:"repoDetails_buttonOpenFolder",onClick:()=>C(M),children:M})},M))}),x.jsx("h3",{className:"repoDetails_subheader",children:"File Content"}),x.jsx("pre",{className:"repoDetails_fileContent",children:a})]})}function f2({user:t,onLogout:e}){const[n,r]=b.useState(t),[i,s]=b.useState(null),o=Ee(Od,`users/${t.uid}/username`);console.log(o),b.useEffect(()=>{(async()=>{try{const p=au.currentUser;if(p){const f=p.uid;console.log("Fetching username for user ID:",f);const m=Ee(Od,`users/${f}/username`),k=await Bo(m);if(k.exists()){const R=k.val();r(R)}else console.log("No username found for this user.")}else console.error("No current user found. Please log in.")}catch(p){console.error("Error fetching username:",p)}})()},[]);const a=()=>{localStorage.removeItem("email"),localStorage.removeItem("password"),e()},u=h=>{s(h)};return x.jsxs("div",{className:"header",children:[x.jsxs("div",{className:"navbar",children:[x.jsxs("h3",{className:"header_h3",children:["Welcome ",x.jsx("span",{className:"user",children:n})]}),x.jsx("nav",{className:"nav",children:x.jsxs("ul",{className:"ul",children:[x.jsx("li",{className:"li",children:x.jsx(Gc,{className:"link",to:"/dashboard/profile",onClick:()=>s(null),children:"Profile"})}),x.jsx("li",{className:"li",children:x.jsx(Gc,{className:"link",to:"/dashboard/search",onClick:()=>s(null),children:"Search"})}),x.jsx("li",{className:"li",children:x.jsx(Gc,{className:"link",to:"/dashboard/messages",onClick:()=>s(null),children:"Messages"})}),x.jsx("li",{className:"li",children:x.jsx("button",{className:"buton_logout",onClick:a,children:"Log Out"})})]})})]}),x.jsx("div",{className:"content",children:i?x.jsx(Mp,{repoId:i}):x.jsx(m1,{context:{onSelectRepository:u}})})]})}var ze=[];for(var ch=0;ch<256;++ch)ze.push((ch+256).toString(16).slice(1));function p2(t,e=0){return(ze[t[e+0]]+ze[t[e+1]]+ze[t[e+2]]+ze[t[e+3]]+"-"+ze[t[e+4]]+ze[t[e+5]]+"-"+ze[t[e+6]]+ze[t[e+7]]+"-"+ze[t[e+8]]+ze[t[e+9]]+"-"+ze[t[e+10]]+ze[t[e+11]]+ze[t[e+12]]+ze[t[e+13]]+ze[t[e+14]]+ze[t[e+15]]).toLowerCase()}var Gl,m2=new Uint8Array(16);function g2(){if(!Gl&&(Gl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Gl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Gl(m2)}var _2=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Sv={randomUUID:_2};function Br(t,e,n){if(Sv.randomUUID&&!e&&!t)return Sv.randomUUID();t=t||{};var r=t.random||(t.rng||g2)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,p2(r)}function v2({onClose:t,repositoryData:e}){const[n,r]=b.useState((e==null?void 0:e.repositoryName)||""),[i,s]=b.useState((e==null?void 0:e.isPublic)??!0),[o,a]=b.useState(e!=null&&e.cooperators?Object.keys(e.cooperators).join(", "):""),u=Er(),h=Ki(),p=async()=>{const m=o.split(",").map(C=>C.trim()).filter(Boolean),k={};for(const C of m){const y=Ee(u,"users"),I=await Bo(y);let O=!1;I.forEach(M=>{if(M.val().username===C){const w=M.key;k[w]={accessLevel:"pending",invitedBy:h.currentUser.uid};const _=Br(),v=Ee(u,`users/${w}/messages/${_}`);tr(v,{fromUser:h.currentUser.uid,repositoryID:Br(),repositoryName:n,status:"pending",message:`You have been invited to the repository ${n} as a cooperator. Please accept the invitation to gain access.`,timestamp:new Date().toISOString()}),O=!0}}),O||alert(`User ${C} does not exist.`)}const R=Br(),A={repositoryName:n,isPublic:i,cooperators:k,owner:h.currentUser.uid,createdAt:new Date().toISOString()},L=Ee(u,`repositories/${R}`);await tr(L,A),t()},f=async()=>{if(!e||!e.id){console.error("No repository data provided for update.");return}const m={repositoryName:n,isPublic:i},k=Ee(u,`repositories/${e.id}`);await ca(k,m),t()};return x.jsxs("div",{className:"newRepoPopup",children:[x.jsx("h3",{className:"newRepoPopup_header",children:e?"Edit Repository":"New Repository"}),x.jsx("input",{className:"newRepoPopup_inputText",type:"text",placeholder:"Repository Name",value:n,onChange:m=>r(m.target.value)}),x.jsxs("div",{className:"newRepoPopup_div",children:[x.jsxs("label",{className:"newRepoPopup_label",children:[x.jsx("input",{className:"newRepoPopup_inputRadio",type:"radio",name:"visibility",value:"public",checked:i,onChange:()=>s(!0)}),"Public"]}),x.jsxs("label",{className:"newRepoPopup_label",children:[x.jsx("input",{className:"newRepoPopup_inputRadio",type:"radio",name:"visibility",value:"private",checked:!i,onChange:()=>s(!1)}),"Private"]})]}),x.jsx("input",{className:"newRepoPopup_inputText",type:"text",placeholder:"Cooperators (comma-separated)",value:o,onChange:m=>a(m.target.value)}),x.jsx("button",{className:"newRepoPopup_create",onClick:e?f:p,children:e?"Update Repository":"Create Repository"}),x.jsx("button",{className:"newRepoPopup_close",onClick:t,children:"Close"})]})}function y2({onClose:t,onDelete:e,repoName:n}){const[r,i]=b.useState(""),s=()=>{r===n?e():alert("The repository name did not match. Deletion canceled.")};return x.jsxs("div",{className:"repoDelete_wrapper",children:[x.jsx("h3",{className:"repoDelete_header",children:"Delete Repository"}),x.jsxs("p",{className:"repoDelete_info",children:["To delete this repository, type its name: ",x.jsx("strong",{className:"repoDelete_name",children:n})]}),x.jsx("input",{className:"repoDelete_input",type:"text",placeholder:"Repository Name",value:r,onChange:o=>i(o.target.value)}),x.jsx("button",{className:"repoDelete_buttonDelete",onClick:s,children:"Delete"}),x.jsx("button",{className:"repoDelete_buttonClose",onClick:t,children:"Close"})]})}function w2({onClose:t,onSave:e}){const[n,r]=b.useState(""),i=()=>{n.trim()?(e(n),t()):alert("Please enter a commit message.")};return x.jsx("div",{className:"newCommitPopup_wrapper",children:x.jsxs("div",{className:"newCommitPopup_container",children:[x.jsx("h3",{className:"newCommitPopup_header",children:"Create a New Commit"}),x.jsx("input",{className:"newCommitPopup_input",type:"text",placeholder:"Enter commit message",value:n,onChange:s=>r(s.target.value)}),x.jsxs("div",{className:"newCommitPopup_bottonsContainer",children:[x.jsx("button",{className:"newCommitPopup_buttonSave",onClick:i,children:"Save Commit"}),x.jsx("button",{className:"newCommitPopup_buttonCancel",onClick:t,children:"Cancel"})]})]})})}function E2({onClose:t,onSendMessage:e,repositoryID:n,repositoryName:r}){const[i,s]=b.useState(""),o=()=>{e(i,n,r),t()};return x.jsxs("div",{className:"messagePopup_wrapper",children:[x.jsx("h3",{className:"messagePopup_header",children:"Send Repository Access Invitation"}),x.jsx("input",{className:"messagePopup_input",type:"text",placeholder:"Enter recipient username",value:i,onChange:a=>s(a.target.value)}),x.jsx("button",{className:"messagePopup_buttonSend",onClick:o,children:"Send Message"}),x.jsx("button",{className:"messagePopup_buttonClose",onClick:t,children:"Close"})]})}function S2(){const[t,e]=b.useState(!1),[n,r]=b.useState([]),[i,s]=b.useState(null),[o,a]=b.useState(!1),[u,h]=b.useState(!1),[p,f]=b.useState(!1),m=Ki(),k=Er(),{onSelectRepository:R}=t1();b.useEffect(()=>{const v=m.currentUser;if(v){const E=Ee(k,"repositories");ou(E,T=>{const N=T.val()||{},S=Object.keys(N).filter(ie=>{const ce=N[ie];return ce.owner===v.uid||ce.cooperators&&ce.cooperators[v.uid]&&(ce.cooperators[v.uid].accessLevel==="full"||ce.cooperators[v.uid].accessLevel==="true")}).map(ie=>({id:ie,...N[ie]}));r(S)})}},[m.currentUser,k]);const A=async(v,E)=>{try{console.log("Blob created:",v);const T=lo(),N=Ri(T,E);console.log("Uploading Blob to Firebase Storage at path:",E),await Ev(N,v),console.log("Blob uploaded successfully to Firebase Storage at path:",E)}catch(T){console.error("Error uploading Blob to Firebase Storage:",T)}},L=async v=>{const E=m.currentUser;if(!E){console.error("User not authenticated.");return}const T=Br(),N={...v,owner:E.uid,createdAt:new Date().toISOString(),isPublic:!0};try{console.log("Attempting to create repository...");const S=Ee(k,`repositories/${T}`);await tr(S,N),console.log(`Repository created with ID: ${T}`),console.log("Attempting to create first commit...");const ie=Br(),ce={files:{0:"ReadMe.txt"},message:"first commit",timestamp:new Date().toISOString(),userID:E.uid},dt=Ee(k,`repositories/${T}/commits/${ie}`);await tr(dt,ce),console.log(`First commit added to repository: ${T}`),console.log("Uploading ReadMe.txt to Firebase Storage...");const ke=new Blob(["This is the initial commit for the repository."],{type:"text/plain"});await A(ke,`repositories/${T}/commits/${ie}/ReadMe.txt`),console.log("ReadMe.txt uploaded successfully.")}catch(S){console.error("Error creating repository or first commit:",S)}},C=async(v,E,T)=>{const N=m.currentUser;if(!N){console.error("User not authenticated.");return}const S=Br(),ie={message:E,timestamp:new Date().toISOString(),userID:N.uid,files:T.map(ce=>ce.name||"ReadMe.txt")};try{const ce=Ee(k,`repositories/${v}/commits/${S}`);await tr(ce,ie),console.log(`Commit added to database with ID: ${S}`);const dt=lo(),ke=Ri(dt,`databases/${v}/commits/${S}`);for(const z of T){const V=Ri(ke,z.name||"ReadMe.txt");await Ev(V,z),console.log(`Uploaded file to Storage: ${z.name||"ReadMe.txt"}`)}}catch(ce){console.error("Error creating commit:",ce)}},y=v=>{s(v),h(!0)},I=v=>{i&&C(i.id,v,[new Blob(["Commit file content"],{type:"text/plain"})]),h(!1)},O=v=>{s(v),e(!0)},M=v=>{s(v),a(!0)},U=async()=>{if(!i)return;const v=lo(),E=Ri(v,`databases/${i.id}`),T=Ee(k,`repositories/${i.id}`);try{const N=async S=>{const ie=await _S(S),ce=ie.items.map(ke=>i2(ke));await Promise.all(ce);const dt=ie.prefixes.map(ke=>N(ke));await Promise.all(dt)};await N(E),await mO(T),alert("Repository and all its commits deleted successfully from both Realtime Database and Storage.")}catch(N){console.error("Error deleting repository:",N),alert("There was an error deleting the repository.")}finally{a(!1),s(null)}},w=async(v,E,T)=>{const N=Ki(),S=Er(),ie=N.currentUser.uid,ce=Ee(S,`users/${ie}`),dt=await Bo(ce);let ke="Unknown User";dt.exists()&&(ke=dt.val().username||ke);const z=Ee(S,"users"),V=await Bo(z);let G=null;if(V.exists()&&V.forEach(me=>{const Rt=me.val();console.log(`Checking user: ${Rt.email}`),Rt.email===v&&(G=me.key)}),!G){alert("Recipient user not found.");return}const he=Br(),ne=Ee(S,`users/${G}/messages/${he}`);await tr(ne,{fromUser:ie,repositoryID:E,repositoryName:T,status:0,message:`You've been invited to view and collaborate on the repository: ${T} by user: ${ke}.`,timestamp:new Date().toISOString()}),console.log(`Message sent to ${v} for repository access.`)},_=v=>{s(v),f(!0)};return x.jsxs("div",{className:"profile_container",children:[x.jsx("button",{className:"addRepo_button",onClick:()=>{e(!0),s(null)},children:"New Repository"}),x.jsxs("div",{className:"profile",children:[x.jsx("h1",{className:"profile_header",children:"Repositories"}),x.jsx("div",{className:"repositories_list",children:n.length>0?x.jsx("ul",{children:n.map(v=>x.jsxs("li",{className:"li_horizontal",children:[x.jsx("button",{className:"repoName_button",onClick:()=>R(v.id),children:v.repositoryName}),m.currentUser.uid===v.owner?x.jsxs(x.Fragment,{children:[x.jsx("button",{className:"usage_button",onClick:()=>O(v),children:"Edit"}),x.jsx("button",{className:"usage_button",onClick:()=>M(v),children:"Delete"}),x.jsx("button",{className:"usage_button",onClick:()=>y(v),children:"NewCommit"}),x.jsx("button",{className:"usage_button",onClick:()=>_(v),children:"AddUserToRepo"})]}):v.cooperators&&v.cooperators[m.currentUser.uid]?x.jsx("button",{className:"usage_button",onClick:()=>y(v),children:"New Commit"}):null,x.jsx("ul",{className:"commit_direction",children:v.commits&&Object.entries(v.commits).map(([E,T])=>x.jsx("li",{className:"li_nodecoration",children:x.jsxs("span",{className:"commit",children:[T.message," - ",new Date(T.timestamp).toLocaleString()]})},E))})]},v.id))}):x.jsx("p",{className:"error",children:"No repositories created yet."})})]}),t&&x.jsx(v2,{onClose:()=>e(!1),onSave:L,repositoryData:i}),o&&x.jsx(y2,{onClose:()=>a(!1),onDelete:U,repoName:i.repositoryName}),u&&x.jsx(w2,{onClose:()=>h(!1),onSave:I}),p&&i&&x.jsx(E2,{onClose:()=>f(!1),onSendMessage:w,repositoryID:i.id,repositoryName:i.repositoryName})]})}function C2(){const[t,e]=b.useState([]),[n,r]=b.useState([]),[i,s]=b.useState(""),[o,a]=b.useState(null),u=Er();b.useEffect(()=>{const f=Ee(u,"repositories");ou(f,m=>{const k=m.val()||{},R=Object.keys(k).map(A=>({id:A,...k[A]})).filter(A=>A.isPublic===!0);e(R),r(R)})},[u]);const h=f=>{const m=f.target.value;if(s(m),m.length>2){const k=t.filter(R=>R.repositoryName.toLowerCase().includes(m.toLowerCase()));r(k)}else r(t)},p=f=>{a(f)};return x.jsxs("div",{className:"search_wrapper",children:[x.jsx("h2",{className:"search_header",children:"Search Public Repositories"}),x.jsx("input",{className:"search_input",type:"text",placeholder:"Search for a repository...",value:i,onChange:h}),x.jsx("ul",{className:"search_container",children:n.length>0?n.map(f=>x.jsx("li",{className:"search_repoKey",children:x.jsx("button",{className:"search_buttonRepoKey",onClick:()=>p(f.id),children:f.repositoryName})},f.id)):x.jsx("p",{className:"search_error",children:"No repositories found."})}),o&&x.jsx(Mp,{repoId:o})]})}function I2(){const[t,e]=b.useState([]),n=Ki(),r=Er();b.useEffect(()=>{(async()=>{const a=n.currentUser,u=Ee(r,`users/${a.uid}/messages`),h=await Bo(u);if(h.exists()){const p=[];h.forEach(f=>{p.push({id:f.key,...f.val()})}),e(p)}})()},[n.currentUser,r]);const i=async o=>{const a=Er(),h=Ki().currentUser.uid,p=Ee(a,`users/${h}/messages/${o.id}`);await ca(p,{status:1});const f=Ee(a,`repositories/${o.repositoryID}/cooperators`);await ca(f,{[h]:{accessLevel:"true",grantedBy:o.fromUser,timestamp:new Date().toISOString()}}),console.log(`Access granted to repository ${o.repositoryName} for user ${h}`)},s=async o=>{const a=Ee(r,`users/${n.currentUser.uid}/messages/${o.id}`);await ca(a,{status:2}),console.log(`Message rejected for repository ${o.repositoryName}`)};return x.jsxs("div",{className:"message_wrapper",children:[x.jsx("h2",{className:"message_header",children:"Messages"}),t.length>0?x.jsx("ul",{className:"message_container",children:t.map(o=>x.jsxs("li",{className:"message_messageWrapper",children:[x.jsx("p",{className:"message_userMessage",children:o.message}),x.jsxs("p",{className:"message_Status",children:["Status: ",o.status===0?"Not Read":o.status===1?"Accepted":"Rejected"]}),o.status===0&&x.jsxs("div",{className:"message_buttonsContainer",children:[x.jsx("button",{className:"message_buttonAccept",onClick:()=>i(o),children:"Accept"}),x.jsx("button",{className:"message_buttonReject",onClick:()=>s(o),children:"Reject"})]})]},o.id))}):x.jsx("p",{className:"message_error",children:"No messages."})]})}function T2(){const[t,e]=b.useState(!1),[n,r]=b.useState(null),i=o=>{e(!0),r(o)},s=()=>{e(!1),r(null)};return x.jsx(I1,{children:x.jsx(_1,{children:t?x.jsxs(x.Fragment,{children:[x.jsxs(Jt,{path:"/dashboard",element:x.jsx(f2,{user:n,onLogout:s}),children:[x.jsx(Jt,{path:"profile",element:x.jsx(S2,{})}),x.jsx(Jt,{path:"search",element:x.jsx(C2,{})}),x.jsx(Jt,{path:"messages",element:x.jsx(I2,{})})]}),x.jsx(Jt,{path:"/repository/:repoId",element:x.jsx(Mp,{})}),x.jsx(Jt,{path:"*",element:x.jsx(qg,{to:"/dashboard/profile"})})]}):x.jsxs(x.Fragment,{children:[x.jsx(Jt,{path:"/",element:x.jsx(h2,{onLogin:i})}),x.jsx(Jt,{path:"/register",element:x.jsx(d2,{})}),x.jsx(Jt,{path:"*",element:x.jsx(qg,{to:"/"})})]})})})}b0(document.getElementById("root")).render(x.jsx(b.StrictMode,{children:x.jsx(T2,{})}));