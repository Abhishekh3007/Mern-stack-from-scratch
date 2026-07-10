// import React from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <div>
        {props.children}
      <button onClick={props.inc}>{props.text}


      </button>
    </div>
  )
}

export default Button
