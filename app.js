// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let amigoNuevo = '';

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;
    listaAmigos.push(amigoNuevo);
    console.log(listaAmigos);
    return;
}
