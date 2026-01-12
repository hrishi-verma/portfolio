'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';
import TiltCard from './TiltCard';
import { Github, ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';

function VideoThumbnail({ video, thumbnail, title }: { video: string; thumbnail?: string; title: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube video ID for fallback thumbnail
  const getYouTubeThumbnail = (url: string) => {
    const match = url.match(/embed\/([a-zA-Z0-9_-]+)/);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
  };

  const thumbnailSrc = thumbnail || getYouTubeThumbnail(video);

  if (isPlaying) {
    return (
      <div className="relative w-full h-64 overflow-hidden">
        <iframe
          src={`${video}?autoplay=1`}
          title={title}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full h-64 overflow-hidden group"
      style={{ cursor: 'none' }}
      onClick={() => setIsPlaying(true)}
    >
      {thumbnailSrc ? (
        <Image src={thumbnailSrc} alt={title} fill className="object-cover" unoptimized />
      ) : (
        <div className="w-full h-full bg-gray-900 flex items-center justify-center">
          <span className="text-gray-500">Click to play</span>
        </div>
      )}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors" style={{ cursor: 'none' }}>
        <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
          <Play className="w-8 h-8 text-gray-900 fill-current" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [

    {
      title: "Motif-Based Graph Compression",
      description: "Developed a motif-based graph compression algorithm achieving 26% reduction in graph size while preserving accuracy. Built automated pipeline processing 486 groups with reproducible analysis.",
      tech: ["Python", "NetworkX", "Graph Algorithms", "Data Science"],
      highlights: ["26% size reduction", "486 recurring patterns identified"],
      githubUrl: "https://github.com/hrishi-verma/motif-based-graph-compression",
      liveUrl: "https://hrishi-verma.github.io/motif-based-graph-compression/",
      thumbnail: "/thumbnails/motif-graph.png"
    },
    {
      title: "Sneaker Marketplace",
      description: "Built full-stack marketplace with React, Express, and PostgreSQL featuring real-time inventory updates. Achieved sub-200ms API response times under 5,000 requests/second with 98% payment success rate.",
      tech: ["React", "Express.js", "PostgreSQL", "Stripe API"],
      highlights: ["Sub-200ms response", "98% payment success"],
      githubUrl: "https://github.com/hrishi-verma/Sneaker-Marketplace",
      liveUrl: "https://hrishi-verma.github.io/Sneaker-Marketplace/",
      thumbnail: "/thumbnails/sneaker-marketplace.png"
    },
    {
      title: "RaptorProject",
      description: "Distributed data processing system built with Apache Spark and Scala. Features Docker containerization for reproducible deployments and high-performance cluster computing workflows.",
      tech: ["Scala", "Apache Spark", "Docker", "Shell"],
      highlights: ["Distributed Computing", "Big Data Processing"],
      githubUrl: "https://github.com/LiamDHealey/RaptorProject",
      liveUrl: "https://youtu.be/kJySlm_-Ifg",
      video: "https://www.youtube.com/embed/kJySlm_-Ifg"
    },
    {
      title: "Virtual Self-Driving Car",
      description: "Architected AI system using Convolutional Neural Networks and OpenCV, achieving 90% accuracy for obstacle detection. Optimized CNN architecture for 15% improvement in prediction accuracy.",
      tech: ["Python", "CNN", "OpenCV", "Machine Learning"],
      highlights: ["90% accuracy", "15% performance boost"],
      githubUrl: "https://github.com/hrishi-verma/Virtual-Self-Driving-Car",
      liveUrl: "https://www.youtube.com/watch?v=A0wGBdx95Ls",
      thumbnail: "/thumbnails/self-driving-car.jpg",
      video: "https://www.youtube.com/embed/A0wGBdx95Ls"
    },
    {
      title: "EchoesOfNature",
      description: "A digital archive preserving the lost voices of wildlife. Features interactive maps and charts to track extinct species, visualizing their history, and raising awareness for conservation.",
      tech: ["React.js", "D3.js", "Chart.js", "Node.js"],
      highlights: ["Interactive Data Viz", "Conservation Tech"],
      githubUrl: "https://github.com/hrishi-verma/EchoesOfNature",
      liveUrl: "https://hrishi-verma.github.io/EchoesOfNature/",
      thumbnail: "/thumbnails/echoes-of-nature.png"
    },
    {
      title: "InsightHub",
      description: "Architected a real-time log monitoring system using Kafka, Node.js, and Python. Integrated an ML engine with Isolation Forest models to detect anomalies and latency spikes in real-time, visualizing data on a Next.js dashboard.",
      tech: ["Kafka", "Node.js", "Python", "Next.js", "PostgreSQL", "Docker", "scikit-learn"],
      highlights: ["Real-time Anomaly Detection", "Scalable Architecture"],
      githubUrl: "https://github.com/hrishi-verma/InsightHub",
      liveUrl: "COMING_SOON",
      thumbnail: "/thumbnails/insighthub.png"
    },
    {
      title: "Personal Portfolio",
      description: "Designed a high-performance portfolio using Next.js 14 and Tailwind CSS. Implemented advanced animations, responsive design, and consolidated academic/project achievements.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "React"],
      highlights: ["Dark Mode", "Responsive Design", "Performance Optimized"],
      githubUrl: "https://github.com/hrishi-verma/portfolio",
      liveUrl: "https://hrishi-verma.github.io/",
      thumbnail: "/thumbnails/portfolio.png"
    },
    {
      title: "Auto-Web-vulnerability-detection",
      description: "Automated security scanner for web applications. Features crawling, authentication handling, and advanced fuzzing to detect XSS vulnerabilities in forms, headers, cookies, and query parameters.",
      tech: ["Python", "Security", "Web Crawling", "Fuzzing"],
      highlights: ["XSS Detection", "CVE Integration", "Form Fuzzing", "Cookie Fuzzing"],
      githubUrl: "https://github.com/hrishi-verma/Auto-Web-vulnerability-detection",
      liveUrl: "https://hrishi-verma.github.io/Auto-Web-vulnerability-detection/",
      thumbnail: "/thumbnails/vulnerability-scanner.png"
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
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors h-full flex flex-col overflow-hidden">
                  {project.video ? (
                    <VideoThumbnail
                      video={project.video}
                      thumbnail={project.thumbnail}
                      title={project.title}
                    />
                  ) : project.thumbnail ? (
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 flex flex-col flex-grow">
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

                      {project.liveUrl && project.liveUrl !== "COMING_SOON" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm font-medium z-10"
                        >
                          <ExternalLink className="w-5 h-5" />
                          Live Demo
                        </a>
                      )}

                      {project.liveUrl === "COMING_SOON" && (
                        <span className="flex items-center gap-2 text-gray-500 cursor-not-allowed text-sm font-medium z-10">
                          <ExternalLink className="w-5 h-5" />
                          Coming Soon
                        </span>
                      )}
                    </div>
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
