import { useState, useEffect, useRef } from 'react';

export default function OrganizationCommitteePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [membersFadeIn, setMembersFadeIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up an intersection observer to detect when this component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Add a slight delay for the members animation
        setTimeout(() => {
          setMembersFadeIn(true);
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

  // Organization Chairman data
  const chairmen = [
    { title: "Pr.", name: "H. BENAMRANI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "M. FATMI", affiliation: "Setif 1 University, Algeria", country: "dz" }
  ];

  // Organization Committee Members data with country codes
  const committeeMembers = [
    { title: "Dr.", name: "S. ABACI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "Y. SLIMANI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "N. BOUNEDJAR", affiliation: "University of El Oued, Algeria", country: "dz" },
    { title: "Dr.", name: "A. BENYAHIA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "M. REFFAS", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "R. AOUABED", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "Z. BENNEGHMOUCHE", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "N. GHARZOULI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "N. BELKHAM", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "K. HADDADI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "D. BELFENNACHE", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "O. ZERGUINE", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "A. MESSALTI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "R. YEKHLEF", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "Y. MEDKOUR", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "B. BARKA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "F. GAIDI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "Y. BELLAL", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "M. LATOUI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "R. BENRAMDANE", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "H. MANSOURI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "L. MEKHICHE", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "O. BOUKHENFOUF", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "A. GHAMES", affiliation: "Setif 1 University, Algeria", country: "dz" }
  ];
  
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col font1 items-center justify-center min-h-screen bg-black p-4 w-full overflow-hidden"
    >
      <div className="flex flex-col w-full max-w-6xl gap-8 items-center px-4 md:px-8 mx-auto text-center">
      <h1 
          className={`text-4xl md:text-6xl font-bold mb-12 text-yellow-500 transform transition-all duration-1000 ease-out text-center w-full ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          ORGANIZING COMMITTEE
        </h1>
        
        {/* Organization Chairman Section */}
        <div 
          className={`w-full transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
            ORGANIZING CHAIRMAN
          </h2>
          
          {/* Explicitly render each chairman separately for vertical layout */}
          <div className="mb-12 mx-auto w-full max-w-lg">
            {/* First Chairman */}
            <div 
              className="rounded-xl border border-yellow-500/30 p-6 backdrop-blur-sm bg-gradient-to-br from-purple-900/30 to-purple-700/10 text-center mb-6"
              style={{ boxShadow: '0 8px 32px rgba(212, 175, 55, 0.1)' }}
            >
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold text-white">{chairmen[0].title}</span>
                <span className="text-xl ml-2 text-white">{chairmen[0].name}</span>
                <img 
                  src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${chairmen[0].country}.svg`} 
                  alt={`Flag of ${chairmen[0].country}`}
                  className="w-5 h-4 ml-2 rounded-sm shadow-sm"
                />
              </div>
              <p className="text-gray-300 mt-2">{chairmen[0].affiliation}</p>
            </div>

            {/* Second Chairman */}
            <div 
              className="rounded-xl border border-yellow-500/30 p-6 backdrop-blur-sm bg-gradient-to-br from-purple-900/30 to-purple-700/10 text-center"
              style={{ boxShadow: '0 8px 32px rgba(212, 175, 55, 0.1)' }}
            >
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold text-white">{chairmen[1].title}</span>
                <span className="text-xl ml-2 text-white">{chairmen[1].name}</span>
                <img 
                  src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${chairmen[1].country}.svg`} 
                  alt={`Flag of ${chairmen[1].country}`}
                  className="w-5 h-4 ml-2 rounded-sm shadow-sm"
                />
              </div>
              <p className="text-gray-300 mt-2">{chairmen[1].affiliation}</p>
            </div>
          </div>
        </div>
        
        {/* Organization Committee Members Section */}
        <div 
          className={`w-full transform transition-all duration-1000 ease-out ${
            membersFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
            ORGANIZING COMMITTEE MEMBERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto w-full">
            {committeeMembers.map((member, index) => (
              <div 
                key={index}
                className="rounded-lg border border-yellow-500/20 p-4 backdrop-blur-sm bg-gradient-to-br from-green-900/20 to-green-700/5 hover:from-green-900/30 hover:to-green-700/10 transition-all duration-300 text-center"
                style={{ 
                  boxShadow: '0 4px 16px rgba(212, 175, 55, 0.05)',
                  animationDelay: `${index * 50}ms`,
                  transitionDelay: `${(index % 10) * 50}ms`
                }}
              >
                <div className="flex items-center justify-center">
                  <span className="text-lg font-bold text-yellow-500">{member.title}</span>
                  <span className="text-lg ml-2 text-white">{member.name}</span>
                  <img 
                    src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${member.country}.svg`} 
                    alt={`Flag of ${member.country}`}
                    className="w-5 h-4 ml-2 rounded-sm shadow-sm"
                  />
                </div>
                <p className="text-gray-400 text-sm mt-1">{member.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}