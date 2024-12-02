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

export function YieldProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeader 
        title="AI-Powered Yield Aggregator"
        description="Smart yield farming protocol with AI-optimized strategies and advanced risk assessment"
        image="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80"
        tags={['DeFi', 'Yield', 'AI', 'Risk Management']}
        githubUrl="https://github.com/web5lab/yield-aggregator"
        demoUrl="https://yield.web5lab.com"
      />
      <ProjectMetrics 
        metrics={[
          { label: 'TVL', value: '$50M+' },
          { label: 'APY Range', value: '5-20%' },
          { label: 'Active Vaults', value: '25+' },
          { label: 'Risk Score', value: '95/100' }
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