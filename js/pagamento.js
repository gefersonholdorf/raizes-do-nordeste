let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const resumo = document.getElementById("resumoPedido");

let total = 0;

carrinho.forEach(id=>{

const produto = produtos.find(p=>p.id===id);

if(produto){

total += produto.preco;

}

});

const entrega = 5;

resumo.innerHTML = `

<p>Subtotal <strong>R$ ${total.toFixed(2)}</strong></p>

<p>Entrega <strong>R$ ${entrega.toFixed(2)}</strong></p>

<hr>

<h3>Total <strong>R$ ${(total+entrega).toFixed(2)}</strong></h3>

`;

function finalizar(){

const forma = document.querySelector("input[name='pagamento']:checked").value;

localStorage.setItem("pagamento",forma);

localStorage.setItem("statusPedido","Pagamento aprovado");

let pontos = parseInt(localStorage.getItem("pontos")) || 0;

pontos += 100;

localStorage.setItem("pontos",pontos);

localStorage.removeItem("carrinho");

window.location="pedido.html";

}