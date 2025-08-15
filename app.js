// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración del arreglo y variable para agregar nombres al arreglo
let listaAmigos = [];
let amigoNuevo = '';

// Declaración de variables para sortear amigos y arreglo de amigos sorteados
let amigoSorteado = '';
let amigoSecreto = '';
let listaSorteados = [];
let numeroSorteado = 0;


//Asigna texto al HTML
function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Función para agregar nombres al arreglo
function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;
    document.getElementById('resultado').innerHTML = '';
    if (amigoNuevo==='') {
        //Muestra mensaje de error si no se ingresa un nombre
        alert('Debes ingresar un nombre!!!');
        asignarTextoElemento('h2','Debes ingresar un nombre!!!');
    } else {
        //Agrega el nombre ingresado al arreglo
        if (listaAmigos.includes(amigoNuevo)) {
            //Muestra mensaje de error porque el nombre ingresado ya esta en la lista
            alert('El nombre que quieres ingresar ya esta en la lista!!!');
            asignarTextoElemento('h2','El nombre que quieres ingresar ya esta en la lista!!!');
        } else {
        listaAmigos.push(amigoNuevo);
        console.log(listaAmigos);
        mostrarLista();
        asignarTextoElemento('h2','Digite el nombre de sus amigos')
        }
        document.querySelector('#amigo').value ='';
    }
}

//Función para mostrar los nombres ingresados
function mostrarLista() {
    let lista = '';
    for (i=0;i <listaAmigos.length;i++){
        lista += '<li>' + listaAmigos[i] + '</li>';
    }
    document.getElementById('listadoAmigos').innerHTML = lista;
}

//Función para mostrar los nombres sorteados
function mostrarSorteados() {
    let lista = '';
    for (i=0;i <listaSorteados.length;i++){
        lista += '<li>' + 'El amigo secreto de' + ' ' + listaAmigos[i] + ' ' + 'es' + ' ' + listaSorteados[i] + '</li>';
    }
    document.getElementById('resultado').innerHTML = lista;
}


//Función para sortear amigos
function sortearAmigo() {
    document.getElementById('listadoAmigos').innerHTML = '';
    if (listaAmigos.length < 3) {
        //Muestra mensaje de error si solo son 02 amigos en la lista
        alert('Debes ingresar un amigo más!!!');
        asignarTextoElemento('h2','Debes ingresar un amigo más!!!');
    } else {
        //Sortea un amigo
        for (i=0;i<listaAmigos.length;i){
            amigoSorteado = listaAmigos[i];
            numeroSorteado = Math.floor(Math.random()*listaAmigos.length);
           //Evita que el amigo sorteado sea el mismo que el amigo secreto
            if (i !=numeroSorteado) {
                amigoSecreto = listaAmigos[numeroSorteado];
                //Evita que se repita el nombre sorteado
                if (listaSorteados.includes(amigoSecreto)) {
                } else {
                listaSorteados.push(amigoSecreto);
                i++
                }
            }
            mostrarSorteados();
            console.log(listaSorteados);
        }
        listaAmigos = [];
    }
    
}
