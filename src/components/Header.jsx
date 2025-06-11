import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/crop.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Resources', path: '/resources' }
  ];

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 bg-[#FFFFFF] shadow-sm`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="max-w-7xl mx-auto flex items-center gap-4 md:gap-6 py-4 md:py-6 px-4 md:px-8">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <img src={logo} alt="Insta.Ltd Logo" className="w-32 h-16 md:w-50 md:h-20" />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="ml-80 hidden md:flex gap-6 text-lg font-medium">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.path}
                className="text-gray-900 hover:text-blue-600 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.button
          className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const subject = encodeURIComponent('Contact Inquiry - Insta.Ltd');
            const body = encodeURIComponent('Hello,\n\nI am interested in learning more about your services.\n\nBest regards,');
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=contact@insta.ltd&su=${subject}&body=${body}`, '_blank');
          }}
        >
          Contact Us
        </motion.button>

        {/* Mobile Menu Button */}
        <button 
          className="ml-50 md:hidden text-gray-900 hover:text-blue-600 transition-colors duration-200 mr-2 py-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed top-[72px] right-0 w-full h-[calc(100vh-72px)] bg-white shadow-lg md:hidden z-50"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    to={item.path}
                    className="text-2xl font-medium text-gray-900 hover:text-blue-600"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const subject = encodeURIComponent('Contact Inquiry - Insta.Ltd');
                  const body = encodeURIComponent('Hello,\n\nI am interested in learning more about your services.\n\nBest regards,');
                  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=contact@insta.ltd&su=${subject}&body=${body}`, '_blank');
                }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 