let btn = document.querySelector("button");
let curMode = "light";
let body = document.querySelector("body");
btn.addEventListener("click", ()=>{
    if(curMode === "light"){
        body.style.background = "linear-gradient(black, silver)";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        body.style.height = "100vh";
        curMode = "black";
    }
    else{
        body.style.background = "white";
        curMode = "light";
    }
})
console.log(curMode);