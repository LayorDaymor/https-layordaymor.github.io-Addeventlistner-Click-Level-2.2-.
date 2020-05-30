const grau=document.getElementById("grauTaste");
const white=document.getElementById("weissTaste");
const blau=document.getElementById("blauTaste");
const gelb=document.getElementById("gelbTaste");
const background=document.getElementById("background");
const überschrift=document.getElementById("überschrift");
const per=document.getElementById("per");

grau.addEventListener("click",function(){
    background.style.background="gray"
    überschrift.style.color="white"
    per.style.color="white"
})
white.addEventListener("click",function(){
    background.style.background="white"
    überschrift.style.color="black"
    per.style.color="black"
})
blau.addEventListener("click",function(){
    background.style.background="blue"
    überschrift.style.color="white"
    per.style.color="white"
})
gelb.addEventListener("click",function(){
    background.style.background="yellow"
    überschrift.style.color="black"
    per.style.color="black"
})