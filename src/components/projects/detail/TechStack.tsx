import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Shield, Cpu, Zap, Cloud } from 'lucide-react';

const technologies = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', description: 'UI Framework' },
      { name: 'TypeScript', description: 'Type Safety' },
      { name: 'TailwindCSS', description: 'Styling' },
      { name: 'Framer Motion', description: 'Animations' },
    ],
    icon: Code2,
  },
  {
    category: 'Smart Contracts',
    items: [
      { name: 'Solidity', description: 'Contract Language' },
      { name: 'Hardhat', description: 'Development Framework' },
      { name: 'OpenZeppelin', description: 'Contract Standards' },
      { name: 'Ethers.js', description: 'Blockchain Interaction' },
    ],
    icon: Shield,
  },
  {
    category: 'AI/ML',
    items: [
      { name: 'TensorFlow', description: 'ML Framework' },
      { name: 'Python', description: 'AI Backend' },
      { name: 'Scikit-learn', description: 'Price Prediction' },
      { name: 'OpenAI API', description: 'NFT Generation' },
    ],
    icon: Cpu,
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', description: 'Runtime' },
      { name: 'Express', description: 'API Framework' },
      { name: 'MongoDB', description: 'Database' },
      { name: 'Redis', description: 'Caching' },
    ],
    icon: Database,
  },
  {
    category: 'Infrastructure',
    items: [
      { name: 'AWS', description: 'Cloud Platform' },
      { name: 'Docker', description: 'Containerization' },
      { name: 'Kubernetes', description: 'Orchestration' },
      { name: 'CloudFlare', description: 'CDN' },
    ],
    icon: Cloud,
  },
  {
    category: 'Performance',
    items: [
      { name: 'IPFS', description: 'Decentralized Storage' },
      { name: 'The Graph', description: 'Indexing' },
      { name: 'WebSocket', description: 'Real-time Updates' },
      { name: 'Service Workers', description: 'Offline Support' },
    ],
    icon: Zap,
  },
];

export function TechStack() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-xl text-gray-600">
            Cutting-edge technologies powering our NFT marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative p-8 border-2 border-gray-100 rounded-lg hover:border-blue-500 transition-colors">
                <tech.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.category}</h3>
                <div className="space-y-3">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}