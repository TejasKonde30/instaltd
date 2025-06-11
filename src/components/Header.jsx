import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/crop.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)]' 
          : 'bg-gradient-to-r from-blue-50/50 via-white/50 to-purple-50/50 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <img src={logo} alt="Insta.Ltd Logo" className="w-50 h-20" />
          
        </motion.div>

        <nav className="hidden md:flex gap-8 text-lg font-medium">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'Our Services', path: '/services' },
            { name: 'Resources', path: '/resources' }
          ].map((item, index) => (
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
        >
          Contact Us
        </motion.button>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 hover:text-blue-600 transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </motion.header>
  );
};

export default Header; 