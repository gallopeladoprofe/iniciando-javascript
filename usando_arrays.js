// variables normales y sus tipos
let unaVariable = "naranja";

//arrays
let razasDePerros = ["labrador", "gran danes"
                    , "san bernardo", "pitbull"
                    , "pastor aleman"];

// sobreescribiendo un array en la posicion -36
razasDePerros[-36] = null;

razasDePerros[1] = "dalmata";

console.log({razasDePerros});

console.log(razasDePerros[5]);
console.log(razasDePerros[-36]);



// uso de la propiedad length
const cantidadRazaDePerros = razasDePerros.length;
console.log(razasDePerros.length);
console.log(cantidadRazaDePerros);


