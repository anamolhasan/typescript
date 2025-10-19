

// type alias
type User = {
    name:string,
    age:number,
    email:string
}

// define interface

interface UserProfile {
    name:string,
    age:number,
    email:string
}

// marge the interface of a Parson

interface Parson {
    name:string
}

interface Parson {
    age:number
}

const p : Parson = {name:'anamol hasan', age:27}


// when to use which


// 1. designing public APIs : interface
// 2. for simple object : use both 
// 3. Union and Intersection types : use type 
// 4. primitive or function : use type 
// 5. flexibility: interface (extended) and type (union and interceptor)