import { Award, Users, Trophy } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Users,
      title: "Teaching Assistant at VTU",
      description: "Resolved 700+ Advanced Data Structures and Algorithms queries, providing tailored mentorship to enhance students' conceptual clarity and problem-solving skills",
      period: "7 months"
    },
    {
      icon: Award,
      title: "DSA & Coding Bootcamp Instructor",
      description: "Promoted to instructor at TechHub, mentoring 100+ engineering students with in-depth lessons on Trees, DP, Graphs, and Trees. Achieved 95% average student satisfaction rate",
      period: "Multiple cohorts"
    },
    {
      icon: Trophy,
      title: "Cultural Fest Organizer",
      description: "Secured 1st prize in the Verve 2018 and 2019 inter-college cultural fest at the University, outperforming 200+ participants in prestigious hackathons including ValuePitch and UiPath Automation",
      period: "2018-2019"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Achievements & Recognition</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div
                key={idx}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-green-400" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-sm text-green-400 mb-3">{achievement.period}</p>
                <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
