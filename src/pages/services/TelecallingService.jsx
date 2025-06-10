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

const TelecallingService = () => {
  const features = [
    {
      title: "Call Management",
      description: "Efficiently manage incoming and outgoing calls with our advanced call routing and queuing system. Ensure no call goes unanswered.",
      icon: "📞"
    },
    {
      title: "Performance Analytics",
      description: "Track and analyze call center metrics with detailed reports. Monitor call duration, success rates, and agent performance in real-time.",
      icon: "📊"
    },
    {
      title: "Quality Monitoring",
      description: "Record and evaluate calls for quality assurance. Provide feedback and training opportunities to improve service standards.",
      icon: "🎯"
    },
    {
      title: "Integration Capabilities",
      description: "Seamlessly integrate with your existing CRM and business tools. Maintain a unified view of customer interactions across platforms.",
      icon: "🔄"
    }
  ];

  const techStack = [
    {
      name: "React.js",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#61DAFB]">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "Node.js",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#339933]">
          <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.047,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.081-0.047,0.131-0.141,0.131-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.755-0.955,2.746-2.604,2.746c-0.508,0-0.909,0-2.026-0.551L4.261,17.16l8.771-5.071c0.082-0.047,0.19-0.047,0.272,0l8.791,5.071 c0.081,0.047,0.136,0.141,0.136,0.238v2.332c0,0.097-0.054,0.192-0.137,0.242l-8.791,5.072c-0.081,0.047-0.189,0.047-0.271,0 l-2.441-1.407c-0.27,0.156-0.59,0.246-0.912,0.246c-0.002,0-0.003,0-0.004,0c-0.321,0-0.641-0.085-0.922-0.247l-2.936-1.737 c-0.438-0.245-0.224-0.332-0.08-0.383c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.047,0.151-0.023,0.218,0.017l2.256,1.339 c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076c0.081-0.047,0.131-0.141,0.131-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072 c-0.081-0.047-0.189-0.047-0.271,0L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.755-0.955,2.746-2.604,2.746c-0.508,0-0.909,0-2.026-0.551L4.261,17.16l8.771-5.071c0.082-0.047,0.19-0.047,0.272,0l8.791,5.071 c0.081,0.047,0.136,0.141,0.136,0.238v2.332c0,0.097-0.054,0.192-0.137,0.242l-8.791,5.072c-0.081,0.047-0.189,0.047-0.271,0 l-2.441-1.407c-0.27,0.156-0.59,0.246-0.912,0.246c-0.002,0-0.003,0-0.004,0z"/>
        </svg>
      )
    },
    {
      name: "MongoDB",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#47A248]">
          <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.6-1.055-.6-.523 0-.776.206-1.055.6-.321.701-3.31 2.535-4.573 8.115C4.879 11.186 4.939 12.71 5.528 14.29c.471 1.214 1.243 2.13 2.28 2.803.885.571 1.98.86 3.192.86 1.212 0 2.307-.289 3.192-.86 1.037-.673 1.809-1.59 2.28-2.803.59-1.58.65-3.104.321-4.735zM12.041 17.9c-.972 0-1.945-.116-2.829-.349a6.063 6.063 0 0 1-2.251-.998 5.965 5.965 0 0 1-1.67-1.59c-.33-.448-.594-.944-.783-1.477a6.08 6.08 0 0 1-.348-1.807c0-.61.087-1.215.257-1.797.18-.606.443-1.19.783-1.712.342-.523.755-.99 1.225-1.388.47-.4.994-.726 1.563-.97.57-.248 1.179-.373 1.797-.373.619 0 1.228.125 1.797.372.57.248 1.094.573 1.565.97.47.4.882.866 1.224 1.388.342.523.605 1.106.785 1.712.17.582.256 1.187.256 1.797 0 .61-.087 1.214-.256 1.796-.18.606-.443 1.19-.785 1.712a5.955 5.955 0 0 1-1.225 1.388 6.067 6.067 0 0 1-1.563.971c-.57.248-1.179.372-1.797.372z"/>
        </svg>
      )
    },
    {
      name: "WebRTC",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#333333]">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7zm0 2a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z"/>
        </svg>
      )
    },
    {
      name: "Socket.io",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#010101]">
          <path d="M11.936 0C5.344 0 0 5.344 0 11.936s5.344 11.936 11.936 11.936 11.936-5.344 11.936-11.936S18.528 0 11.936 0zm-1.128 16.368c-1.128 0-2.256-.376-3.008-1.128l-.752-.752c-.376-.376-.376-1.128 0-1.504.376-.376 1.128-.376 1.504 0l.752.752c.376.376 1.128.376 1.504 0l5.264-5.264c.376-.376.376-1.128 0-1.504-.376-.376-1.128-.376-1.504 0l-5.264 5.264c-.752.752-1.88.752-2.632 0l-.752-.752c-.752-.752-1.128-1.88-1.128-3.008s.376-2.256 1.128-3.008l5.264-5.264c.752-.752 1.88-1.128 3.008-1.128s2.256.376 3.008 1.128l.752.752c.376.376.376 1.128 0 1.504-.376.376-1.128.376-1.504 0l-.752-.752c-.376-.376-1.128-.376-1.504 0l-5.264 5.264c-.376.376-.376 1.128 0 1.504.376.376 1.128.376 1.504 0l5.264-5.264c.752-.752 1.88-.752 2.632 0l.752.752c.752.752 1.128 1.88 1.128 3.008s-.376 2.256-1.128 3.008l-5.264 5.264c-.752.752-1.88 1.128-3.008 1.128z"/>
        </svg>
      )
    },
    {
      name: "Redis",
      logo: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#DC382D]">
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
            Telecalling Solutions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Transform your call center operations with our advanced telecalling software. 
            Enhance call quality, track performance, and boost productivity with our comprehensive tools.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About Our Telecalling Solution</h2>
              <p className="text-gray-700 leading-relaxed">
                Our telecalling solution is a comprehensive platform designed to revolutionize call center operations. Built with scalability and real-time communication in mind, this platform offers seamless integration of call management, quality monitoring, and performance analytics. The system is engineered to handle high call volumes while maintaining crystal-clear audio quality and minimal latency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The platform features advanced call routing, real-time monitoring, and customizable dashboards that provide actionable insights. Our telecalling solution is particularly effective for businesses looking to streamline their customer service operations, enhance call quality, and make data-driven decisions to improve performance.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Stack</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Improved Efficiency</h3>
              <p className="text-gray-700">Optimize call handling and reduce wait times with intelligent call routing and queuing.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Quality</h3>
              <p className="text-gray-700">Monitor and improve call quality with advanced recording and evaluation tools.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Better Insights</h3>
              <p className="text-gray-700">Make data-driven decisions with comprehensive analytics and reporting capabilities.</p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Call Center?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Get started with our telecalling solution today and see the difference it can make for your business.
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

export default TelecallingService; 