// src/components/LoadingScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import audioFile from '../images/Loading.wav';

export default function LoadingScreen() {
  const [audioAllowed, setAudioAllowed] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [loading, setLoading] = useState(false);
  const audioRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setAudioAllowed(false);
      setLoadingComplete(false);
      setShowMainContent(false);
    };
  }, []);

  const handleUserInteraction = () => {
    if (!audioAllowed) {
      // Allow audio playback
      setAudioAllowed(true);
      console.log(audioFile)
      audioRef.current = new Audio(audioFile);
      // Play audio on button click
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.error('Error playing loading sound:', error);
        });
      }
      else{
        console.log("Audio not found")
      }

      // Start loading process
      startLoadingProcess();
    }
  };

  const startLoadingProcess = () => {
    setLoading(true);
    setTimeout(() => {
      setLoadingComplete(true);
      setShowMainContent(true);
      // if (audioRef.current) {
      //   audioRef.current.pause();
      // }
      setLoading(false);
      navigate('/main');

    }, 2500);
  };

  return (
    <AnimatePresence>
      {!showMainContent && (
        <motion.div
          className="fixed inset-0 bg-gradient-to-r from-gray-900 to-black flex flex-col items-center justify-center z-50 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-4xl md:text-6xl font-extrabold text-center leading-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600">
              Madhav Tech Labs
            </span>
          </motion.div>

          {!audioAllowed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <button
                onClick={handleUserInteraction}
                className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Enter Madhav Tech Labs
              </button>
              <audio ref={audioRef} src={audioFile}></audio>
            </motion.div>
          )}

          {loading && (
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Loader2 className="w-12 h-12 text-teal-500 animate-spin mb-4" />
              <div className="text-lg text-gray-300 mb-4">
                Initializing Madhav Tech Labs
              </div>
              <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-400 to-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.5, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          )}

          <motion.div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            © 2024 Madhav Tech Labs. All rights reserved.
          </motion.div>
        </motion.div>
      )}

      {showMainContent && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Madhav Tech Labs</h1>
            <p className="text-xl md:text-2xl text-gray-300">Innovating the future, one line of code at a time.</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
