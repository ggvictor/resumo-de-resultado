// elementos
const draw = document.querySelector(".draw");
const result =document.querySelector(".result");
const buttonDraw = document.querySelector("#sortear");
const buttonResult = document.querySelector("#voltar");
const reacaoNumerber = document.querySelector("#reacao-number");
const memoriaNumerber = document.querySelector("#memoria-number");
const verbalNumerber = document.querySelector("#verbal-number");
const visualNumerber = document.querySelector("#visual-number");

const resultados ={

    reacao: Math.floor(Math.random()*100) +1,
    memoria: Math.floor(Math.random()*100) +1,
    verbal: Math.floor(Math.random()*100) +1,
    visual: Math.floor(Math.random()*100) +1,

};
const reacao = resultados.reacao;
const memoria = resultados.memoria;
const verbal = resultados.verbal;
const visual = resultados.visual;

// funções

function mudarResult() {
    reacaoNumerber.innerHTML = reacao;
    memoriaNumerber.innerHTML = memoria;
    verbalNumerber.innerHTML = verbal;
    visualNumerber.innerHTML = visual;
};


// eventos
buttonDraw.addEventListener("click",()=>{
    draw.style.display = "none";
    result.style.display = "flex";
    mudarResult();
});
buttonResult.addEventListener("click",()=>{
    draw.style.display = "flex";
    result.style.display = "none";
    
});