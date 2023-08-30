import React from 'react';
import './App.css'
import imageReact from './Group.png';


export default function Main1() {
    return (
        
            <div className="flex justify-center" >
                <div className="w-96 h-96 bg-[#282D35] w-[550px]" id="main">
                    <div className="H1Title w-96 h-10 text-white text-4xl font-bold pt-[53px] pl-[20px]">Fun facts about React</div>
                    <ul className="pt-[69px] pl-[65px]">
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100K stars on GitHub</li>
                        <li>Is maintained by Facebook</li>
                        <li>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>

            </div>
            
    )
}