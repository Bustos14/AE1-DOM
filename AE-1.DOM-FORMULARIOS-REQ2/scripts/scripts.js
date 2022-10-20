
let validarFormulario = function(e){    
    const parrafo = document.getElementById("warning");
    console.log("entrando en validarFormulario")
    let ok = true;
    if(nombre.value.trim() == ""){
        parrafo.innerHTML="Compruebe el formulario, le faltan campos"
        ok = false;
    } if (telefono.value.trim() == ""){

    }
    return ok;
}


window.onload = function(){
//Constantes con los valores
const telefono = document.getElementById("telefono").value;
const direccion = document.getElementById("direccion").value;
const email = document.getElementById("email").value;

const parrafoAlert = document.getElementById("parrafoAlert");

const formulario = document.getElementById("formulario");

const pequenia = document.getElementById("pequenia")
const mediana = document.getElementById("mediana")
const grande = document.getElementById("grande")

const ing1 = document.getElementById("ing1");
const ing2 = document.getElementById("ing2");
const ing3 = document.getElementById("ing3");
const ing4 = document.getElementById("ing4");

const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.onclick = function(e){
    if(!validarFormulario()){
        e.preventDefault();
    }

}

function suma(a,b){
    return a + b;
}

//Función mostrar total
    let total = 0;
btnEnviar.onclick = function(e){
    //Variable para seleccionar los radios con el nombre tamaño y esten chekeados
    let radioActivo = document.querySelector('input[name="tamaño"]:checked');
    //Variable para seleccionar los check con el nombre ingredientes
    let checks = document.querySelector('input[name="ingredientes"]:checked');
    if(radioActivo) {
        total += Number(radioActivo.value);
    } if(checks) {
        total += Number(checks.value);
    }
    else {
        e.preventDefault();
        alert('No hay ninún elemento activo');
    }

    alert("El precio total de su pedido es: "+total);
}



nombre.onmouseout = function(e){
    if(nombre.value.trim() == ""){
        // parrafoAlert.innerHTML = "Debes introducir un nombre"
        // parrafoAlert.className += " warning"
    }
}
//Funciones prueba

btnEnviar.onmouseover = function(e){
    console.log("Entrando en mouseover")
}

btnEnviar.onmouseout = function(e){
    console.log("saliendo");
}




}

