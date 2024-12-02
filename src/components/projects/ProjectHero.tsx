import React from 'react';
import { Code2 } from 'lucide-react';

export function ProjectHero() {
  return (
    <div className="relative pt-32 pb-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Code2 className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Projects Portfolio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our innovative blockchain solutions and see how we're shaping the future of decentralized technology.
          </p>
        </div>
      </div>
    </div>
  );
}