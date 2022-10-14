
//Creo un formulario
const div = document.querySelector("div");
const formulario = document.createElement("form");
formulario.style.display="grid";
formulario.style.gridTemplateColumns = "repat(2,1fr)";
formulario.style.gridTemplateRows="auto auto auto";
formulario.style.width="min(750px,100%)";
//Añado el formulario al div
div.appendChild(formulario);


const tituloInputs = document.createElement("h1");
const mensajeh1 = document.createTextNode("Aquí mostramos los inputs con sus label y le hemos añadido placeholder")
tituloInputs.appendChild(mensajeh1);
formulario.appendChild(tituloInputs);

//Crear 5 inputs type text con sus label
for(let i = 1; i < 6; i++){
    const div= document.createElement("div");
    const label = document.createElement("label");
    label.textContent="label"+i;
    const input = document.createElement("input");
    input.type="text";
    input.name="input"+i;
    input.id="input"+i;
    formulario.appendChild(div);
    div.appendChild(input);
    div.appendChild(label);
}

input1.placeholder= "DNI";
input2.placeholder= "Nombre";
input3.placeholder= "apellidos";
input4.placeholder= "dirección";
input5.placeholder= "teléfono";

const tituloRadio = document.createElement("h1");
const mensajeRadio = document.createTextNode("Aquí mostramos los 4 radio buttons")
tituloRadio.appendChild(mensajeRadio);
formulario.appendChild(tituloRadio);

const divRadio= document.createElement("div");  
divRadio.style.marginTop = "20px";
//Creamos radio button con 4 opciones
for(let i = 1; i < 5; i++){    
    const radio = document.createElement("label");
    radio.textContent="radio"+i;
    const radioBtn = document.createElement("input");
    radioBtn.type="radio";
    radioBtn.name="radio"+i;
    radioBtn.style.margin = "8px";
    formulario.appendChild(divRadio);
    divRadio.appendChild(radio);
    divRadio.appendChild(radioBtn);
}

const titulocheck = document.createElement("h1");
const mensajecheck = document.createTextNode("Aquí mostramos los 5 check box")
titulocheck.appendChild(mensajecheck);
formulario.appendChild(titulocheck);


const divCheck = document.createElement("div");
divCheck.style.marginTop="20px";
//Creamos 5 checkBox diferentes        
for(let i = 1; i < 6; i++){
    const checkbox = document.createElement("label");
    checkbox.textContent="checkbox"+i;
    const checkboxBtn= document.createElement("input");
    checkboxBtn.type="checkbox";
    checkboxBtn.name= "checkbox"+i;
    checkboxBtn.style.margin = "8px";
    formulario.appendChild(divCheck);
    divCheck.appendChild(checkbox);
    divCheck.appendChild(checkboxBtn);
}

const tituloimg = document.createElement("h1");
const mensajeImg = document.createTextNode("Aquí mostramos las 2 imagenes")
tituloimg.appendChild(mensajeImg);
formulario.appendChild(tituloimg);

const divImg = document.createElement("div");
formulario.appendChild(divImg);

//Creo logo para la imagen 
const mostrarLogo = document.createElement("img");
mostrarLogo.src = "./images/ASINSTANTE_free-file.png";
//Dimensiones provisionales
mostrarLogo.setAttribute("width", "150");
mostrarLogo.setAttribute("heigth", "200");

//Creo logo para la imagen 
const mostrarLogo1 = document.createElement("img");
mostrarLogo1.src = "./images/ASINSTANTE_free-file.png";
mostrarLogo.style.marginTop="20px";
//Dimensiones provisionales
mostrarLogo1.setAttribute("width", "150");
mostrarLogo1.setAttribute("heigth", "200");

divImg.appendChild(mostrarLogo);
divImg.appendChild(mostrarLogo1);


const selectMensaje = document.createElement("h1");
const selectMensaje1 = document.createTextNode("Aquí mostramos el select con sus opciones")
selectMensaje.appendChild(selectMensaje1);
formulario.appendChild(selectMensaje);

//Select
const divSelect = document.createElement("div");
formulario.appendChild(divSelect);
const select = document.createElement("select");
select.style.marginTop = "20px";
divSelect.appendChild(select);

let opciones = ["opción1","opción2","opción3","opción4"];
for(opcion in opciones){
    let option = document.createElement("option");
    option.text = opciones[opcion];
    select.add(option);
}

const textAreah1 = document.createElement("h1");
const textAreaMensaje = document.createTextNode("Aquí mostramos el textArea")
textAreah1.appendChild(textAreaMensaje);
formulario.appendChild(textAreah1);

//Text area
const divTextArea = document.createElement("div");
formulario.appendChild(divTextArea);
const textArea = document.createElement("textarea");
textArea.style.marginTop = "20px";
divTextArea.appendChild(textArea);

