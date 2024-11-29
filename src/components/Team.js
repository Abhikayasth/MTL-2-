'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from '../images/user.jpeg';

const team = [
  { name: 'John Doe', role: 'Founder & CEO', image: Image },
  { name: 'Jane Smith', role: 'Lead Developer', image: Image },
  { name: 'Mike Johnson', role: 'UI/UX Designer', image: Image },
  { name: 'Sarah Brown', role: 'Project Manager', image: Image },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="team"
      ref={ref}
      className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Separator Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-purple-500"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Meet Our Team
        </motion.h2>

        {/* Mobile First Horizontal Scroll */}
        <div className="overflow-x-scroll no-scrollbar flex space-x-8 snap-x snap-mandatory md:grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center snap-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image and Hover Effects */}
              <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full group-hover:scale-105 transition-all duration-300 transform">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:rotate-6 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500 to-transparent bg-opacity-50 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center">
                    <p className="font-bold">{member.name}</p>
                    <p className="text-sm">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Name and Role */}
              <motion.h3
                className="text-xl font-semibold text-white mb-1 group-hover:text-purple-300 transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {member.name}
              </motion.h3>
              <motion.p
                className="text-gray-400 group-hover:text-gray-200 transition-all duration-300 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Separator Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-purple-500"></div>
    </section>
  );
}
