// elementos
const draw = document.querySelector(".draw")
const result =document.querySelector(".result")
const buttonDraw = document.querySelector("#sortear")
const buttonResult = document.querySelector("#voltar")

// eventos
buttonDraw.addEventListener("click",(e)=>{
    draw.style.display = "none";
    result.style.display = "flex";
})
buttonResult.addEventListener("click",()=>{
    draw.style.display = "flex";
    result.style.display = "none";
})