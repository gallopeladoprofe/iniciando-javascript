class MasaConfiteria {
    #forma;
    #sabor;
    #tamanho;
    #color;
    #aroma;
    #peso;
    #textura;
    constructor(forma, sabor, tamanho, color, aroma, peso, textura) {
        this.#forma = forma;
        this.#sabor = sabor;
        this.#tamanho = tamanho;
        this.#peso = peso;
        this.#textura = textura;
    }
    get sabor() {
        return this.#sabor;
    }
    get peso() {
        return this.#peso;
    }
    get forma() {
        return this.#forma;
    }
    get textura() {
        return this.#textura;
    }
    set forma(forma) {
        this.#forma = forma.toUpperCase();
    }
}

class Bollo extends MasaConfiteria {
    constructor(sabor, tamanho, peso, textura) {
        // le llamo al constructor padre
        super("", sabor, tamanho, "", "", peso, textura);
    }
    get textura() {
        return super.textura;
    }
}

const bolloCrema = new Bollo("Dulce de leche", "mediano", 250, "esponjocito");
console.log(bolloCrema.textura);