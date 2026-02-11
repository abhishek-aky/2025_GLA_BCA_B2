import React, { useState } from 'react'

function LogIn() {
    const  [naam, BadalDo] =  useState("Doraemon");

  return (
    <div>
            <h2>Log-Out</h2>
    <hr />
            <strong>Welcome into the 22nd Century {naam}</strong>
            <hr />
            <button onClick={()=> BadalDo("Anonymous")}>Log-Out</button>
    </div>
  )
}

export default LogIn;



