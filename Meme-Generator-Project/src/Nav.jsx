import React from 'react'
import Logo from './assets/Troll Face.png'
import './index.css'

export default function Nav (){
    return (
        <div className="Nav w-[100%] h-[80px] ">
            <div id="nav" className="flex shadow-lg w-[100%] h-[100%] px-10 justify-around bg-gradient-to-r from-slate-900 to-slate-700">
                <div className="flex items-center space-x-[40px]">
                    <img className="w-[50px] h-[50px]"src={Logo}></img>
                    <p className="MemeGenerator w-[300px] text-white text-3xl font-bold ">Meme Generator</p>
                </div>
                <div className="flex items-center">
                    <p className="ReactCourseProject3 w-48 h-3.5 text-right text-white text-xs font-medium">Project 3</p>
                </div>
            </div>
        </div>
    )
}