import { useState, useEffect, useRef } from 'react';
import '../../index.css';

export default function ContactUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [contentFadeIn, setContentFadeIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Set up an intersection observer to detect when this component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Add a slight delay for the content animation
        setTimeout(() => {
          setContentFadeIn(true);
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

  // Contact information
  const contactInfo = [
    {
      type: "Email",
      value: "icict2025@univ-setif.dz",
      icon: "✉️",
      bgClass: "from-blue-900/30 to-blue-700/10",
      link: "mailto:icict2025@univ-setif.dz"
    },
    {
      type: "Email",
      value: "icict2025.univ.setif@gmail.com",
      icon: "📧",
      bgClass: "from-purple-900/30 to-purple-700/10",
      link: "mailto:icict2025.univ.setif@gmail.com"
    },
    {
      type: "Phone",
      value: "+213 6 56 139 139",
      icon: "📱",
      bgClass: "from-green-900/30 to-green-700/10",
      link: "tel:+213656139139"
    }
  ];
  return (
    <div className="flex items-center justify-center min-h-screen bg-black relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-8xl">✧</div>
        <div className="absolute bottom-1/4 right-1/4 text-8xl">✧</div>
        <div className="absolute top-3/4 left-2/3 text-6xl">❖</div>
        <div className="absolute bottom-2/3 right-1/3 text-6xl">❖</div>
      </div>
  
      <div
        ref={sectionRef}
        className="flex flex-col w-full max-w-6xl font1 items-center justify-center px-4 md:px-8 z-10"
      >
        <h1
          className={`text-4xl md:text-6xl font-bold mb-12 text-yellow-500 transform transition-all duration-1000 ease-out text-center w-full ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          CONTACT US
        </h1>
  
        <div
          className={`w-full transform transition-all duration-1000 ease-out ${
            contentFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
            GET IN TOUCH
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className={`rounded-xl border border-yellow-500/30 p-6 backdrop-blur-sm bg-gradient-to-br ${info.bgClass} hover:scale-105 transition-transform duration-300 text-center flex flex-col items-center justify-center`}
                style={{
                  boxShadow: '0 8px 32px rgba(212, 175, 55, 0.1)',
                  animationDelay: `${index * 100}ms`,
                  height: '180px'
                }}
              >
                <span className="text-5xl mb-4">{info.icon}</span>
                <h3 className="text-xl font-bold text-yellow-500 mb-2">{info.type}</h3>
                <p className="text-white break-words">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
  
        <div
          className={`w-full transform transition-all duration-1000 ease-out ${
            contentFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 text-center">
            LOCATION
          </h2>
  
          <div className="rounded-xl border border-yellow-500/30 p-4 backdrop-blur-sm bg-gradient-to-br from-blue-900/20 to-blue-700/5 overflow-hidden max-w-5xl mx-auto"
            style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.15)' }}
          >
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-yellow-500 mb-4">University of Setif 1</h3>
              <p className="text-white mb-2">Campus El Bez</p>
              <p className="text-white mb-2">19000 Setif, Algeria</p>
              <p className="text-white mb-4">36.1901° N, 5.4202° E</p>
              <a
                href="https://maps.google.com/?q=36.1901,5.4202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-black font-bold px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
  
            <div className="relative w-full h-64 md:h-96 bg-gray-900 flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3211.6822114751087!2d5.417857!3d36.190143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f315832afb65d1%3A0xb07a5e8ab70201b7!2sUniversit%C3%A9%20Ferhat%20Abbas%20S%C3%A9tif%201!5e0!3m2!1sen!2sdz!4v1715280044548!5m2!1sen!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of Setif 1 Location"
                className="z-10"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border border-yellow-500/20 z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 