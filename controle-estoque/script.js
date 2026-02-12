/* Cria o array chamado frutas */
let frutas = [];


/* Mostra o array */
function mostrarFrutas() {

    /* Captura a div onde o resultado será mostrado */
    let resultadoDiv = document.getElementById("resultado");

    /* Verifica se o array está vazio */
    if (frutas.length === 0) {

        /* Se vazio, da msg de erro */
        resultadoDiv.innerHTML = `
        <strong>Array completo:</strong> [] <br>
        <strong>Quantidade de frutas:</strong> 0 <br>
        <em>O array está vazio.</em>
        `;
    } else {

        /* Se nao, frutas.join transforma o array separado por virgula */
        resultadoDiv.innerHTML = `
        <strong>Array completo:</strong> [${frutas.join(", ")}] <br>
        <strong>Quantidade de frutas:</strong> ${frutas.length} <br>
        `;
    }

}

function adicionarFruta() {

    /* Abre caixa de texto pra escrever */
    let novaFruta = prompt("Digite o nome da nova fruta:");

    /* Verifica se algo foi digitado */
    if (novaFruta) {

        /* push() add um elemento no FINAL do array */
        frutas.push(novaFruta);

        /* Att a exibição após a adição */
        mostrarFrutas();
    }
}


function removerUltima() {

    /* Verifica se o array tem elementos */
    if (frutas.length > 0) {

        /* pop() remove o último elemento do array */
        frutas.pop();

    } else {

        alert("O array já está vazio!");

    }

    mostrarFrutas();

}

mostrarFrutas();