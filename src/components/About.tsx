import React from 'react';
import { Users, BookOpen, Globe, Award } from 'lucide-react';

interface StatProps {
  value: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple mb-2">
        {value}
      </div>
      <div className="text-gray-300 text-sm md:text-base">{label}</div>
    </div>
  );
};

interface ValueProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-navy-light rounded-xl hover:scale-105 transition-transform duration-300">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan/20 to-purple/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const stats = [
    { value: "9,000+", label: "Students Trained" },
    { value: "24", label: "Expert Instructors" },
    { value: "35+", label: "Industry Partners" },
    { value: "96%", label: "Job Placement Rate" }
  ];

  const values = [
    {
      icon: <Users className="text-cyan" size={20} />,
      title: "Community-Focused",
      description: "We foster a supportive learning environment where professionals connect and grow together."
    },
    {
      icon: <BookOpen className="text-cyan" size={20} />,
      title: "Always Learning",
      description: "Our curriculum constantly evolves to reflect the latest industry trends and technologies."
    },
    {
      icon: <Globe className="text-cyan" size={20} />,
      title: "Global Mindset",
      description: "We prepare our students to succeed in DevOps roles across diverse global environments."
    },
    {
      icon: <Award className="text-cyan" size={20} />,
      title: "Excellence-Driven",
      description: "We hold ourselves to the highest standards in everything we deliver to our students."
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">About <span className="text-cyan">Techmentum</span></h2>
          <p className="section-subtitle mx-auto">
            On a mission to create the next generation of DevOps leaders through exceptional education.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold font-display mb-6">Our Mission</h3>
            <p className="text-gray-300 mb-6">
              Techmentum is dedicated to bridging the DevOps skills gap by providing practical, 
              industry-aligned education that transforms careers. We believe that everyone with 
              dedication and passion can master DevOps and contribute to the evolving tech landscape.
            </p>
            <p className="text-gray-300 mb-8">
              Founded in 2022 by a team of experienced DevOps professionals, we've grown to become 
              a leading provider of specialized DevOps training and certification preparation. Our 
              hands-on approach ensures that students don't just learn theory—they build real-world 
              skills that employers value.
            </p>
            <a href="#" className="btn-secondary inline-block">
              Learn More About Our Story
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-purple/10 rounded-2xl"></div>
              <div className="relative h-full p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold font-display mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-y-12">
                  {stats.map((stat, index) => (
                    <Stat key={index} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-bold font-display mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Value 
                key={index} 
                icon={value.icon} 
                title={value.title} 
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;