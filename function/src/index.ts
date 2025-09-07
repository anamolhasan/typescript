// function with typescript

// function funName (parameterName:type):ReturnType{
//     // logic
// }

function greet (name:string):string{
    return `Hello ${name}`
}
console.log(greet('anam'))



// function type signature
let greetFunction: (name:string) => string

greetFunction = function(name:string):string{
    return `Hi ${name}`
}

console.log(greetFunction('Hasan'))