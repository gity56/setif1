import '../index.css';
import React, { useState, useEffect } from 'react';

import HonoraryChairsStage from './HonoraryChairsStage';
import RectorStage from './RectorStage';
import DeanStage from './DeanStage';
import ChairwomanStage from './ChairwomanStage';
import CommitteeStage from './CommitteeStage';
import Speakers from './speakers'; 

interface SecondPageProps {
  startAnimation: boolean;
  onAnimationComplete: () => void;
  onSkipToSetif?: () => void;
}

const SecondPage: React.FC<SecondPageProps> = ({ startAnimation, onSkipToSetif }) => {
  const [animationStage, setAnimationStage] = useState(0);

  const handleSpeakersComplete = () => {
    setAnimationStage(6);
  };
  


  useEffect(() => {
    if (startAnimation) {
      setAnimationStage(0);
      
      const timer1 = setTimeout(() => {
        setAnimationStage(1);
      }, 3000);

      const timer2 = setTimeout(() => {
        setAnimationStage(2);
      }, 10000);

      const timer3 = setTimeout(() => {
        setAnimationStage(3);
      }, 16000);
      
      const timer4 = setTimeout(() => {
        setAnimationStage(4);
      }, 22000);
      
      const timer5 = setTimeout(() => {
        setAnimationStage(5);
      }, 28000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }
  }, [startAnimation]); 

  return (
    <div className="w-full font1 h-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 brightness-75"
        style={{
          backgroundImage: 'url(/p2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Skip Button */}
      {onSkipToSetif && (
        <div className="absolute top-4 right-4 z-50">
          <button 
            onClick={onSkipToSetif}
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>Skip</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* Centered Content Container */}
      <div className="relative  z-10 w-full max-w-5xl mx-auto text-center text-white px-4">
        {/* Stage 0: Honorary Chairs */}
        <HonoraryChairsStage isActive={animationStage === 0} startAnimation={startAnimation} />
        
        {/* Stage 1: Rector Information */}
        <RectorStage animationStage={animationStage} />
        
        {/* Stage 2: Dean Information */}
        <DeanStage animationStage={animationStage} />
        
        {/* Stage 3: Conference Chairwoman */}
        <ChairwomanStage animationStage={animationStage} />
        
        {/* Stage 4: Committee Members */}
        <CommitteeStage animationStage={animationStage} />
        
        {/* Stage 5: Speakers */}
        {animationStage === 5 && (
          <Speakers 
            startAnimation={true} 
            onComplete={handleSpeakersComplete}
          />
        )}
        

      </div>
    </div>
  );
};

export default SecondPage;