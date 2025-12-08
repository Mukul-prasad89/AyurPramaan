import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2, Maximize2 } from 'lucide-react'

// Access API key from environment variables (secure approach)
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hello! 👋 I'm HerbalTrace Assistant, your 24/7 help desk. How can I assist you today with herbal medicine traceability, blockchain verification, or any other queries?",
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const systemPrompt = `You are HerbalTrace Assistant, a helpful AI assistant for the HerbalTrace platform - a blockchain-based herbal medicine traceability system. 

Your role is to help users with:
1. Understanding how to track herbal medicines from farm to final product
2. Explaining blockchain verification and QR code scanning
3. Guiding farmers on collection events and handover processes
4. Helping laboratories understand testing protocols
5. Assisting manufacturers with batch processing and compliance
6. Supporting regulators with audit and inspection features
7. General questions about herbal medicine quality and authenticity

Be friendly, concise, and helpful. If you don't know something specific about the platform, provide general guidance and suggest contacting support for detailed assistance.

Always respond in a conversational, professional manner. Keep responses brief but informative.`

  const sendMessageToGemini = async (userMessage) => {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: systemPrompt },
                { text: `User message: ${userMessage}` }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_HARASSMENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_HATE_SPEECH",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            },
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
              threshold: "BLOCK_MEDIUM_AND_ABOVE"
            }
          ]
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response from Gemini')
      }

      const data = await response.json()
      
      if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text
      } else {
        throw new Error('Invalid response format')
      }
    } catch (error) {
      console.error('Gemini API Error:', error)
      return "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or contact our support team at support@herbaltrace.com for immediate assistance."
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputValue.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    const botResponse = await sendMessageToGemini(inputValue.trim())

    const botMessage = {
      id: Date.now() + 1,
      type: 'bot',
      text: botResponse,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botMessage])
    setIsLoading(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow"
          >
            <MessageCircle className="h-6 w-6" />
            {/* Pulse animation */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white">
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '500px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ maxHeight: isMinimized ? 'auto' : '80vh' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm">HerbalTrace Assistant</h3>
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-white/80 text-xs">24/7 Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-end space-x-2 max-w-[85%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        {/* Avatar */}
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.type === 'user' 
                            ? 'bg-primary-600 text-white' 
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="h-4 w-4" />
                          ) : (
                            <Bot className="h-4 w-4" />
                          )}
                        </div>
                        
                        {/* Message Bubble */}
                        <div className={`px-4 py-2.5 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-primary-600 text-white rounded-br-md'
                            : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                          <p className={`text-xs mt-1 ${
                            message.type === 'user' ? 'text-white/70' : 'text-gray-400'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Loading indicator */}
                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-end space-x-2">
                        <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                          <div className="flex items-center space-x-1">
                            <Loader2 className="h-4 w-4 text-primary-600 animate-spin" />
                            <span className="text-sm text-gray-500">Typing...</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      disabled={isLoading}
                      className="flex-1 px-4 py-2.5 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors disabled:opacity-50"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="p-2.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    Powered by Gemini AI • 24/7 Support
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
