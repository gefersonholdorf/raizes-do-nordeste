let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

const area = document.getElementById("itens");

function carregar(){

area.innerHTML="";

let total=0;

carrinho.forEach((id,index)=>{

const produto=produtos.find(p=>p.id==id);

total+=produto.preco;

area.innerHTML+=`

<div class="card">

<h3>${produto.nome}</h3>

<p>R$ ${produto.preco.toFixed(2)}</p>

<button class="btn"

onclick="remover(${index})">

Remover

</button>

</div>

`;

});

document.getElementById("total").innerHTML=
"Total: R$ "+total.toFixed(2);

}

function remover(index){

carrinho.splice(index,1);

localStorage.setItem("carrinho",JSON.stringify(carrinho));

carregar();

}

carregar();