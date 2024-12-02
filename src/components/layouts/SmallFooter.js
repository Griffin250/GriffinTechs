import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faGithub,
     faDiscord, faXTwitter} from '@fortawesome/free-brands-svg-icons';
import logo from '../../assets/logos/griffintechs.png'
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 pb-2 px-4 sm:px-8 md:px-16 hidden sm:block">

      <div className="max-w-7xl mx-auto mt-16 border-gray-700 pt-8 flex-col md:flex-row justify-between items-center text-gray-200 text-sm footer flex">
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
