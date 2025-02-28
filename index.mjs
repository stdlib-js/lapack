// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-min@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-loop-interchange-order@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@v0.1.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@v0.1.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base2-exponent@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base2-exponent@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-precision@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.4.0-esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs2@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import{ndarray as A}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dswap@esm/index.mjs";import{ndarray as _}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sswap@esm/index.mjs";import O from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@v0.1.1-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@v0.1.1-esm/index.mjs";function P(r,e,t,a){var i,o,s,u;if(r<=0)return e;for(i=n(e,0),s=2*t,o=2*a+1,u=0;u<r;u++)i[o]=-i[o],o+=s;return e}function D(r,e,n){return P(r,e,n,t(r,n))}function $(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function B(r,e){for(var t=0,n=r.length-1;n>=0;n--){var a=r[n];"."===a?r.splice(n,1):".."===a?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}e(D,"ndarray",P);var C=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,G=function(r){return C.exec(r).slice(1)};function H(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=B(X(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function I(r){var e=J(r),t="/"===Y(r,-1);return(r=B(X(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function J(r){return"/"===r.charAt(0)}function K(){return I(X(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function L(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=H(r).substr(1),e=H(e).substr(1);for(var n=t(r.split("/")),a=t(e.split("/")),i=Math.min(n.length,a.length),o=i,s=0;s<i;s++)if(n[s]!==a[s]){o=s;break}var u=[];for(s=o;s<n.length;s++)u.push("..");return(u=u.concat(a.slice(o))).join("/")}function N(r){var e=G(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function Q(r,e){var t=G(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function U(r){return G(r)[3]}var W={extname:U,basename:Q,dirname:N,sep:"/",delimiter:":",relative:L,join:K,isAbsolute:J,normalize:I,resolve:H};function X(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var Y="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},Z=$(Object.freeze({__proto__:null,basename:Q,default:W,delimiter:":",dirname:N,extname:U,isAbsolute:J,join:K,normalize:I,relative:L,resolve:H,sep:"/"}));function rr(r,e,t,a,i,o,s,m,d,c,p){var v,h;return v=n(a,0),h=n(m,0),i*=2,o*=2,d*=2,c*=2,s*=2,p*=2,"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v,h,g;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(h=d+v*a,g=c+v*f,p=v;p<e;p++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(v=0;v<e;v++){for(g=c,h=d,p=0;p<=l(v,r-1);p++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,v,i,o,s,h,d,c,p):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v,h,g;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(h=d,g=c,p=0;p<=l(v,e-1);p++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(v=0;v<e;v++){for(h=d+v*n,g=c+v*s,p=v;p<r;p++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,v,i,o,s,h,d,c,p):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,p,v,h,g,j,b,w,y,x,k,E;for(v=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=v[0],g=v[1],m=j[0],d=j[1]-h*j[0],c=b[0],p=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],o[y+1]=t[w+1],w+=m,y+=c;w+=d,y+=p}}(e,t,v,i,o,s,h,d,c,p),m}function er(r,e,t,n,a,i,u,f){var l,m,d,c;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=i,d=1,c=f;else{if(i<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=i,m=1,d=f,c=1}return rr(e,t,n,a,l,m,0,u,d,c,0)}e(er,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return rr(r,e,t,n,a,i,o,s,u,f,l)}));var tr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/clacpy/lib","./native.js")),nr=i(tr)?er:tr;function ar(r,e,t,n,a,i,o,s){var u,f,m;for(u=i+o,f=s,m=0;m<l(r,e);m++)a[f]=t,a[f+1]=n,f+=u;return a}function ir(r,e,t,a,i,o,s,f,p){var v,h,g,j,b;return v=n(o,0),s*=2,f*=2,p*=2,h=d(a),g=c(a),j=d(i),b=c(i),"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(c=m,u([s,f])){for(v=0;v<r;v++){for(d=c+v*f,p=v;p<e;p++)o[d]=t,o[d+1]=n,d+=f;c+=s}return ar(r,e,a,i,o,s,f,m),o}for(v=0;v<e;v++){for(d=c,p=0;p<=l(v,r-1);p++)o[d]=t,o[d+1]=n,d+=s;c+=f}ar(r,e,a,i,o,s,f,m)}(e,t,h,g,j,b,v,s,f,p):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(c=m,u([s,f])){for(v=0;v<r;v++){for(d=c,p=0;p<=l(v,e-1);p++)o[d]=t,o[d+1]=n,d+=f;c+=s}return ar(r,e,a,i,o,s,f,m),o}for(v=0;v<e;v++){for(d=c+v*s,p=v;p<r;p++)o[d]=t,o[d+1]=n,d+=s;c+=f}ar(r,e,a,i,o,s,f,m)}(e,t,h,g,j,b,v,s,f,p):function(r,e,t,n,a,i,o,s,u,f){var l,d,c,p,v,h,g,j,b,w;for(c=(w=m([r,e],[s,u])).sh,h=w.sx,p=c[0],v=c[1],l=h[0],d=h[1]-p*h[0],g=f,b=0;b<v;b++){for(j=0;j<p;j++)o[g]=t,o[g+1]=n,g+=l;g+=d}ar(r,e,a,i,o,s,u,f)}(e,t,h,g,j,b,v,s,f,p),o}function or(r,e,t,n,a,i,u,f){var l,m;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=f;else{if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=f,m=1}return ir(e,t,n,a,i,u,l,m,0)}e(or,"ndarray",(function(r,e,t,n,a,i,o,s,u){return ir(r,e,t,n,a,i,o,s,u)}));var sr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/claset/lib","./native.js")),ur=i(sr)?or:sr;function fr(r,e,t,a,i,o,s,u,f){var l,m,d,h,g,j,b,w,y,x,k,E,V;if(r<=0)return i;for(l=n(e,0),m=n(i,0),b=2*a,w=2*s,g=2*t,j=2*o,d=v(f),h=c(f),V=0;V<r;V++)y=m[w],x=m[w+1],k=l[b],E=l[b+1],l[b]=p(p(u*k)+p(p(d*y)-p(h*x))),l[b+1]=p(p(u*E)+p(p(d*x)+p(h*y))),m[w]=p(p(u*y)-p(p(d*k)+p(h*E))),m[w+1]=p(p(u*x)-p(p(d*E)-p(h*k))),b+=g,w+=j;return i}function lr(r,e,n,a,i,o,s){return fr(r,e,n,t(r,n),a,i,t(r,i),o,s)}e(lr,"ndarray",fr);function mr(r,e,t,n,a,i,o,s,f,l){var m,d,c,p,v,h,g,j,b,w;for(u([s,f])?(w=e,m=n,d=a-(b=r)*n,c=f,p=s-b*f):(w=r,m=a,d=n-(b=e)*a,c=s,p=f-b*s),v=i,h=l,j=0;j<w;j++){for(g=0;g<b;g++)o[h]=t[v],v+=m,h+=c;v+=d,h+=p}return o}function dr(r,e,t,n,a,i,u){var f,l,m,d;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));return"column-major"===r?(f=1,l=a,m=1,d=u):(f=a,l=1,m=u,d=1),mr(e,t,n,f,l,0,i,m,d,0)}e(dr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f){return mr(r,e,t,n,a,i,o,s,u,f)}));var cr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/dge-trans/lib","./native.js")),pr=i(cr)?dr:cr;function vr(r,e,t,n,a,i,o,s,m,d,c){return"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(p=v;p<e;p++)o[c+p*f]=t[d+p*a];d+=n,c+=s}return o}for(v=0;v<e;v++){for(p=0;p<=l(v,r-1);p++)o[c+p*s]=t[d+p*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(p=0;p<=l(v,e-1);p++)o[c+p*f]=t[d+p*a];d+=n,c+=s}return o}for(v=0;v<e;v++){for(p=v;p<r;p++)o[c+p*s]=t[d+p*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,p,v,h,g,j,b,w,y,x,k,E;for(v=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=v[0],g=v[1],m=j[0],d=j[1]-h*j[0],c=b[0],p=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],w+=m,y+=c;w+=d,y+=p}return o}(e,t,n,a,i,o,s,m,d,c)}function hr(r,e,t,n,a,i,u,f){var l,m,d,c;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=i,d=1,c=f;else{if(i<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=i,m=1,d=f,c=1}return vr(e,t,n,a,l,m,0,u,d,c,0)}e(hr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return vr(r,e,t,n,a,i,o,s,u,f,l)}));var gr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/dlacpy/lib","./native.js")),jr=i(gr)?hr:gr;var br=11113793747425387e-178,wr=44989137945431964e145,yr=1997919072202235e131,xr=14916681462400413e-170;function kr(r,e,t,n,a,i,o,s,u){var f,l,m,d,c,p,v,h,g;if(V(a)||V(i))return o;if(0===i&&(a=1),0===a&&(a=1,i=0),r<=0)return o[u]=a,o[u+s]=i,o;for(f=!0,m=0,d=0,l=0,h=n,g=0;g<r;g++)(v=q(e[h]))>yr?(l+=R(v*br),f=!1):v<xr?f&&(m+=R(v*wr)):d+=R(v),h+=t;return i>0&&((v=a*F(i))>yr?l+=a>1?(a*=br)*(a*i):a*(a*(br*(br*i))):v<xr?f&&(m+=a<1?(a*=wr)*(a*i):a*(a*(wr*(wr*i)))):d+=a*(a*i)),l>0?((d>0||V(d))&&(l+=d*br*br),o[u]=1/br,o[u+s]=l,o):m>0?(d>0||V(d)?(d=F(d),(m=F(m)/wr)>d?(c=d,p=m):(c=m,p=d),a=1,i=R(p)*(1+R(c/p))):(a=1/wr,i=m),o[u]=a,o[u+s]=i,o):(o[u]=1,o[u+s]=d,o)}function Er(r,e,t,n,a){return kr(r,e,t,E(r,t),n,a,new k(2),1,0)}e(Er,"ndarray",(function(r,e,t,n,a,i,o,s,u){return kr(r,e,t,n,a,i,o,s,u)}));var Vr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/dlassq/lib","./native.js")),Rr=i(Vr)?Er:Vr,qr=32;function Fr(r,e,t,n,a,i,o,s,f,l,m){var d,c,p,v,h,g,j,b,w,y,x,k;if(d=s>0?o-i:i-o,d+=1,u([t,n])){for(j=m,b=0,y=i;b<d;b++,y+=s)(v=f[j])!==y&&A(r,e,n,a+y*t,e,n,a+v*t),j+=l;return e}if(0!==(c=z(r/qr)*qr))for(w=0;w<c;w+=qr)for(j=m,b=0,y=i;b<d;b++,y+=s){if((v=f[j])!==y)for(h=a+y*t,g=a+v*t,x=w;x<w+qr;x++)p=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=p;j+=l}if(c!==r)for(j=m,b=0,y=i;b<d;b++,y+=s){if((v=f[j])!==y)for(h=a+y*t,g=a+v*t,x=c;x<r;x++)p=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=p;j+=l}return e}function Tr(r,e,t,n,a,i,u,f){var l,m,d,c,p;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("row-major"===r&&n<T(1,e))throw new RangeError(s("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",e,n));if(f>0)m=1,p=a;else{if(!(f<0))return t;m=-1,p=a+(a-i)*f,l=a,a=i,i=l}return"column-major"===r?(d=1,c=n):(d=n,c=1),Fr(e,t,d,c,0,a,i,m,u,f,p)}e(Tr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){var m;return s<0?(l+=o*f,f*=-1,m=i,i=o,o=m,s=-1):(l+=i*f,s=1),Fr(r,e,t,n,a,i,o,s,u,f,l)}));var zr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/dlaswp/lib","./native.js")),Ar=i(zr)?Tr:zr;function _r(r,e,t,n,a,i,o){var s,u,f,l;if(0===r)return 0;for(u=o,s=n,l=0;l<r-1;l++){if(e[s]<=0)return l+1;f=a[u],a[u]=f/e[s],e[s+=t]-=a[u]*f,u+=i}return e[s]<=0?r:0}function Or(r,e,t){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return _r(r,e,1,0,t,1,0)}e(Or,"ndarray",(function(r,e,t,n,a,i,o){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return _r(r,e,t,n,a,i,o)}));var Sr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/dpttrf/lib","./native.js")),Mr=i(Sr)?Or:Sr;function Pr(r,e,t,n,a,i,o,s,f,l){var m,d,c,p,v,h,g,j,b,w;for(u([s,f])?(w=e,m=n,d=a-(b=r)*n,c=f,p=s-b*f):(w=r,m=a,d=n-(b=e)*a,c=s,p=f-b*s),v=i,h=l,j=0;j<w;j++){for(g=0;g<b;g++)o[h]=t[v],v+=m,h+=c;v+=d,h+=p}return o}function Dr(r,e,t,n,a,i,u){var f,l,m,d;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));return"column-major"===r?(f=1,l=a,m=1,d=u):(f=a,l=1,m=u,d=1),Pr(e,t,n,f,l,0,i,m,d,0)}e(Dr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f){return Pr(r,e,t,n,a,i,o,s,u,f)}));var $r=a((0,Z.join)("/home/runner/work/lapack/lapack/base/sge-trans/lib","./native.js")),Br=i($r)?Dr:$r;function Cr(r,e,t,n,a,i,o,s,m,d,c){return"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(p=v;p<e;p++)o[c+p*f]=t[d+p*a];d+=n,c+=s}return o}for(v=0;v<e;v++){for(p=0;p<=l(v,r-1);p++)o[c+p*s]=t[d+p*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(p=0;p<=l(v,e-1);p++)o[c+p*f]=t[d+p*a];d+=n,c+=s}return o}for(v=0;v<e;v++){for(p=v;p<r;p++)o[c+p*s]=t[d+p*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,p,v,h,g,j,b,w,y,x,k,E;for(v=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=v[0],g=v[1],m=j[0],d=j[1]-h*j[0],c=b[0],p=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],w+=m,y+=c;w+=d,y+=p}return o}(e,t,n,a,i,o,s,m,d,c)}function Gr(r,e,t,n,a,i,u,f){var l,m,d,c;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=i,d=1,c=f;else{if(i<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=i,m=1,d=f,c=1}return Cr(e,t,n,a,l,m,0,u,d,c,0)}e(Gr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return Cr(r,e,t,n,a,i,o,s,u,f,l)}));var Hr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/slacpy/lib","./native.js")),Ir=i(Hr)?Gr:Hr,Jr=32;function Kr(r,e,t,n,a,i,o,s,f,l,m){var d,c,p,v,h,g,j,b,w,y,x,k;if(d=s>0?o-i:i-o,d+=1,u([t,n])){for(j=m,b=0,y=i;b<d;b++,y+=s)(v=f[j])!==y&&_(r,e,n,a+y*t,e,n,a+v*t),j+=l;return e}if(0!==(c=z(r/Jr)*Jr))for(w=0;w<c;w+=Jr)for(j=m,b=0,y=i;b<d;b++,y+=s){if((v=f[j])!==y)for(h=a+y*t,g=a+v*t,x=w;x<w+Jr;x++)p=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=p;j+=l}if(c!==r)for(j=m,b=0,y=i;b<d;b++,y+=s){if((v=f[j])!==y)for(h=a+y*t,g=a+v*t,x=c;x<r;x++)p=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=p;j+=l}return e}function Lr(r,e,t,n,a,i,u,f){var l,m,d,c,p;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("row-major"===r&&n<T(1,e))throw new RangeError(s("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",e,n));if(f>0)m=1,p=a;else{if(!(f<0))return t;m=-1,p=a+(a-i)*f,l=a,a=i,i=l}return"column-major"===r?(d=1,c=n):(d=n,c=1),Kr(e,t,d,c,0,a,i,m,u,f,p)}e(Lr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){var m;return s<0?(l+=o*f,f*=-1,m=i,i=o,o=m,s=-1):(l+=i*f,s=1),Kr(r,e,t,n,a,i,o,s,u,f,l)}));var Nr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/slaswp/lib","./native.js")),Qr=i(Nr)?Lr:Nr;function Ur(r,e,t,n,a,i,o){var s,u,f,l;if(0===r)return 0;for(u=o,s=n,l=0;l<r-1;l++){if(e[s]<=0)return l+1;f=a[u],a[u]=p(f/e[s]),e[s+=t]=p(e[s]-p(a[u]*f)),u+=i}return e[s]<=0?r:0}function Wr(r,e,t){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Ur(r,e,1,0,t,1,0)}e(Wr,"ndarray",(function(r,e,t,n,a,i,o){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Ur(r,e,t,n,a,i,o)}));var Xr=a((0,Z.join)("/home/runner/work/lapack/lapack/base/spttrf/lib","./native.js")),Yr=i(Xr)?Wr:Xr;function Zr(r,e,t,n){var a,i,o,s;if(r<=0)return e;for(a=O(e,0),o=2*t,i=2*n+1,s=0;s<r;s++)a[i]=-a[i],i+=o;return e}function re(r,e,n){return Zr(r,e,n,t(r,n))}e(re,"ndarray",Zr);function ee(r,e,t,n,a,i,o,s,m,d,c){var p,v;return p=O(n,0),v=O(s,0),a*=2,i*=2,m*=2,d*=2,o*=2,c*=2,"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v,h,g;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(h=d+v*a,g=c+v*f,p=v;p<e;p++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(v=0;v<e;v++){for(g=c,h=d,p=0;p<=l(v,r-1);p++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,p,a,i,o,v,m,d,c):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v,h,g;if(d=i,c=m,u([n,a])){for(v=0;v<r;v++){for(h=d,g=c,p=0;p<=l(v,e-1);p++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(v=0;v<e;v++){for(h=d+v*n,g=c+v*s,p=v;p<r;p++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,p,a,i,o,v,m,d,c):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,p,v,h,g,j,b,w,y,x,k,E;for(v=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=v[0],g=v[1],m=j[0],d=j[1]-h*j[0],c=b[0],p=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],o[y+1]=t[w+1],w+=m,y+=c;w+=d,y+=p}}(e,t,p,a,i,o,v,m,d,c),s}function te(r,e,t,n,a,i,u,f){var l,m,d,c;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=i,d=1,c=f;else{if(i<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=i,m=1,d=f,c=1}return ee(e,t,n,a,l,m,0,u,d,c,0)}e(te,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return ee(r,e,t,n,a,i,o,s,u,f,l)}));var ne=a((0,Z.join)("/home/runner/work/lapack/lapack/base/zlacpy/lib","./native.js")),ae=i(ne)?te:ne;function ie(r,e,t,n,a,i,o,s){var u,f,m;for(u=i+o,f=s,m=0;m<l(r,e);m++)a[f]=t,a[f+1]=n,f+=u;return a}function oe(r,e,t,n,a,i,o,s,f){var d,c,p,v,h;return d=O(i,0),o*=2,s*=2,f*=2,c=S(n),p=M(n),v=S(a),h=M(a),"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(c=m,u([s,f])){for(v=0;v<r;v++){for(d=c+v*f,p=v;p<e;p++)o[d]=t,o[d+1]=n,d+=f;c+=s}return ie(r,e,a,i,o,s,f,m),o}for(v=0;v<e;v++){for(d=c,p=0;p<=l(v,r-1);p++)o[d]=t,o[d+1]=n,d+=s;c+=f}ie(r,e,a,i,o,s,f,m)}(e,t,c,p,v,h,d,o,s,f):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,p,v;if(c=m,u([s,f])){for(v=0;v<r;v++){for(d=c,p=0;p<=l(v,e-1);p++)o[d]=t,o[d+1]=n,d+=f;c+=s}return ie(r,e,a,i,o,s,f,m),o}for(v=0;v<e;v++){for(d=c+v*s,p=v;p<r;p++)o[d]=t,o[d+1]=n,d+=s;c+=f}ie(r,e,a,i,o,s,f,m)}(e,t,c,p,v,h,d,o,s,f):function(r,e,t,n,a,i,o,s,u,f){var l,d,c,p,v,h,g,j,b,w;for(c=(w=m([r,e],[s,u])).sh,h=w.sx,p=c[0],v=c[1],l=h[0],d=h[1]-p*h[0],g=f,b=0;b<v;b++){for(j=0;j<p;j++)o[g]=t,o[g+1]=n,g+=l;g+=d}ie(r,e,a,i,o,s,u,f)}(e,t,c,p,v,h,d,o,s,f),i}function se(r,e,t,n,a,i,u,f){var l,m;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=f;else{if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=f,m=1}return oe(e,t,n,a,i,u,l,m,0)}e(se,"ndarray",(function(r,e,t,n,a,i,o,s,u){return oe(r,e,t,n,a,i,o,s,u)}));var ue=a((0,Z.join)("/home/runner/work/lapack/lapack/base/zlaset/lib","./native.js")),fe=i(ue)?se:ue;function le(r,e,t,n,a,i,o,s,u){var f,l,m,d,c,p,v,h,g,j,b,w,y;if(r<=0)return a;for(f=O(e,0),l=O(a,0),v=2*n,h=2*o,c=2*t,p=2*i,m=S(u),d=M(u),y=0;y<r;y++)g=l[h],j=l[h+1],b=f[v],w=f[v+1],f[v]=s*b+(m*g-d*j),f[v+1]=s*w+(m*j+d*g),l[h]=s*g-(m*b+d*w),l[h+1]=s*j-(m*w-d*b),v+=c,h+=p;return a}function me(r,e,n,a,i,o,s){return le(r,e,n,t(r,n),a,i,t(r,i),o,s)}e(me,"ndarray",le);var de={};r(de,"clacgv",D),r(de,"clacpy",nr),r(de,"claset",ur),r(de,"crot",lr),r(de,"dgetrans",pr),r(de,"dlacpy",jr),r(de,"dlamch",(function(r){return"e"===(r=x(r.charAt(0)))?.5*h:"s"===r?g:"b"===r?2:"p"===r?.5*h*2:"n"===r?y:"r"===r?1:"m"===r?j+1:"u"===r?g:"l"===r?b+1:"o"===r?w:0})),r(de,"dlassq",Rr),r(de,"dlaswp",Ar),r(de,"dpttrf",Mr),r(de,"sgetrans",Br),r(de,"slacpy",Ir),r(de,"slaswp",Qr),r(de,"spttrf",Yr),r(de,"zlacgv",re),r(de,"zlacpy",ae),r(de,"zlaset",fe),r(de,"zrot",me);var ce={};r(ce,"base",de);export{de as base,ce as default};
//# sourceMappingURL=index.mjs.map
