import React from 'react';
import { Quote, Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  imageUrl: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  company,
  testimonial,
  rating,
  imageUrl
}) => {
  return (
    <div className="bg-navy rounded-2xl p-8 relative group hover:shadow-lg hover:shadow-cyan/10 transition-all duration-300">
      <div className="absolute top-0 left-8 -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-cyan to-purple rounded-full flex items-center justify-center">
        <Quote size={16} className="text-white" />
      </div>
      
      <div className="mb-6 pt-4">
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={16} className="text-accent-yellow mr-1" fill="#FFD600" />
          ))}
        </div>
      </div>
      
      <p className="text-gray-300 mb-6 italic">"{testimonial}"</p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-300">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "DevOps Engineer",
      company: "CloudTech Solutions",
      testimonial: "Techmentum's CI/CD Pipeline Mastery course helped me secure a senior role. The hands-on projects and personalized mentorship were game-changers for my career.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      role: "Cloud Architect",
      company: "InnovateSys",
      testimonial: "After completing the Kubernetes Administration course, I was able to lead my company's container orchestration strategy. The real-world scenarios prepared me for actual challenges.",
      rating: 5,
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Priya Patel",
      role: "SRE Lead",
      company: "TechForward",
      testimonial: "The AWS DevOps Professional course was comprehensive and up-to-date. Within three months of completion, I received a 30% salary increase. Worth every penny!",
      rating: 4,
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="section bg-navy relative overflow-hidden" id="testimonials">
      <div className="absolute w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] -top-64 right-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple/5 rounded-full blur-[100px] bottom-0 left-20"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our <span className="text-cyan">Students</span> Say</h2>
          <p className="section-subtitle mx-auto">
            Hear from professionals who transformed their careers through our DevOps training programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
              imageUrl={testimonial.imageUrl}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="btn-secondary">
            Read More Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;