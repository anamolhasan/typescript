// any  type

let randomValue: any = 'Hello'

randomValue = 10

randomValue = true


// unknown type
let value: unknown = 'World'
if(typeof value === 'string'){
    console.log(value.toUpperCase())
}


// void type
function logMessage (): void{
    console.log('Logged successful')
}

// null type
let number = null
console.log(number)

// undefine type
let name;
console.log(name)



// null and undefine type
let nothing : null = null
let noAssigned: undefined = undefined


// type inference
let city:string = 'brahman-baria'