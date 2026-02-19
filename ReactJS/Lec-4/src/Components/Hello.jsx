import React, { useState } from 'react'

function Hello() {///js
    const[name,setname]=useState("")
    const[Email,setEmail]=useState("")
    const handle = (event) =>{
        event.preventDefault();
        alert(`Name:${name} 
            Email : ${Email}`);
        
    }
    
   



  return (//html

    <div>
      <form onSubmit={handle}>
        <fieldset>
            <legend>Log in Page</legend>
            <input type="text" placeholder='Enter Name' onChange={(event)=>setname(event.target.value)}/>
            &hearts; &gt; &lt; &nbsp;
            <input type="email" placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)} />
            <br />
            <button type='Submit'>Submit</button>

        </fieldset>
        

      </form>

      <strong>All rights reserved to &copy; 2026</strong>
    </div>
  )
}

export default Hello
