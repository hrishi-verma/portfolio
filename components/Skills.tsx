export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "Rust", "HTML/CSS"]
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "Redux", "Angular", "Material-UI", "Tailwind CSS", "SCSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Spring Boot", "Jest", "Mockery", "RESTful APIs"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "NoSQL", "DynamoDB", "Redis", "Apache Kafka"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS (S3, EC2, Lambda)", "Docker", "Kubernetes", "Git", "CI/CD", "Webpack"]
    },
    {
      title: "Tools & Others",
      skills: ["Data Structures", "Algorithms", "Machine Learning", "Data Visualization", "Bash Scripting"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
