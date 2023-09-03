import React from 'react';
import Logo from './Logo.png';
import Logo1 from '../public/vite.svg';
import "./index.css";

export default function Nav (){
    return (
        <div className="nav">
            <div id ="nav" className="Rectangle85 w-[100%] h-[130px] bg-gradient-to-br from-orange-400 via-amber-200 to-violet-300 flex justify-center items-center pb-6 space-x-4">
                <img className="w-7" src={Logo} />
                <p className="MyTravelJournal text-white text-4xl font-medium">My travel journal</p>
            </div>
            
        </div>
    )
}