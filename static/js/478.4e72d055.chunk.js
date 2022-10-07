/*! For license information please see 478.4e72d055.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[478],{8478:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var n=r(4165),o=r(5861),i=r(885),a=r(2791),c=r(7689),s=r(184);function l(){var t=(0,c.s0)(),e=(0,a.useState)({}),r=(0,i.Z)(e,2),l=r[0],u=r[1],h=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var r,o,i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),e.next=3,fetch("https://api.escuelajs.co/api/v1/auth/profile",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}});case 3:return o=e.sent,e.next=6,o.json();case 6:if(!(i=e.sent)||401!==i.statusCode){e.next=12;break}return localStorage.removeItem("token"),e.abrupt("return",t("/login"));case 12:u(i);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){h()}),[]),(0,s.jsx)("div",{className:"container p-5",children:(0,s.jsxs)("div",{className:"d-flex profile-container",children:[(0,s.jsx)("div",{className:"w-30",children:(0,s.jsxs)("div",{className:"profile-img",children:[(0,s.jsx)("div",{className:"img-container mb-3",children:(0,s.jsx)("img",{src:l.avatar,alt:"profile"})}),(0,s.jsx)("h3",{className:"text-white mb-3",children:"John Doe"}),(0,s.jsx)("h5",{className:"text-white",children:"Customer"})]})}),(0,s.jsx)("div",{className:"w-70",children:(0,s.jsxs)("div",{className:"profile-details",children:[(0,s.jsx)("h2",{className:"border-bottom",children:"Personal Information"}),(0,s.jsxs)("div",{className:"content-box",children:[(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsx)("span",{className:"title",children:"Name: "}),(0,s.jsx)("span",{className:"info",children:l.name})]}),(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsx)("span",{className:"title",children:"Email: "}),(0,s.jsx)("span",{className:"info",children:l.email})]}),(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsx)("span",{className:"title",children:"Password: "}),(0,s.jsx)("span",{className:"info",children:l.password})]}),(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsx)("span",{className:"title",children:"Role: "}),(0,s.jsx)("span",{className:"info",children:l.role})]}),(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsx)("span",{className:"me-3 secondary-color",children:(0,s.jsx)("i",{className:"fab fa-facebook fs-4"})}),(0,s.jsx)("span",{className:"me-3 secondary-color",children:(0,s.jsx)("i",{className:"fab fa-twitter fs-4"})}),(0,s.jsx)("span",{className:"me-3 secondary-color",children:(0,s.jsx)("i",{className:"fab fa-instagram fs-4"})})]})]})]})})]})})}},5861:function(t,e,r){function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return o}})},4165:function(t,e,r){r.d(e,{Z:function(){return o}});var n=r(1002);function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(O){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var f={};function d(){}function p(){}function v(){}var m={};l(m,a,(function(){return this}));var y=Object.getPrototypeOf,x=y&&y(y(k([])));x&&x!==e&&r.call(x,a)&&(m=x);var g=v.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(i,a,c,s){var l=h(t[i],t,a);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==(0,n.Z)(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return o("throw",t,c,s)}))}s(l.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function N(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=h(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function k(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=v,l(g,"constructor",v),l(v,"constructor",p),p.displayName=l(v,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,l(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(j.prototype),l(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(g),l(g,s,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}}}]);
//# sourceMappingURL=478.4e72d055.chunk.js.map