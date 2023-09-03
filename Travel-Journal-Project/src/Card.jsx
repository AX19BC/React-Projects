import React from 'react';
import pointer from './assets/Fill 219.png'

export default function Card (props){
    return (
        <div>
            <div className="Card flex items-center space-x-14 pt-[90px]">
                <div className="min-w-[40%] min-h-[40%] max-w-[70%]">
                    <img className="rounded-lg drop-shadow-4xl min-w-[40%] min-h-[40%]"src={props.imageUrl}></img>
                </div>
                <div className="text-main">
                    <div className="flex space-x-3 items-center">
                        <img className="w-[10px]"src={pointer}></img>
                        <p className="Japan w-10 h-2.5 text-gray-800 text-xs font-normal tracking-extraWidest">{props.location}</p>
                        <a href={props.googleMapsUrl} className="text-gray-400 pt-[5px] pl-[10%] underline">View on google Maps</a>
                    </div>
                    <h1 className="MountFuji w-80 h-10 text-gray-800 text-5xl font-bold py-3">{props.title}</h1>
                    <p className="pt-6 font-semibold">{props.startDate} - {props.endDate}</p>
                    <p className="pt-3 max-w-[90%]">{props.description}</p>
                    <a className="text-gray-400 underline text-sm" href={props.readMore}>read more</a>
                </div>
                
            </div>
            <hr className="mt-[90px] drop-shadow-2xl"></hr>
        </div>
    )
}