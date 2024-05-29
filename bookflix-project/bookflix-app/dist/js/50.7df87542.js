"use strict";(self["webpackChunkbookflix_app"]=self["webpackChunkbookflix_app"]||[]).push([[50],{7147:function(e,t,n){Object.defineProperty(t,"B",{value:!0});const a=n(8542),o=n(1175),l=a.__importDefault(n(5590)),r=a.__importDefault(n(2681));t.A=(0,o.defineComponent)({data(){return{particlesOptions1:l.default,particlesOptions2:r.default,container:""}},name:"particlesComponent",methods:{async particlesLoaded(e){this.container=e}},mounted(){this.particlesLoaded("someContainer")}})},5075:function(e,t,n){Object.defineProperty(t,"B",{value:!0});const a=n(8542),o=n(1175),l=a.__importDefault(n(1145));t.A=(0,o.defineComponent)({name:"HomePage",components:{particlesComponent:l.default}})},8828:function(e,t,n){t.X=void 0;const a=n(1175);function o(e,t,n,o,l,r){const i=(0,a.resolveComponent)("vue-particles");return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createVNode)(i,{id:"particles1",particlesLoaded:e.particlesLoaded,options:e.particlesOptions1},null,8,["particlesLoaded","options"]),(0,a.createVNode)(i,{id:"particles2",particlesLoaded:e.particlesLoaded,options:e.particlesOptions2},null,8,["particlesLoaded","options"])])}t.X=o},3277:function(e,t,n){t.X=void 0;const a=n(1175),o=e=>((0,a.pushScopeId)("data-v-308d66a9"),e=e(),(0,a.popScopeId)(),e),l={class:"home w-full min-h-screen lg:pt-28"},r={class:"flex w-[60%] absolute right-0 top-0"},i={class:"lg:justify-start lg:w-full lg:h-[40rem] h-screen items-center justify-center flex relative z-3"},s={class:"lg:w-[50%] flex flex-col items-center justify-center w-full"},c=o((()=>(0,a.createElementVNode)("h1",{class:"lg:text-5xl lg:mb-12 text-center font-bold tracking-wider leading-normal text-3xl mb-20"},[(0,a.createTextVNode)("¡BIENVENIDO A TU MUNDO"),(0,a.createElementVNode)("br"),(0,a.createElementVNode)("br"),(0,a.createTextVNode)("DE HISTORIAS SIN FIN!")],-1))),d=o((()=>(0,a.createElementVNode)("p",{class:"lg:text-2xl lg:text-center lg:mb-2 tracking-wider leading-normal text-justify w-[90%] mx-auto mb-10"},[(0,a.createElementVNode)("strong",null,"Descubre"),(0,a.createTextVNode)(" un mundo de lecturas en línea.")],-1))),u=o((()=>(0,a.createElementVNode)("p",{class:"lg:text-2xl lg:text-center tracking-wider leading-normal text-justify w-[90%] mx-auto mb-5"},[(0,a.createElementVNode)("strong",null,"Explora"),(0,a.createTextVNode)(", lee, repite: Tu viaje literario te espera.")],-1))),p={class:"lg:gap-x-28 flex mt-5 h-28 w-full items-center justify-center gap-x-12"},m=o((()=>(0,a.createElementVNode)("div",null,null,-1)));function f(e,t,n,o,f,b){const x=(0,a.resolveComponent)("particlesComponent"),v=(0,a.resolveComponent)("routerLink");return(0,a.openBlock)(),(0,a.createElementBlock)("div",l,[(0,a.createElementVNode)("div",r,[(0,a.createVNode)(x)]),(0,a.createElementVNode)("div",i,[(0,a.createElementVNode)("div",s,[c,d,u,(0,a.createElementVNode)("div",p,[(0,a.createVNode)(v,{to:"/login",class:"lg:px-10 lg:py-4 bg-[#C12C38] rounded-xl animation_per px-4 py-2"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Iniciar sesión")])),_:1}),(0,a.createVNode)(v,{to:"/registro",class:"lg:px-10 lg:py-4 border-2 border-[#40BFBC] rounded-xl px-4 py-2 animation_per bg-[#0c0c33]"},{default:(0,a.withCtx)((()=>[(0,a.createTextVNode)("Registrarse")])),_:1})])]),m])])}t.X=f},1145:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return o.B},default:function(){return i}});var a=n(8828),o=n(7147),l=n(1241);const r=(0,l.A)(o.A,[["render",a.X],["__scopeId","data-v-f2b03058"]]);var i=r},4050:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return o.B},default:function(){return i}});var a=n(3277),o=n(5075),l=n(1241);const r=(0,l.A)(o.A,[["render",a.X],["__scopeId","data-v-308d66a9"]]);var i=r},2681:function(e){e.exports=JSON.parse('{"fpsLimit":120,"interactivity":{"events":{"onClick":{"enable":true,"mode":"repulse"},"onHover":{"enable":true,"mode":"bubble"}},"modes":{"bubble":{"distance":400,"duration":2000,"opacity":1,"speed":6,"size":15},"push":{"quantity":1},"repulse":{"distance":200,"duration":0.4}}},"backgroundMask":{"composite":"out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"clear":true,"defaultThemes":{},"delay":0,"fullScreen":{"enable":true,"zIndex":0},"particles":{"color":{"value":"#00beb2"},"move":{"direction":"bottom-right","enable":true,"outModes":"out","random":false,"speed":3,"straight":false,"out_mode":"out","bounce":false},"number":{"density":{"enable":true},"value":10},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.3,"sync":true}},"shape":{"type":"circle"},"size":{"value":{"min":6,"max":12},"random":true,"anim":{"enable":false,"speed":40,"size_min":0.2,"sync":false}}},"detectRetina":true}')},5590:function(e){e.exports=JSON.parse('{"fpsLimit":120,"interactivity":{"events":{"onClick":{"enable":true,"mode":"repulse"},"onHover":{"enable":true,"mode":"bubble"}},"modes":{"bubble":{"distance":300,"duration":2,"opacity":1,"speed":6,"size":15},"push":{"quantity":2},"repulse":{"distance":200,"duration":0.4}}},"backgroundMask":{"composite":"out","cover":{"color":{"value":"#fff"},"opacity":1},"enable":false},"clear":true,"defaultThemes":{},"delay":0,"fullScreen":{"enable":true,"zIndex":0},"particles":{"color":{"value":"#E53544"},"move":{"direction":"bottom-right","enable":true,"outModes":"out","random":false,"speed":3,"straight":false,"out_mode":"out","bounce":false},"number":{"density":{"enable":true},"value":10},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0.3,"sync":true}},"shape":{"type":"circle"},"size":{"value":{"min":6,"max":12},"random":true,"anim":{"enable":false,"speed":40,"size_min":0.2,"sync":false}}},"detectRetina":true}')}}]);
//# sourceMappingURL=50.7df87542.js.map