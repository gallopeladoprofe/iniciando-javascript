class Persona {
    #nombres;
    #apellidos;
    #domicilio;
    #nacionalidad;
    #sexo
    constructor(nombres, apellidos, domicilio, nacionalidad, sexo) {
        this.#nombres = nombres;
        this.#apellidos = apellidos;
        this.#domicilio = domicilio;
        this.#nacionalidad = nacionalidad;
        this.#sexo = sexo;
    }
    get nombres() {
        return this.#nombres;
    }
    set nombres(nombres) {
        this.#nombres = nombres;
    }
}

class Nacionalidad {
    #id;
    #nombre;
    constructor(id, nombre) {
        this.#id = id;
        this.#nombre = nombre;
    }
    get id() {
        return this.#id;
    }
    get nombre() {
        return this.#nombre;
    }
    set id(id) {
        this.#id = id;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
}

class Ciudad {
    #id;
    #nombre;
    constructor(id, nombre) {
        this.#id = id;
        this.#nombre = nombre;
    }
    get id() {
        return this.#id;
    }
    get nombre() {
        return this.#nombre;
    }
    set id(id) {
        this.#id = id;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
}

class Barrio {
    #id;
    #nombre;
    constructor(id, nombre) {
        this.#id = id;
        this.#nombre = nombre;
    }
    get id() {
        return this.#id;
    }
    get nombre() {
        return this.#nombre;
    }
    set id(id) {
        this.#id = id;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
}

class Colonia {
    #id;
    #nombre;
    constructor(id, nombre) {
        this.#id = id;
        this.#nombre = nombre;
    }
    get id() {
        return this.#id;
    }
    get nombre() {
        return this.#nombre;
    }
    set id(id) {
        this.#id = id;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
}

class Municipio {
    #id;
    #nombre;
    constructor(id, nombre) {
        this.#id = id;
        this.#nombre = nombre;
    }
    get id() {
        return this.#id;
    }
    get nombre() {
        return this.#nombre;
    }
    set id(id) {
        this.#id = id;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }
}

class Domicilio {
    #calle;
    #nroCasa = "";
    #barrio;
    #ciudad;
    #colonia;
    #municipio;
    constructor(calle, nroCasa, barrio, ciudad, colonia, municipio) {
        this.#calle = calle;
        this.#nroCasa = nroCasa;
        this.#barrio = barrio;
        this.#ciudad = ciudad;
        this.#colonia = colonia;
        this.#municipio = municipio;
    }
    get calle() {
        return this.#calle;
    }
    set calle(calle) {
        this.#calle = calle;
    }
    get nroCasa() {
        return this.#nroCasa;
    }
    set nroCasa(nroCasa) {
        this.#nroCasa = nroCasa;
    }
    get barrio() {
        return this.#barrio;
    }
    set barrio(barrio) {
        this.#barrio = barrio;
    }
    get ciudad() {
        return this.#ciudad;
    }
    set ciudad(ciudad) {
        this.#ciudad = ciudad;
    }
    get colonia() {
        return this.#colonia;
    }
    set colonia(colonia) {
        this.#colonia = colonia;
    }
    get municipio() {
        return this.#municipio;
    }
    set municipio(municipio) {
        this.#municipio = municipio;
    }
}

// crear instancias
const barrio = new Barrio(1, "San Miguel");
const ciudad = new Ciudad(1, "Fernando de La Mora");
const municipio = new Municipio(1, "Municipalidad de Fenando de la Mora");
const domicilioDeMartin = new Domicilio("Tte. Acosta", 856, barrio, ciudad, null, municipio);
const nacionalidad = new Nacionalidad(1, "paraguaya");
const martin = new Persona("Martin", "Coronel", domicilioDeMartin, nacionalidad, "M");


martin.nombres = "pepito";
console.log(martin.nombres);