import React from "react";
import "./index.css";
import memesData from "./memesData.jsx"

export default function Generator(props) {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        darkText: false
    })

    const style = meme.darkText ? "text-gray-250" : "text-white"

    const [allMemeImages, setAllMeme] = React.useState(memesData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(preMeme =>({...preMeme, randomImage: url}))
    }

    function handleChange (event){
        const {value, name, type, checked} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: type === "checkbox" ? checked : value
        }))
    }

    return(
        <div className="justify-center">
            <form className="flex justify-between space-x-4 items-center">
                <input className="w-[100%] h-10 border-solid border-2 border-blue-900 rounded-md text-black" 
                    type="text" 
                    placeholder="Shut up"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                ></input>
                <input className="w-[100%] h-10 border-solid border-2 border-blue-900 rounded-md text-black"
                    type="text"
                    placeholder="And take my money"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                  ></input>

                  <input className="w-[10%] h-10 border-solid border-2 border-blue-900 rounded-md text-black "
                    type="checkbox"
                    name="darkText"
                    checked={meme.darkText}
                    onChange={handleChange}
                    id="darkText"
                  ></input>
                    <lable className="w-[30%]" htmlFor="darkText">Dark text</lable>
            </form>
            <button  onClick={getMemeImage} id="nav" className="cursor-pointer font-karla text-md font-semibold w-[100%] mt-9 border-blue-900 rounded-md text-white bg-gradient-to-r from-slate-800 to-slate-700 p-2">Generate meme image!</button>
            <div className="flex flex-col justify-center items-center h-full relative p-[0px]">
                <img className="p-[70px] w-[900px]" src={meme.randomImage} alt="Meme"></img>
                <h1 id="memeText" className={`absolute top-0 ${style} text-[60px] border-5 border-black font-bold`}>{meme.topText}</h1>
                <h1 id="memeText1" className={`absolute bottom-0 ${style} text-[60px] border-5 border-black font-bold`}>{meme.bottomText}</h1>
            </div>

        </div>
        
    )
}