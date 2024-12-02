import React from 'react';
import { Wallet, Code2, ShieldCheck, Layers } from 'lucide-react';

const categories = [
  {
    name: 'DeFi Protocols',
    icon: Wallet,
    count: 12,
  },
  {
    name: 'Smart Contracts',
    icon: Code2,
    count: 25,
  },
  {
    name: 'Security Solutions',
    icon: ShieldCheck,
    count: 8,
  },
  {
    name: 'Layer 2 Solutions',
    icon: Layers,
    count: 15,
  },
];

export function ProjectCategories() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="p-6 text-center border-2 border-gray-100 rounded-lg hover:border-blue-600 transition-colors group"
            >
              <category.icon className="h-8 w-8 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count} Projects</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}