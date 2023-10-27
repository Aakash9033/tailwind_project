import React from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Loginpage from "./loginpage";
const Login_form=()=>{
   const[show,setShow]=useState(false)
   const navigate=useNavigate()
   return(
      <Loginpage>
    <div className=" h-screen  w-full flex justify-center items-center lg:w-2/5">
       <form className="w-2/3 flex flex-col gap-12 border-solid">
         <div className=" flex flex-col gap-1">
         <h1 className=" text-3xl font-bold">Welcome Back!</h1>
         <p className=" text-gray text-lg w-9/12">Welcome back!Please login to access your account</p>
         </div>
         <div className=" flex flex-col gap-4">
         <div className="flex flex-col gap-2">
            <label>Email address*</label>
            <input className=" h-14 pl-2.5 outline-none border border-gray-light rounded-md" placeholder="Enter email address" type="email"/>
         </div>
         <div className="flex flex-col gap-2">
            <label>Enter password*</label>
            <div className="h-14 flex justify-between border border-gray-light rounded-md align items-center ">
            <input className="  pl-2.5 outline-none sm:w-auto w-36" placeholder="Enter password" type={show?"text":"password"}/>
            <button className=" sm:p-5  p-2 " onClick={(e)=>{setShow(!show); e.preventDefault()}}>{show?"Hide":"Show"}</button>
            </div>
            <div className=" w-full flex gap-15">
               <div className=" flex gap-3">
            <input type="checkbox"/> <span>Remember me</span>
            </div>
             <span className=" ml-auto text-primary">Forgot Password?</span>
         </div>
         </div>
         </div>
          <div className=" flex flex-col gap-3">
         <button className="w-full bg-primary h-14 rounded-md text-white">Login</button>
         <button className="w-full bg-green h-14 rounded-md text-white" onClick={()=>navigate('/signup')}>Signup</button>
         </div>

         </form>      
    </div>
    </Loginpage>
   )
}
export default Login_form