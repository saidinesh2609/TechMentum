import React, { useState } from 'react';
import { Calendar, Mail, ChevronRight } from 'lucide-react';

const DemoClassCta: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };
  
  return (
    <section className="section bg-navy-dark" id="demo">
      <div className="container">
        <div className="relative bg-gradient-to-br from-cyan/10 to-purple/10 rounded-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 py-16 px-8 md:p-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-3/5 mb-10 md:mb-0 text-center md:text-left">
                <div className="inline-flex items-center px-4 py-2 bg-navy rounded-full mb-6">
                  <Calendar size={16} className="text-cyan mr-2" />
                  <span className="text-sm">Next Demo: November 12, 2025</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                  Not sure where to start? <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple">
                    Join our free Demo Class
                  </span>
                </h2>
                
                <p className="text-gray-300 text-lg mb-8 max-w-lg">
                  Get a taste of our teaching style, meet our instructors, and learn how our courses 
                  can help you achieve your DevOps career goals.
                </p>
                
                <ul className="space-y-3 mb-8 max-w-md mx-auto md:mx-0">
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan mr-3"></div>
                    <span>Introduction to DevOps principles and career paths</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan mr-3"></div>
                    <span>Live Q&A with senior DevOps engineers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-cyan mr-3"></div>
                    <span>Special enrollment offers for attendees</span>
                  </li>
                </ul>
              </div>
              
              <div className="w-full md:w-2/5 md:ml-10">
                <div className="bg-navy p-8 rounded-xl border border-gray-800">
                  <h3 className="text-xl font-bold font-display mb-6 text-center">
                    Reserve Your Spot
                  </h3>
                  
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail size={16} className="text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full py-3 pl-10 pr-4 bg-navy-dark border border-gray-700 rounded-lg focus:outline-none focus:border-cyan text-white"
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full py-3 px-4 bg-navy-dark border border-gray-700 rounded-lg focus:outline-none focus:border-cyan text-white"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full btn-primary mt-2"
                      >
                        Reserve Your Spot <ChevronRight size={16} className="inline ml-1" />
                      </button>
                      
                      <p className="text-xs text-gray-400 text-center mt-4">
                        By signing up, you agree to our <a href="#" className="text-cyan">Terms</a> and <a href="#" className="text-cyan">Privacy Policy</a>.
                      </p>
                    </form>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ChevronRight size={24} className="text-cyan" />
                      </div>
                      <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                      <p className="text-gray-300 mb-4">
                        You're registered for our upcoming demo class. Check your email for confirmation and details.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-cyan hover:underline"
                      >
                        Register another person
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoClassCta;