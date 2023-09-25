import React from "react";
import { useEfferct, useState } from 'react'
import AnswerButton from "./AnswerButton.jsx"

export default function Question (props){
    return(
        <div className='question w-[auto] pt-[50px] pb-[10px] pl-7'>
            <h1 className="text-[20px] font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">How would one say goodbay in Spanish</h1>
            <div className="grid-rows-1 pl-0 p-6  w-auto md:grid-rows-2 ">
                <AnswerButton />
                <AnswerButton />
                <AnswerButton />
                <AnswerButton />
            </div>
            <hr></hr>
        </div>
    )
}
