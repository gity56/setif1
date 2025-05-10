import { useState, useEffect, useRef } from 'react';
import '../../index.css';

export default function ImportantDatesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [datesFadeIn, setDatesFadeIn] = useState(false);
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        setTimeout(() => {
          setDatesFadeIn(true);
        }, 500);
      }
    }, { threshold: 0.2 });
    
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

  const importantDates = [
    {
      title: "Submission Opening",
      date: "May 1st, 2025",
      icon: "📝",
      bgClass: "from-blue-900/30 to-blue-700/10"
    },
    {
      title: "Submission Deadline",
      date: "October 28th, 2025",
      icon: "⏰",
      bgClass: "from-purple-900/30 to-purple-700/10"
    },
    {
      title: "Notification Acceptance",
      date: "November 1st, 2025",
      icon: "✉️",
      bgClass: "from-green-900/30 to-green-700/10"
    },
    {
      title: "Conference Date",
      date: "November 18-19th, 2025",
      icon: "🎓",
      bgClass: "from-yellow-900/30 to-yellow-700/10"
    }
  ];
  
  return (
    <div 
      ref={sectionRef}
      className="flex flex-col font1 items-center justify-center min-h-screen bg-black p-4 w-full overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-8xl">✧</div>
        <div className="absolute bottom-1/4 right-1/4 text-8xl">✧</div>
        <div className="absolute top-3/4 left-2/3 text-6xl">❖</div>
        <div className="absolute bottom-2/3 right-1/3 text-6xl">❖</div>
      </div>
      
      <div className="flex flex-col w-full max-w-5xl gap-8 items-center justify-center px-4 mx-auto text-center">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-16 text-yellow-500 transform transition-all duration-1000 ease-out w-full ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          IMPORTANT DATES
        </h1>
        
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 to-yellow-500/20 transform -translate-x-1/2"></div>
          
          <div className="flex flex-col gap-12 md:gap-16 items-center">
            {importantDates.map((item, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row md:items-center md:justify-between w-full transform transition-all duration-1000 ease-out ${
                  datesFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                style={{ transitionDelay: `${300 * (index + 1)}ms` }}
              >
                {/* Card */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mb-4 md:mb-0`}>
                  <div 
                    className={`rounded-xl border border-yellow-500/30 p-8 backdrop-blur-sm bg-gradient-to-br ${item.bgClass} hover:scale-105 transition-transform duration-300 shadow-lg flex flex-col items-center md:items-start`}
                    style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.15)' }}
                  >
                    <div className="flex items-center mb-4 justify-center md:justify-start w-full">
                      <span className="text-5xl mr-4">{item.icon}</span>
                      <h2 className="text-2xl font-bold text-yellow-500">{item.title}</h2>
                    </div>
                    <p className="text-xl font-bold text-white">{item.date}</p>
                  </div>
                </div>
                
                {/* Dot */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute w-8 h-8 bg-yellow-500 rounded-full -ml-4 animate-pulse shadow-lg shadow-yellow-500/50"></div>
                    <div className="absolute w-12 h-12 bg-yellow-500/40 rounded-full -ml-6 -mt-2 animate-ping" style={{ animationDuration: '3s' }}></div>
                  </div>
                </div>
                
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
        
        <div 
          className={`mt-20 transform transition-all duration-1000 ease-out ${
            datesFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '1400ms' }}
        >

        </div>
      </div>
    </div>
  );
}
