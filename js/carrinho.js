const lista=document.getElementById("listaCarrinho");

let carrinho=JSON.parse(localStorage.getItem("carrinho"))||[];

function atualizar(){

lista.innerHTML="";

let subtotal=0;

carrinho.forEach((id,index)=>{

const p=produtos.find(prod=>prod.id===id);

subtotal+=p.preco;

lista.innerHTML+=`

<div class="item">

<div>

<h3>${p.nome}</h3>

<p>${p.categoria}</p>

<strong>

R$ ${p.preco.toFixed(2)}

</strong>

</div>

<button

class="remover"

onclick="remover(${index})">

✕

</button>

</div>

`;

});

document.getElementById("subtotal").innerHTML=

"R$ "+subtotal.toFixed(2);

document.getElementById("total").innerHTML=

"R$ "+(subtotal+5).toFixed(2);

}

function remover(i){

carrinho.splice(i,1);

localStorage.setItem("carrinho",JSON.stringify(carrinho));

atualizar();

}

atualizar();