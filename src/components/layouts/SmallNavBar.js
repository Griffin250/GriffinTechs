import React from 'react'
import website_logo from "../../assets/logos/griffintechs.png";
import { NavLink } from 'react-router-dom';

const SmallNavBar = () => {
    const scrollToTop = ()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div className="flex items-center space-x-2 bg-gradient-to-tl from-blue-50 via-gray-200 to-blue-50">
    <img
      src={website_logo}
      alt=""
      className="w-12 h-12 rounded-full sm:w-20 sm:h-20"
    />
    <h1 className="text-orange-700 font-bold website-title">
      <NavLink to={"/"} onClick={()=>{scrollToTop();}} className="m-auto">
        <span>G</span>riffin<span>T</span>echs{" "}
        <p className="web-slogan font-serif text-xs text-center bg-gradient-to-r from-orange-600 via-blue-400 to-orange-500 bg-clip-text text-transparent">
Guardians of Innovation
</p>

      </NavLink>
    </h1>
  </div>
  )
}

export default SmallNavBar