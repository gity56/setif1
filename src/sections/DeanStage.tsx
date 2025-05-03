import React from 'react';
import { motion } from 'framer-motion';

interface DeanStageProps {
  animationStage: number;
}

const DeanStage: React.FC<DeanStageProps> = ({ animationStage }) => {
  const textShadowStyle = {
    textShadow: '3px 3px 6px rgba(0,0,0,0.9), -3px -3px 6px rgba(0,0,0,0.9)',
  };

  const imageShadowStyle = {
    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.7))'
  };

  return (
    <div
      className={`transition-all -mt-32 duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0
      ${animationStage === 2 ? 'opacity-100 scale-100' :
        (animationStage < 2 ? 'opacity-0 scale-90' : 'opacity-0 scale-125')}`}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div 
          className="w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-white"
          initial={{ y: -50, opacity: 0 }}
          animate={animationStage === 2 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1 }}
          style={imageShadowStyle}
        >
          <img 
            src="/m2.png" 
            alt="Professor University Ferhat Abbas of Setif" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "/m2.png";
            }}
          />
        </motion.div>
        <motion.h2
          className="text-5xl font-bold mb-4"
          style={textShadowStyle}
        >
          Pr. HABELHAMES Farid
        </motion.h2>
        <p 
          className="text-3xl font-semibold mb-12"
          style={textShadowStyle}
        >
        Professor University Ferhat Abbas of Setif            </p>
      </div>
    </div>
  );
};

export default DeanStage;