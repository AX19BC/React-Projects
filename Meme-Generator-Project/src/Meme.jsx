import React from "react";
import "./index.css";
import memesData from "./memesData.jsx"

export default function Generator(props) {

    const [memeArray, setImage] = React.useState("")

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setImage(memesArray[randomNumber].url)
    }

    return(
        <div className="justify-center">
            <form className="flex justify-between space-x-4">
                <input className="w-[100%] border-solid border-2 border-blue-900 rounded-md text-black p-2" type="text" placeholder="Shut up"></input>
                <input className="w-[100%] border-solid border-2 border-blue-900 rounded-md text-black p-2" type="text" placeholder="And take my money"></input>
            </form>
            <button  onClick={getMemeImage} id="nav" className="cursor-pointer font-karla text-md font-semibold w-[100%] mt-9 border-blue-900 rounded-md text-white bg-gradient-to-r from-slate-800 to-slate-700 p-2">Generate meme image!</button>
            <div className="flex flex-col justify-center items-center h-full">
                <img className="p-[70px] w-[900px]" src={memeArray}></img>
            </div>
        </div>
        
    )
}