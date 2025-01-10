"use strict";var y=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=y(function(z,b){
var c=require('@stdlib/math-base-special-abs/dist');function g(e,r,t,x){var s,f,n,u,o,v,a,i,q;if(e<=0)return 0;if(n=x,t===0)return e*r[n];for(s=0,f=0,u=0,q=0;q<e;q++)v=r[n],a=s+v,c(s)>=c(v)?i=s-a+v:i=v-a+s,s=a,a=u+i,c(u)>=c(i)?o=u-a+i:o=i-a+u,u=a,f+=o,n+=t;return s+u+f}b.exports=g
});var l=y(function(A,d){
var k=require('@stdlib/strided-base-stride2offset/dist'),O=m();function R(e,r,t){return O(e,r,t,k(e,t))}d.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=l(),j=m();h(p,"ndarray",j);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
