import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import useWeb3Forms from "@web3forms/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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
  const [recaptchaToken, setRecaptchaToken] = useState(null); // reCAPTCHA token state

  // Your Google reCAPTCHA site key
  const siteKey = "YOUR_SITE_KEY"; // Replace with your actual site key

  // Web3Forms API key
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
      setRecaptchaToken(null); // Reset reCAPTCHA after submission

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

  const handleReCAPTCHA = (token) => {
    setRecaptchaToken(token); // Save the reCAPTCHA token
  };

  const validateForm = async (data) => {
    if (!recaptchaToken) {
      setMessage("Please complete the reCAPTCHA.");
      return;
    }

    // Submit the form if reCAPTCHA is verified
    await onSubmit({ ...data, "g-recaptcha-response": recaptchaToken });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between p-6 md:p-12 bg-gradient-to-br from-blue-200 via-gray-100 text-gray-800">
      {/* Left Section */}
      <div className="flex flex-col mb-8 md:mb-0 md:w-1/3">
        <div className="border-t border-gray-500 w-8 mb-2"></div>
        <h2 className="text-2xl font-semibold mb-4">Connect with us</h2>
        <p className="text-blue-600 mb-4">
          <a href="mailto:sam-it-ub@hotmail.com" className="hover:text-orange-500">
            sam-it-ub@hotmail.com
          </a>
          <br />
          <a href="tel:+47 429-474 90" className="hover:text-orange-500">
            +47 429-474 90
          </a>
        </p>
        <h3 className="text-lg font-semibold mb-2">Arendal, Norway</h3>
        {/* Add links */}
        <div className="flex space-x-4 mt-4">
          <a href="#home" aria-label="LinkedIn" className="text-orange-700 hover:text-blue-600">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-2xl" />
          </a>
          <a href="#home" aria-label="YouTube" className="text-gray-500 hover:text-red-600">
            <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
          </a>
          <a href="#home" aria-label="Facebook" className="text-orange-700 hover:text-blue-700">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </a>
          <a href="#home" aria-label="Tiktok" className="text-orange-700 hover:text-purple-900">
            <FontAwesomeIcon icon={faTiktok} className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <form
        className="flex flex-col space-y-4 md:w-2/3"
        onSubmit={handleSubmit(validateForm)}
      >
        <div className="mb-5">
          <label htmlFor="email_address" className="sr-only">
            Email Address
          </label>
          <input
            id="email_address"
            type="email"
            placeholder="Email Address"
            className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-4 ${
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
          {errors.email && <div className="mt-1 text-red-600">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <textarea
            name="message"
            placeholder="Enter Your Message..."
            className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-4 ${
              errors.message
                ? "border-red-600 focus:border-red-600 ring-red-100"
                : "border-gray-300 focus:border-blue-400 ring-gray-100"
            }`}
            {...register("message", {
              required: "Enter your message",
            })}
          />
          {errors.message && (
            <div className="mt-1 text-red-600">{errors.message.message}</div>
          )}
        </div>

        {/* Google reCAPTCHA */}
        <ReCAPTCHA sitekey={siteKey} onChange={handleReCAPTCHA} />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded font-semibold hover:bg-blue-700"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {isSuccess && message && (
          <div className="bg-green-500 text-white px-4 py-2 rounded-md shadow-lg text-center">
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;


//.................................................................................................
//.................................................................................................




const axios = require("axios");

app.post("/verify-recaptcha", async (req, res) => {
  const { token } = req.body;
  const secretKey = "YOUR_SECRET_KEY"; // Replace with your Secret Key

  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    if (response.data.success) {
      res.status(200).send({ message: "reCAPTCHA verified successfully" });
    } else {
      res.status(400).send({ message: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error" });
  }
});
