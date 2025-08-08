// Array para armazenar os nomes
let listaAmigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    // Validação de entrada
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    // Adiciona o nome ao array
    listaAmigos.push(nome);

    // Atualiza a lista visível na página
    atualizarLista();

    // Limpa o campo de entrada
    input.value = "";
    input.focus();
}

// Função para atualizar a lista no HTML
function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Função para sortear amigo secreto
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um nome.");
        return;
    }

    // Sorteio aleatório
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Exibe o resultado na tela
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}
