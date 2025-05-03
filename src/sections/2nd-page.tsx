import '../index.css';
import React, { useState, useEffect } from 'react';

// Import the separated stage components
import HonoraryChairsStage from './HonoraryChairsStage';
import RectorStage from './RectorStage';
import DeanStage from './DeanStage';
import ChairwomanStage from './ChairwomanStage';
import CommitteeStage from './CommitteeStage';
import DatesStage from './DatesStage';
import Speakers from './speakers'; // Import Speakers component

interface SecondPageProps {
  startAnimation: boolean;
  onAnimationComplete: () => void; // Add this callback prop
}

const SecondPage: React.FC<SecondPageProps> = ({ startAnimation, onAnimationComplete }) => {
  const [animationStage, setAnimationStage] = useState(0);
  const [speakersComplete, setSpeakersComplete] = useState(false);
  const [datesComplete, setDatesComplete] = useState(false);

  // Handle speakers completion
  const handleSpeakersComplete = () => {
    setSpeakersComplete(true);
    // Move to dates stage after speakers are complete
    setAnimationStage(6);
  };
  
  // Handle dates stage completion
  const handleDatesComplete = () => {
    setDatesComplete(true);
    // Notify parent component that all animations are complete
    onAnimationComplete();
  };

  useEffect(() => {
    // Only start animations if startAnimation is true
    if (startAnimation) {
      // Reset states when animation starts
      setAnimationStage(0);
      setSpeakersComplete(false);
      setDatesComplete(false);
      
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
      
      // Add timer for the Speakers
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
  }, [startAnimation]); // Only depend on startAnimation

  return (
    <div className="absolute font1 inset-0 w-screen h-screen overflow-hidden m-0 p-0">
      {/* DNA Background Image */}
      <div
        className="absolute inset-0 w-full h-full z-0 brightness-75 m-0 p-0"
        style={{
          backgroundImage: 'url(/p2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

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
          <CommitteeStage animationStage={animationStage} />
          
          {/* Stage 5: Speakers */}
          {animationStage === 5 && (
            <Speakers 
              startAnimation={true} 
              onComplete={handleSpeakersComplete}
            />
          )}
          
          {/* Stage 6: Important Dates */}
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