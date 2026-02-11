import React from 'react'

function Hello() {
    // Math.floor(Math.random()*10)
    let rn = Math.floor(Math.random()*10)
    let luckyNum = 7;
    // let el;
    // if(rn === luckyNum){
    //     el = <strong>Lucky 7!! 😎</strong>
    // }
    // else{
    //     el = <p>Better Luck Next time 😭 : {rn}</p>
    // }
  return (
    <div>
        {/* {el} */}


        {
            (rn === luckyNum)?(<strong>Lucky 7!! 😎</strong>):(<p>Better Luck Next time 😭 : {rn}</p>)
        }
    </div>
  )
}

export default Hello
