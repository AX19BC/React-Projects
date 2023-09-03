import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './nav'
import Card from './Card'
import Data from './Data'

function App() {
  const [count, setCount] = useState(0)

  const newCard = Data.map((item)=> 
    <Card 
      {...item}
    />)
  return (

    <div className="app">
      <Nav />
      <div className="p-[100px]">
        {newCard}
      </div>
      

    </div>
  )
}

export default App
