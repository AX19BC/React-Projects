import React from 'react'; 
import './Card.css';

export default function Card (props){
    console.log(props);
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE";
    }
    return (
        <div id = "card" className="pt-[4%] pl-[9%] max-w-[300px] flex-col ">
            {badgeText && <div className="absolute m-4 bg-white w-[90px] h-6 text-neutral-800 text-s font-normal leading-3 items-middle rounded-sm flex justify-center items-center"><b>{badgeText}</b></div>}
            <div className="">
                <div className="w-[300px]">
                    <img className="w-[300px] h-[400px]" src={`../public/${props.item.coverImg}`}></img>
                </div>
                <div className="flex">
                    <img className="pl-1"src="../public/Star 1.png"></img>
                    <p className="pl-2">{props.item.stats.rating} ({props.item.stats.reviewCount})•{props.item.location}</p>
                </div>
                <p className="pl-1 pt-3 max-w-[300px]">Life lessons with Katie Zaferes <b>From ${props.item.price}</b> / person</p>
            </div>
        </div>
    )
}