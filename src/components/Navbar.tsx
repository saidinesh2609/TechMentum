import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Terminal className="text-cyan" size={32} />
          <span className="font-display font-bold text-2xl">
            Tech<span className="text-cyan">mentum</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-white hover:text-cyan transition-colors ${location.pathname === '/' ? 'text-cyan' : ''}`}>Home</Link>
          <Link to="/about" className={`text-white hover:text-cyan transition-colors ${location.pathname === '/about' ? 'text-cyan' : ''}`}>About</Link>
          <Link to="/courses" className={`text-white hover:text-cyan transition-colors ${location.pathname === '/courses' ? 'text-cyan' : ''}`}>Courses</Link>
          <Link to="/certifications" className={`text-white hover:text-cyan transition-colors ${location.pathname === '/certifications' ? 'text-cyan' : ''}`}>Certifications</Link>
          <Link to="/demo" className={`text-white hover:text-cyan transition-colors ${location.pathname === '/demo' ? 'text-cyan' : ''}`}>Demo Class</Link>
          <Link to="/contact" className={`text-white hover:text-cyan transition-colors ${location.pathname === '/contact' ? 'text-cyan' : ''}`}>Contact</Link>
          <button className="px-4 py-2 text-cyan border border-cyan rounded-lg hover:bg-cyan/10 transition-colors">
            Login
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-navy-dark absolute top-full left-0 right-0 border-t border-gray-800 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <Link to="/" className="text-white py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-white py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/courses" className="text-white py-2" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/certifications" className="text-white py-2" onClick={() => setIsOpen(false)}>Certifications</Link>
            <Link to="/demo" className="text-white py-2" onClick={() => setIsOpen(false)}>Demo Class</Link>
            <Link to="/contact" className="text-white py-2" onClick={() => setIsOpen(false)}>Contact</Link>
            
            <div className="pt-4 border-t border-gray-800">
              <button className="w-full py-2 text-cyan border border-cyan rounded-lg hover:bg-cyan/10 transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;