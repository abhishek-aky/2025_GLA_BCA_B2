import React from 'react'

function Hello() { //Upper part -- Stements : JS
    let num = 10;
    let naam = 'Abhishek';
    let st = true;
    let st2 = false;

  return ( //Lower Part - HTML
    <>
    <h2>{num}</h2>
    <h3>{naam}</h3>
    <h4>{JSON.stringify(st)}</h4>
    <h5>{st2}</h5>

    </>
  )
}

export default Hello
