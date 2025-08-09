let amigos = []; // Array para armazenar os nomes inseridos pelo usuário

function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let input = document.getElementById("amigo");
    let nome = input.value.trim(); // remove espaços extras

    // Validar a entrada: se estiver vazia, mostrar alerta
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);

    // Limpar o campo de entrada
    input.value = "";

    // Atualizar a lista exibida na página
    atualizarLista();
}


function atualizarLista() {
    // Obter o elemento da lista onde os nomes serão exibidos
    let lista = document.getElementById("listaAmigos");

    // Limpar a lista existente para evitar duplicados
    lista.innerHTML = "";

    // Percorrer o array amigos
    for (let i = 0; i < amigos.length; i++) {
        // Criar um novo elemento <li> para cada nome
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item); // Adicionar elemento à lista
    }
}


function sortearAmigo() {
    // Validar que há amigos disponíveis para sortear
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }

    // Gerar um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
