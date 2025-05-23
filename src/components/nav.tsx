import React, { useState, useEffect } from 'react';
import '../index.css';

interface NavbarProps {
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToEntete?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateToSection, onNavigateToEntete }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('problematic');

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isSidebarOpen && !target.closest('.sidebar') && !target.closest('.hamburger-icon')) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'problematic', label: 'Problematic' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'topic', label: 'Topics' },
    { id: 'registration-fees', label: 'Registration Fees' },
    { id: 'scientific-committee', label: 'Scientific Committee' },
    { id: 'organization-committee', label: 'Organizing Committee' },
    { id: 'login', label: 'Login' },
    { id: 'important-dates', label: 'Important Dates' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);

    if (sectionId === 'home') {
      if (onNavigateToEntete) {
        onNavigateToEntete();
      }
      return;
    }

    onNavigateToSection(sectionId);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <button
        className={`fixed top-4 left-4 z-50 p-2 rounded-md bg-[#222831] focus:outline-none transition-all duration-300 ${
          isSidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Open menu"
      >
        <div className="hamburger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </button>


      <div
        className={`sidebar fixed top-0 left-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out shadow-lg ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
        style={{ backgroundColor: '#222831' }}
      >
      <button 
        className="absolute top-4 right-4 p-2 rounded-md bg-[#222831] text-white hover:text-gray-300 focus:outline-none border border-gray-600 shadow-md"
        onClick={() => setIsSidebarOpen(false)}
        aria-label="Close menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
            

        <div className="py-6 border-b border-gray-700">
          <div className="flex justify-center items-center">
            <img 
              src="/sp1.png" 
              alt="University Logo" 
              className="h-26 w-auto"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col py-4">
            {navItems.map(item => (
              <div key={item.id} className="relative group mx-2">
                <button 
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full px-4 py-3 text-left transition-colors duration-300 rounded-none ${
                    activeSection === item.id 
                      ? 'text-white font-bold' 
                      : 'text-gray-200 hover:text-white'
                  }`}
                  style={{ 
                    color: activeSection === item.id ? '#FFFFFF' : '#EEEEEE',
                    background: 'transparent',
                  }}
                >
                  {item.label}
                </button>

                {/* Active underline */}
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 origin-left transform transition-transform duration-300 ${
                    activeSection === item.id ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  style={{
                    backgroundColor: '#00ADB5',
                    width: '100%',
                  }}
                />

                {/* Hover underline */}
                <div 
                  className="absolute bottom-0 left-0 h-0.5 group-hover:h-1 origin-left transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"
                  style={{
                    backgroundColor: '#00ADB5',
                    width: '100%',
                    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
