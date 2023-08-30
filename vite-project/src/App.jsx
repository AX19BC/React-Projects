import { useState } from 'react'
import Navbar from './Navbar'
import Main1 from './Main1'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Main1 />
    </div>
  )
}

export default App
