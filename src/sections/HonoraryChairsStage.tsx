// HonoraryChairsStage.tsx
import React from 'react';

interface HonoraryChairsStageProps {
  isActive: boolean;
  startAnimation: boolean;
}

const HonoraryChairsStage: React.FC<HonoraryChairsStageProps> = ({ isActive, startAnimation }) => {
  const textShadowStyle = {
    textShadow: '3px 3px 6px rgba(0,0,0,0.9), -3px -3px 6px rgba(0,0,0,0.9)',
  };

  return (
    <div
      className={`transition-all mt-44 duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0 w-full flex justify-center items-center
      ${isActive && startAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}
    >
      <h1
        className="text-6xl font-extrabold tracking-wider mb-12 text-center w-full"
        style={textShadowStyle}
      >
        Honorary Chairs
      </h1>
    </div>
  );
};

export default HonoraryChairsStage;