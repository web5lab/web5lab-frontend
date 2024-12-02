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

export function NFTProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeader 
        title="AI-Powered NFT Marketplace"
        description="A revolutionary NFT trading platform with AI-driven pricing and fraud detection"
        image="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80"
        tags={['NFT', 'Marketplace', 'Ethereum', 'AI', 'React']}
        githubUrl="https://github.com/web5lab/nft-marketplace"
        demoUrl="https://nft.web5lab.com"
      />
      <ProjectMetrics 
        metrics={[
          { label: 'Trading Volume', value: '$10M+' },
          { label: 'Active Users', value: '50K+' },
          { label: 'NFTs Listed', value: '100K+' },
          { label: 'Avg Response Time', value: '< 2s' }
        ]}
      />
      <TechStack />
      <Challenges />
      <Solutions />
      <ProjectGallery />
      <ProjectTeam />
      <Footer />
    </div>
  );
}