import React from 'react';
import { motion } from 'framer-motion';

const CRMService = () => {
  const features = [
    {
      title: "Lead Management",
      description: "Track and manage leads throughout the entire sales pipeline with our intuitive interface.",
      icon: "🎯"
    },
    {
      title: "Customer Analytics",
      description: "Gain valuable insights into customer behavior and preferences with advanced analytics tools.",
      icon: "📊"
    },
    {
      title: "Automated Workflows",
      description: "Streamline your processes with customizable automated workflows and task management.",
      icon: "⚡"
    },
    {
      title: "Integration Capabilities",
      description: "Seamlessly integrate with your existing tools and platforms for a unified experience.",
      icon: "🔄"
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
            CRM Solutions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your customer relationships with our comprehensive CRM software. 
            Manage leads, track interactions, and boost customer satisfaction with our powerful tools.
          </p>
        </motion.div>

        {/* Main Image */}
        {/* <motion.div 
          className="mb-16 rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
            alt="CRM Dashboard" 
            className="w-full h-[400px] object-cover"
          />
        </motion.div> */}

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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Increased Efficiency</h3>
              <p className="text-gray-700">Automate routine tasks and streamline your workflow for better productivity.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Customer Insights</h3>
              <p className="text-gray-700">Understand your customers better with detailed analytics and reporting.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Sales</h3>
              <p className="text-gray-700">Convert more leads and close deals faster with our sales pipeline tools.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Customer Relationships?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get started with our CRM solution today and see the difference it can make for your business.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Demo
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default CRMService; 