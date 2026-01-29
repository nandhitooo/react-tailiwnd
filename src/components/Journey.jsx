import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Journey.css";

const Journey = () => {
  const [activeSection, setActiveSection] = useState("education");
  const [slideDirection, setSlideDirection] = useState("");
  const [containerHeight, setContainerHeight] = useState("auto");
  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    // Update height berdasarkan section aktif
    const updateHeight = () => {
      if (activeSection === "education" && educationRef.current) {
        setContainerHeight(`${educationRef.current.scrollHeight}px`);
      } else if (activeSection === "experience" && experienceRef.current) {
        setContainerHeight(`${experienceRef.current.scrollHeight}px`);
      }
    };

    updateHeight();

    // Update height saat window di-resize
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [activeSection]);

  const handleSectionChange = (section) => {
    if (section === activeSection) return;

    // Tentukan arah slide
    const direction = section === "education" ? "slide-right" : "slide-left";
    setSlideDirection(direction);

    // Setelah animasi selesai, ubah section dan reset direction
    setTimeout(() => {
      setActiveSection(section);
      setSlideDirection("");
    }, 300);
  };

  const educationData = [
    {
      period: "2021 - 2024",
      icon: "fa-solid fa-school",
      institution: "Nganjuk State Vocational High School 1",
      major: "Major: Multimedia",
      description:
        "I completed my education at State Vocational High School 1 Nganjuk, majoring in Multimedia. Over three years, I learned graphic design, video editing, animation, and website development using HTML and CSS.",
    },
    {
      period: "2024 - Present",
      icon: "fa-solid fa-university",
      institution:
        "Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)",
      major: "Major: Informatics Engineering",
      description:
        "I am currently pursuing a degree in Informatics Engineering at the Electronic Engineering Polytechnic Institute of Surabaya (EEPIS). Here, I am further developing my skills in web development, which is my main interest.",
    },
  ];

  const experienceData = [
    {
      period: "2022 - 2023",
      icon: "fa-solid fa-print",
      position: "Intern at Sakura Digital Printing",
      description:
        "I completed a six month internship at Sakura Digital Printing Nganjuk from October 2022 to March 2023. During this time, I learned how to operate banner printing machines and handle minor technical issues on the machines.",
    },
  ];

  return (
    <div
      className="journey mt-10 py-20 text-justify items-center px-4"
      id="journey"
    >
      <h5 className="font-medium mb-2">002</h5>
      <h2 className="text-4xl font-bold mb-4">My Journey</h2>

      {/* Toggle Buttons */}
      <div className="mb-8">
        <button
          onClick={() => handleSectionChange("education")}
          className={`mt-2 px-6 py-3 font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
            activeSection === "education"
              ? "bg-yellow-400 text-black hover:bg-yellow-500 scale-105"
              : "bg-gray-700 text-white hover:bg-gray-600 hover:scale-105"
          }`}
        >
          <i className="fa-solid fa-graduation-cap mr-2"></i>
          Education
        </button>
        <button
          onClick={() => handleSectionChange("experience")}
          className={`mt-2 ml-4 px-6 py-3 font-semibold rounded-lg transition-all duration-300 cursor-pointer ${
            activeSection === "experience"
              ? "bg-yellow-400 text-black hover:bg-yellow-500 scale-105"
              : "bg-gray-700 text-white hover:bg-gray-600 hover:scale-105"
          }`}
        >
          <i className="fa-solid fa-briefcase mr-2"></i>
          Experience
        </button>
      </div>

      {/* Animated Container dengan dynamic height */}
      <div
        className={`relative transition-all duration-300 ease-in-out ${slideDirection}`}
        style={{ height: containerHeight }}
      >
        {/* Education Section */}
        <div
          ref={educationRef}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
            activeSection === "education"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full pointer-events-none"
          }`}
        >
          <div className="education-section space-y-6">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className="education text-xl text-gray-300 bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <h3 className="text-lg font-bold text-yellow-400">
                    {edu.period}
                  </h3>
                </div>
                <h4 className="font-bold text-xl mb-2">
                  <i className={`${edu.icon} mr-3 text-yellow-400`}></i>
                  {edu.institution}
                </h4>
                <div className="inline-block bg-gray-900 px-4 py-1 rounded-full mb-4">
                  <h4 className="font-semibold text-gray-200">{edu.major}</h4>
                </div>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div
          ref={experienceRef}
          className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
            activeSection === "experience"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="experience-section space-y-6">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="experience text-xl text-gray-300 bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <h3 className="text-lg font-bold text-yellow-400">
                    {exp.period}
                  </h3>
                </div>
                <h4 className="font-bold text-xl mb-4">
                  <i className={`${exp.icon} mr-3 text-yellow-400`}></i>
                  {exp.position}
                </h4>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
