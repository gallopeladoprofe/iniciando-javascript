/* const promesa = new Promise(
    function(resolve, reject){

        //ejecutando cosas que toman tiempo
        //resolve("resuelto");
        reject("Verdeeeee!!");
    }
);
 */
const promesa2 = new Promise((res, rej) => {
    res("Positivo");
});


document.addEventListener("DOMContentLoaded", function() {
    /* promesa.then(
        function(valor) {
            console.log(valor);
        },
        function (error) {
            console.error(error);
        }
    ); */
    /* promesa2.then(valor => {
        console.log(valor);
        return "Hola";
    }).then(valor => {
        console.log(valor);
        return valor;
    }).then(valor => {
        return valor+", Soy una promesa";
    }).then(valor => console.log(valor)); */
    //console.log(promesa2);
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

    const pro = fetch('https://jsonplaceholder.typicode.com/todos/1');
    //console.log(pro);
    pro.then(res => {
        console.log(res);
        //console.log(res.json());
        return res.json();
    }).then(valor => {
        console.log(valor);
    });
});