'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';
import TiltCard from './TiltCard';
import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Motif-Based Graph Compression",
      description: "Developed a motif-based graph compression algorithm achieving 26% reduction in graph size while preserving accuracy. Built automated pipeline processing 486 groups with reproducible analysis.",
      tech: ["Python", "NetworkX", "Graph Algorithms", "Data Science"],
      highlights: ["26% size reduction", "486 recurring patterns identified"],
      githubUrl: "https://github.com/hrishi-verma/motif-based-graph-compression",
      liveUrl: ""
    },
    {
      title: "InsightHub",
      description: "Architected a real-time log monitoring system using Kafka, Node.js, and Python. Integrated an ML engine with Isolation Forest models to detect anomalies and latency spikes in real-time, visualizing data on a Next.js dashboard.",
      tech: ["Kafka", "Node.js", "Python", "Next.js", "PostgreSQL", "Docker", "scikit-learn"],
      highlights: ["Real-time Anomaly Detection", "Scalable Architecture"],
      githubUrl: "https://github.com/hrishi-verma/InsightHub",
      liveUrl: ""
    },
    {
      title: "Virtual Self-Driving Car",
      description: "Architected AI system using Convolutional Neural Networks and OpenCV, achieving 90% accuracy for obstacle detection. Optimized CNN architecture for 15% improvement in prediction accuracy.",
      tech: ["Python", "CNN", "OpenCV", "Machine Learning"],
      highlights: ["90% accuracy", "15% performance boost"],
      githubUrl: "https://github.com/hrishi-verma/Virtual-Self-Driving-Car",
      liveUrl: ""
    },
    {
      title: "Sneaker Marketplace",
      description: "Built full-stack marketplace with React, Express, and PostgreSQL featuring real-time inventory updates. Achieved sub-200ms API response times under 5,000 requests/second with 98% payment success rate.",
      tech: ["React", "Express.js", "PostgreSQL", "Stripe API"],
      highlights: ["Sub-200ms response", "98% payment success"],
      githubUrl: "https://github.com/hrishi-verma",
      liveUrl: ""
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
            >
              <TiltCard className="h-full">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-colors h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    {project.highlights.map((highlight, hIdx) => (
                      <span
                        key={hIdx}
                        className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs mr-2 mb-2"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-md text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions / Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50 mt-auto">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white hover:text-purple-400 transition-colors text-sm font-medium z-10"
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
