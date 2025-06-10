import React from 'react';
import { motion } from 'framer-motion';

const ResourceCard = ({ title, description, icon, category, link, delay }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
      >
        Access Resource
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const Resources = () => {
  const resources = [
    {
      title: "CRM Implementation Guide",
      description: "A comprehensive guide to implementing and optimizing your CRM system for maximum efficiency.",
      icon: "📚",
      category: "Guide",
      link: "#"
    },
    // {
    //   title: "Digital Marketing Playbook",
    //   description: "Learn the latest digital marketing strategies and best practices for business growth.",
    //   icon: "📱",
    //   category: "E-Book",
    //   link: "#"
    // },
    {
      title: "HR Management Templates",
      description: "Download our collection of professional HR templates for recruitment, onboarding, and more.",
      icon: "📋",
      category: "Template",
      link: "#"
    },
    {
      title: "Customer Service Excellence",
      description: "Best practices and tips for delivering exceptional customer service in the digital age.",
      icon: "🎯",
      category: "Guide",
      link: "#"
    },
    {
      title: "Telecalling Scripts",
      description: "Professional telecalling scripts and conversation guides for various business scenarios.",
      icon: "📞",
      category: "Template",
      link: "#"
    },
    // {
    //   title: "Business Growth Webinar",
    //   description: "Watch our recorded webinar on strategies for sustainable business growth and scaling.",
    //   icon: "🎥",
    //   category: "Video",
    //   link: "#"
    // }
  ];

  const categories = [
    { name: "All Resources", count: resources.length },
    { name: "Guides", count: resources.filter(r => r.category === "Guide").length },
    { name: "Templates", count: resources.filter(r => r.category === "Template").length },
    { name: "E-Books", count: resources.filter(r => r.category === "E-Book").length },
    { name: "Videos", count: resources.filter(r => r.category === "Video").length }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Resources Hub
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Access our collection of guides, templates, and materials to help your business thrive.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-700 hover:text-blue-600 font-medium"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <ResourceCard
              key={index}
              {...resource}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest resources and updates directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Additional Resources Section */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Need More Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Chat Support</h3>
              <p className="text-gray-700">Get instant answers to your questions through our live chat support.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-700">Reach out to our support team for detailed assistance.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Phone Support</h3>
              <p className="text-gray-700">Speak directly with our experts for personalized guidance.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources; 