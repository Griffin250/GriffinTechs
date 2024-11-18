import React, { useState } from 'react';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chatbot Popup */}
      {isOpen && (
        <div className="bg-gray-300 p-4 rounded-lg shadow-lg w-80 h-96 border">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-700">AI Chatbot</h3>
            <button
              onClick={toggleChat}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✖
            </button>
          </div>
          <div className="mt-4 overflow-y-auto h-72">
            <p className="text-sm text-gray-600">Hello! How can I assist you today?</p>
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
        💬
      </button>
    </div>
  );
};

export default ChatbotButton;
