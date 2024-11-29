'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Madhav Tech Labs offer?',
    answer: 'Madhav Tech Labs offers a wide range of digital services including web development, mobile app creation, UI/UX design, custom software development, cybersecurity solutions, and data analytics. We specialize in creating innovative, tailored solutions for businesses of all sizes.',
  },
  {
    question: 'How does Madhav Tech Labs ensure project quality?',
    answer: 'We maintain high quality standards through rigorous testing processes, adherence to best coding practices, and continuous integration and deployment methodologies. Our team of experienced professionals ensures that each project meets or exceeds industry standards.',
  },
  {
    question: 'Can Madhav Tech Labs handle large-scale enterprise projects?',
    answer: 'We have extensive experience working with enterprise-level clients and handling complex, large-scale projects. Our team is equipped to manage projects of any size, ensuring scalability, security, and performance.',
  },
  {
    question: 'What technologies does Madhav Tech Labs specialize in?',
    answer: 'We specialize in a wide array of technologies including but not limited to React, Node.js, Python, Java, .NET, AWS, Azure, blockchain, AI/ML, and more. We stay up-to-date with the latest tech trends to provide cutting-edge solutions.',
  },
  {
    question: 'How does Madhav Tech Labs approach project timelines and budgets?',
    answer: 'We believe in transparent communication and realistic planning. We work closely with our clients to establish clear timelines and budgets at the outset of each project. Our agile methodology allows for flexibility while ensuring we meet deadlines and stay within budget constraints.',
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <motion.button
                className="w-full text-left p-4 bg-gray-800 rounded-lg flex justify-between items-center text-white hover:bg-gray-700 transition duration-300"
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: '#4B5563' }}
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                {activeIndex === index ? <ChevronUp className="text-white" /> : <ChevronDown className="text-white" />}
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-700 p-4 rounded-b-lg"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
