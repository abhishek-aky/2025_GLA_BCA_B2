import React, { useState } from 'react'

function Counter() {

    //Variable : Count
    //Function : setCount
  const [count, setCount] = useState(0);

  return (
    <>

    <div> <h3>Value of Count is {count}</h3>
       <div>
            <button onClick={()=> setCount(count+1)}>+</button>
            <button onClick={()=> setCount(count-1)}>-</button>
            <button onClick={()=> setCount(0)}>0</button>
       </div>
    </div>
    
    </>
  )
}

export default Counter;






