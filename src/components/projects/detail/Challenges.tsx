import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Lightbulb } from 'lucide-react';

const challenges = [
  {
    title: 'High Gas Fees',
    description: 'Traditional NFT minting and trading processes resulted in prohibitively high gas fees during peak network congestion.',
    solution: 'Implemented Layer 2 scaling solution and batch processing for transactions.'
  },
  {
    title: 'Price Manipulation',
    description: 'Market vulnerable to wash trading and artificial price manipulation through coordinated buying.',
    solution: 'Developed AI-powered price monitoring and fraud detection systems.'
  },
  {
    title: 'Metadata Storage',
    description: 'Centralized storage of NFT metadata posed risks of data loss and availability issues.',
    solution: 'Utilized decentralized IPFS storage with redundancy and pinning services.'
  },
  {
    title: 'Market Liquidity',
    description: 'Initial lack of market depth and liquidity made price discovery difficult.',
    solution: 'Introduced AI market makers and liquidity incentive programs.'
  },
];

export function Challenges() {
  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Challenges & Solutions</h2>
          <p className="text-xl text-gray-600">
            Key challenges we faced and how we overcame them
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <AlertTriangle className="h-8 w-8 text-red-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {challenge.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start pt-6 border-t border-gray-100">
                  <div className="flex-shrink-0">
                    <Lightbulb className="h-8 w-8 text-green-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      Solution
                    </h4>
                    <p className="text-gray-600">
                      {challenge.solution}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}