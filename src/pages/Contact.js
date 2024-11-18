import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import{faFacebook, faLinkedinIn, faTiktok, faYoutube} from '@fortawesome/free-brands-svg-icons';



const ContactForm = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between p-6 md:p-12 bg-gray-50 text-gray-800">
          {/* Left Section */}
          <div className="flex flex-col mb-8 md:mb-0 md:w-1/3">
            <div className="border-t border-gray-500 w-8 mb-2"></div>
            <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>
            
            <p className="text-blue-600 mb-4">support@sam-it.ub.com<br />(713) 429-4749</p>
            
            <h3 className="text-lg font-semibold mb-2">Arendal, Norway</h3>
            <p className="text-blue-600 mb-4">
              6811 Arendal<br />
              SamEyde, Arendal 77055
            </p>
            
            <div className="flex space-x-4 mt-4">
              <a href="#Home" aria-label="LinkedIn" className="text-orange-700 hover:text-blue-600 cursor-pointer">
                <FontAwesomeIcon icon={faLinkedinIn} className='text-2xl'/>
              </a>
              <a href="#home" aria-label="YouTube" className="text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faYoutube} className='text-2xl text-orange-700 hover:text-red-600 cursor-pointer'/>
              </a>
              <a href="#home" aria-label="Facebook" className=" text-orange-700 hover:text-blue-700 cursor-pointer">
                <FontAwesomeIcon icon={faFacebook} className='text-2xl'/>
              </a>
              <a href="#home" aria-label="Tiktok" className=" text-orange-700 hover:text-purple-900 cursor-pointer">
                <FontAwesomeIcon icon={faTiktok} className='text-2xl'/>
              </a>
            </div>
          </div>
    
          {/* Right Section */}
          <form className="flex flex-col space-y-4 md:w-2/3" method='post'>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-sm font-semibold">First Name (required)</label>
                <input type="text" className="p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
              </div>
              <div className="flex flex-col w-full md:w-1/2">
                <label className="text-sm font-semibold">Last Name</label>
                <input type="text" className="p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Email (required)</label>
              <input type="email" className="p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" required />
            </div>
            
            <div className="flex flex-col">
              <label className="text-sm font-semibold">Message (required)</label>
              <textarea rows="4" className="p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400" required></textarea>
            </div>
            
            <button type="submit" className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700">
              SEND
            </button>
          </form>
        </div>
      );
}

export default ContactForm