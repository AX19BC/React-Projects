import React from "react";
import { decode } from 'html-entities';

export default function Question (props){
    const { incorrect_answers, correct_answer } = props.obj;

    // Combine incorrect and correct answers and shuffle
    const answers = [...incorrect_answers];
    const randomIndex = Math.floor(Math.random() * (answers.length + 1));
    answers.splice(randomIndex, 0, correct_answer);

    // Map over answers to create array with keys
    const arrayWithKeys = answers.map((answer, index) => {
        return { id: index.toString(), value: answer, isSelected: false };
    });

    return(
        <div className='question w-[50%] pt-[50px] pb-[10px] pl-7 text-left'>
            <h1 className="text-[20px] font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">
                {decode(props.obj.question)}
            </h1>
            <div className="grid-rows-1 pl-0 p-6  w-auto md:grid-rows-2 ">
                {arrayWithKeys.map(answer =>
                     <button key={answer.id} className='p-3 text-lg font-bold text-indigo-900 h-[50px] mr-[20px] mt-6 tracking-[0.2em]
                     rounded-lg shadow-md border border-indigo-900 hover:bg-indigo-100'>{decode(answer.value)}</button>
                     )}
            </div>
            <hr></hr>
        </div>
    );
}
