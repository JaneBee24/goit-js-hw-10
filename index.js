import"./assets/1-timer-C9mxgqZa.js";/* empty css                      */import{i as s}from"./assets/vendor-BbSUbo7J.js";const o=document.querySelector(".form");o.addEventListener("submit",i=>{i.preventDefault();const t=Number(o.elements.delay.value),r=o.elements.state.value;new Promise((e,l)=>{setTimeout(()=>{r==="fulfilled"?e(t):l(t)},t)}).then(e=>{s.success({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",timeout:5e3,close:!0,backgroundColor:"#4CAF50"})}).catch(e=>{s.error})});
//# sourceMappingURL=index.js.map
