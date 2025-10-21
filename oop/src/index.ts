// modifiers (public, private, protected)

// public: access from anywhere
// private: only class
// protected: only class and subclasses

// create a bank account class
class BankAccount {
    public accountName:string
    private balance: number
    protected accountType: string

    constructor(name:string, amount:number){
        this.accountName = name
        this.balance = amount
        this.accountType = "savings"
    }

    public showBalance(){
        console.log(`AccountName: ${this.accountName}, Balance: ${this.balance}`)
    }
}

// create a new bank account
const account1 = new BankAccount('anamol Hasan', 10000)
account1.showBalance()



// Inheritance

class Animal {
    constructor (public name: string) {  }

    move(){
        console.log(`${this.name} is moving...`)
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!')
    }
}

const myDog = new Dog('Tommy')
myDog.move()