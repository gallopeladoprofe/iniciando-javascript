function hacerAlgo(callback, callback2) {
    // Otras operaciones que quiero que se ejecute
    let suma = 2 + 2;
    callback2(suma);
    // aqui hay un proceso intentando ejecutarse
    callback();
}

function decirHola() {
    console.log("Holis");
}

function multiplicar(suma) {
    console.log(suma * 2);
}

function saludarConNombre() {
    console.log("holis, Juan");
}

document.addEventListener("DOMContentLoaded", function(){
    hacerAlgo(decirHola, multiplicar);
    hacerAlgo(saludarConNombre, multiplicar);
});