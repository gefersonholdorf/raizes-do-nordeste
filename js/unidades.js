const unidades=[

{

id:1,

nome:"Recife Centro",

tempo:"15 minutos",

endereco:"Centro"

},

{

id:2,

nome:"Boa Viagem",

tempo:"20 minutos",

endereco:"Zona Sul"

},

{

id:3,

nome:"Olinda",

tempo:"18 minutos",

endereco:"Shopping"

},

{

id:4,

nome:"Caruaru",

tempo:"25 minutos",

endereco:"Centro"

},

{

id:5,

nome:"João Pessoa",

tempo:"22 minutos",

endereco:"Manaíra"

}

];

const lista=document.getElementById("listaUnidades");

function carregar(dados){

lista.innerHTML="";

dados.forEach(u=>{

lista.innerHTML+=`

<div class="unidade-card">

<div>

<h3>📍 ${u.nome}</h3>

<p>${u.endereco}</p>

<span>Retirada em ${u.tempo}</span>

</div>

<button onclick="selecionar(${u.id})">

Selecionar

</button>

</div>

`;

});

}

carregar(unidades);

document.getElementById("pesquisa")

.addEventListener("keyup",e=>{

const texto=e.target.value.toLowerCase();

carregar(

unidades.filter(u=>

u.nome.toLowerCase().includes(texto)

)

);

});

function selecionar(id){

localStorage.setItem("unidade",id);

window.location="cardapio.html";

}