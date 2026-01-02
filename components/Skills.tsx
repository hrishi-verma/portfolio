'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "Rust", "Go", "SQL", "HTML/CSS"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Redux", "Angular", "Vue.js", "Material-UI", "Tailwind CSS", "Framer Motion"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "GraphQL", "gRPC", "Microservices", "System Design", "WebSockets"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Redis", "Cassandra", "Elasticsearch", "Apache Kafka"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "Linux", "Nginx"]
    },
    {
      title: "Machine Learning & Tools",
      skills: ["PyTorch", "TensorFlow", "Pandas", "NumPy", "Scikit-learn", "LLMs", "Git", "Jira", "Agile"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
          className="text-4xl font-bold text-white mb-12 text-center"
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={staggerItemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm hover:bg-gray-600/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section >
  );
}
