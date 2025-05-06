import { useState, useEffect, useRef } from 'react';
import '../../index.css'

export default function CommitteeScientificPage() {
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

  // Scientific Chairman data
  const chairmen = [
    { title: "Pr.", name: "K. AOUACHRIA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "M. HAMICI", affiliation: "Setif 1 University, Algeria", country: "dz" }
  ];

  // Scientific Committee Members data with country code
  const committeeMembers = [
    { title: "Pr.", name: "N. MAOUCHE", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "R. FITAS", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "A. ZOUAOUI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "S. BOUCETTA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "L. CHIBANE", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "A. YOUSEF", affiliation: "Fayoum University, Egypt", country: "eg" },
    { title: "Dr.", name: "A. FICAI", affiliation: "University Politehnica of Bucharest, Romania", country: "ro" },
    { title: "Dr.", name: "W. DERAFA", affiliation: "Al-Jouf University, Saudi Arabia", country: "sa" },
    { title: "Dr.", name: "M. CHEHIMI", affiliation: "Université de Paris 7, France", country: "fr" },
    { title: "Dr.", name: "S. I. AHMED", affiliation: "Taif University, Saudi Arabia", country: "sa" },
    { title: "Dr.", name: "O. MOUMENI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "S. ABBASSI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "M.T. BENANIBA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "M. FERHAT", affiliation: "University of El Oued, Algeria", country: "dz" },
    { title: "Dr.", name: "K. BOURAS", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "T. BOUREMANI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "K. BOUFERRACHE", affiliation: "University of M'sila, Algeria", country: "dz" },
    { title: "Pr.", name: "M. FOUDIA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "N. CHAHMANA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "D. CHALLAL", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "Amr M. ABDELGHANY", affiliation: "Cairo University, Egypt", country: "eg" },
    { title: "Dr.", name: "M. ALSHOHAIL", affiliation: "Riadh University, Saudi Arabia", country: "sa" },
    { title: "Pr.", name: "N. BAADJI", affiliation: "University of M'sila, Algeria", country: "dz" },
    { title: "Pr.", name: "M. FERKHI", affiliation: "University of Jijel, Algeria", country: "dz" },
    { title: "Pr.", name: "F. ZOUKRAMI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "N. ALIOUANE", affiliation: "University of Bejaia, Algeria", country: "dz" },
    { title: "Pr.", name: "A. DJEDOUANI", affiliation: "ENS Constantine, Algeria", country: "dz" },
    { title: "Pr.", name: "H. AYADI", affiliation: "University of Skikda, Algeria", country: "dz" },
    { title: "Pr.", name: "A. SAKER", affiliation: "University of Biskra, Algeria", country: "dz" },
    { title: "Pr.", name: "C. BOUREMAL", affiliation: "University of Biskra, Algeria", country: "dz" },
    { title: "Dr.", name: "M. ALAM", affiliation: "King Faisal University, Saudi Arabia", country: "sa" },
    { title: "Dr.", name: "N. BARHOUMI", affiliation: "ENSI, Tunisia", country: "tn" },
    { title: "Dr.", name: "A. GHAMES", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "R. KERKOUR", affiliation: "University of Mila, Algeria", country: "dz" },
    { title: "Pr.", name: "A. ADDALA", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "D. HANNACHI", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Pr.", name: "F. KAHOUL", affiliation: "University of M'Sila, Algeria", country: "dz" },
    { title: "Dr.", name: "R. AYECHE", affiliation: "University of BBA, Algeria", country: "dz" },
    { title: "Dr.", name: "A. MAKHLOUFI", affiliation: "University of Khenchela, Algeria", country: "dz" },
    { title: "Dr.", name: "L. MITICHE", affiliation: "University of Tizi-Ouzou, Algeria", country: "dz" },
    { title: "Pr.", name: "F.Z. SATOUR", affiliation: "Setif 1 University, Algeria", country: "dz" },
    { title: "Dr.", name: "S. MOUSSAOUI", affiliation: "University of Boumerdes, Algeria", country: "dz" },
    { title: "Dr.", name: "N. BOUNEDJAR", affiliation: "University of Skikda, Algeria", country: "dz" },
    { title: "Pr.", name: "A. AIDI", affiliation: "University of Biskra, Algeria", country: "dz" }
  ];
  
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col font1 items-center justify-center min-h-screen bg-black p-4 w-full overflow-hidden"
    >
      <div className="flex flex-col w-full max-w-6xl gap-8 items-center px-4 md:px-8 mx-auto text-center">

      <h1 
          className={`text-4xl md:text-6xl font-bold mb-12 text-yellow-500 text-center w-full transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          SCIENTIFIC COMMITTEE
        </h1>
        
        {/* Scientific Chairman Section */}
        <div 
          className={`w-full transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
            SCIENTIFIC CHAIRMAN
          </h2>
          
          {/* Explicitly render each chairman separately for vertical layout */}
          <div className="mb-12 mx-auto w-full max-w-lg">
            {/* First Chairman */}
            <div 
              className="rounded-xl border border-yellow-500/30 p-6 backdrop-blur-sm bg-gradient-to-br from-yellow-900/30 to-yellow-700/10 text-center mb-6"
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
              className="rounded-xl border border-yellow-500/30 p-6 backdrop-blur-sm bg-gradient-to-br from-yellow-900/30 to-yellow-700/10 text-center"
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
        
        {/* Scientific Committee Members Section */}
        <div 
          className={`w-full transform transition-all duration-1000 ease-out ${
            membersFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
            SCIENTIFIC COMMITTEE MEMBERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {committeeMembers.map((member, index) => (
              <div 
                key={index}
                className="rounded-lg border border-yellow-500/20 p-4 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-blue-700/5 hover:from-blue-900/30 hover:to-blue-700/10 transition-all duration-300 text-center"
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