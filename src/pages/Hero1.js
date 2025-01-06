import React, { useState } from "react";



const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "School Management App that best works for you",
      description:
        "Generate student marks reports, communicate with parents, and manage your school efficiently and effectively.",
      image: "https://sam-it-ub.netlify.app/static/media/Isiah_Emma.e1dd93fa41c4be54d3c8.png", // Replace with actual image path
    },
    {
      title: "Empower Teachers with Tools",
      description:
        "Provide teachers with tools to manage their classes, track progress, and enhance student outcomes.",
      image: "https://sam-it-ub.netlify.app/static/media/SupportCommunity.70cd1cea4c9734f92acd.png",
    },
    {
      title: "Seamless Parent Communication",
      description:
        "Stay connected with parents through instant messaging, reports, and notifications.",
      image: "https://sam-it-ub.netlify.app/static/media/Technician.b64f79de69181e157b05.png",
    },
    {
      title: "Customizable Reporting Features",
      description:
        "Create and customize reports tailored to your school's needs.",
      image: "https://sam-it-ub.netlify.app/static/media/Technician.b64f79de69181e157b05.png",
    },
    {
      title: "Intuitive and User-Friendly Interface",
      description:
        "Enjoy a clean and simple interface that adapts to your needs.",
      image: "https://sam-it-ub.netlify.app/static/media/SupportCommunity.70cd1cea4c9734f92acd.png",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mt-24 overflow-hidden  bg-gradient-to-br from-blue-200 via-gray-100">
      {/* Slide Container */}
      <div className="flex transition-transform duration-300 ease-in-out transform"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-screen flex flex-col items-center justify-center text-center px-4"
          >
            <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mt-4">
              {slide.description}
            </p>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-5/12 md:w-3/6 mt-6 rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
      >
        &#x276E;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
      >
        &#x276F;
      </button>

      {/* Pagination */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
     
    </div>
  );
};

export default Hero1;
