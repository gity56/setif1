import { useState, useEffect, useRef } from "react";
import "../index.css";

export default function AlgerianRepublicPage() {
  const [titleText, setTitleText] = useState("");
  const [subtitleText, setSubtitleText] = useState("");
  const fullTitleText = "Democratic and Popular Algerian Republic";
  const fullSubtitleText = "Ministry of Higher Education and Scientific Research";
  const [titleComplete, setTitleComplete] = useState(false);
  const [subtitleComplete, setSubtitleComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [universityText, setUniversityText] = useState("");
  const [facultyText, setFacultyText] = useState("");
  const [departmentText, setDepartmentText] = useState("");
  const [labText, setLabText] = useState("");
  const [organizeText, setOrganizeText] = useState("");
  const [congressText, setCongressText] = useState("");
  const [icictText, setIcictText] = useState("");
  const [dateText, setDateText] = useState("");
  const [auditoriumText, setAuditoriumText] = useState("");

  const [universityComplete, setUniversityComplete] = useState(false);
  const [facultyComplete, setFacultyComplete] = useState(false);
  const [departmentComplete, setDepartmentComplete] = useState(false);
  const [labComplete, setLabComplete] = useState(false);
  const [organizeComplete, setOrganizeComplete] = useState(false);
  const [congressComplete, setCongressComplete] = useState(false);
  const [icictComplete, setIcictComplete] = useState(false);
  const [dateComplete, setDateComplete] = useState(false);

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
  const typeSpeed = 30;

  useEffect(() => {
    setIsVisible(true);
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
    if (titleComplete && subtitleText.length < fullSubtitleText.length) {
      const timeout = setTimeout(() => {
        setSubtitleText(fullSubtitleText.substring(0, subtitleText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else if (titleComplete && subtitleText.length === fullSubtitleText.length && !subtitleComplete) {
      setSubtitleComplete(true);
    }
  }, [subtitleText, titleComplete, subtitleComplete]);

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

  useEffect(() => {
    if (dateComplete && auditoriumText.length < fullAuditoriumText.length) {
      const timeout = setTimeout(() => {
        setAuditoriumText(fullAuditoriumText.substring(0, auditoriumText.length + 1));
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }
  }, [auditoriumText, dateComplete]);

  const textShadowStyle = {
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
  };

  return (
    <div
      ref={sectionRef}
      className="fixed font1 inset-0 w-screen h-screen bg-[#FFFDF6] overflow-auto"
    >


      <div className="flex items-center justify-center min-h-screen p-4 text-center">
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div
            className={`flex flex-col items-center transform  transition-all duration-1000 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
          >
            <div className="flex justify-center ml-52 items-center gap-8 mb-6">
              <img
                src="/bg1000.png"
                alt="Emblem"
                className="w-50  h-auto object-contain"
              />
              <img
                src="/u1.png"
                alt="University Logo"
                className="w-48 h-auto mt-16 object-contain"
              />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold  -mt-12 text-amber-900 mb-4 min-h-[80px]" style={textShadowStyle}>
              {titleText}
              {titleText.length < fullTitleText.length && <span className=" animate-pulse">|</span>}
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold ml-20 text-amber-800 mb-6 min-h-[60px]" style={textShadowStyle}>
              {subtitleText}
              {titleComplete && subtitleText.length < fullSubtitleText.length && <span className="animate-pulse">|</span>}
            </h2>

            <div className="flex flex-col items-center space-y-5 w-full">
              {(
                [
                  [universityText, fullUniversityText, subtitleComplete],
                  [facultyText, fullFacultyText, universityComplete],
                  [departmentText, fullDepartmentText, facultyComplete],
                  [labText, fullLabText, departmentComplete],
                  [organizeText, fullOrganizeText, labComplete],
                  [congressText, fullCongressText, organizeComplete],
                  [icictText, fullIcictText, congressComplete],
                  [dateText, fullDateText, icictComplete],
                  [auditoriumText, fullAuditoriumText, dateComplete],
                ] as [string, string, boolean][]
              ).map(([text, fullText, show], index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ${show ? "opacity-100" : "opacity-0"} w-full`}
                >
                  <h3 className="text-xl md:text-2xl font-semibold text-amber-700 mx-auto text-center">
                    {text}
                    {show && text.length < fullText.length && <span className="animate-pulse">|</span>}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
