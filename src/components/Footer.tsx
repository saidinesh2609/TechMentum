import React from 'react';
import { Terminal, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, Compass } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Demo Class', href: '#demo' },
    { name: 'Success Stories', href: '#testimonials' }
  ];
  
  const courses = [
    { name: 'DevOps Foundations', href: '#' },
    { name: 'CI/CD Pipeline Mastery', href: '#' },
    { name: 'Kubernetes Administration', href: '#' },
    { name: 'AWS DevOps Professional', href: '#' },
    { name: 'Docker Mastery', href: '#' },
    { name: 'Terraform & IaC', href: '#' }
  ];
  
  const resources = [
    { name: 'DevOps Blog', href: '#' },
    { name: 'Free Tutorials', href: '#' },
    { name: 'Career Resources', href: '#' },
    { name: 'DevOps Tools Guide', href: '#' },
    { name: 'Certification Paths', href: '#' },
    { name: 'FAQs', href: '#' }
  ];
  
  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', name: 'Facebook' },
    { icon: <Twitter size={18} />, href: '#', name: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram size={18} />, href: '#', name: 'Instagram' },
    { icon: <Youtube size={18} />, href: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-navy-dark pt-16 pb-8" id="contact">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Terminal className="text-cyan" size={32} />
              <span className="font-display font-bold text-2xl">
                Tech<span className="text-cyan">mentum</span>
              </span>
            </div>
            
            <p className="text-gray-300 mb-6">
              The premier DevOps training platform for tech professionals looking to advance their careers and master modern infrastructure tools and practices.
            </p>
            
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center hover:bg-cyan/20 hover:text-cyan transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-cyan transition-colors flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan mr-2"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a href={course.href} className="text-gray-300 hover:text-cyan transition-colors flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan mr-2"></div>
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href} className="text-gray-300 hover:text-cyan transition-colors flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan mr-2"></div>
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-gray-800">
          <div className="flex items-start">
            <Mail className="text-cyan mr-3 flex-shrink-0 mt-1" size={18} />
            <div>
              <h4 className="font-bold mb-1">Email Us</h4>
              <a href="mailto:contact@techmentum.com" className="text-gray-300 hover:text-cyan transition-colors">
                contact@techmentum.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="text-cyan mr-3 flex-shrink-0 mt-1" size={18} />
            <div>
              <h4 className="font-bold mb-1">Call Us</h4>
              <a href="tel:+12025551234" className="text-gray-300 hover:text-cyan transition-colors">
                +1 (202) 555-1234
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="text-cyan mr-3 flex-shrink-0 mt-1" size={18} />
            <div>
              <h4 className="font-bold mb-1">Visit Us</h4>
              <address className="text-gray-300 not-italic">
                1234 Tech Avenue, Suite 500<br />
                San Francisco, CA 94107
              </address>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-gray-400 text-sm">
            &copy; {currentYear} Techmentum. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-cyan transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-cyan transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;