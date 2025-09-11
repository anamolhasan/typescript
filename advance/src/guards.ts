// type guards: typeOf, in operator and instanceof

// typeof Type Guards
function display(val:string|number){
    if(typeof val === 'string'){
        console.log(`Its a string :`, val.toUpperCase())
    }else{
        console.log('Its a number :', val.toFixed(2))
    }
}

// display('Full stack-developer')
// display(23.46757867554)



// in operator type guards
type Car = {
    drive: () => void
}

type Boat = {
    sail: () => void
}


function move (vehicle:Car | Boat){
    if('drive' in vehicle){
        vehicle.drive()
    }else{
        vehicle.sail()
    }
}


const car : Car = {
    drive: ()=>{
        console.log('car is driving....')
    }
}
move(car)




// instanceof Type Guards
class Dog {
    bark(){
        console.log('gau gau!')
    }
}
class Cat {
    meow(){
        console.log('meow meow!')
    }
}

function makeSound(animal:Dog|Cat){
    if(animal instanceof Dog){
        animal.bark()
    }else{
        animal.meow()
    }
}

const dog = new Dog()
const cat = new Cat()
makeSound(dog)
makeSound(cat)

