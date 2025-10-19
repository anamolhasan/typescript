// object type
const student = {
    name:'anam',
    age:27
}

function printUser (user:{name:string,age:number}) : void {
    console.log(`${user.name} is ${user.age} years old.`)
}
printUser((student))



// type alias
type User = {
    name:string,
    age:number
}

function showUser (user: User) {
    console.log(user.name)
}
const user1 = {name:'hasan', age:23}
showUser(user1)

// type alias
type Product = {
    id:number,
    name:string,
    price:number,
    description?:string    // optional change ?
}
const item1:Product = {
     id:1,
     name:'laptop',
     price:29000,

}
const item2:Product = {
     id:1,
     name:'m',
     price:29000,
     description:'how mony much very something'

}