function hablar(x) {
    setTimeout(() => {
        console.log("algo " + x);
    }, 5000);
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
