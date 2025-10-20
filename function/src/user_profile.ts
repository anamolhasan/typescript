// user profile

// step 1. create an user interface
interface User {
    id:number,
    userName:string,
    email:string
}

// step 2. create an author interface
interface Author extends User {
    bio:string,
    posts:string[]
}

// Literal type
// step 3. define user status using type
type Status = 'active' | 'inactive' | 'banned'


// step 4. crete an author object
const author1 : Author = {
    id:1,
    userName:'anamol hasan',
    email:'anamolhasan.job@gmail.com',
    bio:'I am a full stack developer',
    posts:['post 1', 'post 2', 'post 3']
}

// step 5. make account status
const accountStatus : Status = 'active'