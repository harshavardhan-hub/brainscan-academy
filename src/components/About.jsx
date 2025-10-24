import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: <Target size={28} className="sm:w-8 sm:h-8" />,
      title: 'Our Mission',
      description:
        'To help every individual discover and maximize their unique potential',
    },
    {
      icon: <Users size={28} className="sm:w-8 sm:h-8" />,
      title: 'Expert Team',
      description:
        'Certified professionals with years of experience in neuroscience',
    },
    {
      icon: <Award size={28} className="sm:w-8 sm:h-8" />,
      title: 'Proven Results',
      description:
        'Thousands of satisfied students and parents worldwide',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            About <span className="gradient-text">BrainScan Academy</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            At BrainScan Academy, we use scientific fingerprint analysis and
            neuro-activation techniques to help every learner realize their
            unique potential. Our evidence-based programs are designed to unlock
            hidden talents and enhance cognitive abilities.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
