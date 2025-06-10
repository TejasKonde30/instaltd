import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, icon, path, delay }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5 }}
  >
    <div className="p-8">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <Link
        to={path}
        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
      >
        Learn More
      </Link>
    </div>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      title: "CRM Solutions",
      description: "Transform your customer relationships with our comprehensive CRM software. Manage leads, track interactions, and boost customer satisfaction.",
      icon: "🤝",
      path: "/services/crm"
    },
    {
      title: "HR Services",
      description: "Streamline your HR processes with our end-to-end HR management solutions. From recruitment to employee engagement, we've got you covered.",
      icon: "👥",
      path: "/services/hr"
    },
    {
      title: "Telecalling Services",
      description: "Enhance your customer outreach with our professional telecalling services. Boost sales and customer satisfaction with our expert team.",
      icon: "📞",
      path: "/services/telecalling"
    },
    {
      title: "Digital Marketing",
      description: "Grow your online presence with our comprehensive digital marketing services. From SEO to social media, we help you reach your target audience.",
      icon: "📱",
      path: "/services/digital-marketing"
    }
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
            Our Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Discover our comprehensive range of business solutions designed to help your organization thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Why Choose Us Section */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Solutions</h3>
              <p className="text-gray-700">Tailored solutions designed by industry experts to meet your specific needs.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Implementation</h3>
              <p className="text-gray-700">Fast deployment and seamless integration with your existing systems.</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reliable Support</h3>
              <p className="text-gray-700">24/7 technical support and regular updates to ensure smooth operations.</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about how our services can help your business grow.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Services; 