import { faClose, faRobot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-14 right-8 z-50">
      {/* Chatbot Popup */}
      {isOpen && (
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg w-80 h-96 border">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl text-white text-center m-auto">Griffin AI Bot</h2>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faClose} className='h-6 w-6 text-orange-700' />
            </button>
          </div>
          <div className="mt-4 overflow-y-auto h-72">
            <p className="text-sm text-white">Hello! How can I assist you today?</p>
            <p className='mt-4 overflow-y-auto p-4 rounded-t-3xl bg-gray-400'> Thank you for contacting GriffinTechs. By continuing you agree to our privacy policy https://newfold.com/privacy-center</p>
            {/* Chat messages would go here */}

          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="bg-orange-700 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none"
      >
        <FontAwesomeIcon icon={faRobot}  className='h-8 w-8'/>
      </button>
    </div>
  );
};

export default ChatbotButton;
