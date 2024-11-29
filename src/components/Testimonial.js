import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from '../images/user.jpeg';

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO, TechCorp',
    image: Image,
    quote: 'Madhav Tech Labs transformed our digital presence. Their innovative solutions have significantly boosted our online engagement and conversions.',
  },
  {
    name: 'Jane Smith',
    role: 'Marketing Director, InnovateCo',
    image: Image,
    quote: 'The team at Madhav Tech Labs is exceptional. They delivered a cutting-edge mobile app that exceeded our expectations and delighted our users.',
  },
  {
    name: 'Mike Johnson',
    role: 'Founder, StartupX',
    image: Image,
    quote: 'Working with Madhav Tech Labs was a game-changer for our startup. Their expertise in web development and UI/UX design gave us a competitive edge.',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          What Our Clients Say
        </motion.h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-gray-800 p-8 rounded-xl shadow-lg group overflow-hidden"
              style={{
                clipPath: 'polygon(0% 0%, 100% 8%, 100% 100%, 0% 100%)',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Floating Glow Animation */}
              <motion.div
                className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-20 group-hover:opacity-40"
                animate={{ scale: [5, 2.2, 5], rotate: [0, 20, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              ></motion.div>

              {/* Testimonial Header */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={70}
                  height={70}
                  className="rounded-full mr-4 border-2 border-purple-500"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-purple-400 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-gray-300 italic leading-relaxed">{`"${testimonial.quote}"`}</p>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
