'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Lightbulb, Code, Rocket, Repeat, ChevronRight, ChevronDown } from 'lucide-react';

const steps = [
  { icon: Lightbulb, title: 'Ideate', description: 'We brainstorm and conceptualize your vision, exploring innovative ideas to address your unique challenges.' },
  { icon: Code, title: 'Create', description: 'Our experts bring your ideas to life with cutting-edge technology, ensuring robust and scalable solutions.' },
  { icon: Rocket, title: 'Launch', description: 'We deploy your project with precision, ensuring a smooth takeoff and seamless integration into your existing systems.' },
  { icon: Repeat, title: 'Iterate', description: 'We continuously improve and update your digital solution, adapting to new technologies and user feedback.' },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(null);

  return (
    <>
      {/* Gradient Separator */}
      <motion.div
        className="w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mb-8"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8 }}
        style={{ transformOrigin: 'left center' }}
      ></motion.div>

      {/* Process Section */}
      <section
        id="process"
        ref={ref}
        className="py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Our Process
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A step-by-step approach to bring your vision to reality, combining innovation with execution.
            </p>
          </motion.div>

          {/* Mobile View */}
          <div className="md:hidden overflow-x-auto pb-8">
            <div className="flex space-x-6 min-w-max">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center w-64"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center mb-4 group hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 text-center">{step.description}</p>
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-6 h-6 text-purple-500 mt-4" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-purple-500 transform -translate-x-1/2"></div>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-24 group"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
              >
                {/* Step Content */}
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 order-last'
                  }`}
                >
                  <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {step.description}
                  </p>
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 bg-transparent border-2 border-purple-500 text-purple-500 px-6 py-2 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                      >
                        Learn More <ChevronRight className="ml-2 h-4 w-4" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>

                {/* Icon */}
                <motion.div
                  className="w-20 h-20 rounded-full bg-purple-500 flex items-center justify-center z-10 group-hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <step.icon className="w-10 h-10 text-white group-hover:scale-125 transition-transform duration-300" />
                </motion.div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Start Your Project <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
