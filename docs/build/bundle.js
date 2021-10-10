var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function i(t){let e;return a(t,(t=>e=t))(),e}function u(t,e,n){t.$$.on_destroy.push(a(e,n))}function l(t,e,n,o){if(t){const r=d(t,e,n,o);return t[0](r)}}function d(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function p(t,e,n,o,r,s){if(r){const c=d(e,n,o,s);t.p(c,r)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function h(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function g(t){return null==t?"":t}function b(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function x(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function E(){return w(" ")}function k(){return w("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function R(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function L(t,e,n,o){t.style.setProperty(e,n,o?"important":"")}let A;function I(t){A=t}function q(){if(!A)throw new Error("Function called outside component initialization");return A}function S(t){q().$$.on_destroy.push(t)}function P(t,e){q().$$.context.set(t,e)}function N(t){return q().$$.context.get(t)}const O=[],j=[],T=[],M=[],U=Promise.resolve();let B=!1;function F(){B||(B=!0,U.then(D))}function z(t){T.push(t)}let H=!1;const Y=new Set;function D(){if(!H){H=!0;do{for(let t=0;t<O.length;t+=1){const e=O[t];I(e),G(e.$$)}for(I(null),O.length=0;j.length;)j.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];Y.has(e)||(Y.add(e),e())}T.length=0}while(O.length);for(;M.length;)M.pop()();B=!1,H=!1,Y.clear()}}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function V(){K.r||r(K.c),K=K.p}function W(t,e){t&&t.i&&(J.delete(t),t.i(e))}function X(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push((()=>{J.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function Z(t){return"object"==typeof t&&null!==t?t:{}}function tt(t){t&&t.c()}function et(t,e,o,c){const{fragment:a,on_mount:i,on_destroy:u,after_update:l}=t.$$;a&&a.m(e,o),c||z((()=>{const e=i.map(n).filter(s);u?u.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(z)}function nt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ot(e,n,s,c,a,i,u,l=[-1]){const d=A;I(e);const f=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:o(),dirty:l,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&a(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&function(t,e){-1===t.$$.dirty[0]&&(O.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],f.update(),p=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(y)}else f.fragment&&f.fragment.c();n.intro&&W(e.$$.fragment),et(e,n.target,n.anchor,n.customElement),D()}I(d)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=t=>void 0===t,ct=t=>"number"==typeof t;function at(){let t=0;return()=>t++}const it="undefined"==typeof window;function ut(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const lt=[];function dt(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!lt.length;for(const t of r)t[1](),lt.push(t,e);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function ft(e,n,o){const c=!Array.isArray(e),i=c?[e]:e,u=n.length<2;return l=e=>{let o=!1;const l=[];let d=0,f=t;const p=()=>{if(d)return;f();const o=n(c?l[0]:l,e);u?e(o):f=s(o)?o:t},m=i.map(((t,e)=>a(t,(t=>{l[e]=t,d&=~(1<<e),o&&p()}),(()=>{d|=1<<e}))));return o=!0,p(),function(){r(m),f()}},{subscribe:dt(o,l).subscribe};var l}const pt=t=>`@@svnav-ctx__${t}`,mt=pt("LOCATION"),$t=pt("ROUTER"),ht=pt("ROUTE"),gt=pt("ROUTE_PARAMS"),bt=pt("FOCUS_ELEM"),vt=/^:(.+)/,yt=(t,e)=>t.substr(0,e.length)===e,xt=t=>"*"===t[0],wt=t=>t.replace(/(^\/+|\/+$)/g,"");function Et(t,e=!1){const n=wt(t).split("/");return e?n.filter(Boolean):n}const kt=(t,e)=>t+(e?`?${e}`:""),_t=t=>`/${wt(t)}`;function Rt(...t){const e=t.map((t=>Et(t,!0).join("/"))).join("/");return _t(e)}const Ct={1:"Link",2:"Route",3:"Router",4:"useFocus",5:"useLocation",6:"useMatch",7:"useNavigate",8:"useParams",9:"useResolvable",10:"useResolve",11:"navigate"},Lt=t=>Ct[t];function At(t,e,n,o){const r=n&&function(t,e){let n;return 2===t?n=e.path?`path="${e.path}"`:"default":1===t?n=`to="${e.to}"`:3===t&&(n=`basepath="${e.basepath||""}"`),`<${Lt(t)} ${n||""} />`}(o||t,n),s=r?`\n\nOccurred in: ${r}`:"",c=Lt(t);return`<${c}> ${"function"==typeof e?e(c):e}${s}`}const It=t=>(...e)=>t(At(...e)),qt=It((t=>{throw new Error(t)})),St=It(console.warn);function Pt(t,e){return{route:t,score:t.default?0:Et(t.fullPath).reduce(((t,e)=>{let n=t;return n+=4,(t=>""===t)(e)?n+=1:(t=>vt.test(t))(e)?n+=2:xt(e)?n-=5:n+=3,n}),0),index:e}}function Nt(t,e){let n,o;const[r]=e.split("?"),s=Et(r),c=""===s[0],a=function(t){return t.map(Pt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=a.length;t<r;t++){const{route:r}=a[t];let i=!1;const u={},l=t=>({...r,params:u,uri:t});if(r.default){o=l(e);continue}const d=Et(r.fullPath),f=Math.max(s.length,d.length);let p=0;for(;p<f;p++){const t=d[p],e=s[p];if(!st(t)&&xt(t)){const e="*"===t?"*":t.slice(1);u[e]=s.slice(p).map(decodeURIComponent).join("/");break}if(st(e)){i=!0;break}const n=vt.exec(t);if(n&&!c){const t=decodeURIComponent(e);u[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n=l(Rt(...s.slice(0,p)));break}}return n||o||null}function Ot(t,e){return Nt([t],e)}function jt(t,e){const{pathname:n,hash:o="",search:r="",state:s}=t,c=Et(e,!0),a=Et(n,!0);for(;c.length;)c[0]!==a[0]&&qt(3,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),c.shift(),a.shift();return{pathname:Rt(...a),hash:o,search:r,state:s}}const Tt=t=>1===t.length?"":t;function Mt(t){const e=t.indexOf("?"),n=t.indexOf("#"),o=-1!==e,r=-1!==n,s=r?Tt(t.substr(n)):"",c=r?t.substr(0,n):t,a=o?Tt(c.substr(e)):"";return{pathname:o?c.substr(0,e):c,search:a,hash:s}}function Ut(t,e,n){return Rt(n,function(t,e){if(yt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=Et(n),c=Et(r);if(""===s[0])return kt(r,o);if(!yt(s[0],".")){const t=c.concat(s).join("/");return kt(("/"===r?"":"/")+t,o)}const a=c.concat(s),i=[];return a.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),kt(`/${i.join("/")}`,o)}(t,e))}function Bt(t,e){const n=_t(t.replace(/\*.*$/,""));const o=Et(n,!0),r=Ot({fullPath:n},Rt(...Et(e,!0).slice(0,o.length)));return r&&r.uri}const Ft="POP";function zt(t){return{...t.location,pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"}}function Ht(t,e){return{...Mt(e),state:t}}const Yt=!(it||!window.document||!window.document.createElement),Dt=!it&&"null"===window.location.origin,Gt=function(t){let e=[],n=zt(t),o=Ft;const r=(t=e)=>t.forEach((t=>t({location:n,action:o})));return{get location(){return n},listen(s){e.push(s);r([s]);const c=ut(t,"popstate",(()=>{n=zt(t),o=Ft,r([s])}));return()=>{c(),e=e.filter((t=>t!==s))}},navigate(e,s){const{state:c={},replace:a=!1}=s||{};if(o=a?"REPLACE":"PUSH",ct(e))s&&St(11,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),o=Ft,t.history.go(e);else{const n={...c,_key:Math.random().toString(36).substring(2)};try{t.history[a?"replaceState":"pushState"](n,"",e)}catch(n){t.location[a?"replace":"assign"](e)}}n=zt(t),r()}}}(Yt&&!Dt?window:function(t="/"){let e=0,n=[Ht(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(t,o,r){e++,n=n.slice(0,e),n.push(Ht(t,r))},replaceState(t,o,r){n[e]=Ht(t,r)},go(t){const o=e+t;o<0||o>n.length-1||(e=o)}}}}()),{navigate:Jt}=Gt;let Kt=null,Qt=!0;function Vt(t){(!Kt||t.level>Kt.level||t.level===Kt.level&&function(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let o=0;o<n.length;o++){const r=n[o],s=Number(r.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}(t.routerId,Kt.routerId))&&(Kt=t)}function Wt(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){let n;t.setAttribute(e,"-1");const o=()=>{t.removeAttribute(e),n()};n=ut(t,"blur",o)}return t.focus(),document.activeElement===t}catch(t){return!1}}function Xt(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Zt(t,e=document){return e.querySelector(t)}function te(t){Promise.resolve(i(t.focusElement)).then((e=>{const n=e||function(t){let e=Zt(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!Xt(e,t);){if(/^H[1-6]$/i.test(e.tagName))return e;const t=Zt("h1,h2,h3,h4,h5,h6",e);if(t)return t;e=e.nextElementSibling}return null}(t.id);n||St(3,'Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don\'t want this Route or Router to manage focus, pass "primary={false}" to it.',t,2);Wt(n)||Wt(document.documentElement)}))}const ee=(t,e,n)=>(o,r)=>(F(),U).then((()=>{if(Kt&&!Qt){if(o&&te(Kt.route),t.announcements&&r){const{path:o,fullPath:r,meta:s,params:c,uri:a}=Kt.route,u=t.createAnnouncement({path:o,fullPath:r,meta:s,params:c,uri:a},i(n));Promise.resolve(u).then((t=>{e.set(t)}))}Kt=null}else Qt=!1}));function ne(t){let e,n,o,r,s;const c=t[20].default,a=l(c,t,t[19],null);let i=t[2]&&t[4]&&t[1].announcements&&function(t){let e,n;return{c(){e=x("div"),n=w(t[0]),R(e,"role","status"),R(e,"aria-atomic","true"),R(e,"aria-live","polite"),R(e,"style","position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;")},m(t,o){v(t,e,o),b(e,n)},p(t,e){1&e[0]&&C(n,t[0])},d(t){t&&y(e)}}}(t);return{c(){e=x("div"),n=E(),a&&a.c(),o=E(),i&&i.c(),r=k(),L(e,"display","none"),R(e,"aria-hidden","true"),R(e,"data-svnav-router",t[3])},m(t,c){v(t,e,c),v(t,n,c),a&&a.m(t,c),v(t,o,c),i&&i.m(t,c),v(t,r,c),s=!0},p(t,e){a&&a.p&&(!s||524288&e[0])&&p(a,c,t,t[19],s?f(c,t[19],e,null):m(t[19]),null),t[2]&&t[4]&&t[1].announcements&&i.p(t,e)},i(t){s||(W(a,t),s=!0)},o(t){X(a,t),s=!1},d(t){t&&y(e),t&&y(n),a&&a.d(t),t&&y(o),i&&i.d(t),t&&y(r)}}}const oe=at(),re="/";function se(t,e,n){let o,r,s,c,a,{$$slots:i={},$$scope:l}=e,{basepath:d=re}=e,{url:f=null}=e,{history:p=Gt}=e,{primary:m=!0}=e,{a11y:$={}}=e;const h={createAnnouncement:t=>`Navigated to ${t.uri}`,announcements:!0,...$},g=d,b=_t(d),v=N(mt),y=N($t),x=!v,w=oe(),E=m&&!(y&&!y.manageFocus),k=dt("");u(t,k,(t=>n(0,a=t)));const _=dt([]);u(t,_,(t=>n(18,c=t)));const R=dt(null);u(t,R,(t=>n(16,r=t)));let C=!1;const L=x?0:y.level+1,A=x?dt(jt(it?Mt(f):p.location,b)):v;u(t,A,(t=>n(15,o=t)));const I=dt(o);u(t,I,(t=>n(17,s=t)));const S=ee(h,k,A),O=t=>e=>e.filter((e=>e.id!==t));var j;return x||d===re||St(3,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:d}),x&&(j=()=>p.listen((t=>{const e=jt(t.location,b);I.set(o),A.set(e)})),q().$$.on_mount.push(j),P(mt,A)),P($t,{activeRoute:R,registerRoute:function(t){if(it){if(C)return;const e=Ot(t,o.pathname);if(e)return C=!0,e}else _.update((e=>{const n=O(t.id)(e);return n.push(t),n}))},unregisterRoute:function(t){_.update(O(t))},manageFocus:E,level:L,id:w,history:x?p:y.history,basepath:x?b:y.basepath}),t.$$set=t=>{"basepath"in t&&n(10,d=t.basepath),"url"in t&&n(11,f=t.url),"history"in t&&n(12,p=t.history),"primary"in t&&n(13,m=t.primary),"a11y"in t&&n(14,$=t.a11y),"$$scope"in t&&n(19,l=t.$$scope)},t.$$.update=()=>{if(1024&t.$$.dirty[0]&&d!==g&&St(3,'You cannot change the "basepath" prop. It is ignored.'),294912&t.$$.dirty[0]){const t=Nt(c,o.pathname);R.set(t)}if(163840&t.$$.dirty[0]&&x){const t=!!o.hash,e=!t&&E,n=!t||o.pathname!==s.pathname;S(e,n)}65536&t.$$.dirty[0]&&E&&r&&r.primary&&Vt({level:L,routerId:w,route:r})},[a,h,x,w,E,k,_,R,A,I,d,f,p,m,$,o,r,s,c,l,i]}var ce=class extends rt{constructor(t){super(),ot(this,t,se,ne,c,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}};function ae(t,e,n=$t,o=3){N(n)||qt(t,(t=>`You cannot use ${t} outside of a ${Lt(o)}.`),e)}const ie=t=>{const{subscribe:e}=N(t);return{subscribe:e}};function ue(){const t=N(ht);return t?ft(t,(t=>t.base)):dt("/")}function le(){ae(7);const t=function(){ae(10);const t=ue(),{basepath:e}=N($t);return n=>Ut(n,i(t),e)}(),{navigate:e}=function(){const{history:t}=N($t);return t}();return(n,o)=>{const r=ct(n)?n:t(n);return e(r,o)}}const de=t=>({params:16&t,location:8&t}),fe=t=>({params:it?i(t[9]):t[4],location:t[3],navigate:t[10]});function pe(t){let e,n;return e=new ce({props:{primary:t[1],$$slots:{default:[he]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.primary=t[1]),264217&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function me(t){let e;const n=t[17].default,o=l(n,t,t[18],fe);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||262168&r)&&p(o,n,t,t[18],e?f(n,t[18],r,de):m(t[18]),fe)},i(t){e||(W(o,t),e=!0)},o(t){X(o,t),e=!1},d(t){o&&o.d(t)}}}function $e(t){let n,o,r;const s=[{location:t[3]},{navigate:t[10]},it?i(t[9]):t[4],t[11]];var c=t[0];function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&tt(n.$$.fragment),o=k()},m(t,e){n&&et(n,t,e),v(t,o,e),r=!0},p(t,e){const r=3608&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[8&e&&{location:t[3]},1024&e&&{navigate:t[10]},528&e&&Z(it?i(t[9]):t[4]),2048&e&&Z(t[11])]):{};if(c!==(c=t[0])){if(n){Q();const t=n;X(t.$$.fragment,1,0,(()=>{nt(t,1)})),V()}c?(n=new c(a()),tt(n.$$.fragment),W(n.$$.fragment,1),et(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&W(n.$$.fragment,t),r=!0)},o(t){n&&X(n.$$.fragment,t),r=!1},d(t){t&&y(o),n&&nt(n,t)}}}function he(t){let e,n,o,r;const s=[$e,me],c=[];function a(t,e){return null!==t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),o=k()},m(t,n){c[e].m(t,n),v(t,o,n),r=!0},p(t,r){let i=e;e=a(t),e===i?c[e].p(t,r):(Q(),X(c[i],1,1,(()=>{c[i]=null})),V(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),W(n,1),n.m(o.parentNode,o))},i(t){r||(W(n),r=!0)},o(t){X(n),r=!1},d(t){c[e].d(t),t&&y(o)}}}function ge(t){let e,n,o,r,s,c=t[2]&&pe(t);return{c(){e=x("div"),n=E(),c&&c.c(),o=E(),r=x("div"),L(e,"display","none"),R(e,"aria-hidden","true"),R(e,"data-svnav-route-start",t[5]),L(r,"display","none"),R(r,"aria-hidden","true"),R(r,"data-svnav-route-end",t[5])},m(t,a){v(t,e,a),v(t,n,a),c&&c.m(t,a),v(t,o,a),v(t,r,a),s=!0},p(t,[e]){t[2]?c?(c.p(t,e),4&e&&W(c,1)):(c=pe(t),c.c(),W(c,1),c.m(o.parentNode,o)):c&&(Q(),X(c,1,1,(()=>{c=null})),V())},i(t){s||(W(c),s=!0)},o(t){X(c),s=!1},d(t){t&&y(e),t&&y(n),c&&c.d(t),t&&y(o),t&&y(r)}}}const be=at();function ve(t,n,o){let r;const s=["path","component","meta","primary"];let c,a,i,l,d=h(n,s),{$$slots:f={},$$scope:p}=n,{path:m=""}=n,{component:g=null}=n,{meta:b={}}=n,{primary:v=!0}=n;ae(2,n);const y=be(),{registerRoute:x,unregisterRoute:w,activeRoute:E}=N($t);u(t,E,(t=>o(15,c=t)));const k=ue();u(t,k,(t=>o(16,i=t)));const _=(ae(5),ie(mt));u(t,_,(t=>o(3,a=t)));const R=dt(null);let C;const L=dt(),A=dt({});u(t,A,(t=>o(4,l=t))),P(ht,L),P(gt,A),P(bt,R);const I=le();return it||S((()=>w(y))),t.$$set=t=>{o(23,n=e(e({},n),$(t))),o(11,d=h(n,s)),"path"in t&&o(12,m=t.path),"component"in t&&o(0,g=t.component),"meta"in t&&o(13,b=t.meta),"primary"in t&&o(1,v=t.primary),"$$scope"in t&&o(18,p=t.$$scope)},t.$$.update=()=>{if(77834&t.$$.dirty){const t=""===m,e=Rt(i,m),n={id:y,path:m,meta:b,default:t,fullPath:t?"":e,base:t?i:Bt(e,a.pathname),primary:v,focusElement:R};L.set(n),o(14,C=x(n))}if(49152&t.$$.dirty&&o(2,r=!!(C||c&&c.id===y)),49156&t.$$.dirty&&r){const{params:t}=C||c;A.set(t)}},n=$(n),[g,v,r,a,l,y,E,k,_,A,I,d,m,b,C,c,i,f,p]}var ye=class extends rt{constructor(t){super(),ot(this,t,ve,ge,c,{path:12,component:0,meta:13,primary:1})}};function xe(t){let e;return{c(){e=x("span"),R(e,"class","typewriter-cursor svelte-17uvu9v"),L(e,"--colorcursor",t[2])},m(t,n){v(t,e,n)},p(t,n){4&n&&L(e,"--colorcursor",t[2])},d(t){t&&y(e)}}}function we(e){let n,o,r,s,c=e[1]&&xe(e);return{c(){n=x("div"),o=w(e[3]),r=E(),c&&c.c(),R(n,"class",s=g(e[0])+" svelte-17uvu9v")},m(t,e){v(t,n,e),b(n,o),b(n,r),c&&c.m(n,null)},p(t,[e]){8&e&&C(o,t[3]),t[1]?c?c.p(t,e):(c=xe(t),c.c(),c.m(n,null)):c&&(c.d(1),c=null),1&e&&s!==(s=g(t[0])+" svelte-17uvu9v")&&R(n,"class",s)},i:t,o:t,d(t){t&&y(n),c&&c.d()}}}function Ee(t,e,n){let o,r,{Class:s=""}=e,{frase:c=""}=e,{velocidad:a=100}=e,{pausa:i=3e3}=e,{loop:u=!1}=e,{cursor:l=!1}=e,{colorcursor:d="#000"}=e,f="",p=0;S((()=>{clearInterval(o),clearTimeout(r),console.log("salir de todo")}));const m=()=>{p<c.length?(n(3,f+=c[p]),p+=1):(clearInterval(o),u&&(r=setTimeout(h,i)))},$=()=>o=setInterval(m,a),h=()=>o=setInterval(g,a),g=()=>{p<0?(clearInterval(o),p=0,n(3,f=""),console.log("finalizo"),u&&(r=setTimeout($,1e3))):(n(3,f=f.substr(0,p)),p-=1)};return $(),t.$$set=t=>{"Class"in t&&n(0,s=t.Class),"frase"in t&&n(4,c=t.frase),"velocidad"in t&&n(5,a=t.velocidad),"pausa"in t&&n(6,i=t.pausa),"loop"in t&&n(7,u=t.loop),"cursor"in t&&n(1,l=t.cursor),"colorcursor"in t&&n(2,d=t.colorcursor)},[s,l,d,f,c,a,i,u]}class ke extends rt{constructor(t){super(),ot(this,t,Ee,we,c,{Class:0,frase:4,velocidad:5,pausa:6,loop:7,cursor:1,colorcursor:2})}}function _e(t){let e,n;return e=new ke({props:{Class:"text-blue-500",frase:"Re/Surgir",velocidad:150,loop:!0,pausa:1e3,cursor:!0,colorcursor:" rgba(59, 130, 246,1)"}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Re(t){let e,n,o,s,c,a,i,u,l,d,f,p,m,$,h,g,k,C,L,A,I,q,S,P,N,O=t[1]&&_e();return i=new ke({props:{Class:t[3].selected+" ",frase:"\r\n      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id perspiciatis\r\n      eligendi, facilis cumque, blanditiis, ab sequi maxime facere reiciendis\r\n      deserunt esse voluptate aspernatur eum velit sit corporis inventore rem!\r\n      Adipisci obcaecati vel architecto, ratione explicabo provident assumenda,\r\n      deleniti odio fugit dicta recusandae nemo atque natus voluptas asperiores\r\n      expedita! Aliquid facilis laboriosam non, modi ullam distinctio ad\r\n      suscipit voluptatem ex a consequatur dolorum omnis nulla maiores nam\r\n      assumenda quo quia porro quasi corrupti voluptate expedita. Deserunt ab\r\n      dicta quo maiores eius! Cumque recusandae expedita dolor soluta\r\n      consequuntur blanditiis quis praesentium voluptatum? Dolorum, doloribus.\r\n      Consectetur, repellat perferendis eius omnis quas tempore esse!",velocidad:50,cursor:!0,colorcursor:"#c99806"}}),{c(){e=x("div"),n=x("p"),o=w("Efecto maquina de escribir index.svelte"),c=E(),O&&O.c(),a=E(),tt(i.$$.fragment),u=E(),l=x("button"),l.textContent="hola 1",d=E(),f=x("button"),f.textContent="hola 2",p=E(),m=x("button"),m.textContent="hola 3",$=E(),h=x("button"),g=w("hola 4"),k=E(),C=x("button"),L=w("hola 5"),A=E(),I=x("button"),q=w("hola 6"),R(n,"class",s=(t[0]?t[3].dark:t[3].light)+" bg-red-200 text-2xl"),R(l,"class","btn border"),R(f,"class","btn-blue border border-gray-600"),R(m,"class","btn-red "),R(h,"class",t[3].btnBase+" "+t[3].btnGreen),R(C,"class",t[3].mibtn),R(I,"class",t[3].btnBase+" "+t[3].btnBlue),R(e,"class","p-4 bg-white dark:bg-gray-800 dark:text-white ")},m(r,s){v(r,e,s),b(e,n),b(n,o),b(e,c),O&&O.m(e,null),b(e,a),et(i,e,null),b(e,u),b(e,l),b(e,d),b(e,f),b(e,p),b(e,m),b(e,$),b(e,h),b(h,g),b(e,k),b(e,C),b(C,L),b(e,A),b(e,I),b(I,q),S=!0,P||(N=[_(l,"click",t[2]),_(f,"click",t[4])],P=!0)},p(t,[o]){(!S||1&o&&s!==(s=(t[0]?t[3].dark:t[3].light)+" bg-red-200 text-2xl"))&&R(n,"class",s),t[1]?O?2&o&&W(O,1):(O=_e(),O.c(),W(O,1),O.m(e,a)):O&&(Q(),X(O,1,1,(()=>{O=null})),V())},i(t){S||(W(O),W(i.$$.fragment,t),S=!0)},o(t){X(O),X(i.$$.fragment,t),S=!1},d(t){t&&y(e),O&&O.d(),nt(i),P=!1,r(N)}}}function Ce(t,e,n){let o=!0,r="";let s=!1;return[o,s,()=>{n(0,o=!o),r="dark"===r?"light":"dark","dark"===r||window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},{light:"bg-gray-100 text-gray-800 shadow-xl",dark:"bg-blue-900 text-white",selected:"cursor-default text-blue-600 border-blue-600",btnBase:"py-2 px-3 rounded-lg shadow-md border border-[#ccc] focus:border-[#666]",btnRed:"bg-red-400 active:bg-red-700",btnBlue:"bg-blue-500 active:bg-blue-400",btnGreen:"bg-green-400 active:bg-green-700",mibtn:"p-2 px-3 rounded-lg shadow-md border border-[#ccc] focus:border-[#666] bg-yellow-400 active:bg-blue-500 "},()=>{n(1,s=!s)}]}class Le extends rt{constructor(t){super(),ot(this,t,Ce,Re,c,{})}}function Ae(e){let n,o,r,s;return{c(){n=x("div"),o=w("estoy en pagMain y el paramero recibodo es ["),r=w(e[0]),s=w("]")},m(t,e){v(t,n,e),b(n,o),b(n,r),b(n,s)},p(t,[e]){1&e&&C(r,t[0])},i:t,o:t,d(t){t&&y(n)}}}function Ie(t,e,n){let o,{idLocal:r=0}=e;const s=(ae(8,null,ht,2),ie(gt));return u(t,s,(t=>n(2,o=t))),t.$$set=t=>{"idLocal"in t&&n(0,r=t.idLocal)},t.$$.update=()=>{4&t.$$.dirty&&console.log(o)},[r,s,o]}class qe extends rt{constructor(t){super(),ot(this,t,Ie,Ae,c,{idLocal:0})}}function Se(e){let n;return{c(){n=w("estoy en la pagina 2")},m(t,e){v(t,n,e)},p:t,i:t,o:t,d(t){t&&y(n)}}}class Pe extends rt{constructor(t){super(),ot(this,t,null,Se,c,{})}}function Ne(t){let e,n;return e=new Le({}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Oe(t){let e,n;return e=new qe({props:{idLocal:t[4].idLocal}}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},p(t,n){const o={};16&n&&(o.idLocal=t[4].idLocal),e.$set(o)},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function je(t){let e,n;return e=new Pe({}),{c(){tt(e.$$.fragment)},m(t,o){et(e,t,o),n=!0},i(t){n||(W(e.$$.fragment,t),n=!0)},o(t){X(e.$$.fragment,t),n=!1},d(t){nt(e,t)}}}function Te(t){let e,n,o;return{c(){e=x("h3"),e.textContent="Esto es el error 404",n=E(),o=x("p"),o.textContent="No Route could be matched."},m(t,r){v(t,e,r),v(t,n,r),v(t,o,r)},d(t){t&&y(e),t&&y(n),t&&y(o)}}}function Me(t){let e,n,o,r,s,c,a,i;return e=new ye({props:{path:"/",$$slots:{default:[Ne]},$$scope:{ctx:t}}}),o=new ye({props:{path:":idLocal",$$slots:{default:[Oe,({params:t})=>({4:t}),({params:t})=>t?16:0]},$$scope:{ctx:t}}}),s=new ye({props:{path:"/pag2",$$slots:{default:[je]},$$scope:{ctx:t}}}),a=new ye({props:{$$slots:{default:[Te]},$$scope:{ctx:t}}}),{c(){tt(e.$$.fragment),n=E(),tt(o.$$.fragment),r=E(),tt(s.$$.fragment),c=E(),tt(a.$$.fragment)},m(t,u){et(e,t,u),v(t,n,u),et(o,t,u),v(t,r,u),et(s,t,u),v(t,c,u),et(a,t,u),i=!0},p(t,n){const r={};32&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r);const c={};48&n&&(c.$$scope={dirty:n,ctx:t}),o.$set(c);const i={};32&n&&(i.$$scope={dirty:n,ctx:t}),s.$set(i);const u={};32&n&&(u.$$scope={dirty:n,ctx:t}),a.$set(u)},i(t){i||(W(e.$$.fragment,t),W(o.$$.fragment,t),W(s.$$.fragment,t),W(a.$$.fragment,t),i=!0)},o(t){X(e.$$.fragment,t),X(o.$$.fragment,t),X(s.$$.fragment,t),X(a.$$.fragment,t),i=!1},d(t){nt(e,t),t&&y(n),nt(o,t),t&&y(r),nt(s,t),t&&y(c),nt(a,t)}}}function Ue(t){let e,n,o,s,c,a,i,u,l;return a=new ce({props:{url:t[0],primary:!1,$$slots:{default:[Me]},$$scope:{ctx:t}}}),{c(){e=x("main"),n=x("button"),n.textContent="Home",o=E(),s=x("button"),s.textContent="pag2",c=E(),tt(a.$$.fragment)},m(r,d){v(r,e,d),b(e,n),b(e,o),b(e,s),b(e,c),et(a,e,null),i=!0,u||(l=[_(n,"click",t[1]),_(s,"click",t[2])],u=!0)},p(t,[e]){const n={};32&e&&(n.$$scope={dirty:e,ctx:t}),a.$set(n)},i(t){i||(W(a.$$.fragment,t),i=!0)},o(t){X(a.$$.fragment,t),i=!1},d(t){t&&y(e),nt(a),u=!1,r(l)}}}function Be(t){let e=window.location.protocol+"//"+window.location.host+window.location.pathname;e=((t,e)=>{let n="/"===(t=t.trim()).substr(t.length-1,1);return e?n||(t+="/"):n&&(t=t.substr(0,t.length-1)),t})(e,!1);let n=e;console.log(n);return[n,()=>{Jt(n+"/",{replace:!0})},()=>{Jt(n+"/pag2",{replace:!0})}]}return new class extends rt{constructor(t){super(),ot(this,t,Be,Ue,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
