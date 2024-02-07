
// creando nodos de nuestra pagina
const txtnombres = document.getElementById("txtNombres");
const txtapellidos  = document.getElementById("txtApellidos");
const Rsexo = document.getElementsByName("sexo");
const btnCrear = document.getElementById("btnCrear");
const btnSalir = document.getElementById("btnSalir");

btnCrear.addEventListener("click", function(){
    // esto recupera el valor de nombre
    const nombres = txtnombres.value.trim();
    //valido el nombre
    if(!nombres) {
        alert("Capelus, te falta el nombre");
    }

    // recorrer el array de sexo
    for(let item of Rsexo) {
        console.log(item.checked);
    }

});