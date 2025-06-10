import React from 'react';
import { motion } from 'framer-motion';

// Tech Stack Logo Component
const TechStackLogo = ({ name, logo, className = "" }) => (
  <div className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors ${className}`}>
    <div className="w-6 h-6 flex items-center justify-center">
      {logo}
    </div>
    <span className="font-semibold">{name}</span>
  </div>
);

const DigitalMarketingService = () => {
  const features = [
    {
      title: "Search Engine Optimization",
      description: "Boost your website's visibility with our comprehensive SEO services. From keyword research to technical optimization, we help you rank higher in search results.",
      icon: "🔍"
    },
    {
      title: "Social Media Management",
      description: "Engage your audience across all major social platforms. Create compelling content, manage communities, and drive meaningful interactions.",
      icon: "📱"
    },
    {
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and engages your target audience. From blog posts to videos, we help you tell your brand story.",
      icon: "✍️"
    },
    {
      title: "Analytics & Reporting",
      description: "Track and analyze your marketing performance with detailed insights. Make data-driven decisions to optimize your campaigns and maximize ROI.",
      icon: "📊"
    }
  ];

  const techStack = [
    {
      name: "Google Analytics",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#E37400]">
          <path d="M22.83 20.02c-.13.27-.53.37-.8.24l-2.26-1.13c-.27-.13-.37-.53-.24-.8.13-.27.53-.37.8-.24l2.26 1.13c.27.13.37.53.24.8zM11.65 2.02c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.65-6.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      )
    },
    {
      name: "Google Ads",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#4285F4]">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"/>
        </svg>
      )
    },
    {
      name: "Meta Ads",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#1877F2]">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn Ads",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#0A66C2]">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: "Twitter Ads",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#1DA1F2]">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: "HubSpot",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#FF7A59]">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Digital Marketing Solutions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Elevate your online presence with our comprehensive digital marketing services. 
            From SEO to social media, we help you connect with your audience and achieve your business goals.
          </p>
        </motion.div>

        {/* Project Details and Tech Stack Section */}
        <motion.div 
          className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Details */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Digital Marketing Services</h2>
              <p className="text-gray-700 leading-relaxed">
                Our digital marketing solution is a comprehensive platform designed to help businesses thrive in the digital landscape. Built with data-driven strategies and modern marketing techniques, this platform offers seamless integration of SEO, social media management, content marketing, and analytics. The system is engineered to deliver measurable results while maintaining brand consistency across all channels.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The platform features advanced analytics tools, automated campaign management, and customizable reporting dashboards that provide actionable insights. Our digital marketing solution is particularly effective for businesses looking to increase their online visibility, engage with their target audience, and drive sustainable growth.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Marketing Tools & Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <TechStackLogo
                    key={index}
                    name={tech.name}
                    logo={tech.logo}
                    className="hover:scale-105 transition-transform duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div 
          className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increased Visibility</h3>
              <p className="text-gray-700">Improve your online presence and reach your target audience effectively across all digital channels.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Engagement</h3>
              <p className="text-gray-700">Create meaningful connections with your audience through compelling content and strategic campaigns.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Measurable Results</h3>
              <p className="text-gray-700">Track and analyze your marketing performance with detailed insights and data-driven reporting.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get started with our digital marketing services today and see the difference it can make for your business.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default DigitalMarketingService; 