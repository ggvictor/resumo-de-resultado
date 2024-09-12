// elementos
const draw = document.querySelector(".draw");
const result =document.querySelector(".result");
const buttonDraw = document.querySelector("#sortear");
const buttonResult = document.querySelector("#voltar");
const reacaoNumerber = document.querySelector("#reacao-number");
const memoriaNumerber = document.querySelector("#memoria-number");
const verbalNumerber = document.querySelector("#verbal-number");
const visualNumerber = document.querySelector("#visual-number");
const porcentagem = document.querySelector("#porcentagem");
const number = document.querySelector("#number")
const text = document.querySelector("#text") 


// funções

function mudarResult() {

   const reacao= Math.floor(Math.random()*100) +1;
   const memoria= Math.floor(Math.random()*100) +1;
   const verbal= Math.floor(Math.random()*100) +1;
   const visual= Math.floor(Math.random()*100) +1;


    reacaoNumerber.innerHTML = reacao;
    memoriaNumerber.innerHTML = memoria;
    verbalNumerber.innerHTML = verbal;
    visualNumerber.innerHTML = visual;


    // porcentagem
    const total = 400;
    const soma = reacao + memoria + verbal + visual;
    const porcentagemCalc = (soma /total) * 100; 
    porcentagem.innerHTML = `${porcentagemCalc.toFixed(1)}%`;
    const numberValue = porcentagemCalc.toFixed(0);
    number.innerHTML = `${numberValue}`
    console.log(soma)

    // condições

    if (numberValue >= 1 && numberValue <= 10) {
        text.innerHTML = "Péssimo";
    } else if (numberValue >= 11 && numberValue <= 20) {
        text.innerHTML = "Muito ruim";
    } else if (numberValue >= 21 && numberValue <= 30) {
        text.innerHTML = "Ruim";
    } else if (numberValue >= 31 && numberValue <= 40) {
        text.innerHTML = "Quase lá";
    } else if (numberValue >= 41 && numberValue <= 50) {
        text.innerHTML = "Ok";
    } else if (numberValue >= 51 && numberValue <= 60) {
        text.innerHTML = "Medíocre";
    } else if (numberValue >= 61 && numberValue <= 70) {
        text.innerHTML = "Bom";
    } else if (numberValue >= 71 && numberValue <= 80) {
        text.innerHTML = "Muito bom";
    } else if (numberValue >= 81 && numberValue <= 90) {
        text.innerHTML = "Ótimo";
    } else if (numberValue >= 91 && numberValue <= 100) {
        text.innerHTML = "Incrível";
    }
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