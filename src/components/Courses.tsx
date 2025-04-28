import React from 'react';
import { ChevronRight, Star, Clock, Users } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  isFeatured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  level,
  duration,
  rating,
  students,
  isFeatured = false
}) => {
  return (
    <div className={`card overflow-hidden group ${isFeatured ? 'card-highlight' : ''}`}>
      {isFeatured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan to-purple px-3 py-1 rounded-full text-xs font-medium">
          Featured
        </div>
      )}
      
      <div className="mb-4">
        <span className="px-3 py-1 bg-navy inline-block rounded-full text-xs font-medium text-cyan border border-cyan/30">
          {level}
        </span>
      </div>
      
      <h3 className="text-xl font-bold font-display mb-3 group-hover:text-cyan transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 mb-6 text-sm">{description}</p>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-1">
          <Clock size={16} className="text-gray-400" />
          <span className="text-sm text-gray-300">{duration}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Star size={16} className="text-accent-yellow" />
            <span className="text-sm ml-1">{rating}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="text-gray-400" />
            <span className="text-sm ml-1">{students}</span>
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-700">
        <a href="#" className="inline-flex items-center text-cyan font-medium group-hover:translate-x-1 transition-transform">
          Learn More <ChevronRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const courses = [
    {
      title: 'CI/CD Pipeline Mastery',
      description: 'Build and automate robust CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI.',
      level: 'Intermediate',
      duration: '8 weeks',
      rating: 4.9,
      students: 2483,
      isFeatured: true
    },
    {
      title: 'Kubernetes Administration',
      description: 'Learn to deploy, manage and scale containerized applications with Kubernetes.',
      level: 'Advanced',
      duration: '10 weeks',
      rating: 4.8,
      students: 1876
    },
    {
      title: 'AWS DevOps Professional',
      description: 'Master AWS services for implementing DevOps principles and practices in the cloud.',
      level: 'Advanced',
      duration: '12 weeks',
      rating: 4.7,
      students: 3214
    },
    {
      title: 'DevOps Foundations',
      description: 'Your first step into DevOps philosophy, tools, and practices for beginners.',
      level: 'Beginner',
      duration: '6 weeks',
      rating: 4.9,
      students: 5692
    }
  ];

  return (
    <section className="section" id="courses">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Top <span className="text-cyan">DevOps</span> Courses</h2>
          <p className="section-subtitle mx-auto">
            Carefully crafted learning paths to help you master modern DevOps skills and advance your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              level={course.level}
              duration={course.duration}
              rating={course.rating}
              students={course.students}
              isFeatured={course.isFeatured}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-secondary">
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;