// Updated Navbar component with home navigation to Entete instead of refresh
import React, { useState, useEffect } from 'react';
import '../index.css';

interface NavbarProps {
  onNavigateToSection: (sectionId: string) => void;
  onNavigateToEntete?: () => void; // New prop for navigating to Entete
}

const Navbar: React.FC<NavbarProps> = ({ onNavigateToSection, onNavigateToEntete }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('problematic');

  // Close sidebar when clicking outside
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

  // Navigation Items
  const navItems = [
    { id: 'home', label: 'Home' }, // Home navigation item now goes to Entete
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

  // Handle navigation click
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Special case for home to navigate to Entete
    if (sectionId === 'home') {
      if (onNavigateToEntete) {
        onNavigateToEntete(); // Navigate to Entete page
      }
      return;
    }
    
    onNavigateToSection(sectionId);
    setIsSidebarOpen(false); // Close sidebar after navigation
  };

  return (
    <>
      {/* Hamburger Menu Button - Only visible when sidebar is closed */}
      <button
        className={`fixed top-4 left-4 z-50 p-2 rounded-md focus:outline-none hover:bg-black hover:bg-opacity-30 transition-all duration-300 ${
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

      {/* Sidebar Navigation - Only visible when toggled, now with scrolling */}
      <div
        className={`sidebar fixed top-0 left-0 h-full w-64 z-40 transform transition-transform duration-300 ease-in-out shadow-lg ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
        style={{ backgroundColor: '#222831' }} // Changed to dark navy color
      >
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* Logo/Brand at the top of sidebar - fixed position */}
        <div className="py-6 border-b border-gray-700">
          <div className="flex justify-center items-center">
            <img 
              src="/sp1.png" 
              alt="University Logo" 
              className="h-26 w-auto"
            />
          </div>
        </div>

        {/* Scrollable Navigation Links Container */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col py-4">
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-3 text-left transition-colors duration-300 hover-custom ${
                  activeSection === item.id 
                    ? 'text-white font-bold bg-gray-700' 
                    : 'text-gray-200 hover:text-white'
                }`}
                style={{ 
                  color: '#EEEEEE', // Light text color
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;