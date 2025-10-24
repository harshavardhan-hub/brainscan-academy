import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef();
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp WITHOUT asterisks (no bold)
    const whatsappMessage = 
      `New Inquiry from Website%0A%0A` +
      `Name: ${encodeURIComponent(formData.name)}%0A` +
      `Email: ${encodeURIComponent(formData.email)}%0A` +
      `Phone: ${encodeURIComponent(formData.phone)}%0A%0A` +
      `Message:%0A${encodeURIComponent(formData.message)}`;
    
    // WhatsApp number
    const phoneNumber = '917013517725';
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Phone size={20} className="sm:w-6 sm:h-6" />,
      title: 'Phone',
      value: '+91 70135 17725',
      link: 'tel:+917013517725',
    },
    {
      icon: <Mail size={20} className="sm:w-6 sm:h-6" />,
      title: 'Email',
      value: 'info@brainscanacademy.com',
      link: 'mailto:info@brainscanacademy.com',
    },
    {
      icon: <MapPin size={20} className="sm:w-6 sm:h-6" />,
      title: 'Address',
      value: 'Hyderabad, Telangana, India',
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
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm sm:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-sm sm:text-base"
                  placeholder="Tell us about your interest in DMIT or Mid Brain Activation..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base touch-manipulation"
              >
                <span>Send via WhatsApp</span>
                <Send size={18} className="sm:w-5 sm:h-5" />
              </motion.button>

              <p className="text-xs sm:text-sm text-gray-500 text-center">
                ✓ Your message will open in WhatsApp. Click send to complete.
              </p>
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
