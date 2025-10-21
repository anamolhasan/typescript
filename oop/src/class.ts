// Defining classes

class Parson {
    name:string;
    age:number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello, ${this.name} He/she is ${this.age}`)
    }
}

const user1 = new Parson('David', 25)
user1.greet()