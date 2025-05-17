
// CommitteeStage.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CommitteeStageProps {
  animationStage: number;
}

const CommitteeStage: React.FC<CommitteeStageProps> = ({ animationStage }) => {
  const textShadowStyle = {
    textShadow: '3px 3px 6px rgba(0,0,0,0.9), -3px -3px 6px rgba(0,0,0,0.9)',
  };

  const imageShadowStyle = {
    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.7))'
  };

  return (
    <div
      className={`transition-all mt-8  duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0 w-full flex flex-col items-center justify-center
      ${animationStage === 4 ? 'opacity-100 scale-100' : 
        (animationStage < 4 ? 'opacity-0 scale-90' : 'opacity-0 scale-125')}`}
    >
      <h2
        className="text-5xl font-extrabold mb-10 text-center w-full"
        style={textShadowStyle}
      >
        COMMITTEE Chairs
      </h2>
      
      <div className="flex justify-center items-start space-x-16 mx-auto">
        {/* Column 1: Benamrani Hassen with Fatmi Messaoud below */}
        <div className="flex flex-col items-center text-center">
          {/* Benamrani Hassen */}
          <motion.div 
            className="w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-white mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={animationStage === 4 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            style={imageShadowStyle}
          >
            <img 
              src="/m6.png" 
              alt="Pr. Benamrani Hassen" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/m6.png";
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationStage === 4 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8 text-center w-full"
          >
            <h3
              className="text-2xl font-bold mb-2 text-center"
              style={textShadowStyle}
            >
              Pr. Hassen Benamrani 
            </h3>

          </motion.div>
          
          {/* Fatmi Messaoud (Below Benamrani) */}
          <motion.div 
            className="w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-white mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={animationStage === 4 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            style={imageShadowStyle}
          >
            <img 
              src="/m4.png" 
              alt="Pr. Fatmi Messaoud" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/m4.png";
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationStage === 4 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-center w-full"
          >
            <h3
              className="text-2xl font-bold mb-2 text-center"
              style={textShadowStyle}
            >
              Pr. Messaoud Fatmi 
            </h3>
 
          </motion.div>
        </div>
        
        {/* Column 2: K. AOUACHRIA with Malia below */}
        <div className="flex flex-col items-center text-center">
          {/* K. AOUACHRIA */}
          <motion.div 
            className="w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-white mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={animationStage === 4 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            style={imageShadowStyle}
          >
            <img 
              src="/m110.png" 
              alt="Pr. K. AOUACHRIA" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/m5.png";
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationStage === 4 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-8 text-center w-full"
          >
            <h3
              className="text-2xl font-bold mb-2 text-center"
              style={textShadowStyle}
            >
              Pr. Kamira AOUACHRIA
            </h3>

          </motion.div>
          
          <motion.div 
            className="w-40 h-40 mb-4 rounded-full overflow-hidden border-4 border-white mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={animationStage === 4 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            style={imageShadowStyle}
          >
            <img 
              src="/m5.png" 
              alt="Dr. Malia" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/m5.png";
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={animationStage === 4 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-center w-full"
          >
            <h3
              className="text-2xl font-bold mb-2 text-center"
              style={textShadowStyle}
            >
              Dr. Malia HAMICI
            </h3>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommitteeStage;