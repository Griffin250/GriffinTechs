import React from "react";

// Example product data
const products = [
  {
    id: 1,
    title: "Personal Computer",
    image: "https://cf-images.dustin.eu/cdn-cgi/image/fit=contain,format=auto,quality=75,width=828,fit=contain/image/d2000010011347040/hp-elitebook-845-g11-ryzen-5-pro-16gb-512gb-14.png", // Replace with your image URL
    description:
      "Ideal for daily tasks, media consumption, and light work. Customizable specs for all your needs.",
    link: "/learn-more/personal-computer",
  },
  {
    id: 2,
    title: "Work Desktop",
    image: "https://cf-images.dustin.eu/cdn-cgi/image/fit=contain,format=auto,quality=75,width=828,fit=contain/image/d2000010011347040/hp-elitebook-845-g11-ryzen-5-pro-16gb-512gb-14.png", // Replace with your image URL
    description:
      "Powerful desktops for business tasks, multitasking, and productivity. Best for office environments.",
    link: "/learn-more/work-desktop",
  },
  {
    id: 3,
    title: "Gaming Server",
    image: "https://cf-images.dustin.eu/cdn-cgi/image/fit=contain,format=auto,quality=75,width=828,fit=contain/image/d2000010011347040/hp-elitebook-845-g11-ryzen-5-pro-16gb-512gb-14.png", // Replace with your image URL
    description:
      "High-performance servers for gaming setups. Smooth gameplay, minimal latency.",
    link: "/learn-more/gaming-server",
  },
  {
    id: 4,
    title: "Laptop for Students",
    image: "https://cf-images.dustin.eu/cdn-cgi/image/fit=contain,format=auto,quality=75,width=828,fit=contain/image/d2000010011347040/hp-elitebook-845-g11-ryzen-5-pro-16gb-512gb-14.png", // Replace with your image URL
    description:
      "Perfect laptops for students. Lightweight, long battery life, and great performance for study needs.",
    link: "/learn-more/laptop-student",
  },
  {
    id: 5,
    title: "Professional Workstations",
    image: "https://example.com/professional-workstation.jpg", // Replace with your image URL
    description:
      "Top-tier workstations for professionals. Ideal for heavy-duty software and tasks requiring high specs.",
    link: "/learn-more/professional-workstation",
  },
];

const LaptopConsultation = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-gray-200 p-8 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Find Your Perfect Product
        </h1>
        <p className="text-lg text-gray-600">
          We help you choose the best laptop, desktop, and other gadgets for your
          needs. Let us guide you in making the right choice.
        </p>
      </div>

      {/* Product Cards Section */}
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-72 md:w-80 lg:w-96 xl:w-96 transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <a
              href={product.link}
              className="text-blue-500 font-semibold hover:text-blue-600"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Still not sure? Let our experts guide you!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Book a free consultation, and we'll help you make an informed decision
          based on your specific needs.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-lg transition-all">
          Book a Consultation →
        </button>
      </div>
    </div>
  );
};

export default LaptopConsultation;
