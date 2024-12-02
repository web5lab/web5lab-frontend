import React from 'react';
import { Zap, Clock, Shield, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: '70% Faster Development',
    description: 'Our AI-powered development tools automate repetitive tasks and generate optimized code templates.'
  },
  {
    icon: Shield,
    title: 'Automated Code Analysis',
    description: 'Continuous code quality checks and security vulnerability detection during development.'
  },
  {
    icon: Code2,
    title: 'Smart Contract Generation',
    description: 'AI-assisted code generation for common smart contract patterns and standards.'
  },
  {
    icon: Zap,
    title: 'Automated Testing',
    description: 'AI-powered test generation and continuous integration validation as you develop.'
  }
];

export function AIFeatures() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            AI-Powered Development
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-blue-200"
          >
            Build secure blockchain solutions faster with our AI-assisted development tools
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
              <Zap className="h-5 w-5 mr-2" />
              Explore Development Tools
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative p-8 rounded-lg border border-blue-500/30 bg-blue-900/50 backdrop-blur-xl">
                <feature.icon className="h-12 w-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}