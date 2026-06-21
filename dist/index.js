"use strict";var y=function(s,e){return function(){try{return e||s((e={exports:{}}).exports,e),e.exports}catch(v){throw (e=0, v)}};};var j=y(function(I,x){
var k=require('@stdlib/math-base-special-abs/dist');function w(s,e,v,g){var a,b,c,f,o,n,l,i,r,u,t,q;if(a=e.data,b=e.accessors[0],n=g,v===0)return s*b(a,n);if(r=b(a,n),n+=v,c=r,c===0)for(q=1;q<s;q++){if(r=b(a,n),r!==0){o=!0;break}c+=r,n+=v}else o=!0,q=1;for(f=0,l=0;q<s;q++)r=b(a,n),u=c+r,k(c)>=k(r)?t=c-u+r:t=r-u+c,c=u,u=l+t,k(l)>=k(t)?i=l-u+t:i=t-u+l,l=u,f+=i,n+=v;return o?c+l+f:c}x.exports=w
});var p=y(function(J,O){
var m=require('@stdlib/math-base-special-abs/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),A=j();function B(s,e,v,g){var a,b,c,f,o,n,l,i,r,u,t;if(s<=0)return 0;if(l=z(e),l.accessorProtocol)return A(s,l,v,g);if(f=g,v===0)return s*e[f];if(i=e[f],f+=v,a=i,a===0)for(t=1;t<s;t++){if(i=e[f],i!==0){c=!0;break}a+=i,f+=v}else c=!0,t=1;for(b=0,o=0;t<s;t++)i=e[f],r=a+i,m(a)>=m(i)?u=a-r+i:u=i-r+a,a=r,r=o+u,m(o)>=m(u)?n=o-r+u:n=u-r+o,o=r,b+=n,f+=v;return c?a+o+b:a}O.exports=B
});var R=y(function(K,P){
var C=require('@stdlib/strided-base-stride2offset/dist'),D=p();function E(s,e,v){return D(s,e,v,C(s,v))}P.exports=E
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),G=p();F(h,"ndarray",G);module.exports=h;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
