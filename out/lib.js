!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("inferno"),require("inferno-router")):"function"==typeof define&&define.amd?define("InfernoMenuBar",["inferno","inferno-router"],t):"object"==typeof exports?exports.InfernoMenuBar=t(require("inferno"),require("inferno-router")):e.InfernoMenuBar=t(e.inferno,e["inferno-router"])}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=o.default.createVNode,i=function(e){var t=e.children;return t.forEach(function(t){t.props.onSelect=e.onSelect}),u(2,"ul","menu "+e.className,t)};i.defaultProps={className:""},t.default=i,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=u.default.createVNode,a=function(e){return i(2,"li","menu-item menu-anchor-item "+e.className+" "+(e.unpadded?"menu-item__unpadded":""),i(2,"a",null,e.children,r({},e)))};a.defaultProps={className:""},t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o);n(13);var i=u.default.createVNode,a=function(e){return i(2,"nav",null,i(2,"ul","menu-bar "+e.className,e.children.map(function(t){return i(16,t.type,null,null,r({},e,t.props,{children:t.props.children||t.children}))})))};a.defaultProps={className:""},t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=u.default.createVNode,a=function(e){var t=[i(2,"a",null,e.label||e.children,{href:"#",onClick:(0,o.linkEvent)(e.command,e.onSelect)})];return void 0!==e.label&&"object"===r(e.children)&&(e.children.props.onSelect=e.onSelect,t.push(e.children)),i(2,"li","menu-item "+e.className+" "+(e.unpadded?"menu-item__unpadded":""),t)};a.defaultProps={className:""},t.default=a,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(0),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n(1),a=u.default.createVNode,f=function(e){return a(2,"li","menu-item menu-link-item "+e.className+" "+(e.unpadded?"menu-item__unpadded":""),a(16,i.Link,null,null,r({},e,{children:e.children})))};f.defaultProps={className:""},t.default=f,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=o.default.createVNode,i=function(e){return u(2,"hr",e.className)};i.defaultProps={className:""},t.default=i,e.exports=t.default},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4);Object.defineProperty(t,"MenuBar",{enumerable:!0,get:function(){return r(o).default}});var u=n(5);Object.defineProperty(t,"MenuItem",{enumerable:!0,get:function(){return r(u).default}});var i=n(6);Object.defineProperty(t,"MenuLinkItem",{enumerable:!0,get:function(){return r(i).default}});var a=n(2);Object.defineProperty(t,"Menu",{enumerable:!0,get:function(){return r(a).default}});var f=n(7);Object.defineProperty(t,"MenuSeparator",{enumerable:!0,get:function(){return r(f).default}});var l=n(3);Object.defineProperty(t,"MenuAnchorItem",{enumerable:!0,get:function(){return r(l).default}})},function(e,t,n){t=e.exports=n(10)(void 0),t.push([e.i,"nav ul{margin:0;padding:0;list-style:none}.menu-bar{display:flex;background:#fff;text-align:center}.menu-item>a{display:block;color:#333;text-decoration:none;padding:8px 10px}.menu-item__unpadded a{padding:0}.menu-item{position:relative;text-align:left}.menu-item:hover{background:#ddd}.menu{position:absolute;left:-99999em;background:#fff;border:1px solid #333;white-space:nowrap;z-index:9999}.menu-bar>.menu-item:hover>.menu{left:-1px;min-width:100%}.menu-bar>.menu-item .menu-item:hover>.menu{left:100%;top:0}",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var u=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([u]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var u=this[o][0];"number"==typeof u&&(r[u]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=m[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(c(r.parts[u],t))}else{for(var i=[],u=0;u<r.parts.length;u++)i.push(c(r.parts[u],t));m[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],u=o[0],i=o[1],a=o[2],f=o[3],l={css:i,media:a,sourceMap:f};n[u]?n[u].parts.push(l):t.push(n[u]={id:u,parts:[l]})}return t}function u(e,t){var n=h(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function a(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),u(e,t),t}function f(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),u(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o;if(t.singleton){var u=y++;n=b||(b=a(t)),r=s.bind(null,n,u,!1),o=s.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=f(t),r=p.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),r=d.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=j(t,o);else{var u=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(u,i[t]):e.appendChild(u)}}function d(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var r=n.css,o=n.sourceMap,u=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||u)&&(r=x(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var m={},v=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),h=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),b=null,y=0,g=[],x=n(12);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},void 0===t.singleton&&(t.singleton=v()),void 0===t.insertInto&&(t.insertInto="head"),void 0===t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var u=[],i=0;i<n.length;i++){var a=n[i],f=m[a.id];f.refs--,u.push(f)}if(e){r(o(e),t)}for(var i=0;i<u.length;i++){var f=u[i];if(0===f.refs){for(var l=0;l<f.parts.length;l++)f.parts[l]();delete m[f.id]}}}};var j=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var u;return u=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(u)+")"})}},function(e,t,n){var r=n(9);"string"==typeof r&&(r=[[e.i,r,""]]);n(11)(r,{});r.locals&&(e.exports=r.locals)}])});