// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterEllipk=t()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;var l=function(r,t,n){var e,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(r,t)||f.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,v="set"in n,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),v&&a&&a.call(r,t,n.set),r},y=e,v=l,p=n()?y:v;var b=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},s=b,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,g=_;var A=function(r){return g.call(r)},h=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&h.call(r,t)},E="function"==typeof Symbol?Symbol.toStringTag:"",U=O,S=E,P=_;var N=A,T=function(r){var t,n,e;if(null==r)return P.call(r);n=r[S],t=U(r,S);try{r[S]=void 0}catch(t){return P.call(r)}return e=P.call(r),t?r[S]=n:delete r[S],e},F=j()?T:N,x=Boolean.prototype.toString;var I=F,V=function(r){try{return x.call(r),!0}catch(r){return!1}},B=j();var k=function(r){return"object"==typeof r&&(r instanceof Boolean||(B?V(r):"[object Boolean]"===I(r)))},G=m,M=k;var C=s,L=function(r){return G(r)||M(r)},R=k;C(L,"isPrimitive",m),C(L,"isObject",R);var X=L;var Y=function(){return new Function("return this;")()},q="object"==typeof self?self:null,z="object"==typeof window?window:null,D="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},H="object"==typeof D?D:null;module.exports=H;var J=X.isPrimitive,K=Y,Q=q,W=z,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!J(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return K()}if(Q)return Q;if(W)return W;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},cr=ar;s(cr,"REGEXP",ar());var fr=cr,lr=F;var yr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},vr=yr;var pr=function(r){return null!==r&&"object"==typeof r};s(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!vr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var br=pr;var sr=F,dr=fr.REGEXP,mr=function(r){return br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=sr(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var gr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},Ar=function(r){return _r(r).toLowerCase()},hr=ir()?Ar:gr;var Or=function(r){return"function"===hr(r)},Er=Or;var Ur=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Er(r.next)};var Sr=function(r){return"number"==typeof r},Pr=Number,Nr=Pr.prototype.toString;var Tr=F,Fr=Pr,xr=function(r){try{return Nr.call(r),!0}catch(r){return!1}},Ir=j();var Vr=function(r){return"object"==typeof r&&(r instanceof Fr||(Ir?xr(r):"[object Number]"===Tr(r)))},Br=Sr,kr=Vr;var Gr=s,Mr=function(r){return Br(r)||kr(r)},Cr=Vr;Gr(Mr,"isPrimitive",Sr),Gr(Mr,"isObject",Cr);var Lr=Mr,Rr=O;var Xr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Rr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Yr=yr;var qr=function(r){return"object"==typeof r&&null!==r&&!Yr(r)},zr=Object.getPrototypeOf;var Dr=function(r){return r.__proto__},Hr=F,Jr=Dr;var Kr=function(r){var t=Jr(r);return t||null===t?t:"[object Function]"===Hr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Qr=zr,Wr=Kr,Zr=Or(Object.getPrototypeOf)?Qr:Wr;var $r=qr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ct=s,ft=Or,lt=Ur,yt=Lr.isPrimitive,vt=Xr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var bt=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ft(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ct(u={},"next",c),ct(u,"return",f),vt&&ft(t[vt])&&ct(u,vt,l),u;function c(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:yt(r.value)?n(r.value):o.invalid,done:!1}}function f(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[vt](),n,o)}},st=bt,dt=Math.sqrt,mt=F,wt="function"==typeof Uint32Array;var jt="function"==typeof Uint32Array?Uint32Array:null,_t=function(r){return wt&&r instanceof Uint32Array||"[object Uint32Array]"===mt(r)},gt=jt;var At=function(){var r,t;if("function"!=typeof gt)return!1;try{t=new gt(t=[1,3.14,-3.14,4294967296,4294967297]),r=_t(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ht="function"==typeof Uint32Array?Uint32Array:void 0,Ot=function(){throw new Error("not implemented")},Et=At()?ht:Ot,Ut=F,St="function"==typeof Float64Array;var Pt="function"==typeof Float64Array?Float64Array:null,Nt=function(r){return St&&r instanceof Float64Array||"[object Float64Array]"===Ut(r)},Tt=Pt;var Ft=function(){var r,t;if("function"!=typeof Tt)return!1;try{t=new Tt([1,3.14,-3.14,NaN]),r=Nt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var xt="function"==typeof Float64Array?Float64Array:void 0,It=function(){throw new Error("not implemented")},Vt=Ft()?xt:It,Bt=F,kt="function"==typeof Uint8Array;var Gt="function"==typeof Uint8Array?Uint8Array:null,Mt=function(r){return kt&&r instanceof Uint8Array||"[object Uint8Array]"===Bt(r)},Ct=Gt;var Lt=function(){var r,t;if("function"!=typeof Ct)return!1;try{t=new Ct(t=[1,3.14,-3.14,256,257]),r=Mt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Rt="function"==typeof Uint8Array?Uint8Array:void 0,Xt=function(){throw new Error("not implemented")},Yt=Lt()?Rt:Xt,qt=F,zt="function"==typeof Uint16Array;var Dt="function"==typeof Uint16Array?Uint16Array:null,Ht=function(r){return zt&&r instanceof Uint16Array||"[object Uint16Array]"===qt(r)},Jt=Dt;var Kt=function(){var r,t;if("function"!=typeof Jt)return!1;try{t=new Jt(t=[1,3.14,-3.14,65536,65537]),r=Ht(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Qt,Wt="function"==typeof Uint16Array?Uint16Array:void 0,Zt=function(){throw new Error("not implemented")},$t={uint16:Kt()?Wt:Zt,uint8:Yt};(Qt=new $t.uint16(1))[0]=4660;var rn=52===new $t.uint8(Qt.buffer)[0],tn=Et,nn=!0===rn?1:0,en=new Vt(1),on=new tn(en.buffer);var un=function(r){return en[0]=r,on[nn]},an=Et,cn=!0===rn?1:0,fn=new Vt(1),ln=new an(fn.buffer);var yn=function(r,t){return fn[0]=r,ln[cn]=t>>>0,fn[0]},vn=yn;var pn=function(r){return r!=r},bn=Pr.NEGATIVE_INFINITY;var sn=un,dn=vn,mn=pn,wn=bn,jn=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},_n=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},gn=.6931471803691238,An=1.9082149292705877e-10,hn=1048575;var On=function(r){var t,n,e,o,u,i,a,c,f,l,y;return 0===r?wn:mn(r)||r<0?NaN:(o=0,(n=sn(r))<1048576&&(o-=54,n=sn(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(a=(n&=hn)+614244&1048576|0)>>20|0,i=(r=dn(r,n|1072693248^a))-1,(hn&2+n)<3?0===i?0===o?0:o*gn+o*An:(u=i*i*(.5-.3333333333333333*i),0===o?i-u:o*gn-(u-o*An-i)):(a=n-398458|0,c=440401-n|0,e=(l=(y=(f=i/(2+i))*f)*y)*jn(l),u=y*_n(l)+e,(a|=c)>0?(t=.5*i*i,0===o?i-(t-f*(t+u)):o*gn-(t-(f*(t+u)+o*An)-i)):0===o?i-f*(i-u):o*gn-(f*(i-u)-o*An-i))))},En=On,Un=Number.POSITIVE_INFINITY;var Sn=dt,Pn=En,Nn=Un,Tn=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))},Fn=function(r){return 0===r?1.63525673226458:1.63525673226458+r*(.4711906261487323+r*(.3097284108314996+r*(.2522083117731357+r*(.22672562321968465+r*(.21577444672958598+r*(.21310877187734892+r*(.21602912460518828+r*(.2232558316330579+r*(.23418050129420992+r*(.24855768297226408+.26636380989261754*r))))))))))},xn=function(r){return 0===r?1.685750354812596:1.685750354812596+r*(.5417318486132803+r*(.40152443839069024+r*(.3696424734208891+r*(.37606071535458363+r*(.4052358870851259+r*(.45329438175399905+r*(.5205189476511842+r*(.609426039204995+r*(.7242635222829089+r*(.8710138477098124+1.057652872753547*r))))))))))},In=function(r){return 0===r?1.7443505972256133:1.7443505972256133+r*(.6348642753719353+r*(.5398425641644455+r*(.5718927051937874+r*(.6702951362654062+r*(.8325865900109772+r*(1.0738574482479333+r*(1.4220914606754977+r*(1.9203871834023047+r*(2.6325525483316543+r*(3.6521097473190394+r*(5.115867135558866+7.224080007363877*r)))))))))))},Vn=function(r){return 0===r?1.8138839368169826:1.8138839368169826+r*(.7631632457005573+r*(.7619286053215958+r*(.9510746536684279+r*(1.315180671703161+r*(1.9285606934774109+r*(2.9375093425313787+r*(4.594894405442878+r*(7.33007122188172+r*(11.871512597425301+r*(19.45851374822938+r*(32.20638657246427+r*(53.73749198700555+90.27388602941*r))))))))))))},Bn=function(r){return 0===r?1.8989249102715535:1.8989249102715535+r*(.9505217946182445+r*(1.1510775899590158+r*(1.7502391069863006+r*(2.952676812636875+r*(5.285800396121451+r*(9.83248571665998+r*(18.787148683275596+r*(36.61468615273698+r*(72.45292395127771+r*(145.1079577347069+r*(293.4786396308497+r*(598.385181505501+r*(1228.4200130758634+2536.5297553827645*r)))))))))))))},kn=function(r){return 0===r?2.0075983984243764:2.0075983984243764+r*(1.2484572312123474+r*(1.9262346570764797+r*(3.7512896400875877+r*(8.119944554932045+r*(18.665721308735552+r*(44.603924842914374+r*(109.50920543094983+r*(274.2779548232414+r*(697.5598008606327+r*(1795.7160145002472+r*(4668.38171679039+r*(12235.762468136643+r*(32290.17809718321+r*(85713.07608195965+r*(228672.1890493117+612757.2711915852*r)))))))))))))))},Gn=function(r){return 0===r?2.1565156474996434:2.1565156474996434+r*(1.7918056418494632+r*(3.8267512874657132+r*(10.386724683637972+r*(31.403314054680703+r*(100.92370394986955+r*(337.3268282632273+r*(1158.7079305678278+r*(4060.9907421936323+r*(14454.001840343448+r*(52076.661075994045+r*(189493.65914621568+r*(695184.5762413896+r*(2567994.048255285+r*(9541921.966748387+r*(35634927.44218076+r*(133669298.46120408+r*(503352186.68662846+r*(1901975729.53866+7208915015.330104*r))))))))))))))))))},Mn=function(r){return 0===r?2.3181226217125106:2.3181226217125106+r*(2.6169201502912327+r*(7.897935075731356+r*(30.502397154466724+r*(131.48693655235286+r*(602.9847637356492+r*(2877.024617809973+r*(14110.519919151804+r*(70621.4408815654+r*(358977.266582531+r*(1847238.2637239718+r*(9600515.416049214+r*(50307677.08502367+r*(265444188.6527128+r*(1408862325.0287027+7515687935.373775*r))))))))))))))},Cn=function(r){return 0===r?2.473596173751344:2.473596173751344+r*(3.727624244118099+r*(15.607393035549306+r*(84.12850842805888+r*(506.98181970406137+r*(3252.2770581451236+r*(21713.242419574344+r*(149037.04518909327+r*(1043999.3310899908+r*(7427974.817042039+r*(53503839.67558661+r*(389249886.99487084+r*(2855288351.1008105+r*(21090077038.76684+r*(156699833947.7902+r*(1170222242422.44+r*(8777948323668.9375+r*(66101242752484.95+r*(499488053713388.8+0x86813c6c7adde8*r))))))))))))))))))},Ln=function(r){return 0===r?0:0+r*(.0625+r*(.03125+r*(.0205078125+r*(.01513671875+r*(.011934280395507812+r*(.009816169738769531+r*(.008315593004226685+r*(.007199153304100037+r*(.00633745662344154+r*(.00565311038371874+r*(.005097046040418718+r*(.004636680381850056+r*(.004249547423822886+.003919665602267974*r)))))))))))))},Rn=function(r){return 0===r?1.5910034537907922:1.5910034537907922+r*(.41600074399178694+r*(.24579151426410342+r*(.17948148291490615+r*(.14455605708755515+r*(.12320099331242772+r*(.10893881157429353+r*(.09885340987159291+r*(.09143962920174975+r*(.0858425915954139+.08154111871830322*r)))))))))};var Xn=function(r){var t,n,e,o,u,i;return i=r,r<0&&(i=r/(r-1),t=!0),0===i?1.5707963267948966:1===i?Nn:i>1?NaN:(i<.1?u=Tn(i-.05):i<.2?u=Fn(i-.15):i<.3?u=xn(i-.25):i<.4?u=In(i-.35):i<.5?u=Vn(i-.45):i<.6?u=Bn(i-.55):i<.7?u=kn(i-.65):i<.8?u=Gn(i-.75):i<.85?u=Mn(i-.825):i<.9?u=Cn(i-.875):(o=Ln(e=1-i),n=Rn(e-.05),u=-Pn(o)*(.3183098861837907*n)),t?u/Sn(1-r):u)},Yn=st,qn=Xn;var zn=function(r){return Yn(r,qn)};return zn}));
//# sourceMappingURL=bundle.js.map
