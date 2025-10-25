//  with generics (super reusable)

function logData <T>(data: T) {
    console.log(data)
}
logData<string>("Hello")
logData<number>(222)
logData<boolean>(true)



// generics interface example.........
interface ApiResponse<T> {
    success:boolean;
    data: T
}

const userResponse:ApiResponse<{name:string}> = {
     success:true,
     data: {
        name: "Alice"
     }
}

const numberResponse: ApiResponse<number> = {
    success: false,
    data:42
}