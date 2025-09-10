


const student = {
    name:'anam',
    age:27
}

function printUser (user:{name:string,age:number}) : void {
    console.log(`${user.name} is ${user.age} years old.`)
}
printUser((student))


