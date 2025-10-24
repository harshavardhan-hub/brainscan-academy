import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent',
      image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=2563EB&color=fff&size=128',
      text: 'DMIT helped my daughter choose her career confidently. The insights were incredibly accurate and have guided her educational decisions perfectly.',
      rating: 5,
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      image: 'https://ui-avatars.com/api/?name=Rajesh+Kumar&background=10B981&color=fff&size=128',
      text: 'Mid Brain Activation boosted my son\'s focus and memory tremendously. His academic performance improved significantly within months.',
      rating: 5,
    },
    {
      name: 'Anita Desai',
      role: 'Teacher',
      image: 'https://ui-avatars.com/api/?name=Anita+Desai&background=FACC15&color=000&size=128',
      text: 'As an educator, I\'ve seen remarkable improvements in students who underwent these programs. BrainScan Academy truly makes a difference.',
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () =>
    setCurrent((current - 1 + testimonials.length) % testimonials.length);

  // Touch handlers for swipe gestures
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      next();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prev();
    }
  };

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-yellow-50 to-orange-50"
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            What <span className="gradient-text">People Say</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Hear from our satisfied students and parents
          </p>
        </motion.div>

        <div className="relative">
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 sm:mb-6 border-4 border-blue-600"
                  />
                  <div className="flex mb-3 sm:mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="text-yellow-400 fill-yellow-400 sm:w-6 sm:h-6"
                      />
                    ))}
                  </div>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 italic mb-4 sm:mb-6 leading-relaxed">
                    "{testimonials[current].text}"
                  </p>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm sm:text-base text-blue-600 font-medium">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Hidden on small mobile */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={prev}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={next}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="sm:w-6 sm:h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === current
                    ? 'bg-blue-600 w-6 sm:w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint for mobile */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:hidden">
            Swipe left or right to see more
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
