
//Tabla, divFormulario como variable gobal
let saltito = document.createElement("br");
function inicializador(){
    let tabla;
    tabla = document.createElement("table")
    cabeceraPagina(tabla);
    inicializadorSelect(tabla);
    inicializadorDivFormulario(tabla);

    divPrincipal.appendChild(tabla);
}
function cabeceraPagina(tabla){
    //Creo logo para la imagen 
    let mostrarLogo = document.createElement("img");
    mostrarLogo.src = "./images/ASINSTANTE_free-file.png";
    //Dimensiones provisionales
    mostrarLogo.setAttribute("width", "150");
    mostrarLogo.setAttribute("heigth", "200");
    //Creo contenido para el titulo
    let contenedorTitulo = document.createElement("h1");
    let contenidoTitulo = document.createTextNode("Bienvenido a la pagina de asistencia")
    contenedorTitulo.appendChild(contenidoTitulo);

    //Creo tabla contenedora de la cabecera
    let trCabecera = document.createElement("tr")
    let th1 = document.createElement("th")
    let th2 = document.createElement("th")
    th1.appendChild(mostrarLogo)
    th2.appendChild(contenedorTitulo)
    trCabecera.appendChild(th1)
    trCabecera.appendChild(th2)
    tabla.appendChild(trCabecera)
    tabla.setAttribute("border", "1") //BORDE PROVISIONAL
    tabla.setAttribute("align", "center"); //CENTRADO PROVISIONAL
}

//Funcion para controlar y crear el contenedor del formulario
function inicializadorDivFormulario(tabla){
    //Creamos div del formulario para formulario dinámico
    let divFormulario = document.createElement("div");
    divFormulario.setAttribute("style", "height: 200px");
    let trDivFormulario = document.createElement("tr");;
    let tdDivFormulario = document.createElement("td");
    tdDivFormulario.setAttribute("colspan", "2");
    tdDivFormulario.appendChild(divFormulario);
    trDivFormulario.appendChild(tdDivFormulario);
    tabla.appendChild(trDivFormulario);

    //Interior div
    let tablaFormularios = document.createElement("table");
    tablaFormularios.id = "tablaDinamica";
    inicializadorDatos(tablaFormularios);
    divFormulario.appendChild(tablaFormularios);
}

//Funcion para inicializar y gestionar datos
function inicializadorDatos(tablaFormulario){
    tablaFormulario.setAttribute("border", "2");
    let trDatos = document.createElement("tr");
    //Composición DNI
    let lbDni = document.createElement("label");
    let txtDni = document.createTextNode(" DNI: ");
    lbDni.appendChild(txtDni); 
    let dni = document.createElement("input");
    lbDni.appendChild(dni);
    dni.setAttribute("type", "text");
    //Composición nombre
    let lbNombre = document.createElement("label");
    let txtNombre = document.createTextNode(" Nombre: ");
    lbNombre.appendChild(txtNombre); 
    let nombre = document.createElement("input");
    lbNombre.appendChild(nombre);
    nombre.setAttribute("type", "text");
    //Composición apellido
    let lbApellido = document.createElement("label");
    let txtApellido = document.createTextNode(" Apellidos: ");
    lbApellido.appendChild(txtApellido); 
    let apellido = document.createElement("input");
    lbApellido.appendChild(apellido);
    apellido.setAttribute("type", "text");
    //Composición teléfono
    let lbTelefono = document.createElement("label");
    let txtTelefono = document.createTextNode(" Teléfono: ");
    lbTelefono.appendChild(txtTelefono); 
    let telefono = document.createElement("input");
    lbTelefono.appendChild(telefono);
    telefono.setAttribute("type", "number");
    //Composición dirección
    let lbDireccion = document.createElement("label");
    let txtDireccion = document.createTextNode(" Dirección: ");
    lbDireccion.appendChild(txtDireccion); 
    let direccion = document.createElement("input");
    lbDireccion.appendChild(direccion);
    direccion.setAttribute("type", "text");
    //Agregando al contenedor
    trDatos.appendChild(lbNombre);
    trDatos.appendChild(lbApellido);
    trDatos.appendChild(lbDni);
    trDatos.appendChild(saltito);
    trDatos.appendChild(lbTelefono);
    trDatos.appendChild(lbDireccion);
    //agrego a tabla
    tablaFormulario.appendChild(trDatos);
   
}

