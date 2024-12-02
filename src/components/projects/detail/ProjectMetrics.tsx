import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
  label: string;
  value: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

export function ProjectMetrics({ metrics }: ProjectMetricsProps) {
  return (
    <section className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">
                {metric.value}
              </div>
              <div className="text-blue-200">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}