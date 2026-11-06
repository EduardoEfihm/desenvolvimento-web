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

// --- Validação do Formulário de Contato (Aula WEB114) ---
const formularioContato = document.getElementById("formContato");

if (formularioContato) {
    formularioContato.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Captura os valores dos campos
        let nome = document.getElementById("nomeContato").value;
        let email = document.getElementById("emailContato").value;
        let mensagem = document.getElementById("mensagemContato").value;
        let feedback = document.getElementById("feedback");

        // Limpa mensagens e classes anteriores
        feedback.textContent = "";
        feedback.className = "";

        // Validação do Nome (mínimo 3 caracteres)
        if (nome.length < 3) {
            feedback.textContent = "O Nome deve ter pelo menos 3 caracteres.";
            feedback.className = "erro";
            return;
        }

        // Validação do E-mail (deve conter '@')
        if (email.indexOf("@") === -1) {
            feedback.textContent = "E-mail inválido. Certifique-se de incluir o '@'.";
            feedback.className = "erro";
            return;
        }

        // Validação da Mensagem (mínimo 10 caracteres)
        if (mensagem.length < 10) {
            feedback.textContent = "A Mensagem deve ter pelo menos 10 caracteres.";
            feedback.className = "erro";
            return;
        }

        // Sucesso: Uso de textContent para evitar ataques XSS
        feedback.textContent = "Formulário enviado com sucesso!";
        feedback.className = "sucesso";

        // Opcional: Reseta o formulário após o envio bem-sucedido
        this.reset();
    });
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