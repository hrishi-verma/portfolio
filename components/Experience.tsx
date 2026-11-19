'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, slideLeftVariants, slideRightVariants } from '@/hooks/useScrollAnimation';
import TiltCard from './TiltCard';

export default function Experience() {
  const experiences = [
    {
      role: "Research Intern (Software Engineering)",
      company: "University of Utah",
      period: "Jun 2026 - Present",
      location: "Salt Lake City, UT",
      achievements: [
        "Implemented Python MCP servers exposing the lab's simulator and benchmark data to Claude for agentic experiment runs, log analysis, and result summaries, trimming iteration time ~40%",
        "Created a Vue.js dashboard comparing processing-in-memory vs. CPU results on 50+ workloads, taking analysis from hours to minutes"
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "Accenture",
      period: "Nov 2023 - Jul 2024",
      location: "Remote",
      achievements: [
        "Built a RAG-style customer support chatbot in Python on the OpenAI API over 2K+ fintech policy docs, resolving 2 in 5 tier-1 queries without handoff",
        "Led a full-stack overhaul of a TypeScript React/Redux app with a Node.js BFF, RTK Query caching, and code splitting, cutting API calls 30% and LCP from 4.2s to 2.1s",
        "Delivered a 0-to-1 Role-Based Access Control system with Spring Security, JWT role claims, and React route guards across 10+ fintech modules",
        "Optimized AWS EKS workloads with pod autoscaling and SQS async processing, lowering p95 latency 25%, and cut deploys from ~40 to 12 min with parallelized CI/CD",
        "Owned data-layer performance for a multi-tenant platform serving 2M+ daily requests with PostgreSQL indexes and Redis cache-aside, cutting p99 latency 35%"
      ]
    },
    {
      role: "Software Engineer",
      company: "Accenture",
      period: "Jun 2022 - Nov 2023",
      location: "Bangalore, India",
      achievements: [
        "Scaled 8 Spring Boot and Python microservices with Kafka and Resilience4j, raising throughput from ~1.1K to 1.5K+ transactions/sec at 99.9% uptime",
        "Launched Spring Boot REST APIs with JWT and OAuth 2.0 automating registration and OTP identity verification for 1M+ users, cutting onboarding time ~35%",
        "Shipped a WCAG 2.1 AA-compliant React component library adopted by 4 product squads, lifting CSAT 30% and speeding design-to-delivery ~20%"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      period: "Feb 2021 - Jun 2022",
      location: "Bangalore, India",
      achievements: [
        "Developed a reusable React form generator with JSON-configured forms, validation, and Redux, adopted by 5+ teams and accelerating delivery ~20%",
        "Used Grafana to pinpoint 50+ production edge cases and replaced nested-loop validation with hash lookups for a 16x speedup, earning promotion",
        "Wrote Playwright, Jest, and JUnit tests wired into Jenkins CI, raising coverage from ~45% to 85% with ~25% fewer production regressions"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "TechHub",
      period: "Various Periods",
      location: "India",
      achievements: [
        "Mentored 100+ engineering students on advanced Data Structures and Algorithms",
        "Achieved 95% average student satisfaction rate through tailored mentorship",
        "Participated in cultural fest organization with 200+ participants"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={idx % 2 === 0 ? slideLeftVariants : slideRightVariants}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-950 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-8 md:ml-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <TiltCard>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors text-left">
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-400 font-medium mb-1">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-4">{exp.period} • {exp.location}</p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIdx) => (
                          <li key={achIdx} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2">
                            <span className="text-blue-400 mt-1 shrink-0">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
