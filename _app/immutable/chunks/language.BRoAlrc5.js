import{O as ur,f as He,X as qe,i as O,Q as ie,j as fr,Y as pr,Z as Ye,_ as gr,$ as ke,P as le,k as J,a0 as ne,T as $e,h as me,p as br,a1 as hr,R as Ae,a2 as ye,a3 as Ce,a4 as xe,a5 as vr,a6 as mr,a7 as yr,U as Je,N as xr,a8 as wr,a9 as _r,aa as kr,F as Ar,ab as ze,ac as Cr,ad as zr,E as Sr,a as fe,ae as Mr,af as Se,ag as Er,ah as Tr,ai as Nr,w as Ir,v as Rr,z as jr,c as Me,r as Ee,t as Te}from"./utils.BeYFwrQd.js";import{q as Gr,r as Pr,v as Vr,w as Or,x as Lr,y as Br,z as Wr,p as Q,f as Ur,i as Fr,a as ce,j as Ne,t as Ke,A as Hr}from"./disclose-version.B99yLVXW.js";import{w as qr}from"./index.DgrpdCwK.js";function Wt(e,r){return r}function Yr(e,r,t,o){for(var s=[],n=r.length,i=0;i<n;i++)vr(r[i].e,s,!0);var a=n>0&&s.length===0&&t!==null;if(a){var u=t.parentNode;mr(u),u.append(t),o.clear(),$(e,r[0].prev,r[n-1].next)}yr(s,()=>{for(var v=0;v<n;v++){var f=r[v];a||(o.delete(f.k),$(e,f.prev,f.next)),Je(f.e,!a)}})}function Ut(e,r,t,o,s,n=null){var i=e,a={flags:r,items:new Map,first:null},u=(r&qe)!==0;if(u){var v=e;i=O?ie(xr(v)):v.appendChild(ur())}O&&fr();var f=null,M=!1;He(()=>{var d=t(),p=pr(d)?d:d==null?[]:Ye(d),g=p.length;if(M&&g===0)return;M=g===0;let m=!1;if(O){var l=i.data===gr;l!==(g===0)&&(i=ke(),ie(i),le(!1),m=!0)}if(O){for(var h=null,y,E=0;E<g;E++){if(J.nodeType===8&&J.data===wr){i=J,m=!0,le(!1);break}var b=p[E],A=o(b,E);y=De(J,a,h,null,b,A,E,s,r),a.items.set(A,y),h=y}g>0&&ie(ke())}if(!O){var L=_r;$r(p,a,i,s,r,(L.f&ne)!==0,o)}n!==null&&(g===0?f?$e(f):f=me(()=>n(i)):f!==null&&br(f,()=>{f=null})),m&&le(!0),t()}),O&&(i=J)}function $r(e,r,t,o,s,n,i){var x,C,_,z;var a=(s&kr)!==0,u=(s&(ye|xe))!==0,v=e.length,f=r.items,M=r.first,d=M,p,g=null,m,l=[],h=[],y,E,b,A;if(a)for(A=0;A<v;A+=1)y=e[A],E=i(y,A),b=f.get(E),b!==void 0&&((x=b.a)==null||x.measure(),(m??(m=new Set)).add(b));for(A=0;A<v;A+=1){if(y=e[A],E=i(y,A),b=f.get(E),b===void 0){var L=d?d.e.nodes_start:t;g=De(L,r,g,g===null?r.first:g.next,y,E,A,o,s),f.set(E,g),l=[],h=[],d=g.next;continue}if(u&&Jr(b,y,A,s),b.e.f&ne&&($e(b.e),a&&((C=b.a)==null||C.unfix(),(m??(m=new Set)).delete(b))),b!==d){if(p!==void 0&&p.has(b)){if(l.length<h.length){var B=h[0],j;g=B.prev;var W=l[0],U=l[l.length-1];for(j=0;j<l.length;j+=1)Ie(l[j],B,t);for(j=0;j<h.length;j+=1)p.delete(h[j]);$(r,W.prev,U.next),$(r,g,W),$(r,U,B),d=B,g=U,A-=1,l=[],h=[]}else p.delete(b),Ie(b,d,t),$(r,b.prev,b.next),$(r,b,g===null?r.first:g.next),$(r,g,b),g=b;continue}for(l=[],h=[];d!==null&&d.k!==E;)(n||!(d.e.f&ne))&&(p??(p=new Set)).add(d),h.push(d),d=d.next;if(d===null)continue;b=d}l.push(b),g=b,d=b.next}if(d!==null||p!==void 0){for(var V=p===void 0?[]:Ye(p);d!==null;)(n||!(d.e.f&ne))&&V.push(d),d=d.next;var c=V.length;if(c>0){var k=s&qe&&v===0?t:null;if(a){for(A=0;A<c;A+=1)(_=V[A].a)==null||_.measure();for(A=0;A<c;A+=1)(z=V[A].a)==null||z.fix()}Yr(r,V,k,f)}}a&&hr(()=>{var S;if(m!==void 0)for(b of m)(S=b.a)==null||S.apply()}),Ae.first=r.first&&r.first.e,Ae.last=g&&g.e}function Jr(e,r,t,o){o&ye&&Ce(e.v,r),o&xe?Ce(e.i,t):e.i=t}function De(e,r,t,o,s,n,i,a,u){var v=(u&ye)!==0,f=(u&Cr)===0,M=v?f?Ar(s):ze(s):s,d=u&xe?ze(i):i,p={i:d,v:M,k:n,a:null,e:null,prev:t,next:o};try{return p.e=me(()=>a(e,M,d),O),p.e.prev=t&&t.e,p.e.next=o&&o.e,t===null?r.first=p:(t.next=p,t.e.next=p.e),o!==null&&(o.prev=p,o.e.prev=p.e),p}finally{}}function Ie(e,r,t){for(var o=e.next?e.next.e.nodes_start:t,s=r?r.e.nodes_start:t,n=e.e.nodes_start;n!==o;){var i=zr(n);s.before(n),n=i}}function $(e,r,t){r===null?e.first=t:(r.next=t,r.e.next=t&&t.e),t!==null&&(t.prev=r,t.e.prev=r&&r.e)}function Re(e,r,...t){var o=e,s=fe,n;He(()=>{s!==(s=r())&&(n&&(Je(n),n=null),n=me(()=>s(o,...t)))},Sr),O&&(o=J)}function Ft(e){if(O){var r=!1,t=()=>{if(!r){if(r=!0,e.hasAttribute("value")){var o=e.value;pe(e,"value",null),e.value=o}if(e.hasAttribute("checked")){var s=e.checked;pe(e,"checked",null),e.checked=s}}};e.__on_r=t,Mr(t),Gr()}}function pe(e,r,t,o){var s=e.__attributes??(e.__attributes={});O&&(s[r]=e.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&e.nodeName==="LINK")||s[r]!==(s[r]=t)&&(r==="style"&&"__styles"in e&&(e.__styles={}),r==="loading"&&(e[Er]=t),t==null?e.removeAttribute(r):typeof t!="string"&&Qe(e).includes(r)?e[r]=t:e.setAttribute(r,t))}function je(e,r,t,o,s=!1,n=!1,i=!1){var a=r||{},u=e.tagName==="OPTION";for(var v in r)v in t||(t[v]=null);o!==void 0&&(t.class=t.class?t.class+" "+o:o);var f=Qe(e),M=e.__attributes??(e.__attributes={});for(const l in t){let h=t[l];if(u&&l==="value"&&h==null){e.value=e.__value="",a[l]=h;continue}var d=a[l];if(h!==d){a[l]=h;var p=l[0]+l[1];if(p!=="$$"){if(p==="on"){const y={},E="$$"+l;let b=l.slice(2);var g=Wr(b);if(Pr(b)&&(b=b.slice(0,-7),y.capture=!0),!g&&d){if(h!=null)continue;e.removeEventListener(b,a[E],y),a[E]=null}if(h!=null)if(g)e[`__${b}`]=h,Or([b]);else{let A=function(L){a[l].call(this,L)};a[E]=Vr(b,e,A,y)}else g&&(e[`__${b}`]=void 0)}else if(l==="style"&&h!=null)e.style.cssText=h+"";else if(l==="autofocus")Lr(e,!!h);else if(l==="__value"||l==="value"&&h!=null)e.value=e[l]=e.__value=h;else{var m=l;s||(m=Br(m)),h==null&&!n?(M[l]=null,e.removeAttribute(l)):f.includes(m)&&(n||typeof h!="string")?e[m]=h:typeof h!="function"&&(O&&(m==="src"||m==="href"||m==="srcset")||pe(e,m,h))}l==="style"&&"__styles"in e&&(e.__styles={})}}}return a}var Ge=new Map;function Qe(e){var r=Ge.get(e.nodeName);if(r)return r;Ge.set(e.nodeName,r=[]);for(var t,o=Se(e),s=Element.prototype;s!==o;){t=Tr(o);for(var n in t)t[n].set&&r.push(n);o=Se(o)}return r}Nr();var Pe=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,G=e=>!e||typeof e!="object"||Object.keys(e).length===0,Kr=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function Xe(e,r){e.forEach(function(t){Array.isArray(t)?Xe(t,r):r.push(t)})}function Ze(e){let r=[];return Xe(e,r),r}var er=(...e)=>Ze(e).filter(Boolean),rr=(e,r)=>{let t={},o=Object.keys(e),s=Object.keys(r);for(let n of o)if(s.includes(n)){let i=e[n],a=r[n];Array.isArray(i)||Array.isArray(a)?t[n]=er(a,i):typeof i=="object"&&typeof a=="object"?t[n]=rr(i,a):t[n]=a+" "+i}else t[n]=e[n];for(let n of s)o.includes(n)||(t[n]=r[n]);return t},Ve=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();const we="-",Dr=e=>{const r=Xr(e),{conflictingClassGroups:t,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:i=>{const a=i.split(we);return a[0]===""&&a.length!==1&&a.shift(),tr(a,r)||Qr(i)},getConflictingClassGroupIds:(i,a)=>{const u=t[i]||[];return a&&o[i]?[...u,...o[i]]:u}}},tr=(e,r)=>{var i;if(e.length===0)return r.classGroupId;const t=e[0],o=r.nextPart.get(t),s=o?tr(e.slice(1),o):void 0;if(s)return s;if(r.validators.length===0)return;const n=e.join(we);return(i=r.validators.find(({validator:a})=>a(n)))==null?void 0:i.classGroupId},Oe=/^\[(.+)\]$/,Qr=e=>{if(Oe.test(e)){const r=Oe.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}},Xr=e=>{const{theme:r,prefix:t}=e,o={nextPart:new Map,validators:[]};return et(Object.entries(e.classGroups),t).forEach(([n,i])=>{ge(i,o,n,r)}),o},ge=(e,r,t,o)=>{e.forEach(s=>{if(typeof s=="string"){const n=s===""?r:Le(r,s);n.classGroupId=t;return}if(typeof s=="function"){if(Zr(s)){ge(s(o),r,t,o);return}r.validators.push({validator:s,classGroupId:t});return}Object.entries(s).forEach(([n,i])=>{ge(i,Le(r,n),t,o)})})},Le=(e,r)=>{let t=e;return r.split(we).forEach(o=>{t.nextPart.has(o)||t.nextPart.set(o,{nextPart:new Map,validators:[]}),t=t.nextPart.get(o)}),t},Zr=e=>e.isThemeGetter,et=(e,r)=>r?e.map(([t,o])=>{const s=o.map(n=>typeof n=="string"?r+n:typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,a])=>[r+i,a])):n);return[t,s]}):e,rt=e=>{if(e<1)return{get:()=>{},set:()=>{}};let r=0,t=new Map,o=new Map;const s=(n,i)=>{t.set(n,i),r++,r>e&&(r=0,o=t,t=new Map)};return{get(n){let i=t.get(n);if(i!==void 0)return i;if((i=o.get(n))!==void 0)return s(n,i),i},set(n,i){t.has(n)?t.set(n,i):s(n,i)}}},or="!",tt=e=>{const{separator:r,experimentalParseClassName:t}=e,o=r.length===1,s=r[0],n=r.length,i=a=>{const u=[];let v=0,f=0,M;for(let l=0;l<a.length;l++){let h=a[l];if(v===0){if(h===s&&(o||a.slice(l,l+n)===r)){u.push(a.slice(f,l)),f=l+n;continue}if(h==="/"){M=l;continue}}h==="["?v++:h==="]"&&v--}const d=u.length===0?a:a.substring(f),p=d.startsWith(or),g=p?d.substring(1):d,m=M&&M>f?M-f:void 0;return{modifiers:u,hasImportantModifier:p,baseClassName:g,maybePostfixModifierPosition:m}};return t?a=>t({className:a,parseClassName:i}):i},ot=e=>{if(e.length<=1)return e;const r=[];let t=[];return e.forEach(o=>{o[0]==="["?(r.push(...t.sort(),o),t=[]):t.push(o)}),r.push(...t.sort()),r},nt=e=>({cache:rt(e.cacheSize),parseClassName:tt(e),...Dr(e)}),st=/\s+/,at=(e,r)=>{const{parseClassName:t,getClassGroupId:o,getConflictingClassGroupIds:s}=r,n=[],i=e.trim().split(st);let a="";for(let u=i.length-1;u>=0;u-=1){const v=i[u],{modifiers:f,hasImportantModifier:M,baseClassName:d,maybePostfixModifierPosition:p}=t(v);let g=!!p,m=o(g?d.substring(0,p):d);if(!m){if(!g){a=v+(a.length>0?" "+a:a);continue}if(m=o(d),!m){a=v+(a.length>0?" "+a:a);continue}g=!1}const l=ot(f).join(":"),h=M?l+or:l,y=h+m;if(n.includes(y))continue;n.push(y);const E=s(m,g);for(let b=0;b<E.length;++b){const A=E[b];n.push(h+A)}a=v+(a.length>0?" "+a:a)}return a};function it(){let e=0,r,t,o="";for(;e<arguments.length;)(r=arguments[e++])&&(t=nr(r))&&(o&&(o+=" "),o+=t);return o}const nr=e=>{if(typeof e=="string")return e;let r,t="";for(let o=0;o<e.length;o++)e[o]&&(r=nr(e[o]))&&(t&&(t+=" "),t+=r);return t};function be(e,...r){let t,o,s,n=i;function i(u){const v=r.reduce((f,M)=>M(f),e());return t=nt(v),o=t.cache.get,s=t.cache.set,n=a,a(u)}function a(u){const v=o(u);if(v)return v;const f=at(u,t);return s(u,f),f}return function(){return n(it.apply(null,arguments))}}const N=e=>{const r=t=>t[e]||[];return r.isThemeGetter=!0,r},sr=/^\[(?:([a-z-]+):)?(.+)\]$/i,lt=/^\d+\/\d+$/,ct=new Set(["px","full","screen"]),dt=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ut=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ft=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,pt=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,gt=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,F=e=>K(e)||ct.has(e)||lt.test(e),q=e=>D(e,"length",_t),K=e=>!!e&&!Number.isNaN(Number(e)),de=e=>D(e,"number",K),X=e=>!!e&&Number.isInteger(Number(e)),bt=e=>e.endsWith("%")&&K(e.slice(0,-1)),w=e=>sr.test(e),Y=e=>dt.test(e),ht=new Set(["length","size","percentage"]),vt=e=>D(e,ht,ar),mt=e=>D(e,"position",ar),yt=new Set(["image","url"]),xt=e=>D(e,yt,At),wt=e=>D(e,"",kt),Z=()=>!0,D=(e,r,t)=>{const o=sr.exec(e);return o?o[1]?typeof r=="string"?o[1]===r:r.has(o[1]):t(o[2]):!1},_t=e=>ut.test(e)&&!ft.test(e),ar=()=>!1,kt=e=>pt.test(e),At=e=>gt.test(e),he=()=>{const e=N("colors"),r=N("spacing"),t=N("blur"),o=N("brightness"),s=N("borderColor"),n=N("borderRadius"),i=N("borderSpacing"),a=N("borderWidth"),u=N("contrast"),v=N("grayscale"),f=N("hueRotate"),M=N("invert"),d=N("gap"),p=N("gradientColorStops"),g=N("gradientColorStopPositions"),m=N("inset"),l=N("margin"),h=N("opacity"),y=N("padding"),E=N("saturate"),b=N("scale"),A=N("sepia"),L=N("skew"),B=N("space"),j=N("translate"),W=()=>["auto","contain","none"],U=()=>["auto","hidden","clip","visible","scroll"],V=()=>["auto",w,r],c=()=>[w,r],k=()=>["",F,q],x=()=>["auto",K,w],C=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],_=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],S=()=>["start","end","center","between","around","evenly","stretch"],T=()=>["","0",w],I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>[K,w];return{cacheSize:500,separator:":",theme:{colors:[Z],spacing:[F,q],blur:["none","",Y,w],brightness:R(),borderColor:[e],borderRadius:["none","","full",Y,w],borderSpacing:c(),borderWidth:k(),contrast:R(),grayscale:T(),hueRotate:R(),invert:T(),gap:c(),gradientColorStops:[e],gradientColorStopPositions:[bt,q],inset:V(),margin:V(),opacity:R(),padding:c(),saturate:R(),scale:R(),sepia:T(),skew:R(),space:c(),translate:c()},classGroups:{aspect:[{aspect:["auto","square","video",w]}],container:["container"],columns:[{columns:[Y]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...C(),w]}],overflow:[{overflow:U()}],"overflow-x":[{"overflow-x":U()}],"overflow-y":[{"overflow-y":U()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",X,w]}],basis:[{basis:V()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",w]}],grow:[{grow:T()}],shrink:[{shrink:T()}],order:[{order:["first","last","none",X,w]}],"grid-cols":[{"grid-cols":[Z]}],"col-start-end":[{col:["auto",{span:["full",X,w]},w]}],"col-start":[{"col-start":x()}],"col-end":[{"col-end":x()}],"grid-rows":[{"grid-rows":[Z]}],"row-start-end":[{row:["auto",{span:[X,w]},w]}],"row-start":[{"row-start":x()}],"row-end":[{"row-end":x()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",w]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",w]}],gap:[{gap:[d]}],"gap-x":[{"gap-x":[d]}],"gap-y":[{"gap-y":[d]}],"justify-content":[{justify:["normal",...S()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...S(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...S(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[l]}],mx:[{mx:[l]}],my:[{my:[l]}],ms:[{ms:[l]}],me:[{me:[l]}],mt:[{mt:[l]}],mr:[{mr:[l]}],mb:[{mb:[l]}],ml:[{ml:[l]}],"space-x":[{"space-x":[B]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[B]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",w,r]}],"min-w":[{"min-w":[w,r,"min","max","fit"]}],"max-w":[{"max-w":[w,r,"none","full","min","max","fit","prose",{screen:[Y]},Y]}],h:[{h:[w,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[w,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[w,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[w,r,"auto","min","max","fit"]}],"font-size":[{text:["base",Y,q]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",de]}],"font-family":[{font:[Z]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",w]}],"line-clamp":[{"line-clamp":["none",K,de]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",F,w]}],"list-image":[{"list-image":["none",w]}],"list-style-type":[{list:["none","disc","decimal",w]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[..._(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",F,q]}],"underline-offset":[{"underline-offset":["auto",F,w]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:c()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",w]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",w]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...C(),mt]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",vt]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},xt]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[n]}],"rounded-s":[{"rounded-s":[n]}],"rounded-e":[{"rounded-e":[n]}],"rounded-t":[{"rounded-t":[n]}],"rounded-r":[{"rounded-r":[n]}],"rounded-b":[{"rounded-b":[n]}],"rounded-l":[{"rounded-l":[n]}],"rounded-ss":[{"rounded-ss":[n]}],"rounded-se":[{"rounded-se":[n]}],"rounded-ee":[{"rounded-ee":[n]}],"rounded-es":[{"rounded-es":[n]}],"rounded-tl":[{"rounded-tl":[n]}],"rounded-tr":[{"rounded-tr":[n]}],"rounded-br":[{"rounded-br":[n]}],"rounded-bl":[{"rounded-bl":[n]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[..._(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:_()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",..._()]}],"outline-offset":[{"outline-offset":[F,w]}],"outline-w":[{outline:[F,q]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:k()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[F,q]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Y,wt]}],"shadow-color":[{shadow:[Z]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",Y,w]}],grayscale:[{grayscale:[v]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[M]}],saturate:[{saturate:[E]}],sepia:[{sepia:[A]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[v]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[M]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[E]}],"backdrop-sepia":[{"backdrop-sepia":[A]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",w]}],duration:[{duration:R()}],ease:[{ease:["linear","in","out","in-out",w]}],delay:[{delay:R()}],animate:[{animate:["none","spin","ping","pulse","bounce",w]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[X,w]}],"translate-x":[{"translate-x":[j]}],"translate-y":[{"translate-y":[j]}],"skew-x":[{"skew-x":[L]}],"skew-y":[{"skew-y":[L]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",w]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",w]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":c()}],"scroll-mx":[{"scroll-mx":c()}],"scroll-my":[{"scroll-my":c()}],"scroll-ms":[{"scroll-ms":c()}],"scroll-me":[{"scroll-me":c()}],"scroll-mt":[{"scroll-mt":c()}],"scroll-mr":[{"scroll-mr":c()}],"scroll-mb":[{"scroll-mb":c()}],"scroll-ml":[{"scroll-ml":c()}],"scroll-p":[{"scroll-p":c()}],"scroll-px":[{"scroll-px":c()}],"scroll-py":[{"scroll-py":c()}],"scroll-ps":[{"scroll-ps":c()}],"scroll-pe":[{"scroll-pe":c()}],"scroll-pt":[{"scroll-pt":c()}],"scroll-pr":[{"scroll-pr":c()}],"scroll-pb":[{"scroll-pb":c()}],"scroll-pl":[{"scroll-pl":c()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",w]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[F,q,de]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Ct=(e,{cacheSize:r,prefix:t,separator:o,experimentalParseClassName:s,extend:n={},override:i={}})=>{re(e,"cacheSize",r),re(e,"prefix",t),re(e,"separator",o),re(e,"experimentalParseClassName",s);for(const a in i)zt(e[a],i[a]);for(const a in n)St(e[a],n[a]);return e},re=(e,r,t)=>{t!==void 0&&(e[r]=t)},zt=(e,r)=>{if(r)for(const t in r)re(e,t,r[t])},St=(e,r)=>{if(r)for(const t in r){const o=r[t];o!==void 0&&(e[t]=(e[t]||[]).concat(o))}},Mt=(e,...r)=>typeof e=="function"?be(he,e,...r):be(()=>Ct(he(),e),...r),ir=be(he);var Et={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},lr=e=>e||void 0,te=(...e)=>lr(Ze(e).filter(Boolean).join(" ")),ue=null,H={},ve=!1,ee=(...e)=>r=>r.twMerge?((!ue||ve)&&(ve=!1,ue=G(H)?ir:Mt({...H,extend:{theme:H.theme,classGroups:H.classGroups,conflictingClassGroupModifiers:H.conflictingClassGroupModifiers,conflictingClassGroups:H.conflictingClassGroups,...H.extend}})),lr(ue(te(e)))):te(e),Be=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=te(e[t],r[t]):e[t]=r[t];return e},Tt=(e,r)=>{let{extend:t=null,slots:o={},variants:s={},compoundVariants:n=[],compoundSlots:i=[],defaultVariants:a={}}=e,u={...Et,...r},v=t!=null&&t.base?te(t.base,e==null?void 0:e.base):e==null?void 0:e.base,f=t!=null&&t.variants&&!G(t.variants)?rr(s,t.variants):s,M=t!=null&&t.defaultVariants&&!G(t.defaultVariants)?{...t.defaultVariants,...a}:a;!G(u.twMergeConfig)&&!Kr(u.twMergeConfig,H)&&(ve=!0,H=u.twMergeConfig);let d=G(t==null?void 0:t.slots),p=G(o)?{}:{base:te(e==null?void 0:e.base,d&&(t==null?void 0:t.base)),...o},g=d?p:Be({...t==null?void 0:t.slots},G(p)?{base:e==null?void 0:e.base}:p),m=G(t==null?void 0:t.compoundVariants)?n:er(t==null?void 0:t.compoundVariants,n),l=y=>{if(G(f)&&G(o)&&d)return ee(v,y==null?void 0:y.class,y==null?void 0:y.className)(u);if(m&&!Array.isArray(m))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof m}`);if(i&&!Array.isArray(i))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof i}`);let E=(c,k,x=[],C)=>{let _=x;if(typeof k=="string")_=_.concat(Ve(k).split(" ").map(z=>`${c}:${z}`));else if(Array.isArray(k))_=_.concat(k.reduce((z,S)=>z.concat(`${c}:${S}`),[]));else if(typeof k=="object"&&typeof C=="string"){for(let z in k)if(k.hasOwnProperty(z)&&z===C){let S=k[z];if(S&&typeof S=="string"){let T=Ve(S);_[C]?_[C]=_[C].concat(T.split(" ").map(I=>`${c}:${I}`)):_[C]=T.split(" ").map(I=>`${c}:${I}`)}else Array.isArray(S)&&S.length>0&&(_[C]=S.reduce((T,I)=>T.concat(`${c}:${I}`),[]))}}return _},b=(c,k=f,x=null,C=null)=>{var _;let z=k[c];if(!z||G(z))return null;let S=(_=C==null?void 0:C[c])!=null?_:y==null?void 0:y[c];if(S===null)return null;let T=Pe(S),I=Array.isArray(u.responsiveVariants)&&u.responsiveVariants.length>0||u.responsiveVariants===!0,R=M==null?void 0:M[c],P=[];if(typeof T=="object"&&I)for(let[ae,_e]of Object.entries(T)){let dr=z[_e];if(ae==="initial"){R=_e;continue}Array.isArray(u.responsiveVariants)&&!u.responsiveVariants.includes(ae)||(P=E(ae,dr,P,x))}let oe=T!=null&&typeof T!="object"?T:Pe(R),se=z[oe||"false"];return typeof P=="object"&&typeof x=="string"&&P[x]?Be(P,se):P.length>0?(P.push(se),x==="base"?P.join(" "):P):se},A=()=>f?Object.keys(f).map(c=>b(c,f)):null,L=(c,k)=>{if(!f||typeof f!="object")return null;let x=new Array;for(let C in f){let _=b(C,f,c,k),z=c==="base"&&typeof _=="string"?_:_&&_[c];z&&(x[x.length]=z)}return x},B={};for(let c in y)y[c]!==void 0&&(B[c]=y[c]);let j=(c,k)=>{var x;let C=typeof(y==null?void 0:y[c])=="object"?{[c]:(x=y[c])==null?void 0:x.initial}:{};return{...M,...B,...C,...k}},W=(c=[],k)=>{let x=[];for(let{class:C,className:_,...z}of c){let S=!0;for(let[T,I]of Object.entries(z)){let R=j(T,k)[T];if(Array.isArray(I)){if(!I.includes(R)){S=!1;break}}else{let P=oe=>oe==null||oe===!1;if(P(I)&&P(R))continue;if(R!==I){S=!1;break}}}S&&(C&&x.push(C),_&&x.push(_))}return x},U=c=>{let k=W(m,c);if(!Array.isArray(k))return k;let x={};for(let C of k)if(typeof C=="string"&&(x.base=ee(x.base,C)(u)),typeof C=="object")for(let[_,z]of Object.entries(C))x[_]=ee(x[_],z)(u);return x},V=c=>{if(i.length<1)return null;let k={};for(let{slots:x=[],class:C,className:_,...z}of i){if(!G(z)){let S=!0;for(let T of Object.keys(z)){let I=j(T,c)[T];if(I===void 0||(Array.isArray(z[T])?!z[T].includes(I):z[T]!==I)){S=!1;break}}if(!S)continue}for(let S of x)k[S]=k[S]||[],k[S].push([C,_])}return k};if(!G(o)||!d){let c={};if(typeof g=="object"&&!G(g))for(let k of Object.keys(g))c[k]=x=>{var C,_;return ee(g[k],L(k,x),((C=U(x))!=null?C:[])[k],((_=V(x))!=null?_:[])[k],x==null?void 0:x.class,x==null?void 0:x.className)(u)};return c}return ee(v,A(),W(m),y==null?void 0:y.class,y==null?void 0:y.className)(u)},h=()=>{if(!(!f||typeof f!="object"))return Object.keys(f)};return l.variantKeys=h(),l.extend=t,l.base=v,l.slots=g,l.variants=f,l.defaultVariants=M,l.compoundSlots=i,l.compoundVariants=m,l};function cr(e){var r,t,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(r=0;r<s;r++)e[r]&&(t=cr(e[r]))&&(o&&(o+=" "),o+=t)}else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function Nt(){for(var e,r,t=0,o="",s=arguments.length;t<s;t++)(e=arguments[t])&&(r=cr(e))&&(o&&(o+=" "),o+=r);return o}function We(...e){return ir(Nt(e))}const Ue=Tt({base:"focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90 shadow",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",outline:"border-input bg-background hover:bg-accent hover:text-accent-foreground border shadow-sm",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}});var It=Ke("<a><!></a>"),Rt=Ke("<button><!></button>");function Ht(e,r){Ir(r,!0);let t=Q(r,"variant",3,"default"),o=Q(r,"size",3,"default"),s=Q(r,"ref",15,null),n=Q(r,"href",3,void 0),i=Q(r,"type",3,"button"),a=Hr(r,["$$slots","$$events","$$legacy","class","variant","size","ref","href","type","children"]);var u=Ur(),v=Rr(u);{var f=d=>{var p=It();let g;var m=Me(p);Re(m,()=>r.children??fe),Ee(p),Ne(p,l=>s(l),()=>s()),Te(()=>g=je(p,g,{class:We(Ue({variant:t(),size:o(),className:r.class})),href:n(),...a})),ce(d,p)},M=d=>{var p=Rt();let g;var m=Me(p);Re(m,()=>r.children??fe),Ee(p),Ne(p,l=>s(l),()=>s()),Te(()=>g=je(p,g,{class:We(Ue({variant:t(),size:o(),className:r.class})),type:i(),...a})),ce(d,p)};Fr(v,d=>{n()?d(f):d(M,!1)})}ce(e,u),jr()}const jt=(e,r,t=null,o=null,s="/",n=!1,i="Lax")=>{let a="";if(t===0){const v=new Date;v.setFullYear(v.getFullYear()+10),a="; expires="+v.toUTCString()}else if(t){const v=new Date;v.setTime(v.getTime()+t*24*60*60*1e3),a="; expires="+v.toUTCString()}const u=`${e}=${r||""}${a}; path=${s}`+(o?`; domain=${o}`:"")+(n?"; secure":"")+`; SameSite=${i}`;document.cookie=u},Gt=e=>{const r=e+"=",t=document.cookie.split(";");for(let o=0;o<t.length;o++){let s=t[o];for(;s.charAt(0)===" ";)s=s.substring(1,s.length);if(s.indexOf(r)===0)return s.substring(r.length,s.length)}return null},Pt=()=>{if(typeof window<"u"){const e=Gt("language");return e==="en"||e==="ru"?e:navigator.language.startsWith("ru")?"ru":"en"}return"en"},Vt=qr(Pt());let Fe=null;Vt.subscribe(e=>{typeof window<"u"&&e!==Fe&&(jt("language",e,365,"ma.cyou"),document.documentElement.setAttribute("lang",e),Fe=e)});export{Ht as B,Re as a,pe as b,We as c,Ue as d,Ut as e,Nt as f,Tt as g,jt as h,Wt as i,Gt as j,Vt as l,Ft as r,je as s};
