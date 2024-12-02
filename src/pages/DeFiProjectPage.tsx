import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectHeader } from '../components/projects/detail/ProjectHeader';
import { TechStack } from '../components/projects/detail/TechStack';
import { Challenges } from '../components/projects/detail/Challenges';
import { Solutions } from '../components/projects/detail/Solutions';
import { ProjectMetrics } from '../components/projects/detail/ProjectMetrics';
import { ProjectGallery } from '../components/projects/detail/ProjectGallery';
import { ProjectTeam } from '../components/projects/detail/ProjectTeam';

const defiTechnologies = [
  {
    category: 'Smart Contracts',
    items: [
      { name: 'Solidity', description: 'Core Protocol' },
      { name: 'Hardhat', description: 'Testing' },
      { name: 'OpenZeppelin', description: 'Standards' },
      { name: 'Chainlink', description: 'Oracles' },
    ],
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React', description: 'UI Framework' },
      { name: 'Web3.js', description: 'Blockchain Integration' },
      { name: 'TailwindCSS', description: 'Styling' },
      { name: 'MetaMask SDK', description: 'Wallet Connection' },
    ],
  },
  // Add more categories specific to DeFi
];

const defiChallenges = [
  {
    title: 'Impermanent Loss',
    description: 'Users experiencing losses due to price divergence in liquidity pools.',
    solution: 'Implemented AI-driven dynamic fee adjustment and IL protection mechanism.',
  },
  {
    title: 'MEV Protection',
    description: 'Protecting users from sandwich attacks and frontrunning.',
    solution: 'Developed private mempool and flashbots integration.',
  },
  // Add more DeFi-specific challenges
];

export function DeFiProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeader 
        title="AI-Enhanced DeFi Protocol"
        description="Next-generation decentralized exchange with AI-powered market making and advanced trading features"
        image="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
        tags={['DeFi', 'AMM', 'AI', 'Ethereum']}
        githubUrl="https://github.com/web5lab/defi-protocol"
        demoUrl="https://defi.web5lab.com"
      />
      <ProjectMetrics 
        metrics={[
          { label: 'TVL', value: '$100M+' },
          { label: 'Daily Volume', value: '$10M+' },
          { label: 'Users', value: '50K+' },
          { label: 'Pools', value: '200+' }
        ]}
      />
      <TechStack technologies={defiTechnologies} />
      <Challenges challenges={defiChallenges} />
      <Solutions />
      <ProjectGallery />
      <ProjectTeam />
      <Footer />
    </div>
  );
}