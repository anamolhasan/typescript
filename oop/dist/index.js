"use strict";
// modifiers (public, private, protected)
Object.defineProperty(exports, "__esModule", { value: true });
// public: access from anywhere
// private: only class
// protected: only class and subclasses
// create a bank account class
class BankAccount {
    accountName;
    balance;
    accountType;
    constructor(name, amount) {
        this.accountName = name;
        this.balance = amount;
        this.accountType = "savings";
    }
    showBalance() {
        console.log(`AccountName: ${this.accountName}, Balance: ${this.balance}`);
    }
}
// create a new bank account
const account1 = new BankAccount('anamol Hasan', 10000);
account1.showBalance();
// Inheritance
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving...`);
    }
}
class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}
const myDog = new Dog('Tommy');
myDog.move();
//# sourceMappingURL=index.js.map