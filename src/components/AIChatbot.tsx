import React, { useState } from 'react';
import { Bot, Send, X, Loader2, Code, Zap } from 'lucide-react';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hi! I'm the Web5Lab Development Assistant. I can help estimate development timelines, suggest optimal tech stacks, and provide technical guidance. How can I help accelerate your blockchain project?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isBot: false }]);
    setIsTyping(true);

    // Simulate response with development-focused message
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I'll connect you with our development team to discuss your project requirements in detail. They can provide specific insights about development timelines, technical architecture, and how our AI-powered tools can accelerate your development process.",
        isBot: true
      }]);
      setIsTyping(false);
    }, 1000);

    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 z-50 group"
      >
        <div className="relative">
          <Code className="h-6 w-6 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        </div>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl z-50 flex flex-col animate-fadeIn">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <Code className="h-6 w-6 mr-2" />
              <div>
                <span className="font-semibold block">Development Assistant</span>
                <span className="text-xs text-blue-100 flex items-center">
                  <Zap className="h-3 w-3 mr-1" />
                  AI-Powered Development Tools
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-blue-200">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 shadow-sm'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-800 p-3 rounded-lg flex items-center shadow-sm">
                  <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  Assistant is typing...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about development timelines and tech stack..."
                className="flex-1 p-2 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
                disabled={isTyping}
              >
                {isTyping ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </button>
            </div>
            <div className="mt-2 text-xs text-gray-500 flex items-center">
              <Zap className="h-3 w-3 mr-1" />
              AI-powered development acceleration tools
            </div>
          </form>
        </div>
      )}
    </>
  );
}