// void return type
function logMessage (message: string): void {
    console.log('Log', message)
}


// never return type (advanced)
function throwError () : never {
    throw new Error ('Something went wrong!')
}


// Optional and default parameter

function greet(fistName:string, lastName:string,title?:string):string{
    return `Hello ${fistName} - ${lastName} is a ${title ? title : 'N/A'}`
}
console.log(greet('anam', 'Hasan','student'))
console.log(greet('anam', 'Hasan',))


// default parameter
function welcomeMessage(name:string='guest'):string{
    return `Welcome ${name}`
}
console.log(welcomeMessage())
console.log(welcomeMessage("Hasan"))
