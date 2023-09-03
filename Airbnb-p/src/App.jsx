import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import Data from './data'
import data from './data.jsx'


function App() {
  
  const cards = data.map((card) => 
    <Card 
          key={card.id}
          img={card.coverImg}
          rating={card.stats.rating}
          reviewCount={card.stats.reviewCount}
          location={card.location}
          title={card.title}
          price={card.price}
    />);
  

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="w-[100%] space-x-3 flex pb-12">
        {cards}
      </div>
    </div>
  )
}

export default App
