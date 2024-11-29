import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const API_ENDPOINT = "/pages/api/message"; // Replace with your actual API endpoint

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "", isUser: false }]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      const userMessage = { text: inputText, isUser: true };
      setMessages((prev) => [...prev, userMessage]);
      setInputText("");
      setIsTyping(true);

      try {
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputText }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response from AI");
        }

        const data = await response.json();
        const aiMessage = { text: data.message, isUser: false };
        setMessages((prev) => [...prev, aiMessage]);
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            text: "Sorry, I'm having trouble responding right now. Please try again later.",
            isUser: false,
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    }
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        className="fixed bottom-5 right-5 bg-gradient-to-r from-indigo-600 to-teal-600 text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition-transform duration-300 ease-in-out"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChatbot}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-5 w-80 bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            {/* Chatbot Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white p-4">
              <h3 className="text-lg font-semibold">AI Assistant</h3>
            </div>

            {/* Messages Section */}
            <div className="h-80 overflow-y-auto p-4 bg-gray-50 border-t border-b border-gray-200">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    message.isUser ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block p-3 rounded-lg max-w-full ${
                      message.isUser
                        ? "bg-gradient-to-r from-indigo-600 to-teal-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="text-left">
                  <span className="inline-block p-2 rounded-lg bg-gray-300 text-gray-600">
                    AI is typing...
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <form
              onSubmit={handleSubmit}
              className="p-4 bg-white flex border-t border-gray-200"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow p-3 border border-gray-300 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-600 to-teal-600 text-white p-3 rounded-r-md hover:bg-indigo-700 transition-colors duration-200"
              >
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
