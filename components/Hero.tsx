'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaJava, FaAws, FaDocker, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiNextdotjs } from 'react-icons/si';
import Tooltip from './Tooltip';
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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--text-primary)] mb-8 tracking-tight">
          Hi, I&apos;m{' '}
          <span className="block mt-2 md:inline md:mt-0">
            <a
              href="https://linkedin.com/in/hrishikesh-verma"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-white hover:underline decoration-white decoration-2 underline-offset-4 transition-all cursor-pointer"
            >
              Hrishikesh Verma
            </a>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-6 font-medium tracking-wide">
          Software Developer &amp; Master&apos;s Student
        </p>

        <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl mx-auto leading-relaxed">
          <span className="font-semibold text-[var(--text-primary)]">Senior Software Engineer</span> specializing in{' '}
          <span className="text-[var(--text-primary)]">scalable distributed systems</span>,{' '}
          <span className="text-[var(--text-primary)]">algorithms</span>, and{' '}
          <span className="text-[var(--text-primary)]">high-impact software</span>.
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

        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-105"
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

        <div className="mt-16 pt-10 border-t border-gray-800/50 w-full max-w-2xl mx-auto">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-6">Technologies</p>
          <div className="flex gap-8 items-center justify-center flex-wrap">
            <Tooltip content="Next.js">
              <SiNextdotjs size={40} className="text-white hover:text-gray-300 transition-colors" />
            </Tooltip>
            <Tooltip content="React">
              <FaReact size={40} className="text-[#61DAFB] hover:text-[#4fa8c7] transition-colors" />
            </Tooltip>
            <Tooltip content="Java">
              <FaJava size={40} className="text-[#E76F00] hover:text-[#d96800] transition-colors" />
            </Tooltip>
            <Tooltip content="Spring Boot">
              <SiSpringboot size={40} className="text-[#6DB33F] hover:text-[#5fa135] transition-colors" />
            </Tooltip>
            <Tooltip content="AWS">
              <FaAws size={40} className="text-[#FF9900] hover:text-[#e08900] transition-colors" />
            </Tooltip>
            <Tooltip content="Docker">
              <FaDocker size={40} className="text-[#2496ED] hover:text-[#1c7bbd] transition-colors" />
            </Tooltip>
          </div>
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
