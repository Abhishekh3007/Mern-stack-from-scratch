
import Child from "./child"
const Parent = ({ data }) => {
  return (
    <div>
        <h1>Parent component</h1>
      <Child data={data} />
    </div>
  )
}

export default Parent
