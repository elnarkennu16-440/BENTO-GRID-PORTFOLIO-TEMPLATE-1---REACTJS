import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const BentoProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'NCAMIS System',
      description: 'Complex School Management System with PHP & React.',
      colSpan: 'md:col-span-2',
      rowSpan: '',
      color: 'red',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600'
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      description: 'Full-featured online shopping experience.',
      colSpan: '',
      rowSpan: '',
      color: 'violet',
      icon: '🛒',
      image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=600'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      description: 'Secure financial management solution.',
      colSpan: '',
      rowSpan: 'md:row-span-2',
      color: 'neon-red',
      icon: '🏦',
      image: 'https://images.unsplash.com/photo-1563014959-7aaa83350992?auto=format&fit=crop&w=600'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Real-time data visualization platform.',
      colSpan: 'md:col-span-2',
      rowSpan: '',
      color: 'violet',
      icon: '📊',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600'
    },
    {
      id: 5,
      title: 'AR Navigation System',
      description: 'Augmented reality wayfinding solution.',
      colSpan: '',
      rowSpan: '',
      color: 'neon-red',
      icon: '🧭',
      image: 'https://images.unsplash.com/photo-1623482418878-0e9d3a5d3c39?auto=format&fit=crop&w=600'
    },
    {
      id: 6,
      title: 'AI Content Generator',
      description: 'Automated content creation with ML.',
      colSpan: '',
      rowSpan: '',
      color: 'red',
      icon: '🤖',
      image: 'https://images.unsplash.com/photo-1677442135722-5f11e06a4e6d?auto=format&fit=crop&w=600'
    },
    {
      id: 7,
      title: 'Health Monitoring App',
      description: 'Personal wellness tracking platform.',
      colSpan: '',
      rowSpan: '',
      color: 'violet',
      icon: '❤️',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600'
    },
    {
      id: 8,
      title: 'Coming Soon...',
      description: 'Currently building exciting things.',
      colSpan: 'md:col-span-2',
      rowSpan: '',
      color: 'neon-red',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'neon-red': 'from-red-500/30 to-red-700/30 border-red-500/50',
      'red': 'from-red-600/30 to-red-900/30 border-red-600/50',
      'violet': 'from-violet-600/30 to-purple-800/30 border-violet-600/50'
    };
    return colorMap[color] || colorMap['violet'];
  };

  return (
    <div id='projects' className='min-h-screen bg-gray-950 text-white py-16 md:py-24 px-4'>
      <div className='max-w-[1400px] mx-auto'>
        <div className='text-center mb-16'>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-4xl md:text-5xl font-bold mb-4'
          >
            Featured <span className='bg-gradient-to-r from-red-500 to-violet-500 text-transparent bg-clip-text'>Works</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-gray-400 max-w-2xl mx-auto px-4'
          >
            A showcase of my recent projects demonstrating expertise in modern web technologies and design principles.
          </motion.p>
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
          
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: project.id * 0.05 }}
              whileHover={{ y: -10 }}
              className={`${project.colSpan} ${project.rowSpan} rounded-3xl p-6 border border-violet-500/30 shadow-xl relative overflow-hidden group ${project.rowSpan ? 'min-h-[400px] md:min-h-[500px]' : 'min-h-[250px] md:min-h-[300px]'}`}
            >
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000}>
                <div className={`w-full h-full bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-xl border border-violet-500/20 rounded-3xl p-5 flex flex-col ${project.rowSpan ? 'h-[400px] md:h-[500px]' : 'h-[250px] md:h-[300px]'}`}>
                  
                  <div className="absolute top-0 right-0 w-full h-1/2 bg-gradient-to-r from-red-500/10 to-violet-500/10 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="flex justify-between items-start z-10">
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${project.color === 'neon-red' ? 'text-red-400' : 'text-white'}`}>{project.title}</h3>
                      <p className='text-gray-300 text-sm'>{project.description}</p>
                    </div>
                    <div className="text-2xl z-10">{project.icon}</div>
                  </div>
                  
                  <div className="mt-4 flex-grow overflow-hidden rounded-xl border border-violet-500/30 z-10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="mt-auto pt-3 flex justify-end z-10">
                    <button className={`px-4 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${getColorClasses(project.color)} backdrop-blur-md border border-violet-500/30 hover:from-red-600/30 hover:to-red-800/30 transition-all`}>
                      View Details
                    </button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BentoProjects;