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

const bridgeTechnologies = [
  {
    category: 'Bridge Protocol',
    items: [
      { name: 'Solidity', description: 'Smart Contracts' },
      { name: 'Cosmos SDK', description: 'Cross-chain' },
      { name: 'Tendermint', description: 'Consensus' },
      { name: 'IBC Protocol', description: 'Messaging' },
    ],
  },
  {
    category: 'Security',
    items: [
      { name: 'Multi-sig', description: 'Validation' },
      { name: 'ZK-Proofs', description: 'Privacy' },
      { name: 'Threshold Crypto', description: 'Security' },
      { name: 'MPC', description: 'Key Management' },
    ],
  },
  // Add more bridge-specific categories
];

const bridgeChallenges = [
  {
    title: 'Cross-chain Security',
    description: 'Ensuring secure message passing between different blockchains.',
    solution: 'Implemented multi-layered validation with threshold signatures.',
  },
  {
    title: 'Asset Mapping',
    description: 'Maintaining consistent asset representation across chains.',
    solution: 'Developed standardized asset wrapper with verifiable proofs.',
  },
  // Add more bridge-specific challenges
];

export function CrossChainProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeader 
        title="Cross-Chain Bridge Protocol"
        description="Secure and efficient cross-chain bridge for seamless asset transfer between blockchains"
        image="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
        tags={['Cross-chain', 'Bridge', 'Security', 'IBC']}
        githubUrl="https://github.com/web5lab/cross-chain-bridge"
        demoUrl="https://bridge.web5lab.com"
      />
      <ProjectMetrics 
        metrics={[
          { label: 'Total Bridged', value: '$500M+' },
          { label: 'Supported Chains', value: '10+' },
          { label: 'Daily Transfers', value: '1000+' },
          { label: 'Security Score', value: '98%' }
        ]}
      />
      <TechStack technologies={bridgeTechnologies} />
      <Challenges challenges={bridgeChallenges} />
      <Solutions />
      <ProjectGallery />
      <ProjectTeam />
      <Footer />
    </div>
  );
}