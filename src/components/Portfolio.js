'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Image1 from '../images/webd.jpg';
import Image2 from '../images/mobile-responsive.jpeg';
import Image3 from '../images/ui-ux.jpeg';
import Image4 from '../images/social-media-analysis.jpeg';
import Image5 from '../images/custom-software.jpeg';

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'Web Development', description: 'A robust platform to sell products online.', image: Image1 },
  { id: 2, title: 'Fitness Tracking App', category: 'Mobile Responsive App', description: 'Track your fitness goals on the go.', image: Image2 },
  { id: 3, title: 'Financial Dashboard', category: 'UI/UX Design', description: 'Visualize financial data effectively.', image: Image3 },
  { id: 4, title: 'Social Media Analytics', category: 'Data Analytics', description: 'Analyze your social media campaigns.', image: Image4 },
  { id: 5, title: 'IoT Management System', category: 'Custom Software', description: 'Manage IoT devices seamlessly.', image: Image5 },
];

const categories = ['All', 'Web Development', 'Mobile Responsive App', 'UI/UX Design', 'Custom Software'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      {/* Section Separator */}
      <motion.div
        className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: 'left center' }}
      ></motion.div>

      <section id="portfolio" ref={ref} className="py-16 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.h2
            className="text-2xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h2>
          <p className="text-center text-sm text-gray-400 max-w-md mx-auto mb-8">
            Showcasing our expertise through diverse projects.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full ${
                  activeCategory === category
                    ? 'bg-purple-500 text-white shadow-md'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } transition-all duration-300`}
                onClick={() => setActiveCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Project Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9 bg-gray-800"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  layout
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.h3
                      className="text-lg font-semibold mb-2 text-white"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-gray-300 mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.description}
                    </motion.p>
                    <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all">
                      Show Details
                    </button>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Show More Projects Button */}
          <div className="flex justify-center mt-12">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Show More Projects
            </motion.button>
          </div>
        </div>
      </section>
    </>
  );
}
