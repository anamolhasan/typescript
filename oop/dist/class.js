"use strict";
// Defining classes
Object.defineProperty(exports, "__esModule", { value: true });
class Parson {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, ${this.name} He/she is ${this.age}`);
    }
}
const user1 = new Parson('David', 25);
user1.greet();
//# sourceMappingURL=class.js.map