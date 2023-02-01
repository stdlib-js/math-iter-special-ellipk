// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).iterEllipk=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,r=Object.defineProperty,e=Object.prototype,o=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,c=e.__lookupGetter__,f=e.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,n,r){var a,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((l="value"in r)&&(c.call(t,n)||f.call(t,n)?(a=t.__proto__,t.__proto__=e,delete t[n],t[n]=r.value,t.__proto__=a):t[n]=r.value),y="get"in r,p="set"in r,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,n,r.get),p&&i&&i.call(t,n,r.set),t};var a=n;function l(t,n,r){a(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var v="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return v&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,n){return null!=t&&d.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var n,r,e;if(null==t)return s.call(t);r=t[w],n=m(t,w);try{t[w]=void 0}catch(n){return s.call(t)}return e=s.call(t),n?t[w]=r:delete t[w],e}:function(t){return s.call(t)},A=Boolean.prototype.toString;var g=b();function _(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||_(t)}function O(){return new Function("return this;")()}l(h,"isPrimitive",p),l(h,"isObject",_);var U="object"==typeof self?self:null,S="object"==typeof window?window:null,E="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},N="object"==typeof E?E:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return O()}if(U)return U;if(S)return S;if(N)return N;throw new Error("unexpected error. Unable to resolve global object.")}(),F=T.document&&T.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;l(x,"REGEXP",I);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function B(t){return null!==t&&"object"==typeof t}function k(t){var n,r,e,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=I.exec(e.toString()))return n[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}l(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!V(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(B));var G="function"==typeof y||"object"==typeof P||"function"==typeof F?function(t){return k(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?k(t).toLowerCase():n};function C(t){return"function"===G(t)}function L(t){var n=typeof t;return null!==t&&("object"===n||"function"===n)&&C(t.next)}function M(t){return"number"==typeof t}var Y=Number,q=Y.prototype.toString;var R=b();function X(t){return"object"==typeof t&&(t instanceof Y||(R?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function z(t){return M(t)||X(t)}l(z,"isPrimitive",M),l(z,"isObject",X);var D="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var H,J=Object.getPrototypeOf;H=C(Object.getPrototypeOf)?J:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var K=H;var Q=Object.prototype;function W(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),K(t))}(t),!n||!m(t,"constructor")&&m(n,"constructor")&&C(n.constructor)&&"[object Function]"===j(n.constructor)&&m(n,"isPrototypeOf")&&C(n.isPrototypeOf)&&(n===Q||function(t){var n;for(n in t)if(!m(t,n))return!1;return!0}(t)))}function Z(t,n){return W(n)?(m(n,"invalid")&&(t.invalid=n.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+n+"`.")}function $(t,n,r){var e,o,u,i;if(!L(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!C(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(e={invalid:NaN},arguments.length>2&&(u=Z(e,r)))throw u;return l(o={},"next",c),l(o,"return",f),D&&C(t[D])&&l(o,D,a),o;function c(){var r;return i?{done:!0}:(r=t.next()).done?(i=!0,r):{value:M(r.value)?n(r.value):e.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function a(){return $(t[D](),n,e)}}var tt=Math.sqrt,nt="function"==typeof Uint32Array;var rt="function"==typeof Uint32Array?Uint32Array:null;var et,ot="function"==typeof Uint32Array?Uint32Array:void 0;et=function(){var t,n,r;if("function"!=typeof rt)return!1;try{n=new rt(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(nt&&r instanceof Uint32Array||"[object Uint32Array]"===j(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var ut=et,it="function"==typeof Float64Array;var ct="function"==typeof Float64Array?Float64Array:null;var ft,at="function"==typeof Float64Array?Float64Array:void 0;ft=function(){var t,n,r;if("function"!=typeof ct)return!1;try{n=new ct([1,3.14,-3.14,NaN]),r=n,t=(it&&r instanceof Float64Array||"[object Float64Array]"===j(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?at:function(){throw new Error("not implemented")};var lt=ft,yt="function"==typeof Uint8Array;var pt="function"==typeof Uint8Array?Uint8Array:null;var vt,bt="function"==typeof Uint8Array?Uint8Array:void 0;vt=function(){var t,n,r;if("function"!=typeof pt)return!1;try{n=new pt(n=[1,3.14,-3.14,256,257]),r=n,t=(yt&&r instanceof Uint8Array||"[object Uint8Array]"===j(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?bt:function(){throw new Error("not implemented")};var st=vt,dt="function"==typeof Uint16Array;var mt="function"==typeof Uint16Array?Uint16Array:null;var wt,jt="function"==typeof Uint16Array?Uint16Array:void 0;wt=function(){var t,n,r;if("function"!=typeof mt)return!1;try{n=new mt(n=[1,3.14,-3.14,65536,65537]),r=n,t=(dt&&r instanceof Uint16Array||"[object Uint16Array]"===j(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?jt:function(){throw new Error("not implemented")};var At,gt={uint16:wt,uint8:st};(At=new gt.uint16(1))[0]=4660;var _t=52===new gt.uint8(At.buffer)[0],ht=!0===_t?1:0,Ot=new lt(1),Ut=new ut(Ot.buffer);function St(t){return Ot[0]=t,Ut[ht]}var Et=!0===_t?1:0,Nt=new lt(1),Tt=new ut(Nt.buffer);var Ft=Y.NEGATIVE_INFINITY;var Pt=.6931471803691238,xt=1.9082149292705877e-10,It=1048575;function Vt(t){var n,r,e,o,u,i,c,f,a,l,y,p;return 0===t?Ft:function(t){return t!=t}(t)||t<0?NaN:(u=0,(r=St(t))<1048576&&(u-=54,r=St(t*=0x40000000000000)),r>=2146435072?t+t:(u+=(r>>20)-1023|0,u+=(f=(r&=It)+614244&1048576|0)>>20|0,c=(t=function(t,n){return Nt[0]=t,Tt[Et]=n>>>0,Nt[0]}(t,r|1072693248^f))-1,(It&2+r)<3?0===c?0===u?0:u*Pt+u*xt:(i=c*c*(.5-.3333333333333333*c),0===u?c-i:u*Pt-(i-u*xt-c)):(f=r-398458|0,a=440401-r|0,o=(y=(p=(l=c/(2+c))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),i=e+o,(f|=a)>0?(n=.5*c*c,0===u?c-(n-l*(n+i)):u*Pt-(n-(l*(n+i)+u*xt)-c)):0===u?c-l*(c-i):u*Pt-(l*(c-i)-u*xt-c))))}var Bt=Number.POSITIVE_INFINITY;function kt(t){var n,r,e,o,u,i;return i=t,t<0&&(i=t/(t-1),n=!0),0===i?1.5707963267948966:1===i?Bt:i>1?NaN:(i<.1?u=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(i-.05):i<.2?u=function(t){return 0===t?1.63525673226458:1.63525673226458+t*(.4711906261487323+t*(.3097284108314996+t*(.2522083117731357+t*(.22672562321968465+t*(.21577444672958598+t*(.21310877187734892+t*(.21602912460518828+t*(.2232558316330579+t*(.23418050129420992+t*(.24855768297226408+.26636380989261754*t))))))))))}(i-.15):i<.3?u=function(t){return 0===t?1.685750354812596:1.685750354812596+t*(.5417318486132803+t*(.40152443839069024+t*(.3696424734208891+t*(.37606071535458363+t*(.4052358870851259+t*(.45329438175399905+t*(.5205189476511842+t*(.609426039204995+t*(.7242635222829089+t*(.8710138477098124+1.057652872753547*t))))))))))}(i-.25):i<.4?u=function(t){return 0===t?1.7443505972256133:1.7443505972256133+t*(.6348642753719353+t*(.5398425641644455+t*(.5718927051937874+t*(.6702951362654062+t*(.8325865900109772+t*(1.0738574482479333+t*(1.4220914606754977+t*(1.9203871834023047+t*(2.6325525483316543+t*(3.6521097473190394+t*(5.115867135558866+7.224080007363877*t)))))))))))}(i-.35):i<.5?u=function(t){return 0===t?1.8138839368169826:1.8138839368169826+t*(.7631632457005573+t*(.7619286053215958+t*(.9510746536684279+t*(1.315180671703161+t*(1.9285606934774109+t*(2.9375093425313787+t*(4.594894405442878+t*(7.33007122188172+t*(11.871512597425301+t*(19.45851374822938+t*(32.20638657246427+t*(53.73749198700555+90.27388602941*t))))))))))))}(i-.45):i<.6?u=function(t){return 0===t?1.8989249102715535:1.8989249102715535+t*(.9505217946182445+t*(1.1510775899590158+t*(1.7502391069863006+t*(2.952676812636875+t*(5.285800396121451+t*(9.83248571665998+t*(18.787148683275596+t*(36.61468615273698+t*(72.45292395127771+t*(145.1079577347069+t*(293.4786396308497+t*(598.385181505501+t*(1228.4200130758634+2536.5297553827645*t)))))))))))))}(i-.55):i<.7?u=function(t){return 0===t?2.0075983984243764:2.0075983984243764+t*(1.2484572312123474+t*(1.9262346570764797+t*(3.7512896400875877+t*(8.119944554932045+t*(18.665721308735552+t*(44.603924842914374+t*(109.50920543094983+t*(274.2779548232414+t*(697.5598008606327+t*(1795.7160145002472+t*(4668.38171679039+t*(12235.762468136643+t*(32290.17809718321+t*(85713.07608195965+t*(228672.1890493117+612757.2711915852*t)))))))))))))))}(i-.65):i<.8?u=function(t){return 0===t?2.1565156474996434:2.1565156474996434+t*(1.7918056418494632+t*(3.8267512874657132+t*(10.386724683637972+t*(31.403314054680703+t*(100.92370394986955+t*(337.3268282632273+t*(1158.7079305678278+t*(4060.9907421936323+t*(14454.001840343448+t*(52076.661075994045+t*(189493.65914621568+t*(695184.5762413896+t*(2567994.048255285+t*(9541921.966748387+t*(35634927.44218076+t*(133669298.46120408+t*(503352186.68662846+t*(1901975729.53866+7208915015.330104*t))))))))))))))))))}(i-.75):i<.85?u=function(t){return 0===t?2.3181226217125106:2.3181226217125106+t*(2.6169201502912327+t*(7.897935075731356+t*(30.502397154466724+t*(131.48693655235286+t*(602.9847637356492+t*(2877.024617809973+t*(14110.519919151804+t*(70621.4408815654+t*(358977.266582531+t*(1847238.2637239718+t*(9600515.416049214+t*(50307677.08502367+t*(265444188.6527128+t*(1408862325.0287027+7515687935.373775*t))))))))))))))}(i-.825):i<.9?u=function(t){return 0===t?2.473596173751344:2.473596173751344+t*(3.727624244118099+t*(15.607393035549306+t*(84.12850842805888+t*(506.98181970406137+t*(3252.2770581451236+t*(21713.242419574344+t*(149037.04518909327+t*(1043999.3310899908+t*(7427974.817042039+t*(53503839.67558661+t*(389249886.99487084+t*(2855288351.1008105+t*(21090077038.76684+t*(156699833947.7902+t*(1170222242422.44+t*(8777948323668.9375+t*(66101242752484.95+t*(499488053713388.8+0x86813c6c7adde8*t))))))))))))))))))}(i-.875):(o=function(t){return 0===t?0:0+t*(.0625+t*(.03125+t*(.0205078125+t*(.01513671875+t*(.011934280395507812+t*(.009816169738769531+t*(.008315593004226685+t*(.007199153304100037+t*(.00633745662344154+t*(.00565311038371874+t*(.005097046040418718+t*(.004636680381850056+t*(.004249547423822886+.003919665602267974*t)))))))))))))}(e=1-i),r=function(t){return 0===t?1.5910034537907922:1.5910034537907922+t*(.41600074399178694+t*(.24579151426410342+t*(.17948148291490615+t*(.14455605708755515+t*(.12320099331242772+t*(.10893881157429353+t*(.09885340987159291+t*(.09143962920174975+t*(.0858425915954139+.08154111871830322*t)))))))))}(e-.05),u=-Vt(o)*(.3183098861837907*r)),n?u/tt(1-t):u)}return function(t){return $(t,kt)}}));
//# sourceMappingURL=browser.js.map