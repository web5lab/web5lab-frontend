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

export function Layer2ProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeader 
        title="AI-Optimized Layer 2 Solution"
        description="Scalable Layer 2 protocol with AI-powered optimization and advanced security features"
        image="https://images.unsplash.com/photo-1642104704412-8934a9776c51?auto=format&fit=crop&q=80"
        tags={['Layer2', 'Scaling', 'ZK-Rollups', 'AI']}
        githubUrl="https://github.com/web5lab/layer2-solution"
        demoUrl="https://l2.web5lab.com"
      />
      <ProjectMetrics 
        metrics={[
          { label: 'TPS', value: '10,000+' },
          { label: 'Gas Savings', value: '99%' },
          { label: 'Active Users', value: '100K+' },
          { label: 'Total Txns', value: '10M+' }
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