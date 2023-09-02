import React from 'react'; 

export default function Card (props){
    return (
        <div className="pt-[4%] pl-[9%]">
            <div className="">
                <div>
                    <img src="../public/image 12.png"></img>
                </div>
                <div className="flex">
                    <img className="pl-1"src="../public/Star 1.png"></img>
                    <p className="pl-2">5.0 (6)•USA</p>
                </div>
                <p className="pl-1 pt-3 max-w-[300px]">Life lessons with Katie Zaferes <b>From $136</b> / person</p>
            </div>
        </div>
    )
}