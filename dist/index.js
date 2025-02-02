"use strict";var g=function(s,e){return function(){return e||s((e={exports:{}}).exports,e),e.exports}};var x=g(function(G,p){
var l=require('@stdlib/math-base-special-abs/dist');function R(s,e,n,b){var u,q,v,c,f,i,o,a,r,t,y;if(u=e.data,q=e.accessors[0],f=b,n===0)return s*q(u,f);for(v=0,c=0,i=0,y=0;y<s;y++)a=q(u,f),r=v+a,l(v)>=l(a)?t=v-r+a:t=a-r+v,v=r,r=i+t,l(i)>=l(t)?o=i-r+t:o=t-r+i,i=r,c+=o,f+=n;return v+i+c}p.exports=R
});var k=g(function(H,d){
var m=require('@stdlib/math-base-special-abs/dist'),h=require('@stdlib/array-base-arraylike2object/dist'),w=x();function z(s,e,n,b){var u,q,v,c,f,i,o,a,r,t;if(s<=0)return 0;if(i=h(e),i.accessorProtocol)return w(s,i,n,b);if(v=b,n===0)return s*e[v];for(u=0,q=0,c=0,t=0;t<s;t++)o=e[v],a=u+o,m(u)>=m(o)?r=u-a+o:r=o-a+u,u=a,a=c+r,m(c)>=m(r)?f=c-a+r:f=r-a+c,c=a,q+=f,v+=n;return u+c+q}d.exports=z
});var O=g(function(I,j){
var A=require('@stdlib/strided-base-stride2offset/dist'),B=k();function C(s,e,n){return B(s,e,n,A(s,n))}j.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=O(),E=k();D(P,"ndarray",E);module.exports=P;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
