import React from 'react';
import { CheckCircle } from 'lucide-react';

const certifications = [
  { name: 'AWS Certified DevOps Engineer', logo: 'AWS' },
  { name: 'Azure DevOps Engineer Expert', logo: 'Azure' },
  { name: 'Certified Kubernetes Administrator', logo: 'K8s' },
  { name: 'Docker Certified Associate', logo: 'Docker' },
  { name: 'Terraform Certified Associate', logo: 'TF' },
  { name: 'GitLab Certified Professional', logo: 'GL' },
];

const benefits = [
  'Industry-recognized credentials to boost your resume',
  'Higher salary potential and career advancement',
  'Hands-on preparation with real exam simulations',
  'One-on-one mentoring from certified professionals',
  'Lifetime access to updated study materials'
];

const Certifications: React.FC = () => {
  return (
    <section className="section bg-navy-dark" id="certifications">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Boost Your Profile with <span className="text-cyan">Certifications</span></h2>
          <p className="section-subtitle mx-auto">
            Prepare for and earn the most in-demand DevOps certifications to stand out in the job market.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-6 bg-navy rounded-xl border border-gray-800 hover:border-cyan/30 transition-colors">
              <div className="w-16 h-16 rounded-lg bg-navy-light flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-cyan">{cert.logo}</span>
              </div>
              <span className="text-center text-sm">{cert.name}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-navy to-navy-light rounded-2xl overflow-hidden">
          <div className="md:w-1/2 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold font-display mb-6">
              Why Get <span className="text-cyan">Certified</span> With Us?
            </h3>
            
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-accent-green mr-3 mt-1 flex-shrink-0" size={18} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <a href="#" className="btn-primary mt-8 inline-block">
              View Certification Tracks
            </a>
          </div>
          
          <div className="md:w-1/2 bg-navy-light p-8 md:p-12 relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-4 inline-block px-3 py-1 bg-cyan/10 rounded-full text-cyan text-sm">
                Success Rate
              </div>
              <div className="text-4xl font-bold font-display mb-4">93%</div>
              <p className="text-gray-300">
                Our students pass their certification exams on the first attempt, compared to the industry average of 72%.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-navy p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan">2,400+</div>
                  <div className="text-sm text-gray-300">Certified Professionals</div>
                </div>
                <div className="bg-navy p-4 rounded-lg">
                  <div className="text-2xl font-bold text-cyan">$25K+</div>
                  <div className="text-sm text-gray-300">Avg. Salary Increase</div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple/5 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;