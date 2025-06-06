import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-3">
          {/* Modern Logo SVG */}
          <span className="inline-block">
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C12.954 4 4 12.954 4 24C4 35.046 12.954 44 24 44C35.046 44 44 35.046 44 24C44 12.954 35.046 4 24 4Z" fill="black" />
              <path d="M24 8C15.163 8 8 15.163 8 24C8 32.837 15.163 40 24 40C32.837 40 40 32.837 40 24C40 15.163 32.837 8 24 8Z" fill="white" />
              <path d="M24 12C17.373 12 12 17.373 12 24C12 30.627 17.373 36 24 36C30.627 36 36 30.627 36 24C36 17.373 30.627 12 24 12Z" fill="black" />
              <path d="M24 16C19.582 16 16 19.582 16 24C16 28.418 19.582 32 24 32C28.418 32 32 28.418 32 24C32 19.582 28.418 16 24 16Z" fill="white" />
            </svg>
          </span>
          <span className="text-xl font-semibold text-black">Insta.Ltd</span>
        </div>
        <nav className="flex gap-8 text-lg font-normal text-black">
          <a href="#" className="hover:text-gray-600 hover:underline hover:underline-offset-4 transition-all duration-200">Home</a>
          <a href="#" className="hover:text-gray-600 hover:underline hover:underline-offset-4 transition-all duration-200">About Us</a>
          <a href="#" className="hover:text-gray-600 hover:underline hover:underline-offset-4 transition-all duration-200">Our Services</a>
          <a href="#" className="hover:text-gray-600 hover:underline hover:underline-offset-4 transition-all duration-200">Resources</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 