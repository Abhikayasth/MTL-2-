'use client';

import { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const milestones = [
  { year: 2015, title: 'Founded', description: 'Madhav Tech Labs was established with a vision to transform digital landscapes.' },
  { year: 2017, title: 'First Major Project', description: 'Successfully delivered a groundbreaking e-commerce platform for a Fortune 500 company.' },
  { year: 2019, title: 'Expansion', description: 'Opened new offices in Silicon Valley and London, expanding our global reach.' },
  { year: 2020, title: 'AI Integration', description: 'Pioneered the integration of AI in web development, setting new industry standards.' },
  { year: 2022, title: 'Award-Winning Solutions', description: 'Recognized with multiple industry awards for our innovative digital solutions.' },
  { year: 2023, title: 'Sustainable Tech Initiative', description: 'Launched our green tech program, focusing on environmentally friendly digital solutions.' },
];

const months = [
  { month: 'June', year: 2024, title: 'New Beginning', description: 'Kicking off our next phase with bold new strategies and vision.' },
  { month: 'July', year: 2024, title: 'Growth Acceleration', description: 'Scaling our operations and expanding into new regions.' },
  // Add more monthly milestones as needed
];

export default function Timeline() {
  const [timeFilter, setTimeFilter] = useState('monthly');
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const handleFilterChange = (filter) => {
    setTimeFilter(filter);
  };

  const getFilteredMilestones = () => {
    if (timeFilter === 'monthly') {
      return months;
    }
    if (timeFilter === 'weekly') {
      return months.slice(0, 2); // Example for weekly milestones
    }
    if (timeFilter === 'daily') {
      return months.slice(0, 1); // Example for daily milestones
    }
    return milestones; // Default to yearly view
  };

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Gradient Separator */}
      <motion.div
        className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: 'left center' }}
      ></motion.div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">Our Journey</h2>

        {/* Section Separator */}
        <div className="my-8 border-t-2 border-gradient-to-r from-purple-500 to-pink-500"></div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-8 space-x-4">
          {['monthly', 'weekly', 'daily', 'yearly'].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className="px-4 py-2 rounded-full text-lg font-medium bg-gradient-to-r from-purple-500 to-pink-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div ref={targetRef} className="relative">
          <motion.div
            className="absolute left-9 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500"
            style={{ scaleY: scrollYProgress }}
          />

          {getFilteredMilestones().map((milestone, index) => (
            <motion.div
              key={index}
              className="mb-12 flex items-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-18 h-18 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
                <span className="text-white font-bold text-lg">{milestone.year || `${milestone.month} ${milestone.year}`}</span>
              </div>
              <div className="ml-8">
                <h3 className="text-2xl font-semibold mb-2 text-gray-100 hover:text-pink-500 transition-colors duration-300">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gradient Separator */}
      <motion.div
        className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mt-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: 'left center' }}
      ></motion.div>
    </section>
  );
}
