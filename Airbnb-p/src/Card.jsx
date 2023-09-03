import React from 'react'; 
import './Card.css';

export default function Card (props){
    return (
        <div id = "card" className="pt-[4%] pl-[9%] max-w-[300px] flex-col ">
            <div className="">
                <div className="w-[300px]">
                    <img className="w-[300px] h-[400px]" src={`../public/${props.img}`}></img>
                </div>
                <div className="flex">
                    <img className="pl-1"src="../public/Star 1.png"></img>
                    <p className="pl-2">{props.rating} ({props.reviewCount})•{props.location}</p>
                </div>
                <p className="pl-1 pt-3 max-w-[300px]">Life lessons with Katie Zaferes <b>From ${props.price}</b> / person</p>
            </div>
        </div>
    )
}