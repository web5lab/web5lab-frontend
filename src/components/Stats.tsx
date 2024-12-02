import React from 'react';

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Smart Contracts' },
  { value: '25+', label: 'DeFi Protocols' },
  { value: '100%', label: 'Client Satisfaction' },
];

export function Stats() {
  return (
    <div className="bg-blue-50 border-y border-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">
                {stat.value}
              </div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}