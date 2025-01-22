// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-read-only-property@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-try-require@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-error@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@v0.0.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-row-major@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-unary-loop-interchange-order@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-fast-min@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-nullary-loop-interchange-order@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-real@v0.1.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32-imag@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-smallest-normal@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-base2-exponent@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-base2-exponent@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-precision@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/string-base-lowercase@v0.4.0-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import k from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";import E from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import V from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs2@esm/index.mjs";import R from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import q from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import F from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-assert-is-layout@esm/index.mjs";import T from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import z from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import A from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";import{ndarray as _}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-dswap@esm/index.mjs";import{ndarray as O}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sswap@esm/index.mjs";import S from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import M from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-real@v0.1.1-esm/index.mjs";import P from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-imag@v0.1.1-esm/index.mjs";function D(r,e,t,a){var i,o,s,u;if(r<=0)return e;for(i=n(e,0),s=2*t,o=2*a+1,u=0;u<r;u++)i[o]=-i[o],o+=s;return e}function $(r,e,n){return D(r,e,n,t(r,n))}function B(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}function C(r,e){for(var t=0,n=r.length-1;n>=0;n--){var a=r[n];"."===a?r.splice(n,1):".."===a?(r.splice(n,1),t++):t&&(r.splice(n,1),t--)}if(e)for(;t--;t)r.unshift("..");return r}e($,"ndarray",D);var G=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,H=function(r){return G.exec(r).slice(1)};function I(){for(var r="",e=!1,t=arguments.length-1;t>=-1&&!e;t--){var n=t>=0?arguments[t]:"/";if("string"!=typeof n)throw new TypeError("Arguments to path.resolve must be strings");n&&(r=n+"/"+r,e="/"===n.charAt(0))}return(e?"/":"")+(r=C(Y(r.split("/"),(function(r){return!!r})),!e).join("/"))||"."}function J(r){var e=K(r),t="/"===Z(r,-1);return(r=C(Y(r.split("/"),(function(r){return!!r})),!e).join("/"))||e||(r="."),r&&t&&(r+="/"),(e?"/":"")+r}function K(r){return"/"===r.charAt(0)}function L(){return J(Y(Array.prototype.slice.call(arguments,0),(function(r,e){if("string"!=typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))}function N(r,e){function t(r){for(var e=0;e<r.length&&""===r[e];e++);for(var t=r.length-1;t>=0&&""===r[t];t--);return e>t?[]:r.slice(e,t-e+1)}r=I(r).substr(1),e=I(e).substr(1);for(var n=t(r.split("/")),a=t(e.split("/")),i=Math.min(n.length,a.length),o=i,s=0;s<i;s++)if(n[s]!==a[s]){o=s;break}var u=[];for(s=o;s<n.length;s++)u.push("..");return(u=u.concat(a.slice(o))).join("/")}function Q(r){var e=H(r),t=e[0],n=e[1];return t||n?(n&&(n=n.substr(0,n.length-1)),t+n):"."}function U(r,e){var t=H(r)[2];return e&&t.substr(-1*e.length)===e&&(t=t.substr(0,t.length-e.length)),t}function W(r){return H(r)[3]}var X={extname:W,basename:U,dirname:Q,sep:"/",delimiter:":",relative:N,join:L,isAbsolute:K,normalize:J,resolve:I};function Y(r,e){if(r.filter)return r.filter(e);for(var t=[],n=0;n<r.length;n++)e(r[n],n,r)&&t.push(r[n]);return t}var Z="b"==="ab".substr(-1)?function(r,e,t){return r.substr(e,t)}:function(r,e,t){return e<0&&(e=r.length+e),r.substr(e,t)},rr=B(Object.freeze({__proto__:null,basename:U,default:X,delimiter:":",dirname:Q,extname:W,isAbsolute:K,join:L,normalize:J,relative:N,resolve:I,sep:"/"}));function er(r,e,t,a,i,o,s,m,d,c,v){var p,h;return p=n(a,0),h=n(m,0),i*=2,o*=2,d*=2,c*=2,s*=2,v*=2,"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p,h,g;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(h=d+p*a,g=c+p*f,v=p;v<e;v++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(p=0;p<e;p++){for(g=c,h=d,v=0;v<=l(p,r-1);v++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,p,i,o,s,h,d,c,v):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p,h,g;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(h=d,g=c,v=0;v<=l(p,e-1);v++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(p=0;p<e;p++){for(h=d+p*n,g=c+p*s,v=p;v<r;v++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,p,i,o,s,h,d,c,v):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,v,p,h,g,j,b,w,y,x,k,E;for(p=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=p[0],g=p[1],m=j[0],d=j[1]-h*j[0],c=b[0],v=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],o[y+1]=t[w+1],w+=m,y+=c;w+=d,y+=v}}(e,t,p,i,o,s,h,d,c,v),m}function tr(r,e,t,n,a,i,u,f){var l,m,d,c;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=i,d=1,c=f;else{if(i<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=i,m=1,d=f,c=1}return er(e,t,n,a,l,m,0,u,d,c,0)}e(tr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return er(r,e,t,n,a,i,o,s,u,f,l)}));var nr=a((0,rr.join)("/home/runner/work/lapack/lapack/base/clacpy/lib","./native.js")),ar=i(nr)?tr:nr;function ir(r,e,t,n,a,i,o,s){var u,f,m;for(u=i+o,f=s,m=0;m<l(r,e);m++)a[f]=t,a[f+1]=n,f+=u;return a}function or(r,e,t,a,i,o,s,f,v){var p,h,g,j,b;return p=n(o,0),s*=2,f*=2,v*=2,h=d(a),g=c(a),j=d(i),b=c(i),"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(c=m,u([s,f])){for(p=0;p<r;p++){for(d=c+p*f,v=p;v<e;v++)o[d]=t,o[d+1]=n,d+=f;c+=s}return ir(r,e,a,i,o,s,f,m),o}for(p=0;p<e;p++){for(d=c,v=0;v<=l(p,r-1);v++)o[d]=t,o[d+1]=n,d+=s;c+=f}ir(r,e,a,i,o,s,f,m)}(e,t,h,g,j,b,p,s,f,v):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(c=m,u([s,f])){for(p=0;p<r;p++){for(d=c,v=0;v<=l(p,e-1);v++)o[d]=t,o[d+1]=n,d+=f;c+=s}return ir(r,e,a,i,o,s,f,m),o}for(p=0;p<e;p++){for(d=c+p*s,v=p;v<r;v++)o[d]=t,o[d+1]=n,d+=s;c+=f}ir(r,e,a,i,o,s,f,m)}(e,t,h,g,j,b,p,s,f,v):function(r,e,t,n,a,i,o,s,u,f){var l,d,c,v,p,h,g,j,b,w;for(c=(w=m([r,e],[s,u])).sh,h=w.sx,v=c[0],p=c[1],l=h[0],d=h[1]-v*h[0],g=f,b=0;b<p;b++){for(j=0;j<v;j++)o[g]=t,o[g+1]=n,g+=l;g+=d}ir(r,e,a,i,o,s,u,f)}(e,t,h,g,j,b,p,s,f,v),o}function sr(r,e,t,n,a,i,u,f){var l,m;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=f;else{if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=f,m=1}return or(e,t,n,a,i,u,l,m,0)}e(sr,"ndarray",(function(r,e,t,n,a,i,o,s,u){return or(r,e,t,n,a,i,o,s,u)}));var ur=a((0,rr.join)("/home/runner/work/lapack/lapack/base/claset/lib","./native.js")),fr=i(ur)?sr:ur;function lr(r,e,t,a,i,o,s,u,f){var l,m,p,h,g,j,b,w,y,x,k,E,V;if(r<=0)return i;for(l=n(e,0),m=n(i,0),b=2*a,w=2*s,g=2*t,j=2*o,p=d(f),h=c(f),V=0;V<r;V++)y=m[w],x=m[w+1],k=l[b],E=l[b+1],l[b]=v(v(u*k)+v(v(p*y)-v(h*x))),l[b+1]=v(v(u*E)+v(v(p*x)+v(h*y))),m[w]=v(v(u*y)-v(v(p*k)+v(h*E))),m[w+1]=v(v(u*x)-v(v(p*E)-v(h*k))),b+=g,w+=j;return i}function mr(r,e,n,a,i,o,s){return lr(r,e,n,t(r,n),a,i,t(r,i),o,s)}e(mr,"ndarray",lr);function dr(r,e,t,n,a,i,o,s,f,l){var m,d,c,v,p,h,g,j,b,w;for(u([s,f])?(w=e,m=n,d=a-(b=r)*n,c=f,v=s-b*f):(w=r,m=a,d=n-(b=e)*a,c=s,v=f-b*s),p=i,h=l,j=0;j<w;j++){for(g=0;g<b;g++)o[h]=t[p],p+=m,h+=c;p+=d,h+=v}return o}function cr(r,e,t,n,a,i,u){var f,l,m,d;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));return"column-major"===r?(f=1,l=a,m=1,d=u):(f=a,l=1,m=u,d=1),dr(e,t,n,f,l,0,i,m,d,0)}e(cr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f){return dr(r,e,t,n,a,i,o,s,u,f)}));var vr=a((0,rr.join)("/home/runner/work/lapack/lapack/base/dge-trans/lib","./native.js")),pr=i(vr)?cr:vr;function hr(r,e,t,n,a,i,o,s,m,d,c){return"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(v=p;v<e;v++)o[c+v*f]=t[d+v*a];d+=n,c+=s}return o}for(p=0;p<e;p++){for(v=0;v<=l(p,r-1);v++)o[c+v*s]=t[d+v*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(v=0;v<=l(p,e-1);v++)o[c+v*f]=t[d+v*a];d+=n,c+=s}return o}for(p=0;p<e;p++){for(v=p;v<r;v++)o[c+v*s]=t[d+v*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,v,p,h,g,j,b,w,y,x,k,E;for(p=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=p[0],g=p[1],m=j[0],d=j[1]-h*j[0],c=b[0],v=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],w+=m,y+=c;w+=d,y+=v}return o}(e,t,n,a,i,o,s,m,d,c)}function gr(r,e,t,n,a,i,u,f){var l,m,d,c;if(!o(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)l=1,m=i,d=1,c=f;else{if(i<n)throw new RangeError(s("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(f<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,f));l=i,m=1,d=f,c=1}return hr(e,t,n,a,l,m,0,u,d,c,0)}e(gr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return hr(r,e,t,n,a,i,o,s,u,f,l)}));var jr=a((0,rr.join)("/home/runner/work/lapack/lapack/base/dlacpy/lib","./native.js")),br=i(jr)?gr:jr;var wr=11113793747425387e-178,yr=44989137945431964e145,xr=1997919072202235e131,kr=14916681462400413e-170;function Er(r,e,t,n,a,i,o,s,u){var f,l,m,d,c,v,p,h,g;if(E(a)||E(i))return o;if(0===i&&(a=1),0===a&&(a=1,i=0),r<=0)return o[u]=a,o[u+s]=i,o;for(f=!0,m=0,d=0,l=0,h=n,g=0;g<r;g++)(p=R(e[h]))>xr?(l+=V(p*wr),f=!1):p<kr?f&&(m+=V(p*yr)):d+=V(p),h+=t;return i>0&&((p=a*q(i))>xr?l+=a>1?(a*=wr)*(a*i):a*(a*(wr*(wr*i))):p<kr?f&&(m+=a<1?(a*=yr)*(a*i):a*(a*(yr*(yr*i)))):d+=a*(a*i)),l>0?((d>0||E(d))&&(l+=d*wr*wr),o[u]=1/wr,o[u+s]=l,o):m>0?(d>0||E(d)?(d=q(d),(m=q(m)/yr)>d?(c=d,v=m):(c=m,v=d),a=1,i=V(v)*(1+V(c/v))):(a=1/yr,i=m),o[u]=a,o[u+s]=i,o):(o[u]=1,o[u+s]=d,o)}function Vr(r,e,t,n,a){return Er(r,e,t,k(r,t),n,a,new x(2),1,0)}e(Vr,"ndarray",(function(r,e,t,n,a,i,o,s,u){return Er(r,e,t,n,a,i,o,s,u)}));var Rr=a((0,rr.join)("/home/runner/work/lapack/lapack/base/dlassq/lib","./native.js")),qr=i(Rr)?Vr:Rr,Fr=32;function Tr(r,e,t,n,a,i,o,s,f,l,m){var d,c,v,p,h,g,j,b,w,y,x,k;if(d=s>0?o-i:i-o,d+=1,u([t,n])){for(j=m,b=0,y=i;b<d;b++,y+=s)(p=f[j])!==y&&_(r,e,n,a+y*t,e,n,a+p*t),j+=l;return e}if(0!==(c=A(r/Fr)*Fr))for(w=0;w<c;w+=Fr)for(j=m,b=0,y=i;b<d;b++,y+=s){if((p=f[j])!==y)for(h=a+y*t,g=a+p*t,x=w;x<w+Fr;x++)v=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=v;j+=l}if(c!==r)for(j=m,b=0,y=i;b<d;b++,y+=s){if((p=f[j])!==y)for(h=a+y*t,g=a+p*t,x=c;x<r;x++)v=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=v;j+=l}return e}function zr(r,e,t,n,a,i,o,s){var u,f,l,m,d;if(!F(r))throw new TypeError(z("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("row-major"===r&&n<T(1,e))throw new RangeError(z("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",e,n));if(s>0)f=1,d=a;else{if(!(s<0))return t;f=-1,d=a+(a-i)*s,u=a,a=i,i=u}return"column-major"===r?(l=1,m=n):(l=n,m=1),Tr(e,t,l,m,0,a,i,f,o,s,d)}e(zr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){var m;return s<0?(l+=o*f,f*=-1,m=i,i=o,o=m,s=-1):(l+=i*f,s=1),Tr(r,e,t,n,a,i,o,s,u,f,l)}));var Ar=a((0,rr.join)("/home/runner/work/lapack/lapack/base/dlaswp/lib","./native.js")),_r=i(Ar)?zr:Ar;function Or(r,e,t,n,a,i,o){var s,u,f,l;if(0===r)return 0;for(u=o,s=n,l=0;l<r-1;l++){if(e[s]<=0)return l+1;f=a[u],a[u]=f/e[s],e[s+=t]-=a[u]*f,u+=i}return e[s]<=0?r:0}function Sr(r,e,t){if(r<0)throw new RangeError(z("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Or(r,e,1,0,t,1,0)}e(Sr,"ndarray",(function(r,e,t,n,a,i,o){if(r<0)throw new RangeError(z("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Or(r,e,t,n,a,i,o)}));var Mr=a((0,rr.join)("/home/runner/work/lapack/lapack/base/dpttrf/lib","./native.js")),Pr=i(Mr)?Sr:Mr;function Dr(r,e,t,n,a,i,o,s,f,l){var m,d,c,v,p,h,g,j,b,w;for(u([s,f])?(w=e,m=n,d=a-(b=r)*n,c=f,v=s-b*f):(w=r,m=a,d=n-(b=e)*a,c=s,v=f-b*s),p=i,h=l,j=0;j<w;j++){for(g=0;g<b;g++)o[h]=t[p],p+=m,h+=c;p+=d,h+=v}return o}function $r(r,e,t,n,a,i,o){var s,u,f,l;if(!F(r))throw new TypeError(z("invalid argument. First argument must be a valid order. Value: `%s`.",r));return"column-major"===r?(s=1,u=a,f=1,l=o):(s=a,u=1,f=o,l=1),Dr(e,t,n,s,u,0,i,f,l,0)}e($r,"ndarray",(function(r,e,t,n,a,i,o,s,u,f){return Dr(r,e,t,n,a,i,o,s,u,f)}));var Br=a((0,rr.join)("/home/runner/work/lapack/lapack/base/sge-trans/lib","./native.js")),Cr=i(Br)?$r:Br;function Gr(r,e,t,n,a,i,o,s,m,d,c){return"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(v=p;v<e;v++)o[c+v*f]=t[d+v*a];d+=n,c+=s}return o}for(p=0;p<e;p++){for(v=0;v<=l(p,r-1);v++)o[c+v*s]=t[d+v*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(v=0;v<=l(p,e-1);v++)o[c+v*f]=t[d+v*a];d+=n,c+=s}return o}for(p=0;p<e;p++){for(v=p;v<r;v++)o[c+v*s]=t[d+v*n];d+=a,c+=f}return o}(e,t,n,a,i,o,s,m,d,c):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,v,p,h,g,j,b,w,y,x,k,E;for(p=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=p[0],g=p[1],m=j[0],d=j[1]-h*j[0],c=b[0],v=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],w+=m,y+=c;w+=d,y+=v}return o}(e,t,n,a,i,o,s,m,d,c)}function Hr(r,e,t,n,a,i,o,s){var u,f,l,m;if(!F(r))throw new TypeError(z("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)u=1,f=i,l=1,m=s;else{if(i<n)throw new RangeError(z("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(s<n)throw new RangeError(z("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,s));u=i,f=1,l=s,m=1}return Gr(e,t,n,a,u,f,0,o,l,m,0)}e(Hr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return Gr(r,e,t,n,a,i,o,s,u,f,l)}));var Ir=a((0,rr.join)("/home/runner/work/lapack/lapack/base/slacpy/lib","./native.js")),Jr=i(Ir)?Hr:Ir,Kr=32;function Lr(r,e,t,n,a,i,o,s,f,l,m){var d,c,v,p,h,g,j,b,w,y,x,k;if(d=s>0?o-i:i-o,d+=1,u([t,n])){for(j=m,b=0,y=i;b<d;b++,y+=s)(p=f[j])!==y&&O(r,e,n,a+y*t,e,n,a+p*t),j+=l;return e}if(0!==(c=A(r/Kr)*Kr))for(w=0;w<c;w+=Kr)for(j=m,b=0,y=i;b<d;b++,y+=s){if((p=f[j])!==y)for(h=a+y*t,g=a+p*t,x=w;x<w+Kr;x++)v=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=v;j+=l}if(c!==r)for(j=m,b=0,y=i;b<d;b++,y+=s){if((p=f[j])!==y)for(h=a+y*t,g=a+p*t,x=c;x<r;x++)v=e[h+(k=x*n)],e[h+k]=e[g+k],e[g+k]=v;j+=l}return e}function Nr(r,e,t,n,a,i,o,s){var u,f,l,m,d;if(!F(r))throw new TypeError(z("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("row-major"===r&&n<T(1,e))throw new RangeError(z("invalid argument. Fourth argument must be greater than or equal to max(1,%d). Value: `%d`.",e,n));if(s>0)f=1,d=a;else{if(!(s<0))return t;f=-1,d=a+(a-i)*s,u=a,a=i,i=u}return"column-major"===r?(l=1,m=n):(l=n,m=1),Lr(e,t,l,m,0,a,i,f,o,s,d)}e(Nr,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){var m;return s<0?(l+=o*f,f*=-1,m=i,i=o,o=m,s=-1):(l+=i*f,s=1),Lr(r,e,t,n,a,i,o,s,u,f,l)}));var Qr=a((0,rr.join)("/home/runner/work/lapack/lapack/base/slaswp/lib","./native.js")),Ur=i(Qr)?Nr:Qr;function Wr(r,e,t,n,a,i,o){var s,u,f,l;if(0===r)return 0;for(u=o,s=n,l=0;l<r-1;l++){if(e[s]<=0)return l+1;f=a[u],a[u]=v(f/e[s]),e[s+=t]=v(e[s]-v(a[u]*f)),u+=i}return e[s]<=0?r:0}function Xr(r,e,t){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Wr(r,e,1,0,t,1,0)}e(Xr,"ndarray",(function(r,e,t,n,a,i,o){if(r<0)throw new RangeError(s("invalid argument. First argument must be a nonnegative integer. Value: `%d`.",r));return Wr(r,e,t,n,a,i,o)}));var Yr=a((0,rr.join)("/home/runner/work/lapack/lapack/base/spttrf/lib","./native.js")),Zr=i(Yr)?Xr:Yr;function re(r,e,t,n){var a,i,o,s;if(r<=0)return e;for(a=S(e,0),o=2*t,i=2*n+1,s=0;s<r;s++)a[i]=-a[i],i+=o;return e}function ee(r,e,n){return re(r,e,n,t(r,n))}e(ee,"ndarray",re);function te(r,e,t,n,a,i,o,s,m,d,c){var v,p;return v=S(n,0),p=S(s,0),a*=2,i*=2,m*=2,d*=2,o*=2,c*=2,"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p,h,g;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(h=d+p*a,g=c+p*f,v=p;v<e;v++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(p=0;p<e;p++){for(g=c,h=d,v=0;v<=l(p,r-1);v++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,v,a,i,o,p,m,d,c):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p,h,g;if(d=i,c=m,u([n,a])){for(p=0;p<r;p++){for(h=d,g=c,v=0;v<=l(p,e-1);v++)o[g]=t[h],o[g+1]=t[h+1],h+=a,g+=f;d+=n,c+=s}return o}for(p=0;p<e;p++){for(h=d+p*n,g=c+p*s,v=p;v<r;v++)o[g]=t[h],o[g+1]=t[h+1],h+=n,g+=s;d+=a,c+=f}}(e,t,v,a,i,o,p,m,d,c):function(r,e,t,n,a,i,o,s,u,l){var m,d,c,v,p,h,g,j,b,w,y,x,k,E;for(p=(E=f([r,e],[n,a],[s,u])).sh,j=E.sx,b=E.sy,h=p[0],g=p[1],m=j[0],d=j[1]-h*j[0],c=b[0],v=b[1]-h*b[0],w=i,y=l,k=0;k<g;k++){for(x=0;x<h;x++)o[y]=t[w],o[y+1]=t[w+1],w+=m,y+=c;w+=d,y+=v}}(e,t,v,a,i,o,p,m,d,c),s}function ne(r,e,t,n,a,i,o,s){var u,f,l,m;if(!F(r))throw new TypeError(z("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)u=1,f=i,l=1,m=s;else{if(i<n)throw new RangeError(z("invalid argument. Sixth argument must be greater than or equal to %d. Value: `%d`.",n,i));if(s<n)throw new RangeError(z("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,s));u=i,f=1,l=s,m=1}return te(e,t,n,a,u,f,0,o,l,m,0)}e(ne,"ndarray",(function(r,e,t,n,a,i,o,s,u,f,l){return te(r,e,t,n,a,i,o,s,u,f,l)}));var ae=a((0,rr.join)("/home/runner/work/lapack/lapack/base/zlacpy/lib","./native.js")),ie=i(ae)?ne:ae;function oe(r,e,t,n,a,i,o,s){var u,f,m;for(u=i+o,f=s,m=0;m<l(r,e);m++)a[f]=t,a[f+1]=n,f+=u;return a}function se(r,e,t,n,a,i,o,s,f){var d,c,v,p,h;return d=S(i,0),o*=2,s*=2,f*=2,c=M(n),v=P(n),p=M(a),h=P(a),"upper"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(c=m,u([s,f])){for(p=0;p<r;p++){for(d=c+p*f,v=p;v<e;v++)o[d]=t,o[d+1]=n,d+=f;c+=s}return oe(r,e,a,i,o,s,f,m),o}for(p=0;p<e;p++){for(d=c,v=0;v<=l(p,r-1);v++)o[d]=t,o[d+1]=n,d+=s;c+=f}oe(r,e,a,i,o,s,f,m)}(e,t,c,v,p,h,d,o,s,f):"lower"===r?function(r,e,t,n,a,i,o,s,f,m){var d,c,v,p;if(c=m,u([s,f])){for(p=0;p<r;p++){for(d=c,v=0;v<=l(p,e-1);v++)o[d]=t,o[d+1]=n,d+=f;c+=s}return oe(r,e,a,i,o,s,f,m),o}for(p=0;p<e;p++){for(d=c+p*s,v=p;v<r;v++)o[d]=t,o[d+1]=n,d+=s;c+=f}oe(r,e,a,i,o,s,f,m)}(e,t,c,v,p,h,d,o,s,f):function(r,e,t,n,a,i,o,s,u,f){var l,d,c,v,p,h,g,j,b,w;for(c=(w=m([r,e],[s,u])).sh,h=w.sx,v=c[0],p=c[1],l=h[0],d=h[1]-v*h[0],g=f,b=0;b<p;b++){for(j=0;j<v;j++)o[g]=t,o[g+1]=n,g+=l;g+=d}oe(r,e,a,i,o,s,u,f)}(e,t,c,v,p,h,d,o,s,f),i}function ue(r,e,t,n,a,i,o,u){var f,l;if(!F(r))throw new TypeError(s("invalid argument. First argument must be a valid order. Value: `%s`.",r));if("column-major"===r)f=1,l=u;else{if(u<n)throw new RangeError(s("invalid argument. Eighth argument must be greater than or equal to %d. Value: `%d`.",n,u));f=u,l=1}return se(e,t,n,a,i,o,f,l,0)}e(ue,"ndarray",(function(r,e,t,n,a,i,o,s,u){return se(r,e,t,n,a,i,o,s,u)}));var fe=a((0,rr.join)("/home/runner/work/lapack/lapack/base/zlaset/lib","./native.js")),le=i(fe)?ue:fe;function me(r,e,t,n,a,i,o,s,u){var f,l,m,d,c,v,p,h,g,j,b,w,y;if(r<=0)return a;for(f=S(e,0),l=S(a,0),p=2*n,h=2*o,c=2*t,v=2*i,m=M(u),d=P(u),y=0;y<r;y++)g=l[h],j=l[h+1],b=f[p],w=f[p+1],f[p]=s*b+(m*g-d*j),f[p+1]=s*w+(m*j+d*g),l[h]=s*g-(m*b+d*w),l[h+1]=s*j-(m*w-d*b),p+=c,h+=v;return a}function de(r,e,n,a,i,o,s){return me(r,e,n,t(r,n),a,i,t(r,i),o,s)}e(de,"ndarray",me);var ce={};r(ce,"clacgv",$),r(ce,"clacpy",ar),r(ce,"claset",fr),r(ce,"crot",mr),r(ce,"dgetrans",pr),r(ce,"dlacpy",br),r(ce,"dlamch",(function(r){return"e"===(r=y(r.charAt(0)))?.5*p:"s"===r?h:"b"===r?2:"p"===r?.5*p*2:"n"===r?w:"r"===r?1:"m"===r?g+1:"u"===r?h:"l"===r?j+1:"o"===r?b:0})),r(ce,"dlassq",qr),r(ce,"dlaswp",_r),r(ce,"dpttrf",Pr),r(ce,"sgetrans",Cr),r(ce,"slacpy",Jr),r(ce,"slaswp",Ur),r(ce,"spttrf",Zr),r(ce,"zlacgv",ee),r(ce,"zlacpy",ie),r(ce,"zlaset",le),r(ce,"zrot",de);var ve={};r(ve,"base",ce);export{ce as base,ve as default};
//# sourceMappingURL=index.mjs.map
