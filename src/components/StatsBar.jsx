import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const stats = [
    {
      number: 180,
      suffix: '+',
      label: 'Clients Served',
      icon: '👥'
    },
    {
      number: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      icon: '⭐'
    },
    {
      number: 15,
      suffix: '+',
      label: 'Years Experience',
      icon: '🎯'
    },
    {
      number: 260,
      suffix: '+',
      label: 'Projects Completed',
      icon: '🚀'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
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
    <div className="relative">
      {/* Decorative Divider */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="w-full max-w-7xl px-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white px-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        className="w-full bg-white pt-16 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              We take pride in our achievements and the trust our clients place in us. Here's a glimpse of our journey so far.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-2xl p-8 md:p-12"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="text-center px-4 md:px-8 relative"
                  variants={itemVariants}
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <motion.div 
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {isInView && (
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <CountUp
                          end={stat.number}
                          duration={2.5}
                          enableScrollSpy
                          scrollSpyOnce={false}
                          scrollSpyDelay={index * 200}
                          separator=","
                        />
                        <span className="text-blue-600">{stat.suffix}</span>
                      </motion.span>
                    )}
                  </motion.div>
                  <motion.p 
                    className="text-gray-700 text-base font-medium"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  >
                    {stat.label}
                  </motion.p>
                </motion.div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gray-200 my-4" />
                )}
                {index < stats.length - 1 && (
                  <div className="md:hidden w-16 h-px bg-gray-200 my-4" />
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default StatsBar; 