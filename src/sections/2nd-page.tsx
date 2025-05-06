import '../index.css';
import React, { useState, useEffect } from 'react';

import HonoraryChairsStage from './HonoraryChairsStage';
import RectorStage from './RectorStage';
import DeanStage from './DeanStage';
import ChairwomanStage from './ChairwomanStage';
import CommitteeStage from './CommitteeStage';
import DatesStage from './DatesStage';
import Speakers from './speakers'; 

interface SecondPageProps {
  startAnimation: boolean;
  onAnimationComplete: () => void;
  onSkipToSetif?: () => void; // New prop for skip button
}

const SecondPage: React.FC<SecondPageProps> = ({ startAnimation, onAnimationComplete, onSkipToSetif }) => {
  const [animationStage, setAnimationStage] = useState(0);

  const handleSpeakersComplete = () => {
    setAnimationStage(6);
  };
  
  // Handle dates stage completion
  const handleDatesComplete = () => {
    onAnimationComplete();
  };

  useEffect(() => {
    // Only start animations if startAnimation is true
    if (startAnimation) {
      // Reset state when animation starts
      setAnimationStage(0);
      
      // Schedule the animation stages
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
    <div className="absolute font1 inset-0 w-screen h-screen overflow-hidden m-0 p-0">
      <div
        className="absolute inset-0 w-full h-full z-0 brightness-75 m-0 p-0"
        style={{
          backgroundImage: 'url(/p2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Skip Button - Added in the top-right corner */}
      {onSkipToSetif && (
        <div className="absolute top-4 right-4 z-50">
          <button 
            onClick={onSkipToSetif}
            className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
          >
            <span>Skip to Setif</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center overflow-hidden">
        <div className="text-center text-white p-8 max-w-5xl">
          {/* Stage 0: Honorary Chairs */}
          <HonoraryChairsStage isActive={animationStage === 0} startAnimation={startAnimation} />
          
          {/* Stage 1: Rector Information */}
          <RectorStage animationStage={animationStage} />
          
          {/* Stage 2: Dean Information */}
          <DeanStage animationStage={animationStage} />
          
          {/* Stage 3: Conference Chairwoman */}
          <ChairwomanStage animationStage={animationStage} />
          
          {/* Stage 4: Committee Members */}
          <CommitteeStage  animationStage={animationStage} />
          
          {/* Stage 5: Speakers */}
          {animationStage === 5 && (
            <Speakers 
              startAnimation={true} 
              onComplete={handleSpeakersComplete}
            />
          )}
          
         <DatesStage 
            animationStage={animationStage === 6 ? 6 : -1} 
            onComplete={handleDatesComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;