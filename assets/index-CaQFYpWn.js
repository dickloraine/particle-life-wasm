(async()=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();let o;function J(i){const e=o.__externref_table_alloc();return o.__wbindgen_export_2.set(e,i),e}function S(i,e){try{return i.apply(this,e)}catch(t){const s=J(t);o.__wbindgen_exn_store(s)}}let A=null;function x(){return(A===null||A.byteLength===0)&&(A=new Uint8Array(o.memory.buffer)),A}function K(i,e){return i=i>>>0,x().subarray(i/1,i/1+e)}function T(i){const e=typeof i;if(e=="number"||e=="boolean"||i==null)return`${i}`;if(e=="string")return`"${i}"`;if(e=="symbol"){const r=i.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){const r=i.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(i)){const r=i.length;let n="[";r>0&&(n+=T(i[0]));for(let l=1;l<r;l++)n+=", "+T(i[l]);return n+="]",n}const t=/\[object ([^\]]+)\]/.exec(toString.call(i));let s;if(t&&t.length>1)s=t[1];else return toString.call(i);if(s=="Object")try{return"Object("+JSON.stringify(i)+")"}catch{return"Object"}return i instanceof Error?`${i.name}: ${i.message}
${i.stack}`:s}let C=0;const D=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},Z=typeof D.encodeInto=="function"?function(i,e){return D.encodeInto(i,e)}:function(i,e){const t=D.encode(i);return e.set(t),{read:i.length,written:t.length}};function V(i,e,t){if(t===void 0){const c=D.encode(i),d=e(c.length,1)>>>0;return x().subarray(d,d+c.length).set(c),C=c.length,d}let s=i.length,r=e(s,1)>>>0;const n=x();let l=0;for(;l<s;l++){const c=i.charCodeAt(l);if(c>127)break;n[r+l]=c}if(l!==s){l!==0&&(i=i.slice(l)),r=t(r,s,s=l+i.length*3,1)>>>0;const c=x().subarray(r+l,r+s),d=Z(i,c);l+=d.written,r=t(r,s,l,1)>>>0}return C=l,r}let b=null;function y(){return(b===null||b.buffer.detached===!0||b.buffer.detached===void 0&&b.buffer!==o.memory.buffer)&&(b=new DataView(o.memory.buffer)),b}const N=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&N.decode();function I(i,e){return i=i>>>0,N.decode(x().subarray(i,i+e))}function k(i){return i==null}function R(i){const e=o.__wbindgen_export_2.get(i);return o.__externref_table_dealloc(i),e}const P=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(i=>o.__wbg_particlelife_free(i>>>0,1));class q{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,P.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_particlelife_free(e,0)}constructor(e,t,s,r,n,l,c,d,g,u,p,f){const w=o.particlelife_new(e,t,s,r,n,l,c,d,g,u,p,f);return this.__wbg_ptr=w>>>0,P.register(this,this.__wbg_ptr,this),this}create_particle_array(){o.particlelife_create_particle_array(this.__wbg_ptr)}particles_pointer(){return o.particlelife_particles_pointer(this.__wbg_ptr)>>>0}particle_array_length(){return o.particlelife_particle_array_length(this.__wbg_ptr)>>>0}random_particles(){o.particlelife_random_particles(this.__wbg_ptr)}update(){o.particlelife_update(this.__wbg_ptr)}make_random_rules(){o.particlelife_make_random_rules(this.__wbg_ptr)}make_rules_symmetric(){o.particlelife_make_rules_symmetric(this.__wbg_ptr)}get_rules(){const e=o.particlelife_get_rules(this.__wbg_ptr);if(e[2])throw R(e[1]);return R(e[0])}set_rules(e){o.particlelife_set_rules(this.__wbg_ptr,e)}get_radii(){const e=o.particlelife_get_radii(this.__wbg_ptr);if(e[2])throw R(e[1]);return R(e[0])}set_radii(e){o.particlelife_set_radii(this.__wbg_ptr,e)}get_seed(){let e,t;try{const s=o.particlelife_get_seed(this.__wbg_ptr);return e=s[0],t=s[1],I(s[0],s[1])}finally{o.__wbindgen_free(e,t,1)}}set_seed(e){const t=V(e,o.__wbindgen_malloc,o.__wbindgen_realloc),s=C;o.particlelife_set_seed(this.__wbg_ptr,t,s)}new_seed(){o.particlelife_new_seed(this.__wbg_ptr)}pulse(e,t,s){o.particlelife_pulse(this.__wbg_ptr,e,t,s)}get_force_radius(){return o.particlelife_get_force_radius(this.__wbg_ptr)}set_force_radius(e){o.particlelife_set_force_radius(this.__wbg_ptr,e)}get_time_delta(){return o.particlelife_get_time_delta(this.__wbg_ptr)}set_time_delta(e){o.particlelife_set_time_delta(this.__wbg_ptr,e)}get_wall_repel_distance(){return o.particlelife_get_wall_repel_distance(this.__wbg_ptr)}set_wall_repel_distance(e){o.particlelife_set_wall_repel_distance(this.__wbg_ptr,e)}get_wall_repel_strength(){return o.particlelife_get_wall_repel_strength(this.__wbg_ptr)}set_wall_repel_strength(e){o.particlelife_set_wall_repel_strength(this.__wbg_ptr,e)}get_auto_scale_time(){return o.particlelife_get_auto_scale_time(this.__wbg_ptr)!==0}set_auto_scale_time(e){o.particlelife_set_auto_scale_time(this.__wbg_ptr,e)}get_target_velocity(){return o.particlelife_get_target_velocity(this.__wbg_ptr)}set_target_velocity(e){o.particlelife_set_target_velocity(this.__wbg_ptr,e)}get_viscosity(){return o.particlelife_get_viscosity(this.__wbg_ptr)}set_viscosity(e){o.particlelife_set_viscosity(this.__wbg_ptr,e)}set_dimensions(e,t){o.particlelife_set_dimensions(this.__wbg_ptr,e,t)}get_number_of_colors(){return o.particlelife_get_number_of_colors(this.__wbg_ptr)>>>0}set_number_of_colors(e){o.particlelife_set_number_of_colors(this.__wbg_ptr,e)}get_number_of_particles_per_color(){return o.particlelife_get_number_of_particles_per_color(this.__wbg_ptr)>>>0}set_number_of_particles_per_color(e){o.particlelife_set_number_of_particles_per_color(this.__wbg_ptr,e)}get_explore(){return o.particlelife_get_explore(this.__wbg_ptr)!==0}set_explore(e){o.particlelife_set_explore(this.__wbg_ptr,e)}get_include_radius(){return o.particlelife_get_include_radius(this.__wbg_ptr)!==0}set_include_radius(e){o.particlelife_set_include_radius(this.__wbg_ptr,e)}}async function Q(i,e){if(typeof Response=="function"&&i instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(i,e)}catch(s){if(i.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const t=await i.arrayBuffer();return await WebAssembly.instantiate(t,e)}else{const t=await WebAssembly.instantiate(i,e);return t instanceof WebAssembly.Instance?{instance:t,module:i}:t}}function ee(){const i={};return i.wbg={},i.wbg.__wbg_buffer_609cc3eee51ed158=function(e){return e.buffer},i.wbg.__wbg_call_672a4d21634d4a24=function(){return S(function(e,t){return e.call(t)},arguments)},i.wbg.__wbg_done_769e5ede4b31c67b=function(e){return e.done},i.wbg.__wbg_getRandomValues_78e016fdd1d721cf=function(){return S(function(e,t){globalThis.crypto.getRandomValues(K(e,t))},arguments)},i.wbg.__wbg_get_67b2ba62fc30de12=function(){return S(function(e,t){return Reflect.get(e,t)},arguments)},i.wbg.__wbg_get_b9b93047fe3cf45b=function(e,t){return e[t>>>0]},i.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc=function(e){let t;try{t=e instanceof ArrayBuffer}catch{t=!1}return t},i.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9=function(e){let t;try{t=e instanceof Uint8Array}catch{t=!1}return t},i.wbg.__wbg_isArray_a1eab7e0d067391b=function(e){return Array.isArray(e)},i.wbg.__wbg_iterator_9a24c88df860dc65=function(){return Symbol.iterator},i.wbg.__wbg_length_a446193dc22c12f8=function(e){return e.length},i.wbg.__wbg_length_e2d2a49132c1b256=function(e){return e.length},i.wbg.__wbg_new_78feb108b6472713=function(){return new Array},i.wbg.__wbg_new_a12002a7f91c75be=function(e){return new Uint8Array(e)},i.wbg.__wbg_next_25feadfc0913fea9=function(e){return e.next},i.wbg.__wbg_next_6574e1a8a62d1055=function(){return S(function(e){return e.next()},arguments)},i.wbg.__wbg_set_37837023f3d740e8=function(e,t,s){e[t>>>0]=s},i.wbg.__wbg_set_65595bdd868b3009=function(e,t,s){e.set(t,s>>>0)},i.wbg.__wbg_value_cd1ffa7b1ab794f1=function(e){return e.value},i.wbg.__wbindgen_boolean_get=function(e){const t=e;return typeof t=="boolean"?t?1:0:2},i.wbg.__wbindgen_debug_string=function(e,t){const s=T(t),r=V(s,o.__wbindgen_malloc,o.__wbindgen_realloc),n=C;y().setInt32(e+4*1,n,!0),y().setInt32(e+4*0,r,!0)},i.wbg.__wbindgen_error_new=function(e,t){return new Error(I(e,t))},i.wbg.__wbindgen_init_externref_table=function(){const e=o.__wbindgen_export_2,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)},i.wbg.__wbindgen_is_function=function(e){return typeof e=="function"},i.wbg.__wbindgen_is_object=function(e){const t=e;return typeof t=="object"&&t!==null},i.wbg.__wbindgen_jsval_loose_eq=function(e,t){return e==t},i.wbg.__wbindgen_memory=function(){return o.memory},i.wbg.__wbindgen_number_get=function(e,t){const s=t,r=typeof s=="number"?s:void 0;y().setFloat64(e+8*1,k(r)?0:r,!0),y().setInt32(e+4*0,!k(r),!0)},i.wbg.__wbindgen_number_new=function(e){return e},i.wbg.__wbindgen_string_get=function(e,t){const s=t,r=typeof s=="string"?s:void 0;var n=k(r)?0:V(r,o.__wbindgen_malloc,o.__wbindgen_realloc),l=C;y().setInt32(e+4*1,l,!0),y().setInt32(e+4*0,n,!0)},i.wbg.__wbindgen_throw=function(e,t){throw new Error(I(e,t))},i}function te(i,e){return o=i.exports,W.__wbindgen_wasm_module=e,b=null,A=null,o.__wbindgen_start(),o}async function W(i){if(o!==void 0)return o;typeof i<"u"&&(Object.getPrototypeOf(i)===Object.prototype?{module_or_path:i}=i:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof i>"u"&&(i=new URL("/particle-life-wasm/assets/particle_life_wasm_bg-XjN_DK_Y.wasm",import.meta.url));const e=ee();(typeof i=="string"||typeof Request=="function"&&i instanceof Request||typeof URL=="function"&&i instanceof URL)&&(i=fetch(i));const{instance:t,module:s}=await Q(await i,e);return te(t,s)}class ie{canvas;ctx;constructor(e){const t=document.querySelector(e),s=t?.getContext("2d");if(!t||!s)throw new Error("Canvas element does not exist!");this.canvas=t,this.ctx=s}updateDimensions(e,t){this.canvas.width=e,this.canvas.height=t;const s=this.canvas.getContext("2d");s&&(this.ctx=s)}get width(){return this.canvas.width}get height(){return this.canvas.height}drawRectangle(e,t,s,r,n){this.ctx.fillStyle=n,this.ctx.fillRect(e,t,s,r)}drawCircle(e,t,s,r){this.ctx.beginPath(),this.ctx.arc(e,t,r,0*Math.PI,2*Math.PI),this.ctx.fillStyle=s,this.ctx.fill()}}class _{constructor(e,t,s,r,n="div"){this.parent=e,this.object=t,this.property=s,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),_.nextNameID=_.nextNameID||0,this.$name.id=`lil-gui-name-${++_.nextNameID}`,this.$widget=document.createElement(n),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class se extends _{constructor(e,t,s){super(e,t,s,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function O(i){let e,t;return(e=i.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const re={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:O,toHexString:O},E={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},ne={isPrimitive:!1,match:Array.isArray,fromHexString(i,e,t=1){const s=E.fromHexString(i);e[0]=(s>>16&255)/255*t,e[1]=(s>>8&255)/255*t,e[2]=(s&255)/255*t},toHexString([i,e,t],s=1){s=255/s;const r=i*s<<16^e*s<<8^t*s<<0;return E.toHexString(r)}},le={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,e,t=1){const s=E.fromHexString(i);e.r=(s>>16&255)/255*t,e.g=(s>>8&255)/255*t,e.b=(s&255)/255*t},toHexString({r:i,g:e,b:t},s=1){s=255/s;const r=i*s<<16^e*s<<8^t*s<<0;return E.toHexString(r)}},oe=[re,E,ne,le];function ae(i){return oe.find(e=>e.match(i))}class ce extends _{constructor(e,t,s,r){super(e,t,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=ae(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=O(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class F extends _{constructor(e,t,s){super(e,t,s,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class de extends _{constructor(e,t,s,r,n,l){super(e,t,s,"number"),this._initInput(),this.min(r),this.max(n);const c=l!==void 0;this.step(c?l:this._getImplicitStep(),c),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let a=parseFloat(this.$input.value);isNaN(a)||(this._stepExplicit&&(a=this._snap(a)),this.setValue(this._clamp(a)))},t=a=>{const h=parseFloat(this.$input.value);isNaN(h)||(this._snapClampSetValue(h+a),this.$input.value=this.getValue())},s=a=>{a.code==="Enter"&&this.$input.blur(),a.code==="ArrowUp"&&(a.preventDefault(),t(this._step*this._arrowKeyMultiplier(a))),a.code==="ArrowDown"&&(a.preventDefault(),t(this._step*this._arrowKeyMultiplier(a)*-1))},r=a=>{this._inputFocused&&(a.preventDefault(),t(this._step*this._normalizeMouseWheel(a)))};let n=!1,l,c,d,g,u;const p=5,f=a=>{l=a.clientX,c=d=a.clientY,n=!0,g=this.getValue(),u=0,window.addEventListener("mousemove",w),window.addEventListener("mouseup",v)},w=a=>{if(n){const h=a.clientX-l,m=a.clientY-c;Math.abs(m)>p?(a.preventDefault(),this.$input.blur(),n=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(h)>p&&v()}if(!n){const h=a.clientY-d;u-=h*this._step*this._arrowKeyMultiplier(a),g+u>this._max?u=this._max-g:g+u<this._min&&(u=this._min-g),this._snapClampSetValue(g+u)}d=a.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",w),window.removeEventListener("mouseup",v)},$=()=>{this._inputFocused=!0},M=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",f),this.$input.addEventListener("focus",$),this.$input.addEventListener("blur",M)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(a,h,m,H,X)=>(a-h)/(m-h)*(X-H)+H,t=a=>{const h=this.$slider.getBoundingClientRect();let m=e(a,h.left,h.right,this._min,this._max);this._snapClampSetValue(m)},s=a=>{this._setDraggingStyle(!0),t(a.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",n)},r=a=>{t(a.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",n)};let l=!1,c,d;const g=a=>{a.preventDefault(),this._setDraggingStyle(!0),t(a.touches[0].clientX),l=!1},u=a=>{a.touches.length>1||(this._hasScrollBar?(c=a.touches[0].clientX,d=a.touches[0].clientY,l=!0):g(a),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",f))},p=a=>{if(l){const h=a.touches[0].clientX-c,m=a.touches[0].clientY-d;Math.abs(h)>Math.abs(m)?g(a):(window.removeEventListener("touchmove",p),window.removeEventListener("touchend",f))}else a.preventDefault(),t(a.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",f)},w=this._callOnFinishChange.bind(this),v=400;let $;const M=a=>{if(Math.abs(a.deltaX)<Math.abs(a.deltaY)&&this._hasScrollBar)return;a.preventDefault();const m=this._normalizeMouseWheel(a)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout($),$=setTimeout(w,v)};this.$slider.addEventListener("mousedown",s),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",M,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:s}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,s=-e.wheelDelta/120,s*=this._stepExplicit?1:10),t+-s}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class he extends _{constructor(e,t,s,r){super(e,t,s,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(n=>{const l=document.createElement("option");l.innerHTML=n,this.$select.appendChild(l)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class ue extends _{constructor(e,t,s){super(e,t,s,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const pe=`.lil-gui {
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
}`;function ge(i){const e=document.createElement("style");e.innerHTML=i;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let z=!1;class U{constructor({parent:e,autoPlace:t=e===void 0,container:s,width:r,title:n="Controls",injectStyles:l=!0,touchStyles:c=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",d=>{(d.code==="Enter"||d.code==="Space")&&(d.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),c&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!z&&l&&(ge(pe),z=!0),s?s.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",d=>d.stopPropagation()),this.domElement.addEventListener("keyup",d=>d.stopPropagation())}add(e,t,s,r,n){if(Object(s)===s)return new he(this,e,t,s);const l=e[t];switch(typeof l){case"number":return new de(this,e,t,s,r,n);case"boolean":return new se(this,e,t);case"string":return new ue(this,e,t);case"function":return new F(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,l)}addColor(e,t,s=1){return new ce(this,e,t,s)}addFolder(e){return new U({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(s=>{s instanceof F||s._name in e.controllers&&s.load(e.controllers[s._name])}),t&&e.folders&&this.folders.forEach(s=>{s._title in e.folders&&s.load(e.folders[s._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(s=>{if(!(s instanceof F)){if(s._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${s._name}"`);t.controllers[s._name]=s.save()}}),e&&this.folders.forEach(s=>{if(s._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${s._title}"`);t.folders[s._title]=s.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const s=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",s))};this.$children.addEventListener("transitionend",s);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(s=>s.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const j=i=>{const e=new U,t=i.settings,s=e.addFolder("Config");s.add(i,"reset").name("Reset"),s.add(i,"randomRules").name("Random Rules"),s.add(i,"symmetricRules").name("Make Rules Symmetric"),s.add(i.particles,"numColors",1,t.drawings.colors.length,1).name("Number of Colors").onFinishChange(()=>{i.setSeedToUrl(),i.updateGUIDisplay()}),s.add(i.particles,"seed").name("Seed").listen().onFinishChange(()=>{i.randomRules(!0)}),s.add(t,"fps").name("FPS - (Live)").listen().disable(),s.add(i.particles,"number_of_particles_per_color",500,1e4,500).name("Atoms per-color"),s.add(i.particles,"forceRadius",1,t.maxRadius,1).name("Force Radius"),s.add(i.particles,"timeDelta",1e-4,t.maxDeltaTime,1e-4).name("Time Delta").listen().decimals(4),s.add(i.particles,"autoScaleTime").name("Auto Scale Time"),s.add(i.particles,"targetVelocity",1,10,1).name("Target Velocity"),s.add(i.particles,"viscosity",.1,2,.1).name("Viscosity"),s.add(t,"pulseDuration",1,100,1).name("Click Pulse Duration").listen(),s.add(i.particles,"wallRepelDistance",0,100,1).name("Wall Repel Distance"),s.add(i.particles,"wallRepelStrength",0,20,1).name("Wall Repel Strength"),s.add(i.particles,"explore").name("Random Exploration").onFinishChange(()=>{i.particles.exploreTimer=0}),s.add(i.particles,"includeRadius").name("Include Radius");const r=e.addFolder("Drawings");r.add(i.particles,"drawRadius",1,10,.5).name("Radius");for(let c=0;c<t.drawings.colors.length;c++)r.addColor(t.drawings.colors,`${c}`).name(`Color ${c+1}`);r.addColor(t.drawings,"background_color").name("Background Color"),r.add(i,"randomColors").name("Random colors"),r.add(i,"addColor").name("Add color"),r.add(i,"resetColors").name("Reset colors");const n=e.addFolder("Export / Import");if(n.add(i,"saveState").name("Save to file"),n.add(i,"loadState").name("Load from file"),n.add(i,"exportImage").name("Image"),n.add(i,"exportVideo").name("Video: Start / stop"),i.particles.rules.length>0){const c=e.addFolder("Rules");for(let d=0;d<i.particles.numColors;d++){const g=t.drawings.colors[d],u=c.addFolder(`<font color='${g}'>Color ${d+1}</font>`);for(let p=0;p<i.particles.numColors;p++){const f=t.drawings.colors[p];u.add(i.particles.rules[d],`${p}`,-1,1,.001).name(`<-> <font color='${f}'>Color ${p+1}</font>`).listen().onFinishChange(()=>{i.particles.particleLife.set_rules(i.particles.rules)})}u.add(i.particles.radii,`${d}`,1,t.maxRadius,5).name("Radius").listen().onFinishChange(()=>{i.particles.particleLife.set_radii(i.particles.radii)})}}const l=e.addFolder("Demo Mode");return l.add(i,"toggleDemoMode").name(t.demoMode.enabled?"Stop Demo Mode":"Start Demo Mode"),l.add(t.demoMode,"interval",5,300,5).name("Interval").onFinishChange(()=>{t.demoMode.enabled&&(clearInterval(t.demoMode.id),i.setDemoInterval())}),l.add(t.demoMode,"maxNumberParticles",1500,2e4,500).name("Maximum Particles"),l.add(t.demoMode,"minColors",1,7,1).name("Minimum colors"),l.add(t.demoMode,"maxColors",1,7,1).name("Maximum colors"),l.add(t.demoMode,"randomColors").name("Random colors"),l.add(t.demoMode,"autoScaleTime").name("Auto Scale Time"),l.add(t.demoMode,"targetVelocity",1,10,1).name("Target Velocity"),l.add(t.demoMode,"includeRadius").name("Random Radius"),l.add(t.demoMode,"restoreSettings").name("Restore Settings"),e};class _e{settings;canvas;memory;particleArrayLength;particleLife;drawRadius;rules;radii;exploreTimer;constructor(e,t,s){this.settings=e,this.canvas=t,this.memory=s,this.particleLife=new q(this.settings.numColors,this.settings.number_of_particles_per_color,this.settings.forceRadius,this.settings.timeDelta,this.settings.viscosity,this.settings.autoScaleTime,this.settings.targetVelocity,this.settings.maxRadius,this.settings.wallRepelDistance,this.settings.wallRepelStrength,this.settings.explore,this.settings.includeRadius),this.particleArrayLength=this.particleLife.particle_array_length(),this.drawRadius=this.settings.drawRadius,this.rules=this.particleLife.get_rules(),this.radii=this.particleLife.get_radii(),this.exploreTimer=0}createParticles(){this.particleLife.random_particles(),this.particleArrayLength=this.particleLife.particle_array_length()}makeRandomRules(){this.particleLife.make_random_rules(),this.rules=this.particleLife.get_rules(),this.radii=this.particleLife.get_radii()}makeRulesSymmetric(){this.particleLife.make_rules_symmetric(),this.updateRules()}update(){this.particleLife.update()}updateDimensions(){this.particleLife.set_dimensions(this.canvas.width,this.canvas.height)}draw(){const e=this.particleLife.particles_pointer(),t=new Float32Array(this.memory.buffer,e,this.particleArrayLength);for(let s=0;s<this.particleArrayLength;s+=3){const r=t[s],n=t[s+1],l=this.settings.drawings.colors[Math.floor(t[s+2])];this.canvas.drawCircle(r,n,l,this.drawRadius)}}pulse(e,t,s){this.particleLife.pulse(e,t,s)}updateRules(){const e=this.particleLife.get_rules();for(let t=0;t<this.rules.length;t+=1)for(let s=0;s<this.rules.length;s+=1)this.rules[t][s]=e[t][s]}updateRadii(){this.radii.length=0;for(const e of this.particleLife.get_radii())this.radii.push(e)}get numColors(){return this.particleLife.get_number_of_colors()}set numColors(e){this.particleLife.set_number_of_colors(e),this.rules=this.particleLife.get_rules(),this.radii=this.particleLife.get_radii(),this.particleArrayLength=this.particleLife.particle_array_length()}get number_of_particles_per_color(){return this.particleLife.get_number_of_particles_per_color()}set number_of_particles_per_color(e){this.particleLife.set_number_of_particles_per_color(e),this.particleArrayLength=this.particleLife.particle_array_length()}get seed(){return this.particleLife.get_seed()}set seed(e){this.particleLife.set_seed(e)}newSeed(){return this.particleLife.new_seed()}get forceRadius(){return this.particleLife.get_force_radius()}set forceRadius(e){this.particleLife.set_force_radius(e),this.updateRadii()}get timeDelta(){return this.particleLife.get_time_delta()}set timeDelta(e){this.particleLife.set_time_delta(e)}get autoScaleTime(){return this.particleLife.get_auto_scale_time()}set autoScaleTime(e){this.particleLife.set_auto_scale_time(e)}get targetVelocity(){return this.particleLife.get_target_velocity()}set targetVelocity(e){this.particleLife.set_target_velocity(e)}get viscosity(){return this.particleLife.get_viscosity()}set viscosity(e){this.particleLife.set_viscosity(e)}get wallRepelDistance(){return this.particleLife.get_wall_repel_distance()}set wallRepelDistance(e){this.particleLife.set_wall_repel_distance(e)}get wallRepelStrength(){return this.particleLife.get_wall_repel_strength()}set wallRepelStrength(e){this.particleLife.set_wall_repel_strength(e)}get explore(){return this.particleLife.get_explore()}set explore(e){e&&(this.exploreTimer=0),this.particleLife.set_explore(e)}get includeRadius(){return this.particleLife.get_include_radius()}set includeRadius(e){e&&(this.exploreTimer=0),this.particleLife.set_include_radius(e)}getCurrentState(){return{seed:this.particleLife.get_seed(),numColors:this.particleLife.get_number_of_colors(),number_of_particles_per_color:this.particleLife.get_number_of_particles_per_color(),forceRadius:this.particleLife.get_force_radius(),timeDelta:this.particleLife.get_time_delta(),viscosity:this.particleLife.get_viscosity(),rules:this.particleLife.get_rules(),radii:this.particleLife.get_radii(),autoScaleTime:this.particleLife.get_auto_scale_time(),targetVelocity:this.particleLife.get_target_velocity(),wallRepelDistance:this.particleLife.get_wall_repel_distance(),wallRepelStrength:this.particleLife.get_wall_repel_strength(),explore:this.particleLife.get_explore(),includeRadius:this.particleLife.get_include_radius(),drawRadius:this.drawRadius,colors:this.settings.drawings.colors,pulseDuration:this.settings.pulseDuration}}setFromState(e){this.particleLife.set_number_of_colors(e.numColors),this.particleLife.set_number_of_particles_per_color(e.number_of_particles_per_color),this.particleLife.set_force_radius(e.forceRadius),this.particleLife.set_time_delta(e.timeDelta),this.particleLife.set_viscosity(e.viscosity),this.particleLife.set_auto_scale_time(e.autoScaleTime),this.particleLife.set_target_velocity(e.targetVelocity),this.particleLife.set_wall_repel_distance(e.wallRepelDistance),this.particleLife.set_wall_repel_strength(e.wallRepelStrength),this.particleLife.set_explore(e.explore),this.particleLife.set_include_radius(e.includeRadius),this.drawRadius=e.drawRadius,this.settings.drawings.colors=e.colors,this.settings.pulseDuration=e.pulseDuration,this.particleLife.set_seed(e.seed),this.particleLife.make_random_rules(),this.particleLife.random_particles(),this.particleLife.set_rules(e.rules),this.particleLife.set_radii(e.radii),this.rules=this.particleLife.get_rules(),this.radii=this.particleLife.get_radii(),this.exploreTimer=0,this.particleArrayLength=this.particleLife.particle_array_length()}}const G=["#008000","#FF0000","#FFA500","#00FFFF","#FF00FF","#E6E6FA","#008080"],fe=()=>({seed:"1",fps:0,drawings:{background_color:"#000000",predefinedColors:G,colors:[...G]},explore:!1,includeRadius:!1,pulseDuration:10,maxDeltaTime:.05,numColors:4,number_of_particles_per_color:1e3,forceRadius:80,timeDelta:.005,viscosity:.7,autoScaleTime:!1,targetVelocity:2,maxRadius:200,wallRepelDistance:40,wallRepelStrength:3,drawRadius:1,demoMode:{enabled:!1,interval:20,id:-1,maxNumberParticles:9e3,minColors:3,maxColors:7,randomColors:!0,autoScaleTime:!0,targetVelocity:2,oldAutoScaleTime:!0,oldTargetVelocity:2,includeRadius:!1,oldForceRadius:80,restoreSettings:!1}});function B(i,e){const t=document.createElement("a");t.download=e,t.target="_blank",t.href=i,t.click(),t.remove()}function me(i,e="application/json"){let t=document.createElement("input");t.type="file",t.accept=e,t.style.display="none";const s=document.getElementById("anchor");s&&(s.append(t),t.onchange=()=>{const r=t.files;if(!r){t.remove();return}const n=r[0],l=new FileReader;l.addEventListener("load",()=>{const c=l.result;typeof c=="string"&&i(c),t.remove()},!1),n&&l.readAsText(n)},t.click())}function be(i,e){const t=i.captureStream(),s=new MediaRecorder(t),r=[];return s.ondataavailable=function(n){r.push(n.data)},s.onstop=function(n){const l=new Blob(r,{type:"video/mp4"}),c=URL.createObjectURL(l);B(c,e),r.length=0},s}function we(i,e,t){t/=100;const s=e*Math.min(t,1-t)/100,r=n=>{const l=(n+i/30)%12,c=t-s*Math.max(Math.min(l-3,9-l,1),-1);return Math.round(255*c).toString(16).padStart(2,"0")};return`#${r(0)}${r(8)}${r(4)}`}const L=(i,e)=>Math.floor(Math.random()*(e-i+1))+i;function Y(){return we(L(0,360),L(42,98),L(40,90))}class ye{settings;canvas;memory;particles;gui;lastT;mediaRecorder;constructor(e,t){this.settings=fe(),this.canvas=new ie(e),this.memory=t,this.particles=new _e(this.settings,this.canvas,this.memory),this.gui=j(this),this.lastT=0}run(){this.getSeedFromUrl(),this.setupClicks(),this.setupKeys(),this.updateDimensions(),this.randomRules(!0),console.log("settings",this.settings),console.log("seed",this.particles.seed),this.lastT=performance.now(),this.update()}update(){this.updateDimensions(),this.drawBackground(),this.particles.update(),this.particles.draw(),this.updateRulesDisplay(),this.updateFPS(),requestAnimationFrame(()=>this.update())}drawBackground(){this.canvas.drawRectangle(0,0,this.canvas.width,this.canvas.height,this.settings.drawings.background_color)}updateDimensions(){const e=window.innerWidth-60,t=window.innerHeight-60;(e!==this.canvas.width||t!==this.canvas.height)&&(this.canvas.updateDimensions(e,t),this.particles.updateDimensions())}updateFPS(){let e=performance.now();e>this.lastT&&(this.settings.fps=Math.floor(1e3/(e-this.lastT)),this.lastT=e)}reset(){this.particles.createParticles()}randomRules(e=!1){e||this.particles.newSeed(),this.setSeedToUrl(),this.particles.makeRandomRules(),this.particles.createParticles(),this.updateGUIDisplay()}symmetricRules(){this.particles.makeRulesSymmetric(),this.particles.createParticles(),this.updateGUIDisplay()}updateGUIDisplay(){const e=this.gui._closed;this.gui.destroy(),this.gui=j(this),e&&this.gui.close()}updateRulesDisplay(){if(this.particles.explore){if(this.particles.exploreTimer>0){this.particles.exploreTimer-=1;return}this.particles.updateRules(),this.particles.updateRadii(),this.particles.exploreTimer=100}}setupClicks(){this.canvas.canvas.addEventListener("click",e=>{const t=e.shiftKey?-this.settings.pulseDuration:this.settings.pulseDuration;this.particles.pulse(e.clientX,e.clientY,t)})}setupKeys(){this.canvas.canvas.addEventListener("keydown",e=>{switch(e.key){case"r":this.randomRules();break;case"o":this.reset();break;case"s":this.symmetricRules();break;case"c":this.randomColors();break;case"d":this.toggleDemoMode();break;default:console.log(e.key)}})}getSeedFromUrl(){let e=window.location.hash;if(e!=null&&e[0]=="#"){let t=e.substring(1);t==="demo"?this.toggleDemoMode():isFinite(Number(t))&&(this.particles.seed=t)}}setSeedToUrl(){const e=this.particles.seed;window.location.hash="#"+e,document.title="Life #"+e}saveState(){const e=this.particles.getCurrentState(),t=JSON.stringify(e),s=new Blob([t],{type:"text/plain"}),r=URL.createObjectURL(s);B(r,`particle_life_${this.particles.seed}.json`),URL.revokeObjectURL(r)}loadState(){me(e=>{try{const t=JSON.parse(e);this.particles.setFromState(t),this.setSeedToUrl(),this.updateGUIDisplay()}catch{console.error("Could not parse the given file!")}})}randomColors(){this.settings.drawings.colors=this.settings.drawings.colors.map(()=>Y()),this.updateGUIDisplay()}addColor(){this.settings.drawings.colors.push(Y()),this.updateGUIDisplay()}resetColors(){this.settings.drawings.colors=[...this.settings.drawings.predefinedColors],this.updateGUIDisplay()}exportImage(){const e=this.canvas.canvas.toDataURL("png",1);B(e,`particle_life_${this.particles.seed}`)}exportVideo(){this.mediaRecorder||(this.mediaRecorder=be(this.canvas.canvas,`particle_life_${this.particles.seed}`)),this.mediaRecorder.state=="recording"?this.mediaRecorder.stop():this.mediaRecorder.start()}updateDemoMode(){const e=L(Math.min(this.settings.demoMode.minColors,this.settings.demoMode.maxColors),Math.max(this.settings.demoMode.minColors,this.settings.demoMode.maxColors));let t=1;if(this.particles.numColors=e,this.settings.demoMode.includeRadius){const s=L(20,100);t=80/s,this.particles.forceRadius=s}this.particles.number_of_particles_per_color=500*Math.floor(this.settings.demoMode.maxNumberParticles*t/(e*500)),this.setSeedToUrl(),this.settings.demoMode.randomColors?this.randomColors():this.updateGUIDisplay()}setDemoInterval(){this.settings.demoMode.id=setInterval(()=>this.updateDemoMode(),this.settings.demoMode.interval*1e3)}toggleDemoMode(){this.settings.demoMode.enabled=!this.settings.demoMode.enabled,this.settings.demoMode.enabled?this.startDemoMode():this.endDemoMode()}startDemoMode(){document.documentElement.requestFullscreen(),this.settings.demoMode.oldAutoScaleTime=this.particles.autoScaleTime,this.settings.demoMode.oldTargetVelocity=this.particles.targetVelocity,this.settings.demoMode.oldForceRadius=this.particles.forceRadius,this.particles.autoScaleTime=this.settings.demoMode.autoScaleTime,this.particles.targetVelocity=this.settings.demoMode.targetVelocity,this.gui.close(),this.setDemoInterval(),setTimeout(()=>{this.updateDemoMode()},200)}endDemoMode(){clearInterval(this.settings.demoMode.id),this.settings.demoMode.restoreSettings&&(this.particles.autoScaleTime=this.settings.demoMode.oldAutoScaleTime,this.particles.targetVelocity=this.settings.demoMode.oldTargetVelocity,this.particles.forceRadius=this.settings.demoMode.oldForceRadius),this.updateGUIDisplay(),this.gui.open(),document.exitFullscreen()}}const ve=await W(),Ae=ve.memory,xe=new ye("#canvas",Ae);xe.run()})();