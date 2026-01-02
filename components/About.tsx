export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I&apos;m currently pursuing my Master&apos;s in Computer Science at the University of Utah,
            maintaining a 3.94 GPA while diving deep into advanced algorithms and system design.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Before grad school, I spent over two years at Accenture, where I worked on everything
            from redesigning user interfaces with React to building scalable backend systems with
            Spring Boot. I love the challenge of optimizing systems—whether that&apos;s boosting API
            performance by 40% or cutting deployment strategies down by 25%.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            When I&apos;m not coding, you&apos;ll find me exploring new technologies, working on side projects,
            or mentoring students. I believe in writing clean, efficient code and building things
            that actually make a difference.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3.94</div>
            <div className="text-gray-400">GPA at UofU</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">2+ Years</div>
            <div className="text-gray-400">Industry Experience</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-gray-400">Students Mentored</div>
          </div>
        </div>
      </div>
    </section>
  );
}
