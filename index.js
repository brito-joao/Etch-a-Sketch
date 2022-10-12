console.log("hello world");
var currentColor="grey";
const container= document.querySelector(".container");
for (var i=0;i<256;i++){
    const div=document.createElement("div");
    div.style="background-color:white;width:20px;height:20px";
    
    div.addEventListener("click",function(){
        div.style=`background-color:${currentColor};width:20px;height:20px`;
    })
    div.addEventListener("mouseover",function(){
        div.style=`background-color:${currentColor};width:20px;height:20px`;
    })
    container.appendChild(div)
}

function erase(){
    const divs=document.querySelectorAll(".container div");
    divs.forEach(function(div){
        div.style="background-color:white;width:20px;height:20px"
    })
}
function changeColor(color){
    currentColor=color;
    return currentColor;
}

