import { useState } from 'react'
import Child from './Components/Child'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(count)

  return (
    <>
    <h6>7.Counter application using Component Communication</h6>
      <div className='m-5 p-5 w-50'>
        <input className='form-control mb-3' Value={count} type="text"/>
        <Child state={setCount}/>
      </div>
      
    </>
  )
}

export default App
