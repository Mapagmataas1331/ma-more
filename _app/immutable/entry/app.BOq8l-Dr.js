const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CqHv8-ur.js","../chunks/disclose-version.DrpD7ivd.js","../chunks/utils.BJa49uzO.js","../chunks/language.DT5iaacx.js","../chunks/index.Bc2qLAm0.js","../chunks/popper-layer-force-mount.H4gZbzc2.js","../chunks/index-client.B-8U0orQ.js","../chunks/stores.BjaNNTx1.js","../chunks/entry.BWMR-9mJ.js","../chunks/Toaster.svelte_svelte_type_style_lang.izZw1kS8.js","../assets/Toaster.DKF17Rty.css","../assets/0.G-5UXydq.css","../nodes/1.RnyiNNga.js","../chunks/index.DCK-712d.js","../nodes/2.BMQv_7LR.js","../nodes/3.B0RjKE8-.js"])))=>i.map(i=>d[i]);
var G=n=>{throw TypeError(n)};var U=(n,e,r)=>e.has(n)||G("Cannot "+r);var c=(n,e,r)=>(U(n,e,"read from private field"),r?r.call(n):e.get(n)),C=(n,e,r)=>e.has(n)?G("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,r),O=(n,e,r,o)=>(U(n,e,"write to private field"),o?o.call(n,r):e.set(n,r),r);import{A as v,L as Y,z as x,C as K,D as Q,F as X,v as Z,G as M,u as N,H as p,q as w,s as $,y as ee,I as S,J as D,c as te,t as re,r as se}from"../chunks/utils.BJa49uzO.js";import{h as ne,m as ae,u as oe,p as I,g as ce,i as T,f as j,a as P,t as F,j as V,b as ie,c as le}from"../chunks/disclose-version.DrpD7ivd.js";import{o as ue,c as q}from"../chunks/index-client.B-8U0orQ.js";function de(n){return class extends fe{constructor(e){super({component:n,...e})}}}var g,u;class fe{constructor(e){C(this,g);C(this,u);var _;var r=new Map,o=(s,t)=>{var d=X(t);return r.set(s,d),d};const i=new Proxy({...e.props||{},$$events:{}},{get(s,t){return v(r.get(t)??o(t,Reflect.get(s,t)))},has(s,t){return t===Y?!0:(v(r.get(t)??o(t,Reflect.get(s,t))),Reflect.has(s,t))},set(s,t,d){return x(r.get(t)??o(t,d),d),Reflect.set(s,t,d)}});O(this,u,(e.hydrate?ne:ae)(e.component,{target:e.target,anchor:e.anchor,props:i,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((_=e==null?void 0:e.props)!=null&&_.$$host)||e.sync===!1)&&K(),O(this,g,i.$$events);for(const s of Object.keys(c(this,u)))s==="$set"||s==="$destroy"||s==="$on"||Q(this,s,{get(){return c(this,u)[s]},set(t){c(this,u)[s]=t},enumerable:!0});c(this,u).$set=s=>{Object.assign(i,s)},c(this,u).$destroy=()=>{oe(c(this,u))}}$set(e){c(this,u).$set(e)}$on(e,r){c(this,g)[e]=c(this,g)[e]||[];const o=(...i)=>r.call(this,...i);return c(this,g)[e].push(o),()=>{c(this,g)[e]=c(this,g)[e].filter(i=>i!==o)}}$destroy(){c(this,u).$destroy()}}g=new WeakMap,u=new WeakMap;const me="modulepreload",he=function(n,e){return new URL(n,e).href},z={},k=function(e,r,o){let i=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),t=document.querySelector("meta[property=csp-nonce]"),d=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));i=Promise.allSettled(r.map(l=>{if(l=he(l,o),l in z)return;z[l]=!0;const y=l.endsWith(".css"),L=y?'[rel="stylesheet"]':"";if(!!o)for(let f=s.length-1;f>=0;f--){const h=s[f];if(h.href===l&&(!y||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${L}`))return;const a=document.createElement("link");if(a.rel=y?"stylesheet":me,y||(a.as="script"),a.crossOrigin="",a.href=l,d&&a.setAttribute("nonce",d),document.head.appendChild(a),y)return new Promise((f,h)=>{a.addEventListener("load",f),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${l}`)))})}))}function _(s){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=s,window.dispatchEvent(t),!t.defaultPrevented)throw s}return i.then(s=>{for(const t of s||[])t.status==="rejected"&&_(t.reason);return e().catch(_)})},we={};var _e=F('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),ve=F("<!> <!>",1);function ge(n,e){Z(e,!0);let r=I(e,"components",23,()=>[]),o=I(e,"data_0",3,null),i=I(e,"data_1",3,null);M(()=>e.stores.page.set(e.page)),N(()=>{e.stores,e.page,e.constructors,r(),e.form,o(),i(),e.stores.page.notify()});let _=S(!1),s=S(!1),t=S(null);ue(()=>{const E=e.stores.page.subscribe(()=>{v(_)&&(x(s,!0),p().then(()=>{x(t,ce(document.title||"untitled page"))}))});return x(_,!0),E});const d=D(()=>e.constructors[1]);var l=ve(),y=w(l);T(y,()=>e.constructors[1],E=>{var a=j();const f=D(()=>e.constructors[0]);var h=w(a);q(h,()=>v(f),(b,A)=>{V(A(b,{get data(){return o()},get form(){return e.form},children:(m,ye)=>{var B=j(),H=w(B);q(H,()=>v(d),(J,W)=>{V(W(J,{get data(){return i()},get form(){return e.form}}),R=>r()[1]=R,()=>{var R;return(R=r())==null?void 0:R[1]})}),P(m,B)},$$slots:{default:!0}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),P(E,a)},E=>{var a=j();const f=D(()=>e.constructors[0]);var h=w(a);q(h,()=>v(f),(b,A)=>{V(A(b,{get data(){return o()},get form(){return e.form}}),m=>r()[0]=m,()=>{var m;return(m=r())==null?void 0:m[0]})}),P(E,a)});var L=$(y,2);T(L,()=>v(_),E=>{var a=_e(),f=te(a);T(f,()=>v(s),h=>{var b=ie();re(()=>le(b,v(t))),P(h,b)}),se(a),P(E,a)}),P(n,l),ee()}const ke=de(ge),xe=[()=>k(()=>import("../nodes/0.CqHv8-ur.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>k(()=>import("../nodes/1.RnyiNNga.js"),__vite__mapDeps([12,1,2,3,4,7,5,6,8,13]),import.meta.url),()=>k(()=>import("../nodes/2.BMQv_7LR.js"),__vite__mapDeps([14,1,2,3,4]),import.meta.url),()=>k(()=>import("../nodes/3.B0RjKE8-.js"),__vite__mapDeps([15,1,2,5,3,4,6,9,10,13]),import.meta.url)],Le=[],Ae={"/":[2],"/og":[3]},Ce={handleError:({error:n})=>{console.error(n)},reroute:()=>{}};export{Ae as dictionary,Ce as hooks,we as matchers,xe as nodes,ke as root,Le as server_loads};