(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"04d6":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),c=r("5502"),s=function(e){return Object(n["y"])("data-v-3d92e1a0"),e=e(),Object(n["w"])(),e},l={class:"shadow-sm"},o={class:"flex items-center justify-between h-16 max-w-screen-xl px-4 py-12 mx-auto"},a=s((function(){return Object(n["h"])("div",{class:"flex flex-1 w-0 lg:hidden"},[Object(n["h"])("button",{class:"p-2 text-gray-600 bg-gray-100 rounded-full",type:"button"},[Object(n["h"])("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewbox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})])])],-1)})),i={class:"w-24 h-12"},b=["src"],d=s((function(){return Object(n["h"])("nav",{class:"items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"},[Object(n["h"])("a",{class:"py-1 font-bold text-gray-900 border-b-2 border-black",href:""},"홈 HOME"),Object(n["h"])("a",{class:"font-bold text-gray-900",href:""},"브오디 VOD")],-1)})),u=s((function(){return Object(n["h"])("div",{class:"flex items-center space-x-4"},[Object(n["h"])("form",{class:"hidden mb-0 lg:flex"},[Object(n["h"])("div",{class:"relative"},[Object(n["h"])("input",{class:"h-10 pr-10 text-sm border-b border-black focus:z-10",type:"text"}),Object(n["h"])("button",{class:"absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg",type:"submit"},[Object(n["h"])("svg",{class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{"clip-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","fill-rule":"evenodd"})])])])])],-1)})),h=s((function(){return Object(n["h"])("div",{class:"flex justify-end flex-1 w-0 lg:hidden"},[Object(n["h"])("button",{class:"p-2 text-gray-500 bg-gray-100 rounded-full",type:"button"},[Object(n["h"])("svg",{class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{"clip-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","fill-rule":"evenodd"})])])],-1)})),j=s((function(){return Object(n["h"])("nav",{class:"items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"},[Object(n["h"])("a",{class:"text-gray-900",href:""},"튜터등록"),Object(n["h"])("a",{class:"text-gray-900",href:""},"로그인")],-1)})),p={class:"max-w-screen-xl px-4 mx-auto py-36"},O={class:"max-w-md mx-auto"},f={action:"",class:"block p-8 overflow-hidden border border-gray-100 rounded-lg shadow-sm"},w=s((function(){return Object(n["h"])("p",{class:"text-2xl font-thin"},[Object(n["j"])(" 간편하게 로그인하고 탈잉의 "),Object(n["h"])("br"),Object(n["j"])(" 다양한 튜터를 만나보세요. ")],-1)})),x={class:"my-14"},m={class:"relative mt-1"},g=s((function(){return Object(n["h"])("span",{class:"absolute inset-y-0 inline-flex items-center right-4"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})])],-1)})),v={class:"relative mt-1"},y=s((function(){return Object(n["h"])("span",{class:"absolute inset-y-0 inline-flex items-center right-4"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})])],-1)})),k=["onClick"],M=Object(n["j"])("회원가입"),z=Object(n["l"])({setup:function(e){var t=Object(c["b"])(),s=Object(n["z"])({email:"",password:""}),z=function(){t.dispatch("login",Object(n["G"])(s))};return function(e,t){var c=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("header",l,[Object(n["h"])("div",o,[a,Object(n["h"])("h1",i,[Object(n["k"])(c,{to:"/"},{default:Object(n["L"])((function(){return[Object(n["h"])("img",{src:r("9d64"),alt:"탈잉TM"},null,8,b)]})),_:1})]),d,u,h,j])]),Object(n["h"])("div",p,[Object(n["h"])("div",O,[Object(n["h"])("form",f,[w,Object(n["h"])("div",x,[Object(n["h"])("div",m,[Object(n["M"])(Object(n["h"])("input",{type:"email",id:"email","onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(n["H"])(s).email=e}),class:"w-full p-4 pr-12 text-sm border-b border-gray-200",placeholder:"이메일 주소를 입력해주세요"},null,512),[[n["I"],Object(n["H"])(s).email]]),g]),Object(n["h"])("div",v,[Object(n["M"])(Object(n["h"])("input",{type:"password",id:"password","onUpdate:modelValue":t[1]||(t[1]=function(e){return Object(n["H"])(s).password=e}),class:"w-full p-4 pr-12 text-sm border-b border-gray-200",placeholder:"비밀번호를 입력해주세요"},null,512),[[n["I"],Object(n["H"])(s).password]]),y])]),Object(n["h"])("button",{type:"button",class:"btn_login",onClick:Object(n["N"])(z,["prevent"])},"로그인하기",8,k),Object(n["k"])(c,{to:"/login-join",class:"text-sm text-center text-gray-500"},{default:Object(n["L"])((function(){return[M]})),_:1})])])])],64)}}}),C=(r("bb02"),r("6b0d")),H=r.n(C);const _=H()(z,[["__scopeId","data-v-3d92e1a0"]]);t["default"]=_},"286e":function(e,t,r){},"55e1":function(e,t,r){"use strict";r("724f")},"724f":function(e,t,r){},"9d64":function(e,t,r){e.exports=r.p+"img/logo.48955d65.png"},a2a0:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),c=r("5502"),s=function(e){return Object(n["y"])("data-v-9bc94a02"),e=e(),Object(n["w"])(),e},l={class:"shadow-sm"},o={class:"flex items-center justify-between h-16 max-w-screen-xl px-4 py-12 mx-auto"},a=s((function(){return Object(n["h"])("div",{class:"flex flex-1 w-0 lg:hidden"},[Object(n["h"])("button",{class:"p-2 text-gray-600 bg-gray-100 rounded-full",type:"button"},[Object(n["h"])("svg",{class:"w-5 h-5",fill:"none",stroke:"currentColor",viewbox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"})])])],-1)})),i={class:"w-24 h-12"},b=["src"],d=s((function(){return Object(n["h"])("nav",{class:"items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"},[Object(n["h"])("a",{class:"py-1 font-bold text-gray-900 border-b-2 border-black",href:""},"홈 HOME"),Object(n["h"])("a",{class:"font-bold text-gray-900",href:""},"브오디 VOD")],-1)})),u=s((function(){return Object(n["h"])("div",{class:"flex items-center space-x-4"},[Object(n["h"])("form",{class:"hidden mb-0 lg:flex"},[Object(n["h"])("div",{class:"relative"},[Object(n["h"])("input",{class:"h-10 pr-10 text-sm border-b border-black focus:z-10",type:"text"}),Object(n["h"])("button",{class:"absolute inset-y-0 right-0 p-2 mr-px text-gray-600 rounded-r-lg",type:"submit"},[Object(n["h"])("svg",{class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{"clip-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","fill-rule":"evenodd"})])])])])],-1)})),h=s((function(){return Object(n["h"])("div",{class:"flex justify-end flex-1 w-0 lg:hidden"},[Object(n["h"])("button",{class:"p-2 text-gray-500 bg-gray-100 rounded-full",type:"button"},[Object(n["h"])("svg",{class:"w-5 h-5",fill:"currentColor",viewbox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(n["h"])("path",{"clip-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","fill-rule":"evenodd"})])])],-1)})),j=s((function(){return Object(n["h"])("nav",{class:"items-center justify-center hidden space-x-8 text-sm font-medium lg:flex lg:flex-1 lg:w-0"},[Object(n["h"])("a",{class:"text-gray-900",href:""},"튜터등록"),Object(n["h"])("a",{class:"text-gray-900",href:""},"로그인")],-1)})),p=s((function(){return Object(n["h"])("div",{class:"border-t border-gray-100 lg:hidden"},[Object(n["h"])("nav",{class:"flex items-center justify-center p-4 overflow-x-auto text-sm font-medium"},[Object(n["h"])("a",{class:"flex-shrink-0 pl-4 text-gray-900",href:""},"튜터등록"),Object(n["h"])("a",{class:"flex-shrink-0 pl-4 text-gray-900",href:""},"로그인")])],-1)})),O={class:"max-w-screen-xl px-4 mx-auto py-36"},f={class:"max-w-md mx-auto"},w={action:"",class:"block p-8 overflow-hidden border border-gray-100 rounded-lg shadow-sm"},x=s((function(){return Object(n["h"])("p",{class:"text-2xl font-thin"},[Object(n["j"])(" 간편하게 로그인하고 탈잉의 "),Object(n["h"])("br"),Object(n["j"])(" 다양한 튜터를 만나보세요. ")],-1)})),m={class:"my-14"},g={class:"relative mt-1"},v=s((function(){return Object(n["h"])("span",{class:"absolute inset-y-0 inline-flex items-center right-4"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"})])],-1)})),y={class:"relative mt-1"},k={class:"relative mt-1"},M=s((function(){return Object(n["h"])("span",{class:"absolute inset-y-0 inline-flex items-center right-4"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})])],-1)})),z={class:"relative mt-1"},C=s((function(){return Object(n["h"])("span",{class:"absolute inset-y-0 inline-flex items-center right-4"},[Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-5 h-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}),Object(n["h"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"})])],-1)})),H=Object(n["l"])({setup:function(e){var t=Object(c["b"])(),s=Object(n["z"])({name:"",email:"",password:"",password_confirmation:""}),H=function(){t.dispatch("join",Object(n["G"])(s))};return function(e,t){var c=Object(n["C"])("router-link");return Object(n["v"])(),Object(n["g"])(n["a"],null,[Object(n["h"])("header",l,[Object(n["h"])("div",o,[a,Object(n["h"])("h1",i,[Object(n["k"])(c,{to:"/"},{default:Object(n["L"])((function(){return[Object(n["h"])("img",{src:r("9d64"),alt:"탈잉TM"},null,8,b)]})),_:1})]),d,u,h,j]),p]),Object(n["h"])("div",O,[Object(n["h"])("div",f,[Object(n["h"])("form",w,[x,Object(n["h"])("div",m,[Object(n["h"])("div",g,[Object(n["M"])(Object(n["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(n["H"])(s).name=e}),type:"text",class:"w-full p-4 pr-12 text-sm border-b border-gray-200",placeholder:"이름(실명)을 입력해주세요"},null,512),[[n["I"],Object(n["H"])(s).name]]),v]),Object(n["h"])("div",y,[Object(n["M"])(Object(n["h"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return Object(n["H"])(s).email=e}),class:"w-full p-4 pr-12 text-sm border-b border-gray-200",placeholder:"이메일 주소를 입력해주세요"},null,512),[[n["I"],Object(n["H"])(s).email]])]),Object(n["h"])("div",k,[Object(n["M"])(Object(n["h"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return Object(n["H"])(s).password=e}),class:"w-full p-4 pr-12 text-sm border-b border-gray-200",placeholder:"비밀번호를 입력해주세요"},null,512),[[n["I"],Object(n["H"])(s).password]]),M]),Object(n["h"])("div",z,[Object(n["M"])(Object(n["h"])("input",{type:"password",id:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return Object(n["H"])(s).password_confirmation=e}),class:"w-full p-4 pr-12 text-sm border-b border-gray-200",placeholder:"비밀번호를 재입력해주세요"},null,512),[[n["I"],Object(n["H"])(s).password_confirmation]]),C])]),Object(n["h"])("button",{type:"button",class:"btn_join",onClick:H},"회원가입")])])])],64)}}}),_=(r("55e1"),r("6b0d")),V=r.n(_);const I=V()(H,[["__scopeId","data-v-9bc94a02"]]);t["default"]=I},bb02:function(e,t,r){"use strict";r("286e")}}]);
//# sourceMappingURL=login.b8e81225.js.map