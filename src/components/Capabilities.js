import React from 'react';
import { CheckCircle } from 'lucide-react';

const capabilities = [
  'Custom Web Development',
  'SEO Optimization',
  'Responsive Design',
  'E-commerce Integration',
  'Digital Marketing Solutions',
  'Ongoing Maintenance & Support',
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
          Our Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              {/* Lucide React Icon */}
              <CheckCircle className="w-6 h-6 text-green-500" />
              {/* Capability Text */}
              <span className="text-lg text-gray-700">{capability}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
