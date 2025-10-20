
import './App.css'
import Greeting from './components/Greeting'

function App() {

  const name= 'Anamol hasan';
  const age= 27

  return (
    <>
    <h1>React TypeScript Project</h1>
       <Greeting userName={name} age={age}/>
    </>
  )
}

export default App
