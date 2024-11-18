import React from "react";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import Home from "../src/pages/Home";
import ContactForm from "./pages/Contact";
import ChatbotButton from "./components/ui/ChatbotButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Services from '../src/pages/Services'
import Help from '../src/components/layouts/Help'
import NotFound from "./pages/NotFound";
import LoginSignup from "./components/Forms/LoginSignup";
import Projects from "./pages/Projects";
const App = () => {
  return (
    <div>
      <BrowserRouter> 
        <Navbar />

        {/* .. */}
        <ChatbotButton />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contactForm" element={<ContactForm />} />
          <Route path="/help" element={<Help />} />
          <Route path="/loginSignup"  element={<LoginSignup />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
  
        
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
