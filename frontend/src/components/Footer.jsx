import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* School Info */}
          <div className="space-y-5">
            <motion.h3 
              whileHover={{ scale: 1.02 }}
              className="text-3xl font-bold"
            >
              <span className="text-indigo-300">Sparsh</span> Academy
            </motion.h3>
            <p className="text-blue-100 leading-relaxed">
              Empowering young minds through excellence in education since 2010. Our vision is to create leaders of tomorrow.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: <FaFacebook size={20} />, color: 'hover:text-blue-400' },
                { icon: <FaTwitter size={20} />, color: 'hover:text-sky-400' },
                { icon: <FaInstagram size={20} />, color: 'hover:text-pink-400' },
                { icon: <FaYoutube size={20} />, color: 'hover:text-red-400' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3 }}
                  href="#"
                  className={`text-blue-200 transition-colors ${social.color}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-xl font-semibold text-white border-b-2 border-indigo-400 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Academics', 'Admissions', 'Gallery', 'Contact'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <a href="#" className="text-blue-100 hover:text-indigo-300 transition-colors flex items-center">
                    <span className="w-2 h-2 bg-indigo-300 rounded-full mr-2"></span>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="text-xl font-semibold text-white border-b-2 border-indigo-400 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt />, text: 'Partawal Bazar, Maharajganj, UP 273303' },
                { icon: <FaPhone />, text: '9935417930, 9839018770', link: 'tel:9935417930' },
                { icon: <FaEnvelope />, text: 'prabhadentalcareclinic@gmail.com', link: 'mailto:prabhadentalcareclinic@gmail.com' },
                { icon: <FaClock />, text: 'Mon-Sat: 8:00 AM - 4:00 PM' }
              ].map((contact, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 3 }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-indigo-300 mt-1">{contact.icon}</span>
                  {contact.link ? (
                    <a href={contact.link} className="text-blue-100 hover:text-indigo-300 transition-colors">
                      {contact.text}
                    </a>
                  ) : (
                    <p className="text-blue-100">{contact.text}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h4 className="text-xl font-semibold text-white border-b-2 border-indigo-400 pb-2 inline-block">
              Newsletter
            </h4>
            <p className="text-blue-100">
              Stay updated with our latest news and events.
            </p>
            <motion.form 
              whileHover={{ scale: 1.01 }}
              className="space-y-3"
            >
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 rounded-lg bg-blue-800/50 backdrop-blur-sm text-white border border-blue-700 focus:border-indigo-300 focus:ring-1 focus:ring-indigo-200 focus:outline-none transition-all"
                required
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                type="submit" 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all"
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Sparsh Academy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -2 }}
                href="#"
                className="text-blue-300 hover:text-indigo-300 text-sm transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;