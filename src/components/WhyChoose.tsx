import React from 'react';
import { Award, Target, Headphones, Clock } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="card group hover:translate-y-[-5px]">
      <div className="mb-4 text-cyan group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-display font-bold mb-3 group-hover:text-cyan transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const WhyChoose: React.FC = () => {
  const features = [
    {
      icon: <Award size={36} />,
      title: 'Industry Experts',
      description: 'Learn from certified professionals with years of hands-on DevOps experience at top tech companies.'
    },
    {
      icon: <Target size={36} />,
      title: 'Real-World Projects',
      description: 'Build an impressive portfolio with practical projects based on actual industry challenges.'
    },
    {
      icon: <Headphones size={36} />,
      title: 'Career Support',
      description: 'Get personalized guidance, resume reviews, and interview preparation from our career coaches.'
    },
    {
      icon: <Clock size={36} />,
      title: '24/7 Learning Access',
      description: 'Study at your own pace with lifetime access to course materials, updates, and community support.'
    }
  ];

  return (
    <section className="section bg-navy-dark" id="features">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose <span className="text-cyan">Techmentum</span></h2>
          <p className="section-subtitle mx-auto">
            We deliver practical DevOps education that bridges the gap between theory and industry demands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;