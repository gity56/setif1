// Updated Navbar component with improved navigation handling
import React, { useState, useEffect } from 'react';
import '../index.css';

interface NavbarProps {
  onNavigateToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateToSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mouseY, setMouseY] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [activeSection, setActiveSection] = useState('problematic');

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
    { id: 'scientific-committee', label: 'Scientific Committee' },
    { id: 'organization-committee', label: 'Organization Committee' },
    { id: 'sponsors', label: 'Sponsors' }
  ];

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    onNavigateToSection(sectionId);
  };

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
                  onClick={() => handleNavClick(item.id)}
                  className={`text-white transition-colors duration-300 ${
                    activeSection === item.id ? 'text-green-400 font-bold' : 'hover:text-green-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden relative">
              <button 
                className="text-white focus:outline-none"
                onClick={() => setIsVisible(prev => !prev)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
              
              {/* Mobile menu dropdown */}
              <div className={`absolute right-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg py-1 ${
                isVisible ? 'block' : 'hidden'
              }`}>
                {navItems.map(item => (
                  <button 
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block px-4 py-2 text-sm w-full text-left ${
                      activeSection === item.id ? 'text-green-400 font-bold' : 'text-white hover:text-green-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;