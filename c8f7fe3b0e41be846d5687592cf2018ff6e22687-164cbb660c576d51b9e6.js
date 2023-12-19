"use strict";(self.webpackChunkgatsby_cv=self.webpackChunkgatsby_cv||[]).push([[317],{2234:function(t,e,n){n.r(e),n.d(e,{default:function(){return Nr}});var i=n(7294),o=n(9163);const s=(0,i.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),r=(0,i.createContext)({}),a=(0,i.createContext)(null),l="undefined"!=typeof document,c=l?i.useLayoutEffect:i.useEffect,h=(0,i.createContext)({strict:!1}),u=t=>t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),d="data-"+u("framerAppearId");function p(t){return"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}function m(t){return"string"==typeof t||Array.isArray(t)}function f(t){return"object"==typeof t&&"function"==typeof t.start}const g=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],y=["initial",...g];function v(t){return f(t.animate)||y.some((e=>m(t[e])))}function b(t){return Boolean(v(t)||t.variants)}function x(t){const{initial:e,animate:n}=function(t,e){if(v(t)){const{initial:e,animate:n}=t;return{initial:!1===e||m(e)?e:void 0,animate:m(n)?n:void 0}}return!1!==t.inherit?e:{}}(t,(0,i.useContext)(r));return(0,i.useMemo)((()=>({initial:e,animate:n})),[w(e),w(n)])}function w(t){return Array.isArray(t)?t.join(" "):t}const P={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},S={};for(const Hr in P)S[Hr]={isEnabled:t=>P[Hr].some((e=>!!t[e]))};const T=(0,i.createContext)({}),k=(0,i.createContext)({}),C=Symbol.for("motionComponentSymbol");function E({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:o,Component:u}){t&&function(t){for(const e in t)S[e]={...S[e],...t[e]}}(t);const m=(0,i.forwardRef)((function(m,f){let g;const y={...(0,i.useContext)(s),...m,layoutId:A(m)},{isStatic:v}=y,b=x(m),w=o(m,v);if(!v&&l){b.visualElement=function(t,e,n,o){const{visualElement:l}=(0,i.useContext)(r),u=(0,i.useContext)(h),p=(0,i.useContext)(a),m=(0,i.useContext)(s).reducedMotion,f=(0,i.useRef)();o=o||u.renderer,!f.current&&o&&(f.current=o(t,{visualState:e,parent:l,props:n,presenceContext:p,blockInitialAnimation:!!p&&!1===p.initial,reducedMotionConfig:m}));const g=f.current;(0,i.useInsertionEffect)((()=>{g&&g.update(n,p)}));const y=(0,i.useRef)(Boolean(n[d]&&!window.HandoffComplete));return c((()=>{g&&(g.render(),y.current&&g.animationState&&g.animationState.animateChanges())})),(0,i.useEffect)((()=>{g&&(g.updateFeatures(),!y.current&&g.animationState&&g.animationState.animateChanges(),y.current&&(y.current=!1,window.HandoffComplete=!0))})),g}(u,w,y,e);const n=(0,i.useContext)(k),o=(0,i.useContext)(h).strict;b.visualElement&&(g=b.visualElement.loadFeatures(y,o,t,n))}return i.createElement(r.Provider,{value:b},g&&b.visualElement?i.createElement(g,{visualElement:b.visualElement,...y}):null,n(u,m,function(t,e,n){return(0,i.useCallback)((i=>{i&&t.mount&&t.mount(i),e&&(i?e.mount(i):e.unmount()),n&&("function"==typeof n?n(i):p(n)&&(n.current=i))}),[e])}(w,b.visualElement,f),w,v,b.visualElement))}));return m[C]=u,m}function A({layoutId:t}){const e=(0,i.useContext)(T).id;return e&&void 0!==t?e+"-"+t:t}function V(t){function e(e,n={}){return E(t(e,n))}if("undefined"==typeof Proxy)return e;const n=new Map;return new Proxy(e,{get:(t,i)=>(n.has(i)||n.set(i,e(i)),n.get(i))})}const M=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function D(t){return"string"==typeof t&&!t.includes("-")&&!!(M.indexOf(t)>-1||/[A-Z]/.test(t))}const L={};const j=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],R=new Set(j);function B(t,{layout:e,layoutId:n}){return R.has(t)||t.startsWith("origin")||(e||void 0!==n)&&(!!L[t]||"opacity"===t)}const F=t=>Boolean(t&&t.getVelocity),I={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},O=j.length;const z=t=>e=>"string"==typeof e&&e.startsWith(t),U=z("--"),N=z("var(--"),W=(t,e)=>e&&"number"==typeof t?e.transform(t):t,H=(t,e,n)=>Math.min(Math.max(n,t),e),$={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},_={...$,transform:t=>H(0,1,t)},X={...$,default:1},Y=t=>Math.round(1e5*t)/1e5,G=/(-)?([\d]*\.?[\d])+/g,q=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Z=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function K(t){return"string"==typeof t}const J=t=>({test:e=>K(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),Q=J("deg"),tt=J("%"),et=J("px"),nt=J("vh"),it=J("vw"),ot={...tt,parse:t=>tt.parse(t)/100,transform:t=>tt.transform(100*t)},st={...$,transform:Math.round},rt={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,size:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,rotate:Q,rotateX:Q,rotateY:Q,rotateZ:Q,scale:X,scaleX:X,scaleY:X,scaleZ:X,skew:Q,skewX:Q,skewY:Q,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:_,originX:ot,originY:ot,originZ:et,zIndex:st,fillOpacity:_,strokeOpacity:_,numOctaves:st};function at(t,e,n,i){const{style:o,vars:s,transform:r,transformOrigin:a}=t;let l=!1,c=!1,h=!0;for(const u in e){const t=e[u];if(U(u)){s[u]=t;continue}const n=rt[u],i=W(t,n);if(R.has(u)){if(l=!0,r[u]=i,!h)continue;t!==(n.default||0)&&(h=!1)}else u.startsWith("origin")?(c=!0,a[u]=i):o[u]=i}if(e.transform||(l||i?o.transform=function(t,{enableHardwareAcceleration:e=!0,allowTransformNone:n=!0},i,o){let s="";for(let r=0;r<O;r++){const e=j[r];void 0!==t[e]&&(s+=`${I[e]||e}(${t[e]}) `)}return e&&!t.z&&(s+="translateZ(0)"),s=s.trim(),o?s=o(t,i?"":s):n&&i&&(s="none"),s}(t.transform,n,h,i):o.transform&&(o.transform="none")),c){const{originX:t="50%",originY:e="50%",originZ:n=0}=a;o.transformOrigin=`${t} ${e} ${n}`}}const lt=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ct(t,e,n){for(const i in e)F(e[i])||B(i,n)||(t[i]=e[i])}function ht(t,e,n){const o={};return ct(o,t.style||{},t),Object.assign(o,function({transformTemplate:t},e,n){return(0,i.useMemo)((()=>{const i=lt();return at(i,e,{enableHardwareAcceleration:!n},t),Object.assign({},i.vars,i.style)}),[e])}(t,e,n)),t.transformValues?t.transformValues(o):o}function ut(t,e,n){const i={},o=ht(t,e,n);return t.drag&&!1!==t.dragListener&&(i.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=!0===t.drag?"none":"pan-"+("x"===t.drag?"y":"x")),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=o,i}const dt=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","ignoreStrict","viewport"]);function pt(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||dt.has(t)}let mt=t=>!pt(t);try{(ft=require("@emotion/is-prop-valid").default)&&(mt=t=>t.startsWith("on")?!pt(t):ft(t))}catch(Wr){}var ft;function gt(t,e,n){return"string"==typeof t?t:et.transform(e+n*t)}const yt={offset:"stroke-dashoffset",array:"stroke-dasharray"},vt={offset:"strokeDashoffset",array:"strokeDasharray"};function bt(t,{attrX:e,attrY:n,attrScale:i,originX:o,originY:s,pathLength:r,pathSpacing:a=1,pathOffset:l=0,...c},h,u,d){if(at(t,c,h,d),u)return void(t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox));t.attrs=t.style,t.style={};const{attrs:p,style:m,dimensions:f}=t;p.transform&&(f&&(m.transform=p.transform),delete p.transform),f&&(void 0!==o||void 0!==s||m.transform)&&(m.transformOrigin=function(t,e,n){return`${gt(e,t.x,t.width)} ${gt(n,t.y,t.height)}`}(f,void 0!==o?o:.5,void 0!==s?s:.5)),void 0!==e&&(p.x=e),void 0!==n&&(p.y=n),void 0!==i&&(p.scale=i),void 0!==r&&function(t,e,n=1,i=0,o=!0){t.pathLength=1;const s=o?yt:vt;t[s.offset]=et.transform(-i);const r=et.transform(e),a=et.transform(n);t[s.array]=`${r} ${a}`}(p,r,a,l,!1)}const xt=()=>({...lt(),attrs:{}}),wt=t=>"string"==typeof t&&"svg"===t.toLowerCase();function Pt(t,e,n,o){const s=(0,i.useMemo)((()=>{const n=xt();return bt(n,e,{enableHardwareAcceleration:!1},wt(o),t.transformTemplate),{...n.attrs,style:{...n.style}}}),[e]);if(t.style){const e={};ct(e,t.style,t),s.style={...e,...s.style}}return s}function St(t=!1){return(e,n,o,{latestValues:s},r)=>{const a=(D(e)?Pt:ut)(n,s,r,e),l=function(t,e,n){const i={};for(const o in t)"values"===o&&"object"==typeof t.values||(mt(o)||!0===n&&pt(o)||!e&&!pt(o)||t.draggable&&o.startsWith("onDrag"))&&(i[o]=t[o]);return i}(n,"string"==typeof e,t),c={...l,...a,ref:o},{children:h}=n,u=(0,i.useMemo)((()=>F(h)?h.get():h),[h]);return(0,i.createElement)(e,{...c,children:u})}}function Tt(t,{style:e,vars:n},i,o){Object.assign(t.style,e,o&&o.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const kt=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ct(t,e,n,i){Tt(t,e,void 0,i);for(const o in e.attrs)t.setAttribute(kt.has(o)?o:u(o),e.attrs[o])}function Et(t,e){const{style:n}=t,i={};for(const o in n)(F(n[o])||e.style&&F(e.style[o])||B(o,t))&&(i[o]=n[o]);return i}function At(t,e){const n=Et(t,e);for(const i in t)if(F(t[i])||F(e[i])){n[-1!==j.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=t[i]}return n}function Vt(t,e,n,i={},o={}){return"function"==typeof e&&(e=e(void 0!==n?n:t.custom,i,o)),"string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e&&(e=e(void 0!==n?n:t.custom,i,o)),e}const Mt=t=>Array.isArray(t),Dt=t=>Boolean(t&&"object"==typeof t&&t.mix&&t.toValue),Lt=t=>Mt(t)?t[t.length-1]||0:t;function jt(t){const e=F(t)?t.get():t;return Dt(e)?e.toValue():e}const Rt=t=>(e,n)=>{const o=(0,i.useContext)(r),s=(0,i.useContext)(a),l=()=>function({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},i,o,s){const r={latestValues:Bt(i,o,s,t),renderState:e()};return n&&(r.mount=t=>n(i,t,r)),r}(t,e,o,s);return n?l():function(t){const e=(0,i.useRef)(null);return null===e.current&&(e.current=t()),e.current}(l)};function Bt(t,e,n,i){const o={},s=i(t,{});for(const d in s)o[d]=jt(s[d]);let{initial:r,animate:a}=t;const l=v(t),c=b(t);e&&c&&!l&&!1!==t.inherit&&(void 0===r&&(r=e.initial),void 0===a&&(a=e.animate));let h=!!n&&!1===n.initial;h=h||!1===r;const u=h?a:r;if(u&&"boolean"!=typeof u&&!f(u)){(Array.isArray(u)?u:[u]).forEach((e=>{const n=Vt(t,e);if(!n)return;const{transitionEnd:i,transition:s,...r}=n;for(const t in r){let e=r[t];if(Array.isArray(e)){e=e[h?e.length-1:0]}null!==e&&(o[t]=e)}for(const t in i)o[t]=i[t]}))}return o}const Ft=t=>t;class It{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const e=this.order.indexOf(t);-1!==e&&(this.order.splice(e,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}const Ot=["prepare","read","update","preRender","render","postRender"];const{schedule:zt,cancel:Ut,state:Nt,steps:Wt}=function(t,e){let n=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},s=Ot.reduce(((t,e)=>(t[e]=function(t){let e=new It,n=new It,i=0,o=!1,s=!1;const r=new WeakSet,a={schedule:(t,s=!1,a=!1)=>{const l=a&&o,c=l?e:n;return s&&r.add(t),c.add(t)&&l&&o&&(i=e.order.length),t},cancel:t=>{n.remove(t),r.delete(t)},process:l=>{if(o)s=!0;else{if(o=!0,[e,n]=[n,e],n.clear(),i=e.order.length,i)for(let n=0;n<i;n++){const i=e.order[n];i(l),r.has(i)&&(a.schedule(i),t())}o=!1,s&&(s=!1,a.process(l))}}};return a}((()=>n=!0)),t)),{}),r=t=>s[t].process(o),a=()=>{const s=performance.now();n=!1,o.delta=i?1e3/60:Math.max(Math.min(s-o.timestamp,40),1),o.timestamp=s,o.isProcessing=!0,Ot.forEach(r),o.isProcessing=!1,n&&e&&(i=!1,t(a))};return{schedule:Ot.reduce(((e,r)=>{const l=s[r];return e[r]=(e,s=!1,r=!1)=>(n||(n=!0,i=!0,o.isProcessing||t(a)),l.schedule(e,s,r)),e}),{}),cancel:t=>Ot.forEach((e=>s[e].cancel(t))),state:o,steps:s}}("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:Ft,!0),Ht={useVisualState:Rt({scrapeMotionValuesFromProps:At,createRenderState:xt,onMount:(t,e,{renderState:n,latestValues:i})=>{zt.read((()=>{try{n.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(Sr){n.dimensions={x:0,y:0,width:0,height:0}}})),zt.render((()=>{bt(n,i,{enableHardwareAcceleration:!1},wt(e.tagName),t.transformTemplate),Ct(e,n)}))}})},$t={useVisualState:Rt({scrapeMotionValuesFromProps:Et,createRenderState:lt})};function _t(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const Xt=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function Yt(t,e="page"){return{point:{x:t[e+"X"],y:t[e+"Y"]}}}const Gt=t=>e=>Xt(e)&&t(e,Yt(e));function qt(t,e,n,i){return _t(t,e,Gt(n),i)}const Zt=(t,e)=>n=>e(t(n)),Kt=(...t)=>t.reduce(Zt);function Jt(t){let e=null;return()=>{const n=()=>{e=null};return null===e&&(e=t,n)}}const Qt=Jt("dragHorizontal"),te=Jt("dragVertical");function ee(t){let e=!1;if("y"===t)e=te();else if("x"===t)e=Qt();else{const t=Qt(),n=te();t&&n?e=()=>{t(),n()}:(t&&t(),n&&n())}return e}function ne(){const t=ee(!0);return!t||(t(),!1)}class ie{constructor(t){this.isMounted=!1,this.node=t}update(){}}function oe(t,e){const n="pointer"+(e?"enter":"leave"),i="onHover"+(e?"Start":"End");return qt(t.current,n,((n,o)=>{if("touch"===n.type||ne())return;const s=t.getProps();t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",e),s[i]&&zt.update((()=>s[i](n,o)))}),{passive:!t.getProps()[i]})}const se=(t,e)=>!!e&&(t===e||se(t,e.parentElement));function re(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Yt(n))}const ae=new WeakMap,le=new WeakMap,ce=t=>{const e=ae.get(t.target);e&&e(t)},he=t=>{t.forEach(ce)};function ue(t,e,n){const i=function({root:t,...e}){const n=t||document;le.has(n)||le.set(n,{});const i=le.get(n),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(he,{root:t,...e})),i[o]}(e);return ae.set(t,n),i.observe(t),()=>{ae.delete(t),i.unobserve(t)}}const de={some:0,all:1};const pe={inView:{Feature:class extends ie{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:e,margin:n,amount:i="some",once:o}=t,s={root:e?e.current:void 0,rootMargin:n,threshold:"number"==typeof i?i:de[i]};return ue(this.node.current,s,(t=>{const{isIntersecting:e}=t;if(this.isInView===e)return;if(this.isInView=e,o&&!e&&this.hasEnteredView)return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);const{onViewportEnter:n,onViewportLeave:i}=this.node.getProps(),s=e?n:i;s&&s(t)}))}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;const{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}(t,e))&&this.startObserver()}unmount(){}}},tap:{Feature:class extends ie{constructor(){super(...arguments),this.removeStartListeners=Ft,this.removeEndListeners=Ft,this.removeAccessibleListeners=Ft,this.startPointerPress=(t,e)=>{if(this.removeEndListeners(),this.isPressing)return;const n=this.node.getProps(),i=qt(window,"pointerup",((t,e)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:i}=this.node.getProps();zt.update((()=>{se(this.node.current,t.target)?n&&n(t,e):i&&i(t,e)}))}),{passive:!(n.onTap||n.onPointerUp)}),o=qt(window,"pointercancel",((t,e)=>this.cancelPress(t,e)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Kt(i,o),this.startPress(t,e)},this.startAccessiblePress=()=>{const t=_t(this.node.current,"keydown",(t=>{if("Enter"!==t.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=_t(this.node.current,"keyup",(t=>{"Enter"===t.key&&this.checkPressEnd()&&re("up",((t,e)=>{const{onTap:n}=this.node.getProps();n&&zt.update((()=>n(t,e)))}))})),re("down",((t,e)=>{this.startPress(t,e)}))})),e=_t(this.node.current,"blur",(()=>{this.isPressing&&re("cancel",((t,e)=>this.cancelPress(t,e)))}));this.removeAccessibleListeners=Kt(t,e)}}startPress(t,e){this.isPressing=!0;const{onTapStart:n,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&zt.update((()=>n(t,e)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!ne()}cancelPress(t,e){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&zt.update((()=>n(t,e)))}mount(){const t=this.node.getProps(),e=qt(this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),n=_t(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Kt(e,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends ie{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(Sr){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Kt(_t(this.node.current,"focus",(()=>this.onFocus())),_t(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends ie{mount(){this.unmount=Kt(oe(this.node,!0),oe(this.node,!1))}unmount(){}}}};function me(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function fe(t,e,n){const i=t.getProps();return Vt(i,e,void 0!==n?n:i.custom,function(t){const e={};return t.values.forEach(((t,n)=>e[n]=t.get())),e}(t),function(t){const e={};return t.values.forEach(((t,n)=>e[n]=t.getVelocity())),e}(t))}let ge=Ft,ye=Ft;const ve=t=>1e3*t,be=t=>t/1e3,xe=!1,we=t=>Array.isArray(t)&&"number"==typeof t[0];function Pe(t){return Boolean(!t||"string"==typeof t&&Te[t]||we(t)||Array.isArray(t)&&t.every(Pe))}const Se=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,Te={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Se([0,.65,.55,1]),circOut:Se([.55,0,1,.45]),backIn:Se([.31,.01,.66,-.59]),backOut:Se([.33,1.53,.69,.99])};function ke(t){if(t)return we(t)?Se(t):Array.isArray(t)?t.map(ke):Te[t]}const Ce=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Ee=1e-7,Ae=12;function Ve(t,e,n,i){if(t===e&&n===i)return Ft;const o=e=>function(t,e,n,i,o){let s,r,a=0;do{r=e+(n-e)/2,s=Ce(r,i,o)-t,s>0?n=r:e=r}while(Math.abs(s)>Ee&&++a<Ae);return r}(e,0,1,t,n);return t=>0===t||1===t?t:Ce(o(t),e,i)}const Me=Ve(.42,0,1,1),De=Ve(0,0,.58,1),Le=Ve(.42,0,.58,1),je=t=>Array.isArray(t)&&"number"!=typeof t[0],Re=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Be=t=>e=>1-t(1-e),Fe=t=>1-Math.sin(Math.acos(t)),Ie=Be(Fe),Oe=Re(Fe),ze=Ve(.33,1.53,.69,.99),Ue=Be(ze),Ne=Re(Ue),We={linear:Ft,easeIn:Me,easeInOut:Le,easeOut:De,circIn:Fe,circInOut:Oe,circOut:Ie,backIn:Ue,backInOut:Ne,backOut:ze,anticipate:t=>(t*=2)<1?.5*Ue(t):.5*(2-Math.pow(2,-10*(t-1)))},He=t=>{if(Array.isArray(t)){ye(4===t.length,"Cubic bezier arrays must contain four numerical values.");const[e,n,i,o]=t;return Ve(e,n,i,o)}return"string"==typeof t?(ye(void 0!==We[t],`Invalid easing type '${t}'`),We[t]):t},$e=(t,e)=>n=>Boolean(K(n)&&Z.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),_e=(t,e,n)=>i=>{if(!K(i))return i;const[o,s,r,a]=i.match(G);return{[t]:parseFloat(o),[e]:parseFloat(s),[n]:parseFloat(r),alpha:void 0!==a?parseFloat(a):1}},Xe={...$,transform:t=>Math.round((t=>H(0,255,t))(t))},Ye={test:$e("rgb","red"),parse:_e("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Xe.transform(t)+", "+Xe.transform(e)+", "+Xe.transform(n)+", "+Y(_.transform(i))+")"};const Ge={test:$e("#"),parse:function(t){let e="",n="",i="",o="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),o=t.substring(4,5),e+=e,n+=n,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}},transform:Ye.transform},qe={test:$e("hsl","hue"),parse:_e("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+tt.transform(Y(e))+", "+tt.transform(Y(n))+", "+Y(_.transform(i))+")"},Ze={test:t=>Ye.test(t)||Ge.test(t)||qe.test(t),parse:t=>Ye.test(t)?Ye.parse(t):qe.test(t)?qe.parse(t):Ge.parse(t),transform:t=>K(t)?t:t.hasOwnProperty("red")?Ye.transform(t):qe.transform(t)},Ke=(t,e,n)=>-n*t+n*e+t;function Je(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}const Qe=(t,e,n)=>{const i=t*t;return Math.sqrt(Math.max(0,n*(e*e-i)+i))},tn=[Ge,Ye,qe];function en(t){const e=(n=t,tn.find((t=>t.test(n))));var n;ye(Boolean(e),`'${t}' is not an animatable color. Use the equivalent color code instead.`);let i=e.parse(t);return e===qe&&(i=function({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,n/=100;let o=0,s=0,r=0;if(e/=100){const i=n<.5?n*(1+e):n+e-n*e,a=2*n-i;o=Je(a,i,t+1/3),s=Je(a,i,t),r=Je(a,i,t-1/3)}else o=s=r=n;return{red:Math.round(255*o),green:Math.round(255*s),blue:Math.round(255*r),alpha:i}}(i)),i}const nn=(t,e)=>{const n=en(t),i=en(e),o={...n};return t=>(o.red=Qe(n.red,i.red,t),o.green=Qe(n.green,i.green,t),o.blue=Qe(n.blue,i.blue,t),o.alpha=Ke(n.alpha,i.alpha,t),Ye.transform(o))};const on={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:Ft},sn={regex:q,countKey:"Colors",token:"${c}",parse:Ze.parse},rn={regex:G,countKey:"Numbers",token:"${n}",parse:$.parse};function an(t,{regex:e,countKey:n,token:i,parse:o}){const s=t.tokenised.match(e);s&&(t["num"+n]=s.length,t.tokenised=t.tokenised.replace(e,i),t.values.push(...s.map(o)))}function ln(t){const e=t.toString(),n={value:e,tokenised:e,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&an(n,on),an(n,sn),an(n,rn),n}function cn(t){return ln(t).values}function hn(t){const{values:e,numColors:n,numVars:i,tokenised:o}=ln(t),s=e.length;return t=>{let e=o;for(let o=0;o<s;o++)e=o<i?e.replace(on.token,t[o]):o<i+n?e.replace(sn.token,Ze.transform(t[o])):e.replace(rn.token,Y(t[o]));return e}}const un=t=>"number"==typeof t?0:t;const dn={test:function(t){var e,n;return isNaN(t)&&K(t)&&((null===(e=t.match(G))||void 0===e?void 0:e.length)||0)+((null===(n=t.match(q))||void 0===n?void 0:n.length)||0)>0},parse:cn,createTransformer:hn,getAnimatableNone:function(t){const e=cn(t);return hn(t)(e.map(un))}},pn=(t,e)=>n=>`${n>0?e:t}`;function mn(t,e){return"number"==typeof t?n=>Ke(t,e,n):Ze.test(t)?nn(t,e):t.startsWith("var(")?pn(t,e):yn(t,e)}const fn=(t,e)=>{const n=[...t],i=n.length,o=t.map(((t,n)=>mn(t,e[n])));return t=>{for(let e=0;e<i;e++)n[e]=o[e](t);return n}},gn=(t,e)=>{const n={...t,...e},i={};for(const o in n)void 0!==t[o]&&void 0!==e[o]&&(i[o]=mn(t[o],e[o]));return t=>{for(const e in i)n[e]=i[e](t);return n}},yn=(t,e)=>{const n=dn.createTransformer(e),i=ln(t),o=ln(e);return i.numVars===o.numVars&&i.numColors===o.numColors&&i.numNumbers>=o.numNumbers?Kt(fn(i.values,o.values),n):(ge(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),pn(t,e))},vn=(t,e,n)=>{const i=e-t;return 0===i?1:(n-t)/i},bn=(t,e)=>n=>Ke(t,e,n);function xn(t,e,n){const i=[],o=n||("number"==typeof(s=t[0])?bn:"string"==typeof s?Ze.test(s)?nn:yn:Array.isArray(s)?fn:"object"==typeof s?gn:bn);var s;const r=t.length-1;for(let a=0;a<r;a++){let n=o(t[a],t[a+1]);if(e){const t=Array.isArray(e)?e[a]||Ft:e;n=Kt(t,n)}i.push(n)}return i}function wn(t,e,{clamp:n=!0,ease:i,mixer:o}={}){const s=t.length;if(ye(s===e.length,"Both input and output ranges must be the same length"),1===s)return()=>e[0];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const r=xn(e,i,o),a=r.length,l=e=>{let n=0;if(a>1)for(;n<t.length-2&&!(e<t[n+1]);n++);const i=vn(t[n],t[n+1],e);return r[n](i)};return n?e=>l(H(t[0],t[s-1],e)):l}function Pn(t){const e=[0];return function(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const o=vn(0,e,i);t.push(Ke(n,1,o))}}(e,t.length-1),e}function Sn({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const o=je(i)?i.map(He):He(i),s={done:!1,value:e[0]},r=function(t,e){return t.map((t=>t*e))}(n&&n.length===e.length?n:Pn(e),t),a=wn(r,e,{ease:Array.isArray(o)?o:(l=e,c=o,l.map((()=>c||Le)).splice(0,l.length-1))});var l,c;return{calculatedDuration:t,next:e=>(s.value=a(e),s.done=e>=t,s)}}function Tn(t,e){return e?t*(1e3/e):0}const kn=5;function Cn(t,e,n){const i=Math.max(e-kn,0);return Tn(n-t(i),e-i)}const En=.001,An=.01,Vn=10,Mn=.05,Dn=1;function Ln({duration:t=800,bounce:e=.25,velocity:n=0,mass:i=1}){let o,s;ge(t<=ve(Vn),"Spring duration must be 10 seconds or less");let r=1-e;r=H(Mn,Dn,r),t=H(An,Vn,be(t)),r<1?(o=e=>{const i=e*r,o=i*t,s=i-n,a=Rn(e,r),l=Math.exp(-o);return En-s/a*l},s=e=>{const i=e*r*t,s=i*n+n,a=Math.pow(r,2)*Math.pow(e,2)*t,l=Math.exp(-i),c=Rn(Math.pow(e,2),r);return(-o(e)+En>0?-1:1)*((s-a)*l)/c}):(o=e=>Math.exp(-e*t)*((e-n)*t+1)-En,s=e=>Math.exp(-e*t)*(t*t*(n-e)));const a=function(t,e,n){let i=n;for(let o=1;o<jn;o++)i-=t(i)/e(i);return i}(o,s,5/t);if(t=ve(t),isNaN(a))return{stiffness:100,damping:10,duration:t};{const e=Math.pow(a,2)*i;return{stiffness:e,damping:2*r*Math.sqrt(i*e),duration:t}}}const jn=12;function Rn(t,e){return t*Math.sqrt(1-e*e)}const Bn=["duration","bounce"],Fn=["stiffness","damping","mass"];function In(t,e){return e.some((e=>void 0!==t[e]))}function On({keyframes:t,restDelta:e,restSpeed:n,...i}){const o=t[0],s=t[t.length-1],r={done:!1,value:o},{stiffness:a,damping:l,mass:c,velocity:h,duration:u,isResolvedFromDuration:d}=function(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!In(t,Fn)&&In(t,Bn)){const n=Ln(t);e={...e,...n,velocity:0,mass:1},e.isResolvedFromDuration=!0}return e}(i),p=h?-be(h):0,m=l/(2*Math.sqrt(a*c)),f=s-o,g=be(Math.sqrt(a/c)),y=Math.abs(f)<5;let v;if(n||(n=y?.01:2),e||(e=y?.005:.5),m<1){const t=Rn(g,m);v=e=>{const n=Math.exp(-m*g*e);return s-n*((p+m*g*f)/t*Math.sin(t*e)+f*Math.cos(t*e))}}else if(1===m)v=t=>s-Math.exp(-g*t)*(f+(p+g*f)*t);else{const t=g*Math.sqrt(m*m-1);v=e=>{const n=Math.exp(-m*g*e),i=Math.min(t*e,300);return s-n*((p+m*g*f)*Math.sinh(i)+t*f*Math.cosh(i))/t}}return{calculatedDuration:d&&u||null,next:t=>{const i=v(t);if(d)r.done=t>=u;else{let o=p;0!==t&&(o=m<1?Cn(v,t,i):0);const a=Math.abs(o)<=n,l=Math.abs(s-i)<=e;r.done=a&&l}return r.value=r.done?s:i,r}}}function zn({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:s=500,modifyTarget:r,min:a,max:l,restDelta:c=.5,restSpeed:h}){const u=t[0],d={done:!1,value:u},p=t=>void 0===a?l:void 0===l||Math.abs(a-t)<Math.abs(l-t)?a:l;let m=n*e;const f=u+m,g=void 0===r?f:r(f);g!==f&&(m=g-u);const y=t=>-m*Math.exp(-t/i),v=t=>g+y(t),b=t=>{const e=y(t),n=v(t);d.done=Math.abs(e)<=c,d.value=d.done?g:n};let x,w;const P=t=>{var e;(e=d.value,void 0!==a&&e<a||void 0!==l&&e>l)&&(x=t,w=On({keyframes:[d.value,p(d.value)],velocity:Cn(v,t,d.value),damping:o,stiffness:s,restDelta:c,restSpeed:h}))};return P(0),{calculatedDuration:null,next:t=>{let e=!1;return w||void 0!==x||(e=!0,b(t),P(t)),void 0!==x&&t>x?w.next(t-x):(!e&&b(t),d)}}}const Un=t=>{const e=({timestamp:e})=>t(e);return{start:()=>zt.update(e,!0),stop:()=>Ut(e),now:()=>Nt.isProcessing?Nt.timestamp:performance.now()}},Nn=2e4;function Wn(t){let e=0;let n=t.next(e);for(;!n.done&&e<Nn;)e+=50,n=t.next(e);return e>=Nn?1/0:e}const Hn={decay:zn,inertia:zn,tween:Sn,keyframes:Sn,spring:On};function $n({autoplay:t=!0,delay:e=0,driver:n=Un,keyframes:i,type:o="keyframes",repeat:s=0,repeatDelay:r=0,repeatType:a="loop",onPlay:l,onStop:c,onComplete:h,onUpdate:u,...d}){let p,m,f=1,g=!1;const y=()=>{m=new Promise((t=>{p=t}))};let v;y();const b=Hn[o]||Sn;let x;b!==Sn&&"number"!=typeof i[0]&&(x=wn([0,100],i,{clamp:!1}),i=[0,100]);const w=b({...d,keyframes:i});let P;"mirror"===a&&(P=b({...d,keyframes:[...i].reverse(),velocity:-(d.velocity||0)}));let S="idle",T=null,k=null,C=null;null===w.calculatedDuration&&s&&(w.calculatedDuration=Wn(w));const{calculatedDuration:E}=w;let A=1/0,V=1/0;null!==E&&(A=E+r,V=A*(s+1)-r);let M=0;const D=t=>{if(null===k)return;f>0&&(k=Math.min(k,t)),f<0&&(k=Math.min(t-V/f,k)),M=null!==T?T:Math.round(t-k)*f;const n=M-e*(f>=0?1:-1),o=f>=0?n<0:n>V;M=Math.max(n,0),"finished"===S&&null===T&&(M=V);let l=M,c=w;if(s){const t=M/A;let e=Math.floor(t),n=t%1;!n&&t>=1&&(n=1),1===n&&e--,e=Math.min(e,s+1);const i=Boolean(e%2);i&&("reverse"===a?(n=1-n,r&&(n-=r/A)):"mirror"===a&&(c=P));let o=H(0,1,n);M>V&&(o="reverse"===a&&i?1:0),l=o*A}const h=o?{done:!1,value:i[0]}:c.next(l);x&&(h.value=x(h.value));let{done:d}=h;o||null===E||(d=f>=0?M>=V:M<=0);const p=null===T&&("finished"===S||"running"===S&&d);return u&&u(h.value),p&&R(),h},L=()=>{v&&v.stop(),v=void 0},j=()=>{S="idle",L(),p(),y(),k=C=null},R=()=>{S="finished",h&&h(),L(),p()},B=()=>{if(g)return;v||(v=n(D));const t=v.now();l&&l(),null!==T?k=t-T:k&&"finished"!==S||(k=t),"finished"===S&&y(),C=k,T=null,S="running",v.start()};t&&B();const F={then(t,e){return m.then(t,e)},get time(){return be(M)},set time(t){t=ve(t),M=t,null===T&&v&&0!==f?k=v.now()-t/f:T=t},get duration(){const t=null===w.calculatedDuration?Wn(w):w.calculatedDuration;return be(t)},get speed(){return f},set speed(t){t!==f&&v&&(f=t,F.time=be(M))},get state(){return S},play:B,pause:()=>{S="paused",T=M},stop:()=>{g=!0,"idle"!==S&&(S="idle",c&&c(),j())},cancel:()=>{null!==C&&D(C),j()},complete:()=>{S="finished"},sample:t=>(k=0,D(t))};return F}const _n=function(t){let e;return()=>(void 0===e&&(e=t()),e)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Xn=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function Yn(t,e,{onUpdate:n,onComplete:i,...o}){if(!(_n()&&Xn.has(e)&&!o.repeatDelay&&"mirror"!==o.repeatType&&0!==o.damping&&"inertia"!==o.type))return!1;let s,r,a=!1;const l=()=>{r=new Promise((t=>{s=t}))};l();let{keyframes:c,duration:h=300,ease:u,times:d}=o;if(((t,e)=>"spring"===e.type||"backgroundColor"===t||!Pe(e.ease))(e,o)){const t=$n({...o,repeat:0,delay:0});let e={done:!1,value:c[0]};const n=[];let i=0;for(;!e.done&&i<2e4;)e=t.sample(i),n.push(e.value),i+=10;d=void 0,c=n,h=i-10,u="linear"}const p=function(t,e,n,{delay:i=0,duration:o,repeat:s=0,repeatType:r="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const h=ke(a);return Array.isArray(h)&&(c.easing=h),t.animate(c,{delay:i,duration:o,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:"reverse"===r?"alternate":"normal"})}(t.owner.current,e,c,{...o,duration:h,ease:u,times:d}),m=()=>p.cancel(),f=()=>{zt.update(m),s(),l()};p.onfinish=()=>{t.set(function(t,{repeat:e,repeatType:n="loop"}){return t[e&&"loop"!==n&&e%2==1?0:t.length-1]}(c,o)),i&&i(),f()};return{then(t,e){return r.then(t,e)},attachTimeline(t){return p.timeline=t,p.onfinish=null,Ft},get time(){return be(p.currentTime||0)},set time(t){p.currentTime=ve(t)},get speed(){return p.playbackRate},set speed(t){p.playbackRate=t},get duration(){return be(h)},play:()=>{a||(p.play(),Ut(m))},pause:()=>p.pause(),stop:()=>{if(a=!0,"idle"===p.playState)return;const{currentTime:e}=p;if(e){const n=$n({...o,autoplay:!1});t.setWithVelocity(n.sample(e-10).value,n.sample(e).value,10)}f()},complete:()=>p.finish(),cancel:f}}const Gn={type:"spring",stiffness:500,damping:25,restSpeed:10},qn={type:"keyframes",duration:.8},Zn={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Kn=(t,{keyframes:e})=>e.length>2?qn:R.has(t)?t.startsWith("scale")?{type:"spring",stiffness:550,damping:0===e[1]?2*Math.sqrt(550):30,restSpeed:10}:Gn:Zn,Jn=(t,e)=>"zIndex"!==t&&(!("number"!=typeof e&&!Array.isArray(e))||!("string"!=typeof e||!dn.test(e)&&"0"!==e||e.startsWith("url("))),Qn=new Set(["brightness","contrast","saturate","opacity"]);function ti(t){const[e,n]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;const[i]=n.match(G)||[];if(!i)return t;const o=n.replace(i,"");let s=Qn.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+o+")"}const ei=/([a-z-]*)\(.*?\)/g,ni={...dn,getAnimatableNone:t=>{const e=t.match(ei);return e?e.map(ti).join(" "):t}},ii={...rt,color:Ze,backgroundColor:Ze,outlineColor:Ze,fill:Ze,stroke:Ze,borderColor:Ze,borderTopColor:Ze,borderRightColor:Ze,borderBottomColor:Ze,borderLeftColor:Ze,filter:ni,WebkitFilter:ni},oi=t=>ii[t];function si(t,e){let n=oi(t);return n!==ni&&(n=dn),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const ri=t=>/^0[^.\s]+$/.test(t);function ai(t){return"number"==typeof t?0===t:null!==t?"none"===t||"0"===t||ri(t):void 0}function li(t,e){return t[e]||t.default||t}const ci=(t,e,n,i={})=>o=>{const s=li(i,t)||{},r=s.delay||i.delay||0;let{elapsed:a=0}=i;a-=ve(r);const l=function(t,e,n,i){const o=Jn(e,n);let s;s=Array.isArray(n)?[...n]:[null,n];const r=void 0!==i.from?i.from:t.get();let a;const l=[];for(let c=0;c<s.length;c++)null===s[c]&&(s[c]=0===c?r:s[c-1]),ai(s[c])&&l.push(c),"string"==typeof s[c]&&"none"!==s[c]&&"0"!==s[c]&&(a=s[c]);if(o&&l.length&&a)for(let c=0;c<l.length;c++)s[l[c]]=si(e,a);return s}(e,t,n,s),c=l[0],h=l[l.length-1],u=Jn(t,c),d=Jn(t,h);ge(u===d,`You are trying to animate ${t} from "${c}" to "${h}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${h} via the \`style\` property.`);let p={keyframes:l,velocity:e.getVelocity(),ease:"easeOut",...s,delay:-a,onUpdate:t=>{e.set(t),s.onUpdate&&s.onUpdate(t)},onComplete:()=>{o(),s.onComplete&&s.onComplete()}};if(function({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:o,repeat:s,repeatType:r,repeatDelay:a,from:l,elapsed:c,...h}){return!!Object.keys(h).length}(s)||(p={...p,...Kn(t,p)}),p.duration&&(p.duration=ve(p.duration)),p.repeatDelay&&(p.repeatDelay=ve(p.repeatDelay)),!u||!d||xe||!1===s.type)return function({keyframes:t,delay:e,onUpdate:n,onComplete:i}){const o=()=>(n&&n(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:Ft,pause:Ft,stop:Ft,then:t=>(t(),Promise.resolve()),cancel:Ft,complete:Ft});return e?$n({keyframes:[0,1],duration:0,delay:e,onComplete:o}):o()}(xe?{...p,delay:0}:p);if(!i.isHandoff&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate){const n=Yn(e,t,p);if(n)return n}return $n(p)};function hi(t){return Boolean(F(t)&&t.add)}const ui=t=>/^\-?\d*\.?\d+$/.test(t);function di(t,e){-1===t.indexOf(e)&&t.push(e)}function pi(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class mi{constructor(){this.subscriptions=[]}add(t){return di(this.subscriptions,t),()=>pi(this.subscriptions,t)}notify(t,e,n){const i=this.subscriptions.length;if(i)if(1===i)this.subscriptions[0](t,e,n);else for(let o=0;o<i;o++){const i=this.subscriptions[o];i&&i(t,e,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const fi={current:void 0};class gi{constructor(t,e={}){var n;this.version="10.16.16",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(t,e=!0)=>{this.prev=this.current,this.current=t;const{delta:n,timestamp:i}=Nt;this.lastUpdated!==i&&(this.timeDelta=n,this.lastUpdated=i,zt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),e&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>zt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=(n=this.current,!isNaN(parseFloat(n))),this.owner=e.owner}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new mi);const n=this.events[t].add(e);return"change"===t?()=>{n(),zt.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,n){this.set(e),this.prev=t,this.timeDelta=n}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return fi.current&&fi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Tn(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise((e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yi(t,e){return new gi(t,e)}const vi=t=>e=>e.test(t),bi=[$,et,tt,Q,it,nt,{test:t=>"auto"===t,parse:t=>t}],xi=t=>bi.find(vi(t)),wi=[...bi,Ze,dn];function Pi(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,yi(n))}function Si(t,e){const n=fe(t,e);let{transitionEnd:i={},transition:o={},...s}=n?t.makeTargetAnimatable(n,!1):{};s={...s,...i};for(const r in s){Pi(t,r,Lt(s[r]))}}function Ti(t,e){if(!e)return;return(e[t]||e.default||e).from}function ki({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&!0!==e[n];return e[n]=!1,i}function Ci(t,e){const n=t.get();if(!Array.isArray(e))return n!==e;for(let i=0;i<e.length;i++)if(e[i]!==n)return!0}function Ei(t,e,{delay:n=0,transitionOverride:i,type:o}={}){let{transition:s=t.getDefaultTransition(),transitionEnd:r,...a}=t.makeTargetAnimatable(e);const l=t.getValue("willChange");i&&(s=i);const c=[],h=o&&t.animationState&&t.animationState.getState()[o];for(const u in a){const e=t.getValue(u),i=a[u];if(!e||void 0===i||h&&ki(h,u))continue;const o={delay:n,elapsed:0,...li(s||{},u)};if(window.HandoffAppearAnimations){const n=t.getProps()[d];if(n){const t=window.HandoffAppearAnimations(n,u,e,zt);null!==t&&(o.elapsed=t,o.isHandoff=!0)}}let r=!o.isHandoff&&!Ci(e,i);if("spring"===o.type&&(e.getVelocity()||o.velocity)&&(r=!1),e.animation&&(r=!1),r)continue;e.start(ci(u,e,i,t.shouldReduceMotion&&R.has(u)?{type:!1}:o));const p=e.animation;hi(l)&&(l.add(u),p.then((()=>l.remove(u)))),c.push(p)}return r&&Promise.all(c).then((()=>{r&&Si(t,r)})),c}function Ai(t,e,n={}){const i=fe(t,e,n.custom);let{transition:o=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(o=n.transitionOverride);const s=i?()=>Promise.all(Ei(t,i,n)):()=>Promise.resolve(),r=t.variantChildren&&t.variantChildren.size?(i=0)=>{const{delayChildren:s=0,staggerChildren:r,staggerDirection:a}=o;return function(t,e,n=0,i=0,o=1,s){const r=[],a=(t.variantChildren.size-1)*i,l=1===o?(t=0)=>t*i:(t=0)=>a-t*i;return Array.from(t.variantChildren).sort(Vi).forEach(((t,i)=>{t.notify("AnimationStart",e),r.push(Ai(t,e,{...s,delay:n+l(i)}).then((()=>t.notify("AnimationComplete",e))))})),Promise.all(r)}(t,e,s+i,r,a,n)}:()=>Promise.resolve(),{when:a}=o;if(a){const[t,e]="beforeChildren"===a?[s,r]:[r,s];return t().then((()=>e()))}return Promise.all([s(),r(n.delay)])}function Vi(t,e){return t.sortNodePosition(e)}const Mi=[...g].reverse(),Di=g.length;function Li(t){return e=>Promise.all(e.map((({animation:e,options:n})=>function(t,e,n={}){let i;if(t.notify("AnimationStart",e),Array.isArray(e)){const o=e.map((e=>Ai(t,e,n)));i=Promise.all(o)}else if("string"==typeof e)i=Ai(t,e,n);else{const o="function"==typeof e?fe(t,e,n.custom):e;i=Promise.all(Ei(t,o,n))}return i.then((()=>t.notify("AnimationComplete",e)))}(t,e,n))))}function ji(t){let e=Li(t);const n={animate:Bi(!0),whileInView:Bi(),whileHover:Bi(),whileTap:Bi(),whileDrag:Bi(),whileFocus:Bi(),exit:Bi()};let i=!0;const o=(e,n)=>{const i=fe(t,n);if(i){const{transition:t,transitionEnd:n,...o}=i;e={...e,...o,...n}}return e};function s(s,r){const a=t.getProps(),l=t.getVariantContext(!0)||{},c=[],h=new Set;let u={},d=1/0;for(let e=0;e<Di;e++){const p=Mi[e],g=n[p],y=void 0!==a[p]?a[p]:l[p],v=m(y),b=p===r?g.isActive:null;!1===b&&(d=e);let x=y===l[p]&&y!==a[p]&&v;if(x&&i&&t.manuallyAnimateOnMount&&(x=!1),g.protectedKeys={...u},!g.isActive&&null===b||!y&&!g.prevProp||f(y)||"boolean"==typeof y)continue;const w=Ri(g.prevProp,y);let P=w||p===r&&g.isActive&&!x&&v||e>d&&v;const S=Array.isArray(y)?y:[y];let T=S.reduce(o,{});!1===b&&(T={});const{prevResolvedValues:k={}}=g,C={...k,...T},E=t=>{P=!0,h.delete(t),g.needsAnimating[t]=!0};for(const t in C){const e=T[t],n=k[t];u.hasOwnProperty(t)||(e!==n?Mt(e)&&Mt(n)?!me(e,n)||w?E(t):g.protectedKeys[t]=!0:void 0!==e?E(t):h.add(t):void 0!==e&&h.has(t)?E(t):g.protectedKeys[t]=!0)}g.prevProp=y,g.prevResolvedValues=T,g.isActive&&(u={...u,...T}),i&&t.blockInitialAnimation&&(P=!1),P&&!x&&c.push(...S.map((t=>({animation:t,options:{type:p,...s}}))))}if(h.size){const e={};h.forEach((n=>{const i=t.getBaseTarget(n);void 0!==i&&(e[n]=i)})),c.push({animation:e})}let p=Boolean(c.length);return!i||!1!==a.initial&&a.initial!==a.animate||t.manuallyAnimateOnMount||(p=!1),i=!1,p?e(c):Promise.resolve()}return{animateChanges:s,setActive:function(e,i,o){var r;if(n[e].isActive===i)return Promise.resolve();null===(r=t.variantChildren)||void 0===r||r.forEach((t=>{var n;return null===(n=t.animationState)||void 0===n?void 0:n.setActive(e,i)})),n[e].isActive=i;const a=s(o,e);for(const t in n)n[t].protectedKeys={};return a},setAnimateFunction:function(n){e=n(t)},getState:()=>n}}function Ri(t,e){return"string"==typeof e?e!==t:!!Array.isArray(e)&&!me(e,t)}function Bi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let Fi=0;const Ii={animation:{Feature:class extends ie{constructor(t){super(t),t.animationState||(t.animationState=ji(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),f(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends ie{constructor(){super(...arguments),this.id=Fi++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:e,custom:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const o=this.node.animationState.setActive("exit",!t,{custom:null!=n?n:this.node.getProps().custom});e&&!t&&o.then((()=>e(this.id)))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}}},Oi=(t,e)=>Math.abs(t-e);class zi{constructor(t,e,{transformPagePoint:n,contextWindow:i}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const t=Wi(this.lastMoveEventInfo,this.history),e=null!==this.startEvent,n=function(t,e){const n=Oi(t.x,e.x),i=Oi(t.y,e.y);return Math.sqrt(n**2+i**2)}(t.offset,{x:0,y:0})>=3;if(!e&&!n)return;const{point:i}=t,{timestamp:o}=Nt;this.history.push({...i,timestamp:o});const{onStart:s,onMove:r}=this.handlers;e||(s&&s(this.lastMoveEvent,t),this.startEvent=this.lastMoveEvent),r&&r(this.lastMoveEvent,t)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=Ui(e,this.transformPagePoint),zt.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{if(this.end(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const{onEnd:n,onSessionEnd:i}=this.handlers,o=Wi("pointercancel"===t.type?this.lastMoveEventInfo:Ui(e,this.transformPagePoint),this.history);this.startEvent&&n&&n(t,o),i&&i(t,o)},!Xt(t))return;this.handlers=e,this.transformPagePoint=n,this.contextWindow=i||window;const o=Ui(Yt(t),this.transformPagePoint),{point:s}=o,{timestamp:r}=Nt;this.history=[{...s,timestamp:r}];const{onSessionStart:a}=e;a&&a(t,Wi(o,this.history)),this.removeListeners=Kt(qt(this.contextWindow,"pointermove",this.handlePointerMove),qt(this.contextWindow,"pointerup",this.handlePointerUp),qt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ut(this.updatePoint)}}function Ui(t,e){return e?{point:e(t.point)}:t}function Ni(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Wi({point:t},e){return{point:t,delta:Ni(t,$i(e)),offset:Ni(t,Hi(e)),velocity:_i(e,.1)}}function Hi(t){return t[0]}function $i(t){return t[t.length-1]}function _i(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const o=$i(t);for(;n>=0&&(i=t[n],!(o.timestamp-i.timestamp>ve(e)));)n--;if(!i)return{x:0,y:0};const s=be(o.timestamp-i.timestamp);if(0===s)return{x:0,y:0};const r={x:(o.x-i.x)/s,y:(o.y-i.y)/s};return r.x===1/0&&(r.x=0),r.y===1/0&&(r.y=0),r}function Xi(t){return t.max-t.min}function Yi(t,e=0,n=.01){return Math.abs(t-e)<=n}function Gi(t,e,n,i=.5){t.origin=i,t.originPoint=Ke(e.min,e.max,t.origin),t.scale=Xi(n)/Xi(e),(Yi(t.scale,1,1e-4)||isNaN(t.scale))&&(t.scale=1),t.translate=Ke(n.min,n.max,t.origin)-t.originPoint,(Yi(t.translate)||isNaN(t.translate))&&(t.translate=0)}function qi(t,e,n,i){Gi(t.x,e.x,n.x,i?i.originX:void 0),Gi(t.y,e.y,n.y,i?i.originY:void 0)}function Zi(t,e,n){t.min=n.min+e.min,t.max=t.min+Xi(e)}function Ki(t,e,n){t.min=e.min-n.min,t.max=t.min+Xi(e)}function Ji(t,e,n){Ki(t.x,e.x,n.x),Ki(t.y,e.y,n.y)}function Qi(t,e,n){return{min:void 0!==e?t.min+e:void 0,max:void 0!==n?t.max+n-(t.max-t.min):void 0}}function to(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}const eo=.35;function no(t,e,n){return{min:io(t,e),max:io(t,n)}}function io(t,e){return"number"==typeof t?t:t[e]||0}const oo=()=>({x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}),so=()=>({x:{min:0,max:0},y:{min:0,max:0}});function ro(t){return[t("x"),t("y")]}function ao({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function lo(t){return void 0===t||1===t}function co({scale:t,scaleX:e,scaleY:n}){return!lo(t)||!lo(e)||!lo(n)}function ho(t){return co(t)||uo(t)||t.z||t.rotate||t.rotateX||t.rotateY}function uo(t){return po(t.x)||po(t.y)}function po(t){return t&&"0%"!==t}function mo(t,e,n){return n+e*(t-n)}function fo(t,e,n,i,o){return void 0!==o&&(t=mo(t,o,i)),mo(t,n,i)+e}function go(t,e=0,n=1,i,o){t.min=fo(t.min,e,n,i,o),t.max=fo(t.max,e,n,i,o)}function yo(t,{x:e,y:n}){go(t.x,e.translate,e.scale,e.originPoint),go(t.y,n.translate,n.scale,n.originPoint)}function vo(t){return Number.isInteger(t)||t>1.0000000000001||t<.999999999999?t:1}function bo(t,e){t.min=t.min+e,t.max=t.max+e}function xo(t,e,[n,i,o]){const s=void 0!==e[o]?e[o]:.5,r=Ke(t.min,t.max,s);go(t,e[n],e[i],r,e.scale)}const wo=["x","scaleX","originX"],Po=["y","scaleY","originY"];function So(t,e){xo(t.x,e,wo),xo(t.y,e,Po)}function To(t,e){return ao(function(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}(t.getBoundingClientRect(),e))}const ko=({current:t})=>t?t.ownerDocument.defaultView:null,Co=new WeakMap;class Eo{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=so(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;this.panSession=new zi(t,{onSessionStart:t=>{this.stopAnimation(),e&&this.snapToCursor(Yt(t,"page").point)},onStart:(t,e)=>{const{drag:n,dragPropagation:i,onDragStart:o}=this.getProps();if(n&&!i&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=ee(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ro((t=>{let e=this.getAxisMotionValue(t).get()||0;if(tt.test(e)){const{projection:n}=this.visualElement;if(n&&n.layout){const i=n.layout.layoutBox[t];if(i){e=Xi(i)*(parseFloat(e)/100)}}}this.originPoint[t]=e})),o&&zt.update((()=>o(t,e)),!1,!0);const{animationState:s}=this.visualElement;s&&s.setActive("whileDrag",!0)},onMove:(t,e)=>{const{dragPropagation:n,dragDirectionLock:i,onDirectionLock:o,onDrag:s}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:r}=e;if(i&&null===this.currentDirection)return this.currentDirection=function(t,e=10){let n=null;Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x");return n}(r),void(null!==this.currentDirection&&o&&o(this.currentDirection));this.updateAxis("x",e.point,r),this.updateAxis("y",e.point,r),this.visualElement.render(),s&&s(t,e)},onSessionEnd:(t,e)=>this.stop(t,e)},{transformPagePoint:this.visualElement.getTransformPagePoint(),contextWindow:ko(this.visualElement)})}stop(t,e){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:i}=e;this.startAnimation(i);const{onDragEnd:o}=this.getProps();o&&zt.update((()=>o(t,e)))}cancel(){this.isDragging=!1;const{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,n){const{drag:i}=this.getProps();if(!n||!Ao(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+n[t];this.constraints&&this.constraints[t]&&(s=function(t,{min:e,max:n},i){return void 0!==e&&t<e?t=i?Ke(e,t,i.min):Math.max(t,e):void 0!==n&&t>n&&(t=i?Ke(n,t,i.max):Math.min(t,n)),t}(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var t;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(t=this.visualElement.projection)||void 0===t?void 0:t.layout,o=this.constraints;e&&p(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!i)&&function(t,{top:e,left:n,bottom:i,right:o}){return{x:Qi(t.x,n,o),y:Qi(t.y,e,i)}}(i.layoutBox,e),this.elastic=function(t=eo){return!1===t?t=0:!0===t&&(t=eo),{x:no(t,"left","right"),y:no(t,"top","bottom")}}(n),o!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ro((t=>{this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){const n={};return void 0!==e.min&&(n.min=e.min-t.min),void 0!==e.max&&(n.max=e.max-t.min),n}(i.layoutBox[t],this.constraints[t]))}))}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:e}=this.getProps();if(!t||!p(t))return!1;const n=t.current;ye(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const o=function(t,e,n){const i=To(t,n),{scroll:o}=e;return o&&(bo(i.x,o.offset.x),bo(i.y,o.offset.y)),i}(n,i.root,this.visualElement.getTransformPagePoint());let s=function(t,e){return{x:to(t.x,e.x),y:to(t.y,e.y)}}(i.layout.layoutBox,o);if(e){const t=e(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(s));this.hasMutatedConstraints=!!t,t&&(s=ao(t))}return s}startAnimation(t){const{drag:e,dragMomentum:n,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:r}=this.getProps(),a=this.constraints||{},l=ro((r=>{if(!Ao(r,e,this.currentDirection))return;let l=a&&a[r]||{};s&&(l={min:0,max:0});const c=i?200:1e6,h=i?40:1e7,u={type:"inertia",velocity:n?t[r]:0,bounceStiffness:c,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...o,...l};return this.startAxisValueAnimation(r,u)}));return Promise.all(l).then(r)}startAxisValueAnimation(t,e){const n=this.getAxisMotionValue(t);return n.start(ci(t,n,0,e))}stopAnimation(){ro((t=>this.getAxisMotionValue(t).stop()))}getAxisMotionValue(t){const e="_drag"+t.toUpperCase(),n=this.visualElement.getProps(),i=n[e];return i||this.visualElement.getValue(t,(n.initial?n.initial[t]:void 0)||0)}snapToCursor(t){ro((e=>{const{drag:n}=this.getProps();if(!Ao(e,n,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(e);if(i&&i.layout){const{min:n,max:s}=i.layout.layoutBox[e];o.set(t[e]-Ke(n,s,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:e}=this.getProps(),{projection:n}=this.visualElement;if(!p(e)||!n||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ro((t=>{const e=this.getAxisMotionValue(t);if(e){const n=e.get();i[t]=function(t,e){let n=.5;const i=Xi(t),o=Xi(e);return o>i?n=vn(e.min,e.max-i,t.min):i>o&&(n=vn(t.min,t.max-o,e.min)),H(0,1,n)}({min:n,max:n},this.constraints[t])}}));const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),ro((e=>{if(!Ao(e,t,null))return;const n=this.getAxisMotionValue(e),{min:o,max:s}=this.constraints[e];n.set(Ke(o,s,i[e]))}))}addListeners(){if(!this.visualElement.current)return;Co.set(this.visualElement,this);const t=qt(this.visualElement.current,"pointerdown",(t=>{const{drag:e,dragListener:n=!0}=this.getProps();e&&n&&this.start(t)})),e=()=>{const{dragConstraints:t}=this.getProps();p(t)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,i=n.addEventListener("measure",e);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),e();const o=_t(window,"resize",(()=>this.scalePositionWithinConstraints())),s=n.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(ro((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{o(),t(),i(),s&&s()}}getProps(){const t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:n=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=eo,dragMomentum:r=!0}=t;return{...t,drag:e,dragDirectionLock:n,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:r}}}function Ao(t,e,n){return!(!0!==e&&e!==t||null!==n&&n!==t)}const Vo=t=>(e,n)=>{t&&zt.update((()=>t(e,n)))};const Mo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Do(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Lo={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t){if(!et.test(t))return t;t=parseFloat(t)}return`${Do(t,e.target.x)}% ${Do(t,e.target.y)}%`}},jo={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,o=dn.parse(t);if(o.length>5)return i;const s=dn.createTransformer(t),r="number"!=typeof o[0]?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;o[0+r]/=a,o[1+r]/=l;const c=Ke(a,l,.5);return"number"==typeof o[2+r]&&(o[2+r]/=c),"number"==typeof o[3+r]&&(o[3+r]/=c),s(o)}};class Ro extends i.Component{componentDidMount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n,layoutId:i}=this.props,{projection:o}=t;var s;s=Fo,Object.assign(L,s),o&&(e.group&&e.group.add(o),n&&n.register&&i&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),Mo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:e,visualElement:n,drag:i,isPresent:o}=this.props,s=n.projection;return s?(s.isPresent=o,i||t.layoutDependency!==e||void 0===e?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||zt.postRender((()=>{const t=s.getStack();t&&t.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask((()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:t,layoutGroup:e,switchLayoutGroup:n}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(i),n&&n.deregister&&n.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function Bo(t){const[e,n]=function(){const t=(0,i.useContext)(a);if(null===t)return[!0,null];const{isPresent:e,onExitComplete:n,register:o}=t,s=(0,i.useId)();return(0,i.useEffect)((()=>o(s)),[]),!e&&n?[!1,()=>n&&n(s)]:[!0]}(),o=(0,i.useContext)(T);return i.createElement(Ro,{...t,layoutGroup:o,switchLayoutGroup:(0,i.useContext)(k),isPresent:e,safeToRemove:n})}const Fo={borderRadius:{...Lo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Lo,borderTopRightRadius:Lo,borderBottomLeftRadius:Lo,borderBottomRightRadius:Lo,boxShadow:jo},Io=["TopLeft","TopRight","BottomLeft","BottomRight"],Oo=Io.length,zo=t=>"string"==typeof t?parseFloat(t):t,Uo=t=>"number"==typeof t||et.test(t);function No(t,e){return void 0!==t[e]?t[e]:t.borderRadius}const Wo=$o(0,.5,Ie),Ho=$o(.5,.95,Ft);function $o(t,e,n){return i=>i<t?0:i>e?1:n(vn(t,e,i))}function _o(t,e){t.min=e.min,t.max=e.max}function Xo(t,e){_o(t.x,e.x),_o(t.y,e.y)}function Yo(t,e,n,i,o){return t=mo(t-=e,1/n,i),void 0!==o&&(t=mo(t,1/o,i)),t}function Go(t,e,[n,i,o],s,r){!function(t,e=0,n=1,i=.5,o,s=t,r=t){tt.test(e)&&(e=parseFloat(e),e=Ke(r.min,r.max,e/100)-r.min);if("number"!=typeof e)return;let a=Ke(s.min,s.max,i);t===s&&(a-=e),t.min=Yo(t.min,e,n,a,o),t.max=Yo(t.max,e,n,a,o)}(t,e[n],e[i],e[o],e.scale,s,r)}const qo=["x","scaleX","originX"],Zo=["y","scaleY","originY"];function Ko(t,e,n,i){Go(t.x,e,qo,n?n.x:void 0,i?i.x:void 0),Go(t.y,e,Zo,n?n.y:void 0,i?i.y:void 0)}function Jo(t){return 0===t.translate&&1===t.scale}function Qo(t){return Jo(t.x)&&Jo(t.y)}function ts(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function es(t){return Xi(t.x)/Xi(t.y)}class ns{constructor(){this.members=[]}add(t){di(this.members,t),t.scheduleRender()}remove(t){if(pi(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){const e=this.members.findIndex((e=>t===e));if(0===e)return!1;let n;for(let i=e;i>=0;i--){const t=this.members[i];if(!1!==t.isPresent){n=t;break}}return!!n&&(this.promote(n),!0)}promote(t,e){const n=this.lead;if(t!==n&&(this.prevLead=n,this.lead=t,t.show(),n)){n.instance&&n.scheduleRender(),t.scheduleRender(),t.resumeFrom=n,e&&(t.resumeFrom.preserveOpacity=!0),n.snapshot&&(t.snapshot=n.snapshot,t.snapshot.latestValues=n.animationValues||n.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;!1===i&&n.hide()}}exitAnimationComplete(){this.members.forEach((t=>{const{options:e,resumingFrom:n}=t;e.onExitComplete&&e.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((t=>{t.instance&&t.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function is(t,e,n){let i="";const o=t.x.translate/e.x,s=t.y.translate/e.y;if((o||s)&&(i=`translate3d(${o}px, ${s}px, 0) `),1===e.x&&1===e.y||(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{rotate:t,rotateX:e,rotateY:o}=n;t&&(i+=`rotate(${t}deg) `),e&&(i+=`rotateX(${e}deg) `),o&&(i+=`rotateY(${o}deg) `)}const r=t.x.scale*e.x,a=t.y.scale*e.y;return 1===r&&1===a||(i+=`scale(${r}, ${a})`),i||"none"}const os=(t,e)=>t.depth-e.depth;class ss{constructor(){this.children=[],this.isDirty=!1}add(t){di(this.children,t),this.isDirty=!0}remove(t){pi(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(os),this.isDirty=!1,this.children.forEach(t)}}const rs=["","X","Y","Z"],as={visibility:"hidden"};let ls=0;const cs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function hs({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(t={},n=(null==e?void 0:e())){this.id=ls++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{var t;this.projectionUpdateScheduled=!1,cs.totalNodes=cs.resolvedTargetDeltas=cs.recalculatedProjection=0,this.nodes.forEach(ps),this.nodes.forEach(xs),this.nodes.forEach(ws),this.nodes.forEach(ms),t=cs,window.MotionDebug&&window.MotionDebug.record(t)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=n?n.root||n:this,this.path=n?[...n.path,n]:[],this.parent=n,this.depth=n?n.depth+1:0;for(let e=0;e<this.path.length;e++)this.path[e].shouldResetTransform=!0;this.root===this&&(this.nodes=new ss)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new mi),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){const n=this.eventHandlers.get(t);n&&n.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e,n=this.root.hasTreeAnimated){if(this.instance)return;var i;this.isSVG=(i=e)instanceof SVGElement&&"svg"!==i.tagName,this.instance=e;const{layoutId:o,layout:s,visualElement:r}=this.options;if(r&&!r.current&&r.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(s||o)&&(this.isLayoutDirty=!0),t){let n;const i=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(t,e){const n=performance.now(),i=({timestamp:o})=>{const s=o-n;s>=e&&(Ut(i),t(s-e))};return zt.read(i,!0),()=>Ut(i)}(i,250),Mo.hasAnimatedSinceResize&&(Mo.hasAnimatedSinceResize=!1,this.nodes.forEach(bs))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&r&&(o||s)&&this.addEventListener("didUpdate",(({delta:t,hasLayoutChanged:e,hasRelativeTargetChanged:n,layout:i})=>{if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||r.getDefaultTransition()||Es,{onLayoutAnimationStart:s,onLayoutAnimationComplete:a}=r.getProps(),l=!this.targetLayout||!ts(this.targetLayout,i)||n,c=!e&&n;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||c||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...li(o,"layout"),onPlay:s,onComplete:a};(r.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||bs(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ut(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Ps),this.animationId++)}getTransformTemplate(){const{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let o=0;o<this.path.length;o++){const t=this.path[o];t.shouldResetTransform=!0,t.updateScroll("snapshot"),t.options.layoutRoot&&t.willUpdate(!1)}const{layoutId:e,layout:n}=this.options;if(void 0===e&&!n)return;const i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(gs);this.isUpdating||this.nodes.forEach(ys),this.isUpdating=!1,this.nodes.forEach(vs),this.nodes.forEach(us),this.nodes.forEach(ds),this.clearAllSnapshots();const t=performance.now();Nt.delta=H(0,1e3/60,t-Nt.timestamp),Nt.timestamp=t,Nt.isProcessing=!0,Wt.update.process(Nt),Wt.preRender.process(Nt),Wt.render.process(Nt),Nt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(fs),this.sharedNodes.forEach(Ss)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,zt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){zt.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead()||this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const t=this.layout;this.layout=this.measure(!1),this.layoutCorrected=so(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&(this.scroll={animationId:this.root.animationId,phase:t,isRoot:i(this.instance),offset:n(this.instance)})}resetTransform(){if(!o)return;const t=this.isLayoutDirty||this.shouldResetTransform,e=this.projectionDelta&&!Qo(this.projectionDelta),n=this.getTransformTemplate(),i=n?n(this.latestValues,""):void 0,s=i!==this.prevTransformTemplateValue;t&&(e||ho(this.latestValues)||s)&&(o(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){const e=this.measurePageBox();let n=this.removeElementScroll(e);var i;return t&&(n=this.removeTransform(n)),Ms((i=n).x),Ms(i.y),{animationId:this.root.animationId,measuredBox:e,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:t}=this.options;if(!t)return so();const e=t.measureViewportBox(),{scroll:n}=this.root;return n&&(bo(e.x,n.offset.x),bo(e.y,n.offset.y)),e}removeElementScroll(t){const e=so();Xo(e,t);for(let n=0;n<this.path.length;n++){const i=this.path[n],{scroll:o,options:s}=i;if(i!==this.root&&o&&s.layoutScroll){if(o.isRoot){Xo(e,t);const{scroll:n}=this.root;n&&(bo(e.x,-n.offset.x),bo(e.y,-n.offset.y))}bo(e.x,o.offset.x),bo(e.y,o.offset.y)}}return e}applyTransform(t,e=!1){const n=so();Xo(n,t);for(let i=0;i<this.path.length;i++){const t=this.path[i];!e&&t.options.layoutScroll&&t.scroll&&t!==t.root&&So(n,{x:-t.scroll.offset.x,y:-t.scroll.offset.y}),ho(t.latestValues)&&So(n,t.latestValues)}return ho(this.latestValues)&&So(n,this.latestValues),n}removeTransform(t){const e=so();Xo(e,t);for(let n=0;n<this.path.length;n++){const t=this.path[n];if(!t.instance)continue;if(!ho(t.latestValues))continue;co(t.latestValues)&&t.updateSnapshot();const i=so();Xo(i,t.measurePageBox()),Ko(e,t.latestValues,t.snapshot?t.snapshot.layoutBox:void 0,i)}return ho(this.latestValues)&&Ko(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Nt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){var e;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const i=Boolean(this.resumingFrom)||this!==n;if(!(t||i&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:o,layoutId:s}=this.options;if(this.layout&&(o||s)){if(this.resolvedRelativeTargetAt=Nt.timestamp,!this.targetDelta&&!this.relativeTarget){const t=this.getClosestProjectingParent();t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=so(),this.relativeTargetOrigin=so(),Ji(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),Xo(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var r,a,l;if(this.target||(this.target=so(),this.targetWithTransforms=so()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),r=this.target,a=this.relativeTarget,l=this.relativeParent.target,Zi(r.x,a.x,l.x),Zi(r.y,a.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Xo(this.target,this.layout.layoutBox),yo(this.target,this.targetDelta)):Xo(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const t=this.getClosestProjectingParent();t&&Boolean(t.resumingFrom)===Boolean(this.resumingFrom)&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=so(),this.relativeTargetOrigin=so(),Ji(this.relativeTargetOrigin,this.target,t.target),Xo(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}cs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!co(this.parent.latestValues)&&!uo(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var t;const e=this.getLead(),n=Boolean(this.resumingFrom)||this!==e;let i=!0;if((this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty))&&(i=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===Nt.timestamp&&(i=!1),i)return;const{layout:o,layoutId:s}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!o&&!s)return;Xo(this.layoutCorrected,this.layout.layoutBox);const r=this.treeScale.x,a=this.treeScale.y;!function(t,e,n,i=!1){const o=n.length;if(!o)return;let s,r;e.x=e.y=1;for(let a=0;a<o;a++){s=n[a],r=s.projectionDelta;const o=s.instance;o&&o.style&&"contents"===o.style.display||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&So(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),r&&(e.x*=r.x.scale,e.y*=r.y.scale,yo(t,r)),i&&ho(s.latestValues)&&So(t,s.latestValues))}e.x=vo(e.x),e.y=vo(e.y)}(this.layoutCorrected,this.treeScale,this.path,n),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox);const{target:l}=e;if(!l)return void(this.projectionTransform&&(this.projectionDelta=oo(),this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta=oo(),this.projectionDeltaWithTransform=oo());const c=this.projectionTransform;qi(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=is(this.projectionDelta,this.treeScale),this.projectionTransform===c&&this.treeScale.x===r&&this.treeScale.y===a||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),cs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),t){const t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(t,e=!1){const n=this.snapshot,i=n?n.latestValues:{},o={...this.latestValues},s=oo();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;const r=so(),a=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,h=Boolean(a&&!c&&!0===this.options.crossfade&&!this.path.some(Cs));let u;this.animationProgress=0,this.mixTargetDelta=e=>{const n=e/1e3;var l,d,p,m;Ts(s.x,t.x,n),Ts(s.y,t.y,n),this.setTargetDelta(s),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ji(r,this.layout.layoutBox,this.relativeParent.layout.layoutBox),l=this.relativeTarget,d=this.relativeTargetOrigin,p=r,m=n,ks(l.x,d.x,p.x,m),ks(l.y,d.y,p.y,m),u&&function(t,e){return t.x.min===e.x.min&&t.x.max===e.x.max&&t.y.min===e.y.min&&t.y.max===e.y.max}(this.relativeTarget,u)&&(this.isProjectionDirty=!1),u||(u=so()),Xo(u,this.relativeTarget)),a&&(this.animationValues=o,function(t,e,n,i,o,s){o?(t.opacity=Ke(0,void 0!==n.opacity?n.opacity:1,Wo(i)),t.opacityExit=Ke(void 0!==e.opacity?e.opacity:1,0,Ho(i))):s&&(t.opacity=Ke(void 0!==e.opacity?e.opacity:1,void 0!==n.opacity?n.opacity:1,i));for(let r=0;r<Oo;r++){const o=`border${Io[r]}Radius`;let s=No(e,o),a=No(n,o);void 0===s&&void 0===a||(s||(s=0),a||(a=0),0===s||0===a||Uo(s)===Uo(a)?(t[o]=Math.max(Ke(zo(s),zo(a),i),0),(tt.test(a)||tt.test(s))&&(t[o]+="%")):t[o]=a)}(e.rotate||n.rotate)&&(t.rotate=Ke(e.rotate||0,n.rotate||0,i))}(o,i,this.latestValues,n,h,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ut(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=zt.update((()=>{Mo.hasAnimatedSinceResize=!0,this.currentAnimation=function(t,e,n){const i=F(t)?t:yi(t);return i.start(ci("",i,e,n)),i.animation}(0,1e3,{...t,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const t=this.getLead();let{targetWithTransforms:e,target:n,layout:i,latestValues:o}=t;if(e&&n&&i){if(this!==t&&this.layout&&i&&Ds(this.options.animationType,this.layout.layoutBox,i.layoutBox)){n=this.target||so();const e=Xi(this.layout.layoutBox.x);n.x.min=t.target.x.min,n.x.max=n.x.min+e;const i=Xi(this.layout.layoutBox.y);n.y.min=t.target.y.min,n.y.max=n.y.min+i}Xo(e,n),So(e,o),qi(this.projectionDeltaWithTransform,this.layoutCorrected,e,o)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new ns);this.sharedNodes.get(t).add(e);const n=e.options.initialPromotionConfig;e.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(e):void 0})}isLead(){const t=this.getStack();return!t||t.lead===this}getLead(){var t;const{layoutId:e}=this.options;return e&&(null===(t=this.getStack())||void 0===t?void 0:t.lead)||this}getPrevLead(){var t;const{layoutId:e}=this.options;return e?null===(t=this.getStack())||void 0===t?void 0:t.prevLead:void 0}getStack(){const{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:n}={}){const i=this.getStack();i&&i.promote(this,n),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){const t=this.getStack();return!!t&&t.relegate(this)}resetRotation(){const{visualElement:t}=this.options;if(!t)return;let e=!1;const{latestValues:n}=t;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(e=!0),!e)return;const i={};for(let o=0;o<rs.length;o++){const e="rotate"+rs[o];n[e]&&(i[e]=n[e],t.setStaticValue(e,0))}t.render();for(const o in i)t.setStaticValue(o,i[o]);t.scheduleRender()}getProjectionStyles(t){var e,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return as;const i={visibility:""},o=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,i.opacity="",i.pointerEvents=jt(null==t?void 0:t.pointerEvents)||"",i.transform=o?o(this.latestValues,""):"none",i;const s=this.getLead();if(!this.projectionDelta||!this.layout||!s.target){const e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=jt(null==t?void 0:t.pointerEvents)||""),this.hasProjected&&!ho(this.latestValues)&&(e.transform=o?o({},""):"none",this.hasProjected=!1),e}const r=s.animationValues||s.latestValues;this.applyTransformsToTarget(),i.transform=is(this.projectionDeltaWithTransform,this.treeScale,r),o&&(i.transform=o(r,i.transform));const{x:a,y:l}=this.projectionDelta;i.transformOrigin=`${100*a.origin}% ${100*l.origin}% 0`,s.animationValues?i.opacity=s===this?null!==(n=null!==(e=r.opacity)&&void 0!==e?e:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:r.opacityExit:i.opacity=s===this?void 0!==r.opacity?r.opacity:"":void 0!==r.opacityExit?r.opacityExit:0;for(const c in L){if(void 0===r[c])continue;const{correct:t,applyTo:e}=L[c],n="none"===i.transform?r[c]:t(r[c],s);if(e){const t=e.length;for(let o=0;o<t;o++)i[e[o]]=n}else i[c]=n}return this.options.layoutId&&(i.pointerEvents=s===this?jt(null==t?void 0:t.pointerEvents)||"":"none"),i}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((t=>{var e;return null===(e=t.currentAnimation)||void 0===e?void 0:e.stop()})),this.root.nodes.forEach(gs),this.root.sharedNodes.clear()}}}function us(t){t.updateLayout()}function ds(t){var e;const n=(null===(e=t.resumeFrom)||void 0===e?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:e,measuredBox:i}=t.layout,{animationType:o}=t.options,s=n.source!==t.layout.source;"size"===o?ro((t=>{const i=s?n.measuredBox[t]:n.layoutBox[t],o=Xi(i);i.min=e[t].min,i.max=i.min+o})):Ds(o,n.layoutBox,e)&&ro((i=>{const o=s?n.measuredBox[i]:n.layoutBox[i],r=Xi(e[i]);o.max=o.min+r,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[i].max=t.relativeTarget[i].min+r)}));const r=oo();qi(r,e,n.layoutBox);const a=oo();s?qi(a,t.applyTransform(i,!0),n.measuredBox):qi(a,e,n.layoutBox);const l=!Qo(r);let c=!1;if(!t.resumeFrom){const i=t.getClosestProjectingParent();if(i&&!i.resumeFrom){const{snapshot:o,layout:s}=i;if(o&&s){const r=so();Ji(r,n.layoutBox,o.layoutBox);const a=so();Ji(a,e,s.layoutBox),ts(r,a)||(c=!0),i.options.layoutRoot&&(t.relativeTarget=a,t.relativeTargetOrigin=r,t.relativeParent=i)}}}t.notifyListeners("didUpdate",{layout:e,snapshot:n,delta:a,layoutDelta:r,hasLayoutChanged:l,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function ps(t){cs.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=Boolean(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function ms(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function fs(t){t.clearSnapshot()}function gs(t){t.clearMeasurements()}function ys(t){t.isLayoutDirty=!1}function vs(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function bs(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function xs(t){t.resolveTargetDelta()}function ws(t){t.calcProjection()}function Ps(t){t.resetRotation()}function Ss(t){t.removeLeadSnapshot()}function Ts(t,e,n){t.translate=Ke(e.translate,0,n),t.scale=Ke(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function ks(t,e,n,i){t.min=Ke(e.min,n.min,i),t.max=Ke(e.max,n.max,i)}function Cs(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}const Es={duration:.45,ease:[.4,0,.1,1]},As=t=>"undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().includes(t),Vs=As("applewebkit/")&&!As("chrome/")?Math.round:Ft;function Ms(t){t.min=Vs(t.min),t.max=Vs(t.max)}function Ds(t,e,n){return"position"===t||"preserve-aspect"===t&&!Yi(es(e),es(n),.2)}const Ls=hs({attachResizeListener:(t,e)=>_t(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),js={current:void 0},Rs=hs({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!js.current){const t=new Ls({});t.mount(window),t.setOptions({layoutScroll:!0}),js.current=t}return js.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>Boolean("fixed"===window.getComputedStyle(t).position)}),Bs={pan:{Feature:class extends ie{constructor(){super(...arguments),this.removePointerDownListener=Ft}onPointerDown(t){this.session=new zi(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:ko(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:e,onPan:n,onPanEnd:i}=this.node.getProps();return{onSessionStart:Vo(t),onStart:Vo(e),onMove:n,onEnd:(t,e)=>{delete this.session,i&&zt.update((()=>i(t,e)))}}}mount(){this.removePointerDownListener=qt(this.node.current,"pointerdown",(t=>this.onPointerDown(t)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends ie{constructor(t){super(t),this.removeGroupControls=Ft,this.removeListeners=Ft,this.controls=new Eo(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ft}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Rs,MeasureLayout:Bo}},Fs=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;const Is=4;function Os(t,e,n=1){ye(n<=Is,`Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);const[i,o]=function(t){const e=Fs.exec(t);if(!e)return[,];const[,n,i]=e;return[n,i]}(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const t=s.trim();return ui(t)?parseFloat(t):t}return N(o)?Os(o,e,n+1):o}const zs=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Us=t=>zs.has(t),Ns=t=>t===$||t===et,Ws=(t,e)=>parseFloat(t.split(", ")[e]),Hs=(t,e)=>(n,{transform:i})=>{if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return Ws(o[1],e);{const e=i.match(/^matrix\((.+)\)$/);return e?Ws(e[1],t):0}},$s=new Set(["x","y","z"]),_s=j.filter((t=>!$s.has(t)));const Xs={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Hs(4,13),y:Hs(5,14)};Xs.translateX=Xs.x,Xs.translateY=Xs.y;const Ys=(t,e,n={},i={})=>{e={...e},i={...i};const o=Object.keys(e).filter(Us);let s=[],r=!1;const a=[];if(o.forEach((o=>{const l=t.getValue(o);if(!t.hasValue(o))return;let c=n[o],h=xi(c);const u=e[o];let d;if(Mt(u)){const t=u.length,e=null===u[0]?1:0;c=u[e],h=xi(c);for(let n=e;n<t&&null!==u[n];n++)d?ye(xi(u[n])===d,"All keyframes must be of the same type"):(d=xi(u[n]),ye(d===h||Ns(h)&&Ns(d),"Keyframes must be of the same dimension as the current value"))}else d=xi(u);if(h!==d)if(Ns(h)&&Ns(d)){const t=l.get();"string"==typeof t&&l.set(parseFloat(t)),"string"==typeof u?e[o]=parseFloat(u):Array.isArray(u)&&d===et&&(e[o]=u.map(parseFloat))}else(null==h?void 0:h.transform)&&(null==d?void 0:d.transform)&&(0===c||0===u)?0===c?l.set(d.transform(c)):e[o]=h.transform(u):(r||(s=function(t){const e=[];return _s.forEach((n=>{const i=t.getValue(n);void 0!==i&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))})),e.length&&t.render(),e}(t),r=!0),a.push(o),i[o]=void 0!==i[o]?i[o]:e[o],l.jump(u))})),a.length){const n=a.indexOf("height")>=0?window.pageYOffset:null,o=((t,e,n)=>{const i=e.measureViewportBox(),o=e.current,s=getComputedStyle(o),{display:r}=s,a={};"none"===r&&e.setStaticValue("display",t.display||"block"),n.forEach((t=>{a[t]=Xs[t](i,s)})),e.render();const l=e.measureViewportBox();return n.forEach((n=>{const i=e.getValue(n);i&&i.jump(a[n]),t[n]=Xs[n](l,s)})),t})(e,t,a);return s.length&&s.forEach((([e,n])=>{t.getValue(e).set(n)})),t.render(),l&&null!==n&&window.scrollTo({top:n}),{target:o,transitionEnd:i}}return{target:e,transitionEnd:i}};function Gs(t,e,n,i){return(t=>Object.keys(t).some(Us))(e)?Ys(t,e,n,i):{target:e,transitionEnd:i}}const qs=(t,e,n,i)=>{const o=function(t,{...e},n){const i=t.current;if(!(i instanceof Element))return{target:e,transitionEnd:n};n&&(n={...n}),t.values.forEach((t=>{const e=t.get();if(!N(e))return;const n=Os(e,i);n&&t.set(n)}));for(const o in e){const t=e[o];if(!N(t))continue;const s=Os(t,i);s&&(e[o]=s,n||(n={}),void 0===n[o]&&(n[o]=t))}return{target:e,transitionEnd:n}}(t,e,i);return Gs(t,e=o.target,n,i=o.transitionEnd)},Zs={current:null},Ks={current:!1};const Js=new WeakMap,Qs=Object.keys(S),tr=Qs.length,er=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],nr=y.length;class ir{constructor({parent:t,props:e,presenceContext:n,reducedMotionConfig:i,visualState:o},s={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>zt.render(this.render,!1,!0);const{latestValues:r,renderState:a}=o;this.latestValues=r,this.baseTarget={...r},this.initialValues=e.initial?{...r}:{},this.renderState=a,this.parent=t,this.props=e,this.presenceContext=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.isControllingVariants=v(e),this.isVariantNode=b(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...c}=this.scrapeMotionValuesFromProps(e,{});for(const h in c){const t=c[h];void 0!==r[h]&&F(t)&&(t.set(r[h],!1),hi(l)&&l.add(h))}}scrapeMotionValuesFromProps(t,e){return{}}mount(t){this.current=t,Js.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((t,e)=>this.bindToMotionValue(e,t))),Ks.current||function(){if(Ks.current=!0,l)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Zs.current=t.matches;t.addListener(e),e()}else Zs.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Zs.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Js.delete(this.current),this.projection&&this.projection.unmount(),Ut(this.notifyUpdate),Ut(this.render),this.valueSubscriptions.forEach((t=>t())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,e){const n=R.has(t),i=e.on("change",(e=>{this.latestValues[t]=e,this.props.onUpdate&&zt.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),o=e.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,(()=>{i(),o()}))}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}loadFeatures({children:t,...e},n,i,o){let s,r;for(let a=0;a<tr;a++){const t=Qs[a],{isEnabled:n,Feature:i,ProjectionNode:o,MeasureLayout:l}=S[t];o&&(s=o),n(e)&&(!this.features[t]&&i&&(this.features[t]=new i(this)),l&&(r=l))}if(!this.projection&&s){this.projection=new s(this.latestValues,this.parent&&this.parent.projection);const{layoutId:t,layout:n,drag:i,dragConstraints:r,layoutScroll:a,layoutRoot:l}=e;this.projection.setOptions({layoutId:t,layout:n,alwaysMeasureLayout:Boolean(i)||r&&p(r),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"==typeof n?n:"both",initialPromotionConfig:o,layoutScroll:a,layoutRoot:l})}return r}updateFeatures(){for(const t in this.features){const e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):so()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}makeTargetAnimatable(t,e=!0){return this.makeTargetAnimatableFromInstance(t,this.props,e)}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let n=0;n<er.length;n++){const e=er[n];this.propEventSubscriptions[e]&&(this.propEventSubscriptions[e](),delete this.propEventSubscriptions[e]);const i=t["on"+e];i&&(this.propEventSubscriptions[e]=this.on(e,i))}this.prevMotionValues=function(t,e,n){const{willChange:i}=e;for(const o in e){const s=e[o],r=n[o];if(F(s))t.addValue(o,s),hi(i)&&i.add(o);else if(F(r))t.addValue(o,yi(s,{owner:t})),hi(i)&&i.remove(o);else if(r!==s)if(t.hasValue(o)){const e=t.getValue(o);!e.hasAnimated&&e.set(s)}else{const e=t.getStaticValue(o);t.addValue(o,yi(void 0!==e?e:s,{owner:t}))}}for(const o in n)void 0===e[o]&&t.removeValue(o);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const t=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(t.initial=this.props.initial),t}const e={};for(let n=0;n<nr;n++){const t=y[n],i=this.props[t];(m(i)||!1===i)&&(e[t]=i)}return e}addVariantChild(t){const e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){e!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,e)),this.values.set(t,e),this.latestValues[t]=e.get()}removeValue(t){this.values.delete(t);const e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let n=this.values.get(t);return void 0===n&&void 0!==e&&(n=yi(e,{owner:this}),this.addValue(t,n)),n}readValue(t){var e;return void 0===this.latestValues[t]&&this.current?null!==(e=this.getBaseTargetFromProps(this.props,t))&&void 0!==e?e:this.readValueFromInstance(this.current,t,this.options):this.latestValues[t]}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;const{initial:n}=this.props,i="string"==typeof n||"object"==typeof n?null===(e=Vt(this.props,n))||void 0===e?void 0:e[t]:void 0;if(n&&void 0!==i)return i;const o=this.getBaseTargetFromProps(this.props,t);return void 0===o||F(o)?void 0!==this.initialValues[t]&&void 0===i?void 0:this.baseTarget[t]:o}on(t,e){return this.events[t]||(this.events[t]=new mi),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class or extends ir{sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:n}){delete e[t],delete n[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:e,...n},{transformValues:i},o){let s=function(t,e,n){const i={};for(const o in t){const t=Ti(o,e);if(void 0!==t)i[o]=t;else{const t=n.getValue(o);t&&(i[o]=t.get())}}return i}(n,t||{},this);if(i&&(e&&(e=i(e)),n&&(n=i(n)),s&&(s=i(s))),o){!function(t,e,n){var i,o;const s=Object.keys(e).filter((e=>!t.hasValue(e))),r=s.length;var a;if(r)for(let l=0;l<r;l++){const r=s[l],c=e[r];let h=null;Array.isArray(c)&&(h=c[0]),null===h&&(h=null!==(o=null!==(i=n[r])&&void 0!==i?i:t.readValue(r))&&void 0!==o?o:e[r]),null!=h&&("string"==typeof h&&(ui(h)||ri(h))?h=parseFloat(h):(a=h,!wi.find(vi(a))&&dn.test(c)&&(h=si(r,c))),t.addValue(r,yi(h,{owner:t})),void 0===n[r]&&(n[r]=h),null!==h&&t.setBaseTarget(r,h))}}(this,n,s);const t=qs(this,n,s,e);e=t.transitionEnd,n=t.target}return{transition:t,transitionEnd:e,...n}}}class sr extends or{readValueFromInstance(t,e){if(R.has(e)){const t=oi(e);return t&&t.default||0}{const i=(n=t,window.getComputedStyle(n)),o=(U(e)?i.getPropertyValue(e):i[e])||0;return"string"==typeof o?o.trim():o}var n}measureInstanceViewportBox(t,{transformPagePoint:e}){return To(t,e)}build(t,e,n,i){at(t,e,n,i.transformTemplate)}scrapeMotionValuesFromProps(t,e){return Et(t,e)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;F(t)&&(this.childSubscription=t.on("change",(t=>{this.current&&(this.current.textContent=`${t}`)})))}renderInstance(t,e,n,i){Tt(t,e,n,i)}}class rr extends or{constructor(){super(...arguments),this.isSVGTag=!1}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(R.has(e)){const t=oi(e);return t&&t.default||0}return e=kt.has(e)?e:u(e),t.getAttribute(e)}measureInstanceViewportBox(){return so()}scrapeMotionValuesFromProps(t,e){return At(t,e)}build(t,e,n,i){bt(t,e,n,this.isSVGTag,i.transformTemplate)}renderInstance(t,e,n,i){Ct(t,e,0,i)}mount(t){this.isSVGTag=wt(t.tagName),super.mount(t)}}const ar=(t,e)=>D(t)?new rr(e,{enableHardwareAcceleration:!1}):new sr(e,{enableHardwareAcceleration:!0}),lr={...Ii,...pe,...Bs,...{layout:{ProjectionNode:Rs,MeasureLayout:Bo}}},cr=V(((t,e)=>function(t,{forwardMotionProps:e=!1},n,i){return{...D(t)?Ht:$t,preloadedFeatures:n,useRender:St(e),createVisualElement:i,Component:t}}(t,e,lr,ar)));var hr=o.createGlobalStyle`
  ${""}
  body {
    color: ${t=>{let{theme:e}=t;return e.colors.fontColor}}
  }
`,ur=o.createGlobalStyle`
  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
  body {
    margin: 0;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  audio,
  canvas,
  progress,
  video {
    display: inline-block;
  }
  audio:not([controls]) {
    display: none;
    height: 0;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden],
  template {
    display: none;
  }
  a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }
  a:active,
  a:hover {
    outline-width: 0;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: inherit;
    font-weight: bolder;
  }
  dfn {
    font-style: italic;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  mark {
    background-color: #ff0;
    color: #000;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  img {
    border-style: none;
  }
  svg:not(:root) {
    overflow: hidden;
  }
  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }
  figure {
    margin: 1em 40px;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    margin: 0;
  }
  optgroup {
    font-weight: 700;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  [type='reset'],
  [type='submit'],
  button,
  html [type='button'] {
    -webkit-appearance: button;
  }
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  html {
    font: 112.5%/1.45em georgia, serif;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  * {
    box-sizing: inherit;
  }
  *:before {
    box-sizing: inherit;
  }
  *:after {
    box-sizing: inherit;
  }
  body {
    color: hsla(0, 0%, 0%, 0.8);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    text-decoration: none;
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
  img {
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  h1 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 2.25rem;
    line-height: 1.1;
  }
  h2 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.62671rem;
    line-height: 1.1;
  }
  h3 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1.38316rem;
    line-height: 1.1;
  }
  h4 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 1rem;
    line-height: 1.1;
  }
  h5 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.85028rem;
    line-height: 1.1;
  }
  h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    color: inherit;
    font-weight: bold;
    text-rendering: optimizeLegibility;
    font-size: 0.78405rem;
    line-height: 1.1;
  }
  hgroup {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  ul {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  ol {
    margin-left: 1.45rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    list-style-position: outside;
    list-style-image: none;
  }
  dl {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  dd {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  p {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  figure {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  pre {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 0.85rem;
    line-height: 1.42;
    background: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    overflow: auto;
    word-wrap: normal;
    padding: 1.45rem;
  }
  table {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
    font-size: 1rem;
    line-height: 1.45rem;
    border-collapse: collapse;
    width: 100%;
  }
  fieldset {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  blockquote {
    margin-left: 1.45rem;
    margin-right: 1.45rem;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  form {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  noscript {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  iframe {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  hr {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: calc(1.45rem - 1px);
    background: hsla(0, 0%, 0%, 0.2);
    border: none;
    height: 1px;
  }
  address {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }
  b {
    font-weight: bold;
  }
  strong {
    font-weight: bold;
  }
  dt {
    font-weight: bold;
  }
  th {
    font-weight: bold;
  }
  li {
    margin-bottom: calc(1.45rem / 2);
  }
  ol li {
    padding-left: 0;
  }
  ul li {
    padding-left: 0;
  }
  li > ol {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  li > ul {
    margin-left: 1.45rem;
    margin-bottom: calc(1.45rem / 2);
    margin-top: calc(1.45rem / 2);
  }
  blockquote *:last-child {
    margin-bottom: 0;
  }
  li *:last-child {
    margin-bottom: 0;
  }
  p *:last-child {
    margin-bottom: 0;
  }
  li > p {
    margin-bottom: calc(1.45rem / 2);
  }
  code {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  kbd {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  samp {
    font-size: 0.85rem;
    line-height: 1.45rem;
  }
  abbr {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  acronym {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
  }
  abbr[title] {
    border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
    cursor: help;
    text-decoration: none;
  }
  thead {
    text-align: left;
  }
  td,
  th {
    text-align: left;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
    font-feature-settings: 'tnum';
    -moz-font-feature-settings: 'tnum';
    -ms-font-feature-settings: 'tnum';
    -webkit-font-feature-settings: 'tnum';
    padding-left: 0.96667rem;
    padding-right: 0.96667rem;
    padding-top: 0.725rem;
    padding-bottom: calc(0.725rem - 1px);
  }
  th:first-child,
  td:first-child {
    padding-left: 0;
  }
  th:last-child,
  td:last-child {
    padding-right: 0;
  }
  tt,
  code {
    background-color: hsla(0, 0%, 0%, 0.04);
    border-radius: 3px;
    font-family: 'SFMono-Regular', Consolas, 'Roboto Mono', 'Droid Sans Mono',
      'Liberation Mono', Menlo, Courier, monospace;
    padding: 0;
    padding-top: 0.2em;
    padding-bottom: 0.2em;
  }
  pre code {
    background: none;
    line-height: 1.42;
  }
  code:before,
  code:after,
  tt:before,
  tt:after {
    letter-spacing: -0.2em;
    content: ' ';
  }
  pre code:before,
  pre code:after,
  pre tt:before,
  pre tt:after {
    content: '';
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
`,dr=n(3710),pr=n.n(dr),mr={light:{colors:{background:pr().background_color,primary:pr().theme_color,fontColor:pr().fontColor}},dark:{colors:{background:"#212121",primary:"#636363",fontColor:"#FFF"}}},fr=n(4854),gr=n(4405),yr=function(t){return(0,gr.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}}]})(t)};yr.displayName="FiMoon";var vr=function(t){return(0,gr.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"}},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"}},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"}},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"}},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"}},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}}]})(t)};vr.displayName="FiSun";function br(){return br=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},br.apply(this,arguments)}var xr=i.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},i.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),wr=i.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},i.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function Pr(t){if(7===t.length)return t;for(var e="#",n=1;n<4;n+=1)e+=t[n]+t[n];return e}function Sr(t,e,n,i,o){return function(t,e,n,i,o){var s=(t-n)/(e-n);if(0===s)return i;if(1===s)return o;for(var r="#",a=1;a<6;a+=2){var l=parseInt(i.substr(a,2),16),c=parseInt(o.substr(a,2),16),h=Math.round((1-s)*l+s*c).toString(16);1===h.length&&(h="0"+h),r+=h}return r}(t,e,n,Pr(i),Pr(o))}var Tr=function(t){function e(e){t.call(this,e);var n=e.height,i=e.width,o=e.checked;this.t=e.handleDiameter||n-2,this.i=Math.max(i-n,i-(n+this.t)/2),this.o=Math.max(0,(n-this.t)/2),this.state={h:o?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.m=this.m.bind(this),this.M=this.M.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,n=e.R,i=e.h,o=(this.props.checked?this.i:this.o)+t-n;e.N||t===n||this.setState({N:!0});var s=Math.min(this.i,Math.max(this.o,o));s!==i&&this.setState({h:s})},e.prototype.U=function(t){var e=this.state,n=e.h,i=e.N,o=e.B,s=this.props.checked,r=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-o;(!i||a<250||s&&n<=r||!s&&n>=r)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.m=function(t){this.L(t.touches[0].clientX)},e.prototype.M=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,n=t.disabled,o=t.className,s=t.offColor,r=t.onColor,a=t.offHandleColor,l=t.onHandleColor,c=t.checkedIcon,h=t.uncheckedIcon,u=t.checkedHandleIcon,d=t.uncheckedHandleIcon,p=t.boxShadow,m=t.activeBoxShadow,f=t.height,g=t.width,y=t.borderRadius,v=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&-1===e.indexOf(i)&&(n[i]=t[i]);return n}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),b=this.state,x=b.h,w=b.N,P=b.j,S={position:"relative",display:"inline-block",textAlign:"left",opacity:n?.5:1,direction:"ltr",borderRadius:f/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},T={height:f,width:g,margin:Math.max(0,(this.t-f)/2),position:"relative",background:Sr(x,this.i,this.o,s,r),borderRadius:"number"==typeof y?y:f/2,cursor:n?"default":"pointer",WebkitTransition:w?null:"background 0.25s",MozTransition:w?null:"background 0.25s",transition:w?null:"background 0.25s"},k={height:f,width:Math.min(1.5*f,g-(this.t+f)/2+1),position:"relative",opacity:(x-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},C={height:f,width:Math.min(1.5*f,g-(this.t+f)/2+1),position:"absolute",opacity:1-(x-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},E={height:this.t,width:this.t,background:Sr(x,this.i,this.o,a,l),display:"inline-block",cursor:n?"default":"pointer",borderRadius:"number"==typeof y?y-1:"50%",position:"absolute",transform:"translateX("+x+"px)",top:Math.max(0,(f-this.t)/2),outline:0,boxShadow:P?m:p,border:0,WebkitTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:w?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},A={height:this.t,width:this.t,opacity:Math.max(2*(1-(x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"},V={height:this.t,width:this.t,opacity:Math.max(2*((x-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:w?null:"opacity 0.25s",MozTransition:w?null:"opacity 0.25s",transition:w?null:"opacity 0.25s"};return i.createElement("div",{className:o,style:S},i.createElement("div",{className:"react-switch-bg",style:T,onClick:n?null:this.T,onMouseDown:function(t){return t.preventDefault()}},c&&i.createElement("div",{style:k},c),h&&i.createElement("div",{style:C},h)),i.createElement("div",{className:"react-switch-handle",style:E,onClick:function(t){return t.preventDefault()},onMouseDown:n?null:this.p,onTouchStart:n?null:this.k,onTouchMove:n?null:this.m,onTouchEnd:n?null:this.M,onTouchCancel:n?null:this.O},d&&i.createElement("div",{style:A},d),u&&i.createElement("div",{style:V},u)),i.createElement("input",br({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:n,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},v,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(i.Component);Tr.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:xr,checkedIcon:wr,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56};const kr=o.default.header.withConfig({displayName:"header__HeaderWrapper",componentId:"dwojrj-0"})(["position:fixed;top:0;left:0;margin:0 auto;display:block;width:100%;z-index:1000;background-color:",";"],(t=>{let{theme:e}=t;return e.colors.primary})),Cr=o.default.nav.withConfig({displayName:"header__HeaderNav",componentId:"dwojrj-1"})(["margin-left:auto;margin-right:auto;height:60px;display:flex;flex-direction:row;max-width:960px;z-index:1000;justify-content:space-between;overflow-x:auto;overflow-y:hidden;background-color:",";a:hover{filter:brightness(0.6);}"],(t=>{let{theme:e}=t;return e.colors.primary})),Er=o.default.div.withConfig({displayName:"header__HeaderLinkGroup",componentId:"dwojrj-2"})(["display:flex;flex-direction:row;"]),Ar=(0,o.default)(fr.Link).withConfig({displayName:"header__HeaderLink",componentId:"dwojrj-3"})(["position:relative;box-sizing:border-box;text-decoration:none;display:flex;align-items:center;color:#fff;border:0;margin:0;margin-right:0.5rem;padding-left:20px;padding-right:20px;min-width:42px;z-index:10;",""],(t=>{let{active:e}=t;return e&&(0,o.css)(["pointer-events:none;border-bottom:2px solid #fff;"])})),Vr=(0,o.default)(Tr).attrs((t=>({onHandleColor:t.theme.colors.primary,offHandleColor:t.theme.colors.primary}))).withConfig({displayName:"header__StyledSwitch",componentId:"dwojrj-4"})([""]),Mr=o.default.div.withConfig({displayName:"header__SwitchWrapper",componentId:"dwojrj-5"})(["display:flex;align-items:center;padding-right:20px;"]),Dr=o.default.div.withConfig({displayName:"header__IconWrapper",componentId:"dwojrj-6"})(["display:flex;align-items:center;justify-content:center;height:100%;"]);var Lr=t=>{let{location:e,onChangeTheme:n,theme:o}=t;const{headerLinks:s}=pr();return i.createElement(kr,null,i.createElement(Cr,null,i.createElement(Er,null,s.map(((t,n)=>i.createElement(Ar,{active:e.pathname===(0,fr.withPrefix)(t.url),to:t.url,key:`header-link-${n}`},t.label)))),pr().enableDarkmode&&i.createElement(Mr,null,i.createElement(Vr,{onChange:n,checked:"light"===o,onColor:"#626262",offColor:"#212121",checkedIcon:i.createElement(Dr,null,i.createElement(vr,{color:"yellow"})),uncheckedIcon:i.createElement(Dr,null,i.createElement(yr,{color:"white"}))}))))},jr=n(9583),Rr=n(5597);const Br=(0,o.default)((t=>{let{className:e,icon:n,color:o,...s}=t;return i.createElement("a",Object.assign({className:e,target:"_blank",rel:"noopener noreferrer"},s),i.createElement(n,{color:o,size:32}))})).attrs((t=>({color:t.theme.colors.primary}))).withConfig({displayName:"footer__Link",componentId:"sc-1fje3a5-0"})(["& + &{margin-left:24px;}"]);var Fr=(0,o.default)((t=>{let{className:e}=t;const{twitter:n,linkedin:o,github:s}=pr().social;return i.createElement("footer",{className:e},`© ${(new Date).getFullYear()} ${pr().authorName}`,i.createElement("div",null,s&&i.createElement(Br,{href:s,icon:jr.hJX}),n&&i.createElement(Br,{href:n,icon:jr.fWC}),o&&i.createElement(Br,{href:o,icon:jr.ltd})))})).withConfig({displayName:"footer",componentId:"sc-1fje3a5-1"})(["min-height:93px;display:flex;flex-direction:column-reverse;justify-content:space-between;align-items:center;max-width:calc(960px + 48px);margin:0 auto;padding:0 24px;background:",";",""],(t=>{let{theme:e}=t;return e.colors.background}),(t=>(0,Rr.config)(t).media.sm`
    flex-direction: row;
  `));const Ir=()=>{let t;"undefined"!=typeof window&&(t=window.__theme);const{0:e,1:n}=(0,i.useState)(t);return(0,i.useEffect)((()=>{n(window.__theme),window.__onThemeChange=()=>{n(window.__theme)}}),[]),[e,()=>{window.__setPreferredTheme("dark"===t?"light":"dark")}]},Or=t=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{(t=>{let e=t.boundingClientRect;if(!e)return!0;const n=window.innerHeight||document.documentElement.clientHeight;return e.top<=0&&e.bottom>=0||e.bottom>=n&&e.top<=n||e.top>=0&&e.bottom<=n})(t)&&t.target.classList.add("is-visible")}))}));(t||document.querySelectorAll(".animate-on-scroll")).forEach((t=>e.observe(t)))},zr={initial:{y:100,opacity:0},enter:{y:0,opacity:1,transition:{duration:.5}}},Ur=o.default.div.withConfig({displayName:"layout__StyledContainer",componentId:"sc-1rswefg-0"})(["background:",";overflow-x:hidden;"],(t=>{let{theme:e}=t;return e.colors.background}));var Nr=t=>{let{children:e,location:n}=t;const[s,r]=Ir();return(0,i.useEffect)((()=>{Or()}),[]),i.createElement(o.ThemeProvider,{theme:mr[s||"light"]},i.createElement(Ur,null,i.createElement(Lr,{location:n,onChangeTheme:r,theme:s}),i.createElement(ur,null),i.createElement(hr,null),i.createElement(cr.main,{key:n,variants:zr,initial:"initial",animate:"enter"},e),i.createElement(Fr,null)))}}}]);
//# sourceMappingURL=c8f7fe3b0e41be846d5687592cf2018ff6e22687-164cbb660c576d51b9e6.js.map