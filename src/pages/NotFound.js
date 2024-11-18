import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
