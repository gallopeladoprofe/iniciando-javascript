function hacerCirculo() {
    // ref: https://www.w3schools.com/graphics/tryit.asp?filename=trycanvas_circle
    const canva_circulo = document.getElementById("canva_circulo");
    const ctx = canva_circulo.getContext("2d");

    ctx.beginPath();
    ctx.arc(150, 75, 75, 0, 2 * Math.PI);
    return ctx;
}

function cambiarColor(color="red") {
    const circulo = hacerCirculo();
    circulo.fillStyle = color;
    circulo.fill();
    /*ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke(); //linea*/
}

function agregarEventos() {
    document.getElementById("btnarriba").addEventListener("click", function() {
        cambiarColor("#AEDA97");
    });
    document.getElementById("btnizquierda").addEventListener("click", function() {
        cambiarColor("#97DAC6");
    });
    document.getElementById("btnderecha").addEventListener("click", function() {
        cambiarColor("#97B3DA");
    });
    document.getElementById("btnabajo").addEventListener("click", function() {
        cambiarColor("#C197DA");
    });

    document.addEventListener("keydown", function(e) {
        console.log(e);//explorar por favor
        if(e.key === "ArrowUp") {
            document.getElementById("btnarriba").click();
        }
    });
}
//funcion principal o main
document.addEventListener("DOMContentLoaded", function() {
    //hacerCirculo();
    agregarEventos();
});