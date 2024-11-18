import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [action, setAction] = useState("LOGIN AS ADMIN");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            className={`w-1/2 py-2 text-center font-medium ${
              action === "LOGIN AS ADMIN" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } rounded-l-md`}
            onClick={() => setAction("LOGIN AS ADMIN")}
          >
            ADMIN
          </button>
          <button
            className={`w-1/2 py-2 text-center font-medium ${
              action === "LOGIN AS USER" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
            } rounded-r-md`}
            onClick={() => setAction("LOGIN AS USER")}
          >
            USER
          </button>
        </div>

        <h2 className="text-center text-lg font-semibold text-gray-700 mb-4">
          {action}
        </h2>
        

        <form className="space-y-4">
          {action === "LOGIN AS ADMIN" && (
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
            
              <FontAwesomeIcon icon={faUser} className="h-5 w-5 mr-3"  />
              <input
                type="text"
                placeholder="Admin user email / Identifier"
                className="w-full bg-transparent focus:outline-none text-gray-700"
              />
            </div>
          )}

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5 mr-3"  />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>

          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
          <FontAwesomeIcon icon={faLock} className="h-5 w-5 mr-3"  />
            <input
              type="password"
              placeholder="Password"
              autoComplete="off"
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>
        </form>

        {action === "LOGIN AS USER" && (
          <div className="text-sm text-gray-600 mt-4">
            Forgot Password?{" "}
            <span className="text-blue-500 cursor-pointer">Click here!</span> -{" "}
            Don’t have an account?{" "}
            <span className="text-blue-500 cursor-pointer">Register here!</span>
          </div>
        )}

        <button className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
