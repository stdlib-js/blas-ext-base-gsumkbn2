"use strict";var y=function(u,a){return function(){return a||u((a={exports:{}}).exports,a),a.exports}};var j=y(function(I,x){
var k=require('@stdlib/math-base-special-abs/dist');function w(u,a,i,g){var e,b,s,f,o,n,l,c,r,v,t,q;if(e=a.data,b=a.accessors[0],n=g,i===0)return u*b(e,n);if(r=b(e,n),n+=i,s=r,s===0)for(q=1;q<u;q++){if(r=b(e,n),r!==0){o=!0;break}s+=r,n+=i}else o=!0,q=1;for(f=0,l=0;q<u;q++)r=b(e,n),v=s+r,k(s)>=k(r)?t=s-v+r:t=r-v+s,s=v,v=l+t,k(l)>=k(t)?c=l-v+t:c=t-v+l,l=v,f+=c,n+=i;return o?s+l+f:s}x.exports=w
});var p=y(function(J,O){
var m=require('@stdlib/math-base-special-abs/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),A=j();function B(u,a,i,g){var e,b,s,f,o,n,l,c,r,v,t;if(u<=0)return 0;if(l=z(a),l.accessorProtocol)return A(u,l,i,g);if(f=g,i===0)return u*a[f];if(c=a[f],f+=i,e=c,e===0)for(t=1;t<u;t++){if(c=a[f],c!==0){s=!0;break}e+=c,f+=i}else s=!0,t=1;for(b=0,o=0;t<u;t++)c=a[f],r=e+c,m(e)>=m(c)?v=e-r+c:v=c-r+e,e=r,r=o+v,m(o)>=m(v)?n=o-r+v:n=v-r+o,o=r,b+=n,f+=i;return s?e+o+b:e}O.exports=B
});var R=y(function(K,P){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=p();function E(u,a,i){return D(u,a,i,C(u,i))}P.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),G=p();F(h,"ndarray",G);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
