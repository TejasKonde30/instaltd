import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-3">
          {/* Custom Logo SVG */}
          <span className="inline-block">
            <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="24" r="16" fill="black" />
              <path d="M36 24C36 32.8366 28.8366 40 20 40V8C28.8366 8 36 15.1634 36 24Z" fill="black" />
            </svg>
          </span>
          <span className="text-xl font-normal text-black">Insta.Ltd</span>
        </div>
        <nav className="flex gap-8 text-lg font-normal text-black">
          <a href="#" className="underline underline-offset-4">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Resources</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 