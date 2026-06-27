const usuario = JSON.parse(localStorage.getItem("usuario")) || {};

document.getElementById("nome").textContent =
usuario.nome || "Usuário";

document.getElementById("email").textContent =
usuario.email || "email@email.com";

document.getElementById("telefone").textContent =
usuario.telefone || "(00) 00000-0000";

document.getElementById("cpf").textContent =
usuario.cpf || "000.000.000-00";

document.getElementById("pontos").textContent =
(localStorage.getItem("pontos") || 0) + " pontos";

function logout(){

localStorage.removeItem("logado");

window.location.href="login.html";

}