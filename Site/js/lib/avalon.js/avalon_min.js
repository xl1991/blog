(function(v){function K(){}function L(){return"avalon"+Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}function M(a,b){for(var d=[].slice.call(arguments),c=1;b=d[c++];)for(var e in b)a[e]=b[e];return a}function B(a,b){if(a){var d=0;if(Array.isArray(a)||"Object"===avalon.type(a)&&!a.setTimeout&&isFinite(a.length)&&a[0])for(var c=a.length;d<c;d++)b(d,a[d]);else for(d in a)a.hasOwnProperty(d)&&b(d,a[d])}}function ha(){if(C){for(var a=0,b;b=C[a++];)b();C=null}}function ia(a){return a.replace(/([a-z\d])([A-Z]+)/g,
"$1-$2").toLowerCase()}function N(a){return 0>a.indexOf("-")&&0>a.indexOf("_")?a:a.replace(/[-_][^-_]/g,function(a){return a.charAt(1).toUpperCase()})}function ja(a){var b=!1;if(xa.test(a)||+a+""===a)b=!0;try{return b?eval("0,"+a):a}catch(d){return a}}function D(a,b,d){a="for(var "+a+"i=0,n = this.length;i < n;i++){"+b.replace("_","((i in this) && fn.call(scope,this[i],i,this))")+"}"+d;return Function("fn,scope",a)}function T(a,b,d){if(d){var c=a.length;d=b.length;c>d?a.splice(d,c-d):d>c&&a.push.apply(a,
b.slice(c));d=Math.min(c,d);for(c=0;c<d;c++)a.set(c,b[c])}else for(c in b)b.hasOwnProperty(c)&&(a.hasOwnProperty(c)&&"$id"!==c)&&(a[c]=b[c])}function E(a){var b=a.$skipArray,d={},c={},e={},f=[],g=[],h=Object.keys(U),b=Array.isArray(b)?b.concat(h):h;B(a,function(a,k){U[a]||(e[a]=k);var m=avalon.type(k);if("Function"===m)h.push(a);else{if(-1!==b.indexOf(a)||"$"===a.charAt(0)&&!ya[a])return h.push(a);var n,s;if("Object"===m&&"function"===typeof k.get&&2>=Object.keys(k).length){var F=k.set,za=k.get;n=
function(b){if(arguments.length)O||("function"===typeof F&&F.call(d,b),s!==b&&(s=b,G(n),d.$events&&d.$fire(a,b,k)));else return(V||!n.locked)&&ka(n),k=e[a]=za.call(d)};n.nick=a;g.push(n)}else k=NaN,f.push(a),n=function(b){if(arguments.length){if(!O&&k!==b){var c=k;"Array"===m||"Object"===m?k&&k.$id?T(k,b,Array.isArray(b)):k=Array.isArray(b)?la(b,d,a):E(b):k=b;e[a]=k&&k.$id?k.$json:k;G(n);d.$events&&d.$fire(a,k,c)}}else return ka(n),k};n[y]=[];c[a]={set:n,get:n,enumerable:!0}}});P?P(d,c):d=Aa(c,h);
h.forEach(function(b){U[b]||(d[b]=a[b])});f.forEach(function(b){d[b]=a[b]});g.forEach(function(a){t[q]=a;f=d[a.nick];a.locked=1;delete t[q]});d.$json=e;d.$events={};d.$watch=W.$watch.bind(d);d.$unwatch=W.$unwatch.bind(d);d.$fire=W.$fire.bind(d);d.$id=L();d.hasOwnProperty=function(a){return a in d.$json};return d}function ka(a){t[q]&&(a=a[y])&&avalon.Array.ensure(a,t[q])}function G(a,b){var d=a[y];if(d&&d.length)for(var c=[].slice.call(arguments,1),e=d.concat(),f=0,g;g=e[f++];)(b=g.element)&&!b.noRemove&&
(0===b.sourceIndex||null===b.parentNode)?(avalon.Array.remove(d,g),avalon.log(g+"")):g.apply(0,c)}function X(a,b){b=b||[];var d=a.getAttribute(u+"skip"),c=a.getAttribute(u+"important"),e=a.getAttribute(u+"controller");if("string"!==typeof d){if(c)if(avalon.models[c])b=[avalon.models[c]],a.removeAttribute(u+"important");else return;else if(e){d=avalon.models[e];if(!d)return;b=[d].concat(b);a.removeAttribute(u+"controller")}for(var d=b,c=[],e=0,f;f=a.attributes[e++];)if(f.specified){var g=!1;if(-1!==
f.name.indexOf(u)){var h=f.name.replace(u,"");if(0<h.indexOf("-"))var l=h.split("-"),h=l.shift();g="function"===typeof r[h]}else/\{\{[^}]*\}\}/.test(f.value)&&(h=g="attr");g&&c.push({type:h,args:l||[],element:a,remove:!0,node:f,value:f.nodeValue})}Y(c,d);if(!1===a.canHaveChildren||!Ba[a.tagName]&&Ca.test(a.innerHTML)){h=[];c=a.childNodes;for(l=0;d=c[l++];)1===d.nodeType?X(d,b):3===d.nodeType&&h.push(d);for(l=0;d=h[l++];)c=b,d=ma(d),d.length&&Y(d,c)}}}function na(a){var b=a.indexOf("{{");return-1!==
b&&b<a.indexOf("}}")}function oa(a){var b=[];if(na(a)){do a=a.replace(Da,function(a,c){c&&b.push({value:c,expr:!1});return""}),a=a.replace(Ea,function(a,c){if(c){var e=[];0<c.indexOf("|")&&(c=c.replace(/\|\s*(\w+)\s*(\([^)]+\))?/g,function(a,b,d){e.push(b+(d||""));return""}));b.push({value:c,expr:!0,filters:e.length?e:void 0})}return""});while(na(a));a&&b.push({value:a,expr:!1})}return b}function Y(a,b){a.forEach(function(a){r[a.type](a,b);a.remove&&a.element.removeAttribute(a.node.name)})}function ma(a){var b=
[],d=oa(a.nodeValue);if(d.length){for(;d.length;){var c=d.shift(),e=v.createTextNode(c.value);if(c.expr){var f=c.filters,c={type:"text",node:e,args:[],element:a.parentNode,value:c.value,filters:f};f&&-1!==f.indexOf("html")&&(avalon.Array.remove(f,"html"),c.type="html",c.replace=!0);b.push(c)}H.appendChild(e)}a.parentNode.replaceChild(H,a)}return b}function pa(a,b){for(var d=a.split("."),c=0,e,f;e=b[c++];)try{if(e.hasOwnProperty(d[0])&&(2>d.length||e[d[0]].hasOwnProperty(d[1]))){var g=Function("scope",
"value","if(arguments.length === 1){ return scope."+a+" }else{ scope."+a+" = value; }");g(e);f=e;break}}catch(h){}if(f)return[g,f]}function p(a,b,d,c,e){var f,g,h=d.filters;f=avalon.noop;!h&&!e&&(g=pa(a.trim(),b))&&(g=[g[0],[g[1]]]);!g&&!e&&(g=Z(a,b,d));if(!g&&e)g=e.map(function(a){return a.expr?Z(a.value,b,d)||"":a.value}),f=function(a,b){return function(){for(var c="",e,f=0,g;g=a[f++];)"string"===typeof g?c+=g:(e=g[0],c+=e.apply(e,g[1]));return b(c,d.element)}}(g,c);else if(g){var l=g[0],k=g[1];
f=function(){c(l.apply(l,k),d.element)}}f.toString=function(){return"eval("+a+")"};f.element=d.element;t[q]=f;V=!0;f();V=!1;delete t[q]}function Z(a,b,d){var c=[],e=[],f=new Date-0;b.forEach(function(a){var b=a.$id+""+f;-1===c.indexOf(b)&&(c.push(b),e.push(a))});a="var ret"+f+" = "+a+"\r\n";b=0;for(var g;g=c[b++];)a="with("+g+"){\r\n"+a+"}\r\n";if(d.filters){g=[];g.push(a,"\r\n");b=0;for(var h;h=d.filters[b++];){var l=h.indexOf("(");-1!==l?(a=h.slice(l+1,h.lastIndexOf(")")).trim(),a=","+a,h=h.slice(0,
l).trim()):a="";g.push(" if(filters",f,".",h,"){\r\n\ttry{ret",f," = filters",f,".",h,"(ret",f,a,")}catch(e){};\r\n}\r\n")}a=g.join("");c.push("filters"+f);e.push(avalon.filters);delete d.filters}try{var k=Function.apply(Function,c.concat(a+("\r\nreturn ret"+f)));k.apply(k,e);return[k,e]}catch(m){d.remove=!1}finally{g=c=null}}function Fa(a){var b=a.target=a.srcElement;a.which=null!=a.charCode?a.charCode:a.keyCode;/mouse|click/.test(a.type)&&(b=b.ownerDocument||v,b="BackCompat"===b.compatMode?b.body:
b.documentElement,a.pageX=a.clientX+(b.scrollLeft>>0)-(b.clientLeft>>0),a.pageY=a.clientY+(b.scrollTop>>0)-(b.clientTop>>0));a.preventDefault=function(){a.returnValue=!1};a.stopPropagation=function(){a.cancelBubble=!0};return a}function qa(a){return Array.isArray(a)?a.$id?a:la(a):"Object"===avalon.type(a)?a.$id?a:E(a):a}function la(a,b,d){var c=a.map(qa);c.$id=L();c[y]=[];c.$json=a;var e=E({length:a.length});e.$watch("length",function(){b&&b.$fire(d+".length")});"push,pop,shift,unshift,splice".replace(x,
function(b){c[b]=function(){var d=this.length;a[b].apply(a,arguments);var c=[].slice.call(arguments);/push|unshift|splice/.test(b)&&(c=c.map(qa));var l=a[b].apply(this,c);G(this,b,c,d);e.length=this.length;return l}});"sort,reverse".replace(x,function(b){c[b]=function(){a[b].apply(a,arguments).forEach(function(a,b){c.set(b,a)});return this}});c.isCollection=!0;c.clear=function(){this.length=e.length=0;G(this,"clear",[]);return this};c.update=function(a){Array.isArray(a)&&T(this,a,!0);return this};
c.sortBy=function(b,d){this.update(avalon.Array.sortBy(a,b,d));return this};c.contains=function(a){return-1!==this.indexOf(a)};c.ensure=function(a){this.contains(a)||this.push(a);return this};c.set=function(a,c){0<=a&&a<this.length&&(/Array|Object/.test(avalon.type(c))?(b&&b.$fire(d+".changed"),c.$json&&(c=c.$json),T(this[a],c,Array.isArray(c))):this[a]!==c&&(this[a]=c,b&&b.$fire(d+".changed"),G(this,"set",arguments)));return this};c.size=function(){return e.length};c.remove=function(a){a=this.indexOf(a);
return this.removeAt(a)};c.removeAt=function(b){if(0<=b&&0===b%1)return a.splice(b,1),this.splice(b,1),this};c.removeAll=function(a){if(Array.isArray(a))a.forEach(function(a){c.remove(a)});else if("function"===typeof a)for(var b=this.length-1;0<=b;b--)a(this[b],b)&&this.splice(b,1);else this.clear()};return c}function Ga(a){for(;a.firstChild;)a.removeChild(a.firstChild)}function $(a,b){for(var d=a.firstChild;d;d=d.nextSibling)if(d.id===d.nodeValue+b)return d}function Q(a,b,d){d=d||0;for(a=a.firstChild;a;a=
a.nextSibling)8===a.nodeType&&a.nodeValue===b&&(a.id!==b+d&&(a.id=b+d,a.$scope.$index=d),d++)}function aa(a,b,d){for(var c=a.parentNode;(d=a.nextSibling)&&!(8===d.nodeType&&d.id===b);)c.removeChild(d);c.removeChild(a)}function ra(a,b,d,c,e){var f=c.scopes,g=c.element,h=Ha(a,b,d,c.args);b=[];c=c.view.cloneNode(!0);var l=c.childNodes,f=[h].concat(f);e.splice(a,0,h);if(!g.inprocess){g.inprocess=1;var k=g.hidden;g.hidden=!0}e=0;for(var m;m=l[e++];)1===m.nodeType?X(m,f):3===m.nodeType?b.push(m):8===m.nodeType&&
(m.id=m.nodeValue+a,m.$scope=h,m.$view=c.cloneNode(!1));g.insertBefore(c,d.place||null);for(e=0;m=b[e++];)a=f,d=ma(m),d.length&&Y(d,a);g.inprocess&&(g.hidden=k,g.inprocess=0)}function Ha(a,b,d,c){c=c[0]||"$data";var e={};e.$index=a;e.$itemName=c;e[c]={get:function(){return b},set:function(a){b=a}};e.$first={get:function(){return 0===this.$index}};e.$last={get:function(){return this.$index===d.length-1}};e.$remove=function(){return d.remove(b)};return E(e)}var t={},C=[],q=new Date-0,y="$"+q,O=!1,V=
!1,x=/[^, ]+/g,u="ms-",sa=window.dispatchEvent,z=v.documentElement,Ia=Object.prototype.toString,I=document.createElement("div"),H=v.createDocumentFragment(),ba="propertyIsEnumerable isPrototypeOf hasOwnProperty toLocaleString toString valueOf constructor".split(" ");avalon=function(a){return new avalon.init(a)};avalon.init=function(a){this[0]=this.element=a};avalon.fn=avalon.prototype=avalon.init.prototype;M(avalon,{mix:M,rword:x,subscribers:y,ui:{},models:{},log:function(a){window.console&&console.log(a)},
noop:K,error:function(a,b){throw new (b||Error)(a);},ready:function(a){"function"===typeof a&&(Array.isArray(C)?C.push(a):a())},type:function(a){return null===a?"Null":void 0===a?"Undefined":Ia.call(a).slice(8,-1)},oneObject:function(a,b){"string"===typeof a&&(a=a.match(x)||[]);for(var d={},c=void 0!==b?b:1,e=0,f=a.length;e<f;e++)d[a[e]]=c;return d},range:function(a,b,d){d||(d=1);null==b&&(b=a||0,a=0);var c=-1;b=Math.max(0,Math.ceil((b-a)/d));for(var e=Array(b);++c<b;)e[c]=a,a+=d;return e},bind:function(a,
b,d,c){function e(b){b=b.target?b:Fa(b||window.event);var c=d.call(a,b);!1===c&&(b.preventDefault(),b.stopPropagation());return c}if(sa)a.addEventListener(b,e,!!c);else try{a.attachEvent("on"+b,e)}catch(f){}return e},unbind:sa?function(a,b,d,c){a.removeEventListener(b,d||K,!!c)}:function(a,b,d){a.detachEvent("on"+b,d||K)}});avalon.forEach=function(a,b){window.console&&console.log("\u6b64\u65b9\u6cd5\u5df2\u8fc7\u65f6,\u8bf7\u4f7f\u7528avalon.each");B(a,b)};avalon.each=B;avalon.bind(window,"load",
ha);avalon.bind(window,"DOMContentLoaded",ha);var xa=/^(?:null|false|true|NaN|\{.*\}|\[.*\])$/,R=/\S+/g;M(avalon.fn,{hasClass:function(a){var b=this[0]||{};if(1===b.nodeType)return!!b.className&&-1<(" "+b.className+" ").indexOf(" "+a+" ")},addClass:function(a){var b=this[0];if(a&&"string"===typeof a&&b&&1===b.nodeType)if(b.className){a=(b.className+" "+a).match(R);a.sort();for(var d=a.length-1;0<d;--d)a[d]===a[d-1]&&a.splice(d,1);b.className=a.join(" ")}else b.className=a;return this},removeClass:function(a){var b=
this[0];if(a&&"o"<typeof a&&b&&1===b.nodeType&&b.className){a=(a||"").match(R)||[];for(var d=a.length,c=" "+b.className.match(R).join(" ")+" ",e=0;e<d;e++)c=c.replace(" "+a[e]+" "," ");b.className=c.slice(1,c.length-1)}return this},toggleClass:function(a,b){for(var d=b,c,e=0,f=a.match(R)||[],g="boolean"===typeof b;c=f[e++];)d=g?d:!this.hasClass(c),this[d?"addClass":"removeClass"](c);return this},attr:function(a,b){return 2===arguments.length?(this[0].setAttribute(a,b),this):this[0].getAttribute(a)},
data:function(a,b){a="data-"+ia(a||"");switch(arguments.length){case 2:return this.attr(a,b),this;case 1:var d=this.attr(a);return ja(d);case 0:for(var d=this[0].attributes,c={},e=0,f;f=d[e++];)a=f.name,a.indexOf("data-")||(a=N(a.slice(5)),c[a]=ja(f.value));return c}},removeData:function(a){a="data-"+ia(a);this[0].removeAttribute(a);return this},css:function(a,b){var d=this[0];if(d&&d.style){var c=/[_-]/.test(a)?N(a):a,e;a:{var f=e=void 0;if(ca[c])e=ca[c];else{e=e||z.style;for(var g=0,h=ta.length;g<
h;g++)if(f=N(ta[g]+c),f in e){e=ca[c]=f;break a}e=null}}a=e||c;if(1===arguments.length)return c=w[c+":get"]||w["@:get"],c(d,a);e=typeof b;if("number"!==e||isFinite(b+""))return"number"===e&&!Ja[c]&&(b+="px"),c=w[c+":set"]||w["@:set"],c(d,a,b),this}},bind:function(a,b,d){if(this[0])return avalon.bind(this[0],a,b,d)},unbind:function(a,b,d){this[0]&&avalon.unbind(this[0],a,b,d);return this},val:function(a){var b=this[0];if(b&&1===b.nodeType){var d=0===arguments.length,c=d?":get":":set",e=da,f;f=b.tagName.toLowerCase();
f="input"===f&&/checkbox|radio/.test(b.type)?"checked":f;if(c=e[f+c])var g=c(b,a);else{if(d)return(b.value||"").replace(/\r/g,"");b.value=a}}return d?g:this}});var w=avalon.cssHooks={},ta=["","-webkit-","-o-","-moz-","-ms-"],ca={"float":"cssFloat"in z.style?"cssFloat":"styleFloat",background:"backgroundColor"},Ja=avalon.oneObject("columnCount,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom");w["@:set"]=function(a,b,d){a.style[b]=d};if(window.getComputedStyle)w["@:get"]=function(a,
b){var d,c=window.getComputedStyle(a,null);c&&(d="filter"===b?c.getPropertyValue(b):c[b],""===d&&(d=a.style[b]));return d};else{var Ka=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,La=/^(top|right|bottom|left)$/,ea=!!window.XDomainRequest,Ma={thin:ea?"1px":"2px",medium:ea?"3px":"4px",thick:ea?"5px":"6px"};w["@:get"]=function(a,b){var d=a.currentStyle,c=d[b];if(Ka.test(c)&&!La.test(c)){var e=a.style,f=e.left,g=a.runtimeStyle.left;a.runtimeStyle.left=d.left;e.left="fontSize"===b?"1em":c||0;c=e.pixelLeft+"px";
e.left=f;a.runtimeStyle.left=g}"medium"===c&&(b=b.replace("Width","Style"),"none"===d[b]&&(c="0px"));return""===c?"auto":Ma[c]||c};w["opacity:set"]=function(a,b){a.style.filter="alpha(opacity="+100*b+")";a.style.zoom=1};w["opacity:get"]=function(a){a=a.filters.alpha||a.filters["DXImageTransform.Microsoft.Alpha"];return(a?a.opacity:100)/100+""}}"Width,Height".replace(x,function(a){var b=a.toLowerCase(),d="client"+a,c="scroll"+a,e="offset"+a;avalon.fn[b]=function(f){var g=this[0];if(0===arguments.length){if(g.setTimeout)return g["inner"+
a]||g.document.documentElement[d];if(9===g.nodeType){var h=g.documentElement;return Math.max(g.body[c],h[c],g.body[e],h[e],h[d])}return parseFloat(this.css(b))||0}return this.css(b,f)}});avalon.fn.offset=function(){var a=this[0],b=a&&a.ownerDocument,d={left:0,top:0};if(!b)return d;var a=a.getBoundingClientRect(),c=b.defaultView||b.parentWindow,b=navigator.vendor||"BackCompat"===b.compatMode?b.body:b.documentElement,e=b.clientLeft>>0,f=c.pageXOffset||b.scrollLeft;d.top=a.top+(c.pageYOffset||b.scrollTop)-
(b.clientTop>>0);d.left=a.left+f-e;return d};var da={"option:get":function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text},"select:get":function(a,b){for(var d,c=a.options,e=a.selectedIndex,f=da["option:get"],g="select-one"===a.type||0>e,h=g?null:[],l=g?e+1:c.length,k=0>e?l:g?e:0;k<l;k++)if(d=c[k],(d.selected||k===e)&&!d.disabled){b=f(d);if(g)return b;h.push(b)}return h},"select:set":function(a,b){b=[].concat(b);for(var d=da["option:get"],c=0,e;e=a.options[c++];)e.selected=!!~b.indexOf(d(e));
b.length||(a.selectedIndex=-1)}};"\u53f8\u5f92\u6b63\u7f8e".trim||(String.prototype.trim=function(){return this.replace(/^[\s\xA0]+/,"").replace(/[\s\xA0]+$/,"")});for(var Pa in{toString:1})ba=!1;Object.keys||(Object.keys=function(a){var b=[],d;for(d in a)a.hasOwnProperty(d)&&b.push(d);if(ba&&a)for(var c=0;d=ba[c++];)a.hasOwnProperty(d)&&b.push(d);return b});Array.isArray||(Array.isArray=function(a){return"Array"===avalon.type(a)});Function.prototype.bind||(Function.prototype.bind=function(a){if(2>
arguments.length&&void 0===a)return this;var b=this,d=arguments;return function(){var c=[],e;for(e=1;e<d.length;e++)c.push(d[e]);for(e=0;e<arguments.length;e++)c.push(arguments[e]);return b.apply(a,c)}});M(Array.prototype,{indexOf:function(a,b){var d=this.length,c=~~b;for(0>c&&(c+=d);c<d;c++)if(this[c]===a)return c;return-1},lastIndexOf:function(a,b){var d=this.length,c=null==b?d-1:b;for(0>c&&(c=Math.max(0,d+c));0<=c;c--)if(this[c]===a)return c;return-1},forEach:D("","_",""),filter:D("r=[],j=0,",
"if(_)r[j++]=this[i]","return r"),map:D("r=[],","r[i]=_","return r"),some:D("","if(_)return true","return false"),every:D("","if(!_)return false","return true")});avalon.Array={sortBy:function(a,b,d){a=a.map(function(a,e){return{el:a,re:b.call(d,a,e)}}).sort(function(a,b){var d=a.re,g=b.re;return d<g?-1:d>g?1:0});return avalon.Array.pluck(a,"el")},pluck:function(a,b){return a.filter(function(a){return null!=a[b]})},ensure:function(a){[].slice.call(arguments,1).forEach(function(b){~a.indexOf(b)||a.push(b)});
return a},removeAt:function(a,b){return!!a.splice(b,1).length},remove:function(a,b){var d=a.indexOf(b);return~d?avalon.Array.removeAt(a,d):!1}};var J;"function"===typeof setImmediate?J=setImmediate.bind(window):function(){function a(){--e;if(++g>=c){g=0;c*=4;for(var a=f&&Math.min(f-1,c);e<a;)++e,h()}for(;f;)--f,b=b.next,a=b.task,b.task=void 0,a();g=0}var b={task:void 0,next:null},d=b,c=2,e=0,f=0,g=0,h=void 0;J=function(a){d=d.next={task:a,next:null};e<++f&&e<c&&(++e,h())};if("undefined"!==typeof MessageChannel){var l=
new MessageChannel;l.port1.onmessage=a;h=function(){l.port2.postMessage(0)}}else h=function(){setTimeout(a,0)}}();avalon.nextTick=J;avalon.define=function(a,b,d){var c=[].slice.call(arguments);"string"!==typeof a&&(a=L(),c.unshift(a));Array.isArray(c[1])||c.splice(1,0,[]);b=c[1];"function"!==typeof c[2]&&avalon.error("factory\u5fc5\u987b\u662f\u51fd\u6570");d=c[2];c={$watch:K};b.unshift(c);d(c);c=E(c);O=!0;b[0]=c;d.apply(0,b);b.shift();O=!1;c.$id=a;return avalon.models[a]=c};var W={$watch:function(a,
b){var d=this.$events[a];d?d.push(b):this.$events[a]=[b];return this},$unwatch:function(a,b){var d=arguments.length;if(0===d)this.$events={};else if(1===d)this.$events[a]=[];else for(var d=this.$events[a]||[],c=d.length;-1<--c;)if(d[c]===b)return d.splice(c,1);return this},$fire:function(a){for(var b=this.$events[a]||[],d=this.$events.$all||[],c=[].slice.call(arguments,1),e=0,f;f=b[e++];)f.apply(this,c);for(e=0;f=d[e++];)f.apply(this,c)}},ya=avalon.oneObject("$index,$remove,$first,$last"),U=avalon.oneObject("$json,$skipArray,$watch,$unwatch,$fire,$events"),
fa=Object.defineProperty;try{fa({},"_",{value:"x"});var P=Object.defineProperties}catch(Qa){"__defineGetter__"in avalon&&(fa=function(a,b,d){"value"in d&&(a[b]=d.value);"get"in d&&a.__defineGetter__(b,d.get);"set"in d&&a.__defineSetter__(b,d.set);return a},P=function(a,b){for(var d in b)b.hasOwnProperty(d)&&fa(a,d,b[d]);return a})}if(!P&&window.VBArray){window.execScript("Function parseVB(code)\n\tExecuteGlobal(code)\nEnd Function","VBScript");var Na=function(a,b,d){var c=a[b]&&a[b].set;if(3===arguments.length)c(d);
else return c()},Aa=function(a,b){var d=b.slice(0);d.push("hasOwnProperty","$id");var c="VBClass"+setTimeout("1"),e={},f=[];f.push("Class "+c,"\tPrivate [__data__], [__proxy__]","\tPublic Default Function [__const__](d, p)","\t\tSet [__data__] = d: set [__proxy__] = p","\t\tSet [__const__] = Me","\tEnd Function");d.forEach(function(a){!0!==e[a]&&(e[a]=!0,f.push("\tPublic ["+a+"]"))});Object.keys(a).forEach(function(a){e[a]=!0;f.push("\tPublic Property Let ["+a+"](val)",'\t\tCall [__proxy__]([__data__], "'+
a+'", val)',"\tEnd Property","\tPublic Property Set ["+a+"](val)",'\t\tCall [__proxy__]([__data__], "'+a+'", val)',"\tEnd Property","\tPublic Property Get ["+a+"]","\tOn Error Resume Next","\t\tSet["+a+'] = [__proxy__]([__data__],"'+a+'")',"\tIf Err.Number <> 0 Then","\t\t["+a+'] = [__proxy__]([__data__],"'+a+'")',"\tEnd If","\tOn Error Goto 0","\tEnd Property")});f.push("End Class");f.push("Function "+c+"Factory(a, b)","\tDim o","\tSet o = (New "+c+")(a, b)","\tSet "+c+"Factory = o","End Function");
window.parseVB(f.join("\r\n"));return window[c+"Factory"](a,Na)}}avalon.scan=function(a,b){a=a||z;var d=b?[].concat(b):[];X(a,d)};var Ca=/\{\{[^}]*\}\}|\sms-/,Ba=avalon.oneObject("area,base,basefont,br,col,hr,img,input,link,meta,param,embed,wbr,script,style,textarea"),Da=/([^{]*)\{\{/,Ea=/([^}]*)\}\}/,S=avalon.oneObject("a,abbr,b,span,strong,em,font,i,kbd","inline");avalon.mix(S,avalon.oneObject("div,h1,h2,h3,h4,h5,h6,section,p","block"));I.setAttribute("className","t");var Oa="t"===I.className,ua=
{"class":"className","for":"htmlFor"},r=avalon.bindingHandlers={"if":function(a,b){var d=v.createComment("@"),c=a.element.parentNode;p(a.value,b,a,function(a,b){if(a){if(!b.parentNode||11===b.parentNode.nodeType)c.replaceChild(b,d),b.noRemove=0}else b.parentNode&&1===b.parentNode.nodeType&&(c.replaceChild(d,b),b.noRemove=1)})},template:function(a,b){p(a.value,b,a,function(b,c){var e=a.args.join("-"),f=v.getElementById(e);f&&b.$json&&J(function(){c.innerHTML=f.text;avalon.scan(c,b)})})},attr:function(a,
b){a.remove=!1;p(a.value,b,a,function(b,c){var e=a.node.name,f=!1===b||null===b||void 0===b;f&&c.removeAttribute(e);Oa&&e in ua?(e=ua[e],f?c.removeAttribute(e):c[e]=b):f||c.setAttribute(e,b)})},on:function(a,b){p(a.value,b,a,function(d,c){var e=a.args[0];e&&"function"===typeof d&&(c.$scopes||(c.$scope=b[0],c.$scopes=b),avalon.bind(c,e,d))})},data:function(a,b){p(a.value,b,a,function(b,c){var e="data-"+a.args.join("-");c.setAttribute(e,b)})},text:function(a,b){p(a.value,b,a,function(b){a.node.nodeValue=
b})},visible:function(a,b){p(a.value,b,a,function(a,b){var e=b.style,f;if(a){f=b.tagName;var g=void 0;f=f.toLowerCase();if(!S[f]){var h=v.createElement(f);z.appendChild(h);g=window.getComputedStyle?window.getComputedStyle(h,null).display:h.currentStyle.display;z.removeChild(h);S[f]=g}f=S[f]}else f="none";e.display=f})},href:function(a,b){var d=a.value.trim(),c=!0,e=a.type;-1<d.indexOf("{{")&&2<d.indexOf("}}")&&(c=!1,/^\{\{([^}]+)\}\}$/.test(d)&&(c=!0,d=RegExp.$1));p(d,b,a,function(b,d){"css"===e?
avalon(d).css(a.args.join("-"),b):d[e]=b},c?null:oa(a.value))},disabled:function(a,b){var d=a.type,c="readonly"===d?"readOnly":d;p(a.value,b,a,function(a,b){b[c]=!!a})},bind:function(a,b){for(var d=a.value.trim(),c=a.args[0],e=0,f;f=b[e++];)if(f.hasOwnProperty(d)){d=f[d];break}"function"===typeof d&&f.$watch(c,function(b,c){d.call(a.element,b,c)})},"class":function(a,b){p(a.value,b,a,function(d,c){var e=a.args.join("-");"function"===typeof d&&(c.$scopes||(c.$scope=b[0],c.$scopes=b),d=d.call(c));avalon(c).toggleClass(e,
!!d)})},hover:function(a){var b=avalon(a.element);b.bind("mouseenter",function(){b.addClass(a.value)});b.bind("mouseleave",function(){b.removeClass(a.value)})},active:function(a){var b=a.element,d=avalon(b);b.tabIndex=b.tabIndex||-1;d.bind("focus",function(){d.addClass(a.value)});d.bind("blur",function(){d.removeClass(a.value)})},html:function(a,b){p(a.value,b,a,function(b,c){b=null==b?"":b+"";if(a.replace){for(I.innerHTML=b;I.firstChild;)H.appendChild(I.firstChild);c.replaceChild(H,a.node)}else c.innerHTML=
b})},ui:function(a,b,d){var c=a.value.trim();if("function"===typeof avalon.ui[c]){var e=(avalon(a.element).data("id")||"").trim(),e=e||c+setTimeout("1");a.element.setAttribute(u+"controller",e);var f=a.args[0];if(f){for(var g=0,h;h=b[g++];)if(h.hasOwnProperty(f)){d=h[f];break}if(!d)for(g in avalon.models)if(h=avalon.models[g],h.hasOwnProperty(f)){d=h[f];break}}avalon.ui[c](a.element,e,d)}},options:function(a,b){var d=a.element;for("SELECT"!==d.tagName&&avalon.error("options\u7ed1\u5b9a\u53ea\u80fd\u7ed1\u5728SELECT\u5143\u7d20");0<
d.length;)d.remove(0);var c=a.args[0];p(a.value,b,a,function(e){Array.isArray(e)?J(function(){d.setAttribute(u+"each-option",a.value);var f=new Option("{{option}}","");f.setAttribute("ms-value","option");d.options[0]=f;avalon.scan(d);if(isFinite(c)&&(f=d.options[c]))f.selected=!0;f=b[0];if(c&&Array.isArray(f[c])){var g=avalon(d);g.val(f[c]);g.bind("change",function(){var a=g.val();e.clear();e.push.apply(e,a)})}}):avalon.error("options\u7ed1\u5b9a\u5fc5\u987b\u5bf9\u5e94\u4e00\u4e2a\u5b57\u7b26\u4e32\u6570\u7ec4")})}};
"checked,readonly,selected".replace(x,function(a){r[a]=r.disabled});r.enabled=function(a,b){p(a.value,b,a,function(a,b){b.disabled=!a})};"title,alt,src,value,css".replace(x,function(a){r[a]=r.href});var A=r.model=function(a,b){var d=a.element,c=d.tagName;if("function"===typeof A[c]){var e=pa(a.value.trim(),b);if(e)A[c](d,e[0],e[1])}};A.INPUT=function(a,b,d){void 0===a.name&&(a.name=L());var c=a.type,e=avalon(a),f=function(){!1!==e.data("observe")&&b(d,a.value)},g=function(){var c=b(d);c!==a.value&&
(a.value=c)};/^(password|textarea|text)$/.test(c)?(c=a.attributes[u+"event"]||{},c=c.value,"change"===c?avalon.bind(a,c,f):(window.addEventListener?a.addEventListener("input",f,!1):a.attachEvent("onpropertychange",f),9<=v.documentMode&&(a.attachEvent("onkeydown",function(a){a=a.keyCode;(8===a||46===a)&&f()}),a.attachEvent("oncut",f)))):"radio"===c?(g=function(){a.checked=!!b(d)},f=function(){if(!1!==e.data("observe")){var c=!a.beforeChecked;b(d,c);a.beforeChecked=a.checked=c}},c=function(){a.beforeChecked=
a.checked},null===a.onbeforeactivate?e.bind("beforeactivate",c):e.bind("mouseover",c),e.bind("click",f)):"checkbox"===c&&(f=function(){if(!1!==e.data("observe"))avalon.Array[a.checked?"ensure":"remove"](b(d),a.value)},g=function(){var c=[].concat(b(d));a.checked=0<=c.indexOf(a.value)},e.bind("click",f));t[q]=g;g.element=a;g();delete t[q]};A.SELECT=function(a,b,d,c){function e(){var a=b(d);a+""!==c&&(f.val(a),c=a+"")}var f=avalon(a);f.bind("change",function(){if(!1!==f.data("observe")){var a=f.val();
a+""!==c&&(b(d,a),c=a+"")}});t[q]=e;e.element=a;e();delete t[q]};A.TEXTAREA=A.INPUT;"dblclick,mouseout,click,mouseover,mouseenter,mouseleave,mousemove,mousedown,mouseup,keypress,keydown,keyup,blur,focus,change".replace(x,function(a){r[a]=function(b){b.args=[a];r.on.apply(0,arguments)}});if(!("onmouseenter"in z)){var va=avalon.bind,wa={mouseenter:"mouseover",mouseleave:"mouseout"};avalon.bind=function(a,b,d){return wa[b]?va(a,wa[b],function(c){var e=c.relatedTarget;if(!e||e!==a&&!(a.compareDocumentPosition(e)&
16))return delete c.type,c.type=b,d.call(a,c)}):va(a,b,d)}}r.each=function(a,b){function d(b,e,g){var m=f.$id,n=d.$models,s=c.firstChild;switch(b){case "set":(m=n[e[0]])&&(m[m.$itemName]=e[1]);break;case "push":B(e,function(b,c){ra(g+b,c,f,a,n)});break;case "unshift":Q(c,m,f.length-g);f.place=s;B(e,function(b,c){ra(b,c,f,a,n)});f.place=null;break;case "pop":if(e=$(c,g-1))aa(e,m+g),n.pop();break;case "shift":s&&aa(s,m+1);Q(c,m);n.shift();break;case "splice":b=e[0];var s=e[1],F=[].slice.call(e,2),p=
0<=s?s:g-b;if(p&&(e=$(c,b)))n.splice(b,p),aa(e,m+(b+s)),Q(c,m);F.length&&(f.place=$(c,b),d("push",F,b),Q(c,m),f.place=null);break;case "clear":n.length=0,Ga(c)}}var c=a.element,e=Z(a.value,b,a),f;"object"==typeof e&&(f=e[0].apply(e[0],e[1]));if("object"!==typeof f)return f;var e=H.cloneNode(!1),g=v.createComment(f.$id);for(e.appendChild(g);c.firstChild;)e.appendChild(c.firstChild);a.view=e;a.scopes=b;d.$models=[];(f||{}).isCollection&&f[y].push(d);d("push",f,0)};var ga=avalon.filters={uppercase:function(a){return a.toUpperCase()},
html:function(a){return a},lowercase:function(a){return a.toLowerCase()},truncate:function(a,b,d){b=b||30;d=void 0===d?"...":d;return a.length>b?a.slice(0,b-d.length)+d:String(a)},camelize:N,escape:function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")},currency:function(a,b){return(b||"\uffe5")+avalon.filters.number(a)},number:function(a,b,d,c){a=(a+"").replace(/[^0-9+\-Ee.]/g,"");a=!isFinite(+a)?0:+a;b=!isFinite(+b)?0:Math.abs(b);
c=c||",";d=d||".";var e="",e=function(a,b){var c=Math.pow(10,b);return""+Math.round(a*c)/c},e=(b?e(a,b):""+Math.round(a)).split(".");3<e[0].length&&(e[0]=e[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,c));if((e[1]||"").length<b)e[1]=e[1]||"",e[1]+=Array(b-e[1].length+1).join("0");return e.join(d)}};new function(){function a(a,b,c){var d="";0>a&&(d="-",a=-a);for(a=""+a;a.length<b;)a="0"+a;c&&(a=a.substr(a.length-b));return d+a}function b(b,c,d,e){return function(f){f=f["get"+b]();if(0<d||f>-d)f+=d;0===f&&
-12===d&&(f=12);return a(f,c,e)}}function d(a,b){return function(c,d){var e=c["get"+a](),f=(b?"SHORT"+a:a).toUpperCase();return d[f][e]}}function c(a){var b;if(b=a.match(h)){a=new Date(0);var c=0,d=0,e=b[8]?a.setUTCFullYear:a.setFullYear,f=b[8]?a.setUTCHours:a.setHours;b[9]&&(c=parseInt(b[9]+b[10],10),d=parseInt(b[9]+b[11],10));e.call(a,parseInt(b[1],10),parseInt(b[2],10)-1,parseInt(b[3],10));f.call(a,parseInt(b[4]||0,10)-c,parseInt(b[5]||0,10)-d,parseInt(b[6]||0,10),parseInt(b[7]||0,10))}return a}
var e={yyyy:b("FullYear",4),yy:b("FullYear",2,0,!0),y:b("FullYear",1),MMMM:d("Month"),MMM:d("Month",!0),MM:b("Month",2,1),M:b("Month",1,1),dd:b("Date",2),d:b("Date",1),HH:b("Hours",2),H:b("Hours",1),hh:b("Hours",2,-12),h:b("Hours",1,-12),mm:b("Minutes",2),m:b("Minutes",1),ss:b("Seconds",2),s:b("Seconds",1),sss:b("Milliseconds",3),EEEE:d("Day"),EEE:d("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(b){b=-1*b.getTimezoneOffset();return b=(0<=b?"+":"")+(a(Math[0<b?"floor":
"ceil"](b/60),2)+a(Math.abs(b%60),2))}},f=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,g=/^\d+$/,h=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;ga.date=function(a,b){var d=ga.date.locate,h="",l=[],p,q;b=b||"mediumDate";b=d[b]||b;"string"===typeof a&&(a=g.test(a)?parseInt(a,10):c(a));"Number"===avalon.type(a)&&(a=new Date(a));if("Date"===avalon.type(a)){for(;b;)(q=f.exec(b))?(l=l.concat(q.slice(1)),b=l.pop()):
(l.push(b),b=null);l.forEach(function(b){p=e[b];h+=p?p(a,d):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return h}};var l={AMPMS:{"0":"\u4e0a\u5348",1:"\u4e0b\u5348"},DAY:{"0":"\u661f\u671f\u65e5",1:"\u661f\u671f\u4e00",2:"\u661f\u671f\u4e8c",3:"\u661f\u671f\u4e09",4:"\u661f\u671f\u56db",5:"\u661f\u671f\u4e94",6:"\u661f\u671f\u516d"},MONTH:{"0":"1\u6708",1:"2\u6708",2:"3\u6708",3:"4\u6708",4:"5\u6708",5:"6\u6708",6:"7\u6708",7:"8\u6708",8:"9\u6708",9:"10\u6708",10:"11\u6708",11:"12\u6708"},SHORTDAY:{"0":"\u5468\u65e5",
1:"\u5468\u4e00",2:"\u5468\u4e8c",3:"\u5468\u4e09",4:"\u5468\u56db",5:"\u5468\u4e94",6:"\u5468\u516d"},fullDate:"y\u5e74M\u6708d\u65e5EEEE",longDate:"y\u5e74M\u6708d\u65e5",medium:"yyyy-M-d ah:mm:ss",mediumDate:"yyyy-M-d",mediumTime:"ah:mm:ss","short":"yy-M-d ah:mm",shortDate:"yy-M-d",shortTime:"ah:mm"};l.SHORTMONTH=l.MONTH;ga.date.locate=l};avalon.ready(function(){avalon.scan(document.body)})})(document);