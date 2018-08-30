(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==="object"&&typeof module==="object")module.exports=factory();else if(typeof define==="function"&&define.amd)define([],factory);else{var a=factory();for(var i in a)(typeof exports==="object"?exports:root)[i]=a[i]}})(window,function(){return function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if(mode&4&&typeof value==="object"&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string")for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key));return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);class Proletarian{constructor(){this.listeners={};self.addEventListener("message",e=>this.handler(e))}handler(e){if(e.data==="terminate")return self.close();let event=e.data.event;let data=e.data.data;if(Object.prototype.hasOwnProperty.call(this.listeners,event))this.listeners[event](data)}read(event,func){this.listeners[event]=func}fire(event,data){self.postMessage({event:event,data:data})}}__webpack_require__.d(__webpack_exports__,"WebProletarian",function(){return webproletarian_WebProletarian});class webproletarian_WebProletarian{constructor(worker){if(!Worker)throw new Error("WebProletarian Error: Current browser version does not support WebWorkers :(");if({}.toString.call(worker)!=="[object Function]")throw new Error("WebProletarian Error: Worker function provided is not a function.");let raw=this.injectProletarian(worker);let blob=new Blob([raw],{type:"text/javascript"});let url=window.URL.createObjectURL(blob);this.listeners={};this.worker=new Worker(url);this.worker.addEventListener("message",e=>this.handler(e))}injectProletarian(raw){return[`${Proletarian};`,"const proletarian = new Proletarian();",`(${raw})();`].join("\n\n")}handler(e){let event=e.data.event;let data=e.data.data;if(Object.prototype.hasOwnProperty.call(this.listeners,event))this.listeners[event](data)}read(event,func){this.listeners[event]=func}fire(event,data){this.worker.postMessage({event:event,data:data})}stop(){this.worker.postMessage("terminate")}}}])});