//Funcion para inicializar y gestionar el dinamismo del formulario
function inicializadorDinamico(tablaFormulario){
    //Composición DNI
    let lbDni = document.createElement("label");
    let txtDni = document.createTextNode(" EJEMPLO PRUEBAS: ");
    lbDni.appendChild(txtDni); 
    let dni = document.createElement("input");
    lbDni.appendChild(dni);
    dni.setAttribute("type", "text");

    let trDinamico = document.createElement("tr");
    trDinamico.appendChild(lbDni);
    tablaFormulario.appendChild(trDinamico);
    tablaFormulario.setAttribute("style", "height: 100%; width: 100%");

  
}
function segundoDinamicoPrueba(tablaFormulario){
  //Composición DNI
  let lbDni = document.createElement("label");
  let txtDni = document.createTextNode(" EJEMPLO PRUEBAS223123123: ");
  lbDni.appendChild(txtDni); 
  let dni = document.createElement("input");
  lbDni.appendChild(dni);
  dni.setAttribute("type", "text");

  let trDinamico = document.createElement("tr");
  trDinamico.appendChild(lbDni);
  trDinamico.id = "chilDinamico"
  tablaFormulario.appendChild(trDinamico);
  tablaFormulario.setAttribute("style", "height: 100%; width: 100%");
}
//Funcion para crear y gestionar el select de opciones
function inicializadorSelect(tabla){

    //llenamos select
    let ayudas = listaOpcionesAyuda();
    //Creamos fila y select de opciones
    let trSelects = document.createElement("tr");
    let selects = document.createElement("select");
    selects.id ="selects";
    //Bucle dinámico para obtener opciones
    for(let ayuda of ayudas){
        let opcion = document.createElement("option");
        let opcionValue = document.createTextNode(ayuda);
        opcion.appendChild(opcionValue);
        opcion.setAttribute("align", "center");
        selects.appendChild(opcion);
    }
    trSelects.appendChild(selects);
    tabla.appendChild(trSelects);
    interaccionEventoSelect(selects);
}
//Funcion de control de la interaccion del usuario con el elemento select para el cambio de formulario
function interaccionEventoSelect(selects){
 //Añado un listener al select para poder controlar el evento de cambio de opcion.
 selects.addEventListener("change", function(){
    //Encapsulamos el select por via de la ID para poder acceder al listado de opciones en funcion al que seleccionados 
    //y asi obtener su texto
    let element = document.getElementById("selects");
    let text = element.options[element.selectedIndex].text;
    //En funcion del texto seleccionado, el formulario 2 cambiará
    let tabla = document.getElementById("tablaDinamica");
    vaciadoDinamico(tabla);
    if(text == "Problema con un conductor"){
        inicializadorDinamico(tabla);
      
    }else if (text== "Objeto perdido"){
        segundoDinamicoPrueba(tabla);
    }
})
//Asignamos select a la fila y tabla 
}

//Funcion que devuelve un array de objetos pelicula
function listaOpcionesAyuda(){
    let ayudas = ["¿Que asistencia necesita?","Objeto perdido", "Problema con un conductor"];
    return ayudas;    
}

function vaciadoDinamico(tabla){
    //Obtenemos los nodos hijos de la tabla
    let nodoTable = tabla.childNodes
     //Comprobamos que si existe un elemento en la posicion 1 lo borre 
        //para asi eliminar el formulario si se ha creado
        if(nodoTable[1]){
            nodoTable[1].remove();
        }
}