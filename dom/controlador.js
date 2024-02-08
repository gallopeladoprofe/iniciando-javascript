
// creando nodos de nuestra pagina
//Campos de texto
const txtnombres = document.getElementById("txtNombres");
const txtapellidos  = document.getElementById("txtApellidos");

//Array de objetos del radiobutton
//Presta atención, usamos el getElementsByName
const arrayRadioSexo = document.getElementsByName("sexo");

//Botones
const btnCrear = document.getElementById("btnCrear");
const btnSalir = document.getElementById("btnSalir");

//Se le asigna el evento click al botón crear
btnCrear.addEventListener("click", function() {

    //esto recupera el valor de nombre
    const nombres = txtnombres.value.trim();
    //valido el nombre
    if(!nombres) {
        alert("Falta el nombre");
        return;
    }
    //esto recupera el valor de apellidos
    const apellidos = txtapellidos.value.trim();
    if(!apellidos) {
        alert("Falta apellidos");
        return;
    }

    // recorrer el array de sexo
    let estaMarcadoElSexo = false;
    for(let item of arrayRadioSexo) {
        //Revisar si la propiedad checked es true
        //Revisar si el value del item para saber si es M o F
        if(item.checked && item.value === "M") {
            estaMarcadoElSexo = true;
            console.log(item.checked);
        }
        if(item.checked && item.value === "F") {
            estaMarcadoElSexo = true;
            console.log(item.checked);
        }
    }
    //Si no se marcó ningun radiobutton se avisa al usuario
    if(!estaMarcadoElSexo) {
        alert("¿Debe seleccionar el sexo!");
        return;
    }

});