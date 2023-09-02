import React from 'react'; 

export default function Card (props){
    return (
        <div className="pt-[4%] pl-[9%]">
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