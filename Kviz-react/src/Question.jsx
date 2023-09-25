import React from "react";
import { useState } from 'react'
import AnswerButton from "./AnswerButton.jsx"

export default function Question (props){
    return(
        <div className='question w-[75%] pt-[50px] pb-[10px] pl-[20%]'>
            <h1 className="text-[20px] font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">How would one say goodbay in Spanish</h1>
            <div className="flex pl-0 p-6 space-x-[50px]">
                <AnswerButton />
                <AnswerButton />
                <AnswerButton />
                <AnswerButton />
            </div>
            <hr></hr>
        </div>
    )
}
