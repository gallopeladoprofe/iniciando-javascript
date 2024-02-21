function agregarEventos() {
    document.getElementById("btnCrearUsuario").addEventListener("click", function() {
        location.href = "./formularioRegistroUsuario.html";
        //location.replace("./formularioRegistroUsuario.html");
    });
}


//crear la zona segura
document.addEventListener("DOMContentLoaded", function() {
    
    agregarEventos();

    // crear mini bd
    /* const listaAGuargar = [
        {id: 1, nombres:"Martin",apellidos:"Coronel", sexo:"masculino"},
        {id: 2, nombres:"Lorena",apellidos:"Vargas", sexo:"femenino"},
        {id: 3, nombres:"Andresa",apellidos:"Del Puerto", sexo:"femenino"},
    ];
    localStorage.setItem("listaUsuarios", JSON.stringify(listaAGuargar)); */

    const tbodyusuario = document.getElementById("tbodyusuario");
    
    // recorrer para armar la tabla
    const listaRecuperadaDeusuarios = JSON.parse(localStorage.getItem("listaUsuarios"));
    console.log(listaRecuperadaDeusuarios);

    if(!listaRecuperadaDeusuarios) return;

    let filas = "";
    for(let usuario of listaRecuperadaDeusuarios) {
        filas += `
            <tr id="${usuario.id}">
                <td>${usuario.nombres}</td>
                <td>${usuario.apellidos}</td>
                <td>
                    <button type="button">Editar</button>
                </td>
            </tr>
        `
    }

    if(filas) tbodyusuario.innerHTML = filas;
    console.log(filas);

});