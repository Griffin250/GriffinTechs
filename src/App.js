import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "../src/pages/Home";
import ContactForm from "./pages/Contact";
import Chatbot from "./components/ui/Chatbot";
import Services from "../src/pages/Services";
import Help from "../src/components/layouts/Help";
import NotFound from "./pages/NotFound";
import LoginSignup from "./components/Auth/LoginSignup";
import Projects from "./pages/Projects";
import AboutUs from "./pages/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
};

const AppContent = () => {
  const location = useLocation();
  const hideFooterOnLoginPage = location.pathname === "/loginSignup";
  const hideNavBarOnLoginPage = location.pathname === "/loginSignup";

  return (
    <>
      {/* Navbar */}
      {!hideNavBarOnLoginPage && <Navbar />}

      {/* Chatbot */}
      <Chatbot />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/help" element={<Help />} />
        <Route path="/loginSignup" element={<LoginSignup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      {!hideFooterOnLoginPage && <Footer />}
    </>
  );
};

export default App;
