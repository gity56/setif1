import { useState, useEffect, useRef } from 'react';
import '../../index.css'

export default function SponsorsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [logosFadeIn, setLogosFadeIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up an intersection observer to detect when this component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Add a slight delay for the logos animation
        setTimeout(() => {
          setLogosFadeIn(true);
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

  // Sponsors data
  const sponsors = [
    {
      name: "Madjour Plast",
      logo: "/sp3.png", // Replace with the actual path: "/madjour-plast-logo.png"
      website: "www.madjourplast.com",
      tier: "platinum"
    },
    {
      name: "Fouara",
      logo: "/sp4.png", // Replace with the actual path: "/fouara-logo.png"
      website: "www.fouara.com",
      tier: "gold"
    },
    {
      name: "Zaim",
      logo: "/sp2.png", // Replace with the actual path: "/zaim-logo.png"
      website: "www.zaim.dz",
      tier: "silver"
    }
  ];
  
  return (
    <div 
      ref={sectionRef}
      className="flex -mt-32 flex-col font1 items-center justify-center min-h-screen bg-black p-4 w-full"
    >
      <div className="flex flex-col w-full max-w-6xl gap-8 items-center justify-center px-4 md:px-8 mx-auto text-center">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-12 text-yellow-500 transform transition-all duration-1000 ease-out text-center w-full ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          MEET OUR SPONSORS
        </h1>
        
        {/* Decorative elements */}
        <div className="absolute w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 text-8xl">✧</div>
          <div className="absolute bottom-1/4 right-1/4 text-8xl">✧</div>
          <div className="absolute top-3/4 left-2/3 text-6xl">❖</div>
          <div className="absolute bottom-2/3 right-1/3 text-6xl">❖</div>
        </div>
        
        {/* Sponsors Grid - Centered with consistent spacing */}
        <div 
          className={`w-full flex flex-wrap justify-center items-center gap-12 transform transition-all duration-1000 ease-out ${
            logosFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center justify-center rounded-xl p-6 mx-auto backdrop-blur-sm transition-all duration-500 hover:scale-105 ${
                sponsor.tier === 'platinum' 
                  ? 'border-2 border-yellow-400/50 bg-gradient-to-br from-yellow-900/20 to-yellow-700/10' 
                  : sponsor.tier === 'gold'
                    ? 'border-2 border-yellow-500/30 bg-gradient-to-br from-yellow-800/20 to-yellow-600/10'
                    : 'border border-yellow-500/20 bg-gradient-to-br from-blue-900/20 to-blue-700/10'
              }`}
              style={{ 
                boxShadow: sponsor.tier === 'platinum' 
                  ? '0 8px 32px rgba(212, 175, 55, 0.15)' 
                  : '0 8px 32px rgba(212, 175, 55, 0.1)',
                transitionDelay: `${index * 150}ms`,
                width: '280px', // Fixed width for consistent sizing
                margin: '0 auto' // Center each card
              }}
            >
              <div className="h-48 w-48 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-white/5 p-4 mx-auto">
                <img 
                  src={sponsor.logo} 
                  alt={`${sponsor.name} logo`} 
                  className="max-h-full max-w-full object-contain drop-shadow-lg mx-auto"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 text-center w-full">{sponsor.name}</h3>
              
              <a 
                href={`https://${sponsor.website}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm text-yellow-500 hover:text-yellow-400 transition-colors text-center w-full"
              >
                {sponsor.website}
              </a>
              
              <div 
                className={`mt-4 py-1 px-3 rounded-full text-xs font-semibold text-center w-full mx-auto ${
                  sponsor.tier === 'platinum' 
                    ? 'bg-yellow-500/20 text-yellow-300' 
                    : sponsor.tier === 'gold'
                      ? 'bg-yellow-600/20 text-yellow-400'
                      : 'bg-blue-500/20 text-blue-300'
                }`}
              >
                {sponsor.tier.toUpperCase()} SPONSOR
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add style element for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{
        __html: `
          body {
            overflow-x: hidden;
          }
          /* Hide scrollbar for Chrome, Safari and Opera */
          ::-webkit-scrollbar {
            display: none;
          }
          /* Hide scrollbar for IE, Edge and Firefox */
          html {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
        `
      }} />
    </div>
  );
}