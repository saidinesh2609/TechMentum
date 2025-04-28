import React from 'react';
import WhyChoose from '../components/WhyChoose';
import Courses from '../components/Courses';
import DemoClassCta from '../components/DemoClassCta';

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-24">
      <WhyChoose />
      <Courses />
      <DemoClassCta />
    </div>
  );
};

export default CoursesPage;