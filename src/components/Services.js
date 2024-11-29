'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Globe, Smartphone, Palette, Zap, ArrowRight, Code, Headphones } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Web Development', description: 'Crafting responsive, high-performance websites that captivate and convert.', color: 'from-blue-500 to-cyan-400' },
  { icon: Smartphone, title: 'Mobile Apps', description: 'Building intuitive, feature-rich mobile applications for iOS and Android.', color: 'from-green-500 to-emerald-400' },
  { icon: Palette, title: 'UI/UX Design', description: 'Creating visually stunning, user-centric designs that elevate brand experiences.', color: 'from-purple-500 to-pink-400' },
  { icon: Zap, title: 'Custom Software', description: 'Developing tailored software solutions to streamline your business processes.', color: 'from-yellow-500 to-orange-400' },
  { icon: Code, title: 'API Integration', description: 'Seamlessly connecting your systems with third-party services for enhanced functionality.', color: 'from-red-500 to-pink-400' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance to ensure your digital solutions run smoothly.', color: 'from-indigo-500 to-blue-400' },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text-shadow">
            Elevate Your Digital Presence
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
            Empowering businesses with innovative solutions to stand out and succeed.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div ref={ref} className="grid gap-6 sm:gap-8 grid-cols-2 sm:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group rounded-lg overflow-hidden bg-gray-800 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 shadow-lg p-4 sm:p-5 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br ${service.color} shadow-md mb-4 group-hover:ring-4 group-hover:ring-offset-2 group-hover:ring-cyan-500`}
              >
                <service.icon className="text-white w-6 h-6 sm:w-8 sm:h-8 group-hover:animate-pulse" />
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-center mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 text-center group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/70 text-center text-gray-200 px-4 py-2 rounded-lg"
                  >
                    <button className="px-4 py-2 text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
                      Learn More <ArrowRight className="inline-block ml-2 h-4 w-4" />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="relative px-6 py-2 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-pink-600 transition-all duration-300 group">
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-300"></span>
            <span className="relative">Explore All Services</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
