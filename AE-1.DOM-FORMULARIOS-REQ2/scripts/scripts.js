//Constante nombre
const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const direccion = document.getElementById("direccion");
const email = document.getElementById("email");

const formulario = document.getElementById("formulario");

const pequenia = document.getElementById("pequenia")
const mediana = document.getElementById("mediana")
const grande = document.getElementById("grande")

const ing1 = document.getElementById("ing1");
const ing2 = document.getElementById("ing2");
const ing3 = document.getElementById("ing3");
const ing4 = document.getElementById("ing4");

const btnEnviar = document.getElementById("btnEnviar");

const parrafo = document.getElementById("warning");



btnEnviar.onclick = function(e){
    if(!validarFormulario()){
        e.preventDefault();
    }
}


btnEnviar.onclick = validarFormulario


}

let validarFormulario = function(e){
    let ok = true;
    if(telefo.value == ""){
        parrafo.innerHTML="Dato obligatorio";
        ok = false;
    }
    return ok;
}
window.onload = function(){
btnEnviar.onclick = function(e){
    if(!validarFormulario()){
        e.preventDefault();
    }
}
}