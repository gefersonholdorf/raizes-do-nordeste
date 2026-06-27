const area=document.getElementById("produtos");

function listar(lista){

area.innerHTML="";

lista.forEach(p=>{

area.innerHTML+=`

<div class="card">

<h3>${p.nome}</h3>

<p>${p.categoria}</p>

<h2>

R$ ${p.preco.toFixed(2)}

</h2>

<button

class="btn"

onclick="comprar(${p.id})">

Adicionar

</button>

</div>

`;

});

}

listar(produtos);

document

.getElementById("buscar")

.addEventListener("keyup",(e)=>{

const txt=e.target.value.toLowerCase();

listar(

produtos.filter(p=>

p.nome.toLowerCase()

.includes(txt)

)

);

});

function comprar(id){

let carrinho=

JSON.parse(localStorage.getItem("carrinho"))||[];

carrinho.push(id);

localStorage.setItem(

"carrinho",

JSON.stringify(carrinho)

);

alert("Produto adicionado!");

}