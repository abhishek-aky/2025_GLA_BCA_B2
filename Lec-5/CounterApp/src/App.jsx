import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <h3>count is {count}</h3>
        </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment button
        </button>
      </div>

      <div className='card'>
        <button onClick={()=> setCount((count)=> count - 1)}>
          Decrement button
        </button>
      </div>

      <div className='card'>
        <button onClick={()=> setCount((count)=> count = 0)}>
          Reset button
        </button>

      </div>



      
    </>
  )
}

export default App
