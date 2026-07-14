
// import './App.css'
// import  Cards from './components/cards.jsx'
// import one from './assets/one.png'
// import two from './assets/two.jpg'
// import Parent from './components/parent.jsx'
// import Counter from './components/Counter.jsx'
// import Button from'./components/Button.jsx'
import Cr from './components/cr.jsx'
import {useState } from 'react'
// import   StateLift from './components/stateLift.jsx'
function App() {
  // const name = "Dhanush";
  // const[state,setState]=useState(' ');
const[islogged,setLogged]=useState(true);
// function handleclick(){
//   setLogged();
//   <h1>welcoem to the app</h1>
// }
  // function handleClick(){
  //   setState(state+1);
  // } 

  return islogged ? <Cr fun={setLogged} /> : <h1>Please log in</h1>
}

export default App
