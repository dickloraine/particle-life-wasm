(async()=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();let l;function G(i){const t=l.__externref_table_alloc();return l.__wbindgen_export_2.set(t,i),t}function L(i,t){try{return i.apply(this,t)}catch(e){const s=G(e);l.__wbindgen_exn_store(s)}}let v=null;function A(){return(v===null||v.byteLength===0)&&(v=new Uint8Array(l.memory.buffer)),v}function N(i,t){return i=i>>>0,A().subarray(i/1,i/1+t)}function T(i){const t=typeof i;if(t=="number"||t=="boolean"||i==null)return`${i}`;if(t=="string")return`"${i}"`;if(t=="symbol"){const r=i.description;return r==null?"Symbol":`Symbol(${r})`}if(t=="function"){const r=i.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(i)){const r=i.length;let n="[";r>0&&(n+=T(i[0]));for(let o=1;o<r;o++)n+=", "+T(i[o]);return n+="]",n}const e=/\[object ([^\]]+)\]/.exec(toString.call(i));let s;if(e&&e.length>1)s=e[1];else return toString.call(i);if(s=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:s}let x=0;const k=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},X=typeof k.encodeInto=="function"?function(i,t){return k.encodeInto(i,t)}:function(i,t){const e=k.encode(i);return t.set(e),{read:i.length,written:e.length}};function M(i,t,e){if(e===void 0){const c=k.encode(i),h=t(c.length,1)>>>0;return A().subarray(h,h+c.length).set(c),x=c.length,h}let s=i.length,r=t(s,1)>>>0;const n=A();let o=0;for(;o<s;o++){const c=i.charCodeAt(o);if(c>127)break;n[r+o]=c}if(o!==s){o!==0&&(i=i.slice(o)),r=e(r,s,s=o+i.length*3,1)>>>0;const c=A().subarray(r+o,r+s),h=X(i,c);o+=h.written,r=e(r,s,o,1)>>>0}return x=o,r}let m=null;function b(){return(m===null||m.buffer.detached===!0||m.buffer.detached===void 0&&m.buffer!==l.memory.buffer)&&(m=new DataView(l.memory.buffer)),m}const U=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&U.decode();function V(i,t){return i=i>>>0,U.decode(A().subarray(i,i+t))}function R(i){return i==null}function S(i){const t=l.__wbindgen_export_2.get(i);return l.__externref_table_dealloc(i),t}const B=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>l.__wbg_particlelife_free(i>>>0,1));class J{__destroy_into_raw(){const t=this.__wbg_ptr;return this.__wbg_ptr=0,B.unregister(this),t}free(){const t=this.__destroy_into_raw();l.__wbg_particlelife_free(t,0)}constructor(t,e,s,r,n,o,c,h,d,p){const f=l.particlelife_new(t,e,s,r,n,o,c,h,d,p);return this.__wbg_ptr=f>>>0,B.register(this,this.__wbg_ptr,this),this}create_particle_array(){l.particlelife_create_particle_array(this.__wbg_ptr)}particles_pointer(){return l.particlelife_particles_pointer(this.__wbg_ptr)>>>0}particle_array_length(){return l.particlelife_particle_array_length(this.__wbg_ptr)>>>0}random_particles(){l.particlelife_random_particles(this.__wbg_ptr)}update(){l.particlelife_update(this.__wbg_ptr)}make_random_rules(){l.particlelife_make_random_rules(this.__wbg_ptr)}make_rules_symmetric(){l.particlelife_make_rules_symmetric(this.__wbg_ptr)}get_rules(){const t=l.particlelife_get_rules(this.__wbg_ptr);if(t[2])throw S(t[1]);return S(t[0])}set_rules(t){l.particlelife_set_rules(this.__wbg_ptr,t)}get_radii(){const t=l.particlelife_get_radii(this.__wbg_ptr);if(t[2])throw S(t[1]);return S(t[0])}set_radii(t){l.particlelife_set_radii(this.__wbg_ptr,t)}get_seed(){let t,e;try{const s=l.particlelife_get_seed(this.__wbg_ptr);return t=s[0],e=s[1],V(s[0],s[1])}finally{l.__wbindgen_free(t,e,1)}}set_seed(t){const e=M(t,l.__wbindgen_malloc,l.__wbindgen_realloc),s=x;l.particlelife_set_seed(this.__wbg_ptr,e,s)}new_seed(){l.particlelife_new_seed(this.__wbg_ptr)}pulse(t,e,s){l.particlelife_pulse(this.__wbg_ptr,t,e,s)}get_time_delta(){return l.particlelife_get_time_delta(this.__wbg_ptr)}set_time_delta(t){l.particlelife_set_time_delta(this.__wbg_ptr,t)}get_wall_repel_distance(){return l.particlelife_get_wall_repel_distance(this.__wbg_ptr)}set_wall_repel_distance(t){l.particlelife_set_wall_repel_distance(this.__wbg_ptr,t)}get_wall_repel_strength(){return l.particlelife_get_wall_repel_strength(this.__wbg_ptr)}set_wall_repel_strength(t){l.particlelife_set_wall_repel_strength(this.__wbg_ptr,t)}get_auto_scale_time(){return l.particlelife_get_auto_scale_time(this.__wbg_ptr)!==0}set_auto_scale_time(t){l.particlelife_set_auto_scale_time(this.__wbg_ptr,t)}get_target_velocity(){return l.particlelife_get_target_velocity(this.__wbg_ptr)}set_target_velocity(t){l.particlelife_set_target_velocity(this.__wbg_ptr,t)}get_viscosity(){return l.particlelife_get_viscosity(this.__wbg_ptr)}set_viscosity(t){l.particlelife_set_viscosity(this.__wbg_ptr,t)}set_dimensions(t,e){l.particlelife_set_dimensions(this.__wbg_ptr,t,e)}get_number_of_colors(){return l.particlelife_get_number_of_colors(this.__wbg_ptr)>>>0}set_number_of_colors(t){l.particlelife_set_number_of_colors(this.__wbg_ptr,t)}get_number_of_particles_per_color(){return l.particlelife_get_number_of_particles_per_color(this.__wbg_ptr)>>>0}set_number_of_particles_per_color(t){l.particlelife_set_number_of_particles_per_color(this.__wbg_ptr,t)}get_explore(){return l.particlelife_get_explore(this.__wbg_ptr)!==0}set_explore(t){l.particlelife_set_explore(this.__wbg_ptr,t)}}async function K(i,t){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,t)}catch(s){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const e=await i.arrayBuffer();return await WebAssembly.instantiate(e,t)}else{const e=await WebAssembly.instantiate(i,t);return e instanceof WebAssembly.Instance?{instance:e,module:i}:e}}function q(){const i={};return i.wbg={},i.wbg.__wbg_buffer_609cc3eee51ed158=function(t){return t.buffer},i.wbg.__wbg_call_672a4d21634d4a24=function(){return L(function(t,e){return t.call(e)},arguments)},i.wbg.__wbg_done_769e5ede4b31c67b=function(t){return t.done},i.wbg.__wbg_getRandomValues_78e016fdd1d721cf=function(){return L(function(t,e){globalThis.crypto.getRandomValues(N(t,e))},arguments)},i.wbg.__wbg_get_67b2ba62fc30de12=function(){return L(function(t,e){return Reflect.get(t,e)},arguments)},i.wbg.__wbg_get_b9b93047fe3cf45b=function(t,e){return t[e>>>0]},i.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc=function(t){let e;try{e=t instanceof ArrayBuffer}catch{e=!1}return e},i.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9=function(t){let e;try{e=t instanceof Uint8Array}catch{e=!1}return e},i.wbg.__wbg_isArray_a1eab7e0d067391b=function(t){return Array.isArray(t)},i.wbg.__wbg_iterator_9a24c88df860dc65=function(){return Symbol.iterator},i.wbg.__wbg_length_a446193dc22c12f8=function(t){return t.length},i.wbg.__wbg_length_e2d2a49132c1b256=function(t){return t.length},i.wbg.__wbg_new_78feb108b6472713=function(){return new Array},i.wbg.__wbg_new_a12002a7f91c75be=function(t){return new Uint8Array(t)},i.wbg.__wbg_next_25feadfc0913fea9=function(t){return t.next},i.wbg.__wbg_next_6574e1a8a62d1055=function(){return L(function(t){return t.next()},arguments)},i.wbg.__wbg_set_37837023f3d740e8=function(t,e,s){t[e>>>0]=s},i.wbg.__wbg_set_65595bdd868b3009=function(t,e,s){t.set(e,s>>>0)},i.wbg.__wbg_value_cd1ffa7b1ab794f1=function(t){return t.value},i.wbg.__wbindgen_boolean_get=function(t){const e=t;return typeof e=="boolean"?e?1:0:2},i.wbg.__wbindgen_debug_string=function(t,e){const s=T(e),r=M(s,l.__wbindgen_malloc,l.__wbindgen_realloc),n=x;b().setInt32(t+4*1,n,!0),b().setInt32(t+4*0,r,!0)},i.wbg.__wbindgen_error_new=function(t,e){return new Error(V(t,e))},i.wbg.__wbindgen_init_externref_table=function(){const t=l.__wbindgen_export_2,e=t.grow(4);t.set(0,void 0),t.set(e+0,void 0),t.set(e+1,null),t.set(e+2,!0),t.set(e+3,!1)},i.wbg.__wbindgen_is_function=function(t){return typeof t=="function"},i.wbg.__wbindgen_is_object=function(t){const e=t;return typeof e=="object"&&e!==null},i.wbg.__wbindgen_jsval_loose_eq=function(t,e){return t==e},i.wbg.__wbindgen_memory=function(){return l.memory},i.wbg.__wbindgen_number_get=function(t,e){const s=e,r=typeof s=="number"?s:void 0;b().setFloat64(t+8*1,R(r)?0:r,!0),b().setInt32(t+4*0,!R(r),!0)},i.wbg.__wbindgen_number_new=function(t){return t},i.wbg.__wbindgen_string_get=function(t,e){const s=e,r=typeof s=="string"?s:void 0;var n=R(r)?0:M(r,l.__wbindgen_malloc,l.__wbindgen_realloc),o=x;b().setInt32(t+4*1,o,!0),b().setInt32(t+4*0,n,!0)},i.wbg.__wbindgen_throw=function(t,e){throw new Error(V(t,e))},i}function Z(i,t){return l=i.exports,j.__wbindgen_wasm_module=t,m=null,v=null,l.__wbindgen_start(),l}async function j(i){if(l!==void 0)return l;typeof i<"u"&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof i>"u"&&(i=new URL("/particle-life-wasm/assets/particle_life_wasm_bg-DhnJD6Ut.wasm",import.meta.url));const t=q();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:e,module:s}=await K(await i,t);return Z(e,s)}class Q{canvas;ctx;constructor(t){const e=document.querySelector(t),s=e?.getContext("2d");if(!e||!s)throw new Error("Canvas element does not exist!");this.canvas=e,this.ctx=s,this.updateDimensions()}updateDimensions(){this.canvas.width=window.innerWidth-60,this.canvas.height=window.innerHeight-60;const t=this.canvas.getContext("2d");t&&(this.ctx=t)}get width(){return this.canvas.width}get height(){return this.canvas.height}drawSquare(t,e,s,r){this.ctx.fillStyle=s,this.ctx.fillRect(t-r,e-r,2*r,2*r)}drawRectangle(t,e,s,r,n){this.ctx.fillStyle=n,this.ctx.fillRect(t,e,s,r)}drawCircle(t,e,s,r,n=!0){this.ctx.beginPath(),this.ctx.arc(t,e,r,0*Math.PI,2*Math.PI),this.ctx.closePath(),this.ctx.strokeStyle=this.ctx.fillStyle=s,n?this.ctx.fill():this.ctx.stroke()}drawLineBetweenPoints(t,e,s,r,n){this.ctx.beginPath(),this.ctx.moveTo(t,e),this.ctx.lineTo(s,r),this.ctx.closePath(),this.ctx.strokeStyle=n,this.ctx.stroke()}drawCross(t,e,s,r,n){this.ctx.beginPath(),this.ctx.moveTo(t-s,e),this.ctx.lineTo(t+s,e),this.ctx.moveTo(t,e-r),this.ctx.lineTo(t,e+r),this.ctx.closePath(),this.ctx.strokeStyle=n,this.ctx.stroke()}}class g{constructor(t,e,s,r,n="div"){this.parent=t,this.object=e,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),g.nextNameID=g.nextNameID||0,this.$name.id=`lil-gui-name-${++g.nextNameID}`,this.$widget=document.createElement(n),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class tt extends g{constructor(t,e,s){super(t,e,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function I(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const et={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:I,toHexString:I},E={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},it={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const s=E.fromHexString(i);t[0]=(s>>16&255)/255*e,t[1]=(s>>8&255)/255*e,t[2]=(s&255)/255*e},toHexString([i,t,e],s=1){s=255/s;const r=i*s<<16^t*s<<8^e*s<<0;return E.toHexString(r)}},st={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const s=E.fromHexString(i);t.r=(s>>16&255)/255*e,t.g=(s>>8&255)/255*e,t.b=(s&255)/255*e},toHexString({r:i,g:t,b:e},s=1){s=255/s;const r=i*s<<16^t*s<<8^e*s<<0;return E.toHexString(r)}},rt=[et,E,it,st];function nt(i){return rt.find(t=>t.match(i))}class lt extends g{constructor(t,e,s,r){super(t,e,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=nt(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=I(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class F extends g{constructor(t,e,s){super(t,e,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class at extends g{constructor(t,e,s,r,n,o){super(t,e,s,"number"),this._initInput(),this.min(r),this.max(n);const c=o!==void 0;this.step(c?o:this._getImplicitStep(),c),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let a=parseFloat(this.$input.value);isNaN(a)||(this._stepExplicit&&(a=this._snap(a)),this.setValue(this._clamp(a)))},e=a=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+a),this.$input.value=this.getValue())},s=a=>{a.code==="Enter"&&this.$input.blur(),a.code==="ArrowUp"&&(a.preventDefault(),e(this._step*this._arrowKeyMultiplier(a))),a.code==="ArrowDown"&&(a.preventDefault(),e(this._step*this._arrowKeyMultiplier(a)*-1))},r=a=>{this._inputFocused&&(a.preventDefault(),e(this._step*this._normalizeMouseWheel(a)))};let n=!1,o,c,h,d,p;const f=5,w=a=>{o=a.clientX,c=h=a.clientY,n=!0,d=this.getValue(),p=0,window.addEventListener("mousemove",$),window.addEventListener("mouseup",y)},$=a=>{if(n){const u=a.clientX-o,_=a.clientY-c;Math.abs(_)>f?(a.preventDefault(),this.$input.blur(),n=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>f&&y()}if(!n){const u=a.clientY-h;p-=u*this._step*this._arrowKeyMultiplier(a),d+p>this._max?p=this._max-d:d+p<this._min&&(p=this._min-d),this._snapClampSetValue(d+p)}h=a.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",$),window.removeEventListener("mouseup",y)},C=()=>{this._inputFocused=!0},D=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",w),this.$input.addEventListener("focus",C),this.$input.addEventListener("blur",D)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(a,u,_,P,W)=>(a-u)/(_-u)*(W-P)+P,e=a=>{const u=this.$slider.getBoundingClientRect();let _=t(a,u.left,u.right,this._min,this._max);this._snapClampSetValue(_)},s=a=>{this._setDraggingStyle(!0),e(a.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",n)},r=a=>{e(a.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",n)};let o=!1,c,h;const d=a=>{a.preventDefault(),this._setDraggingStyle(!0),e(a.touches[0].clientX),o=!1},p=a=>{a.touches.length>1||(this._hasScrollBar?(c=a.touches[0].clientX,h=a.touches[0].clientY,o=!0):d(a),window.addEventListener("touchmove",f,{passive:!1}),window.addEventListener("touchend",w))},f=a=>{if(o){const u=a.touches[0].clientX-c,_=a.touches[0].clientY-h;Math.abs(u)>Math.abs(_)?d(a):(window.removeEventListener("touchmove",f),window.removeEventListener("touchend",w))}else a.preventDefault(),e(a.touches[0].clientX)},w=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",f),window.removeEventListener("touchend",w)},$=this._callOnFinishChange.bind(this),y=400;let C;const D=a=>{if(Math.abs(a.deltaX)<Math.abs(a.deltaY)&&this._hasScrollBar)return;a.preventDefault();const _=this._normalizeMouseWheel(a)*this._step;this._snapClampSetValue(this.getValue()+_),this.$input.value=this.getValue(),clearTimeout(C),C=setTimeout($,y)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",p,{passive:!1}),this.$slider.addEventListener("wheel",D,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:s}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,s=-t.wheelDelta/120,s*=this._stepExplicit?1:10),e+-s}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class ot extends g{constructor(t,e,s,r){super(t,e,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(n=>{const o=document.createElement("option");o.innerHTML=n,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class ct extends g{constructor(t,e,s){super(t,e,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const ht=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function dt(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let H=!1;class O{constructor({parent:t,autoPlace:e=t===void 0,container:s,width:r,title:n="Controls",injectStyles:o=!0,touchStyles:c=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),c&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!H&&o&&(dt(ht),H=!0),s?s.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,e,s,r,n){if(Object(s)===s)return new ot(this,t,e,s);const o=t[e];switch(typeof o){case"number":return new at(this,t,e,s,r,n);case"boolean":return new tt(this,t,e);case"string":return new ct(this,t,e);case"function":return new F(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,s=1){return new lt(this,t,e,s)}addFolder(t){return new O({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(s=>{s instanceof F||s._name in t.controllers&&s.load(t.controllers[s._name])}),e&&t.folders&&this.folders.forEach(s=>{s._title in t.folders&&s.load(t.folders[s._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof F)){if(s._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);e.controllers[s._name]=s.save()}}),t&&this.folders.forEach(s=>{if(s._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);e.folders[s._title]=s.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const s=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const z=i=>{const t=new O,e=i.settings,s=t.addFolder("Config");s.add(i,"reset").name("Reset"),s.add(i,"randomRules").name("Random Rules"),s.add(i,"symmetricRules").name("Make Rules Symmetric"),s.add(i.particles,"numColors",1,7,1).name("Number of Colors").onFinishChange(()=>{i.randomRules()}),s.add(i.particles,"seed").name("Seed").listen().onFinishChange(()=>{i.randomRules(!0)}),s.add(e,"fps").name("FPS - (Live)").listen().disable(),s.add(i.particles,"number_of_particles_per_color",0,4e3,50).name("Atoms per-color").onFinishChange(()=>{i.particles.createParticles()}),s.add(i.particles,"timeDelta",1e-4,e.maxDeltaTime,1e-4).name("Time Delta").listen().decimals(4),s.add(i.particles,"autoScaleTime").name("Auto Scale Time"),s.add(i.particles,"targetVelocity",1,10,1).name("Target Velocity"),s.add(i.particles,"viscosity",.1,2,.1).name("Viscosity"),s.add(e,"pulseDuration",1,100,1).name("Click Pulse Duration").listen(),s.add(i.particles,"wallRepelDistance",0,100,1).name("Wall Repel Distance"),s.add(i.particles,"wallRepelStrength",0,20,1).name("Wall Repel Strength"),s.add(i.particles,"explore").name("Random Exploration");const r=t.addFolder("Drawings");r.add(i.particles,"drawRadius",1,10,.5).name("Radius"),r.add(e.drawings,"circle").name("Circle Shape"),r.addColor(e.drawings,"background_color").name("Background Color");const n=t.addFolder("Export");if(n.add(i,"exportImage").name("Image"),n.add(i,"exportVideo").name("Video: Start / stop"),i.particles.rules.length>0)for(let o=0;o<i.particles.numColors;o++){const c=e.predefinedColors[o],h=t.addFolder(`Rules: <font color='${c}'>${c}</font>`);for(let d=0;d<i.particles.numColors;d++){const p=e.predefinedColors[d];h.add(i.particles.rules[o],`${d}`,-1,1,.001).name(`<-> <font color='${p}'>${ut(p)}</font>`).listen().onFinishChange(()=>{i.particles.particleLife.set_rules(i.particles.rules)})}h.add(i.particles.radii,`${o}`,1,e.particles.maxRadius,5).name("Radius").listen().onFinishChange(()=>{i.particles.particleLife.set_radii(i.particles.radii)})}return t};function ut(i){return i.charAt(0).toUpperCase()+i.slice(1)}class pt{settings;canvas;memory;particleArrayLength;particleLife;drawRadius;numberOfParticles;rules;radii;exploreTimer;constructor(t,e,s){this.settings=t,this.canvas=e,this.memory=s,this.particleLife=new J(this.settings.particles.numColors,this.settings.particles.number_of_particles_per_color,this.settings.particles.timeDelta,this.settings.particles.viscosity,this.settings.particles.autoScaleTime,this.settings.particles.targetVelocity,this.settings.particles.maxRadius,this.settings.particles.wallRepelDistance,this.settings.particles.wallRepelStrength,this.settings.explore),this.numberOfParticles=this.numColors*this.number_of_particles_per_color,this.particleArrayLength=this.particleLife.particle_array_length(),this.drawRadius=this.settings.particles.drawRadius,this.rules=this.particleLife.get_rules(),this.radii=this.particleLife.get_radii(),this.exploreTimer=0}createParticles(){this.particleLife.set_dimensions(this.canvas.width,this.canvas.height),this.particleLife.random_particles(),this.particleArrayLength=this.particleLife.particle_array_length()}makeRandomRules(){this.particleLife.make_random_rules(),this.rules=this.particleLife.get_rules(),this.radii=this.particleLife.get_radii()}makeRulesSymmetric(){this.particleLife.make_rules_symmetric(),this.updateRules()}update(){this.particleLife.update()}draw(){this.particleLife.set_dimensions(this.canvas.width,this.canvas.height);const t=this.particleLife.particles_pointer(),e=new Float32Array(this.memory.buffer,t,this.particleArrayLength);for(let s=0;s<this.particleArrayLength;s+=3){const r=e[s],n=e[s+1],o=this.settings.predefinedColors[Math.floor(e[s+2])];this.settings.drawings.circle?this.canvas.drawCircle(r,n,o,this.drawRadius):this.canvas.drawSquare(r,n,o,this.drawRadius)}}pulse(t,e,s){this.particleLife.pulse(t,e,s)}updateRules(){const t=this.particleLife.get_rules();for(let e=0;e<this.rules.length;e+=1)for(let s=0;s<this.rules.length;s+=1)this.rules[e][s]=t[e][s]}updateRadii(){this.radii.length=0;for(const t of this.particleLife.get_radii())this.radii.push(t)}get numColors(){return this.particleLife.get_number_of_colors()}set numColors(t){this.particleLife.set_number_of_colors(t),this.numberOfParticles=this.numColors*this.number_of_particles_per_color}get number_of_particles_per_color(){return this.particleLife.get_number_of_particles_per_color()}set number_of_particles_per_color(t){this.particleLife.set_number_of_particles_per_color(t),this.numberOfParticles=this.numColors*this.number_of_particles_per_color}get seed(){return this.particleLife.get_seed()}set seed(t){this.particleLife.set_seed(t)}newSeed(){return this.particleLife.new_seed()}get timeDelta(){return this.particleLife.get_time_delta()}set timeDelta(t){this.particleLife.set_time_delta(t)}get autoScaleTime(){return this.particleLife.get_auto_scale_time()}set autoScaleTime(t){this.particleLife.set_auto_scale_time(t)}get targetVelocity(){return this.particleLife.get_target_velocity()}set targetVelocity(t){this.particleLife.set_target_velocity(t)}get viscosity(){return this.particleLife.get_viscosity()}set viscosity(t){this.particleLife.set_viscosity(t)}get wallRepelDistance(){return this.particleLife.get_wall_repel_distance()}set wallRepelDistance(t){this.particleLife.set_wall_repel_distance(t)}get wallRepelStrength(){return this.particleLife.get_wall_repel_strength()}set wallRepelStrength(t){this.particleLife.set_wall_repel_strength(t)}get explore(){return this.particleLife.get_explore()}set explore(t){t&&(this.exploreTimer=0),this.particleLife.set_explore(t)}}const gt=()=>({seed:1,fps:0,drawings:{lines:!1,circle:!1,background_color:"#000000"},explore:!1,pulseDuration:10,maxDeltaTime:.05,predefinedColors:["green","red","orange","cyan","magenta","lavender","teal"],particles:{numColors:4,number_of_particles_per_color:1e3,timeDelta:.01,viscosity:.7,autoScaleTime:!1,targetVelocity:2,maxRadius:200,wallRepelDistance:40,wallRepelStrength:3,drawRadius:1}});function Y(i,t){const e=document.createElement("a");e.download=t,e.target="_blank",e.href=i,e.click(),e.remove()}function _t(i,t){const e=i.captureStream(),s=new MediaRecorder(e),r=[];return s.ondataavailable=function(n){r.push(n.data)},s.onstop=function(n){const o=new Blob(r,{type:"video/mp4"}),c=URL.createObjectURL(o);Y(c,t),r.length=0},s}class ft{settings;canvas;memory;particles;gui;lastT;exploration_timer;mediaRecorder;running;constructor(t,e){this.settings=gt(),this.canvas=new Q(t),this.memory=e,this.particles=new pt(this.settings,this.canvas,this.memory),this.running=!1,this.gui=z(this),this.lastT=performance.now(),this.exploration_timer=0}run(){this.getSeedFromUrl(),this.setupClicks(),this.setupKeys(),this.randomRules(!0),console.log("settings",this.settings),console.log("seed",this.particles.seed),this.lastT=performance.now(),this.update()}update(){this.canvas.updateDimensions(),this.canvas.drawRectangle(0,0,this.canvas.width,this.canvas.height,this.settings.drawings.background_color),this.particles.update(),this.particles.draw(),this.updateFPS(),this.updateRulesDisplay(),requestAnimationFrame(()=>this.update())}updateFPS(){let t=performance.now();t>this.lastT&&(this.settings.fps=Math.floor(1e3/(t-this.lastT)),this.lastT=t)}reset(){this.particles.createParticles()}randomRules(t=!1){t||this.particles.newSeed(),this.particles.makeRandomRules(),this.particles.createParticles(),this.setSeedToUrl(),this.updateGUIDisplay()}symmetricRules(){this.particles.makeRulesSymmetric(),this.particles.createParticles(),this.updateGUIDisplay()}updateGUIDisplay(){this.gui.destroy(),this.gui=z(this)}updateRulesDisplay(){if(this.particles.explore){if(this.particles.exploreTimer>0){this.particles.exploreTimer-=1;return}this.particles.updateRules(),this.particles.updateRadii(),this.particles.exploreTimer=100}}setupClicks(){this.canvas.canvas.addEventListener("click",t=>{const e=t.shiftKey?-this.settings.pulseDuration:this.settings.pulseDuration;this.particles.pulse(t.clientX,t.clientY,e)})}setupKeys(){this.canvas.canvas.addEventListener("keydown",t=>{const e=this.gui._closed;switch(t.key){case"r":this.randomRules(),e&&this.gui.close();break;case"o":this.reset();break;case"s":this.symmetricRules(),e&&this.gui.close();break;default:console.log(t.key)}})}getSeedFromUrl(){let t=window.location.hash;if(t!=null&&t[0]=="#"){let e=t.substring(1);isFinite(Number(e))&&(this.particles.seed=e)}}setSeedToUrl(){const t=this.particles.seed;window.location.hash="#"+t,document.title="Life #"+t}exportImage(){const t=this.canvas.canvas.toDataURL("png",1);Y(t,`particle_life_${this.settings.seed}`)}exportVideo(){this.mediaRecorder||(this.mediaRecorder=_t(this.canvas.canvas,`particle_life_${this.settings.seed}`)),this.mediaRecorder.state=="recording"?this.mediaRecorder.stop():this.mediaRecorder.start()}}const mt=await j(),bt=mt.memory,wt=new ft("#canvas",bt);wt.run()})();