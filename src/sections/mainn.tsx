// Updated Mainn.tsx with Contact section added after Sponsors
import React, { useState, useEffect, useRef } from 'react';
import MatrixLinesBackground from '../styles/mat';
import '../index.css';
import ProblematicPage from './sectionettes/prob';
import TopicsPage from './sectionettes/topic';
import ObjectivesPage from './sectionettes/obj';
import RegistrationFeesPage from './sectionettes/reg';
import CommitteeScientificPage from './sectionettes/committee';
import OrganizationCommitteePage from './sectionettes/com';
import LoginPage from './sectionettes/login';
import ImportantDatesPage from './sectionettes/important';
import SponsorsPage from './sectionettes/sponsors';
import ContactUsPage from './sectionettes/contact'; // Import the ContactUsPage component

// Define props for the Mainn component
interface MainnProps {
  initialActiveSection?: string;
}

const Mainn: React.FC<MainnProps> = ({ initialActiveSection = 'problematic' }) => {
  // Array of section components
  const sections = [
    { id: "problematic", component: <ProblematicPage />, name: "" },
    { id: "topic", component: <TopicsPage />, name:"" },
    { id: "objectives", component: <ObjectivesPage />, name: "" },
    { id: "registration-fees", component: <RegistrationFeesPage />, name: " " },
    { id: "scientific-committee", component: <CommitteeScientificPage />, name: " " },
    { id: "organization-committee", component: <OrganizationCommitteePage />, name: " " },
    { id: "login", component: <LoginPage />, name: " " },
    { id: "important-dates", component: <ImportantDatesPage />, name: " " },
    { id: "sponsors", component: <SponsorsPage />, name: "" },
    { id: "contact", component: <ContactUsPage />, name: "" } // Add ContactUsPage after SponsorsPage
  ];

  // Find the index of the initial active section
  const getInitialSectionIndex = () => {
    const index = sections.findIndex(section => section.id === initialActiveSection);
    return index >= 0 ? index : 0;
  };

  // State to track current section
  const [currentSection, setCurrentSection] = useState(getInitialSectionIndex());
  
  // Ref for the section content container
  const sectionContainerRef = useRef<HTMLDivElement>(null);
  
  // State to track if section has overflow
  const [, setHasOverflow] = useState(true); // Default to true to allow scrolling
  
  // State to track navbar visibility
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Update the current section when the initialActiveSection prop changes
  useEffect(() => {
    const index = sections.findIndex(section => section.id === initialActiveSection);
    if (index >= 0) {
      setCurrentSection(index);
    }
  }, [initialActiveSection]);
  
  // Check for overflow when section changes or window resizes
  useEffect(() => {
    checkForOverflow();
    
    // Force scroll to top immediately
    if (sectionContainerRef.current) {
      sectionContainerRef.current.scrollTop = 0;
    }
    window.scrollTo(0, 0);
    
    // Re-check on window resize
    const handleResize = () => {
      checkForOverflow();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Also check after content is loaded
    const timer = setTimeout(() => {
      checkForOverflow();
    }, 500);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [currentSection]);
  
  // Function to check if content overflows its container
  const checkForOverflow = () => {
    if (sectionContainerRef.current) {
      const container = sectionContainerRef.current;
      const hasContentOverflow = container.scrollHeight > container.clientHeight;
      setHasOverflow(hasContentOverflow || true); // Always allow scrolling
      
      // Always allow scrolling
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    }
  };

  // Navigation handlers
  const goToPrevSection = () => {
    setCurrentSection(prev => (prev > 0 ? prev - 1 : prev));
  };

  const goToNextSection = () => {
    setCurrentSection(prev => (prev < sections.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="relative bg-black min-h-screen w-full overflow-x-hidden">
      {/* Background animation */}
      <MatrixLinesBackground />

      <main className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Current section display */}
        <div className="w-full flex-grow flex flex-col">
          {/* Section content */}
          <div 
            ref={sectionContainerRef} 
            className="flex-grow w-full overflow-y-auto"
            style={{ 
              overflowX: 'hidden',
              minHeight: '100vh',
              paddingBottom: '80px', // Add bottom padding for navigation
            }}
            onMouseMove={(e) => {
              // Show navigation when mouse is near the bottom
              const threshold = window.innerHeight - 100;
              if (e.clientY > threshold) {
                setIsNavVisible(true);
              } else {
                setIsNavVisible(false);
              }
            }}
          >
            <section 
              id={sections[currentSection].id} 
              className="w-full py-16 px-4"
              style={{ 
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              {sections[currentSection].component}
            </section>
          </div>

          {/* Current section title indicator */}
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full z-40">
            {sections[currentSection].name}
          </div>

          {/* Fixed navigation controls at bottom with visibility toggle */}
          <div 
            className={`fixed bottom-0 left-0 w-full py-4 flex justify-between items-center px-8 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 z-50 ${
              isNavVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={() => setIsNavVisible(true)}
            onMouseLeave={() => setIsNavVisible(false)}
          >
            {/* Previous button */}
            <button 
              onClick={goToPrevSection}
              disabled={currentSection === 0}
              className={`font1 flex items-center space-x-2 px-4 py-2 ${
                currentSection === 0 
                ? 'text-gray-500 cursor-not-allowed' 
                : 'text-white hover:text-gray-300'
              } transition duration-300`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous</span>
            </button>

            {/* Next button */}
            <button 
              onClick={goToNextSection}
              disabled={currentSection === sections.length - 1}
              className={`font1 flex items-center space-x-2 px-4 py-2 ${
                currentSection === sections.length - 1 
                ? 'text-gray-500 cursor-not-allowed' 
                : 'text-white hover:text-gray-300'
              } transition duration-300`}
            >
              <span>Next</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Mainn;