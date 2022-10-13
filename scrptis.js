let formulario = document.createElement("form");

//Crear 5 inputs type text 
for(let i = 1; i < 6; i++){
    let input = document.createElement("input");
    let atr =document.createAttribute("type");
    let name = document.createAttribute("name");
    name.value = "input"+i;
    atr.value = "text";
    input.setAttribute(atr);

    formulario.appendChild(input);
}

//Creamos dos radio button con 4 opciones
/*
 const labelradioButton = document.createElement('label');
        document.querySelector('Form').appendChild(labelradioButton);
        labelradioButton.innerText = "radioButton1: ";
        */
