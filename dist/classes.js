"use strict";
// class Greeter {
//     greeting: string
//     constructor(message: string) {
//         this.greeting = message
//     }
//     greet() {
//         return "Hello " + this.greeting
//     }
// }
// const greeter = new Greeter("how are you?")
// console.log(greeter.greet())
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log("moved " + distanceInMeters + " meters");
    }
}
class Rhino extends Animal {
    constructor() {
        super("Rhino");
    }
    getAnimalName() {
        return `This animal instance has a name of ${this.name}`;
    }
}
let kitty = new Animal("Cat");
let rhino = new Rhino;
console.log(rhino.getAnimalName());
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        super.move(distanceInMeters);
    }
}
let snake = new Snake('Slithy');
console.log(snake.move());
