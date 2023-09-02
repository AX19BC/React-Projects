import React from 'react';
import pic from "./assets/Group 77.png"

export default function Hero () {
    return(
        <div>
            <div className="flex justify-center pt-[55px]">
                <img className="" src={pic}/>
            </div>
            <h1 className="OnlineExperiences w-200 text-black text-6xl font-semibold leading-10 pt-[55px] pl-[10%] min-pl-[10%]">Online Experiences</h1>
            <p className="JoinUniqueInteractiveActivitiesLedByOneOfAKindHostsAllWithoutLeavingHome w-200 max-w-[80%] h-14 text-neutral-800 text-base font-light leading-none pt-[30px] pl-[10%] min-pl-[10%]">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.<br/></p>
        </div>
    )
}