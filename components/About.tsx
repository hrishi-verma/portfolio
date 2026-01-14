'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';
import TiltCard from './TiltCard';

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <TiltCard tiltAmount={2}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-10 border border-gray-700 text-center">
              <p className="text-gray-700 dark:text-gray-200 text-xl md:text-2xl leading-relaxed mb-8 font-light">
                I am a Full Stack Developer with 3.5 years of industry experience, currently distinguishing myself at the University of Utah with a 3.9 GPA in my Master&apos;s program.
              </p>

              <p className="text-gray-700 dark:text-gray-200 text-xl md:text-2xl leading-relaxed mb-8 font-light">
                At Accenture, I didn&apos;t just write code; I engineered solutions. I built scalable backend systems with Spring Boot and crafted high-performance UIs in React. My focus is always on impact—whether that&apos;s optimizing critical data pipelines or delivering seamless user experiences for complex enterprise applications.
              </p>

              <p className="text-gray-700 dark:text-gray-200 text-xl md:text-2xl leading-relaxed font-light">
                I&apos;m obsessed with clean architecture and system design. When I&apos;m not debugging complex distributed systems, you&apos;ll find me mentoring students or diving into the latest in cloud computing and AI.
              </p>
            </div>
          </TiltCard>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={staggerItemVariants}>
            <TiltCard className="h-full">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center h-full">
                <div className="text-3xl font-bold text-blue-400 mb-2">3.9</div>
                <div className="text-gray-400">GPA at UofU</div>
              </div>
            </TiltCard>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <TiltCard className="h-full">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center h-full">
                <div className="text-3xl font-bold text-purple-400 mb-2">3.5 Years</div>
                <div className="text-gray-400">Full Stack Experience</div>
              </div>
            </TiltCard>
          </motion.div>
          <motion.div variants={staggerItemVariants}>
            <TiltCard className="h-full">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center h-full">
                <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
                <div className="text-gray-400">Developers Mentored</div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
