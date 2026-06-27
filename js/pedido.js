const forma = localStorage.getItem("pagamento") || "PIX";

document.getElementById("formaPagamento").innerHTML = forma;

document.getElementById("status").innerHTML = "Em preparação";

setTimeout(()=>{

document.getElementById("preparo").classList.add("ativa");

},2000);

setTimeout(()=>{

document.getElementById("retirada").classList.add("ativa");

document.getElementById("status").innerHTML="Pronto para retirada";

},5000);