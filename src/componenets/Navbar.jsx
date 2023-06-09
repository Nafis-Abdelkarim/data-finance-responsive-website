import React,{useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = ()=>{

    const [nav , setNav] = useState(false);

    const handelClickNav = ()=>{
        setNav(!nav)
    }

    return(
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold text-[#00df98]">DATA FINANCE</h1>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">Company</li>
                <li className="p-4">Resource</li>
                <li className="p-4">About</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={handelClickNav} className="cursor-pointer block md:hidden">
                {!nav ? <AiOutlineMenu size={28}/> : <AiOutlineClose size={28}/>}
            </div>
            <div className={!nav ?  "fixed left-[-100%]" : "fixed left-0 top-0 w-[70%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"}>
            <h1 className="w-full text-3xl font-bold  text-[#00df98] m-4">DATA FINANCE</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Home</li>
                    <li className="p-4 border-b border-gray-600">Company</li>
                    <li className="p-4 border-b border-gray-600">Resource</li>
                    <li className="p-4 border-b border-gray-600">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar