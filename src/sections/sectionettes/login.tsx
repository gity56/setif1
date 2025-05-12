import { useState, useEffect, useRef } from 'react';
import '../../index.css';

export default function SubmissionPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formFadeIn, setFormFadeIn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up an intersection observer to detect when this component is in view
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // Add a slight delay for the animation
        setTimeout(() => {
          setFormFadeIn(true);
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

  const handleExternalLogin = () => {
    window.open('https://events.univ-setif.dz/login/?next=/event/17/abstracts/%23submit-abstract', '_blank'); // Replace with your actual external login URL
  };
  
  const handleSubmissionGuide = () => {
    window.open('https://docs.google.com/document/d/1W6r1eHA2Z6FJiZ-Hudk8xK9YBL9JtIUe/edit?usp=sharing&ouid=100010354955434595196&rtpof=true&sd=true', '_blank');
  };
  
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
        className="flex flex-col font1 items-center justify-center w-full max-w-4xl px-4 z-10"
      >
        <h1
          className={`text-4xl md:text-6xl font-bold mb-12 text-yellow-500 transform transition-all duration-1000 ease-out w-full text-center ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          ABSTRACT SUBMISSION
        </h1>
  
        <div
          className={`w-full max-w-2xl transform transition-all duration-1000 ease-out ${
            formFadeIn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          {/* Centralized card containing main buttons */}
          <div className="rounded-xl border border-yellow-500/30 p-12 backdrop-blur-sm bg-gradient-to-br from-blue-900/30 to-blue-700/10 text-center"
              style={{ boxShadow: '0 10px 40px rgba(212, 175, 55, 0.15)' }}
          >
            <h2 className="text-2xl text-yellow-500 mb-8">Welcome to the Abstract Submission Portal</h2>
            
            <p className="text-gray-300 mb-8">
              To submit your abstract, please use our external login system. Click the button below to proceed.
            </p>
            
            <button
              onClick={handleExternalLogin}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 py-4 rounded-lg text-black font-bold hover:from-yellow-500 hover:to-yellow-400 transition-all transform hover:scale-105 duration-300 mb-6"
            >
              PROCEED TO LOGIN
            </button>
            
            <div className="mt-8 pt-6 border-t border-yellow-500/20">
              <p className="text-gray-400 mb-6">Need help with your submission?</p>
              
              <button
                onClick={handleSubmissionGuide}
                className="flex items-center justify-center mx-auto bg-gradient-to-r from-blue-600 to-blue-500 py-3 px-6 rounded-lg text-white font-bold hover:from-blue-500 hover:to-blue-400 transition-all transform hover:scale-105 duration-300"
              >
                <span className="mr-2">📋</span>
                SUBMISSION GUIDE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}