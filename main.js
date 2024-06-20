let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');
let resultadoP = document.querySelector('#resultado-p');

function somar() {
    let final = Number(numero1.value) + Number(numero2.value);
    resultadoP.innerHTML = final;
    resultado.value = final;
}

function subtrair() {
    let final = Number(numero1.value) - Number(numero2.value);
    resultadoP.innerHTML = final;
    resultado.value = final;
}

function dividir() {
    let final = Number(numero1.value) / Number(numero2.value);
    resultadoP.innerHTML = final;
    resultado.value = final;
}

function multiplicar() {
    let final = Number(numero1.value) * Number(numero2.value);
    resultadoP.innerHTML = final;
    resultado.value = final;
}