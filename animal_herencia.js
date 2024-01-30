class Animal {
    //atributos priavados
    #patas = 4;
    constructor(patas) {
        this.#patas = patas;
    }
    get patas() {
        return this.#patas;
    }
}

class Mamifero extends Animal {
    #tipoPelaje;
    constructor(patas, tipoPelaje) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
        this.#tipoPelaje = tipoPelaje;
    }
}

class Pez extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Reptil extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

class Ave extends Animal {
    constructor(patas) {
        // cuando se hace la herencia, es obligatorio esto:
        super(patas);
    }
}

debugger;
//creacion de instancias
const pez = new Pez(0);
console.log(pez.patas);
const mam = new Mamifero(2, "lanudo");

console.log(mam.patas);