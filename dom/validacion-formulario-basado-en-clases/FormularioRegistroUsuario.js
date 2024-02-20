import { UsuarioDTO } from "./UsuarioDTO.js";

class FormularioRegistroUsuario {
    #txtnombres = null;
    #txtapellidos = null;
    #arrayRadioSexo = null;
    #btnCrear = null;
    #btnSalir = null;
    constructor() {
        this.#txtnombres = document.getElementById("txtNombres");
        this.#txtapellidos = document.getElementById("txtApellidos");
        this.#arrayRadioSexo = document.getElementsByName("sexo");
        this.#btnCrear = document.getElementById("btnCrear");
        this.#btnSalir = document.getElementById("btnSalir");
    }
    #obtenerSexoValue() {
        let valor = null;
        for(let item of this.#arrayRadioSexo) {
            if(item.checked && item.value === "M") {
                valor = "masculino";
            }
            if(item.checked && item.value === "F") {
                valor = "femenino";
            }
        }
        return valor;
    }
    #gestionarException(error) {
        if(!"cause" in error) return;
        if(error.opciones)
            alert(error.opciones.errmsg);
        return;
    }
    eventos() {
        const t = this;
        t.#btnCrear.addEventListener("click", function() {
            t.#guardar();
        });
        t.#btnSalir.addEventListener("click", function() {
            alert("No se ha implementado");
        });
    }
    #guardar() {
        try {
            const nombres = this.#txtnombres.value.trim();
            const apellidos = this.#txtapellidos.value.trim();
            const sexo = this.#obtenerSexoValue();
            const usuario = new UsuarioDTO(nombres, apellidos, sexo);
            localStorage.setItem("usuario_guardado", usuario.obtenerJson());
            alert("Se registró un usuario");
        } catch (error) {
            //alert(error.message);
            this.#gestionarException(error);
            throw new Error(error);
        }
    }
}

export { FormularioRegistroUsuario };