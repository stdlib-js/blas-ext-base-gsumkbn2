// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.2-esm/index.mjs";function n(r,n,t){var s,i,a,d,f,o,u,m,l;if(r<=0)return 0;if(1===r||0===t)return n[0];for(a=t<0?(1-r)*t:0,s=0,i=0,d=0,l=0;l<r;l++)u=s+(o=n[a]),m=e(s)>=e(o)?s-u+o:o-u+s,s=u,u=d+m,f=e(d)>=e(m)?d-u+m:m-u+d,d=u,i+=f,a+=t;return s+d+i}function t(r,n,t,s){var i,a,d,f,o,u,m,l,p;if(r<=0)return 0;if(1===r||0===t)return n[s];for(d=s,i=0,a=0,f=0,p=0;p<r;p++)m=i+(u=n[d]),l=e(i)>=e(u)?i-m+u:u-m+i,i=m,m=f+l,o=e(f)>=e(l)?f-m+l:l-m+f,f=m,a+=o,d+=t;return i+f+a}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
