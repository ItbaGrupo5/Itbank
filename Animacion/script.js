/*window.onload = function(){
    var contenedor = document.getElementsByClassName("load");
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = 1;

}
function()
*/
/*const loader = document.querySelector("load")
function init(){
    setTimeout(()=>{
loader.style.opacity=0.5;
loader.style.display="hidden";
},2000)
};
init()
*/
window.addEventListener("load",()=>{
    setTimeout(()=>{
const loader2 = document.querySelector(".logocarga")
loader2.style.opacity=0;
//loader2.style.visibility="hidden";
const loader = document.querySelector(".load")
loader.style.opacity=0;
//loader.style.visibility="hidden";
},2000);})