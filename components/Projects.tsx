export default function Projects() {
  const projects = [
    {
      title: "Motif-Based Graph Compression",
      description: "Developed a motif-based graph compression algorithm achieving 26% reduction in graph size while preserving accuracy. Built automated pipeline processing 486 groups with reproducible analysis.",
      tech: ["Python", "NetworkX", "Graph Algorithms", "Data Science"],
      highlights: ["26% size reduction", "486 recurring patterns identified"]
    },
    {
      title: "InsightHub",
      description: "Architected a real-time log monitoring system using Kafka, Node.js, and Python. Integrated an ML engine with Isolation Forest models to detect anomalies and latency spikes in real-time, visualizing data on a Next.js dashboard.",
      tech: ["Kafka", "Node.js", "Python", "Next.js", "PostgreSQL", "Docker", "scikit-learn"],
      highlights: ["Real-time Anomaly Detection", "Scalable Architecture"]
    },
    {
      title: "Virtual Self-Driving Car",
      description: "Architected AI system using Convolutional Neural Networks and OpenCV, achieving 90% accuracy for obstacle detection. Optimized CNN architecture for 15% improvement in prediction accuracy.",
      tech: ["Python", "CNN", "OpenCV", "Machine Learning"],
      highlights: ["90% accuracy", "15% performance boost"]
    },
    {
      title: "Sneaker Marketplace",
      description: "Built full-stack marketplace with React, Express, and PostgreSQL featuring real-time inventory updates. Achieved sub-200ms API response times under 5,000 requests/second with 98% payment success rate.",
      tech: ["React", "Express.js", "PostgreSQL", "Stripe API"],
      highlights: ["Sub-200ms response", "98% payment success"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105 group"
            >
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                {project.highlights.map((highlight, hIdx) => (
                  <span
                    key={hIdx}
                    className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mr-2 mb-2"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="px-3 py-1 bg-gray-700/50 text-gray-400 rounded-md text-sm"
                  >
                    {tech}
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
