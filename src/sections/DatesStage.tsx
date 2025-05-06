
// DatesStage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface DatesStageProps {
  animationStage: number;
  onComplete: () => void; // Add this prop
}

const DatesStage: React.FC<DatesStageProps> = ({ animationStage, onComplete }) => {
  // Define the dates with their corresponding titles
  const importantDates = [
    { date: 'September 5, 2023', title: 'Abstract Submission' },
    { date: 'September 15, 2023', title: 'Full Paper Submission' },
    { date: 'September 30, 2023', title: 'Notification of Acceptance' },
    { date: 'October 10, 2023', title: 'Camera-Ready Paper Submission' },
    { date: 'October 15, 2023', title: 'Early Bird Registration Deadline' },
    { date: 'November 1-3, 2023', title: 'Conference Dates' }
  ];

  // Notify parent when animation is complete
  useEffect(() => {
    if (animationStage === 6) {
      // Wait for a reasonable time to allow all dates to animate in
      const timer = setTimeout(() => {
        onComplete();
      }, 8000); // Adjust time as needed to ensure all dates have animated

      return () => clearTimeout(timer);
    }
  }, [animationStage, onComplete]);

  if (animationStage !== 6) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-8 w-full flex flex-col items-center justify-center text-center"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-6 text-center w-full"
      >
        Important Dates
      </motion.h2>
      
      <div className="flex flex-col items-center justify-center w-full">
        {importantDates.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.3, duration: 0.8 }}
            className="flex items-center mb-4 w-full max-w-xl mx-auto"
          >
            <div className="w-1/2 pr-4 text-right">
              <span className="font-semibold text-yellow-300">{item.date}</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-yellow-300 mx-4"></div>
            <div className="w-1/2 pl-4 text-left">
              <span>{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default DatesStage;