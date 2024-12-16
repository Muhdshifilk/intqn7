import React from 'react'
import { useState } from 'react'

function Child({state}) {
    const [count,setCount]=useState(1)
   
    const buttonHandler=()=>{
        setCount(count+1)
        state(count)
    }
  return (
    <>
        <button className='btn btn-info form-control' onClick={buttonHandler}> +1 </button>
    </>
  )
}

export default Child