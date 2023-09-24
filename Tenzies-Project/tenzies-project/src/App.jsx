import { useState } from 'react'
import './App.css'
import Die from './Die.jsx'
import {nanoid} from 'nanoid'

function App() {
  
  const [dice, setDice] = useState(allNewDice)
  
  

  function allNewDice () {
    const randomArray = []
    for (let i = 0; i < 10; i++) {
      randomArray[i]= {
        value: (Math.floor(Math.random() * 6) + 1), 
        isHold: false,
        id: nanoid(),
      }
    }
    return randomArray
  }

  function rollDice() {
    setDice(oldDice => oldDice.map(die => {
        return die.isHold ? 
            die :
            {
              value: (Math.floor(Math.random() * 6) + 1), 
              isHold: false,
              id: nanoid(),
            }
    }))
}

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
        return die.id === id ? 
            {...die, isHold: !die.isHold} :
            die
    }))
}
  
  
  const diceElement = dice.map(element => 
    <Die value={element.value} key= {element.id} hold={element.isHold} holdDice={() => holdDice(element.id)}/>)

  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-center p-[60px] pt-[80px] bg-gradient-to-r from-zinc-700 to-indigo-900"> 
        <div className="min-h-[500px] w-[500px] bg-gray-100 rounded-xl p-[70px] pt-[70px]">

            <div className="Titles pb-4">
                <h1 className="text-4xl text-center pb-4 font-bold bg-gradient-to-r from-zinc-700 to-indigo-900 bg-clip-text text-transparent">Tenzies</h1>
                <p className="text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </div>

            <div className="boxes grid grid-rows-2 grid-flow-col gap-4 pt-[20px]">
               {diceElement}
            </div>

            <div className="button pt-[40px]">
              <button onClick = {rollDice}  className="bg-[#3b3452] hover:bg-gradient-to-br from-zinc-700 to-indigo-900 text-white text-xl font-bold rounded-lg p-4 w-[100%] h-[50px] flex justify-center items-center tracking-[0.2em]">Roll</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
