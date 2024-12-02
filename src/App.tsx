import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AIFeatures } from './components/AIFeatures';
import { AIChatbot } from './components/AIChatbot';
import { NFTProjectPage } from './pages/NFTProjectPage';
import { DeFiProjectPage } from './pages/DeFiProjectPage';
import { CrossChainProjectPage } from './pages/CrossChainProjectPage';
import { YieldProjectPage } from './pages/YieldProjectPage';
import { DAOProjectPage } from './pages/DAOProjectPage';
import { Layer2ProjectPage } from './pages/Layer2ProjectPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AIFeatures />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/nft-marketplace" element={<NFTProjectPage />} />
        <Route path="/projects/defi-protocol" element={<DeFiProjectPage />} />
        <Route path="/projects/cross-chain-bridge" element={<CrossChainProjectPage />} />
        <Route path="/projects/yield-aggregator" element={<YieldProjectPage />} />
        <Route path="/projects/dao-governance" element={<DAOProjectPage />} />
        <Route path="/projects/layer2-solution" element={<Layer2ProjectPage />} />
      </Routes>
    </Router>
  );
}

export default App;