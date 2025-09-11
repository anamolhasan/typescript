// union and intersection type

// union type (|)

let value : string | number

type ProductId = string | number

function getProduct(id:ProductId){
    console.log(`Fetching product with id ${id}`)
}

getProduct('123erd4')
getProduct(235643)

// intersection type (&)
type User = {
   id:string,
   name:string
}

type Admin = {
    isAdmin:boolean
}

type AdminUser = User & Admin 

const admin : AdminUser = {
    id:'userId1',
    name:'anamol hasan',
    isAdmin:true
}



// literal type
type Action = 'start' | 'pause' | 'stop' | 'submit' | 'reset'

function handleAction(action:Action){
   console.log(`action : ${action}`)
}

handleAction('start')

