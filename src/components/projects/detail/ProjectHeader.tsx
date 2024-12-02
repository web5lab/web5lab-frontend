import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Tag } from 'lucide-react';

interface ProjectHeaderProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
}

export function ProjectHeader({ 
  title, 
  description, 
  image, 
  tags, 
  githubUrl, 
  demoUrl 
}: ProjectHeaderProps) {
  return (
    <section className="relative pt-20 pb-32 bg-gradient-to-b from-blue-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-black"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            {description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tags.map((tag, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-blue-800/50 text-blue-200 rounded-full backdrop-blur-sm flex items-center"
              >
                <Tag className="w-4 h-4 mr-2" />
                {tag}
              </motion.span>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg flex items-center hover:bg-blue-700 transition-colors"
            >
              <Github className="w-5 h-5 mr-2" />
              View Source
            </motion.a>
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-blue-400 text-blue-200 rounded-lg flex items-center hover:bg-blue-800/50 transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}