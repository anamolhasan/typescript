
// type alias
// type GreetingProps = {
//     userName:string,
//     age:number
// }

// type interface
interface GreetingProps {
    userName:string,
    age:number
}

const Greeting = ({userName, age}:GreetingProps) => {

  return (
    <div>
        <h4>My Name Is {userName}, and {age} Years Old</h4>
    </div>
  )
}

export default Greeting