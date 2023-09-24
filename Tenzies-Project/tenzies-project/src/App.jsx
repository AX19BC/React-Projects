import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Die from './Die.jsx'

function App() {
  
  
  function allNewDice () {
    const randomArray = []
    for (let i = 0; i < 10; i++) {
      randomArray[i]= (Math.floor(Math.random() * 6) + 1)
    }
    return randomArray
  }
  

  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-center p-[60px] pt-[80px] bg-gradient-to-r from-zinc-700 to-indigo-900"> 
        <div className="min-h-[500px] w-[500px] bg-gray-100 rounded-xl p-[70px] pt-[70px]">

            <div className="Titles pb-4">
                <h1 className="text-4xl text-center pb-4 font-bold bg-gradient-to-r from-zinc-700 to-indigo-900 bg-clip-text text-transparent">Tenzies</h1>
                <p className="text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>

            <div className="boxes grid grid-rows-2 grid-flow-col gap-4 pt-[20px]">
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
                <Die value ="1"/>
            </div>

            <div className="button pt-[40px]">
              <button className="bg-[#3b3452] hover:bg-gradient-to-br from-zinc-700 to-indigo-900 text-white text-xl font-bold rounded-lg p-4 w-[100%] h-[50px] flex justify-center items-center tracking-[0.2em]">Roll</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
