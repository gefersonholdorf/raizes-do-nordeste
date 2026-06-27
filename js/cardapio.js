const area=document.getElementById("produtos");

let carrinho=JSON.parse(localStorage.getItem("carrinho"))||[];

function atualizarCarrinho(){

document.getElementById("qtdCarrinho").innerHTML=carrinho.length;

}

function listar(lista){

area.innerHTML="";

lista.forEach(produto=>{

area.innerHTML+=`

<div class="produto">

<div class="foto">

${produto.imagem}

</div>

<h3>${produto.nome}</h3>

<p>${produto.categoria}</p>

<div class="rodape-card">

<strong>

R$ ${produto.preco.toFixed(2)}

</strong>

<button onclick="comprar(${produto.id})">

+

</button>

</div>

</div>

`;

});

}

listar(produtos);

atualizarCarrinho();

document.getElementById("buscar")

.addEventListener("keyup",e=>{

const texto=e.target.value.toLowerCase();

listar(

produtos.filter(p=>

p.nome.toLowerCase().includes(texto)

)

);

});

function comprar(id){

carrinho.push(id);

localStorage.setItem("carrinho",JSON.stringify(carrinho));

atualizarCarrinho();

}