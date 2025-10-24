import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace these with your actual EmailJS credentials
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS Service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
        formRef.current,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setLoading(false);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="sm:w-6 sm:h-6" />,
      title: 'Phone',
      value: '+91 7013517725',
      link: 'tel:+917013517725',
    },
    {
      icon: <Mail size={20} className="sm:w-6 sm:h-6" />,
      title: 'Email',
      value: 'brainscanacademy@gmail.com',
      link: 'mailto:brainscanacademy@gmail.com',
    },
    {
      icon: <MapPin size={20} className="sm:w-6 sm:h-6" />,
      title: 'Address',
      value: 'Gooty, Andhra Pradesh, India',
      link: '#',
    },
  ];

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4">
            Ready to unlock your potential? Contact us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="user_phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your interest..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 text-sm sm:text-base"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send size={18} className="sm:w-5 sm:h-5" />
              </motion.button>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center text-sm sm:text-base"
                >
                  Message sent successfully! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6 sm:space-y-8 order-1 lg:order-2"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-start space-x-3 sm:space-x-4 bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm text-gray-500 font-medium mb-1">
                    {info.title}
                  </h4>
                  <p className="text-base sm:text-lg text-gray-900 font-semibold break-words">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm sm:text-base">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
