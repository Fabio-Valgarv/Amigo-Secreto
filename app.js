// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Declaración del arreglo y variable para agregar nombres al arreglo
let listaAmigos = [];
let amigoNuevo = '';



function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//Función para agregar nombres al arreglo
function agregarAmigo() {
    let amigoNuevo = document.getElementById('amigo').value;
    if (amigoNuevo==='') {
        //Muestra mensaje de error si no se ingresa un nombre
        alert('Debes ingresar un nombre!!!');
    } else {
        //Agrega el nombre ingresado al arreglo
        listaAmigos.push(amigoNuevo);
        console.log(listaAmigos);
        mostrarLista();
        return;
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

