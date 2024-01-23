debugger;
let arrDeFiguras = ["circulo", "triangulo", "rectangulo"
                , "pentagono"];
console.log({arrDeFiguras});

/* splice recibe varios argumentos, en la
posicion 2 va a poner cuadrado y trapezoide y el 0 significa
que no va a reemplazar lo que estaba rectangulo
"circulo", "triangulo",<-- "cuadrado", "trapezoide"---->",rectangulo", "pentagono"
*/
arrDeFiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrDeFiguras);

// borrar elementos
arrDeFiguras.splice(2, 4, "rombo");
console.log(arrDeFiguras);