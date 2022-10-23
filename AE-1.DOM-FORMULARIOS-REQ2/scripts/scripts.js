
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
const btnEnviar = document.getElementById("btnEnviar");

btnEnviar.onclick = function(e){
    
    //Variable para seleccionar los radios con el nombre tamaño y esten chekeados
    let radioActivo = document.querySelector('input[name="tamaño"]:checked');
    //Variable para seleccionar los check con el nombre ingredientes
    let checks = document.querySelector('input[name="ingredientes"]');
    let pTotal = document.getElementById("total");
    let total = 0;
    if(!validarFormulario()){
        e.preventDefault();
    }if(radioActivo) {
        total += Number(radioActivo.value);
    }if(checks) {
        if(checks)
        total += Number(checks.value);
    }
    else {
        e.preventDefault();
        alert('Debes seleccionar un tamaño y almenos un ingrediente');
    }

    pTotal.innerHTML = `El precio total es ${total} €`

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

