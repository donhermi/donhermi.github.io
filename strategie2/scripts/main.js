"use strict";window.g_arh=class{constructor(c,a){this.g_ari=c,this.g_arj=a,this.g_ark=!1,this.g_ahL=()=>this.g_Jf()}g_arl(){}g_arm(e,a,b,c){this.g_ari.g_arn(this.g_arj,e,a,!!b,c)}g_aro(e,a,b,c){return this.g_ari.g_arp(this.g_arj,e,a,!!b,c)}g_arq(d,a,b){this.g_ari.g_arr()?this.g_arm(d,a,b):this.g_ari.g_ars()._OnMessageFromDOM({type:"event",component:this.g_arj,handler:d,dispatchRuntimeEvent:b,data:a,responseId:null})}g_art(c,a){this.g_ari.g_aru(this.g_arj,c,a)}g_arv(d){for(const[a,b]of d)this.g_art(a,b)}g_arw(){return this.g_ari}g_arx(){return this.g_arj}g_Zu(){this.g_ark||(this.g_ari.g_ary(this.g_ahL),this.g_ark=!0)}g_Zh(){this.g_ark&&(this.g_ari.g_arz(this.g_ahL),this.g_ark=!1)}g_Jf(){}},"use strict",window.g_arA=class extends g_arh{constructor(c,a){super(c,a),this.g_arB=new Map,this.g_arC=!0,this.g_art("create",b=>this.g_arD(b)),this.g_art("destroy",b=>this.g_arE(b)),this.g_art("set-visible",b=>this.g_arF(b)),this.g_art("update-position",b=>this.g_arG(b)),this.g_art("update-state",b=>this.g_arH(b)),this.g_art("focus",b=>this.g_arI(b)),this.g_art("set-css-style",b=>this.g_arJ(b))}g_arK(b){this.g_arC=!!b}g_arL(c,e){this.g_art(c,b=>{const a=b.elementId,c=this.g_arB.get(a);return e(c,b)})}g_arD(d){const a=d.elementId,b=this.g_ZU(a,d);this.g_arB.set(a,b),d.isVisible||(b.style.display="none"),this.g_arC&&document.body.appendChild(b)}g_ZU(){throw new Error("required override")}g_arM(){}g_arE(d){const a=d.elementId,b=this.g_arB.get(a);this.g_arM(b),this.g_arC&&b.parentElement.removeChild(b),this.g_arB.delete(a)}g_arN(d,a,b){b||(b={}),b.elementId=a,this.g_arm(d,b)}g_arO(d,a,b){b||(b={}),b.elementId=a,this.g_arq(d,b)}g_arF(c){if(this.g_arC){const a=this.g_arB.get(c.elementId);a.style.display=c.isVisible?"":"none"}}g_arG(d){if(this.g_arC){const a=this.g_arB.get(d.elementId);a.style.left=d.left+"px",a.style.top=d.top+"px",a.style.width=d.width+"px",a.style.height=d.height+"px";const b=d.fontSize;null!==b&&(a.style.fontSize=b+"em")}}g_arH(c){const a=this.g_arB.get(c.elementId);this.g_arP(a,c)}g_arP(){throw new Error("required override")}g_arI(c){const a=this.g_arB.get(c.elementId);c.focus?a.focus():a.blur()}g_arJ(c){const a=this.g_arB.get(c.elementId);a.style[c.prop]=c.val}g_arQ(b){return this.g_arB.get(b)}},"use strict";{function m(e){return new Promise((a,b)=>{const c=document.createElement("script");c.onload=a,c.onerror=b,c.async=!1,c.src=e,document.head.appendChild(c)})}async function n(c){const a=await o(c),b=new TextDecoder("utf-8");return b.decode(a)}function o(e){return new Promise((f,b)=>{const a=new FileReader;a.onload=b=>f(b.target.result),a.onerror=c=>b(c),a.readAsArrayBuffer(e)})}const a=/(iphone|ipod|ipad)/i.test(navigator.userAgent);let b=new Audio;const c={"audio/webm; codecs=opus":!!b.canPlayType("audio/webm; codecs=opus"),"audio/ogg; codecs=opus":!!b.canPlayType("audio/ogg; codecs=opus"),"audio/webm; codecs=vorbis":!!b.canPlayType("audio/webm; codecs=vorbis"),"audio/ogg; codecs=vorbis":!!b.canPlayType("audio/ogg; codecs=vorbis"),"audio/mp4":!!b.canPlayType("audio/mp4"),"audio/mpeg":!!b.canPlayType("audio/mpeg")};b=null;const d=[];let e=0;window.RealFile=window.File;const f=[],i=new Map,g=new Map;let h=0;window.g_arR=class b{constructor(b){this.g_arS=b.g_arT,this.g_arU=null,this.g_agN="",this.g_arV=b.g_arW,this.g_arX={},this.g_arY=null,this.g_arZ=null,this.g_ar_=[],this.g_ar$=null,this.g_aeN=null,this.g_aiy=null,this.g_afu=-1,this.g_asa=()=>this.g_asb(),this.g_asc=[],this.g_agS=b.g_asd,"cordova"===this.g_agS&&this.g_arS&&(console.warn("[C3 runtime] Worker mode is enabled and supported, but is disabled in Cordova due to crbug.com/939775. Reverting to DOM mode."),this.g_arS=!1),this.g_ase=!1,this.g_asf=null,("html5"===this.g_agS||"playable-ad"===this.g_agS)&&"file"===location.protocol.substr(0,4)&&alert("Exported games won't work until you upload them. (When running on the file: protocol, browsers block many features from working for security reasons.)"),this.g_aru("runtime","cordova-fetch-local-file",b=>this.g_asg(b)),this.g_aru("runtime","create-job-worker",b=>this.g_ash(b)),"cordova"===this.g_agS?document.addEventListener("deviceready",()=>this.g_Ym(b)):this.g_Ym(b)}g_eq(){this.g_asi(),this.g_arU&&(this.g_arU.onmessage=null,this.g_arU=null),this.g_arY&&(this.g_arY.terminate(),this.g_arY=null),this.g_arZ&&(this.g_arZ.g_eq(),this.g_arZ=null),this.g_aeN&&(this.g_aeN.parentElement.removeChild(this.g_aeN),this.g_aeN=null)}g_asj(){return this.g_aeN}g_fi(){return this.g_agN}g_arr(){return this.g_arS}g_An(){return this.g_agS}g_aiQ(){return"cordova"===this.g_agS&&a}g_ask(){if(!this.g_aiQ())return!1;const d=window.devicePixelRatio,a=window.screen.width*d,b=window.screen.height*d;return 1125==a&&2436==b}async g_Ym(d){if("playable-ad"===this.g_agS){this.g_asf=self.c3_base64files,await this.g_asl();for(let a=0,b=d.g_asm.length;a<b;++a){const b=d.g_asm[a].toLowerCase();this.g_asf.hasOwnProperty(b)&&(d.g_asm[a]=URL.createObjectURL(this.g_asf[b]))}}if(d.g_asn)this.g_agN=d.g_asn;else{const c=location.origin;this.g_agN=("null"===c?"file:///":c)+location.pathname;const a=this.g_agN.lastIndexOf("/");-1!==a&&(this.g_agN=this.g_agN.substr(0,a+1))}if(d.g_aso)for(const[a,b]of Object.entries(d.g_aso))this.g_arX[a]=URL.createObjectURL(b);const a=new MessageChannel;this.g_arU=a.port1,this.g_arU.onmessage=b=>this._OnMessageFromRuntime(b.data),window.c3_addPortMessageHandler&&window.c3_addPortMessageHandler(b=>this.g_asp(b)),this.g_aiy=new self.g_asq(this),await this.g_aiy.g_abR(),this.g_asr(),"object"==typeof window.StatusBar&&window.StatusBar.hide(),await this.g_ass(),this.g_arS?await this.g_ast(d,a.port2):await this.g_asu(d,a.port2)}g_asv(b){return this.g_arX.hasOwnProperty(b)?this.g_arX[b]:b.endsWith("/workerMain.js")&&this.g_arX.hasOwnProperty("workerMain.js")?this.g_arX["workerMain.js"]:"playable-ad"===this.g_agS&&this.g_asf.hasOwnProperty(b.toLowerCase())?URL.createObjectURL(this.g_asf[b.toLowerCase()]):b}async g_asw(f,a,g){if(f.startsWith("blob:"))return new Worker(f,g);if(this.g_aiQ()){const a=await this.g_Aj(this.g_arV+f),b=new Blob([a],{type:"application/javascript"});return new Worker(URL.createObjectURL(b),g)}const c=new URL(f,a),b=location.origin!==c.origin;if(b){const d=await fetch(c);if(!d.ok)throw new Error("failed to fetch worker script");const a=await d.blob();return new Worker(URL.createObjectURL(a),g)}return new Worker(c,g)}g_asr(){if(this.g_ask()){const d=window.innerWidth>window.innerHeight,a=document.documentElement.style,b=document.body.style;d?(b.height=a.height="375px",b.width=a.width="812px"):(b.width=a.width="375px",b.height=a.height="812px")}}g_asx(d){return{baseUrl:this.g_agN,windowInnerWidth:window.innerWidth,windowInnerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio,isFullscreen:b.g_afY(),projectData:d.g_asy,previewImageBlobs:window.cr_previewImageBlobs||this.g_asf,previewProjectFileBlobs:window.cr_previewProjectFileBlobs,shaders:self.C3_Shaders,exportType:d.g_asd,isDebug:-1<self.location.search.indexOf("debug"),ife:!!self.g_asz,jobScheduler:this.g_aiy.g_asA(),supportedAudioFormats:c,opusWasmScriptUrl:window.cr_opusWasmScriptUrl||this.g_arV+"opus.wasm.js",opusWasmBinaryUrl:window.cr_opusWasmBinaryUrl||this.g_arV+"opus.wasm.wasm",isWKWebView:this.g_aiQ(),isFBInstantAvailable:"undefined"!=typeof self.FBInstant}}async g_ast(e,a){const b=this.g_asv(e.g_asB);this.g_arY=await this.g_asw(b,this.g_agN,{name:"Runtime"}),this.g_aeN=document.createElement("canvas"),this.g_aeN.style.display="none";const c=this.g_aeN.transferControlToOffscreen();document.body.appendChild(this.g_aeN),window.c3canvas=this.g_aeN,this.g_arY.postMessage(Object.assign(this.g_asx(e),{type:"init-runtime",isInWorker:!0,messagePort:a,canvas:c,workerDependencyScripts:e.g_asC||[],engineScripts:e.g_asm}),[a,c,...this.g_aiy.g_asD()]),this.g_ar_=f.map(b=>new b(this)),this.g_asE(),self.c3_callFunction=(c,a)=>this.g_ar$.g_Pz(c,a)}async g_asu(a,b){this.g_aeN=document.createElement("canvas"),this.g_aeN.style.display="none",document.body.appendChild(this.g_aeN),window.c3canvas=this.g_aeN,this.g_ar_=f.map(b=>new b(this)),this.g_asE();const c=a.g_asm.map(b=>new URL(b,this.g_agN).toString());await Promise.all(c.map(a=>m(a)));const d=Object.assign(this.g_asx(a),{isInWorker:!1,messagePort:b,canvas:this.g_aeN});this.g_arZ=self.C3_CreateRuntime(d),await self.C3_InitRuntime(this.g_arZ,d)}async g_ash(){const b=await this.g_aiy.g_asF();return{outputPort:b,transferables:[b]}}g_ars(){if(this.g_arS)throw new Error("not available in worker mode");return this.g_arZ}g_arn(f,a,b,c,d){this.g_arU.postMessage({type:"event",component:f,handler:a,dispatchRuntimeEvent:c,data:b,responseId:null},this.g_ase?void 0:d)}g_arp(i,a,b,c,d){const e=h++,f=new Promise((c,a)=>{g.set(e,{resolve:c,reject:a})});return this.g_arU.postMessage({type:"event",component:i,handler:a,dispatchRuntimeEvent:c,data:b,responseId:e},this.g_ase?void 0:d),f}["_OnMessageFromRuntime"](c){const a=c.type;if("event"===a)this.g_asG(c);else if("result"===a)this.g_asH(c);else if("runtime-ready"===a)this.g_asI();else throw new Error(`unknown message '${a}'`)}g_asG(j){const k=j.component,b=j.handler,a=j.data,c=j.responseId,d=i.get(k);if(!d)return void console.warn(`[DOM] No event handlers for component '${k}'`);const e=d.get(b);if(!e)return void console.warn(`[DOM] No handler '${b}' for component '${k}'`);let f=null;try{f=e(a)}catch(d){return console.error(`Exception in '${k}' handler '${b}':`,d),void(null!==c&&this.g_asJ(c,!1,d.toString()))}null!==c&&(f&&f.then?f.then(b=>this.g_asJ(c,!0,b)).catch(d=>{console.error(`Rejection from '${k}' handler '${b}':`,d),this.g_asJ(c,!1,d.toString())}):this.g_asJ(c,!0,f))}g_asJ(e,a,b){let c;b&&b.transferables&&(c=b.transferables),this.g_arU.postMessage({type:"result",responseId:e,isOk:a,result:b},c)}g_asH(f){const a=f.responseId,b=f.isOk,c=f.result,d=g.get(a);b?d.resolve(c):d.reject(c),g.delete(a)}g_aru(e,a,b){let c=i.get(e);if(c||(c=new Map,i.set(e,c)),c.has(a))throw new Error(`[DOM] Component '${e}' already has handler '${a}'`);c.set(a,b)}static g_asK(b){if(f.includes(b))throw new Error("DOM handler already added");f.push(b)}g_asE(){for(const b of this.g_ar_)if("runtime"===b.g_arx())return void(this.g_ar$=b);throw new Error("cannot find runtime DOM handler")}g_asp(b){this.g_arn("debugger","message",b)}g_asI(){for(const b of this.g_ar_)b.g_arl()}static g_afY(){return!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement)}async g_asL(){return await this.g_arp("runtime","get-remote-preview-status-info")}g_ary(b){this.g_asc.push(b),this.g_asM()}g_arz(c){const a=this.g_asc.indexOf(c);if(-1===a)throw new Error("invalid callback");this.g_asc.splice(a,1),this.g_asc.length||this.g_asi()}g_asM(){-1===this.g_afu&&this.g_asc.length&&(this.g_afu=requestAnimationFrame(this.g_asa))}g_asi(){-1!==this.g_afu&&(cancelAnimationFrame(this.g_afu),this.g_afu=-1)}g_asb(){this.g_afu=-1;for(const b of this.g_asc)b();this.g_asM()}g_asN(b){this.g_ar$.g_asN(b)}g_asO(b){this.g_ar$.g_asO(b)}g_asP(){this.g_ar$.g_asP()}g_asQ(b){this.g_ar$.g_asQ(b)}g_AF(b){return!!c[b]}async g_aiB(c){const a=await this.g_arp("runtime","opus-decode",{arrayBuffer:c},!1,[c]);return new Float32Array(a)}g_fW(b){return /^(?:[a-z]+:)?\/\//.test(b)||"data:"===b.substr(0,5)||"blob:"===b.substr(0,5)}g_fX(b){return!this.g_fW(b)}async g_asg(c){const a=c.filename;switch(c.as){case"text":return await this.g_Ah(a);case"buffer":return await this.g_Aj(a);default:throw new Error("unsupported type");}}g_asR(c){const d=window.cordova.file.applicationDirectory+"www/"+c;return new Promise((e,a)=>{window.resolveLocalFileSystemURL(d,c=>{c.file(e,a)},a)})}async g_Ah(b){const a=await this.g_asR(b);return await n(a)}g_asS(){if(d.length&&!(8<=e)){e++;const b=d.shift();this.g_asT(b.filename,b.g_asU,b.g_asV)}}g_Aj(f){return new Promise((g,b)=>{d.push({filename:f,g_asU:b=>{e--,this.g_asS(),g(b)},g_asV:c=>{e--,this.g_asS(),b(c)}}),this.g_asS()})}async g_asT(c,a,b){try{const b=await this.g_asR(c),d=await o(b);a(d)}catch(c){b(c)}}async g_asl(){const d=[];for(const[a,b]of Object.entries(this.g_asf))d.push(this.g_asW(a,b));await Promise.all(d)}async g_asW(e,a){if("object"==typeof a)this.g_asf[e]=new Blob([a.str],{type:a.type});else{const b=await fetch(a),c=await b.blob();this.g_asf[e]=c}}g_ass(){let e=null;const f=new Promise(a=>e=a),b=new ArrayBuffer(1),c=new MessageChannel;return c.port2.onmessage=a=>{a.data&&a.data.arrayBuffer||(this.g_ase=!0,console.warn("MessageChannel transfers determined to be broken. Disabling transferables.")),e()},c.port1.postMessage({arrayBuffer:b},[b]),f}}}{function g(b){return b.sourceCapabilities&&b.sourceCapabilities.firesTouchEvents||b.originalEvent&&b.originalEvent.sourceCapabilities&&b.originalEvent.sourceCapabilities.firesTouchEvents}function a(e){return new Promise((a,b)=>{const c=new Image;c.onload=()=>a(c),c.onerror=c=>b(c),c.src=e})}async function h(b){const d=URL.createObjectURL(b);try{return await a(d)}finally{URL.revokeObjectURL(d)}}function b(){try{return window.parent&&window.parent.document.hasFocus()}catch(b){return!1}}self.C3_RasterSvgImage=async function(f,a,b){const c=document.createElement("canvas");c.width=a,c.height=b;const d=c.getContext("2d");return d.drawImage(f,0,0,a,b),c};let c=!1;document.addEventListener("pause",()=>c=!0),document.addEventListener("resume",()=>c=!1);const d=class extends g_arh{constructor(c){super(c,"runtime"),this.g_asX=!0,this.g_asY="any",this.g_asZ=!1,this.g_as_=!1,this.g_as$=null,c.g_aru("canvas","update-size",b=>this.g_ata(b)),c.g_aru("runtime","invoke-download",b=>this.g_atb(b)),c.g_aru("runtime","raster-svg-image",b=>this.g_atc(b)),c.g_aru("runtime","set-target-orientation",b=>this.g_atd(b)),c.g_aru("runtime","register-sw",()=>this.g_ate()),c.g_aru("runtime","post-to-debugger",b=>this.g_atf(b)),c.g_aru("runtime","before-start-ticking",()=>this.g_atg()),c.g_aru("runtime","debug-highlight",b=>this.g_ath(b)),c.g_aru("runtime","enable-device-orientation",()=>this.g_ati()),c.g_aru("runtime","enable-device-motion",()=>this.g_atj());const a=c.g_asj();a.addEventListener("contextmenu",b=>b.preventDefault()),a.addEventListener("selectstart",b=>b.preventDefault()),a.addEventListener("gesturehold",b=>b.preventDefault()),a.addEventListener("touchstart",b=>b.preventDefault()),window.addEventListener("mousedown",b=>{1===b.button&&b.preventDefault()}),window.addEventListener("resize",()=>this.g_afL()),this.g_atk=new Set,this.g_atl=new WeakSet,this.g_atm=!1}g_atg(){return document.addEventListener("visibilitychange",()=>this.g_aiA(document.hidden)),document.addEventListener("pause",()=>this.g_aiA(!0)),document.addEventListener("resume",()=>this.g_aiA(!1)),{isSuspended:!!(document.hidden||c)}}g_arl(){window.addEventListener("focus",()=>this.g_atn("window-focus")),window.addEventListener("blur",()=>this.g_atn("window-blur",{parentHasFocus:b()})),window.addEventListener("fullscreenchange",()=>this.g_afM()),window.addEventListener("webkitfullscreenchange",()=>this.g_afM()),window.addEventListener("mozfullscreenchange",()=>this.g_afM()),window.addEventListener("fullscreenerror",b=>this.g_afN(b)),window.addEventListener("webkitfullscreenerror",b=>this.g_afN(b)),window.addEventListener("mozfullscreenerror",b=>this.g_afN(b)),window.addEventListener("keydown",b=>this.g_ato("keydown",b)),window.addEventListener("keyup",b=>this.g_ato("keyup",b)),window.addEventListener("mousemove",b=>this.g_atp("mousemove",b)),window.addEventListener("mousedown",b=>this.g_atp("mousedown",b)),window.addEventListener("mouseup",b=>this.g_atp("mouseup",b)),window.addEventListener("dblclick",b=>this.g_atp("dblclick",b)),window.addEventListener("wheel",b=>this.g_atq("wheel",b)),"undefined"==typeof PointerEvent?(window.addEventListener("touchstart",b=>this.g_atr("pointerdown",b)),window.addEventListener("touchmove",b=>this.g_atr("pointermove",b)),window.addEventListener("touchend",b=>this.g_atr("pointerup",b)),window.addEventListener("touchcancel",b=>this.g_atr("pointercancel",b))):(window.addEventListener("pointerdown",b=>this.g_ats("pointerdown",b)),window.addEventListener("pointermove",b=>this.g_ats("pointermove",b)),window.addEventListener("pointerup",b=>this.g_ats("pointerup",b)),window.addEventListener("pointercancel",b=>this.g_ats("pointercancel",b)));const c=()=>this.g_asP();window.addEventListener("pointerup",c,!0),window.addEventListener("touchend",c,!0),window.addEventListener("click",c,!0),window.addEventListener("keydown",c,!0),window.addEventListener("gamepadconnected",c,!0)}g_ati(){this.g_asZ||(this.g_asZ=!0,window.addEventListener("deviceorientation",b=>this.g_att(b)))}g_atj(){this.g_as_||(this.g_as_=!0,window.addEventListener("devicemotion",b=>this.g_atu(b)))}g_atn(c,a){this.g_arm(c,a||null,!0)}g_afL(){this.g_arm("window-resize",{innerWidth:window.innerWidth,innerHeight:window.innerHeight,devicePixelRatio:window.devicePixelRatio},!0)}g_atd(b){this.g_asY=b.targetOrientation}g_atv(){const c=this.g_asY;if(screen.orientation&&screen.orientation.lock)screen.orientation.lock(c).catch(b=>console.warn("[Construct 3] Failed to lock orientation: ",b));else try{let a=!1;screen.lockOrientation?a=screen.lockOrientation(c):screen.webkitLockOrientation?a=screen.webkitLockOrientation(c):screen.mozLockOrientation?a=screen.mozLockOrientation(c):screen.msLockOrientation&&(a=screen.msLockOrientation(c)),a||console.warn("[Construct 3] Failed to lock orientation")}catch(b){console.warn("[Construct 3] Failed to lock orientation: ",b)}}g_afM(){const b=g_arR.g_afY();b&&"any"!==this.g_asY&&this.g_atv(),this.g_arm("fullscreenchange",{isFullscreen:b,innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_afN(b){console.warn("[Construct 3] Fullscreen request failed: ",b),this.g_arm("fullscreenerror",{isFullscreen:g_arR.g_afY(),innerWidth:window.innerWidth,innerHeight:window.innerHeight})}g_aiA(b){b?this.g_ari.g_asi():this.g_ari.g_asM(),this.g_arm("visibilitychange",{hidden:b})}g_ato(c,a){this.g_arq(c,{code:a.code,key:a.key,which:a.which,repeat:a.repeat,altKey:a.altKey,ctrlKey:a.ctrlKey,metaKey:a.metaKey,shiftKey:a.shiftKey,timeStamp:a.timeStamp},!0)}g_atp(a,b){g(b)||("mousedown"===a&&window!==window.top&&window.focus(),this.g_arq(a,{button:b.button,clientX:b.clientX,clientY:b.clientY,timeStamp:b.timeStamp},!0))}g_atq(c,a){this.g_arm(c,{clientX:a.clientX,clientY:a.clientY,deltaX:a.deltaX,deltaY:a.deltaY,deltaZ:a.deltaZ,deltaMode:a.deltaMode,timeStamp:a.timeStamp},!0)}g_ats(c,a){"pointerdown"===c&&window!==window.top&&window.focus(),this.g_arq(c,{pointerId:a.pointerId,pointerType:a.pointerType,clientX:a.clientX,clientY:a.clientY,width:a.width||0,height:a.height||0,pressure:a.pressure||0,tangentialPressure:a.tangentialPressure||0,tiltX:a.tiltX||0,tiltY:a.tiltY||0,twist:a.twist||0,timeStamp:a.timeStamp},!0)}g_atr(e,a){"pointerdown"===e&&window!==window.top&&window.focus();for(let b=0,c=a.changedTouches.length;b<c;++b){const c=a.changedTouches[b];this.g_arq(e,{pointerId:c.identifier,pointerType:"touch",clientX:c.clientX,clientY:c.clientY,width:2*(c.radiusX||c.webkitRadiusX||c.mozRadiusX||c.msRadiusX||0),height:2*(c.radiusY||c.webkitRadiusY||c.mozRadiusY||c.msRadiusY||0),pressure:c.force||c.webkitForce||c.mozForce||c.msForce||0,tangentialPressure:0,tiltX:0,tiltY:0,twist:c.rotationAngle||0,timeStamp:a.timeStamp},!0)}}g_att(b){this.g_arm("deviceorientation",{alpha:b.alpha||0,beta:b.beta||0,gamma:b.gamma||0,timeStamp:b.timeStamp},!0)}g_atu(j){let a=0,k=0,l=0,m=0,n=0,o=0;const p=j.accelerationIncludingGravity;p&&(a=p.x||0,k=p.y||0,l=p.z||0);const h=j.acceleration;h&&(m=h.x||0,n=h.y||0,o=h.z||0),this.g_arm("devicemotion",{acceleration:{x:m,y:n,z:o},accelerationWithG:{x:a,y:k,z:l},timeStamp:j.timeStamp},!0)}g_ata(d){const a=this.g_arw(),b=a.g_asj();b.style.width=d.styleWidth+"px",b.style.height=d.styleHeight+"px",b.style.marginLeft=d.marginLeft+"px",b.style.marginTop=d.marginTop+"px",a.g_asr(),this.g_asX&&(b.style.display="",this.g_asX=!1)}g_atb(f){const b=f.url,c=f.filename,d=document.createElement("a"),e=document.body;d.textContent=c,d.href=b,d.download=c,e.appendChild(d),d.click(),e.removeChild(d)}async g_atc(c){const a=c.blob,b=c.width,d=c.height,e=await h(a),f=await self.C3_RasterSvgImage(e,b,d);return await createImageBitmap(f)}g_asP(){const c=[...this.g_atk];if(this.g_atk.clear(),!this.g_atm)for(const d of c){const b=d.play();b&&b.catch(()=>{this.g_atl.has(d)||this.g_atk.add(d)})}}g_asN(c){if("function"!=typeof c.play)throw new Error("missing play function");this.g_atl.delete(c);let a;try{a=c.play()}catch(a){return void this.g_atk.add(c)}a&&a.catch(()=>{this.g_atl.has(c)||this.g_atk.add(c)})}g_asO(b){this.g_atk.delete(b),this.g_atl.add(b)}g_asQ(b){this.g_atm=!!b}g_ath(d){const a=d.show;if(!a)return void(this.g_as$&&(this.g_as$.style.display="none"));this.g_as$||(this.g_as$=document.createElement("div"),this.g_as$.id="inspectOutline",document.body.appendChild(this.g_as$));const b=this.g_as$;b.style.display="",b.style.left=d.left-1+"px",b.style.top=d.top-1+"px",b.style.width=d.width+2+"px",b.style.height=d.height+2+"px",b.textContent=d.name}g_ate(){window.C3_RegisterSW&&window.C3_RegisterSW()}g_atf(b){window.c3_postToMessagePort&&(b.from="runtime",window.c3_postToMessagePort(b))}g_Pz(c,a){return this.g_aro("js-invoke-function",{name:c,params:a})}};g_arR.g_asK(d)}{const c=document.currentScript.src;self.g_asq=class{constructor(a){this.g_atw=a,this.g_agN=c?c.substr(0,c.lastIndexOf("/")+1):a.g_fi(),this.g_akG=Math.min(navigator.hardwareConcurrency||2,16),this.g_atx=null,this.g_aty=[],this.g_akE=null,this.g_atz=null}async g_abR(){if(this.g_atA)throw new Error("already initialised");this.g_atA=!0;const c=this.g_atw.g_asv("dispatchWorker.js");this.g_atx=await this.g_atw.g_asw(c,this.g_agN,{name:"DispatchWorker"});const a=new MessageChannel;this.g_akE=a.port1,this.g_atx.postMessage({type:"_init","in-port":a.port2},[a.port2]),this.g_atz=await this.g_asF()}async g_asF(){const f=this.g_aty.length,a=this.g_atw.g_asv("jobWorker.js"),b=await this.g_atw.g_asw(a,this.g_agN,{name:"JobWorker"+f}),c=new MessageChannel,d=new MessageChannel;return this.g_atx.postMessage({type:"_addJobWorker",port:c.port1},[c.port1]),b.postMessage({type:"init",number:f,"dispatch-port":c.port2,"output-port":d.port2},[c.port2,d.port2]),this.g_aty.push(b),d.port1}g_asA(){return{inputPort:this.g_akE,outputPort:this.g_atz,maxNumWorkers:this.g_akG}}g_asD(){return[this.g_akE,this.g_atz]}}}if("use strict",window.C3_IsSupported){"undefined"!=typeof OffscreenCanvas;window.c3_runtimeInterface=new g_arR({g_arT:!1,g_asB:"workerMain.js",g_asm:["scripts/c3runtime.js"],g_arW:"scripts/",g_asd:"html5"})}{const b=class extends g_arh{constructor(b){super(b,"mouse"),this.g_art("cursor",b=>this.g_atB(b))}g_atB(b){document.body.style.cursor=b}};g_arR.g_asK(b)}{function g(b){b.stopPropagation()}const a=class extends g_arA{constructor(b){super(b,"button")}g_ZU(a,b){const c=document.createElement("input"),d=b.isCheckbox;let e=c;if(d){c.type="checkbox";const b=document.createElement("label");b.appendChild(c),b.appendChild(document.createTextNode("")),b.style.fontFamily="sans-serif",b.style.g_atC="none",b.style.webkitUserSelect="none",b.style.display="inline-block",b.style.color="black",e=b}else c.type="button";return e.style.position="absolute",e.addEventListener("touchstart",g),e.addEventListener("touchmove",g),e.addEventListener("touchend",g),e.addEventListener("mousedown",g),e.addEventListener("mouseup",g),e.addEventListener("keydown",g),e.addEventListener("keyup",g),c.addEventListener("click",()=>this.g_arO("click",a,{isChecked:c.checked})),c.id=b.id,this.g_arP(e,b),e}g_atD(b){return"input"===b.tagName.toLowerCase()?b:b.firstChild}g_arP(d,a){const b=this.g_atD(d);b.checked=a.isChecked,b.disabled=!a.isEnabled,d.title=a.title,d===b?b.value=a.text:d.lastChild.textContent=a.text}};g_arR.g_asK(a)}