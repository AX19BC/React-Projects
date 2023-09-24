import React from 'react';

export default function die (props) {
    return(
    <div className="box bg-gray-200 rounded-md drop-shadow-lg w-[50px] h-[50px] flex justify-center items-center
     hover:bg-gray-300 hover:rounded-lg hover:drop-shadow-4xl active active:bg-green-400 cursor-pointer" >
        <p className="text-lg">{props.value}</p>
    </div>
    )
}