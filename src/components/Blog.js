import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from '../images/blog.webp'; // Replace with actual image path

const blogPosts = [
  {
    title: 'The Future of Web Development: Trends to Watch',
    excerpt: 'Explore the cutting-edge technologies and methodologies shaping the future of web development.',
    image: Image, // Replace with actual image URL
    date: 'May 15, 2023',
  },
  {
    title: 'Designing for Accessibility: Best Practices',
    excerpt: 'Learn how to create inclusive digital experiences that cater to users of all abilities.',
    image: Image, // Replace with actual image URL
    date: 'June 2, 2023',
  },
  {
    title: 'Optimizing Mobile App Performance',
    excerpt: 'Discover techniques to enhance the speed and efficiency of your mobile applications.',
    image: Image, // Replace with actual image URL
    date: 'June 20, 2023',
  },
  // Add more posts if needed
];

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="blog" ref={ref} className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Latest Insights
        </motion.h2>

        {/* Blog Posts Grid with Scrollbar */}
        <div className="overflow-x-auto pb-8">
          <div className="flex gap-8">
            {blogPosts.slice(0, showMore ? blogPosts.length : 3).map((post, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group flex-none w-full sm:w-[48%] lg:w-[30%]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Blog Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Use button instead of link for accessibility */}
                    <button
                      onClick={() => console.log("Read more clicked")}
                      className="text-white text-lg font-semibold hover:underline"
                    >
                      Read More
                    </button>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    {/* Use button for consistency */}
                    <button
                      onClick={() => console.log("Read more clicked")}
                      className="text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Show More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-white bg-purple-600 hover:bg-purple-500 py-2 px-6 rounded-lg transition-colors duration-300"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>

      {/* Bottom Separator Line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-purple-500"></div>
    </section>
  );
};

export default Blog;
