import React from 'react';
import { ChevronRight, Code2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-hero-pattern relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[100px] -top-64 -right-64"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px] -bottom-32 -left-32"></div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-navy-light rounded-full mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-accent-green mr-2 animate-pulse-slow"></div>
              <span className="text-sm text-gray-300">Now Enrolling: New Winter 2025 Cohort</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
              Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">DevOps</span> with Techmentum
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Upskill your career with industry-leading DevOps training. Get certified, build real-world projects, and launch your future in tech.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="#demo" className="btn-primary">
                Join Demo Class <ChevronRight size={16} className="inline ml-1" />
              </a>
              <a href="#courses" className="btn-secondary">
                Explore Courses
              </a>
            </div>
          </div>

          <div className="flex-1 md:ml-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-br from-cyan to-purple opacity-10 absolute rounded-2xl"></div>
              <div className="rounded-2xl border border-gray-700 bg-navy-dark p-6 overflow-hidden relative">
                <Code2 className="text-cyan mb-4" size={36} />
                <div className="space-y-3">
                  <div className="h-4 w-full bg-navy-light rounded animate-pulse"></div>
                  <div className="h-4 w-11/12 bg-navy-light rounded animate-pulse"></div>
                  <div className="h-4 w-10/12 bg-navy-light rounded animate-pulse"></div>
                  <div className="h-4 w-9/12 bg-navy-light rounded animate-pulse"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan/20 to-purple/20 blur-xl rounded-full"></div>
              </div>
              <div className="absolute -z-10 top-6 left-6 right-6 bottom-0 border border-cyan/20 rounded-2xl"></div>
              <div className="absolute -z-10 top-12 left-12 right-0 bottom-6 border border-purple/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;