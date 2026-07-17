import userContext from "./userContext"
// import Child from "./child"
import { useContext } from "react"
const Parent = () => {
  const user=useContext(userContext);
  return (
    <div>
        <h1>Parent component</h1>
        <p>{user.name}</p>
      
    </div>
  )
}

export default Parent
