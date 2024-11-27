import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faLinkedinIn,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "cd08b0b5-c66e-4342-9e74-8c3d55fbeb33";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "GriffinTechs",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  return (
    <div className="flex flex-col md:flex-row justify-between p-6 md:p-12 bg-gray-100 text-gray-800">
      {/* Left Section */}
      <div className="flex flex-col mb-8 md:mb-0 md:w-1/3">
        <div className="border-t border-gray-500 w-8 mb-2"></div>
        <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>

        <p className="text-blue-600 mb-4">
          support@griffintechs.tech
          <br />
          (713) 429-4749
        </p>

        <h3 className="text-lg font-semibold mb-2">Arendal, Norway</h3>
        <p className="text-blue-600 mb-4">
          6811 Arendal
          <br />
          SamEyde, Arendal 77055
        </p>

        <div className="flex space-x-4 mt-4">
          <a
            href="#Home"
            aria-label="LinkedIn"
            className="text-orange-700 hover:text-blue-600 cursor-pointer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
          </a>
          <a
            href="#home"
            aria-label="YouTube"
            className="text-gray-500 hover:text-gray-700"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-2xl text-orange-700 hover:text-red-600 cursor-pointer"
            />
          </a>
          <a
            href="#home"
            aria-label="Facebook"
            className=" text-orange-700 hover:text-blue-700 cursor-pointer"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </a>
          <a
            href="#home"
            aria-label="Tiktok"
            className=" text-orange-700 hover:text-purple-900 cursor-pointer"
          >
            <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
          </a>
        </div>
      </div>

      {/*......................... Right Section................................ */}
      <form
        className="flex flex-col space-y-4 md:w-2/3"
        method="post"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col md:flex-row md:space-x-4">
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: "none" }}
            {...register("botcheck")}
          ></input>
          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-sm font-semibold">
              First Name (required)
            </label>
            <input
              type="text"
              placeholder="First Name"
              autoComplete="false"
              className={`w-full px-4  py-3 border placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4  
              ${
                errors["First Name"]
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-blue-400 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("First Name", {
                required: "First name is required",
                maxLength: 80,
              })}
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <label className="text-sm font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  
              ${
                errors["Last Name"]
                  ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                  : "border-gray-300 focus:border-blue-400 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
              }`}
              {...register("Last Name", {
                required: "Last Name is required",
                maxLength: 80,
              })}
            />
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            name="email"
            autoComplete="false"
            className={`w-full px-4 py-3 border placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-blue-400 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("email", {
              required: "Enter your email",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email",
              },
            })}
          />
          {errors.email && (
            <div className="mt-1 text-red-600">
              <small>{errors.email.message}</small>
            </div>
          )}
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Enter Your Message..."
            className={`w-full px-4 py-3 border placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                : "border-gray-300 focus:border-blue-400 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
            }`}
            {...register("message", {
              required: "Enter your Message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">
              {" "}
              <small>{errors.message.message}</small>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
        >
          {isSubmitting ? (
            <svg
              className="w-5 h-5 mx-auto text-white dark:text-black animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
