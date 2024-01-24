//definiendo la funcion
// funciones normales
function decirHola() {
    //bueno, aqui dentro vas a 
    //escribir las sentencias de tu programa o
    //algoritmo
    console.log("hola");
}

function otraFuncion() {
    console.log("Soy una alerta");
}
//lo que esta dentro del parentesis se llama parametro, y es por defecto
function decirNombre(nombre="no puso el nombre") {
    console.log(`El nombre ingresado es ${nombre}`);
}

function dameElNombreDeMiMascotaNormal(nombre) {
    return nombre;
}

// funcion flecha, la flechita es el return
const dameElNombreDeMiMascota = (nombre) => nombre;

//funciones anonimas
const recibiendoFuncionAnonima = function() { console.log("Soy una funcion anonima"); };


//invoco, llamo, call
decirHola();
otraFuncion();
recibiendoFuncionAnonima();
//lo que esta dentro del parentesis se llama argumento
decirNombre("Abigails");
decirNombre();
const nombredemascota = dameElNombreDeMiMascotaNormal("firulais");

// al fin vamos a usar find
const frutas = ["pomelo", "manzana", "bananas"];
const frutaEncontrada = frutas.find(function(fruta) { return fruta === "pomelo" } );
const frutaEncontradaConFuncionFlecha = frutas.find( (fruta) => fruta === "pomelo" );
console.log(frutaEncontrada);
console.log(frutaEncontradaConFuncionFlecha);