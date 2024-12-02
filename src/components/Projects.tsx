import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'DeFi Trading Protocol',
    description: 'AI-powered decentralized exchange with predictive market making and advanced yield optimization.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
    tags: ['DeFi', 'Smart Contracts', 'Web3'],
    path: '/projects/defi-protocol'
  },
  {
    title: 'NFT Marketplace',
    description: 'AI-driven NFT trading platform with dynamic pricing and fraud detection systems.',
    image: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80',
    tags: ['NFT', 'Marketplace', 'Ethereum'],
    path: '/projects/nft-marketplace'
  },
  {
    title: 'Cross-Chain Bridge',
    description: 'Secure and efficient cross-chain bridge for seamless asset transfer between blockchains.',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80',
    tags: ['Cross-Chain', 'Bridge', 'Security'],
    path: '/projects/cross-chain-bridge'
  },
  {
    title: 'Yield Aggregator',
    description: 'Smart yield farming protocol with AI-optimized strategies and risk assessment.',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80',
    tags: ['DeFi', 'Yield', 'AI'],
    path: '/projects/yield-aggregator'
  },
  {
    title: 'DAO Governance',
    description: 'Advanced DAO platform with AI-assisted proposal analysis and voting optimization.',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80',
    tags: ['DAO', 'Governance', 'AI'],
    path: '/projects/dao-governance'
  },
  {
    title: 'Layer 2 Solution',
    description: 'Scalable Layer 2 protocol with AI-powered optimization and security features.',
    image: 'https://images.unsplash.com/photo-1642104704412-8934a9776c51?auto=format&fit=crop&q=80',
    tags: ['Layer2', 'Scaling', 'ZK-Rollups'],
    path: '/projects/layer2-solution'
  }
];

export function Projects() {
  return (
    <section id="projects" className="bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">AI-Powered Blockchain Solutions</h2>
          <p className="mt-4 text-gray-600">Cutting-edge projects combining AI and blockchain technology</p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 pointer-events-none"></div>
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-64 transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent opacity-90">
                <div className="absolute bottom-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 text-sm bg-blue-600/90 text-white rounded-full backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link 
                      to={project.path}
                      className="flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" /> View Details
                    </Link>
                    <button className="flex items-center text-white hover:text-blue-400 transition-colors">
                      <Github className="h-5 w-5 mr-1" /> View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}