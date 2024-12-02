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

export function DAOProjectPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHeader 
        title="AI-Enhanced DAO Platform"
        description="Advanced DAO governance platform with AI-assisted proposal analysis and voting optimization"
        image="https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80"
        tags={['DAO', 'Governance', 'AI', 'Voting']}
        githubUrl="https://github.com/web5lab/dao-platform"
        demoUrl="https://dao.web5lab.com"
      />
      <ProjectMetrics 
        metrics={[
          { label: 'Active DAOs', value: '100+' },
          { label: 'Total Members', value: '50K+' },
          { label: 'Proposals', value: '1000+' },
          { label: 'Treasury Value', value: '$25M+' }
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