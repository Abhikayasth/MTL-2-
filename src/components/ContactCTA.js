// src/components/ContactCTA.js
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from './ui/button'; // Ensure the correct path to the Button component
import HeroImage from '../images/Hero.jpg'; // Import the Hero image

export default function ContactCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-gradient-to-b from-purple-900 to-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Digital Presence?
        </motion.h2>
        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's discuss how Madhav Tech Labs can help you achieve your goals
          and stand out in the digital landscape.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-pulse"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${HeroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </section>
  );
}
