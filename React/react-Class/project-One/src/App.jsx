
// import './App.css'
import  Cards from './components/cards.jsx'
// import one from './assets/one.png'
// import two from './assets/two.jpg'
import Parent from './components/parent.jsx'
// import Counter from './components/Counter.jsx'
// import Button from'./components/Button.jsx'
// import Cr from './components/cr.jsx'
import {useState } from 'react'
// import   StateLift from './components/stateLift.jsx'
import Eventh from './components/Eventh.jsx'

// import { useEffect } from "react"
import userContext from './components/userContext.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
{path:"/",
  element:<Eventh/>
},
{
  path:"about",
  element:<Parent/>
},
{
  path:"/contact",
  element:<Cards/>
}

])
function App() {
  const[state,setState]= useState(0);
  // const[name,setName]= useState('');
  function handleClick(){
    setState(state+1);
  }

// useEffect(()=>{
//   alert("renders everytime")
// },[])

// useEffect(()=>{
//   alert("renders everytime")
//   return (
//     alert ("rendering finsih")
//   )
// },[state,name])

  return(
    <div>
    
      <userContext.Provider value={{ name: "abhi" }}>
  <Eventh  fun={handleClick} state={state} />
      {/* <Eventh setName={setName} name={name}/>  */}
      <Parent />
      </userContext.Provider>
      <RouterProvider router={router} />


    </div>
 





)
}

export default App
