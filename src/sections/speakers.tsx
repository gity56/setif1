// Speakers.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SpeakersProps {
  startAnimation: boolean;
  onComplete?: () => void;
}

const Speakers: React.FC<SpeakersProps> = ({ startAnimation = false, onComplete }) => {
  const [speakerGroup, setSpeakerGroup] = useState(0);

  useEffect(() => {
    if (startAnimation) {
      setSpeakerGroup(0);
      
      // Animation timing for each group - 6 GROUPS
      const timing = [
        { start: 1000, end: 8000 },    // Group 1: Show at 1s, hide at 8s
        { start: 9000, end: 16000 },   // Group 2: Show at 9s, hide at 16s
        { start: 17000, end: 24000 },  // Group 3: Show at 17s, hide at 24s
        { start: 25000, end: 32000 },  // Group 4: Show at 25s, hide at 32s
        { start: 33000, end: 40000 },  // Group 5: Show at 33s, hide at 40s
        { start: 41000, end: 48000 }   // Group 6: Show at 41s, hide at 48s
      ];
      
      const titleTimer = setTimeout(() => {
        setSpeakerGroup(0);
      }, 500);
      
      const timer1Start = setTimeout(() => {
        setSpeakerGroup(1);
      }, timing[0].start);
      
      const timer2Start = setTimeout(() => {
        setSpeakerGroup(2);
      }, timing[1].start);
      
      const timer3Start = setTimeout(() => {
        setSpeakerGroup(3);
      }, timing[2].start);
      
      const timer4Start = setTimeout(() => {
        setSpeakerGroup(4);
      }, timing[3].start);
      
      const timer5Start = setTimeout(() => {
        setSpeakerGroup(5);
      }, timing[4].start);
      
      const timer6Start = setTimeout(() => {
        setSpeakerGroup(6);
      }, timing[5].start);
      
      const completionTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, timing[5].end + 1000);
      
      return () => {
        clearTimeout(titleTimer);
        clearTimeout(timer1Start);
        clearTimeout(timer2Start);
        clearTimeout(timer3Start);
        clearTimeout(timer4Start);
        clearTimeout(timer5Start);
        clearTimeout(timer6Start);
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

  // Speaker data - 6 GROUPS
  const speakersData = [
    // Group 1
    [
      {
        name: "Dr Mohamed M. Chehimi",
        affiliation: "CNRS, University of Paris, ITODYS Laboratory",
        country: "France",
        flag: "fr",
        image: "/chehimi.png"
      },
      {
        name: "Pr Anton Ficai",
        affiliation: "Polytechnic University of Bucharest, Academy of Romanian Scientists",
        country: "Romania",
        flag: "ro",
        image: "/k2.png"
      },
      {
        name: "Dr Mohammed Alshohail",
        affiliation: "Head of CybexPSU at Prince Sultan University",
        country: "Saudi Arabia", 
        flag: "sa",
        image: "/k3.png"
      }
    ],
    // Group 2
    [
      {
        name: "Dr Mir Waqas Alam",
        affiliation: "Associate Professor, Department of Physics, College of Science, King Faisal University, Al-Hofuf",
        country: "Saudi Arabia",
        flag: "sa",
        image: "/k4.png"
      },
      {
        name: "Pr Sameh I. Ahmed",
        affiliation: "Department of Physics, College of Science, Taif University",
        country: "Saudi Arabia",
        flag: "sa",
        image: "/k7.png"
      },
      {
        name: "Pr Nadjib Baadji ",
        affiliation: "Department of Physics, Mohamed Boudiaf University of MSila",
        country: "Algeria",
        flag: "dz",
        image: "/k5.png"
      }
    ],
    // Group 3
    [
      {
        name: "Pr. Mosbah FERKHI",
        affiliation: "Professor of Electrochemistry and Renewable Energies, Mohamed Seddik Ben Yahia University of Jijel",
        country: "Algeria",
        flag: "dz",
        image: "/k6.png"
      },
      {
        name: "Pr A. YOUSEF",
        affiliation: "Cairo University",
        country: "Egypt",
        flag: "eg",
        image: "/k7.jpeg"
      },
      {
        name: "Dr Imad Belabbas",
        affiliation: "Université Abderrahmane Mira de Béjaïa",
        country: "Algeria",
        flag: "dz",
        image: "/imad.png"
      },
    ],
    // Group 4
    [
      {
        name: "Dr Samir Lounis",
        affiliation: "Forschungszentrum Jülich & Martin-Luther University of Halle-Wittenberg",
        country: "Germany",
        flag: "de",
        image: "/samir.png"
      },
      {
        name: "Pr Radhouane Chtourou",
        affiliation: "Centre de Recherches et des Technologies de l'Énergie (CRTEn)",
        country: "Tunisia",
        flag: "tn",
        image: "/chtouro.png"
      },
      {
        name: "Pr Noureddine Melikchi",
        affiliation: "NASA / University of Sussex (PhD)",
        country: "United States",
        flag: "us",
        image: "/melikchi.png"
      },
    ],
    // Group 5
    [
      {
        name: "Pr Azzedine Bousseksou",
        affiliation: "CNRS, Laboratoire de Chimie de Coordination, Toulouse",
        country: "France",
        flag: "fr",
        image: "/bbbb.png"
      },
      {
        name: "Pr Majda Sekkal",
        affiliation: "Université Djillali Liabes de Sidi Bel Abbès",
        country: "Algeria",
        flag: "dz",
        image: "/no.jpeg"
      },
      {
        name: "Dr Cherif Belebchouche",
        affiliation: "Université de Sétif 1, Faculté de Technologie",
        country: "Algeria",
        flag: "dz",
        image: "/bel.png"
      },
    ],
    // Group 6
    [
      {
        name: "Dr Najoua Barhoumi",
        affiliation: "Institut Préparatoire aux Études d'Ingénieurs d'El Manar (IPEIEM)",
        country: "Tunisia",
        flag: "tn",
        image: "/no.jpeg"
      },
    ]
  ];

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

  const speakerVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 }
  };

  // Set to 0 for normal animation, or 1-6 to force show a specific group for testing
  const forceShowGroup = 0;
  const displayGroup = forceShowGroup || speakerGroup;

  interface Speaker {
    name: string;
    affiliation: string;
    country: string;
    flag: string;
    image: string;
  }

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
            <motion.div 
              className="w-28 h-28 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white mb-3 relative mx-auto"
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
              
              <div className="bottom-0 right-0 rounded-full p-1 md:p-2 m-1">
                <img 
                  src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/${speaker.flag}.svg`} 
                  alt={`Flag of ${speaker.country}`}
                  className="w-5 h-4 md:w-6 md:h-5 rounded-sm shadow-sm"
                />
              </div>
            </motion.div>
            
            <motion.div className="text-center w-full">
              <h3 
                className="text-lg md:text-xl font-bold mb-1 text-white text-center"
                style={textShadowStyle}
              >
                {speaker.name}
              </h3>
              
              <p 
                className="text-xs md:text-sm max-w-xs mx-auto text-gray-300 text-center"
                style={textShadowStyle}
              >
                {speaker.affiliation}
              </p>
              
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
      <motion.h2
        className="text-4xl md:text-6xl font-extrabold mb-8 text-yellow-500 text-center w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={textShadowStyle}
      >
        LEAD SPEAKERS
      </motion.h2>

      <div className="w-full max-w-6xl mx-auto relative h-96 flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          {displayGroup === 1 && renderSpeakerGroup(1, speakersData[0])}
          {displayGroup === 2 && renderSpeakerGroup(2, speakersData[1])}
          {displayGroup === 3 && renderSpeakerGroup(3, speakersData[2])}
          {displayGroup === 4 && renderSpeakerGroup(4, speakersData[3])}
          {displayGroup === 5 && renderSpeakerGroup(5, speakersData[4])}
          {displayGroup === 6 && renderSpeakerGroup(6, speakersData[5])}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Speakers;