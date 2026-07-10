// import React from 'react'
// import hero from '../assets/hero.png'
import './cards.css'
const Cards = (props) => {
  return (
    <div className= 'profile'>
      {/* <p className='name'>{props.name}
        <h4>SOFTWARE ENGINEER  & DEVOPS & ML DEVELOPER </h4>
      </p>
      <img src={props.image} alt='abhi'  className='imgs'/>
      <p className='description'>{props.desc}</p> */}
     {props.children}
      
    </div>
  )
}

export default Cards
