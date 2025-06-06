import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert Team",
      description: "Our team consists of industry experts with years of experience in software development and digital solutions.",
      icon: "👨‍💻"
    },
    {
      title: "Innovative Solutions",
      description: "We stay ahead of the curve with cutting-edge technology and innovative approaches to solve complex business challenges.",
      icon: "💡"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and customer service to ensure your business runs smoothly.",
      icon: "🛟"
    },
    {
      title: "Customized Approach",
      description: "Tailored solutions designed to meet your specific business needs and objectives.",
      icon: "🎯"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered projects to numerous satisfied clients across various industries.",
      icon: "📈"
    },
    {
      title: "Cost-Effective",
      description: "Competitive pricing with maximum value delivery for your investment.",
      icon: "💰"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: 'spring'
      }
    }
  };

  return (
    <section className="w-full py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8">Why Choose Us</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results for your business
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            className="inline-block bg-gray-900 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow hover:bg-gray-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 