import '../index.css';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  onSeeMore: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSeeMore }) => {
  // Define animationStage with a number type instead of letting it be inferred as a literal type
  const [animationStage, setAnimationStage] = useState<number>(0);
  const [welcomeText, setWelcomeText] = useState("");
  const [universityText, setUniversityText] = useState("");
  const [facultyText, setFacultyText] = useState("");
  const [departmentText, setDepartmentText] = useState("");
  const [labText, setLabText] = useState("");
  const [congressText, setCongressText] = useState("");
  const [icictText, setIcictText] = useState("");
  const [dateText, setDateText] = useState("");

  useEffect(() => {
    // Stage 0: Welcome text typing
    const fullWelcomeText = "WELCOME";
    let welcomeIndex = 0;
    
    const welcomeTyping = setInterval(() => {
      if (welcomeIndex <= fullWelcomeText.length) {
        setWelcomeText(fullWelcomeText.slice(0, welcomeIndex));
        welcomeIndex++;
      } else {
        clearInterval(welcomeTyping);
        setTimeout(() => {
          setAnimationStage(1);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(welcomeTyping);
  }, []);

  useEffect(() => {
    if (animationStage === 1) {
      // Stage 1: University info typing
      const fullUniversityText = "Setif-1 University Ferhat ABBAS";
      const fullFacultyText = "Faculty of Technology";
      const fullDepartmentText = "Department of Basic Education In Technology";
      const fullLabText = "Electrochemistry And Materials Laboratory";
      
      let universityIndex = 0;
      
      const universityTyping = setInterval(() => {
        if (universityIndex <= fullUniversityText.length) {
          setUniversityText(fullUniversityText.slice(0, universityIndex));
          universityIndex++;
        } else {
          clearInterval(universityTyping);
          
          // Start faculty typing after university completes
          let facultyIndex = 0;
          const facultyTyping = setInterval(() => {
            if (facultyIndex <= fullFacultyText.length) {
              setFacultyText(fullFacultyText.slice(0, facultyIndex));
              facultyIndex++;
            } else {
              clearInterval(facultyTyping);
              
              // Start department typing after faculty completes
              let departmentIndex = 0;
              const departmentTyping = setInterval(() => {
                if (departmentIndex <= fullDepartmentText.length) {
                  setDepartmentText(fullDepartmentText.slice(0, departmentIndex));
                  departmentIndex++;
                } else {
                  clearInterval(departmentTyping);
                  
                  // Start lab typing after department completes
                  let labIndex = 0;
                  const labTyping = setInterval(() => {
                    if (labIndex <= fullLabText.length) {
                      setLabText(fullLabText.slice(0, labIndex));
                      labIndex++;
                    } else {
                      clearInterval(labTyping);
                      setTimeout(() => {
                        setAnimationStage(2);
                      }, 1000);
                    }
                  }, 50);
                }
              }, 50);
            }
          }, 50);
        }
      }, 50);

      return () => clearInterval(universityTyping);
    }
  }, [animationStage]);

  useEffect(() => {
    if (animationStage === 2) {
      // Stage 2: Congress info typing
      const fullCongressText = "1st International Congress On Innovations In Chemistry And Technology";
      const fullIcictText = "ICICT-2025";
      const fullDateText = "18-19th November 2025";
      
      let congressIndex = 0;
      
      const congressTyping = setInterval(() => {
        if (congressIndex <= fullCongressText.length) {
          setCongressText(fullCongressText.slice(0, congressIndex));
          congressIndex++;
        } else {
          clearInterval(congressTyping);
          
          // Start ICICT typing after congress completes
          let icictIndex = 0;
          const icictTyping = setInterval(() => {
            if (icictIndex <= fullIcictText.length) {
              setIcictText(fullIcictText.slice(0, icictIndex));
              icictIndex++;
            } else {
              clearInterval(icictTyping);
              
              // Start date typing after ICICT completes
              let dateIndex = 0;
              const dateTyping = setInterval(() => {
                if (dateIndex <= fullDateText.length) {
                  setDateText(fullDateText.slice(0, dateIndex));
                  dateIndex++;
                } else {
                  clearInterval(dateTyping);
                }
              }, 100);
            }
          }, 100);
        }
      }, 50);

      return () => clearInterval(congressTyping);
    }
  }, [animationStage]);

  const textShadowStyle = {
    textShadow: '3px 3px 6px rgba(0,0,0,0.9), -3px -3px 6px rgba(0,0,0,0.9)',
  };

  return (
    <div className="fixed font1 inset-0 w-screen h-screen overflow-hidden m-0 p-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0 brightness-75"
      >
        <source src="/v1.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center text-white p-8 max-w-5xl">
          {/* Welcome Message - Stage 0 */}
          <div
            className={`transition-all duration-1000 absolute left-0 right-0 
            ${animationStage === 0 ? 'opacity-100' : 'opacity-0'}`}
          >
            <h1
              className="text-8xl font-extrabold tracking-wider mb-12 typing-cursor"
              style={textShadowStyle}
            >
              {welcomeText}
              <span className="typing-cursor-blink">|</span>
            </h1>
          </div>

          {/* University Information - Stage 1 */}
          <div
            className={`transition-all -mt-20 duration-1000 absolute left-0 right-0
            ${animationStage === 1 ? 'opacity-100' : 'opacity-0'}`}
          >
            <h2
              className="text-5xl font-bold mb-12"
              style={textShadowStyle}
            >
              {universityText}
              {animationStage === 1 && universityText && !facultyText && <span className="typing-cursor-blink">|</span>}
            </h2>
            <div className="space-y-8 mb-12 text-5xl font-semibold">
              <p style={textShadowStyle}>
                {facultyText}
                {animationStage === 1 && facultyText && !departmentText && <span className="typing-cursor-blink">|</span>}
              </p>
              <p style={textShadowStyle}>
                {departmentText}
                {animationStage === 1 && departmentText && !labText && <span className="typing-cursor-blink">|</span>}
              </p>
              <p style={textShadowStyle}>
                {labText}
                {animationStage === 1 && labText && animationStage !== 1 && <span className="typing-cursor-blink">|</span>}
              </p>
            </div>
          </div>

          {/* Conference Information - Stage 2 */}
          <div
            className={`transition-all -mt-32 duration-1000 absolute left-0 right-0
            ${animationStage === 2 ? 'opacity-100' : 'opacity-0'}`}
          >
            <h1
              className="text-5xl font-extrabold mb-12 leading-tight"
              style={textShadowStyle}
            >
              {congressText}
              {animationStage === 2 && congressText && !icictText && <span className="typing-cursor-blink">|</span>}
            </h1>
            <h3
              className="text-6xl font-extrabold italic mb-12"
              style={textShadowStyle}
            >
              {icictText}
              {animationStage === 2 && icictText && !dateText && <span className="typing-cursor-blink">|</span>}
            </h3>
            <p
              className="text-4xl font-bold"
              style={textShadowStyle}
            >
              {dateText}
              {animationStage === 2 && dateText && dateText.length === "18-19th November 2025".length && <span className="typing-cursor-blink">|</span>}
            </p>

            {/* Button appears after typing completes */}
            {dateText === "18-19th November 2025" && (
              <StyledWrapper>
                <button className="learn-more" onClick={onSeeMore}>
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow" />
                  </span>
                  <span className="button-text">see More</span>
                </button>
              </StyledWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  margin-top: 2rem;
  button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }

  button.learn-more {
    width: 12rem;
    height: auto;
  }

  button.learn-more .circle {
    transition: all 0.35s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #EEEEEE;
    border-radius: 1.625rem;
  }

  button.learn-more .circle .icon {
    transition: all 0.35s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #000;
  }

  button.learn-more .circle .icon.arrow {
    transition: all 0.35s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }

  button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #000;
    border-right: 0.125rem solid #000;
    transform: rotate(45deg);
  }

  button.learn-more .button-text {
    transition: all 0.35s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #EEEEEE;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }

  button:hover .circle {
    width: 100%;
    background: #EEEEEE;
  }

  button:hover .circle .icon.arrow::before {
    border-top: 0.125rem solid #000000;
    border-right: 0.125rem solid #000000;
  }

  button:hover .button-text {
    color: #000000;
  }
`;

export default Header;