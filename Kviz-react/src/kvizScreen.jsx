import React from 'react';
import { useState } from 'react'
import Question from './Question'

export default function kvizScreen (props){
    return(
            <div className="bg-gradient-to-r from-indigo-200 to-violet-50 h-auto w-screen grid place-items-center">
                <Question />
                <Question />
                <Question />
                <Question />
                <Question />
                <div className="flex justify-center items-center">
                    <p className="pr-[40px]"></p>
                    <button className='text-lg font-bold text-white p-4 h-[60px] tracking-[0.2em] rounded-lg shadow-md bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700'>Check answers</button>
                </div>
            </div>
    )
}