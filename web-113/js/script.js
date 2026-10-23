alert("Bem-vindo(a) ao meu portfólio!");

function apresentacao() {
    alert("Olá! Meu nome é Eduardo Oliveira e sou estudante de Desenvolvimento Web.");
}

function alterarTitulo() {
    document.getElementById("titulo-principal").innerHTML = "Portfólio Profissional - " + prompt("Digite seu nome:");
}

function destacarSobre() {
    document.getElementById("sobre").style.backgroundColor = "#FFF3CD";
    document.getElementById("sobre").style.border = "2px solid #FFC107";
    document.getElementById("sobre").style.borderRadius = "10px";
}

let clique = 0;

function contarClique() {
    clique = clique + 1;
    document.getElementById("contador").innerHTML = clique;
}

function modoEscuro() {
    document.body.style.backgroundColor = "#1a1a2e";
    document.body.style.color = "#ffffff";
    document.querySelectorAll(".card").forEach(function (card) {
        card.style.backgroundColor = "#16213e";
        card.style.color = "#ffffff";
        card.style.borderColor = "#0f3460";
    });
}