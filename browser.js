// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=function(){try{return e({},"x",{}),!0}catch(e){return!1}},r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,l=n.__lookupSetter__,f=r,c=function(e,t,r){var f,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(e,t)||l.call(e,t)?(f=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=f):e[t]=r.value),_="get"in r,p="set"in r,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,t,r.get),p&&a&&a.call(e,t,r.set),e},_=t()?f:c,p=function(e){return Math.abs(e)};function d(e,t,r){var n,o,i,a,u,l,f,c,_;if(e<=0)return 0;if(1===e||0===r)return t[0];for(i=r<0?(1-e)*r:0,n=0,o=0,a=0,_=0;_<e;_++)f=n+(l=t[i]),c=p(n)>=p(l)?n-f+l:l-f+n,n=f,f=a+c,u=p(a)>=p(c)?a-f+c:c-f+a,a=f,o+=u,i+=r;return n+a+o}return _(d,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,t,r,n){var o,i,a,u,l,f,c,_,d;if(e<=0)return 0;if(1===e||0===r)return t[n];for(a=n,o=0,i=0,u=0,d=0;d<e;d++)c=o+(f=t[a]),_=p(o)>=p(f)?o-c+f:f-c+o,o=c,c=u+_,l=p(u)>=p(_)?u-c+_:_-c+u,u=c,i+=l,a+=r;return o+u+i}}),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).gsumkbn2=t();
//# sourceMappingURL=browser.js.map