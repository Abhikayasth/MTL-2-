import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";  // Import Helmet for managing SEO tags
import Image from "../images/Logo.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Process", id: "process" },
    { name: "Team", id: "team" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Madhav Tech Labs | Solving Digital Problems for Small Businesses</title>
        <meta
          name="description"
          content="Madhav Tech Labs helps small businesses with professional website development and digital solutions. We create modern, responsive, and SEO-optimized websites."
        />
        <meta name="keywords" content="website development, digital solutions, small businesses, SEO, React, Tailwind CSS" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.madhavtechlabs.com" />
      </Helmet>

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ height: "80px" }}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => setIsLogoModalOpen(true)}
            className="flex items-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-300 hover:from-teal-300 hover:via-teal-300 hover:to-teal-300 transition-all duration-500"
            aria-label="Madhav Tech Labs Logo"
          >
            <span className="mr-2">Madhav</span>
            <span>Tech Labs</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSmoothScroll(item.id)}
                >
                  <button className="text-gray-200 text-lg hover:text-white transition-colors duration-300 relative group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
              onClick={() => navigate("/contact-us")}
              aria-label="Get Started"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-transparent border border-teal-400 text-teal-400 rounded-full font-semibold hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              onClick={() => navigate("/detailed-services")}
              aria-label="Learn More"
            >
              Learn More
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Mobile Menu Toggle"
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Separation line */}
      <div className="fixed top-[80px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-70 z-40"></div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    className="text-3xl text-gray-200 hover:text-white transition-all duration-300 flex items-center group"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      handleSmoothScroll(item.id);
                    }}
                  >
                    {item.name}
                    <ChevronRight className="ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo Modal */}
      <AnimatePresence>
        {isLogoModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-8 rounded-lg relative">
              <button
                className="absolute top-2 right-2 text-black"
                onClick={() => setIsLogoModalOpen(false)}
              >
                <X size={24} />
              </button>
              <img
                src={Image}
                alt="Madhav Tech Labs Logo"
                className="h-32 w-auto mx-auto"
                loading="lazy"
                />
                <p className="text-center mt-4 text-gray-700">
                  Madhav Tech Labs - Providing digital solutions for small businesses.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
  
        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-4 left-0 right-0 flex justify-center animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => handleSmoothScroll("services")}
            className="text-teal-400 text-3xl"
            aria-label="Scroll to Services"
          >
            ⬇️
          </button>
        </motion.div>
      </>
    );
  };
  
  export default Header;
  
