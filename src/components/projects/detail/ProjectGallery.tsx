import React from 'react';
import { motion } from 'framer-motion';

const screenshots = [
  {
    title: 'Homepage',
    description: 'Dynamic NFT marketplace homepage with trending collections',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80'
  },
  {
    title: 'NFT Details',
    description: 'Detailed NFT view with price history and attributes',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80'
  },
  {
    title: 'Trading Interface',
    description: 'Advanced trading interface with real-time updates',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and portfolio tracking',
    image: 'https://images.unsplash.com/photo-1642104704412-8934a9776c51?auto=format&fit=crop&q=80'
  }
];

export function ProjectGallery() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Gallery</h2>
          <p className="text-xl text-gray-600">
            Key features and interfaces of our NFT marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-gray-200">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}