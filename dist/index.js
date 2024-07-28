"use strict";var b=function(s,u){return function(){return u||s((u={exports:{}}).exports,u),u.exports}};var x=b(function(z,p){
var o=require('@stdlib/math-base-special-abs/dist');function O(s,u,l){var c,e,f,v,i,t,a,r,n;if(s<=0)return 0;if(s===1||l===0)return u[0];for(l<0?f=(1-s)*l:f=0,c=0,e=0,v=0,n=0;n<s;n++)t=u[f],a=c+t,o(c)>=o(t)?r=c-a+t:r=t-a+c,c=a,a=v+r,o(v)>=o(r)?i=v-a+r:i=r-a+v,v=a,e+=i,f+=l;return c+v+e}p.exports=O
});var g=b(function(A,y){
var m=require('@stdlib/math-base-special-abs/dist');function R(s,u,l,c){var e,f,v,i,t,a,r,n,q;if(s<=0)return 0;if(s===1||l===0)return u[c];for(v=c,e=0,f=0,i=0,q=0;q<s;q++)a=u[v],r=e+a,m(e)>=m(a)?n=e-r+a:n=a-r+e,e=r,r=i+n,m(i)>=m(n)?t=i-r+n:t=n-r+i,i=r,f+=t,v+=l;return e+i+f}y.exports=R
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),k=x(),j=g();h(k,"ndarray",j);module.exports=k;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
