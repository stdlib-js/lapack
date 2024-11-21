// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-min@v0.3.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs2@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import{ndarray as g}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dswap@v0.3.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";function j(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function w(r,e){for(var t=0,n=r.length-1;n>=0;n--){var i=r[n];"."===i?r.splice(n,1):".."===i?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,x=function(r){return y.exec(r).slice(1)};function k(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=w(T(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function E(r){var e=V(r),t="/"===z(r,-1);return(r=w(T(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function V(r){return"/"===r.charAt(0)}function R(){return E(T(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function q(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=k(r).substr(1),e=k(e).substr(1);for(var n=t(r.split("/")),i=t(e.split("/")),s=Math.min(n.length,i.length),a=s,o=0;o<s;o++)if(n[o]!==i[o]){a=o;break}var u=[];for(o=a;o<n.length;o++)u.push("..");return(u=u.concat(i.slice(a))).join("/")}function F(r){var e=x(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function _(r,e){var t=x(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function A(r){return x(r)[3]}var O={extname:A,basename:_,dirname:F,sep:"/",delimiter:":",relative:q,join:R,isAbsolute:V,normalize:E,resolve:k};function T(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var z="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},M=j(Object.freeze({__proto__:null,basename:_,default:O,delimiter:":",dirname:F,extname:A,isAbsolute:V,join:R,normalize:E,relative:q,resolve:k,sep:"/"}));function P(r,e,t,n,i,s,l,f,m,d,c){return"upper"===r?function(r,e,t,n,i,s,o,l,f,m){var d,c,p,v;if(d=s,c=m,a([n,i])){for(v=0;v<r;v++){for(p=v;p<e;p++)o[c+p*f]=t[d+p*i];d+=n,c+=l}return o}for(v=0;v<e;v++){for(p=0;p<=u(v,r-1);p++)o[c+p*l]=t[d+p*n];d+=i,c+=f}return o}(e,t,n,i,s,l,f,m,d,c):"lower"===r?function(r,e,t,n,i,s,o,l,f,m){var d,c,p,v;if(d=s,c=m,a([n,i])){for(v=0;v<r;v++){for(p=0;p<=u(v,e-1);p++)o[c+p*f]=t[d+p*i];d+=n,c+=l}return o}for(v=0;v<e;v++){for(p=v;p<r;p++)o[c+p*l]=t[d+p*n];d+=i,c+=f}return o}(e,t,n,i,s,l,f,m,d,c):function(r,e,t,n,i,s,a,u,l,f){var m,d,c,p,v,h,g,b,j,w,y,x,k,E;for(v=(E=o([r,e],[n,i],[u,l])).sh,b=E.sx,j=E.sy,h=v[0],g=v[1],m=b[0],d=b[1]-h*b[0],c=j[0],p=j[1]-h*j[0],w=s,y=f,k=0;k<g;k++){for(x=0;x<h;x++)a[y]=t[w],w+=m,y+=c;w+=d,y+=p}return a}(e,t,n,i,s,l,f,m,d,c)}function S(r,e,t,n,a,o,u,l){var f,m,d,c;if(!i(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)f=1,m=o,d=1,c=l;else{if(o<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,o));if(l<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,l));f=o,m=1,d=l,c=1}return P(e,t,n,a,f,m,0,u,d,c,0)}n(S,"ndarray",(function(r,e,t,n,i,s,a,o,u,l,f){return P(r,e,t,n,i,s,a,o,u,l,f)}));var D=e((0,M.join)("/home/runner/work/lapack/lapack/base/dlacpy/lib","./native.js")),$=t(D)?S:D,B=11113793747425387e-178,C=44989137945431964e145,G=1997919072202235e131,H=14916681462400413e-170;function I(r,e,t,n,i,s,a,o,u){var l,f,v,h,g,b,j,w,y;if(m(i)||m(s))return a;if(0===s&&(i=1),0===i&&(i=1,s=0),r<=0)return a[u]=i,a[u+o]=s,a;for(l=!0,v=0,h=0,f=0,w=n,y=0;y<r;y++)(j=c(e[w]))>G?(f+=d(j*B),l=!1):j<H?l&&(v+=d(j*C)):h+=d(j),w+=t;return s>0&&((j=i*p(s))>G?f+=i>1?(i*=B)*(i*s):i*(i*(B*(B*s))):j<H?l&&(v+=i<1?(i*=C)*(i*s):i*(i*(C*(C*s)))):h+=i*(i*s)),f>0?((h>0||m(h))&&(f+=h*B*B),a[u]=1/B,a[u+o]=f,a):v>0?(h>0||m(h)?(h=p(h),(v=p(v)/C)>h?(g=h,b=v):(g=v,b=h),i=1,s=d(b)*(1+d(g/b))):(i=1/C,s=v),a[u]=i,a[u+o]=s,a):(a[u]=1,a[u+o]=h,a)}function J(r,e,t,n,i){return I(r,e,t,f(r,t),n,i,new l(2),1,0)}n(J,"ndarray",(function(r,e,t,n,i,s,a,o,u){return I(r,e,t,n,i,s,a,o,u)}));var K=e((0,M.join)("/home/runner/work/lapack/lapack/base/dlassq/lib","./native.js")),L=t(K)?J:K,N=32;function Q(r,e,t,n,i,s,o,u,l,f,m){var d,c,p,v,b,j,w,y,x,k,E,V;if(d=u>0?o-s:s-o,d+=1,a([t,n])){for(w=m,y=0,k=s;y<d;y++,k+=u)(v=l[w])!==k&&g(r,e,n,i+k*t,e,n,i+v*t),w+=f;return e}if(0!==(c=h(r/N)*N))for(x=0;x<c;x+=N)for(w=m,y=0,k=s;y<d;y++,k+=u){if((v=l[w])!==k)for(b=i+k*t,j=i+v*t,E=x;E<x+N;E++)p=e[b+(V=E*n)],e[b+V]=e[j+V],e[j+V]=p;w+=f}if(c!==r)for(w=m,y=0,k=s;y<d;y++,k+=u){if((v=l[w])!==k)for(b=i+k*t,j=i+v*t,E=c;E<r;E++)p=e[b+(V=E*n)],e[b+V]=e[j+V],e[j+V]=p;w+=f}return e}function U(r,e,t,n,a,o,u,l){var f,m,d,c,p;if(!i(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("row-major"===r&&n<v(1,e))throw new RangeError(s("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",e,n));if(l>0)m=1,p=a;else{if(!(l<0))return t;m=-1,p=a+(a-o)*l,f=a,a=o,o=f}return"column-major"===r?(d=1,c=n):(d=n,c=1),Q(e,t,d,c,0,a,o,m,u,l,p)}n(U,"ndarray",(function(r,e,t,n,i,s,a,o,u,l,f){var m;return o<0?(f+=a*l,l*=-1,m=s,s=a,a=m,o=-1):(f+=s*l,o=1),Q(r,e,t,n,i,s,a,o,u,l,f)}));var W=e((0,M.join)("/home/runner/work/lapack/lapack/base/dlaswp/lib","./native.js")),X=t(W)?U:W;function Y(r,e,t,n,i,s,a){var o,u,l,f;if(0===r)return 0;for(u=a,o=n,f=0;f<r-1;f++){if(e[o]<=0)return f+1;l=i[u],i[u]=l/e[o],e[o+=t]-=i[u]*l,u+=s}return e[o]<=0?r:0}function Z(r,e,t){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Y(r,e,1,0,t,1,0)}n(Z,"ndarray",(function(r,e,t,n,i,a,o){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Y(r,e,t,n,i,a,o)}));var rr=e((0,M.join)("/home/runner/work/lapack/lapack/base/dpttrf/lib","./native.js")),er=t(rr)?Z:rr;function tr(r,e,t,n,i,s,l,f,m,d,c){return"upper"===r?function(r,e,t,n,i,s,o,l,f,m){var d,c,p,v;if(d=s,c=m,a([n,i])){for(v=0;v<r;v++){for(p=v;p<e;p++)o[c+p*f]=t[d+p*i];d+=n,c+=l}return o}for(v=0;v<e;v++){for(p=0;p<=u(v,r-1);p++)o[c+p*l]=t[d+p*n];d+=i,c+=f}return o}(e,t,n,i,s,l,f,m,d,c):"lower"===r?function(r,e,t,n,i,s,o,l,f,m){var d,c,p,v;if(d=s,c=m,a([n,i])){for(v=0;v<r;v++){for(p=0;p<=u(v,e-1);p++)o[c+p*f]=t[d+p*i];d+=n,c+=l}return o}for(v=0;v<e;v++){for(p=v;p<r;p++)o[c+p*l]=t[d+p*n];d+=i,c+=f}return o}(e,t,n,i,s,l,f,m,d,c):function(r,e,t,n,i,s,a,u,l,f){var m,d,c,p,v,h,g,b,j,w,y,x,k,E;for(v=(E=o([r,e],[n,i],[u,l])).sh,b=E.sx,j=E.sy,h=v[0],g=v[1],m=b[0],d=b[1]-h*b[0],c=j[0],p=j[1]-h*j[0],w=s,y=f,k=0;k<g;k++){for(x=0;x<h;x++)a[y]=t[w],w+=m,y+=c;w+=d,y+=p}return a}(e,t,n,i,s,l,f,m,d,c)}function nr(r,e,t,n,a,o,u,l){var f,m,d,c;if(!i(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)f=1,m=o,d=1,c=l;else{if(o<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,o));if(l<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,l));f=o,m=1,d=l,c=1}return tr(e,t,n,a,f,m,0,u,d,c,0)}n(nr,"ndarray",(function(r,e,t,n,i,s,a,o,u,l,f){return tr(r,e,t,n,i,s,a,o,u,l,f)}));var ir=e((0,M.join)("/home/runner/work/lapack/lapack/base/slacpy/lib","./native.js")),sr=t(ir)?nr:ir;function ar(r,e,t,n,i,s,a){var o,u,l,f;if(0===r)return 0;for(u=a,o=n,f=0;f<r-1;f++){if(e[o]<=0)return f+1;l=i[u],i[u]=b(l/e[o]),e[o+=t]=b(e[o]-b(i[u]*l)),u+=s}return e[o]<=0?r:0}function or(r,e,t){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return ar(r,e,1,0,t,1,0)}n(or,"ndarray",(function(r,e,t,n,i,a,o){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return ar(r,e,t,n,i,a,o)}));var ur=e((0,M.join)("/home/runner/work/lapack/lapack/base/spttrf/lib","./native.js")),lr=t(ur)?or:ur,fr={};r(fr,"dlacpy",$),r(fr,"dlassq",L),r(fr,"dlaswp",X),r(fr,"dpttrf",er),r(fr,"slacpy",sr),r(fr,"spttrf",lr);var mr={};r(mr,"base",fr);export{fr as base,mr as default};
//# sourceMappingURL=index.mjs.map
