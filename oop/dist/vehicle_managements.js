"use strict";
// Project: Vehicle Managements System
Object.defineProperty(exports, "__esModule", { value: true });
// step 2: create a parent class
class Car {
    brand;
    speed;
    year = 2025;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    move() {
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h.`);
    }
}
// step 3: create a child class
class ElectricCar extends Car {
    charge() {
        console.log(`${this.brand} ${this.year} is charging...`);
    }
}
// step 4: create an object instance
const tesla = new ElectricCar('Tesla Model 3', 120);
tesla.move();
tesla.charge();
//# sourceMappingURL=vehicle_managements.js.map