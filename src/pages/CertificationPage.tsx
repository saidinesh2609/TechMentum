import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Award } from 'lucide-react';

const certifications = {
  'aws-certified-devops-engineer': {
    name: 'AWS Certified DevOps Engineer',
    logo: 'AWS',
    description: 'Validate your expertise in implementing continuous delivery systems and methodologies on AWS.',
    examDetails: {
      code: 'DOP-C01',
      duration: '180 minutes',
      questions: '75 questions',
      passingScore: '750/1000',
      cost: '$300 USD'
    },
    domains: [
      'SDLC Automation',
      'Configuration Management and IaC',
      'Monitoring and Logging',
      'Policies and Standards Automation',
      'Incident and Event Response',
      'High Availability and Disaster Recovery'
    ],
    preparationTips: [
      'Complete hands-on labs with AWS services',
      'Study AWS whitepapers and documentation',
      'Practice with sample exam questions',
      'Gain real-world experience with CI/CD tools'
    ],
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'kubernetes-administrator': {
    name: 'Certified Kubernetes Administrator',
    logo: 'K8s',
    description: 'Demonstrate your ability to manage and operate Kubernetes clusters in production environments.',
    examDetails: {
      code: 'CKA',
      duration: '120 minutes',
      questions: 'Performance-based',
      passingScore: '74%',
      cost: '$375 USD'
    },
    domains: [
      'Cluster Architecture, Installation & Configuration',
      'Workloads & Scheduling',
      'Services & Networking',
      'Storage',
      'Troubleshooting'
    ],
    preparationTips: [
      'Set up a Kubernetes cluster from scratch',
      'Practice troubleshooting scenarios',
      'Master kubectl commands',
      'Complete mock exams under timed conditions'
    ],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
};

const CertificationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const certification = slug ? certifications[slug as keyof typeof certifications] : null;

  if (!certification) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Certification Not Found</h2>
        <Link to="/" className="text-cyan hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container">
        <Link to="/" className="inline-flex items-center text-cyan hover:underline mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Certifications
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden mb-8">
              <img src={certification.imageUrl} alt={certification.name} className="w-full h-[400px] object-cover" />
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-cyan">{certification.logo}</span>
                </div>
                <h1 className="text-4xl font-bold font-display">{certification.name}</h1>
              </div>
              <p className="text-gray-300 text-lg">{certification.description}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Exam Domains</h2>
              <div className="grid gap-4">
                {certification.domains.map((domain, index) => (
                  <div key={index} className="bg-navy-light p-4 rounded-lg">
                    <div className="flex items-center">
                      <CheckCircle size={20} className="text-cyan mr-4" />
                      {domain}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display mb-6">Preparation Tips</h2>
              <ul className="space-y-4">
                {certification.preparationTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={20} className="text-accent-green mr-3 mt-1" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-navy-light rounded-2xl p-6 sticky top-24">
              <div className="flex items-center mb-6">
                <Award size={24} className="text-cyan mr-2" />
                <h3 className="text-xl font-bold">Exam Details</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <div className="text-sm text-gray-300 mb-1">Exam Code</div>
                  <div className="font-medium">{certification.examDetails.code}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Duration</div>
                  <div className="font-medium">{certification.examDetails.duration}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Questions</div>
                  <div className="font-medium">{certification.examDetails.questions}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Passing Score</div>
                  <div className="font-medium">{certification.examDetails.passingScore}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-300 mb-1">Exam Cost</div>
                  <div className="font-medium">{certification.examDetails.cost}</div>
                </div>
              </div>

              <button className="w-full btn-primary mb-4">
                Start Preparation
              </button>
              <button className="w-full btn-secondary">
                Download Exam Guide
              </button>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="font-bold mb-4">What's included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    Practice exams and quizzes
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    Hands-on labs and exercises
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    Study materials and guides
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    Expert mentorship support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;