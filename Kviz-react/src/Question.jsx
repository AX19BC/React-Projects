import React from "react";
import { useEfferct, useState } from 'react'
import AnswerButton from "./AnswerButton.jsx"
import {decode} from 'html-entities';

export default function Question (props){
    
    let coice = 1;
    const { incorrect_answers, correct_answer } = props.obj;

    const answers = [...incorrect_answers];

    const randomIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(randomIndex, 0, correct_answer);

    const shuffledAnswers = answers;

    const arrayWithKeys = shuffledAnswers.map((answer, index) => {
        return [{ id: index.toString(), value: answer }];
      });
    console.log(arrayWithKeys)

    return(
        <div className='question w-[50%] pt-[50px] pb-[10px] pl-7 text-left'>
            <h1 className="text-[20px] font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">{decode(props.obj.question)}</h1>
            <div className="grid-rows-1 pl-0 p-6  w-auto md:grid-rows-2 ">
                {arrayWithKeys.map(answer =>
                     <AnswerButton 
                     answer ={answer.value}
                     key = {answer.id}
                     id = {answer.id}
                     />)}
            </div>
            <hr></hr>
        </div>
    )
}
