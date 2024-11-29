import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

// Temporary video and image imports
import Video from '../images/video.mp4';
import Image from '../images/webd.jpg';

const successStories = [
  {
    client: 'TechInnovate Corp',
    title: 'Revolutionizing E-commerce with AI',
    description:
      'We helped TechInnovate Corp implement an AI-driven recommendation engine, increasing their sales by 200%.',
    videoUrl: Video,
    poster: Image,
  },
  {
    client: 'GreenEnergy Solutions',
    title: 'Sustainable Web Design for a Greener Future',
    description:
      'Our eco-friendly web design reduced GreenEnergy Solutions\' digital carbon footprint by 70%.',
    videoUrl: Video,
    poster: Image,
  },
  {
    client: 'FinTech Pioneers',
    title: 'Secure and Scalable FinTech Platform',
    description:
      'We developed a blockchain-based platform for FinTech Pioneers, handling over 1 million transactions daily.',
    videoUrl: Video,
    poster: Image,
  },
];

const SuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const handleStoryChange = (index) => {
    setActiveStory(index);
    setIsPlaying(false); // Pause video when switching stories
    setIsMuted(true); // Reset to muted when switching stories
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.warn('User interaction required to play the video:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Load the video for the current story
      setIsPlaying(false); // Default to paused
      setIsMuted(true); // Default to muted
    }
  }, [activeStory]);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Client Success Stories
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Video Section */}
          <div className="lg:w-1/2 relative">
            <motion.div
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <video
                ref={videoRef}
                className="w-full h-64 md:h-80 object-cover"
                poster={successStories[activeStory].poster}
                muted={isMuted}
                onEnded={() => setIsPlaying(false)}
              >
                <source src={successStories[activeStory].videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4">
                <button
                  className="text-white p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? <Pause size={32} /> : <Play size={32} />}
                </button>
                <button
                  className="text-white p-4 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300"
                  onClick={toggleMute}
                >
                  {isMuted ? <VolumeX size={32} /> : <Volume2 size={32} />}
                </button>
              </div>
            </motion.div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-4">
              <button
                className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white shadow-lg"
                onClick={() =>
                  handleStoryChange(activeStory > 0 ? activeStory - 1 : successStories.length - 1)
                }
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="p-3 bg-purple-600 hover:bg-purple-700 rounded-full text-white shadow-lg"
                onClick={() =>
                  handleStoryChange((activeStory + 1) % successStories.length)
                }
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Story Details */}
          <div className="lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStory}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">
                  {successStories[activeStory].client}
                </h3>
                <h4 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {successStories[activeStory].title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {successStories[activeStory].description}
                </p>

                <button
                  className="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition"
                  onClick={() => handleStoryChange((activeStory + 1) % successStories.length)}
                >
                  Next Story
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="mt-6 flex justify-center space-x-2">
              {successStories.map((_, index) => (
                <button
                  key={index}
                  className={`w-4 h-4 rounded-full transition-transform transform ${
                    index === activeStory
                      ? 'bg-purple-500 scale-125'
                      : 'bg-gray-600 hover:bg-purple-400'
                  }`}
                  onClick={() => handleStoryChange(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
