import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Meme from './Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
      
    <div className="Main-container">
      <Nav />
      <div className="p-[100px] pt-[60px]">
        <Meme />
      </div>
    </div>
  )
}

export default App
