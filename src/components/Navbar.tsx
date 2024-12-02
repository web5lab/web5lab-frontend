import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-blue-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">
              Web5Lab
            </span>
          </motion.div>
          
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-8"
            >
              <a href="#services" className="text-blue-100 hover:text-blue-400 transition-colors">Services</a>
              <a href="#projects" className="text-blue-100 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="text-blue-100 hover:text-blue-400 transition-colors">Contact</a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition-all"
              >
                Get Started
              </motion.button>
            </motion.div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-blue-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-blue-900/95 backdrop-blur-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 text-blue-100 hover:text-blue-400">Services</a>
            <a href="#projects" className="block px-3 py-2 text-blue-100 hover:text-blue-400">Projects</a>
            <a href="#contact" className="block px-3 py-2 text-blue-100 hover:text-blue-400">Contact</a>
            <button className="w-full mt-2 px-3 py-2 border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}