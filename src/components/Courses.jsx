import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Fingerprint, Brain, TrendingUp, Target, Lightbulb, Zap } from 'lucide-react';

const Courses = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const courses = [
    {
      title: 'DMIT Test',
      subtitle: 'Dermatoglyphics Multiple Intelligence Test',
      description:
        'A scientific fingerprint study that helps identify inborn talents, learning styles, strengths, and suitable career paths.',
      highlights: [
        { icon: <Target size={18} className="sm:w-5 sm:h-5" />, text: 'Identify innate potential' },
        { icon: <TrendingUp size={18} className="sm:w-5 sm:h-5" />, text: 'Know your learning style' },
        { icon: <Lightbulb size={18} className="sm:w-5 sm:h-5" />, text: 'Career guidance' },
      ],
      icon: <Fingerprint size={40} className="sm:w-12 sm:h-12" />,
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Mid Brain Activation',
      subtitle: 'Advanced Mind Training Program',
      description:
        'An advanced mind-training activity that activates your intuitive power — perform tasks blindfolded like reading, cycling, or identifying colors.',
      highlights: [
        { icon: <Brain size={18} className="sm:w-5 sm:h-5" />, text: 'Improves focus & confidence' },
        { icon: <Zap size={18} className="sm:w-5 sm:h-5" />, text: 'Boosts memory & sensory power' },
        {
          icon: <Target size={18} className="sm:w-5 sm:h-5" />,
          text: 'Enhances left-right brain balance',
        },
      ],
      icon: <Brain size={40} className="sm:w-12 sm:h-12" />,
      gradient: 'from-indigo-600 to-purple-600',
    },
  ];

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Choose from our scientifically-backed programs designed to unlock
            your true potential
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`bg-gradient-to-r ${course.gradient} w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6`}
              >
                {course.icon}
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {course.title}
              </h3>
              <p className="text-sm sm:text-base text-blue-600 font-semibold mb-3 sm:mb-4">
                {course.subtitle}
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {course.description}
              </p>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {course.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="text-blue-600 flex-shrink-0">{highlight.icon}</div>
                    <span className="text-sm sm:text-base text-gray-700">{highlight.text}</span>
                  </div>
                ))}
              </div>

              <motion.a
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className={`block text-center bg-gradient-to-r ${course.gradient} text-white px-6 sm:px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base`}
              >
                Enroll Now
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
