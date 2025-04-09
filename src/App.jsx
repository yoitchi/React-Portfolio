import "./App.css"; // Keep your existing styles
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero"; // Renamed from Hero for consistency with your code
import About from "./components/About"; // Assuming About.jsx exists
import Certificates from "./components/Certificates"; // Assuming Certificates.jsx exists
import Project from "./components/Project"; // Renamed from Projects to match your earlier code
import Contact from "./components/Contact"; // Assuming Contact.jsx exists
import Footer from "./components/Footer"; // Assuming Footer.jsx exists
// import useScrollAnimation from "./useScrollAnimation"; // Uncomment if you have this hook

function App() {
  // useScrollAnimation(); // Uncomment if you implement the scroll animation hook

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <HeroSection />
      <About />
      <Certificates />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;