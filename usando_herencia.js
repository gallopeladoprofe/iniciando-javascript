class Vehicle {
    constructor(color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
        }
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Driving on one wheel!");
    }
    cambiarColor() {
        // accediendo a la propiedad del padre
        this.color = "rojo"
    }
    ejecutarMetodoDelPadre() {
        // accediendo al metodo del padre
        super.move();
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");