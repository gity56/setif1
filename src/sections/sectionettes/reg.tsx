import { useState, useEffect, useRef } from 'react';
import '../../index.css'

export default function RegistrationFeesPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardsFadeIn, setCardsFadeIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        setTimeout(() => {
          setCardsFadeIn(true);
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

  const feeCategories = [
    {
      title: "ACADEMICS",
      items: [
        { description: "01 Abstract", price: "8000 DZD" },
        { description: "02 Abstracts", price: "10000 DZD" }
      ],
      icon: "🎓",
      bgClass: "from-yellow-900/30 to-yellow-700/10"
    },
    {
      title: "PhD. STUDENTS",
      items: [
        { description: "01 Abstract", price: "4000 DZD" },
        { description: "02 Abstracts", price: "6000 DZD" }
      ],
      icon: "📚",
      bgClass: "from-blue-900/30 to-blue-700/10"
    },
    {
      title: "INDUSTRIAL & BUSINESS",
      items: [
        { description: "Registration", price: "12000 DZD" }
      ],
      icon: "🏭",
      bgClass: "from-purple-900/30 to-purple-700/10"
    }
  ];

  const foreignFeeCategories = [
    {
      title: "PhD. STUDENTS",
      items: [
        { description: "01 Abstract", price: "100 €" },
        { description: "02 Abstracts", price: "150 €" }
      ],
      icon: "📚",
      bgClass: "from-green-900/30 to-green-700/10"
    },
    {
      title: "ACADEMICS",
      items: [
        { description: "01 Abstract", price: "200 €" },
        { description: "02 Abstracts", price: "350 €" }
      ],
      icon: "🎓",
      bgClass: "from-red-900/30 to-red-700/10"
    }
  ];
  
  return (
    <div 
      ref={sectionRef}
      className="flex ml-32 flex-col font1 items-center justify-center min-h-screen bg-black px-4 py-16 w-full"
    >
      <div className="flex flex-col w-full max-w-6xl gap-8 items-center">
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-12 text-yellow-500 transform transition-all duration-1000 ease-out text-center w-full ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          REGISTRATION FEES
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-16">
          {feeCategories.map((category, index) => (
            <div 
              key={index}
              className={`rounded-xl border border-yellow-500/30 p-6 backdrop-blur-sm transform transition-all duration-1000 ease-out ${
                cardsFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              } bg-gradient-to-br ${category.bgClass}`}
              style={{
                transitionDelay: `${300 * (index + 1)}ms`,
                boxShadow: '0 8px 32px rgba(212, 175, 55, 0.1)'
              }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h2 className="text-2xl font-bold text-yellow-500">{category.title}</h2>
              </div>
              
              <div className="space-y-6 mt-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center">
                    <span className="text-lg text-gray-300">{item.description}</span>
                    <span className="text-xl font-bold text-white bg-yellow-500/20 px-4 py-2 rounded-lg">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full">
          <h2 
            className={`text-3xl md:text-4xl font-bold mb-8 text-yellow-500 transform transition-all duration-1000 ease-out text-center ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            FOREIGN PARTICIPANTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {foreignFeeCategories.map((category, index) => (
              <div 
                key={index}
                className={`rounded-xl border border-yellow-500/30 p-6 backdrop-blur-sm transform transition-all duration-1000 ease-out ${
                  cardsFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                } bg-gradient-to-br ${category.bgClass}`}
                style={{
                  transitionDelay: `${300 * (index + 4)}ms`,
                  boxShadow: '0 8px 32px rgba(212, 175, 55, 0.1)'
                }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-yellow-500">{category.title}</h3>
                </div>
                
                <div className="space-y-6 mt-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-center">
                      <span className="text-lg text-gray-300">{item.description}</span>
                      <span className="text-xl font-bold text-white bg-yellow-500/20 px-4 py-2 rounded-lg">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
