import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faFacebook,
  faLinkedinIn,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");

  // Please update the Access Key in the .env
  const apiKey =
    process.env.PUBLIC_ACCESS_KEY || "cd08b0b5-c66e-4342-9e74-8c3d55fbeb33";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "GriffinTechs",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg) => {
      setIsSuccess(true);
      setMessage("Message sent successfully!");
      reset();

      // Hide the popup after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setMessage("");
      }, 5000);
    },
    onError: (msg) => {
      setIsSuccess(false);
      setMessage("Failed to send the message. Please try again.");
    },
  });

  // reCAPTCHA handler
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleFormSubmit = async (data) => {
    if (!captchaToken) {
      setMessage("Please complete the reCAPTCHA verification.");
      setIsSuccess(false);
      return;
    }

    // Include the captcha token in the form data
    data["g-recaptcha-response"] = captchaToken;
    onSubmit(data);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between mt-14 p-6 md:p-12 bg-gradient-to-br from-blue-200 via-gray-100 text-gray-800">
      {/* Left Section */}
      <div className="flex flex-col mb-8 md:mb-0 md:w-1/3 mt-16">
        <div className="border-t border-gray-500 w-8 mb-2"></div>
        <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>

        <p className="text-blue-600 mb-4">
          <a
            href="mailto:sam-it-ub@hotmail.com"
            className="hover:text-orange-500"
          >
            sam-it-ub@hotmail.com{" "}
          </a>
          <br />
          <a href="tel:+47 429-474 90" className="hover:text-orange-500">
            {" "}
            +47 429-474 90{" "}
          </a>
        </p>

        <h3 className="text-lg font-semibold mb-2">Arendal, Norway</h3>
        <a
          href="https://www.google.com/maps/place/Sam+Eyde+high+school/@58.480899,8.723333,17z/data=!3m1!4b1!4m6!3m5!1s0x464794c3cc8a9ccd:0xee8dfbab565a402!8m2!3d58.480899!4d8.723333!16s%2Fg%2F122b8z26?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
          className="text-blue-600 mb-4 hover:text-orange-700"
          target="blank"
        >
          Østensbuveien 80,
          <br />
          4848 Arendal
        </a>

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

      {/* Right Section */}
      <form
        className="flex flex-col space-y-4 md:w-2/3 mt-12"
        method="post"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col w-full md:w-1/2 md:mt-0 mt-4">
            <label className="text-sm font-semibold">
              First Name (required)
            </label>
            <input
              type="text"
              placeholder="First Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border placeholder:text-gray-800 rounded-md outline-none focus:ring-4  
      ${
        errors["First Name"]
          ? "border-red-600 focus:border-red-600 ring-red-100"
          : "border-gray-300 focus:border-blue-400 ring-gray-100"
      }`}
              {...register("First Name", {
                required: "First name is required",
                maxLength: 80,
              })}
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2 md:mt-0 mt-4">
            <label className="text-sm font-semibold">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              autoComplete="false"
              className={`w-full px-4 py-3 border placeholder:text-gray-800 rounded-md outline-none focus:ring-4  
      ${
        errors["Last Name"]
          ? "border-red-600 focus:border-red-600 ring-red-100"
          : "border-gray-300 focus:border-blue-400 ring-gray-100"
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
            autoComplete="false"
            className={`w-full px-4 py-3 border placeholder:text-gray-800 rounded-md outline-none focus:ring-4 ${
              errors.email
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-gray-300 focus:border-blue-400 ring-gray-100"
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
            className={`w-full px-4 py-3 border placeholder:text-gray-800 rounded-md outline-none h-36 focus:ring-4 ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-gray-300 focus:border-blue-400 ring-gray-100"
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

        {/* reCAPTCHA */}
        <div className="mb-4">
          <ReCAPTCHA
            sitekey="6Lc9kY4qAAAAAMOOyJabRJhOc_NrecUXe-iSYDZ5"
            onChange={handleCaptchaChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 text-white rounded-md bg-blue-700 focus:outline-none 
          ring-offset-2 focus:ring-2 focus:ring-offset-blue-100 focus:ring-blue-500 hover:bg-blue-800"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>

        {message && (
          <div
            className={`mt-4 ${isSuccess ? "text-green-600" : "text-red-600"}`}
          >
            <small>{message}</small>
          </div>
        )}
      </form>
    </div>
  );
};
export default ContactForm;
