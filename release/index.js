var n=require("react");const t=function(){function n(){}return n.prototype.then=function(t,r){const o=new n,i=this.s;if(i){const n=1&i?t:r;if(n){try{e(o,1,n(this.v))}catch(n){e(o,2,n)}return o}return this}return this.o=function(n){try{const i=n.v;1&n.s?e(o,1,t?t(i):i):r?e(o,1,r(i)):e(o,2,i)}catch(n){e(o,2,n)}},o},n}();function e(n,r,o){if(!n.s){if(o instanceof t){if(!o.s)return void(o.o=e.bind(null,n,r));1&r&&(r=o.s),o=o.v}if(o&&o.then)return void o.then(e.bind(null,n,r),e.bind(null,n,2));n.s=r,n.v=o;const i=n.o;i&&i(n)}}function r(n){return n instanceof t&&1&n.s}const o={};!function(){function n(n){this._entry=n,this._pact=null,this._resolve=null,this._return=null,this._promise=null}function r(n){return{value:n,done:!0}}function i(n){return{value:n,done:!1}}n.prototype[Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator"))]=function(){return this},n.prototype._yield=function(n){return this._resolve(n&&n.then?n.then(i):i(n)),this._pact=new t},n.prototype.next=function(n){const i=this;return i._promise=new Promise(function(u){const l=i._pact;if(null===l){const n=i._entry;if(null===n)return u(i._promise);function s(n){i._resolve(n&&n.then?n.then(r):r(n)),i._pact=null,i._resolve=null}i._entry=null,i._resolve=u,n(i).then(s,function(n){if(n===o)s(i._return);else{const e=new t;i._resolve(e),i._pact=null,i._resolve=null,_resolve(e,2,n)}})}else i._pact=null,i._resolve=u,e(l,1,n)})},n.prototype.return=function(n){const t=this;return t._promise=new Promise(function(i){const u=t._pact;if(null===u)return null===t._entry?i(t._promise):(t._entry=null,i(n&&n.then?n.then(r):r(n)));t._return=n,t._resolve=i,t._pact=null,e(u,2,o)})},n.prototype.throw=function(n){const t=this;return t._promise=new Promise(function(r,o){const i=t._pact;if(null===i)return null===t._entry?r(t._promise):(t._entry=null,o(n));t._resolve=r,t._pact=null,e(i,2,n)})}}(),module.exports=function(o,i){void 0===i&&(i={});var u=n.useState({data:null,loading:0,error:null,controller:null}),l=u[0],s=u[1],c=n.useRef(!1);return n.useLayoutEffect(function(){return c.current=!0,function(){c.current=!1}},[]),n.useEffect(function(){var n=new AbortController;return o&&(s(function(t){return{data:null,loading:t.loading+1,error:null,controller:n}}),function(o,i,u,l){var s=Object.assign({},i,{signal:n.signal});fetch(o,s).then(function(n){return n.ok?Promise.resolve(n):Promise.reject({message:n.statusText,status:n.status})}).then(function(n){if(!i.streaming)return n.json();if(!n.body)throw new Error("Invalid response body");var o=n.body.getReader();!function(){try{var n=!1,i=function(n,o,i){for(var u;;){var l=n();if(r(l)&&(l=l.v),!l)return s;if(l.then){u=0;break}var s=i();if(s&&s.then){if(!r(s)){u=1;break}s=s.s}if(o){var c=o();if(c&&c.then&&!r(c)){u=2;break}}}var a=new t,f=e.bind(null,a,2);return(0===u?l.then(v):1===u?s.then(h):c.then(d)).then(void 0,f),a;function h(t){s=t;do{if(o&&(c=o())&&c.then&&!r(c))return void c.then(d).then(void 0,f);if(!(l=n())||r(l)&&!l.v)return void e(a,1,s);if(l.then)return void l.then(v).then(void 0,f);r(s=i())&&(s=s.v)}while(!s||!s.then);s.then(h).then(void 0,f)}function v(n){n?(s=i())&&s.then?s.then(h).then(void 0,f):h(s):e(a,1,s)}function d(){(l=n())?l.then?l.then(v).then(void 0,f):v(l):e(a,1,s)}}(function(){return!n},void 0,function(){return Promise.resolve(o.read()).then(function(t){var e=t.value;t.done?n=!0:l(function(n){return Object.assign({},n,{data:e})})})});Promise.resolve(i&&i.then?i.then(function(){}):void 0)}catch(n){return Promise.reject(n)}}()}).then(function(n){l(function(t){return Object.assign({},t,{data:n,loading:t.loading-1})})}).catch(function(n){var t="AbortError"!==n.name?n:null;l(function(n){return Object.assign({},n,{error:t,loading:n.loading-1})})})}(o,i,0,function(n){c.current&&s(n)})),function(){return n.abort()}},[o]),{data:l.data,loading:!!l.loading,error:l.error,abort:function(){return l.controller&&l.controller.abort()}}};
//# sourceMappingURL=index.js.map
