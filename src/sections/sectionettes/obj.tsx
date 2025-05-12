import { useState, useEffect, useRef } from 'react';
import '../../index.css'
export default function ObjectivesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [textFadeIn, setTextFadeIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up an intersection observer to detect when this component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Add a slight delay for the text animation to create a sequence effect
        setTimeout(() => {
          setTextFadeIn(true);
        }, 500);
      }
    }, { threshold: 0.2 });
    
    // Get the current element to observe
    const element = sectionRef.current;
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col font1  items-center justify-center min-h-screen bg-black p-4 w-full overflow-hidden"
    >
      <div className="flex flex-col  md:flex-row w-full max-w-6xl  gap-8 items-center px-4 md:px-8">
        <div className="md:w-1/2 space-y-6">
          <h1 
            className={`text-4xl md:text-6xl font-bold  text-yellow-500 transform transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            OBJECTIVES
          </h1>
          
          <div className="text-gray-200 text-xl md:text-xl space-y-6">
            <p 
              className={`transform transition-all duration-1000 delay-300 ease-out ${
                textFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              The main objective of <strong>the 1 st International Congress on Innovations in Chemistry and
              Technology (ICICT-2025)</strong> is to promote the exchange of knowledge, experiences, and
              innovations among researchers, industrialists, and stakeholders in technological development,
              focusing on emerging topics related to sustainable chemistry, green energy, artificial
              intelligence for environmental protection, and advanced materials technologies.
            </p>
            
            <p 
              className={`transform transition-all duration-1000 delay-500 ease-out ${
                textFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
            By bringing together experts from various disciplines, this scientific meeting aims to stimulate
            applied research, encourage the establishment of interdisciplinary partnerships, and promote
            innovative solutions that address current challenges in sustainability and energy transition.
            Through oral presentations, poster sessions, and interactive discussions, <strong>ICICT-2025</strong> seeks to
            actively contribute to the emergence of science that supports cleaner, smarter, and more
            responsible industrial development.
            </p>
          </div>
        </div>
        
        <div 
          className={`md:w-1/2 transform -mt-28 transition-all duration-1200 ease-out ${
            isVisible ? 'translate-x-0 scale-100 opacity-100' : 'translate-x-full scale-90 opacity-0'
          }`}
        >
          <img 
            src="/p002.png" 
            alt="Steps to success illustration" 
            className="w-full max-w-lg mx-auto mt-32 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  );
}