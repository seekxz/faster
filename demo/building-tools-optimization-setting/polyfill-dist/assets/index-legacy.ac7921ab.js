!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,i,a,c=[],l=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(o=i.call(r)).done)&&(c.push(o.value),c.length!==t);l=!0);}catch(f){s=!0,n=f}finally{try{if(!l&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw n}}return c}}(e,r)||t(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}System.register(["./react-legacy.57fdcd9c.js","./react-dom-legacy.8c360c44.js","./scheduler-legacy.7c7ad9ee.js"],(function(t,r){"use strict";var o,n,i,a,c=document.createElement("style");return c.textContent="#root{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.logo{height:6em;padding:1.5em;will-change:filter}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa)}.logo.react:hover{filter:drop-shadow(0 0 2em #61dafbaa)}@keyframes logo-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@media (prefers-reduced-motion: no-preference){a:nth-of-type(2) .logo{animation:logo-spin infinite 20s linear}}.card{padding:2em}.read-the-docs{color:#888}:root{font-family:Inter,Avenir,Helvetica,Arial,sans-serif;font-size:16px;line-height:24px;font-weight:400;color-scheme:light dark;color:rgba(255,255,255,.87);background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-text-size-adjust:100%}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}h1{font-size:3.2em;line-height:1.1}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){:root{color:#213547;background-color:#fff}a:hover{color:#747bff}button{background-color:#f9f9f9}}\n",document.head.appendChild(c),{setters:[function(e){o=e.j,n=e.r,i=e.R},function(e){a=e.c},null],execute:function(){var t=o.jsx,r=o.jsxs;function c(){var o=e(n.useState(0),2),i=o[0],a=o[1];return r("div",{className:"App",children:[t("h1",{children:"Vite + React"}),t("div",{className:"card",children:r("button",{onClick:function(){return a((function(e){return e+1}))},children:["count is ",i]})})]})}console.log("treeShaking: ",(function(){console.log("test treeShaking")})),a.createRoot(document.getElementById("root")).render(t(i.StrictMode,{children:t(c,{})}))}}}))}();
