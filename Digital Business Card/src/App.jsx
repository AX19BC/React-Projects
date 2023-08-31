import { useState } from 'react'

import './App.css'
import MainApp from './Main-app.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <MainApp />
    </div>
  )
}

export default App
