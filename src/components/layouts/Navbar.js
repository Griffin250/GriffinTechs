import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../../assets/bannerImages/computerBanner.jpg'
import website_logo from '../../assets/logos/griffintechs.png'
import { useState } from 'react';
const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="bg-gray-900">
    <div className="flex items-center justify-between max-w-full mx-auto px-4 py-2">
      {/* Left side - Logo */}
      <div className="flex items-center space-x-2">
        <img src={website_logo} alt="" className="w-12 h-12 rounded-full sm:w-20 sm:h-20"  />
        <h1 className="text-orange-700 font-bold website-title">
          <span>G</span>riffin<span>T</span>echs
        </h1>
      </div>
  
      {/* Navigation Links - Hidden on small screens */}
      <div className="hidden md:flex items-center space-x-6 text-gray-400">
        <a href="#Home" className="hover:text-white font-bold hover:bg-gray-800 p-2 rounded-md">
          Dashboard
        </a>
        <a href="#Home" className="hover:text-white font-bold hover:bg-gray-800 p-2 rounded-md">
          Services
        </a>
        <a href="#Home" className="hover:text-white font-bold hover:bg-gray-800 p-2 rounded-md">
          Projects
        </a>
        <a href="#Home" className="hover:text-white font-bold hover:bg-gray-800 p-2 rounded-md">
          Developers
        </a>
        <a href="#Home" className="hover:text-white font-bold hover:bg-gray-800 p-2 rounded-md">
          Hire a Professional
        </a>
      </div>
  
      {/* Right side - New Job Button, Notification Icon, Profile */}
      <div className="flex items-center space-x-6">
        <button className="hidden md:flex items-center space-x-1 bg-orange-700 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium">
          <span>Join Us</span>
        </button>
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 hover:text-white cursor-pointer h-6 hidden md:block" />
        <img
          src={profileImage} // Replace with actual profile image URL
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer hidden md:block"
        />
  
        {/* Hamburger Menu - Visible on small screens */}
        <div className="md:hidden">
          <button
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="h-6" />
          </button>
        </div>
      </div>
    </div>
  
    {/* Mobile Menu */}
    {mobileMenuOpen && (
      <div className="md:hidden bg-gray-800 text-gray-400 p-4 space-y-2">
        <a href="#Home" className="block hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md">
          Dashboard
        </a>
        <a href="#Home" className="block hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md">
          Services
        </a>
        <a href="#Home" className="block hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md">
          Projects
        </a>
        <a href="#Home" className="block hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md">
          Developers
        </a>
        <a href="#Home" className="block hover:text-white font-bold hover:bg-gray-700 p-2 rounded-md">
          Hire a Professional
        </a>
        <button className="block bg-orange-700 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium">
          Join Us
        </button>
      </div>
    )}
  </div>
  )
}
      export default Navbar