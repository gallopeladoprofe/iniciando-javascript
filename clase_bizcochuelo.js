class Bizcochuelo {
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
    }
    get sabor() {
        return this.#sabor;
    }
    get peso() {
        return this.#peso;
    }
    get forma() {
        let forma = this.#forma;
        let formateado = forma.toUpperCase();
        return formateado;
    }
    set forma(forma) {
        this.#forma = forma.toUpperCase();
    }
}

// forma, sabor, tamanho, color, aroma, peso, textura
const marmolado = new Bizcochuelo("corazoncito", "chocolate_vainilla", 15, "blanco_marron", "nutella", 1.6, "esponjoso");
console.log(marmolado.sabor);
console.log(marmolado.peso);
console.log(marmolado.forma);

const bizchVaini = new Bizcochuelo("redondo", "vainilla", 10, "amarillento", "vainilla");
console.log(`El segundo objeto tiene la forma ${bizchVaini.forma}`);