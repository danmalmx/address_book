!function(e){var t={};function n(l){if(t[l])return t[l].exports;var r=t[l]={i:l,l:!1,exports:{}};return e[l].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(l,r,function(t){return e[t]}.bind(null,r));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var l=window.localStorage,r=function(){var e=JSON.parse(l.getItem("contacts")),t=document.querySelector(".contact-list");if(e){t.innerHTML="";var n=document.createElement("ul");n.className="list-reset",e.forEach(function(e){var t=document.createElement("li");t.innerHTML='\n        <br>\n        <div class="card bg-teal mx-auto max-w-lg shadow-lg rounded-lg overflow-hidden">\n        <div class="image lg:flex md:flex md:items-center sm:items-center px-4 py-2">\n          <img class="lg:content-center md:content-center block sm:content-center block h-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-2 sm:ml-0" src="https://lh3.googleusercontent.com/Y9fTQTS97Um1XW3vN9UNH_YNEol5BtjoeLlkqWamegZn7yCDXG5CxHA1Dd37oDa4tQAl39S4t0Fl4A_Rqz9exNSSs2DOgQsqdoJnnIGK-2jLmbEntVFqDMysEldee1tbE3Y1m_BboZCB_Alw2WgxSCOoWOXK8lZZ5ikyqjCWa4l9_5KP-gGC8ddokgF5SRu2qPaXeZhe68Sx00pPiUvF4P4-bSdpf5O6Vrs8NrobFaHvBYzz-1o7jTsziffa8HKe5W_HIK_UQ88t0driJSK9GNtYcmh2D0B_uAITbU8W6hf4Vw6Utb8U3sDCp5lCE8WGiRDvqK_TBx0K6bxuXRtFa9OdIilC2l7Q2vxXY76RkZLgjIIX3Oh4qsngfCHfXrszB2lLOBcS62r98asR7DoxXLMXC0547oT0FbTAlZpm3ElUqryIvWsPOytdezwqGwY1ujxpyTwQ1yXRJKi4p3dQY1lNb56zbQ8LUL7UbJlutNmZY-bpcxoOPlx6rvjRnMYI9NzJhl_Ek0woksDYUmSF1UjhUDDOKOFh1GIYQSmvo8MCE5vSvKSh2JxxHcI1itDnwTRlkSewPxualXplD9jfMNIvceli4hMHpxeJKIzG1lwz7znWxnCJ2K5mNjKLRPJW=s766-no" alt="image" />\n          <div class="text-center sm:text-left sm:flex-grow">            \n        <div class="content mb-2 pt-2">\n          <h1 class="lg:flex- align-middle md:item-right align-middle sm:align-middle text-md leading-tight">'+e.name+'</h1>\n          <h2 class="text-sm leading-tight text-grey-darkest">'+e.company+'</h2>\n          <p class="text-sm leading-tight text-grey-darkest">'+e.notes+'</p> \n          <p class="text-sm leading-tight text-grey-darkest">'+e.email+' | \n          <a class="text-sm leading-tight text-grey-darkest" href="https://www.twitter.com/'+e.twitter+'">@'+e.twitter+"</a>\n        </div>\n      </div>\n       ",n.appendChild(t),t.className="list-reset pt-1"}),t.appendChild(n)}else t.innerHTML='<p class="text-white text-lg pt-2 ">You have no contacts in your address book</p>'};document.addEventListener("DOMContentLoaded",function(){r();var e=document.querySelector(".new-contact-form");e.addEventListener("submit",function(t){t.preventDefault();var n=e.elements,o=n.name,a=n.email,s=n.phone,i=n.company,c=n.notes,d=n.twitter,m={id:Date.now(),name:o.value,email:a.value,phone:s.value,company:i.value,notes:c.value,twitter:d.value};console.log("Saving the following contact: "+JSON.stringify(m));var u=JSON.parse(l.getItem("contacts"))||[];u.push(m),l.setItem("contacts",JSON.stringify(u)),r(),e.reset()})})}]);