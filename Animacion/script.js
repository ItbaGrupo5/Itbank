
window.addEventListener("load",()=>{
    setTimeout(()=>{
const loader2 = document.querySelector(".logocarga")
loader2.style.opacity=0;
const loader = document.querySelector(".load")
loader.style.opacity=0;
},3000);})

function pagina(){
    location.href="index.html"
}
setTimeout(pagina(),{},5000)



