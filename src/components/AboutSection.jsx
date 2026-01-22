import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white py-20 px-4">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, skills, and passion for creating amazing digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-200">Who am I?</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate developer with expertise in creating modern, responsive web applications. 
              With a strong foundation in both design and development, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My approach combines technical precision with creative problem-solving, allowing me to deliver 
              solutions that are both beautiful and highly functional. I'm constantly learning new technologies 
              to stay at the forefront of industry trends.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4 text-gray-200">Skills & Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'JavaScript/TypeScript', 'React/Vue', 'Responsive Design', 
                  'UI/UX Principles', 'Node.js', 'Git/Version Control'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 p-3 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-violet-500/20"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000}>
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-red-600/30 via-violet-600/30 to-red-800/30 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-800/80 backdrop-blur-lg overflow-hidden flex items-center justify-center">
                    <div className="text-8xl">👋</div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl bg-gradient-to-br from-violet-600 to-red-600 p-1">
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center text-lg font-bold">
                    Dev
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-xl bg-gradient-to-br from-red-600 to-violet-700 p-1">
                  <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center">
                    <div className="text-4xl">💡</div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact"
            className="px-8 py-4 rounded-full text-lg font-medium bg-gradient-to-r from-red-600/30 to-violet-600/30 backdrop-blur-md border border-violet-500/30 hover:from-red-700/40 hover:to-violet-700/40 transition-all inline-flex items-center space-x-2"
          >
            <span>Get In Touch</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;