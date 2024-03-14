(function(){"use strict";var e={2390:function(e,n,o){var t=o(5130),r=o(6768),i=o(4232);const u={key:0},a={key:1};function s(e,n,o,t,s,l){const p=(0,r.g2)("login-form"),c=(0,r.g2)("signup-form");return s.isLoggedIn?((0,r.uX)(),(0,r.CE)("div",a,[(0,r.Lk)("h2",null,"welcome "+(0,i.v_)(s.displayName),1),(0,r.Lk)("button",{onClick:n[4]||(n[4]=(...e)=>l.logOut&&l.logOut(...e))},"Sign Out")])):((0,r.uX)(),(0,r.CE)("div",u,[s.showLogin?((0,r.uX)(),(0,r.CE)(r.FK,{key:0},[(0,r.bF)(p,{onLoggedIn:n[0]||(n[0]=e=>s.isLoggedIn=!0)}),(0,r.Lk)("p",null,[(0,r.eW)(" No account yet? "),(0,r.Lk)("span",{onClick:n[1]||(n[1]=e=>s.showLogin=!1)},"Sign up"),(0,r.eW)(" instead. ")])],64)):((0,r.uX)(),(0,r.CE)(r.FK,{key:1},[(0,r.bF)(c,{onLoggedIn:n[2]||(n[2]=e=>s.isLoggedIn=!0)}),(0,r.Lk)("p",null,[(0,r.eW)(" Already registered? "),(0,r.Lk)("span",{onClick:n[3]||(n[3]=e=>s.showLogin=!0)},"Login"),(0,r.eW)(" instead. ")])],64))]))}const l=(0,r.Lk)("h2",null,"Sign up",-1),p=(0,r.Lk)("button",{type:"submit"},"Sign up",-1);function c(e,n,o,i,u,a){return(0,r.uX)(),(0,r.CE)("form",{onSubmit:n[3]||(n[3]=(0,t.D$)(((...e)=>a.signUp&&a.signUp(...e)),["prevent"]))},[l,(0,r.bo)((0,r.Lk)("input",{type:"text",placeholder:"Username",required:"","onUpdate:modelValue":n[0]||(n[0]=e=>u.username=e)},null,512),[[t.Jo,u.username]]),(0,r.bo)((0,r.Lk)("input",{type:"email",placeholder:"Email",required:"","onUpdate:modelValue":n[1]||(n[1]=e=>u.email=e)},null,512),[[t.Jo,u.email]]),(0,r.bo)((0,r.Lk)("input",{type:"password",placeholder:"Password",required:"","onUpdate:modelValue":n[2]||(n[2]=e=>u.password=e)},null,512),[[t.Jo,u.password]]),p],32)}var d=o(8238),g=o(6400),m=o(9675);const f={apiKey:"AIzaSyDWJ2ZpiQlnunEXKL42U_fARmyLrTUMHbQ",authDomain:"imoney-90c7b.firebaseapp.com",projectId:"imoney-90c7b",storageBucket:"imoney-90c7b.appspot.com",messagingSenderId:"249116298857",appId:"1:249116298857:web:5cb2145b1c1e98eaf65cf8",measurementId:"G-8FWH2C474R"};(0,g.Wp)(f);(0,m.aU)();const h=(0,d.xI)();var b={emits:["loggedIn"],data(){return{username:"",email:"",password:""}},methods:{signUp(){(0,d.eJ)(h,this.email,this.password).then((e=>{console.log(e.user)})).catch((e=>{console.log(e.message)}))}}},y=o(1241);const L=(0,y.A)(b,[["render",c]]);var v=L;const k=(0,r.Lk)("h2",null,"Log in",-1),w=(0,r.Lk)("button",null,"Log in",-1);function I(e,n,o,i,u,a){return(0,r.uX)(),(0,r.CE)("form",{onSubmit:n[2]||(n[2]=(0,t.D$)(((...e)=>a.login&&a.login(...e)),["prevent"]))},[k,(0,r.bo)((0,r.Lk)("input",{type:"email",placeholder:"Email",required:"","onUpdate:modelValue":n[0]||(n[0]=e=>u.email=e)},null,512),[[t.Jo,u.email]]),(0,r.bo)((0,r.Lk)("input",{type:"password",placeholder:"Password",required:"","onUpdate:modelValue":n[1]||(n[1]=e=>u.password=e)},null,512),[[t.Jo,u.password]]),w],32)}var U={data(){return{email:"",password:""}},methods:{login(){(0,d.x9)(h,this.email,this.password).then((()=>{this.$emit("loggedIn")}))}}};const O=(0,y.A)(U,[["render",I]]);var C=O,E={components:{SignupForm:v,LoginForm:C},data(){return{isLoggedIn:!1,showLogin:!1,displayName:""}},beforeUpdate(){h.currentUser&&(console.log(h.currentUser),this.displayName=h.currentUser.displayName)},methods:{logOut(){(0,d.CI)(h).then((()=>{console.log(this.displayName),this.isLoggedIn=!1}))}}};const S=(0,y.A)(E,[["render",s]]);var x=S;(0,t.Ef)(x).mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,i){if(!t){var u=1/0;for(p=0;p<e.length;p++){t=e[p][0],r=e[p][1],i=e[p][2];for(var a=!0,s=0;s<t.length;s++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[s])}))?t.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(p--,1);var l=r();void 0!==l&&(n=l)}}return n}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[t,r,i]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,u=t[0],a=t[1],s=t[2],l=0;if(u.some((function(n){return 0!==e[n]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var p=s(o)}for(n&&n(t);l<u.length;l++)i=u[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(p)},t=self["webpackChunki_money"]=self["webpackChunki_money"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(2390)}));t=o.O(t)})();
//# sourceMappingURL=app.64abf10e.js.map