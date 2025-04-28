import React from 'react';
import Certifications from '../components/Certifications';
import HowItWorks from '../components/HowItWorks';

const CertificationsPage: React.FC = () => {
  return (
    <div className="pt-24">
      <Certifications />
      <HowItWorks />
    </div>
  );
};

export default CertificationsPage;