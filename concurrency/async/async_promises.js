// alteramos de forma randómica el tiempo del timeout de 0 a 5 segundos
function decirAlgo(x) {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            resolve("algo " + x);
        }, Math.floor(Math.random() * 5000));
        
    });
}

function hablar(x) {
    return new Promise((resolve, reject) => {
        const startTime01 = performance.now();
        decirAlgo(x).then(palabras => {
            const endTime01 = performance.now();
            console.log(palabras);
            console.log("Tiempos: ", endTime01 - startTime01);
            resolve(palabras); // resolvemos la promesa con las palabras
        })
        .catch(error => {
            reject(error); // rechazamos la promesa si hay un error
        });
    });
}

Promise.all([hablar(3), hablar(6), hablar(9)])
.then((values)=> {
    console.log(values);
})
.catch(error => {
    console.log(error);
});