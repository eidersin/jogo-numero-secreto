let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function dadosTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

function exibirMensagemInicial(){
    dadosTela('h1', 'Jogo do número secreto');
    dadosTela('p', 'Escolha um número entre 01 e 100');
};

exibirMensagemInicial()
function verificarChute() {
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    if (chute == numeroSecreto){
        dadosTela('h1', 'Acertou!');
        dadosTela('p', 'Você descobriu o número secreto com '+ tentativa + ' ' + palavraTentativa + '!');
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            dadosTela('h1', 'O número secreto é MENOR que ' + chute +'.');
        } else {
            dadosTela('h1', 'O número secreto é MAIOR que ' + chute + '.');
        }tentativa++
        limparCampo();
    }
};

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 100) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 3){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}