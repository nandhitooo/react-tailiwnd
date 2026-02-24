import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Journey.css";

const Journey = () => {
  const [active, setActive] = useState("education");
  const [height, setHeight] = useState("auto");

  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  useEffect(() => {
    const ref = active === "education" ? educationRef : experienceRef;
    if (ref.current) {
      setHeight(`${ref.current.scrollHeight}px`);
    }

    const handleResize = () => {
      if (ref.current) {
        setHeight(`${ref.current.scrollHeight}px`);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [active]);

  const educationData = [
    {
      period: "2021 - 2024",
      icon: "fa-solid fa-school",
      title: "Nganjuk State Vocational High School 1",
      subtitle: "Major: Multimedia",
      desc: "I completed my education at State Vocational High School 1 Nganjuk, majoring in Multimedia. Over three years, I learned graphic design, video editing, animation, and website development using HTML and CSS",
    },
    {
      period: "2024 - Present",
      icon: "fa-solid fa-university",
      title: "Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)",
      subtitle: "Major: Informatics Engineering",
      desc: "I am currently pursuing a degree in Informatics Engineering at the Electronic Engineering Polytechnic Institute of Surabaya (EEPIS). Here, I am further developing my skills in web development, which is my main interest.",
    },
  ];

  const experienceData = [
    {
      period: "2022 - 2023",
      icon: "fa-solid fa-print",
      title: "Intern at Sakura Digital Printing",
      desc: "I completed a six month internship at Sakura Digital Printing Nganjuk from October 2022 to March 2023. During this time, I learned how to operate banner printing machines and handle minor technical issues on the machines.",
    },
  ];

  const data = active === "education" ? educationData : experienceData;
  const activeRef = active === "education" ? educationRef : experienceRef;

  return (
    <section
      id="journey"
      className="journey flex items-center justify-center bg-zinc-900 text-white"
    >
      <div className="w-full mt-10 py-20 px-4">
        <h5 className="font-medium mb-2 text-yellow-400">002</h5>
        <h2 className="text-4xl font-bold mb-6">My Journey</h2>

        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => setActive("education")}
            className={`btn ${active === "education" && "active"}`}
          >
            <i className="fa-solid fa-graduation-cap mr-2"></i>
            Education
          </button>

          <button
            onClick={() => setActive("experience")}
            className={`btn ${active === "experience" && "active"}`}
          >
            <i className="fa-solid fa-briefcase mr-2"></i>
            Experience
          </button>
        </div>

        <div
          className="relative transition-all duration-300"
          style={{ height }}
        >
          <div
            ref={activeRef}
            className="absolute top-0 left-0 w-full h-full transition-all duration-500 opacity-100 translate-x-0"
          >
            <div className="space-y-6">
              {data.map((item, i) => (
                <div key={i} className="card">
                  <h3 className="period">{item.period}</h3>

                  <h4 className="title">
                    <i className={`${item.icon} mr-3 text-yellow-400`}></i>
                    {item.title}
                  </h4>

                  {item.subtitle && (
                    <div className="badge">{item.subtitle}</div>
                  )}

                  <p className="desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
