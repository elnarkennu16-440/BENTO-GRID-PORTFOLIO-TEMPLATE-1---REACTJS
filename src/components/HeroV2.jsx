import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const HeroV2 = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      <div className="max-w-[1400px] mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text">Developer</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Crafting immersive digital experiences with modern technologies
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                className="text-2xl text-gray-300 hover:text-red-500 transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                className="text-2xl text-gray-300 hover:text-violet-500 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5 }}
                className="text-2xl text-gray-300 hover:text-red-500 transition-colors"
              >
                <FaInstagram />
              </motion.a>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-10"
            >
              <a 
                href="#about"
                className="inline-block px-8 py-3 rounded-full text-lg font-medium bg-gradient-to-r from-red-600/30 to-violet-600/30 backdrop-blur-md border border-violet-500/30 hover:from-red-700/40 hover:to-violet-700/40 transition-all"
              >
                Explore My Work
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-red-500 to-violet-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                  <div className="bg-gray-800 w-full h-full rounded-full flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;