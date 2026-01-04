'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Delay slightly to ensure animation triggers after initial paint
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hrishikesh Verma</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Software Developer &amp; Master&apos;s Student
        </p>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          <span className="font-bold text-white">Senior Software Engineer</span> specializing in <span className="font-bold text-white">scalable distributed systems</span>, <span className="font-bold text-white">algorithms</span>, and <span className="font-bold text-white">creating impactful software</span>.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="https://github.com/hrishi-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
          >
            <Github className="w-6 h-6 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/hrishikesh-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a
            href="mailto:rishi.verma50@gmail.com"
            className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-all hover:scale-110"
          >
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full font-medium border border-gray-600 hover:border-blue-500 transition-all hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${theme === 'dark' ? 'border-gray-600' : 'border-gray-400'}`}>
          <div className={`w-1 h-3 rounded-full mt-2 ${theme === 'dark' ? 'bg-gray-600' : 'bg-gray-400'}`} />
        </div>
      </div>
    </section>
  );
}
