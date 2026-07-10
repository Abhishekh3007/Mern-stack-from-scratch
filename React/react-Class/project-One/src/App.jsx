
import './App.css'
// import  Cards from './components/cards.jsx'
// import one from './assets/one.png'
// import two from './assets/two.jpg'
import Parent from './components/parent.jsx'

function App() {
  const name = "Dhanush";

  return (
    <div className="App">
      <h1>Welcome to React Class  </h1>
    {/* <Cards  name='Dhanush ' desc='Full Stack Developer' image={one} />
    <Cards  name ='Jhon' desc='DevOps Engineer' image={two} /> */}
    <Parent data={name} />
    
    </div>
  )
}

export default App
