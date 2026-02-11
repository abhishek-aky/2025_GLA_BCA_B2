import React, { useState } from 'react'

function Count() {

  const [ginti, gintiUpdate] =  useState(0);

  return (
    <div>
        <strong>Value of Count is : {ginti}</strong>
    <hr />

        <button onClick={()=> gintiUpdate(ginti+1)}>+</button>
        <button onClick={()=> gintiUpdate(ginti-1)}>-</button>
        <button onClick={()=> gintiUpdate(0)}>0</button>
    </div>
  )
}

export default Count;






