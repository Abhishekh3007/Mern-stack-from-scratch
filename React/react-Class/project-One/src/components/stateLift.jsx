// import React from 'react'

const StateLift = (props) => {
  return (
    <div>
       <h3> {props.name} </h3>
        <input type="text" placeholder="ENTER ANYTHING"   onChange={(e)=>{props.fun(e.target.value)}} />
        <p>{props.state} </p>
      
    </div>
  )
}

export default StateLift
