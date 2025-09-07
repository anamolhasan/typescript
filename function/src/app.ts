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
