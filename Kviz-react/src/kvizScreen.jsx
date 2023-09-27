import { useEffect, useState, useId } from 'react';
import Question from './Question'

export default function kvizScreen(props) {

    const [questionAPI, setquestionAPI] = useState(null);
    const [answer, setAnswer] = useState([{ 
        answer: "answer",
        incorrectAnswer: "incorrectAnswer"
    }]);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => setquestionAPI(data))
    }, [])
    
    if (questionAPI && questionAPI.results) {
    
    }

    return (
            <div className="bg-gradient-to-r from-indigo-200 to-violet-50 h-auto w-auto grid place-items-center ">
            {questionAPI && questionAPI.results 
            ? questionAPI.results.map((item, index) => (
                <Question 
                    key={index}
                    obj={item} 
                    
            />
             ))
            : null
            }
           
            <div className="flex justify-center items-center">
                <p className="pr-[40px]"></p>
                <button className='text-lg font-bold text-white p-4 h-[60px] tracking-[0.2em] rounded-lg shadow-md bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700'>Check answers</button>
            </div>
        </div>
    );
}
