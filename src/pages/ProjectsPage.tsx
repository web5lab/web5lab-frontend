import React from 'react';
import { ProjectHero } from '../components/projects/ProjectHero';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import { ProjectCategories } from '../components/projects/ProjectCategories';
import { ProjectCTA } from '../components/projects/ProjectCTA';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ProjectHero />
      <ProjectCategories />
      <ProjectGrid />
      <ProjectCTA />
      <Footer />
    </div>
  );
}