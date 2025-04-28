import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, ArrowLeft } from 'lucide-react';

const courses = {
  'ci-cd-pipeline-mastery': {
    title: 'CI/CD Pipeline Mastery',
    description: 'Build and automate robust CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI.',
    level: 'Intermediate',
    duration: '8 weeks',
    rating: 4.9,
    students: 2483,
    fullDescription: `Master the art of Continuous Integration and Continuous Deployment with our comprehensive course. You'll learn how to:

    • Design and implement efficient CI/CD pipelines
    • Work with popular tools like Jenkins, GitHub Actions, and GitLab CI
    • Automate testing and deployment processes
    • Implement security best practices
    • Monitor and optimize pipeline performance`,
    curriculum: [
      'Introduction to CI/CD',
      'Setting up Jenkins Pipelines',
      'GitHub Actions Workflows',
      'GitLab CI Pipeline Configuration',
      'Automated Testing Strategies',
      'Deployment Automation',
      'Pipeline Security',
      'Monitoring and Optimization'
    ],
    prerequisites: [
      'Basic understanding of version control (Git)',
      'Command line familiarity',
      'Basic programming knowledge'
    ],
    imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  'kubernetes-administration': {
    title: 'Kubernetes Administration',
    description: 'Learn to deploy, manage and scale containerized applications with Kubernetes.',
    level: 'Advanced',
    duration: '10 weeks',
    rating: 4.8,
    students: 1876,
    fullDescription: `Become a Kubernetes expert with our comprehensive administration course. You'll learn:

    • Kubernetes architecture and components
    • Cluster deployment and management
    • Application deployment strategies
    • Scaling and load balancing
    • Storage and networking
    • Security best practices`,
    curriculum: [
      'Kubernetes Architecture',
      'Cluster Setup and Management',
      'Pod and Container Management',
      'Services and Networking',
      'Storage Solutions',
      'Security and RBAC',
      'Monitoring and Logging',
      'Advanced Topics and Best Practices'
    ],
    prerequisites: [
      'Docker experience',
      'Linux administration skills',
      'Networking fundamentals'
    ],
    imageUrl: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
};

const CoursePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = slug ? courses[slug as keyof typeof courses] : null;

  if (!course) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
        <Link to="/" className="text-cyan hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      <div className="container">
        <Link to="/" className="inline-flex items-center text-cyan hover:underline mb-8">
          <ArrowLeft size={20} className="mr-2" />
          Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden mb-8">
              <img src={course.imageUrl} alt={course.title} className="w-full h-[400px] object-cover" />
            </div>

            <div className="mb-8">
              <span className="px-3 py-1 bg-navy inline-block rounded-full text-xs font-medium text-cyan border border-cyan/30 mb-4">
                {course.level}
              </span>
              <h1 className="text-4xl font-bold font-display mb-4">{course.title}</h1>
              <p className="text-gray-300 text-lg mb-6">{course.fullDescription}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6">Curriculum</h2>
              <div className="grid gap-4">
                {course.curriculum.map((item, index) => (
                  <div key={index} className="bg-navy-light p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-navy rounded-full flex items-center justify-center mr-4">
                        {index + 1}
                      </div>
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold font-display mb-6">Prerequisites</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {course.prerequisites.map((prereq, index) => (
                  <li key={index}>{prereq}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-navy-light rounded-2xl p-6 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <Clock size={20} className="text-cyan mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-cyan mr-2" />
                  <span>{course.students} students</span>
                </div>
              </div>

              <div className="flex items-center mb-8">
                <Star size={20} className="text-accent-yellow mr-2" fill="#FFD600" />
                <span className="text-xl font-bold">{course.rating}</span>
              </div>

              <button className="w-full btn-primary mb-4">
                Enroll Now
              </button>
              <button className="w-full btn-secondary">
                Download Syllabus
              </button>

              <div className="mt-8 pt-8 border-t border-gray-700">
                <h3 className="font-bold mb-4">What you'll get:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    Lifetime access to course content
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    Real-world project experience
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    Professional certification
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-cyan rounded-full mr-2"></div>
                    1-on-1 mentorship sessions
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

export default CoursePage;