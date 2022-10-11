console.log("hello world");
const container= document.querySelector(".container");
for (var i=0;i<256;i++){
    const div=document.createElement("div");
    div.style="background-color:white;width:20px;height:20px";


    container.appendChild(div)
}