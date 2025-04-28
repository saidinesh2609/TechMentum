import React from 'react';
import Hero from '../components/Hero';
import WhyChoose from '../components/WhyChoose';
import Courses from '../components/Courses';
import Certifications from '../components/Certifications';
import HowItWorks from '../components/HowItWorks';
import DemoClassCta from '../components/DemoClassCta';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Courses />
      <Certifications />
      <HowItWorks />
      <DemoClassCta />
      <Testimonials />
      <About />
    </>
  );
};

export default HomePage;