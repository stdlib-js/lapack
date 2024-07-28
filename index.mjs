// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-min@v0.3.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs2@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.3.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.3-esm/index.mjs";import{ndarray as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dswap@v0.3.0-esm/index.mjs";function b(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function g(r,e){for(var t=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var y=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,w=function(r){return y.exec(r).slice(1)};function x(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=g(F(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function k(r){var e=E(r),t="/"===T(r,-1);return(r=g(F(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function E(r){return"/"===r.charAt(0)}function _(){return k(F(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function q(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=x(r).substr(1),e=x(e).substr(1);for(var n=t(r.split("/")),s=t(e.split("/")),i=Math.min(n.length,s.length),a=i,o=0;o<i;o++)if(n[o]!==s[o]){a=o;break}var u=[];for(o=a;o<n.length;o++)u.push("..");return(u=u.concat(s.slice(a))).join("/")}function A(r){var e=w(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function V(r,e){var t=w(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function O(r){return w(r)[3]}var R={extname:O,basename:V,dirname:A,sep:"/",delimiter:":",relative:q,join:_,isAbsolute:E,normalize:k,resolve:x};function F(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var T="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},z=b(Object.freeze({__proto__:null,basename:V,default:R,delimiter:":",dirname:A,extname:O,isAbsolute:E,join:_,normalize:k,relative:q,resolve:x,sep:"/"}));function M(r,e,t,n,s,i,l,f,m,d,c){return"upper"===r?function(r,e,t,n,s,i,o,l,f,m){var d,c,p,h;if(d=i,c=m,a([n,s])){for(h=0;h<r;h++){for(p=h;p<e;p++)o[c+p*f]=t[d+p*s];d+=n,c+=l}return o}for(h=0;h<e;h++){for(p=0;p<=u(h,r-1);p++)o[c+p*l]=t[d+p*n];d+=s,c+=f}return o}(e,t,n,s,i,l,f,m,d,c):"lower"===r?function(r,e,t,n,s,i,o,l,f,m){var d,c,p,h;if(d=i,c=m,a([n,s])){for(h=0;h<r;h++){for(p=0;p<=u(h,e-1);p++)o[c+p*f]=t[d+p*s];d+=n,c+=l}return o}for(h=0;h<e;h++){for(p=h;p<r;p++)o[c+p*l]=t[d+p*n];d+=s,c+=f}return o}(e,t,n,s,i,l,f,m,d,c):function(r,e,t,n,s,i,a,u,l,f){var m,d,c,p,h,v,j,b,g,y,w,x,k,E;for(h=(E=o([r,e],[n,s],[u,l])).sh,b=E.sx,g=E.sy,v=h[0],j=h[1],m=b[0],d=b[1]-v*b[0],c=g[0],p=g[1]-v*g[0],y=i,w=f,k=0;k<j;k++){for(x=0;x<v;x++)a[w]=t[y],y+=m,w+=c;y+=d,w+=p}return a}(e,t,n,s,i,l,f,m,d,c)}function P(r,e,t,n,a,o,u,l){var f,m,d,c;if(!s(r))throw new TypeError(i("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)f=1,m=o,d=1,c=l;else{if(o<n)throw new RangeError(i("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,o));if(l<n)throw new RangeError(i("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,l));f=o,m=1,d=l,c=1}return M(e,t,n,a,f,m,0,u,d,c,0)}n(P,"ndarray",(function(r,e,t,n,s,i,a,o,u,l,f){return M(r,e,t,n,s,i,a,o,u,l,f)}));var S=e((0,z.join)("/home/runner/work/lapack/lapack/base/dlacpy/lib","./native.js")),D=t(S)?P:S,$=11113793747425387e-178,B=44989137945431964e145,C=1997919072202235e131,G=14916681462400413e-170;function H(r,e,t,n,s,i,a,o,u){var l,f,h,v,j,b,g,y,w;if(m(s)||m(i))return a;if(0===i&&(s=1),0===s&&(s=1,i=0),r<=0)return a[u]=s,a[u+o]=i,a;for(l=!0,h=0,v=0,f=0,y=n,w=0;w<r;w++)(g=c(e[y]))>C?(f+=d(g*$),l=!1):g<G?l&&(h+=d(g*B)):v+=d(g),y+=t;return i>0&&((g=s*p(i))>C?f+=s>1?(s*=$)*(s*i):s*(s*($*($*i))):g<G?l&&(h+=s<1?(s*=B)*(s*i):s*(s*(B*(B*i)))):v+=s*(s*i)),f>0?((v>0||m(v))&&(f+=v*$*$),a[u]=1/$,a[u+o]=f,a):h>0?(v>0||m(v)?(v=p(v),(h=p(h)/B)>v?(j=v,b=h):(j=h,b=v),s=1,i=d(b)*(1+d(j/b))):(s=1/B,i=h),a[u]=s,a[u+o]=i,a):(a[u]=1,a[u+o]=v,a)}function I(r,e,t,n,s){return H(r,e,t,f(r,t),n,s,new l(2),1,0)}n(I,"ndarray",(function(r,e,t,n,s,i,a,o,u){return H(r,e,t,n,s,i,a,o,u)}));var J=e((0,z.join)("/home/runner/work/lapack/lapack/base/dlassq/lib","./native.js")),K=t(J)?I:J,L=32;function N(r,e,t,n,s,i,o,u,l,f,m){var d,c,p,h,b,g,y,w,x,k,E,_;if(d=u>0?o-i:i-o,d+=1,a([t,n])){for(y=m,w=0,k=i;w<d;w++,k+=u)(h=l[y])!==k&&j(r,e,n,s+k*t,e,n,s+h*t),y+=f;return e}if(0!==(c=v(r/L)*L))for(x=0;x<c;x+=L)for(y=m,w=0,k=i;w<d;w++,k+=u){if((h=l[y])!==k)for(b=s+k*t,g=s+h*t,E=x;E<x+L;E++)p=e[b+(_=E*n)],e[b+_]=e[g+_],e[g+_]=p;y+=f}if(c!==r)for(y=m,w=0,k=i;w<d;w++,k+=u){if((h=l[y])!==k)for(b=s+k*t,g=s+h*t,E=c;E<r;E++)p=e[b+(_=E*n)],e[b+_]=e[g+_],e[g+_]=p;y+=f}return e}function Q(r,e,t,n,a,o,u,l){var f,m,d,c,p;if(!s(r))throw new TypeError(i("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("row-major"===r&&n<h(1,e))throw new RangeError(i("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",e,n));if(l>0)m=1,p=a;else{if(!(l<0))return t;m=-1,p=a+(a-o)*l,f=a,a=o,o=f}return"column-major"===r?(d=1,c=n):(d=n,c=1),N(e,t,d,c,0,a,o,m,u,l,p)}n(Q,"ndarray",(function(r,e,t,n,s,i,a,o,u,l,f){var m;return o<0?(f+=a*l,l*=-1,m=i,i=a,a=m,o=-1):(f+=i*l,o=1),N(r,e,t,n,s,i,a,o,u,l,f)}));var U=e((0,z.join)("/home/runner/work/lapack/lapack/base/dlaswp/lib","./native.js")),W=t(U)?Q:U;function X(r,e,t,n,s,i,a){var o,u,l,f;if(0===r)return 0;for(u=a,o=n,f=0;f<r-1;f++){if(e[o]<=0)return f+1;l=s[u],s[u]=l/e[o],e[o+=t]-=s[u]*l,u+=i}return e[o]<=0?r:0}function Y(r,e,t){if(r<0)throw new RangeError(i("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return X(r,e,1,0,t,1,0)}n(Y,"ndarray",(function(r,e,t,n,s,a,o){if(r<0)throw new RangeError(i("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return X(r,e,t,n,s,a,o)}));var Z=e((0,z.join)("/home/runner/work/lapack/lapack/base/dpttrf/lib","./native.js")),rr=t(Z)?Y:Z,er={};r(er,"dlacpy",D),r(er,"dlassq",K),r(er,"dlaswp",W),r(er,"dpttrf",rr);var tr={};r(tr,"base",er);export{er as base,tr as default};
//# sourceMappingURL=index.mjs.map