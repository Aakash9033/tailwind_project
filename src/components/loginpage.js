import React from "react";
import AlphaSearch from '../assets/ALphaSearch_White 1.png'
import group from '../assets/Group.png'
import lopper from '../assets/Looper.png'
import looper1 from '../assets/Looper-1.png'
// import Login_form from "./login_form";
// import Signup from "./signup_form";
// import Login_sidebar from "./login_sidebar";
const Loginpage = ({children}) => {
    return (
        <div className=' flex'>
        {children}
        <div className=" relative w-3/5 bg-sidebar_img bg-primary h-screen bg-cover bg-no-repeat overflow-hidden hidden lg:block">
            <img src={lopper} className=" absolute w-2/4 h-auto top-0 -left-24 " alt="image not found" />
            <img src={looper1} className=" absolute w-1/6 h-1/6 top-0 right-0" alt="image not found"/>
            <div className=" pt-14 flex flex-col items-center justify-center w-3/5 m-auto gap-6 ">
            <img src={AlphaSearch}  alt="img not found"/>
            <h1 className="text-white text-4xl  font-extrabold text-center ">Using data to bring <span className=" text-yellow">transparency</span> to the private markets</h1>
            </div> 
            <img className=" w-11/12 h-4/5 ml-auto mt-0 " src={group} alt="img not found"/>
        </div>
        {/* <Login_sidebar /> */}
        </div>
    )
}
export default Loginpage