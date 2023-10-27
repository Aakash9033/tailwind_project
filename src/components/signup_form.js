import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loginpage from "./loginpage";
const Signup = () => {
    const [showpass, setShowpass] = useState(false)
    const navigate=useNavigate()
    return (
        <Loginpage>
        <div className=" h-screen  w-full flex justify-center items-center lg:w-2/5">
            <form className="w-2/3 flex flex-col gap-12 border-solid">
                <div className=" flex flex-col gap-1">
                    <h1 className=" text-3xl font-bold">Welcome!</h1>
                    <p className=" text-gray text-lg w-9/12">Welcome!Please signup to access</p>
                </div>
                <div className=" flex flex-col gap-2">
                    <div className="flex flex-col gap-2">
                        <label>Enter username*</label>
                        <input className=" h-14 pl-2.5 outline-none border border-gray-light rounded-md" placeholder="Enter username" type="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Enter email*</label>
                        <input className=" h-14 pl-2.5 outline-none border border-gray-light rounded-md" placeholder="Enter username" type="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label>Enter Password*</label>
                        <div className="h-14 flex justify-between border border-gray-light rounded-md align items-center ">
                            <input className="  pl-2.5 outline-none sm:w-auto " placeholder="Enter password" type={showpass ? "text" : "password"} />
                            <button className=" sm:p-5  p-2 " onClick={(e) => { setShowpass(!showpass); e.preventDefault() }}>{showpass ? "Hide" : "Show"}</button>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Confirm Password*</label>
                            <input className=" h-14 border border-gray-light rounded-md pl-2.5 outline-none sm:w-auto" placeholder="Confirm password" type="password" />


                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-3">
                    <button className="w-full bg-green h-14 rounded-md text-white">Signup</button>
                    <button className="w-full bg-primary h-14 rounded-md text-white" onClick={()=>navigate('/login')}>Login</button>
                </div>


            </form>
        </div>
        </Loginpage>
    )
}
export default Signup