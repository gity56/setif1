// Updated Mainn.tsx with fixed alignment for committee sections
import React, { useState, useEffect, useRef } from 'react';
import MatrixLinesBackground from '../styles/mat';
import '../index.css';
import ProblematicPage from './sectionettes/prob';
import TopicsPage from './sectionettes/topic';
import ObjectivesPage from './sectionettes/obj';
import RegistrationFeesPage from './sectionettes/reg';
import CommitteeScientificPage from './sectionettes/committee';
import OrganizationCommitteePage from './sectionettes/com';
import SponsorsPage from './sectionettes/sponsors';

// Define props for the Mainn component
interface MainnProps {
  initialActiveSection?: string;
}

const Mainn: React.FC<MainnProps> = ({ initialActiveSection = 'problematic' }) => {
  // Array of section components
  const sections = [
    { id: "problematic", component: <ProblematicPage />, name: "Problematic" },
    { id: "topic", component: <TopicsPage />, name: "Topics" },
    { id: "objectives", component: <ObjectivesPage />, name: "Objectives" },
    { id: "registration-fees", component: <RegistrationFeesPage />, name: "Registration Fees" },
    { id: "scientific-committee", component: <CommitteeScientificPage />, name: "Scientific Committee" },
    { id: "organization-committee", component: <OrganizationCommitteePage />, name: "Organization Committee" },
    { id: "sponsors", component: <SponsorsPage />, name: "Sponsors" }
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
  const [hasOverflow, setHasOverflow] = useState(false);
  
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
    
    // Force scroll to top immediately and after a slight delay
    if (sectionContainerRef.current) {
      sectionContainerRef.current.scrollTop = 0;
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      
      // Also force scroll after content has time to render
      setTimeout(() => {
        if (sectionContainerRef.current) {
          sectionContainerRef.current.scrollTop = 0;
        }
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);
    }
    
    // Re-check on window resize
    const handleResize = () => {
      checkForOverflow();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Also check after a short delay to account for any dynamic content loading
    const timer = setTimeout(() => {
      checkForOverflow();
      
      // Force scroll to top again after content is fully loaded
      if (sectionContainerRef.current) {
        sectionContainerRef.current.scrollTop = 0;
      }
      window.scrollTo(0, 0);
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
      setHasOverflow(hasContentOverflow);
      
      // Apply or remove overflow based on content
      document.documentElement.style.overflow = hasContentOverflow ? 'auto' : 'hidden';
      document.body.style.overflow = hasContentOverflow ? 'auto' : 'hidden';
      
      // Ensure no right padding is pushing the scrollbar away from edge
      if (hasContentOverflow) {
        document.documentElement.style.paddingRight = '0';
        document.body.style.paddingRight = '0';
      }
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
    <div className="relative bg-black min-h-screen h-screen w-full overflow-hidden" style={{ padding: 0, margin: 0, maxWidth: '100vw' }}>
      {/* Background animation */}
      <MatrixLinesBackground />

      <main className="relative z-10 w-full h-full flex flex-col" style={{ padding: 0, margin: 0 }}>
        {/* Current section display */}
        <div className="w-full h-full flex flex-col" style={{ padding: 0, margin: 0 }}>
          {/* Section content with dynamic overflow */}
          <div 
            ref={sectionContainerRef} 
            className="flex-grow w-full"
            style={{ 
              overflowY: hasOverflow ? 'auto' : 'hidden',
              overflowX: 'hidden',
              height: '100vh', // Use full viewport height
              position: 'relative',
              maxWidth: '100vw',
              padding: 0,
              margin: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none' // IE and Edge
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
              className="w-full"
              style={{ 
                padding: '2rem 1rem 4rem 1rem',
                margin: 0,
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

          {/* Fixed navigation controls at bottom with visibility toggle */}
          <div 
            className={`fixed bottom-0 left-0 w-full py-4 flex justify-between items-center px-8 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity duration-300 z-50 ${
              isNavVisible ? 'opacity-100' : 'opacity-0'
            }`}
            onMouseEnter={() => setIsNavVisible(true)}
            onMouseLeave={() => setIsNavVisible(false)}
            style={{ margin: 0 }}
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