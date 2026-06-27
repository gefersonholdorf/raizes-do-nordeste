// ================================
// Cadastro
// ================================

const cadastroForm = document.getElementById("cadastroForm");

if (cadastroForm) {

    cadastroForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const usuario = {

            nome: document.getElementById("nome").value,

            email: document.getElementById("email").value,

            telefone: document.getElementById("telefone").value,

            cpf: document.getElementById("cpf").value,

            senha: document.getElementById("senha").value

        };

        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Cadastro realizado com sucesso!");

        window.location.href = "login.html";

    });

}

// ================================
// Login
// ================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location = "unidades.html"
    })
}