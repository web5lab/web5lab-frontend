import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Cpu } from 'lucide-react';

const solutions = [
  {
    title: 'AI-Powered Price Discovery',
    description: 'Machine learning algorithms analyze market trends, rarity factors, and historical data to provide accurate price predictions and prevent manipulation.',
    features: [
      'Real-time price analysis',
      'Wash trading detection',
      'Market manipulation prevention',
      'Dynamic pricing recommendations'
    ],
    icon: Cpu
  },
  {
    title: 'Layer 2 Integration',
    description: 'Implemented Polygon and Optimism integration for reduced gas fees and faster transaction processing.',
    features: [
      'Near-instant transactions',
      '100x lower gas fees',
      'Cross-chain bridging',
      'Seamless wallet integration'
    ],
    icon: Zap
  },
  {
    title: 'Advanced Security',
    description: 'Multi-layered security approach with smart contract auditing and real-time monitoring.',
    features: [
      'Automated auditing',
      'Fraud detection',
      'Multi-sig wallets',
      'Insurance coverage'
    ],
    icon: Shield
  },
  {
    title: 'Optimized Performance',
    description: 'High-performance infrastructure with global CDN and optimized caching strategies.',
    features: [
      'Sub-second response times',
      'Global availability',
      'IPFS integration',
      'Real-time updates'
    ],
    icon: CheckCircle
  }
];

export function Solutions() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Solutions</h2>
          <p className="text-xl text-gray-600">
            Innovative approaches to solve complex challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative p-8 border-2 border-gray-100 rounded-lg hover:border-blue-500 transition-colors">
                <solution.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}