import{a1 as x,a2 as me,a3 as Pe,a4 as R,a5 as Te,z as P,a6 as C,a7 as y,A as m,H as O,a8 as Re,W as Se,a9 as ce,h as g,C as M,aa as de,V as k,ab as Y,ac as B,ad as _e,ae as ve,M as Oe,D as H,af as Ae,ag as Ie,j as b,G as K,i as ee,ah as z,ai as Ne,aj as Le,ak as $,F as D,al as De,am as xe,an as Ce,ao as Me,ap as Be,g as G,v as je,y as qe,k as Fe,f as Ve,I as te,p as ae,E as Ye,aq as He,ar as Ke,as as Ue,_ as We,o as Z,O as pe,a as J,b as $e,at as ze,au as Ge,av as he,aw as Ze,ax as ie,ay as q,L as be,az as Je,aA as Qe,aB as Xe,m as ke,aC as er,aD as rr,S as se,a0 as nr,aE as tr}from"./utils.BA9wYpzD.js";function L(e,r=null,n){if(typeof e!="object"||e===null||x in e)return e;const i=Se(e);if(i!==me&&i!==Pe)return e;var t=new Map,a=ce(e),d=R(0);a&&t.set("length",R(e.length));var _;return new Proxy(e,{defineProperty(f,s,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&Te();var o=t.get(s);return o===void 0?(o=R(l.value),t.set(s,o)):P(o,L(l.value,_)),!0},deleteProperty(f,s){var l=t.get(s);if(l===void 0)s in f&&t.set(s,R(y));else{if(a&&typeof s=="string"){var o=t.get("length"),u=Number(s);Number.isInteger(u)&&u<o.v&&P(o,u)}P(l,y),ue(d)}return!0},get(f,s,l){var v;if(s===x)return e;var o=t.get(s),u=s in f;if(o===void 0&&(!u||(v=C(f,s))!=null&&v.writable)&&(o=R(L(u?f[s]:y,_)),t.set(s,o)),o!==void 0){var c=m(o);return c===y?void 0:c}return Reflect.get(f,s,l)},getOwnPropertyDescriptor(f,s){var l=Reflect.getOwnPropertyDescriptor(f,s);if(l&&"value"in l){var o=t.get(s);o&&(l.value=m(o))}else if(l===void 0){var u=t.get(s),c=u==null?void 0:u.v;if(u!==void 0&&c!==y)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return l},has(f,s){var c;if(s===x)return!0;var l=t.get(s),o=l!==void 0&&l.v!==y||Reflect.has(f,s);if(l!==void 0||O!==null&&(!o||(c=C(f,s))!=null&&c.writable)){l===void 0&&(l=R(o?L(f[s],_):y),t.set(s,l));var u=m(l);if(u===y)return!1}return o},set(f,s,l,o){var E;var u=t.get(s),c=s in f;if(a&&s==="length")for(var v=l;v<u.v;v+=1){var h=t.get(v+"");h!==void 0?P(h,y):v in f&&(h=R(y),t.set(v+"",h))}u===void 0?(!c||(E=C(f,s))!=null&&E.writable)&&(u=R(void 0),P(u,L(l,_)),t.set(s,u)):(c=u.v!==y,P(u,L(l,_)));var w=Reflect.getOwnPropertyDescriptor(f,s);if(w!=null&&w.set&&w.set.call(o,l),!c){if(a&&typeof s=="string"){var A=t.get("length"),S=Number(s);Number.isInteger(S)&&S>=A.v&&P(A,S+1)}ue(d)}return!0},ownKeys(f){m(d);var s=Reflect.ownKeys(f).filter(u=>{var c=t.get(u);return c===void 0||c.v!==y});for(var[l,o]of t)o.v!==y&&!(l in f)&&s.push(l);return s},setPrototypeOf(){Re()}})}function ue(e,r=1){P(e,e.v+r)}function wr(e,r){if(r){const n=document.body;e.autofocus=!0,k(()=>{document.activeElement===n&&e.focus()})}}function yr(e){g&&M(e)!==null&&de(e)}let fe=!1;function ar(){fe||(fe=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const n of e.target.elements)(r=n.__on_r)==null||r.call(n)})},{capture:!0}))}function we(e){var r=_e,n=O;Y(null),B(null);try{return e()}finally{Y(r),B(n)}}function gr(e,r,n,i=n){e.addEventListener(r,()=>we(n));const t=e.__on_r;t?e.__on_r=()=>{t(),i()}:e.__on_r=i,ar()}const ye=new Set,Q=new Set;function ir(e,r,n,i){function t(a){if(i.capture||F.call(r,a),!a.cancelBubble)return we(()=>n.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?k(()=>{r.addEventListener(e,t,i)}):r.addEventListener(e,t,i),t}function Er(e,r,n,i,t){var a={capture:i,passive:t},d=ir(e,r,n,a);(r===document.body||r===window||r===document)&&ve(()=>{r.removeEventListener(e,d,a)})}function mr(e){for(var r=0;r<e.length;r++)ye.add(e[r]);for(var n of Q)n(e)}function F(e){var S;var r=this,n=r.ownerDocument,i=e.type,t=((S=e.composedPath)==null?void 0:S.call(e))||[],a=t[0]||e.target,d=0,_=e.__root;if(_){var f=t.indexOf(_);if(f!==-1&&(r===document||r===window)){e.__root=r;return}var s=t.indexOf(r);if(s===-1)return;f<=s&&(d=f)}if(a=t[d]||e.target,a!==r){Oe(e,"currentTarget",{configurable:!0,get(){return a||n}});var l=_e,o=O;Y(null),B(null);try{for(var u,c=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var h=a["__"+i];if(h!==void 0&&!a.disabled)if(ce(h)){var[w,...A]=h;w.apply(a,[e,...A])}else h.call(a,e)}catch(E){u?c.push(E):u=E}if(e.cancelBubble||v===r||v===null)break;a=v}if(u){for(let E of c)queueMicrotask(()=>{throw E});throw u}}finally{e.__root=r,delete e.currentTarget,Y(l),B(o)}}}function ge(e){var r=document.createElement("template");return r.innerHTML=e,r.content}function T(e,r){var n=O;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=r)}function Pr(e,r){var n=(r&Ae)!==0,i=(r&Ie)!==0,t,a=!e.startsWith("<!>");return()=>{if(g)return T(b,null),b;t===void 0&&(t=ge(a?e:"<!>"+e),n||(t=M(t)));var d=i?document.importNode(t,!0):t.cloneNode(!0);if(n){var _=M(d),f=d.lastChild;T(_,f)}else T(d,d);return d}}function Tr(e,r,n="svg"){var i=!e.startsWith("<!>"),t=`<${n}>${i?e:"<!>"+e}</${n}>`,a;return()=>{if(g)return T(b,null),b;if(!a){var d=ge(t),_=M(d);a=M(_)}var f=a.cloneNode(!0);return T(f,f),f}}function Rr(e=""){if(!g){var r=H(e+"");return T(r,r),r}var n=b;return n.nodeType!==3&&(n.before(n=H()),K(n)),T(n,n),n}function Sr(){if(g)return T(b,null),b;var e=document.createDocumentFragment(),r=document.createComment(""),n=H();return e.append(r,n),T(r,n),e}function Or(e,r){if(g){O.nodes_end=b,ee();return}e!==null&&e.before(r)}function Ar(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const sr=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ir(e){return sr.includes(e)}const ur={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function Nr(e){return e=e.toLowerCase(),ur[e]??e}const fr=["touchstart","touchmove"];function or(e){return fr.includes(e)}function Lr(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function lr(e,r){return Ee(e,r)}function Dr(e,r){z(),r.intro=r.intro??!1;const n=r.target,i=g,t=b;try{for(var a=M(n);a&&(a.nodeType!==8||a.data!==Ne);)a=Le(a);if(!a)throw $;D(!0),K(a),ee();const d=Ee(e,{...r,anchor:a});if(b===null||b.nodeType!==8||b.data!==De)throw xe(),$;return D(!1),d}catch(d){if(d===$)return r.recover===!1&&Ce(),z(),de(n),D(!1),lr(e,r);throw d}finally{D(i),K(t)}}const N=new Map;function Ee(e,{target:r,anchor:n,props:i={},events:t,context:a,intro:d=!0}){z();var _=new Set,f=o=>{for(var u=0;u<o.length;u++){var c=o[u];if(!_.has(c)){_.add(c);var v=or(c);r.addEventListener(c,F,{passive:v});var h=N.get(c);h===void 0?(document.addEventListener(c,F,{passive:v}),N.set(c,1)):N.set(c,h+1)}}};f(Me(ye)),Q.add(f);var s=void 0,l=Be(()=>{var o=n??r.appendChild(H());return G(()=>{if(a){je({});var u=Fe;u.c=a}t&&(i.$$events=t),g&&T(o,null),s=e(o,i)||{},g&&(O.nodes_end=b),a&&qe()}),()=>{var v;for(var u of _){r.removeEventListener(u,F);var c=N.get(u);--c===0?(document.removeEventListener(u,F),N.delete(u)):N.set(u,c)}Q.delete(f),X.delete(s),o!==n&&((v=o.parentNode)==null||v.removeChild(o))}});return X.set(s,l),s}let X=new WeakMap;function xr(e){const r=X.get(e);r&&r()}function Cr(e,r,n,i=null,t=!1){g&&ee();var a=e,d=null,_=null,f=null,s=t?Ye:0;Ve(()=>{if(f===(f=!!r()))return;let l=!1;if(g){const o=a.data===He;f===o&&(a=Ke(),K(a),D(!1),l=!0)}f?(d?te(d):d=G(()=>n(a)),_&&ae(_,()=>{_=null})):(_?te(_):i&&(_=G(()=>i(a))),d&&ae(d,()=>{d=null})),l&&D(!0)},s),g&&(a=b)}function oe(e,r){return e===r||(e==null?void 0:e[x])===r}function Mr(e={},r,n,i){return Ue(()=>{var t,a;return We(()=>{t=a,a=[],Z(()=>{e!==n(...a)&&(r(e,...a),t&&oe(n(...t),e)&&r(null,...t))})}),()=>{k(()=>{a&&oe(n(...a),e)&&r(null,...a)})}}),e}let V=!1;function Br(e,r,n){const i=n[r]??(n[r]={store:null,source:pe(void 0),unsubscribe:J});if(i.store!==e)if(i.unsubscribe(),i.store=e??null,e==null)i.source.v=void 0,i.unsubscribe=J;else{var t=!0;i.unsubscribe=$e(e,a=>{t?i.source.v=a:P(i.source,a)}),t=!1}return m(i.source)}function jr(e,r,n){let i=n[r];return i&&i.store!==e&&(i.unsubscribe(),i.unsubscribe=J),e}function qr(){const e={};return ve(()=>{for(var r in e)e[r].unsubscribe()}),e}function cr(e){var r=V;try{return V=!1,[e(),V]}finally{V=r}}const dr={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Fr(e,r,n){return new Proxy({props:e,exclude:r},dr)}const _r={get(e,r){if(!e.exclude.includes(r))return m(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=pr({get[r](){return e.props[r]}},r,he)),e.special[r](n),ie(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),ie(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Vr(e,r){return new Proxy({props:e,exclude:r,special:{},version:R(0)},_r)}const vr={get(e,r){let n=e.props.length;for(;n--;){let i=e.props[n];if(q(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,n){let i=e.props.length;for(;i--;){let t=e.props[i];q(t)&&(t=t());const a=C(t,r);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let i=e.props[n];if(q(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const t=C(i,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===x||r===be)return!1;for(let n of e.props)if(q(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){q(n)&&(n=n());for(const i in n)r.includes(i)||r.push(i)}return r}};function Yr(...e){return new Proxy({props:e},vr)}function le(e){for(var r=O,n=O;r!==null&&!(r.f&(Je|Qe));)r=r.parent;try{return B(r),e()}finally{B(n)}}function pr(e,r,n,i){var ne;var t=(n&Xe)!==0,a=!ke||(n&er)!==0,d=(n&rr)!==0,_=(n&tr)!==0,f=!1,s;d?[s,f]=cr(()=>e[r]):s=e[r];var l=x in e||be in e,o=((ne=C(e,r))==null?void 0:ne.set)??(l&&d&&r in e?p=>e[r]=p:void 0),u=i,c=!0,v=!1,h=()=>(v=!0,c&&(c=!1,_?u=Z(i):u=i),u);s===void 0&&i!==void 0&&(o&&a&&ze(),s=h(),o&&o(s));var w;if(a)w=()=>{var p=e[r];return p===void 0?h():(c=!0,v=!1,p)};else{var A=le(()=>(t?se:nr)(()=>e[r]));A.f|=Ge,w=()=>{var p=m(A);return p!==void 0&&(u=void 0),p===void 0?u:p}}if(!(n&he))return w;if(o){var S=e.$$legacy;return function(p,I){return arguments.length>0?((!a||!I||S||f)&&o(I?w():p),p):w()}}var E=!1,re=!1,U=pe(s),j=le(()=>se(()=>{var p=w(),I=m(U);return E?(E=!1,re=!0,I):(re=!1,U.v=p)}));return t||(j.equals=Ze),function(p,I){if(arguments.length>0){const W=I?m(j):a&&d?L(p):p;return j.equals(W)||(E=!0,P(U,W),v&&u!==void 0&&(u=W),Z(()=>m(j))),p}return m(j)}}const hr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(hr);export{gr as A,Er as B,jr as C,yr as D,Or as a,Rr as b,Lr as c,Br as d,Yr as e,Sr as f,T as g,Dr as h,L as i,Cr as j,Mr as k,Vr as l,lr as m,Tr as n,ar as o,pr as p,Ar as q,ir as r,qr as s,Pr as t,xr as u,mr as v,wr as w,Nr as x,Ir as y,Fr as z};