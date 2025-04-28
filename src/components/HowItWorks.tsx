import React from 'react';
import { UserPlus, BookOpen, Award, ArrowUpRight } from 'lucide-react';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Step: React.FC<StepProps> = ({ number, title, description, icon }) => {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-cyan to-purple flex items-center justify-center mb-4 md:mb-0 z-10">
          {icon}
        </div>
        
        <div className="md:ml-6 text-center md:text-left">
          <div className="text-sm font-medium text-cyan mb-1">Step {number}</div>
          <h3 className="text-xl font-bold font-display mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
      
      {number < 4 && (
        <div className="hidden md:block absolute top-8 left-8 w-[calc(100%-60px)] h-px bg-gradient-to-r from-cyan/30 to-purple/30"></div>
      )}
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Enroll",
      description: "Choose your learning path and join our community of DevOps professionals.",
      icon: <UserPlus size={24} className="text-white" />
    },
    {
      number: 2,
      title: "Learn",
      description: "Access structured courses with hands-on labs and expert mentorship.",
      icon: <BookOpen size={24} className="text-white" />
    },
    {
      number: 3,
      title: "Get Certified",
      description: "Prepare for and pass industry-recognized certification exams.",
      icon: <Award size={24} className="text-white" />
    },
    {
      number: 4,
      title: "Launch Career",
      description: "Apply your skills to land high-paying DevOps roles with our career support.",
      icon: <ArrowUpRight size={24} className="text-white" />
    }
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">How It <span className="text-cyan">Works</span></h2>
          <p className="section-subtitle mx-auto">
            Our proven four-step process to transform you into a certified DevOps professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
          {steps.map((step) => (
            <Step
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-navy-light rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[80px]"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold font-display mb-2">
                Ready to start your DevOps journey?
              </h3>
              <p className="text-gray-300 max-w-xl">
                Take the first step toward your DevOps career with our comprehensive learning programs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="btn-secondary">
                Browse Courses
              </a>
              <a href="#demo" className="btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;