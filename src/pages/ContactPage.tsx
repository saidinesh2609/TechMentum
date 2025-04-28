import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="section-title">Get in <span className="text-cyan">Touch</span></h1>
            <p className="section-subtitle mx-auto">
              Have questions? We're here to help you start your DevOps journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-navy-light p-8 rounded-xl text-center">
              <Mail className="text-cyan mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:contact@techmentum.com" className="text-gray-300 hover:text-cyan transition-colors">
                contact@techmentum.com
              </a>
            </div>

            <div className="bg-navy-light p-8 rounded-xl text-center">
              <Phone className="text-cyan mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <a href="tel:+12025551234" className="text-gray-300 hover:text-cyan transition-colors">
                +1 (202) 555-1234
              </a>
            </div>

            <div className="bg-navy-light p-8 rounded-xl text-center">
              <MapPin className="text-cyan mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <address className="text-gray-300 not-italic">
                1234 Tech Avenue, Suite 500<br />
                San Francisco, CA 94107
              </address>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full py-3 px-4 bg-navy-dark border border-gray-700 rounded-lg focus:outline-none focus:border-cyan"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full py-3 px-4 bg-navy-dark border border-gray-700 rounded-lg focus:outline-none focus:border-cyan"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full py-3 px-4 bg-navy-dark border border-gray-700 rounded-lg focus:outline-none focus:border-cyan"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full py-3 px-4 bg-navy-dark border border-gray-700 rounded-lg focus:outline-none focus:border-cyan"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;