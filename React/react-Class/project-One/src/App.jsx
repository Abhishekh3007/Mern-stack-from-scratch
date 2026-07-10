
// import './App.css'
// import  Cards from './components/cards.jsx'
// import one from './assets/one.png'
// import two from './assets/two.jpg'
// import Parent from './components/parent.jsx'
// import Counter from './components/Counter.jsx'
import Button from'./components/Button.jsx'
import {useState } from 'react'

function App() {
  // const name = "Dhanush";
  const[state,setState]=useState(0);

  function handleClick(){
    setState(state+1);
  } 

  return (
    <div className="App">
    
    {/* <Cards  name='Dhanush ' desc='Full Stack Developer' image={one} />
    <Cards  name ='Jhon' desc='DevOps Engineer' image={two} /> */}
    {/* <Parent data={name} /> */}
    {/* <Counter />
    <Cards>
      <h1>Hello</h1>
      <h2>HEllo</h2>
      
    </Cards> */}
    <Button inc={handleClick} text='INCREMENT' >
      {state};


    </Button>
    </div>
  )
}

export default App
