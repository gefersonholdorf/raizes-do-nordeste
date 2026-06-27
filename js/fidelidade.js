let pontos = parseInt(localStorage.getItem("pontos")) || 0;

document.getElementById("pontos").innerHTML = pontos;

document.getElementById("progresso").style.width =

Math.min((pontos/500)*100,100)+"%";

function resgatar(){

if(pontos >= 500){

pontos -= 500;

localStorage.setItem("pontos",pontos);

alert("Cupom resgatado com sucesso!");

location.reload();

}else{

alert("Pontos insuficientes.");

}

}