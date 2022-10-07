"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[712],{8712:function(e,s,a){a.r(s),a.d(s,{default:function(){return h}});var r=a(4165),t=a(5861),c=a(885),o=a(2791),l=a(4569),n=a.n(l),i=a(7689),d=a(1830),u=a.n(d),m=a(184);function h(e){var s=(0,o.useState)(!1),a=(0,c.Z)(s,2),l=a[0],d=a[1],h=(0,i.s0)(),p=function(e){var s,a=e.target,r=a.value,t=a.parentElement.querySelector(".error");switch(e.target.id){case"email":s=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;break;case"password":s=/^([a-zA-Z0-9@*#]{8,30})$/}s.test(r)?t.classList.remove("d-block"):t.classList.add("d-block")},f=function(){var s=(0,t.Z)((0,r.Z)().mark((function s(a){var t;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return d(!0),s.next=3,n().post("https://api.escuelajs.co/api/v1/users/is-available",a);case 3:if(t=s.sent,t.data.isAvailable){s.next=10;break}return s.next=8,n().post("https://api.escuelajs.co/api/v1/auth/login",a).then((function(s){localStorage.setItem("token",s.data.access_token),e.setLoggedIn(!0),h("/home")})).catch((function(e){u().fire({icon:"error",title:"Error",text:"Password is Not Correct!",footer:'<a href="">Why do I have this issue?</a>'})}));case 8:s.next=11;break;case 10:u().fire({icon:"error",title:"Error",text:"Email is Not Registered!",footer:'<a href="">Why do I have this issue?</a>'});case 11:d(!1);case 12:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"container p-5 border my-4 rounded",children:[(0,m.jsx)("h1",{className:"secondary-color",children:"Login"}),(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault();for(var s,a,r={email:document.querySelector("#email").value,password:document.querySelector("#password").value},t=!0,c=document.querySelectorAll("input"),o=document.querySelectorAll(".error"),l=0;l<c.length;l++){switch(a=c[l].value,c[l].id){case"email":s=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;break;case"password":s=/^([a-zA-Z0-9@*#]{8,30})$/}s.test(a)?o[l].classList.remove("d-block"):(o[l].classList.add("d-block"),t=!1)}t&&f(r)},children:[(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"email",className:"form-label",children:"Email address"}),(0,m.jsx)("input",{onChange:p,type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp"}),(0,m.jsx)("div",{className:"error",children:"email must be for ex : email@example.com"}),(0,m.jsx)("div",{className:"success",children:"success"})]}),(0,m.jsxs)("div",{className:"mb-3",children:[(0,m.jsx)("label",{htmlFor:"password",className:"form-label",children:"Password"}),(0,m.jsx)("input",{onChange:p,type:"password",className:"form-control",id:"password"}),(0,m.jsx)("div",{className:"error",children:"password must be between 8 to 30 characters"}),(0,m.jsx)("div",{className:"success",children:"success"})]}),(0,m.jsx)("button",{type:"submit",className:"btn btn-secondary mt-3",children:l?(0,m.jsx)("i",{className:"fa-solid fa-spinner fa-spin"}):"Sign In"})]})]})}}}]);
//# sourceMappingURL=712.2e0a8607.chunk.js.map