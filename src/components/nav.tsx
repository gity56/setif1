// Updated Navbar component with visibility control
// Replace your current Navbar component with this code

import React, { useState, useEffect } from 'react';
import '../index.css';

interface NavbarProps {
  onNavigateToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
      
      // Show navbar when mouse is near the top of the screen
      if (e.clientY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Hide navbar when scrolling down, show when scrolling up
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // Navigation Items
  const navItems = [
    { id: 'problematic', label: 'Problematic' },
    { id: 'topic', label: 'Topics' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'registration-fees', label: 'Registration Fees' },
    { id: 'scientific-committee', label: 'Scientific committee' },
    { id: 'organization-committee', label: 'Organization committee' },
    { id: 'sponsors', label: 'Sponsors' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => mouseY > 100 && setIsVisible(false)}
    >
      <div className="bg-black bg-opacity-30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Brand */}

            <div className="flex items-center">
            <img 
              src="/sp1.png" 
              alt="University Logo" 
              className="h-14 w-auto"
            />
          </div>
            {/* Navigation Links */}
            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <button 
                  key={item.id}
                  onClick={() => onNavigateToSection(item.id)}
                  className="text-white hover:text-green-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-white focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;