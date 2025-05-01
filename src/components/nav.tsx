// components/nav.tsx
import React from 'react';

const Navbar: React.FC = () => {
  // Function to smoothly scroll to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/p1.png" 
              alt="University Logo" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="hidden md:flex space-x-6">
            <button 
              onClick={() => scrollToSection('problematic')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Problematic
            </button>
            <button 
              onClick={() => scrollToSection('topic')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Topics
            </button>
            <button 
              onClick={() => scrollToSection('objectives')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Objectives
            </button>
            <button 
              onClick={() => scrollToSection('registration-fees')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Registration
            </button>
            <button 
              onClick={() => scrollToSection('scientific-committee')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Scientific Committee
            </button>
            <button 
              onClick={() => scrollToSection('organization-committee')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Organization
            </button>
            <button 
              onClick={() => scrollToSection('sponsors')}
              className="text-white hover:text-green-400 transition-colors"
            >
              Sponsors
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;