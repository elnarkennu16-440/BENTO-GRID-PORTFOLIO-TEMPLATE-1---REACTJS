import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-200">Contact Info</h3>
              
              <div className="space-y-6">
                {[
                  { label: 'Email', value: 'your.email@example.com', icon: '✉️' },
                  { label: 'Location', value: 'Your Location', icon: '📍' },
                  { label: 'Phone', value: '+1 (123) 456-7890', icon: '📞' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-md border border-violet-500/20"
                  >
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-300">{item.label}</div>
                      <div className="text-red-400">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-200">Follow Me</h3>
              <div className="flex space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((platform, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-violet-500/20 hover:border-red-500/40 transition-colors"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-violet-500/20 shadow-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-200">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-md border border-violet-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-md border border-violet-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-300">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-gray-900/60 backdrop-blur-md border border-violet-500/30 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 resize-none"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600/30 to-violet-600/30 backdrop-blur-md border border-violet-500/30 hover:from-red-700/40 hover:to-violet-700/40 transition-all font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center pt-10 border-t border-gray-800"
        >
          <p className="text-gray-500">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;