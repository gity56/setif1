import { useState, useEffect, useRef } from "react";
import '../index.css'

export default function AlgerianRepublicPage({ onSkip }: { onSkip: () => void }) {
  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const fullTitleText = "Democratic and Popular Algerian Republic";
  const fullSubtitleText = "Ministry of Higher Education and Scientific Research";
  const [titleComplete, setTitleComplete] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // New state variables for additional text elements
  const [universityText, setUniversityText] = useState("");
  const [facultyText, setFacultyText] = useState("");
  const [departmentText, setDepartmentText] = useState("");
  const [labText, setLabText] = useState("");
  const [organizeText, setOrganizeText] = useState("");
  const [congressText, setCongressText] = useState("");
  const [icictText, setIcictText] = useState("");
  const [dateText, setDateText] = useState("");
  const [auditoriumText, setAuditoriumText] = useState("");
  
  // Track completion states
  const [universityComplete, setUniversityComplete] = useState(false);
  const [facultyComplete, setFacultyComplete] = useState(false);
  const [departmentComplete, setDepartmentComplete] = useState(false);
  const [labComplete, setLabComplete] = useState(false);
  const [organizeComplete, setOrganizeComplete] = useState(false);
  const [congressComplete, setCongressComplete] = useState(false);
  const [icictComplete, setIcictComplete] = useState(false);
  const [dateComplete, setDateComplete] = useState(false);
  
  // Full text constants
  const fullUniversityText = "Setif-1 University Ferhat ABBAS";
  const fullFacultyText = "Faculty of Technology";
  const fullDepartmentText = "Department of Basic Education In Technology";
  const fullLabText = "Electrochemistry And Materials Laboratory";
  const fullOrganizeText = "Organize";
  const fullCongressText = "1st International Congress On Innovations In Chemistry And Technology";
  const fullIcictText = "ICICT-2025";
  const fullDateText = "18-19th November 2025";
  const fullAuditoriumText = "Auditorium Mouloud Kassem Nait Belkassem";
  
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation delay constants (in ms)
  const typeSpeed = 30;  
  useEffect(() => {
    // Animation for section visibility
    setIsVisible(true);
    
    // Type the title text
    if (titleText.length < fullTitleText.length) {
      const timeout = setTimeout(() => {
        setTitleText(fullTitleText.substring(0, titleText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (!titleComplete) {
      setTitleComplete(true);
    }
  }, [titleText, titleComplete]);

  useEffect(() => {
    // Start typing the subtitle only after title is complete
    if (titleComplete && subtitleText.length < fullSubtitleText.length) {
      const timeout = setTimeout(() => {
        setSubtitleText(fullSubtitleText.substring(0, subtitleText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (titleComplete && subtitleText.length === fullSubtitleText.length && !subtitleComplete) {
      setSubtitleComplete(true);
    }
  }, [subtitleText, titleComplete, subtitleComplete]);

  // University text animation
  useEffect(() => {
    if (subtitleComplete && universityText.length < fullUniversityText.length) {
      const timeout = setTimeout(() => {
        setUniversityText(fullUniversityText.substring(0, universityText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (subtitleComplete && universityText.length === fullUniversityText.length && !universityComplete) {
      setUniversityComplete(true);
    }
  }, [universityText, subtitleComplete, universityComplete]);

  // Faculty text animation
  useEffect(() => {
    if (universityComplete && facultyText.length < fullFacultyText.length) {
      const timeout = setTimeout(() => {
        setFacultyText(fullFacultyText.substring(0, facultyText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (universityComplete && facultyText.length === fullFacultyText.length && !facultyComplete) {
      setFacultyComplete(true);
    }
  }, [facultyText, universityComplete, facultyComplete]);

  // Department text animation
  useEffect(() => {
    if (facultyComplete && departmentText.length < fullDepartmentText.length) {
      const timeout = setTimeout(() => {
        setDepartmentText(fullDepartmentText.substring(0, departmentText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (facultyComplete && departmentText.length === fullDepartmentText.length && !departmentComplete) {
      setDepartmentComplete(true);
    }
  }, [departmentText, facultyComplete, departmentComplete]);

  // Lab text animation
  useEffect(() => {
    if (departmentComplete && labText.length < fullLabText.length) {
      const timeout = setTimeout(() => {
        setLabText(fullLabText.substring(0, labText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (departmentComplete && labText.length === fullLabText.length && !labComplete) {
      setLabComplete(true);
    }
  }, [labText, departmentComplete, labComplete]);

  // Organize text animation
  useEffect(() => {
    if (labComplete && organizeText.length < fullOrganizeText.length) {
      const timeout = setTimeout(() => {
        setOrganizeText(fullOrganizeText.substring(0, organizeText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (labComplete && organizeText.length === fullOrganizeText.length && !organizeComplete) {
      setOrganizeComplete(true);
    }
  }, [organizeText, labComplete, organizeComplete]);

  // Congress text animation
  useEffect(() => {
    if (organizeComplete && congressText.length < fullCongressText.length) {
      const timeout = setTimeout(() => {
        setCongressText(fullCongressText.substring(0, congressText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (organizeComplete && congressText.length === fullCongressText.length && !congressComplete) {
      setCongressComplete(true);
    }
  }, [congressText, organizeComplete, congressComplete]);

  // ICICT text animation
  useEffect(() => {
    if (congressComplete && icictText.length < fullIcictText.length) {
      const timeout = setTimeout(() => {
        setIcictText(fullIcictText.substring(0, icictText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (congressComplete && icictText.length === fullIcictText.length && !icictComplete) {
      setIcictComplete(true);
    }
  }, [icictText, congressComplete, icictComplete]);

  // Date text animation
  useEffect(() => {
    if (icictComplete && dateText.length < fullDateText.length) {
      const timeout = setTimeout(() => {
        setDateText(fullDateText.substring(0, dateText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (icictComplete && dateText.length === fullDateText.length && !dateComplete) {
      setDateComplete(true);
    }
  }, [dateText, icictComplete, dateComplete]);

  // Auditorium text animation
  useEffect(() => {
    if (dateComplete && auditoriumText.length < fullAuditoriumText.length) {
      const timeout = setTimeout(() => {
        setAuditoriumText(fullAuditoriumText.substring(0, auditoriumText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [auditoriumText, dateComplete]);

  const textShadowStyle = {
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  };

  return (
    <div 
      ref={sectionRef}
      className="fixed font1 inset-0 w-screen h-screen bg-[#FFFDF6] overflow-auto"
    >
      {/* Skip button in top right corner */}
      <button 
        onClick={onSkip}
        className="fixed top-4 right-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded-lg shadow-md transition-all duration-300 z-50"
      >
        Skip
      </button>
      
      <div className="flex ml-16 flex-col items-center justify-center text-center p-4 min-h-screen">
        {/* Content container with animation */}
        <div 
          className={`flex flex-col items-center transform transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {/* Centered image */}
          <div className="flex justify-end items-center mb-6">
            <img 
              src="/bg1000.png" 
              alt="Algerian Republic Emblem" 
              className="w-70 mll  h-auto  object-contain mx-auto"
            />
                        <img 
              src="/u1.png" 
              alt="Algerian Republic Emblem" 
              className="w-48 mt-16   h-auto  object-contain mx-auto"
            />
          </div>
          
          {/* Main title with typing animation */}
          <h1 
            className="text-4xl md:text-5xl font-bold -mt-12 text-amber-900 mb-4 min-h-[80px] mx-auto text-center"
            style={textShadowStyle}
          >
            {titleText}
            {titleText.length < fullTitleText.length && <span className="animate-pulse">|</span>}
          </h1>
          
          {/* Subtitle with typing animation */}
          <h2 
            className="text-2xl md:text-3xl font-semibold text-amber-800 mb-6 min-h-[60px] mx-auto text-center"
            style={textShadowStyle}
          >
            {subtitleText}
            {titleComplete && subtitleText.length < fullSubtitleText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h2>
          
          {/* Additional text elements with sequential animations */}
          <div className="flex flex-col items-center space-y-5 w-full">
            {/* University */}
            <div className={`transition-all duration-500 ${subtitleComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-700 mx-auto text-center">
                {universityText}
                {subtitleComplete && universityText.length < fullUniversityText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h3>
            </div>
            
            {/* Faculty */}
            <div className={`transition-all duration-500 ${universityComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mx-auto text-center">
                {facultyText}
                {universityComplete && facultyText.length < fullFacultyText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h3>
            </div>
            
            {/* Department */}
            <div className={`transition-all duration-500 ${facultyComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mx-auto text-center">
                {departmentText}
                {facultyComplete && departmentText.length < fullDepartmentText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h3>
            </div>
            
            {/* Lab */}
            <div className={`transition-all duration-500 ${departmentComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mx-auto text-center">
                {labText}
                {departmentComplete && labText.length < fullLabText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h3>
            </div>
            
            {/* Organize */}
            <div className={`transition-all duration-500 ${labComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-600 mx-auto text-center">
                {organizeText}
                {labComplete && organizeText.length < fullOrganizeText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h3>
            </div>
            
            {/* Congress */}
            <div className={`transition-all duration-500 ${organizeComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mx-auto text-center">
                {congressText}
                {organizeComplete && congressText.length < fullCongressText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h2>
            </div>
            
            {/* ICICT */}
            <div className={`transition-all duration-500 ${congressComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-800 italic mx-auto text-center">
                {icictText}
                {congressComplete && icictText.length < fullIcictText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h2>
            </div>
            
            {/* Date */}
            <div className={`transition-all duration-500 ${icictComplete ? 'opacity-100' : 'opacity-0'} w-full`}>
              <h3 className="text-2xl md:text-3xl font-bold text-amber-700 italic mx-auto text-center">
                {dateText}
                {icictComplete && dateText.length < fullDateText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h3>
            </div>
            
            {/* Auditorium */}
            <div className={`transition-all duration-500 ${dateComplete ? 'opacity-100' : 'opacity-0'} w-full mb-8`}>
              <h3 className="text-xl md:text-2xl font-semibold text-amber-600 mx-auto text-center">
                {auditoriumText}
                {dateComplete && auditoriumText.length < fullAuditoriumText.length && (
                  <span className="animate-pulse">|</span>
                )}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}