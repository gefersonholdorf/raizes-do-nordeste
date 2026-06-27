function pagar(tipo){

const area=document.getElementById("resultado");

area.innerHTML=`

<div class="card">

<h3>Processando pagamento...</h3>

</div>

`;

setTimeout(()=>{

const aprovado=Math.random()>0.2;

if(aprovado){

localStorage.removeItem("carrinho");

let pontos=parseInt(localStorage.getItem("pontos"))||0;

pontos+=100;

localStorage.setItem("pontos",pontos);

area.innerHTML=`

<div class="card">

<h2>Pagamento aprovado ✅</h2>

<p>Forma: ${tipo}</p>

<a href="pedido.html" class="btn">

Acompanhar Pedido

</a>

</div>

`;

}else{

area.innerHTML=`

<div class="card">

<h2>Pagamento recusado ❌</h2>

<p>Tente novamente.</p>

</div>

`;

}

},2000);

}