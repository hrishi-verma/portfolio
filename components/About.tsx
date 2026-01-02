export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">About Me</h2>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I am a <span className="font-bold text-white">Full Stack Developer</span> with <span className="font-bold text-white">3.5 years of industry experience</span>, currently distinguishing myself at the <span className="font-bold text-white">University of Utah</span> with a <span className="font-bold text-white">3.94 GPA</span> in my Master&apos;s program.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            At Accenture, I didn&apos;t just write code; I engineered solutions. I built <span className="font-bold text-white">scalable backend systems</span> with Spring Boot and crafted <span className="font-bold text-white">high-performance UIs</span> in React. My focus is always on impact—whether that&apos;s <span className="font-bold text-white">optimizing critical data pipelines</span> or delivering <span className="font-bold text-white">seamless user experiences</span> for complex enterprise applications.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m obsessed with <span className="font-bold text-white">clean architecture</span> and <span className="font-bold text-white">system design</span>. When I&apos;m not debugging complex distributed systems, you&apos;ll find me mentoring students or diving into the latest in <span className="font-bold text-white">cloud computing</span> and <span className="font-bold text-white">AI</span>.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">3.94</div>
            <div className="text-gray-400">GPA at UofU</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">3.5 Years</div>
            <div className="text-gray-400">Full Stack Experience</div>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100+</div>
            <div className="text-gray-400">Students Mentored</div>
          </div>
        </div>
      </div>
    </section >
  );
}
