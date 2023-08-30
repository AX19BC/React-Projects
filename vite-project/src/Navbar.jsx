import React from 'react'
import img from './assets/react.svg'

export default function Navbar(){
    return (
        <div className="flex flex justify-center">
            <div className="flex space-x-[120px] items-center h-92 w-550 bg-[#21222A] px-25 py-30">
                <div className="flex">
                    <img className="pl-5 pr-2 pt-1" src={img}></img>
                    <div className="w-[122.39px] h-[20px] text-cyan-300 text-[22px] font-bold pb-6 pt-0.5">ReactFacts</div>
                </div>
                <div className="ExtraTitle w-64 h-5 text-right text-blue-100 text-base font-semibold pr-[25px]">React Course - Project 1</div>
            </div>
        </div>
        )
}