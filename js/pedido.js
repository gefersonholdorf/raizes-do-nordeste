const etapas=[

"Pedido recebido ✅",

"Pagamento confirmado 💳",

"Preparando na cozinha 👨‍🍳",

"Pedido pronto 🍔",

"Retire no balcão 🎉"

];

const status=document.getElementById("status");

const progresso=document.getElementById("progresso");

const tempo=document.getElementById("tempo");

const numero=Math.floor(Math.random()*9000)+1000;

document.getElementById("numeroPedido").innerHTML=
"Pedido #"+numero;

let etapa=0;

function atualizar(){

status.innerHTML=

`<div class="status">

${etapas[etapa]}

</div>`;

progresso.style.width=((etapa+1)/etapas.length*100)+"%";

tempo.innerHTML=

"Tempo estimado: "+((etapas.length-etapa)*3)+" minutos";

if(etapa<etapas.length-1){

etapa++;

setTimeout(atualizar,3000);

}else{

tempo.innerHTML=

"Pedido concluído. Bom apetite! 😋";

}

}

atualizar();