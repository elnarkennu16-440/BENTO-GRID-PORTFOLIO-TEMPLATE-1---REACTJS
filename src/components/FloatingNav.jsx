import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const FloatingNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', icon: <AiOutlineHome /> },
    { name: 'About', href: '#about', icon: <AiOutlineUser /> },
    { name: 'Projects', href: '#projects', icon: <AiOutlineProject /> },
    { name: 'Contact', href: '#contact', icon: <AiOutlineMail /> },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <div className='flex gap-2 bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-xl px-6 py-4 rounded-full border border-violet-500/30 shadow-lg shadow-violet-900/30'>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className='p-3 rounded-full hover:bg-gradient-to-r hover:from-red-600/30 hover:to-violet-600/30 transition-all duration-300 relative group'
            >
              <span className='text-gray-300 group-hover:text-violet-400 text-xl transition-colors'>
                {item.icon}
              </span>
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.name}
                <div className="absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"></div>
              </span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md flex"
        >
          <div className="flex w-full bg-gradient-to-r from-gray-900/70 to-gray-800/70 backdrop-blur-xl px-6 py-4 rounded-full border border-violet-500/30 shadow-lg">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-full hover:bg-gradient-to-r hover:from-red-600/30 hover:to-violet-600/30 transition-all text-white text-xl mr-auto"
            >
              {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            
            <div className="flex-1 flex justify-center">
              <a 
                href="#home" 
                className="p-3 rounded-full hover:bg-gradient-to-r hover:from-red-600/30 hover:to-violet-600/30 transition-all text-white text-xl"
              >
                <AiOutlineHome />
              </a>
            </div>
            
            <button 
              onClick={() => alert("Contact form would open here")}
              className="p-3 rounded-full hover:bg-gradient-to-r hover:from-red-600/30 hover:to-violet-600/30 transition-all text-white text-xl ml-auto"
            >
              <AiOutlineMail />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/70 z-40 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-r from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-3xl p-8 border border-violet-500/30 w-4/5 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-center mb-8 text-white bg-gradient-to-r from-red-400 to-violet-400 text-transparent bg-clip-text">MENU</h2>
            <div className="space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gradient-to-r hover:from-red-600/30 hover:to-violet-600/30 transition-all text-white text-xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-violet-400">{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default FloatingNav;