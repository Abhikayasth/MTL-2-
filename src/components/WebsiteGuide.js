import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, X } from 'lucide-react'

const API_ENDPOINT = '/api/guide' // Replace with your actual API endpoint

export default function WebsiteGuide() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [guideSteps, setGuideSteps] = useState([])

  useEffect(() => {
    const fetchGuideSteps = async () => {
      try {
        const response = await fetch(API_ENDPOINT)
        if (!response.ok) {
          throw new Error('Failed to fetch guide steps')
        }
        const data = await response.json()
        setGuideSteps(data.steps)
      } catch (error) {
        console.error('Error fetching guide steps:', error)
        setGuideSteps(['Welcome to our website!', 'Explore our services', 'Check out our portfolio', 'Contact us for more information'])
      }
    }

    fetchGuideSteps()
  }, [])

  const toggleGuide = () => setIsOpen(!isOpen)

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, guideSteps.length - 1))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))

  return (
    <>
      {/* Help button with hover and tap effects */}
      <motion.button
        className="fixed bottom-5 left-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-full shadow-lg z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleGuide}
      >
        {isOpen ? <X size={24} /> : <HelpCircle size={24} />}
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 left-5 w-80 sm:w-96 bg-white rounded-lg shadow-2xl overflow-hidden z-50"
          >
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-t-lg">
              <h3 className="text-lg font-semibold">Website Guide</h3>
            </div>
            <div className="p-4">
              <p className="mb-4 text-gray-800">{guideSteps[currentStep]}</p>
              
              {/* Progress Indicator */}
              <div className="mb-4">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    style={{ width: `${((currentStep + 1) / guideSteps.length) * 100}%` }}
                  />
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {currentStep + 1} of {guideSteps.length}
                </div>
              </div>

              {/* Step navigation buttons */}
              <div className="flex justify-between">
                <motion.button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors duration-300"
                >
                  Previous
                </motion.button>
                <motion.button
                  onClick={nextStep}
                  disabled={currentStep === guideSteps.length - 1}
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 hover:bg-blue-600 transition-colors duration-300"
                >
                  Next
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
