'use client';

import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '@/hooks/useScrollAnimation';
import TiltCard from './TiltCard';

export default function Skills() {
  const skillCategories = [
    {
      title: "GenAI / ML",
      skills: ["OpenAI & Claude APIs", "RAG", "FAISS", "pgvector", "Prompt Engineering", "MCP", "Claude Code", "PyTorch", "scikit-learn", "NetworkX"]
    },
    {
      title: "Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript (ES6+)", "SQL", "C++"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Vue.js", "Angular", "Redux", "HTML5/CSS3", "Tailwind CSS", "Material-UI", "D3.js", "WCAG"]
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "Spring Boot", "Hibernate", "Node.js", "Express.js", "REST", "GraphQL", "gRPC", "Microservices", "OAuth 2.0/JWT"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (EKS, EC2, S3, SQS, SNS)", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions", "Agile/Scrum"]
    },
    {
      title: "Data & Messaging",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Cassandra", "Redis", "Apache Kafka", "RabbitMQ", "WebSockets"]
    },
    {
      title: "Testing & Observability",
      skills: ["Jest", "JUnit", "Playwright", "Grafana", "Prometheus", "New Relic", "Kibana"]
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
            >
              <TiltCard className="h-full">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors h-full">
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
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
