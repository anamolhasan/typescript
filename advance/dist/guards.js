"use strict";
// type guards: typeOf, in operator and instanceof
Object.defineProperty(exports, "__esModule", { value: true });
// typeof Type Guards
function display(val) {
    if (typeof val === 'string') {
        console.log(`Its a string :`, val.toUpperCase());
    }
    else {
        console.log('Its a number :', val.toFixed(2));
    }
}
function move(vehicle) {
    if ('drive' in vehicle) {
        vehicle.drive();
    }
    else {
        vehicle.sail();
    }
}
const car = {
    drive: () => {
        console.log('car is driving....');
    }
};
move(car);
// instanceof Type Guards
class Dog {
    bark() {
        console.log('gau gau!');
    }
}
class Cat {
    meow() {
        console.log('meow meow!');
    }
}
function makeSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
makeSound(dog);
makeSound(cat);
//# sourceMappingURL=guards.js.map