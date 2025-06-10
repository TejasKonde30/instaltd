import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import teamIllustration1 from '../assets/herolatest2.jpg';
import teamIllustration2 from '../assets/herolatest1.jpg';
import teamIllustration3 from '../assets/herolatest3.jpg';

const imageVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  hiddenBottom: { opacity: 0, y: 80 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, type: 'spring' } },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.5, duration: 0.7, type: 'spring' },
  }),
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-12 px-4 pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Decorative Circles */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      {/* Content Container */}
      <div className="relative max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={textVariants}
            custom={0}
          >
            <Typewriter
              words={["Insta.Ltd"]}
              loop={1}
              cursorStyle='|'
              typeSpeed={120}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={textVariants}
            custom={1}
          >
            Empowering teams to achieve more, together. At Insta.Ltd, we believe in collaboration, innovation, and delivering excellence for our clients.
          </motion.p>
          <motion.a
            href="#"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={textVariants}
            custom={2}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in touch
          </motion.a>
        </div>

        {/* Right: Images */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center">
          <motion.img
            src={teamIllustration1}
            alt="Team working together at Insta.Ltd"
            className="w-full max-w-lg h-auto object-contain rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02]"
            initial="hiddenLeft"
            whileInView="visible"
            viewport={{ once: false }}
            variants={imageVariants}
          />
          <motion.img
            src={teamIllustration2}
            alt="Financial growth and teamwork"
            className="w-full max-w-lg h-auto object-contain rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] md:translate-y-8"
            initial="hiddenRight"
            whileInView="visible"
            viewport={{ once: false }}
            variants={imageVariants}
          />
          <motion.img
            src={teamIllustration3}
            alt="Team brainstorming and planning"
            className="w-full max-w-lg h-auto object-contain rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] transition-all duration-300 hover:scale-[1.02] md:-translate-y-8 md:col-span-2"
            initial="hiddenBottom"
            whileInView="visible"
            viewport={{ once: false }}
            variants={imageVariants}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
