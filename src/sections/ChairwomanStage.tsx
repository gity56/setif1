// ChairwomanStage.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ChairwomanStageProps {
  animationStage: number;
}

const ChairwomanStage: React.FC<ChairwomanStageProps> = ({ animationStage }) => {
  const textShadowStyle = {
    textShadow: '3px 3px 6px rgba(0,0,0,0.9), -3px -3px 6px rgba(0,0,0,0.9)',
  };

  const imageShadowStyle = {
    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.7))'
  };

  return (
    <div
      className={`transition-all mt-44 duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0 w-full flex justify-center items-center
      ${animationStage === 3 ? 'opacity-100 scale-100' : 
        (animationStage < 3 ? 'opacity-0 scale-90' : 'opacity-0 scale-125')}`}
    >
      <div className="flex flex-col items-center justify-center text-center w-full">
        <motion.div 
          className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white mx-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={animationStage === 3 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={imageShadowStyle}
        >
          <img 
            src="/m100.png" 
            alt="Dr. L.TOUKAL" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/api/placeholder/200/200";
            }}
          />
        </motion.div>
        <h2
          className="text-5xl font-extrabold mb-4 text-center w-full"
          style={textShadowStyle}
        >
          CONFERENCE CHAIRMAN
        </h2>
        <p
          className="text-4xl font-bold text-center w-full"
          style={textShadowStyle}
        >
          Dr. L.TOUKAL
        </p>          
      </div>
    </div>
  );
};

export default ChairwomanStage;