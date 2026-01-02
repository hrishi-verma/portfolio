'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, slideLeftVariants, slideRightVariants } from '@/hooks/useScrollAnimation';

export default function Experience() {
  const experiences = [
    {
      role: "Senior Software Engineer",
      company: "Accenture Pvt. Ltd.",
      period: "Nov 2023 - Jul 2024",
      location: "Bengaluru, India",
      achievements: [
        "Redesigned user interface with ReactJS, implementing Redux for state management and reducing API calls by 30%",
        "Engineered scalable backend with Spring Boot, enhancing RESTful API security and boosting transaction throughput by 40%",
        "Optimized microservices with Spring Boot, Docker, Kubernetes, and AWS (S3, DynamoDB, SQS), improving performance by 25%"
      ]
    },
    {
      role: "Software Engineer",
      company: "Accenture Pvt. Ltd.",
      period: "Jun 2022 - Nov 2023",
      location: "Bengaluru, India",
      achievements: [
        "Built Proof of Concept for Role-Based Access Control using Postman for API testing and Mockito for unit testing",
        "Crafted advanced APIs with Java Spring Boot, integrating SingPass for user verification and automating registration for 1 million+ users",
        "Revamped user interfaces with SCSS styling and Material-UI, achieving 30% increase in user satisfaction"
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Accenture Pvt. Ltd.",
      period: "Feb 2021 - Jun 2022",
      location: "Bengaluru, India",
      achievements: [
        "Created custom form generator in ReactJS with reusable components, reducing development time by 20%",
        "Formulated 50+ API integrations using Fetch and Axios with Redux state management",
        "Refactored critical application logic, achieving 16x performance boost and resolving 50+ edge cases"
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
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all text-left">
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
