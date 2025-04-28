import React from 'react';
import DemoClassCta from '../components/DemoClassCta';
import WhyChoose from '../components/WhyChoose';

const DemoPage: React.FC = () => {
  return (
    <div className="pt-24">
      <DemoClassCta />
      <WhyChoose />
    </div>
  );
};

export default DemoPage;