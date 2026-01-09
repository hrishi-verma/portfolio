'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';
import TiltCard from './TiltCard';
import { FileText, Download, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface Paper {
    title: string;
    abstract: string;
    authors: string[];
    year: string;
    tags: string[];
    pdfUrl: string;
    pageUrl: string;
}

export default function Research() {
    const papers: Paper[] = [
        {
            title: "Autonomous Driving Simulation Using Computer Vision",
            abstract: "This research presents a robust system for autonomous driving simulation utilizing Convolutional Neural Networks (CNNs) and OpenCV, achieving 90% accuracy in obstacle detection.",
            authors: ["Hrishikesh Verma"],
            year: "2024",
            tags: ["Computer Vision", "CNN", "OpenCV", "Machine Learning"],
            pdfUrl: "/papers/autonomous-driving-simulation.pdf",
            pageUrl: "/research/autonomous-driving"
        }
    ];

    return (
        <section id="research" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="text-4xl font-bold text-white mb-4 text-center"
                >
                    Research Publications
                </motion.h2>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUpVariants}
                    className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
                >
                    Academic research and technical papers in Machine Learning and Computer Vision
                </motion.p>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainerVariants}
                    className="grid grid-cols-1 gap-6"
                >
                    {papers.map((paper, idx) => (
                        <motion.div key={idx} variants={staggerItemVariants}>
                            <TiltCard className="h-full" tiltAmount={3}>
                                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-green-500/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-green-500/20 p-3 rounded-lg shrink-0">
                                            <FileText className="w-8 h-8 text-green-400" />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                {paper.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                                                <span>{paper.authors.join(", ")}</span>
                                                <span>•</span>
                                                <span>{paper.year}</span>
                                            </div>
                                            <p className="text-gray-300 mb-6 leading-relaxed">
                                                {paper.abstract}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {paper.tags.map((tag, tagIdx) => (
                                                    <span
                                                        key={tagIdx}
                                                        className="px-3 py-1 bg-gray-200 dark:bg-green-500/20 text-gray-800 dark:text-green-300 rounded-full text-xs font-semibold"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50 relative z-20">
                                                <Link
                                                    href={paper.pageUrl}
                                                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors pointer-events-auto"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Read Full Paper
                                                </Link>
                                                <a
                                                    href={paper.pdfUrl}
                                                    download
                                                    className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors pointer-events-auto border border-gray-200 dark:border-transparent"
                                                >
                                                    <Download className="w-4 h-4" />
                                                    Download PDF
                                                </a>
                                            </div>
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
