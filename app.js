let listaAmigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value.trim();
    
    if (nomeAmigo !== "" && !listaAmigos.includes(nomeAmigo)) {
        listaAmigos.push(nomeAmigo);
        atualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    } else {
        alert("Nome inválido ou já adicionado.");
    }
}

function atualizarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = "";
    listaAmigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }
    
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];
    
    exibirResultado(amigoSorteado);
}

function exibirResultado(amigoSorteado) {
    let ul = document.getElementById('resultado');
    ul.innerHTML = "";
    let li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    ul.appendChild(li);
}

