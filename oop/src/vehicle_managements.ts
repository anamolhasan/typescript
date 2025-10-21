// Project: Vehicle Managements System

interface Vehicle {
    brand: string;
    speed: number;
    move(): void
}

// step 2: create a parent class
class Car implements Vehicle{
    protected year: number = 2025

    constructor(public brand:string, public speed:number){}

    move(): void {
        console.log(`The ${this.brand} car is moving at ${this.speed} km/h.`)
    }
}

// step 3: create a child class
class ElectricCar extends Car {
    charge(){
        console.log(`${this.brand} ${this.year} is charging...`)
    }
}

// step 4: create an object instance
const tesla = new ElectricCar ('Tesla Model 3', 120)
tesla.move()
tesla.charge()