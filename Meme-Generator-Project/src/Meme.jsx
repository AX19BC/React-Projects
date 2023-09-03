import React from "react";
import "./index.css";

export default function Generator(props) {
    return(
        <div className="">
            <form className="flex justify-between space-x-4">
                <input className="w-[100%] border-solid border-2 border-blue-900 rounded-md text-black p-2" type="text" placeholder="Shut up"></input>
                <input className="w-[100%] border-solid border-2 border-blue-900 rounded-md text-black p-2" type="text" placeholder="And take my money"></input>
            </form>
            <input id="nav" className="text-md font-semibold w-[100%] mt-9 border-blue-900 rounded-md text-white bg-gradient-to-r from-slate-800 to-slate-700 p-2" type="submit" value="Generate meme image!"></input>
        </div>
    )
}