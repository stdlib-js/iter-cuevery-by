"use strict";var x=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=x(function(F,c){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-function/dist'),w=require('@stdlib/assert-is-iterator-like/dist'),i=require('@stdlib/symbol-iterator/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r,t){var a,u,o,v;if(!w(e))throw new TypeError(l('23L3v',e));if(!s(r))throw new TypeError(l('23L2H',r));return a=!0,v=-1,u={},f(u,"next",y),f(u,"return",q),i&&s(e[i])&&f(u,i,g),u;function y(){var n;return o?{done:!0}:(n=e.next(),n.done?(o=!0,n):(v+=1,a&&!r.call(t,n.value,v)&&(a=!1),{value:a,done:!1}))}function q(n){return o=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return m(e[i](),r,t)}}c.exports=m
});var b=d();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
