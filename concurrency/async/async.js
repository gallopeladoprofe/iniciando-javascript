function decirAlgo(x) {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve("algo " + x);
        }, 5000);
        
    });
}

async function hablar(x) {
    const palabras = await decirAlgo(x);
    console.log(palabras);
}

const startTime01 = performance.now();
hablar(3);
const endTime01 = performance.now();

const startTime02 = performance.now();
hablar(6);
const endTime02 = performance.now();

const startTime03 = performance.now();
hablar(9);
const endTime03 = performance.now();


console.log("Función 1: ", endTime01 - startTime01);
console.log("Función 2: ", endTime02 - startTime02);
console.log("Función 3: ", endTime03 - startTime03);

/*
¿Qué conclusiones tienes, con claridad no todas se ejecutan a la vez?
*/