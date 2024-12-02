import React from 'react';
import { Code, Database, Shield, Cpu } from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Smart Contract Development',
    description: 'Expert development of secure and efficient smart contracts for your blockchain needs.',
  },
  {
    icon: Database,
    title: 'DeFi Solutions',
    description: 'Custom DeFi protocol development with advanced trading and lending capabilities.',
  },
  {
    icon: Shield,
    title: 'Security Auditing',
    description: 'Comprehensive security audits and vulnerability assessments for blockchain projects.',
  },
  {
    icon: Cpu,
    title: 'Blockchain Architecture',
    description: 'Scalable and robust blockchain architecture design and implementation.',
  },
];

export function Features() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600">
            Comprehensive blockchain development solutions
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="p-8 bg-white border-2 border-gray-100 hover:border-blue-600 rounded-lg shadow-lg">
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}