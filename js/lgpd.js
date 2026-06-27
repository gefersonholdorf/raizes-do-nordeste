const aceite =

localStorage.getItem("lgpd");

const checkbox =

document.getElementById("consentimento");

if(aceite==="true"){

checkbox.checked = true;

}

document.getElementById("salvarBtn")

.addEventListener("click",()=>{

localStorage.setItem(

"lgpd",

checkbox.checked

);

alert("Preferência salva.");

});

document.getElementById("downloadBtn")

.addEventListener("click",()=>{

const dados =

localStorage.getItem("usuario");

const blob = new Blob(

[dados],

{type:"application/json"}

);

const a =

document.createElement("a");

a.href=

URL.createObjectURL(blob);

a.download="meus-dados.json";

a.click();

});

document.getElementById("excluirBtn")

.addEventListener("click",()=>{

if(confirm("Excluir todos os dados?")){

localStorage.clear();

window.location="login.html";

}

});