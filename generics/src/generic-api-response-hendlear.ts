//  Project: Generic API response handler.

//  step-1: api response interface (generics)

interface ApiResponse <T>{
    status: number;
    message: string;
    data: T
}

//  step-2: write to a function to fetch api
function handleApiResponse <T extends object > (response: ApiResponse<T>): T {
   if(response.status === 200)
}