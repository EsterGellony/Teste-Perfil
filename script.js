alert("Bem-vindo/a à minha página! Obrigada pela visita 😊"); 

let numeroVisitas = localStorage.getItem("numeroVisitas");

if (numeroVisitas === null) {
    numeroVisitas = 1;
} else {
    numeroVisitas = parseInt(numeroVisitas) + 1;
}

localStorage.setItem("numeroVisitas", numeroVisitas);

let paragrafo = document.createElement("p");
paragrafo.textContent = "Já visitou esta página " + numeroVisitas + " vezes.";
let MeusProjetos = document.querySelector("footer .container");
MeusProjetos.appendChild(paragrafo);

const projetos = document.querySelectorAll(".projeto");

projetos.forEach((projeto, index) => {
    projeto.addEventListener("click", (event) => {
        event.preventDefault();
        alert(`Clicou no Projeto ${index + 1}`);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("mudar-cor");
    botao.style.backgroundColor = "#ccc";
    botao.style.color = "#000"; // cor neutra ao botão

    const container = document.querySelector(".sobre"); // colocar .sobre p/ mudar a tela inteira

    function gerarCorAleatoria() {
        const letrasHex = "0123456789ABCDEF";
        let cor = "#";
        for (let i = 0; i < 6; i++) {
            cor += letrasHex[Math.floor(Math.random() * 16)];
        }
        return cor;
    }

    botao.addEventListener("click", () => {
        const novaCor = gerarCorAleatoria();
        container.style.backgroundColor = novaCor;
    });
});



