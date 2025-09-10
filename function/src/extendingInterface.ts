// Extending interfaces

// step 1. create an animal interface of an animal

interface Animal {
    name:string
}

// step 2. create an interface of a dog that extend the animal interface
interface Dog extends Animal{
    breed: string
}

const myDog :Dog = {
    name:'Tommy',
    breed:'Golden Retriever'
}