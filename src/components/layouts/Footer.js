import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faGithub,
     faDiscord, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logos/griffintechs.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-5 pb-2 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
     
        {/* ........................Solutions Section .........................*/}
        <div>
          <h5 className="text-lg font-semibold mb-4">Solutions</h5>
          <ul className="space-y-2">
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Marketing</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Analytics</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Automation</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">E-Commerce</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Insights</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  "> Reviews </li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  "> Pricing</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Afiliate Program </li>
          </ul>
        </div>
        
        {/*........................ Support Section .................*/}
        <div>
          <h5 className="text-lg font-semibold mb-4">Support</h5>
          <ul className="space-y-2">
            <li className="cursor-pointer opacity-75 hover:opacity-100">Knowledge Base</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100">Documentation</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Don Not Sell My Personal Information</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100">Refer a Friend</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  "> Cookie Settings</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Accessiblity</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Report Abuse </li>
          </ul>
        </div>
        
        {/* ...................Company Section .............................*/}
        <div>
          <h5 className="text-lg font-semibold mb-4">Company</h5>
          <ul className="space-y-2">
            <li className="cursor-pointer opacity-75 hover:opacity-100">About</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100">Blog</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100">Jobs</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100">Press</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  "> Sitemap </li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Careers</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Contact</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Academy </li>
            <li className="cursor-pointer opacity-75 hover:opacity-100  ">Our Technology</li>
          </ul>
        </div>
        
        {/* Legal Section */}
        <div>
          <h5 className="text-lg font-semibold mb-4">Legal</h5>
          <ul className="space-y-2">
            <li className="cursor-pointer opacity-75 hover:opacity-100">Terms of service</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100">Privacy policy</li>
            <li className="cursor-pointer opacity-75 hover:opacity-100">License</li>
          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div className="col-span-2 sm:col-span-1">
          <h5 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h5>
          <p className="text-sm mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l bg-gray-700 text-white focus:outline-none"
            />
            <button className="bg-orange-700 hover:bg-orange-600 text-white px-4 rounded-r">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-8 flex-col md:flex-row justify-between items-center text-gray-500 text-sm footer flex">
      <div className='flex'>
          <img src={logo} alt="" className='w-24 flex'/>
          </div>
        <p>Copyright © 2024 GriffinTechs, Inc. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://fcaebook.com" aria-label="Facebook" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faFacebook} className='size-7' /> 
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faInstagram} className='size-7' />
          </a>
          <a href="https://" aria-label="Discord" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faDiscord} className='size-7' />
          </a>
          <a href="https://twitter.com/" aria-label="Twitter" target='blank' className="text-orange-900 hover:text-orange-600">
            <FontAwesomeIcon icon={faXTwitter} className='size-7' /> 
          </a>
          <a href="https://github.com/" aria-label="GitHub" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faGithub} className='size-7' />
          </a>
          <a href="https://youtube.com/" aria-label="YouTube" target='blank' className="text-orange-900 hover:text-orange-600">
          <FontAwesomeIcon icon={faYoutube}  className='size-7'/>  
          </a>
  
        </div>
      </div>
    </footer>
  );
};

export default Footer;
