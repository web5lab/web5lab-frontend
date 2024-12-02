import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const projects = [
  {
    title: 'DeFi Trading Protocol',
    description: 'Advanced decentralized exchange with automated market making and yield farming capabilities.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
    tags: ['DeFi', 'Smart Contracts', 'Web3'],
    date: 'Dec 2023',
    team: 6,
  },
  {
    title: 'NFT Marketplace',
    description: 'Secure and scalable NFT trading platform with advanced minting capabilities.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80',
    tags: ['NFT', 'Marketplace', 'Ethereum'],
    date: 'Nov 2023',
    team: 4,
  },
  {
    title: 'Cross-Chain Bridge',
    description: 'Innovative cross-chain bridge solution for seamless asset transfer between blockchains.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80',
    tags: ['Cross-Chain', 'Bridge', 'DeFi'],
    date: 'Oct 2023',
    team: 5,
  },
  {
    title: 'Yield Aggregator',
    description: 'Smart contract system for optimizing yield farming across multiple protocols.',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80',
    tags: ['Yield', 'DeFi', 'Optimization'],
    date: 'Sep 2023',
    team: 3,
  },
  {
    title: 'DAO Governance',
    description: 'Decentralized governance platform with proposal and voting mechanisms.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80',
    tags: ['DAO', 'Governance', 'Web3'],
    date: 'Aug 2023',
    team: 4,
  },
  {
    title: 'Layer 2 Solution',
    description: 'Scalable Layer 2 infrastructure for high-throughput blockchain applications.',
    image: 'https://images.unsplash.com/photo-1642104704412-8934a9776c51?auto=format&fit=crop&q=80',
    tags: ['Layer2', 'Scaling', 'Infrastructure'],
    date: 'Jul 2023',
    team: 7,
  },
];

export function ProjectGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-blue-600 transition-colors">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.date}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {project.team} Team Members
                  </div>
                </div>
                <div className="flex gap-4 pt-4 border-t border-gray-100">
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <Github className="h-5 w-5 mr-1" /> View Code
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <ExternalLink className="h-5 w-5 mr-1" /> Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}