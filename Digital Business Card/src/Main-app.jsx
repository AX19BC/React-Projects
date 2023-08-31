import React from 'react';
import ImageOfMe from'./assets/me1.jpeg';
import './Mainapp.css';
import Mail from './assets/Mail.svg';
import LinkedIn from './assets/linkedin.svg';
import Twiter from './assets/Twitter Icon.svg';
import Github from './assets/GitHub Icon.svg';
import Facebook from './assets/Facebook Icon.svg';
import Instagram from './assets/Instagram Icon.png';

export default function mainApp() {
    return(
        <div className="block pl-[460px]">
            <img src={ImageOfMe} className="w-[300px] h-[370px] mt-11 rounded-t-[10px] shadow-md"></img>
            <div className="h-[10px] w-[300px] bg-[#1A1B21] mb-[100px] shadow-md">
                <div className="justify-center text-center bg-[#1A1B21]">
                    <h3 className="bg-[#1A1B21] text-white text-2xl font-bold pt-7">Nejc Vidmar</h3>
                    <p className="FrontendDeveloper text-center text-red-300 text-s font-normal bg-[#1A1B21] py-1">Frontend Developer</p>
                    <p className="LaurasmithWebsite text-center text-neutral-100 text-xs font-normal leading-none bg-[#1A1B21]">mojportfoliowebside.com</p>
                </div>
                <div className="flex bg-[#1A1B21] items-center justify-center p-4 space-x-4 pt-6">
                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 h-8 items-center align-middle w-[115px] flex justify-center"><img className="space-x-3 bg-blue-700 justify-center pr-1" src={LinkedIn} alt="linkedIn icon"></img>LinkedIn</button>
                    <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-darkgray-200 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-8 items-center align-middle w-[115px] flex justify-center"><img className="space-x-3 bg-white p-1" src={Mail} alt="email icon"></img>LinkedIn</button> 
                </div>
                <div className="bg-[#1A1B21]">
                    <h1 className="bg-[#1A1B21] text-white font-bold pl-6 pt-4">About</h1>
                    <p className="bg-[#1A1B21] text-white text-xs px-6 pt-2">Having served in the military for 7 years, I spent my spare time diving into frontend development. The experience was so rewarding that it inspired me to pursue a formal education in computer science and web technologies.</p>

                    <h1 className="bg-[#1A1B21] text-white font-bold pt-7 pl-6">Interest</h1>
                    <p className="bg-[#1A1B21] text-white text-xs px-6 pt-2 pb-10">My interests include completing my degree in Computer Science and Web Technologies, and securing a job as a developer.</p>
                </div>
                <div className="flex bg-[#161619] h-50px py-5 justify-center align-middle items-center space-x-6 rounded-b-lg mb-20">
                    <img className="hover:cursor-pointer" src={Twiter} alt="linkedIn icon"></img>
                    <img className="hover:cursor-pointer" src={Facebook} alt="linkedIn icon"></img>
                    <img className="hover:cursor-pointer" src={Instagram} alt="linkedIn icon"></img>
                    <img className="hover:cursor-pointer" src={Github} alt="linkedIn icon"></img>
                </div>

            </div>
            
        </div>
        
    )
}