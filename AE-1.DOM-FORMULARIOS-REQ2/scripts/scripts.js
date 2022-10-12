
let validarFormulario = function(e){    
    const parrafo = document.getElementById("warning");
    console.log("entrando en validarFormulario")
    let ok = true;
    if(nombre.value.trim() == ""){
        parrafo.innerHTML="Compruebe el formulario, le faltan campos"
        ok = false;
    }
    return ok;
}
window.onload = function(){
//Constantes con los valores
const nombre = document.getElementById("nombre").value;
const telefono = document.getElementById("telefono").value;
const direccion = document.getElementById("direccion").value;
const email = document.getElementById("email").value;

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

btnEnviar.onmouseover = function(e){
    console.log("Entrando en mouseover")
}

btnEnviar.onmouseout = function(e){
    console.log("saliendo");
}




}

