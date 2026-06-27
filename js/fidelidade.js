let pontos=parseInt(localStorage.getItem("pontos"))||0;

document.getElementById("pontos").innerHTML=pontos;

function resgatar(){

if(pontos>=500){

pontos-=500;

localStorage.setItem("pontos",pontos);

alert("Cupom de desconto resgatado!");

location.reload();

}else{

alert("Você precisa de 500 pontos.");

}

}