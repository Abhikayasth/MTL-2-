import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

export default function EnhancedHero() {
  const controls = useAnimation();
  const ref = useRef(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particle positions
    const particleArray = Array.from({ length: 100 }, (_, index) => ({
      id: index,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2, // Varying sizes for particles
      opacity: Math.random() * 0.7 + 0.3, // Varying opacities
    }));
    setParticles(particleArray);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'hello@example.com', href: 'mailto:hello@example.com' },
    { icon: Linkedin, text: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Github, text: 'GitHub', href: 'https://github.com' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-900 via-gray-900 to-black overflow-hidden">
       {/* Separation Line */}
       <div className="fixed top-[80px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-70 z-40"></div>

{/* Polygon Design */}
<svg
  className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>
  <polygon points="0,0 0,100 100,0" className="fill-purple-600" />
  <polygon points="100,100 100,0 0,100" className="fill-indigo-800" />
</svg>
      {/* Decorative Radial Glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-blue-500 rounded-full blur-2xl opacity-10"></div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              top: particle.y,
              left: particle.x,
              opacity: particle.opacity,
            }}
            animate={{
              y: [0, Math.random() * 30, 0],
              x: [0, Math.random() * 30, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
        ))}
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-20 text-center max-w-5xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6"
          variants={itemVariants}
        >
          Crafting{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
            Digital Wonders
          </span>
        </motion.h1>
        <motion.p
          className="text-base md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          We bring your ideas to life with a blend of innovation, design, and technology.
        </motion.p>

        {/* Contact Information */}
        <motion.div className="flex justify-center gap-4 flex-wrap mb-8" variants={itemVariants}>
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition text-white"
            >
              <info.icon className="w-5 h-5" />
              {info.text}
            </a>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div className="space-x-4" variants={itemVariants}>
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:from-purple-600 hover:to-pink-600"
          >
            Explore Work
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            Get Started
          </a>
        </motion.div>
      </motion.div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white rounded-full p-1"
        >
          <div className="w-1 h-3 bg-white mx-auto rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
