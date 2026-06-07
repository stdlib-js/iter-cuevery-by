"use strict";var x=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var d=x(function(F,c){
var v=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),s=require('@stdlib/assert-is-function/dist'),w=require('@stdlib/assert-is-iterator-like/dist'),a=require('@stdlib/symbol-iterator/dist'),l=require('@stdlib/error-tools-fmtprodmsg/dist');function m(e,r,f){var t,u,i,o;if(!w(e))throw new TypeError(l('23L3v',e));if(!s(r))throw new TypeError(l('23L2H',r));return t=!0,o=-1,u={},v(u,"next",y),v(u,"return",q),a&&s(e[a])&&v(u,a,g),u;function y(){var n;return i?{done:!0}:(n=e.next(),n.done?(i=!0,n):(o+=1,t&&!r.call(f,n.value,o)&&(t=!1),{value:t,done:!1}))}function q(n){return i=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return m(e[a](),r,f)}}c.exports=m
});var b=d();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
