/* 
Nombre: Yeti
Caracteristicas:
- Tiene mucho pelo
- Cuernos
- 4 extremidades
- mascara
- peso
- altura
- dos ojos
- daño
- vida
- coste de entrenamiento
- tiene yetimitas

Que sabe hacer, habilidades?
- Sabe multiplicarse asi mismo al morir
- gana niveles
- se mueve a una velocidad de 12
- cuando recibe 600 de daño suelta un yetimita
- ataca edificios

*/

// crear objeto Yeti
const yeti = {
    pelo: ""
    , nroDeCuernos: null
    , nroDeExtremidades: null
    , tieneMascara: false
    , peso: null
    , altura: null
    , tieneOjos: false
    , danho: null
    , vida: null
    , tiempoDeCrecimiento: ""
    , tieneYetimitas: false
    , nroDeYetimitas: 0
    , velocidadMovimiento: 0
    , multiplicarYetimitas: function() {
        if(this.tieneYetimitas) {
            this.nroDeYetimitas+=2;
        } else {
            console.log(`No tiene yetimitas, valor de yetimitas ${this.tieneYetimitas}`);
        }
    }
    , ganarNiveles: () => {}
    , moverseAVelocidad: function() {}
    , recibirDanho: () => {}
    , atacarEdificios: function() {}
}

yeti.tieneMascara = true;
yeti.nroDeCuernos = 2;
yeti.nroDeExtremidades = 4;
yeti.peso = 500;

yeti.tieneYetimitas = true;
yeti.multiplicarYetimitas();

console.log(yeti);
