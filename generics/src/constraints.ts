
// generics
function logData <T>(data: T) {
    console.log(data)
}

logData<string>('Hello, world')
logData(23)
logData(true)
logData<string[]>(['A', 'B', 'C'])


// any vs generics 
// any data check kore na 
// generic data check kore



// Constraints
function printLength <T extends {length : number}>(item : T) {
    console.log(item.length)
}
printLength("Hello, Developer")  // 18
printLength([1, 4, 6]) 


// id check
interface HasId {
    id: number
}

function getId <T extends HasId>(item:T):number {
    return item.id
}

