import { useContext } from "react"
import userContext from "./userContext"

const Eventh = (props) => {
    const user=useContext(userContext);
  return (
    <div>
        <button  onClick={props.fun}>Click me</button>
        <p>{props.state}</p>
        <br></br>
        <input type="text" placeholder='Enter your name' onChange={(e)=>props.setName(e.target.value)} />
        <p>{props.name}</p>
        <p>{user.name}</p>
      
    </div>
  )
}

export default Eventh
