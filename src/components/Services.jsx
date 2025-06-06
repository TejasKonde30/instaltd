import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "CRM Solutions",
      description: "Streamline your customer relationships with our comprehensive CRM software. Manage leads, track interactions, and boost customer satisfaction.",
      icon: "🤝",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "HR Management",
      description: "Optimize your workforce management with our HR software. Handle recruitment, payroll, attendance, and employee engagement efficiently.",
      icon: "👥",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Telecalling Software",
      description: "Enhance your call center operations with our advanced telecalling solution. Improve call quality, track performance, and increase productivity.",
      icon: "📞",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Digital Marketing",
      description: "Grow your online presence with our digital marketing services. From SEO to social media management, we help you reach your target audience effectively.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const imageVariants = {
    hiddenLeft: { opacity: 0, x: -80 },
    hiddenRight: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.5, duration: 0.7, type: 'spring' },
    }),
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center py-12 px-4 bg-gray-50">
      <div className="max-w-7xl w-full">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={0}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-8">Our Services</h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Empowering businesses with innovative solutions. We deliver excellence through technology and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <div className="w-full md:w-1/2">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02]"
                  whileHover={{ scale: 1.02 }}
                />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
                <motion.a
                  href="#"
                  className="inline-block mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold text-lg shadow hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Learn More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 