const resultado = document.querySelector('#confirm');
const visor = document.querySelector('#visor');

function insert(valor) {
    visor.innerHTML += valor;
}

function reset() {
    visor.innerHTML = '';
}

function backspace() {
    if(visor.textContent){
        let result = visor.innerHTML;
        visor.innerHTML = result.substring(0, result.length - 1); /*Tira o ultimo caractere do visor*/
    }
    else{
        visor.innerHTML = '';
    }
}
function confirm() {
    if(visor.textContent) {
        visor.innerHTML = eval(visor.innerHTML); /*eval - faz a conta que esta no visor*/
    }
}
