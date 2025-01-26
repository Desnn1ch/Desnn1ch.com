import React, { useEffect } from 'react';
import { Github, Mail, ExternalLink, Send, Terminal as Python, Cpu, Database, GitFork, Container, Hash, Server, Code } from 'lucide-react';

interface TechItem {
  name: string;
  icon: React.ReactNode;
}

function App() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const technologies: TechItem[] = [
    { name: 'Python', icon: <Python size={20} /> },
    { name: 'Golang', icon: <Code size={20} /> },
    { name: 'C#', icon: <Hash size={20} /> },
    { name: 'C/C++', icon: <Cpu size={20} /> },
    { name: 'Docker', icon: <Container size={20} /> },
    { name: 'PostgreSQL', icon: <Database size={20} /> },
    { name: 'Redis', icon: <Server size={20} /> },
    { name: 'Git', icon: <GitFork size={20} /> }
  ];

  const concepts = [
    'REST API',
    'gRPC',
    'HTTP/GET Request',
    'Microservices'
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Background decorative elements */}
      <div className="fixed inset-0 grid-background opacity-30"></div>
      <div className="fixed inset-0 mouse-glow"></div>
      
      {/* Content */}
      <div className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header Section with fluid shape */}
          <div className="relative mb-20">
            <div className="fluid-shape absolute inset-0 -top-20"></div>
            <div className="relative z-10 text-center space-y-4">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent 
                           transform hover:scale-105 transition-transform duration-300">
                Denis Belevich
              </h1>
              <p className="text-xl text-blue-200/80">Backend Developer</p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-6">
                <a href="https://t.me/desnn1ch" className="social-link group">
                  <Send size={24} className="transition-transform group-hover:scale-110" />
                  <span className="text-sm text-blue-200/60 group-hover:text-blue-200">@desnn1ch</span>
                </a>
                <a href="mailto:desnn1ch@mail.ru" className="social-link group">
                  <Mail size={24} className="transition-transform group-hover:scale-110" />
                  <span className="text-sm text-blue-200/60 group-hover:text-blue-200">desnn1ch@mail.ru</span>
                </a>
                <a href="https://github.com/Desnn1ch" className="social-link group" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="transition-transform group-hover:scale-110" />
                  <span className="text-sm text-blue-200/60 group-hover:text-blue-200">Desnn1ch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-card group"
                >
                  {tech.icon}
                  <span className="font-medium text-gray-100">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Concepts Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Concepts
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {concepts.map((concept) => (
                <div
                  key={concept}
                  className="concept-card"
                >
                  <span className="font-medium text-gray-100">{concept}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;