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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our CRM Solution</h2>
              <p className="text-gray-700 leading-relaxed">
                Our CRM solution is a comprehensive customer relationship management platform designed to revolutionize how businesses interact with their customers. Built with scalability and user experience in mind, this platform offers a seamless integration of customer data, sales pipeline management, and analytics capabilities. The system is engineered to handle complex business workflows while maintaining an intuitive interface that requires minimal training.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The platform features real-time data synchronization, advanced reporting tools, and customizable dashboards that provide actionable insights. Our CRM solution is particularly effective for businesses looking to streamline their sales processes, enhance customer service, and make data-driven decisions.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">⚛️</span>
                  <span className="font-semibold">React.js</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🚀</span>
                  <span className="font-semibold">Node.js</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🗄️</span>
                  <span className="font-semibold">MongoDB</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🎨</span>
                  <span className="font-semibold">Tailwind CSS</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🔄</span>
                  <span className="font-semibold">Redux</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🔒</span>
                  <span className="font-semibold">JWT Auth</span>
                </div>
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