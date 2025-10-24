import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin size={18} className="sm:w-5 sm:h-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://res.cloudinary.com/drit9nkha/image/upload/v1761289377/logo_yax1ym.jpg"
                alt="BrainScan Academy"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full"
              />
              <span className="text-lg sm:text-2xl font-bold">BrainScan Academy</span>
            </div>
            <p className="text-sm sm:text-base text-blue-200 leading-relaxed mb-4 max-w-md">
              Unlocking potential through scientific analysis and advanced
              mind-training techniques. Discover your unique talents today.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-white/10 hover:bg-white/20 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm sm:text-base text-blue-200 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-blue-200 text-sm sm:text-base">
                <Phone size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0" />
                <span>+91 7013517725</span>
              </li>
              <li className="flex items-start space-x-2 text-blue-200 text-sm sm:text-base">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px] flex-shrink-0 mt-0.5" />
                <span className="break-words">brainscanacademy@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-blue-200">
            © {new Date().getFullYear()} BrainScan Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
