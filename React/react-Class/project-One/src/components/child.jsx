
import Grandchild from "./grandchild";
const Child = ({ data }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <Grandchild data={data} />
    </div>
  )
}

export default Child
