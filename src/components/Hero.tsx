import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import { Scene } from './3d/Scene';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none overflow-hidden">
        <Scene />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow">
              Next-Gen
              <br />
              <span className="text-blue-400">Blockchain</span>
              <br />
              Innovation
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Pioneering the future of decentralized systems with cutting-edge blockchain solutions and DeFi development.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex items-center"
              >
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-blue-400 text-blue-100 font-medium rounded-lg hover:bg-blue-800/50 transition-colors flex items-center"
              >
                <Terminal className="mr-2 h-5 w-5" /> View Projects
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-0.5 bg-blue-500 rounded-lg blur opacity-30"></div>
            <div className="relative bg-black/40 backdrop-blur-xl border border-blue-500/30 rounded-lg p-8 shadow-lg">
              <div className="font-mono text-sm text-blue-100">
                <div className="mb-4">
                  <span className="text-blue-400">const</span> blockchain = {'{'}
                </div>
                <div className="pl-4">
                  technology: <span className="text-blue-400">"Web5Lab"</span>,
                  <br />
                  innovation: <span className="text-blue-400">"Unlimited"</span>,
                  <br />
                  future: <span className="text-blue-400">"Decentralized"</span>
                </div>
                <div>{'}'}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}