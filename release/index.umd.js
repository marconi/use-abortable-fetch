!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t():"function"==typeof define&&define.amd?define(t):t()}(0,function(){var n=require("react"),t=n.useState,r=n.useEffect,e=n.useLayoutEffect,o=n.useRef;module.exports=function(n){var u=t({data:null,loading:0,error:null,controller:null}),a=u[0],i=u[1],c=o(!1);return e(function(){return c.current=!0,function(){c.current=!1}},[]),r(function(){var t=new AbortController;return i(function(n){return{data:null,loading:n.loading+1,error:null,controller:t}}),function(n,t,r){fetch(n,{signal:t}).then(function(n){return n.ok?n:Promise.reject({message:n.statusText,status:n.status})}).then(function(n){return n.json()}).then(function(n){r(function(t){return Object.assign({},t,{data:n,loading:t.loading-1})})}).catch(function(n){var t="AbortError"!==n.name?n:null;r(function(n){return Object.assign({},n,{error:t,loading:n.loading-1})})})}(n,t.signal,function(n){c.current&&i(n)}),function(){return t.abort()}},[n]),{data:a.data,loading:!!a.loading,error:a.error,abort:function(){return a.controller&&a.controller.abort()}}}});
//# sourceMappingURL=index.umd.js.map