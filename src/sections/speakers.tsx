// Speakers.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpeakersProps {
  startAnimation: boolean;
  onComplete?: () => void; // Optional callback for when all animations complete
}

const Speakers: React.FC<SpeakersProps> = ({ startAnimation = false, onComplete }) => {
  const [speakerGroup, setSpeakerGroup] = useState(0);

  useEffect(() => {
    // Only start animations if startAnimation is true
    if (startAnimation) {
      // Reset to initial state
      setSpeakerGroup(0);
      
      // Animation timing for each group
      const timing = [
        { start: 1000, end: 8000 },    // Group 1: Show at 1s, hide at 8s
        { start: 9000, end: 16000 },   // Group 2: Show at 9s, hide at 16s
        { start: 17000, end: 24000 }   // Group 3: Show at 17s, hide at 24s
      ];
      
      // Show title first
      const titleTimer = setTimeout(() => {
        setSpeakerGroup(0);
      }, 500);
      
      // Group 1
      const timer1Start = setTimeout(() => {
        setSpeakerGroup(1);
      }, timing[0].start);
      
      // Group 2
      const timer2Start = setTimeout(() => {
        setSpeakerGroup(2);
      }, timing[1].start);
      
      // Group 3
      const timer3Start = setTimeout(() => {
        setSpeakerGroup(3);
      }, timing[2].start);
      
      // Signal completion after all animations are done
      const completionTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, timing[2].end + 1000); // Add an extra second after the last group
      
      return () => {
        clearTimeout(titleTimer);
        clearTimeout(timer1Start);
        clearTimeout(timer2Start);
        clearTimeout(timer3Start);
        clearTimeout(completionTimer);
      };
    }
  }, [startAnimation, onComplete]);

  const textShadowStyle = {
    textShadow: '3px 3px 6px rgba(0,0,0,0.9), -3px -3px 6px rgba(0,0,0,0.9)',
  };

  const imageShadowStyle = {
    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.7))'
  };

  // Speaker data with country codes for flag-icon-css and image paths
  const speakersData = [
    // Group 1
    [
      {
        name: "Dr Mohamed M. Chehimi",
        affiliation: "CNRS, University of Paris, ITODYS Laboratory",
        country: "France",
        flag: "fr", // country code for flag-icon-css
        image: "/k1.png" // Path to the speaker's image
      },
      {
        name: "Pr Anton Ficai",
        affiliation: "Polytechnic University of Bucharest, Academy of Romanian Scientists",
        country: "Romania",
        flag: "ro", // country code for flag-icon-css
        image: "/k2.png" // Path to the speaker's image
      },
      {
        name: "Dr Mohammed Alshohail",
        affiliation: "Head of CybexPSU at Prince Sultan University",
        country: "Saudi Arabia", 
        flag: "sa", // country code for flag-icon-css
        image: "/k3.png" // Path to the speaker's image
      }
    ],
    // Group 2
    [
      {
        name: "Dr Mir Waqas Alam",
        affiliation: "Associate Professor, Department of Physics, College of Science, King Faisal University, Al-Hofuf",
        country: "Saudi Arabia",
        flag: "sa", // country code for flag-icon-css
        image: "/k4.png" // Path to the speaker's image
      },
      {
        name: "Pr Sameh I. Ahmed",
        affiliation: "Department of Physics, College of Science, Taif University",
        country: "Saudi Arabia",
        flag: "sa", // country code for flag-icon-css
        image: "/k7.png" // Path to the speaker's image
      },
      {
        name: "Pr Nadjib Baadji ",
        affiliation: "Department of Physics, Mohamed Boudiaf University of MSila",
        country: "Algeria",
        flag: "dz", // country code for flag-icon-css
        image: "/k5.png" // Path to the speaker's image
      }
    ],
    // Group 3
    [
      {
        name: "Pr. Mosbah FERKHI",
        affiliation: "Professor of Electrochemistry and Renewable Energies, Mohamed Seddik Ben Yahia University of Jijel",
        country: "Algeria",
        flag: "dz", // country code for flag-icon-css
        image: "/k6.png" // Path to the speaker's image
      },
            {
        name: "Pr A.YOUSEF",
        affiliation: "Cairo University",
        country: "Egypt",
        flag: "eg", // country code for flag-icon-css
        image: "/k7.jpeg" // Path to the speaker's image
      },
    ]
  ];

  // Animation container and variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { 
        duration: 0.6,
      }
    }
  };

  // Speaker item animation variants
  const speakerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
  };

  // For testing purposes - normally this should be 0 for production
  const forceShowGroup = 0; // Set to 1, 2, or 3 to force show that group, or 0 for normal animation flow
  const displayGroup = forceShowGroup || speakerGroup;

  // Speaker interface definition
  interface Speaker {
    name: string;
    affiliation: string;
    country: string;
    flag: string;
    image: string;
  }

  // Function to render a speaker group
  const renderSpeakerGroup = (groupIndex: number, groupData: Speaker[]) => {
    return (
      <motion.div 
        key={`group${groupIndex}`}
        className="flex justify-center items-center space-x-4 md:space-x-12 flex-wrap md:flex-nowrap w-full mx-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        style={{ justifyContent: 'center' }}
      >
        {groupData.map((speaker: Speaker, index: number) => (
          <motion.div
            key={`group${groupIndex}-${index}`}
            className="flex flex-col items-center mb-8 md:mb-0 text-center flex-shrink-0"
            variants={speakerVariants}
            transition={{ duration: 0.8, delay: 0.2 * index }}
            style={{ minWidth: '200px', maxWidth: '250px' }}
          >
            {/* Speaker Image */}
            <motion.div 
              className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white mb-3 relative mx-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={imageShadowStyle}
            >
              <img 
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/api/placeholder/200/200";
                }}
              />
              
              {/* Country flag overlay */}
              <div className="absolute bottom-0 right-0 bg-yellow-500 rounded-full p-1 md:p-2 m-1">
                <img 
                  src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${speaker.flag}.svg`} 
                  alt={`Flag of ${speaker.country}`}
                  className="w-5 h-4 md:w-6 md:h-5 rounded-sm shadow-sm"
                />
              </div>
            </motion.div>
            
            {/* Speaker Info */}
            <motion.div className="text-center w-full">
              {/* Speaker Name */}
              <h3 
                className="text-lg md:text-xl font-bold mb-1 text-white text-center"
                style={textShadowStyle}
              >
                {speaker.name}
              </h3>
              
              {/* Affiliation */}
              <p 
                className="text-xs md:text-sm max-w-xs mx-auto text-gray-300 text-center"
                style={textShadowStyle}
              >
                {speaker.affiliation}
              </p>
              
              {/* Country with small flag */}
              <div className="mt-1 text-sm md:text-base flex items-center justify-center">
                <img 
                  src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${speaker.flag}.svg`} 
                  alt={`Flag of ${speaker.country}`}
                  className="w-3 h-2 md:w-4 md:h-3 mr-1 rounded-sm shadow-sm"
                />
                <span style={textShadowStyle} className="text-gray-200">{speaker.country}</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className="text-center mt-12 text-white py-8 relative flex flex-col items-center justify-center w-full overflow-visible bg-transparent min-h-screen">
      {/* Title - Always visible */}
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-8 text-yellow-500 text-center w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={textShadowStyle}
      >
        LEAD SPEAKERS
      </motion.h2>

      {/* Speaker Groups - Only one visible at a time */}
      <div className="w-full max-w-6xl mx-auto relative h-96 flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          {displayGroup === 1 && renderSpeakerGroup(1, speakersData[0])}
          {displayGroup === 2 && renderSpeakerGroup(2, speakersData[1])}
          {displayGroup === 3 && renderSpeakerGroup(3, speakersData[2])}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Speakers;