// import React from 'react'
import {useState} from 'react'
import './counter.css'

const Counter = () => {
    const [count,setCount]=useState(10);

  return (
    <div className="counter">
        <p classNName="para">Counter is Clicked {count} times</p>
        <button className="abc" onClick={()=>setCount(count+1)}>INCREMENT</button>
        <button className="abc" onClick={()=>setCount(count-1)} >DECREMENT</button>

      
    </div>
  )
}

export default Counter
