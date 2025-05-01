import '../index.css';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
interface SecondPageProps {
  startAnimation: boolean;
}

const SecondPage: React.FC<SecondPageProps> = ({ startAnimation }) => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    // Only start animations if startAnimation is true
    if (startAnimation) {
      // Start with Honorary Chairs title
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
      
      // Add timer for the Setif discovery phrase
      const timer5 = setTimeout(() => {
        setAnimationStage(5);
      }, 30000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);
        clearTimeout(timer5);
      };
    }
  }, [startAnimation]); // Depend on startAnimation prop

  const textShadowStyle = {
    textShadow: '3px 3px 6px rgba(0,0,0,0.9), -3px -3px 6px rgba(0,0,0,0.9)',
  };

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
          {/* Honorary Chairs - Stage 0 */}
          <div
            className={`transition-all duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0 
            ${animationStage === 0 && startAnimation ? 'opacity-100 scale-100' : 'opacity-0 scale-125'}`}
          >
            <h1
              className="text-6xl font-extrabold tracking-wider mb-12"
              style={textShadowStyle}
            >
              Honorary Chairs
            </h1>
          </div>

          {/* Rector Information - Stage 1 */}
          <div
            className={`transition-all duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0
            ${animationStage === 1 ? 'opacity-100 scale-100' :
              (animationStage < 1 ? 'opacity-0 scale-90' : 'opacity-0 scale-125')}`}
          >
            <motion.h2
              className="text-5xl font-bold mb-4"
              style={textShadowStyle}
            >
              Pr. Mohamed El Hadi LATRECHE
            </motion.h2>
            <p 
              className="text-3xl font-semibold mb-12"
              style={textShadowStyle}
            >
              Rector of SETIF 1 University Ferhat ABBAS
            </p>
          </div>

          {/* Dean Information - Stage 2 */}
          <div
            className={`transition-all duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0
            ${animationStage === 2 ? 'opacity-100 scale-100' :
              (animationStage < 2 ? 'opacity-0 scale-90' : 'opacity-0 scale-125')}`}
          >
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
              Dean of the faculty
            </p>
          </div>

          {/* Conference Chairwoman - Stage 3 */}
          <div
            className={`transition-all duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0
            ${animationStage === 3 ? 'opacity-100 scale-100' : 
              (animationStage < 3 ? 'opacity-0 scale-90' : 'opacity-0 scale-125')}`}
          >
            <h2
              className="text-5xl font-extrabold mb-8"
              style={textShadowStyle}
            >
              CONFERENCE CHAIRWOMAN
            </h2>
            <p
              className="text-4xl font-bold"
              style={textShadowStyle}
            >
              Dr. L.TOUKAL
            </p>          
          </div>
          
          {/* Important Dates - Stage 4 */}
          <div
            className={`transition-all -mt-32 duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0
            ${animationStage === 4 ? 'opacity-100 scale-100' : 
              (animationStage < 4 ? 'opacity-0 scale-90' : 'opacity-0 scale-125')}`}
          >
            <h2
              className="text-6xl font-extrabold mb-8"
              style={textShadowStyle}
            >
              IMPORTANT DATES
            </h2>
            
            <div className="flex flex-col items-center space-y-6">
              {/* Date 1 */}
              <div className="w-full flex justify-center items-center overflow-hidden">
                <motion.div 
                  className="text-right pr-4 w-1/2"
                  initial={{ x: -200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Submission Opening :</p>
                </motion.div>
                <motion.div 
                  className="text-left pl-4 w-1/2"
                  initial={{ x: 200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Mai 01st, 2025</p>
                </motion.div>
              </div>

              {/* Date 2 */}
              <div className="w-full flex justify-center items-center overflow-hidden">
                <motion.div 
                  className="text-right pr-4 w-1/2"
                  initial={{ x: -200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Submission Deadline :</p>
                </motion.div>
                <motion.div 
                  className="text-left pl-4 w-1/2"
                  initial={{ x: 200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Octobre 28th, 2025</p>
                </motion.div>
              </div>

              {/* Date 3 */}
              <div className="w-full flex justify-center items-center overflow-hidden">
                <motion.div 
                  className="text-right pr-4 w-1/2"
                  initial={{ x: -200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.1 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Notification Acceptance :</p>
                </motion.div>
                <motion.div 
                  className="text-left pl-4 w-1/2"
                  initial={{ x: 200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.1 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Novembre 01st, 2025</p>
                </motion.div>
              </div>

              {/* Date 4 */}
              <div className="w-full flex justify-center items-center overflow-hidden">
                <motion.div 
                  className="text-right pr-4 w-1/2"
                  initial={{ x: -200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.4 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Conference Date :</p>
                </motion.div>
                <motion.div 
                  className="text-left pl-4 w-1/2"
                  initial={{ x: 200, opacity: 0 }}
                  animate={animationStage === 4 ? { x: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 1.4 }}
                  style={textShadowStyle}
                >
                  <p className="text-3xl font-bold">Novembre 18-19th, 2025</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Setif Discovery Phrase - Stage 5 */}
          <div
            className={`transition-all duration-[3000ms] ease-[cubic-bezier(0.45,0.05,0.55,0.95)] absolute left-0 right-0
            ${animationStage === 5 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={animationStage === 5 ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <h2
                className="text-6xl -mt-32 font-extrabold mb-6"
                style={textShadowStyle}
              >
                Explore Setif
              </h2>
              <p
                className="text-3xl  font-medium max-w-3xl mx-auto leading-relaxed"
                style={textShadowStyle}
              >
                We invite you to experience the cultural heritage and contemporary 
                elegance of our historic host city, Setif — where ancient traditions 
                meet academic excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;