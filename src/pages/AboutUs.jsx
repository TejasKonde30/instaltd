import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-purple-50/50 pt-24">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 mb-6">
            About Insta.Ltd
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering businesses with innovative solutions and cutting-edge technology
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To transform businesses through innovative technology solutions, making advanced digital tools accessible to companies of all sizes. We strive to be at the forefront of technological advancement while maintaining a focus on practical, impactful solutions.
            </p>
          </motion.div>

          <motion.div 
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
            {...fadeInUp}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-purple-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading force in digital transformation, creating a future where technology seamlessly enhances business operations and drives sustainable growth for our clients worldwide.
            </p>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Constantly pushing boundaries and exploring new possibilities in technology.",
                icon: "💡"
              },
              {
                title: "Excellence",
                description: "Delivering the highest quality solutions with attention to every detail.",
                icon: "⭐"
              },
              {
                title: "Integrity",
                description: "Building trust through honest, transparent, and ethical business practices.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1, type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
            Our Leadership Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Doe",
                position: "CEO & Founder",
                bio: "Visionary leader with 15+ years of experience in technology and business innovation."
              },
              {
                name: "Jane Smith",
                position: "CTO",
                bio: "Tech expert specializing in AI and machine learning solutions."
              },
              {
                name: "Mike Johnson",
                position: "Head of Operations",
                bio: "Operations specialist focused on delivering excellence in every project."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1, type: "spring", stiffness: 300 }}
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-blue-600 text-center mb-3">{member.position}</p>
                <p className="text-gray-600 text-center">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs; 