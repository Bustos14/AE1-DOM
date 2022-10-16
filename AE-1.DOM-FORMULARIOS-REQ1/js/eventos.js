
//Tabla, divFormulario como variable gobal
const saltito = document.createElement("br");
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
    let contenidoTitulo = document.createTextNode("Bienvenido a la página de asistencia")
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
    trDatos.setAttribute("style", "margin: 8px;")
    //agrego a tabla
    tablaFormulario.appendChild(trDatos);
   
}

//Funcion para inicializar y gestionar el dinamismo del formulario
function formularioProblemas(tablaFormulario){
    let field = document.createElement("fieldset");
    let titulo = document.createElement("legend");
    let textTiulo = document.createTextNode("¿En que horario ocurrió? (Seleccione varios si hubo un cambio de horario en el transcurso del viaje)")
    titulo.appendChild(textTiulo);
    field.appendChild(titulo);
    let posiblesObjetos = ["De madrugada(00:00-8:00)","Por la mañana(8:00-12:00)", "Tarde(12:00-20:00)", "Noche(20:00-00:00)"];
    //Creamos radio button con 4 opciones
    for(objetos of posiblesObjetos){    
        const radio = document.createElement("label");
        radio.textContent=objetos;
        const radioBtn = document.createElement("input");
        radioBtn.type="checkbox";
        radioBtn.name="objeto";
        radioBtn.id = objetos;
        radioBtn.style.margin = "8px";
        field.appendChild(radioBtn);
        field.appendChild(radio);
     
    }
    //Añadimos radioButtons a la tabla por medio de agregar el field a un nuevo tr
    let trDinamico = document.createElement("tr");
    trDinamico.appendChild(field);
    trDinamico.id = "chilDinamico"
    tablaFormulario.appendChild(trDinamico);
    tablaFormulario.setAttribute("style", "height: 100%; width: 100%");
    trDinamico.setAttribute("style", "height: 100%; width: 100%");
    field = document.createElement("fieldset");
    titulo = document.createElement("legend");
    textTiulo = document.createTextNode("Pulse el boton 'Siguiente' para seleccionar la imagen de la marca del coche del conductor")
    titulo.appendChild(textTiulo);
    field.appendChild(titulo);
    //Creamos la imagen contenedora para seleecionar la marca, con el logo de base
    let imagenMarca = document.createElement("img");
    imagenMarca.src = "./images/ASINSTANTE_free-file.png";
    imagenMarca.setAttribute("style", "height: 250px; width: 300px;");
    let divImagen = document.createElement("div");
    field.appendChild(imagenMarca);
    divImagen.appendChild(field);
    trDinamico.appendChild(divImagen);
    let btnPrev = document.createElement("button");
    btnPrev.textContent = "Siguiente"
    trDinamico.appendChild(btnPrev);
    //Funcion cambio de imagenes
    cambioImagen (btnPrev, imagenMarca);
    let textAreaOpcion = document.createElement("textArea");
    textAreaOpcion.placeholder = "Introduzca una descripción de lo que ha ocurrido";
    textAreaOpcion.setAttribute("style", "heigh: 40%; width: 95%; margin: 8px")
    trDinamico.appendChild(textAreaOpcion);
    let btnEnviar = document.createElement("button");
    let textBtn = document.createTextNode("Enviar")
    btnEnviar.appendChild(textBtn);
    tablaFormulario.appendChild(btnEnviar);
    enviar(btnEnviar);
}
function cambioImagen (btnPrev, imagenMarca){
    let listaImagenes =   ["./images/citroen.jpg","./images/hyundai.png", "./images/nissan.jpg"];
    let i = 0;
    btnPrev.addEventListener("click", function(){
        if(i>0){
            imagenMarca.src = listaImagenes[i];
            i--;
        }else if (i==0){
            imagenMarca.src = listaImagenes[i];
            i=listaImagenes.length-1;
        }
        
    })
}
function formularioObjeto(tablaFormulario){
 
    let field = document.createElement("fieldset");
    let titulo = document.createElement("legend");
    let textTiulo = document.createTextNode("¿Que tipo de objeto ha perdido?")
    titulo.appendChild(textTiulo);
    field.appendChild(titulo);

    let posiblesObjetos = ["Movil","Llaves", "Gafas", "Joyeria", "Otros"];
    //Creamos radio button con 5 opciones
    for(objetos of posiblesObjetos){    
        const radio = document.createElement("label");
        radio.textContent=objetos;
        const radioBtn = document.createElement("input");
        radioBtn.type="radio";
        radioBtn.name="objeto";
        radioBtn.id = objetos;
        radioBtn.style.margin = "8px";
        field.appendChild(radioBtn);
        field.appendChild(radio);
    }
    //Añadimos radioButtons a la tabla por medio de agregar el field a un nuevo tr
    let trDinamico = document.createElement("tr");
    trDinamico.appendChild(field);
    trDinamico.id = "chilDinamico"
    tablaFormulario.appendChild(trDinamico);
    tablaFormulario.setAttribute("style", "height: 100%; width: 100%");
    trDinamico.setAttribute("style", "height: 100%; width: 100%");
    //Funcionalidad de radiobutton 
    radioButton(trDinamico);
    const divCheck = document.createElement("div");
    divCheck.style.marginTop="20px";  
    const checkbox = document.createElement("label");
    checkbox.textContent="Sí";
    const checkboxBtn= document.createElement("input");
    checkboxBtn.type="checkbox";
    checkboxBtn.id = "checkDescripcion"
    checkboxBtn.style.margin = "8px";
    field = document.createElement("fieldset");
    titulo = document.createElement("legend");
    textTiulo = document.createTextNode("¿Desea añadir una descripción detallada?")
    titulo.appendChild(textTiulo);
    field.appendChild(titulo);
    field.appendChild(checkbox);
    field.appendChild(checkboxBtn);
    tablaFormulario.appendChild(divCheck);
    divCheck.appendChild(field);
    checkButton(field)
    let btnEnviar = document.createElement("button");
    let textBtn = document.createTextNode("Enviar")
    btnEnviar.appendChild(textBtn);
    tablaFormulario.appendChild(btnEnviar);
    enviar(btnEnviar)
}
//Funcion que comprueba si el campo "otros" de los radioButton esta checkeado, haciendo aparecer o desaparecer
// un area de texto
function radioButton(trDinamico){
    trDinamico.addEventListener("change", function(){
        if(document.getElementById("Otros").checked){
            let textInput = document.createElement("input");
            textInput.placeholder = "Introduzca el tipo de objeto que ha perdido";
            textInput.setAttribute("style", "heigh: 40%; width: 95%; margin: 8px")
            trDinamico.appendChild(textInput);
        }else{
            vaciadoDinamico(trDinamico);
        }
    })
        
}
//Función de control de checkButton, cuando se selecciona muestra un textArea
function checkButton(divCheck){
    divCheck.addEventListener("change", function(){
        if(document.getElementById("checkDescripcion").checked){
            let textAreaOpcion = document.createElement("textArea");
            textAreaOpcion.placeholder = "Introduzca el tipo de objeto que ha perdido";
            textAreaOpcion.setAttribute("style", "heigh: 40%; width: 95%; margin: 8px")
            divCheck.appendChild(textAreaOpcion);
        }else{
            divCheck.childNodes[3].remove();
        }
    })
        
}
//Botón de enviar para cambiar la pagina con un nuevo mensaje
function enviar(btnEnviar){
    btnEnviar.addEventListener("click", function(){
        document.write('<img src="./images/ASINSTANTE_free-file.png">');
        document.write("<h1>¡Gracias! Contactaremos con usted lo antes posible.</h1>");
    })
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
        formularioProblemas(tabla);
    }else if (text== "Objeto perdido"){
        formularioObjeto(tabla);
    }
})
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
        if(nodoTable.length > 1){
            let i = nodoTable.length;
            console.log(nodoTable.length)
            while(nodoTable.length >1){
                nodoTable[i-1].remove();
                i--;
            }
        }
}