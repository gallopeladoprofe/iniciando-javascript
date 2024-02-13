class UsuarioDTO {
    #nombres;
    #apellidos;
    #sexo;
    constructor(nombres, apellidos, sexo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.sexo = sexo;
    }
    get nombres() {
        return this.#nombres;
    }
    set nombres(nombres) {
        if(nombres.trim())
            this.#nombres = nombres.trim();
        else {
            const error = new Error("Error al set nombre");
            error.opciones = { idnodo: "txtnombres", errmsg: "Debe cargar nombres" };
            throw error;
        }
    }
    get apellidos() {
        return this.#apellidos;
    }
    set apellidos(apellidos) {
        if(apellidos.trim())
            this.#apellidos = apellidos.trim();
        else throw new Error("Error al set apellido");
    }
    get sexo() {
        return this.#sexo;
    }
    set sexo(sexo) {
        if(sexo && sexo.trim())
            this.#sexo = sexo.trim();
        else throw new Error("Error al set sexo");
    }
    obtenerJson() {
        return JSON.stringify({
            nombres: this.nombres
            , apellidos: this.apellidos
            , sexo: this.sexo
        });
    }
}

export { UsuarioDTO };