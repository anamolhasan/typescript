// union and intersection type

// union type (|)

let value : string | number

type ProductId = string | number

function getProduct(id:ProductId){
    console.log(`Fetching product with id ${id}`)
}

getProduct('123erd4')
getProduct(235643)