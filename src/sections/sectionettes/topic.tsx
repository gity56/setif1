import { useState, useEffect } from 'react';

// Define types for component props
interface DocumentButtonProps {
  text: string;
  link: string;
}

interface TopicItemProps {
  number: string | number;
  text: string;
}

export default function EnhancedTopicsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredTopic, setHoveredTopic] = useState<string | null>(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Topic images mapping
  const topicImages: Record<string, string> = {
    "Sustainable Chemistry": "/t4.png", // Replace with real image paths
    "Green Chemistry": "/t1.png",
    "Artificial Intelligence": "/t2.png",
    "Materials Science": "/t3.png"
  };
  
  // Document Button Component - Updated with link prop
  const DocumentButton = ({ text, link }: DocumentButtonProps) => {
    return (
      <div className="inline-block">
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center justify-start w-fit h-12 border-none px-4 rounded bg-amber-800 gap-3 cursor-pointer transition-all duration-300 hover:bg-amber-700 active:scale-95"
        >
          <span className="relative w-10 h-10 flex flex-col items-center justify-end">
            <svg className="z-10 w-4/5 h-auto" width={146} height={113} viewBox="0 0 146 113" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 4C0 1.79086 1.79086 0 4 0H50.3802C51.8285 0 53.2056 0.627965 54.1553 1.72142L64.3303 13.4371C65.2799 14.5306 66.657 15.1585 68.1053 15.1585H141.509C143.718 15.1585 145.509 16.9494 145.509 19.1585V109C145.509 111.209 143.718 113 141.509 113H3.99999C1.79085 113 0 111.209 0 109V4Z" fill="url(#paint0_linear_117_4)" />
              <defs>
                <linearGradient id="paint0_linear_117_4" x1={0} y1={0} x2="72.93" y2="95.4804" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFD700" />
                  <stop offset={1} stopColor="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
            <svg className="absolute z-20 w-1/2 h-auto transition-all duration-300 ease-out group-hover:translate-y-1" width={88} height={99} viewBox="0 0 88 99" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width={88} height={99} fill="url(#paint0_linear_117_6)" />
              <defs>
                <linearGradient id="paint0_linear_117_6" x1={0} y1={0} x2={81} y2="160.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset={1} stopColor="#686868" />
                </linearGradient>
              </defs>
            </svg>
            <svg className="absolute z-30 w-4/5 h-auto transition-all duration-300 ease-out origin-bottom group-hover:rotate-x-30" width={160} height={79} viewBox="0 0 160 79" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.29306 12.2478C0.133905 9.38186 2.41499 6.97059 5.28537 6.97059H30.419H58.1902C59.5751 6.97059 60.9288 6.55982 62.0802 5.79025L68.977 1.18034C70.1283 0.410771 71.482 0 72.8669 0H77H155.462C157.87 0 159.733 2.1129 159.43 4.50232L150.443 75.5023C150.19 77.5013 148.489 79 146.474 79H7.78403C5.66106 79 3.9079 77.3415 3.79019 75.2218L0.29306 12.2478Z" fill="url(#paint0_linear_117_5)" />
              <defs>
                <linearGradient id="paint0_linear_117_5" x1="38.7619" y1="8.71323" x2="66.9106" y2="82.8317" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F0E68C" />
                  <stop offset={1} stopColor="#DAA520" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <p className="text-white text-sm font-semibold tracking-wider">{text}</p>
        </a>
      </div>
    );
  };

  // Topic Item Component
  const TopicItem = ({ number, text }: TopicItemProps) => {
    const topicKey = text.split(" ").slice(0, 2).join(" ");
    
    return (
      <div 
        className="flex items-start cursor-pointer transition-all duration-300 hover:text-yellow-400 p-2 rounded hover:bg-gray-900"
        onMouseEnter={() => setHoveredTopic(topicKey)}
        onMouseLeave={() => setHoveredTopic(null)}
      >
        <span className="mr-2">{number}.</span>
        <p>{text}</p>
      </div>
    );
  };
  
  return (
    <div className="flex font1 -mt-16 flex-col items-center justify-center min-h-screen bg-black p-4 relative">
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center">
        <div 
          className={`md:w-1/2 transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-yellow-500">
            TOPICS
          </h1>
          
          <div className="text-gray-200 text-xl md:text-2xl space-y-6">
            <TopicItem number="1" text="Sustainable Chemistry and Engineering in Industry" />
            <TopicItem number="2" text="Green Chemistry and Energy Storage Innovation" />
            <TopicItem number="3" text="Artificial Intelligence for Environmental Protection" />
            <TopicItem number="4" text="Materials Science and Technologies" />
            
            {/* Updated buttons with links */}
            <div className="flex  flex-wrap gap-4 ">
              <DocumentButton 
                text="brochure ICICT25" 
                link="/ICICT 25 brochure.pdf" 
              />
              <DocumentButton 
                text="ICICT 2025_Template" 
                link="/Abstract_Template_ICICT2025 final.pdf" 
              />
            </div>
          </div>
        </div>
        
        <div 
          className={`md:w-1/2 transform transition-all duration-1000 ease-out ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          {/* Show default image when no topic is hovered, otherwise show the hovered topic image */}
          <div className="w-full max-w-lg  mx-auto transition-all duration-500">
            <img 
              src={hoveredTopic ? topicImages[hoveredTopic] : "/p001.png"} 
              alt={hoveredTopic ? `${hoveredTopic} illustration` : "Scientific research illustration"}
              className={`w-full rounded-lg shadow-lg ${hoveredTopic ? 'border-2 border-yellow-500 mt-40 transform scale-105' : ''}`}
            />
            {hoveredTopic && (
              <p className="text-center text-yellow-400 mt-4 font-semibold">{hoveredTopic}</p>
            )}
          </div>
        </div>
      </div>
      
    </div>
  );
}