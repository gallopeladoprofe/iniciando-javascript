function crearPersona(nombre, apellidos, cedula) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.cedula = cedula;
}

// una instancia, creacion antigua
let achar = new crearPersona("Marcelo", "Achar", "9645558");
achar.cedula = "31267890";
//console.log(achar);

// creacion de clase
class Persona {
    constructor(nombre, apellidos, cedula, altura) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cedula = cedula;
        this.altura = altura;
        this.sexo = "";
        this.amigos = [];
    }
    agregarAmigo(amigo) {
        if(amigo) {
            this.amigos.push(amigo);
        }
    }
}

// como creo una instancia de Persona
let giovanni = new Persona("Giovanni", "Gonzalez", "9634582", 1.72);
giovanni.sexo = "M";
let mayerli = new Persona("Mayerli", "Torres", "55542358", 1.63)
mayerli.sexo = "F";
let sebastian = new Persona("Sebastian", "Santacruz", "500000", 1.81);

giovanni.agregarAmigo(mayerli);
giovanni.agregarAmigo(sebastian);

console.log(giovanni);