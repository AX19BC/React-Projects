import React from 'react';
import Logo from "./assets/airbnb 1.png"

export default function Navbar() {
    return (
        <div>
            <div className="w-100 h-[70px] shadow-custom">
                <img className=" mt-7 ml-[80px] h-[35px]" src={Logo}/>
            </div>
        </div>
        
    )
}