// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@v0.2.1-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.2-esm/index.mjs";import{ndarray as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dswap@v0.2.1-esm/index.mjs";function f(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function m(r,e){for(var t=0,n=r.length-1;n>=0;n--){var s=r[n];"."===s?r.splice(n,1):".."===s?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}var c=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,d=function(r){return c.exec(r).slice(1)};function p(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=m(_(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function h(r){var e=v(r),t="/"===A(r,-1);return(r=m(_(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function v(r){return"/"===r.charAt(0)}function b(){return h(_(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function j(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=p(r).substr(1),e=p(e).substr(1);for(var n=t(r.split("/")),s=t(e.split("/")),i=Math.min(n.length,s.length),o=i,a=0;a<i;a++)if(n[a]!==s[a]){o=a;break}var u=[];for(a=o;a<n.length;a++)u.push("..");return(u=u.concat(s.slice(o))).join("/")}function g(r){var e=d(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function y(r,e){var t=d(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function x(r){return d(r)[3]}var w={extname:x,basename:y,dirname:g,sep:"/",delimiter:":",relative:j,join:b,isAbsolute:v,normalize:h,resolve:p};function _(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var A="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},O=f(Object.freeze({__proto__:null,basename:y,default:w,delimiter:":",dirname:g,extname:x,isAbsolute:v,join:b,normalize:h,relative:j,resolve:p,sep:"/"})),k=32;function E(r,e,t,n,s,i,o,f,m,c,d){var p,h,v,b,j,g,y,x,w,_,A,O;if(p=f>0?o-i:i-o,p+=1,a([t,n])){for(y=d,x=0,_=i;x<p;x++,_+=f)(b=m[y])!==_&&l(r,e,n,s+_*t,e,n,s+b*t),y+=c;return e}if(0!==(h=u(r/k)*k))for(w=0;w<h;w+=k)for(y=d,x=0,_=i;x<p;x++,_+=f){if((b=m[y])!==_)for(j=s+_*t,g=s+b*t,A=w;A<w+k;A++)v=e[j+(O=A*n)],e[j+O]=e[g+O],e[g+O]=v;y+=c}if(h!==r)for(y=d,x=0,_=i;x<p;x++,_+=f){if((b=m[y])!==_)for(j=s+_*t,g=s+b*t,A=h;A<r;A++)v=e[j+(O=A*n)],e[j+O]=e[g+O],e[g+O]=v;y+=c}return e}function z(r,e,t,n,a,u,l,f){var m,c,d,p,h;if(!s(r))throw new TypeError(o("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("row-major"===r&&n<i(1,e))throw new RangeError(o("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",e,n));if(f>0)c=1,h=a;else{if(!(f<0))return t;c=-1,h=a+(a-u)*f,m=a,a=u,u=m}return"column-major"===r?(d=1,p=n):(d=n,p=1),E(e,t,d,p,0,a,u,c,l,f,h)}n(z,"ndarray",(function(r,e,t,n,s,i,o,a,u,l,f){var m;return a<0?(f+=o*l,l*=-1,m=i,i=o,o=m,a=-1):(f+=i*l,a=1),E(r,e,t,n,s,i,o,a,u,l,f)}));var M=e((0,O.join)("/home/runner/work/lapack/lapack/base/dlaswp/lib","./native.js")),P={};r(P,"dlaswp",t(M)?z:M);var T={};r(T,"base",P);export{P as base,T as default};
//# sourceMappingURL=index.mjs.map
