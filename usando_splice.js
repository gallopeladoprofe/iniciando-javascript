let arrDeFiguras = ["circulo", "triangulo", "rectangulo"
, "pentagono"];
console.log({arrDeFiguras});

// la maquinita de afeitar slice
//const valorObtenidoDeSplice = arrDeFiguras.splice(2, 2);

/* splice recibe varios argumentos, en la
posicion 2 va a poner cuadrado y trapezoide y el 0 significa
que no va a reemplazar lo que estaba rectangulo
"circulo", "triangulo",<-- "cuadrado", "trapezoide"---->",rectangulo", "pentagono"
*/
arrDeFiguras.splice(2, 0, "cuadrado", "trapezoide");
console.log(arrDeFiguras);

// el experimento de traer solamente
// "circulo", "triangulo" y "cuadrado"
//debugger;
const cortadito_1 = arrDeFiguras.splice(0,2);
const cortadito_2 = arrDeFiguras[0];
const mezclar = cortadito_1.concat(cortadito_2);
//debugger;


// borrar elementos
debugger;
arrDeFiguras.splice(2, 4, "rombo");
console.log(arrDeFiguras);
//borrar el ultimo
arrDeFiguras.pop();
console.log(arrDeFiguras);
//borrar el primero
arrDeFiguras.shift();
console.log(arrDeFiguras);