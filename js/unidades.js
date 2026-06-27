const unidades = [

{
id:1,
nome:"Recife Centro",
cidade:"Recife"
},

{
id:2,
nome:"Boa Viagem",
cidade:"Recife"
},

{
id:3,
nome:"Olinda Shopping",
cidade:"Olinda"
},

{
id:4,
nome:"Caruaru",
cidade:"Caruaru"
},

{
id:5,
nome:"João Pessoa",
cidade:"João Pessoa"
}

];

const lista=document.getElementById("listaUnidades");

function carregar(listaFiltrada){

lista.innerHTML="";

listaFiltrada.forEach(u=>{

lista.innerHTML+=`

<div class="card">

<h3>${u.nome}</h3>

<p>${u.cidade}</p>

<button class="btn"

onclick="selecionar(${u.id})">

Selecionar

</button>

</div>

`;

});

}

carregar(unidades);

document.getElementById("pesquisa")

.addEventListener("keyup",(e)=>{

const valor=e.target.value.toLowerCase();

const filtro=unidades.filter(u=>

u.nome.toLowerCase().includes(valor)

);

carregar(filtro);

});

function selecionar(id){

localStorage.setItem("unidade",id);

window.location="cardapio.html";

}