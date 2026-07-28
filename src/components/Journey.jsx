import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { icon } from "@fortawesome/fontawesome-svg-core";

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
      icon: <Icon icon="fa-solid fa-school" />,
      title: "Nganjuk State Vocational High School 1",
      subtitle: "Major: Multimedia",
      desc: "I completed my education at State Vocational High School 1 Nganjuk, majoring in Multimedia. Over three years, I learned graphic design, photography, video editing, animation, and website development using HTML and CSS",
    },
    {
      period: "2024 - Present",
      icon: <Icon icon="fa-solid fa-university" />,
      title: "Electronic Engineering Polytechnic Institute of Surabaya (EEPIS)",
      subtitle: "Major: Informatics Engineering",
      desc: "I am currently pursuing a degree in Informatics Engineering at the Electronic Engineering Polytechnic Institute of Surabaya (EEPIS). Here, I am further developing my skills in web development, which is my main interest.",
    },
  ];

  const experienceData = [
    {
      period: "2022 - 2023",
      icon: <Icon icon="fa-solid fa-briefcase" />,
      title: "Intern at Sakura Digital Printing",
      desc: "I completed a six month internship at Sakura Digital Printing Nganjuk from October 2022 to March 2023. During this time, I learned how to operate banner printing machines and handle minor technical issues on the machines.",
    },
    {
      period: "2026 - Present",
      icon: <Icon icon="fa-solid fa-briefcase" />,
      title: "Intern at CV. AGSATU",
      desc: "Currently i'm doing internship at CV. AGSATU Kediri, where I am responsible to develop web application and mobile application for clients. We use Laravel for web, flutter for mobile apps, and postgreSQL for database."
    }
  ];

  const data = active === "education" ? educationData : experienceData;
  const activeRef = active === "education" ? educationRef : experienceRef;

  return (
    <section
      id="journey"
      className="journey flex items-center justify-center bg-transparent text-zinc-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full px-6">
        <Reveal animation="motion-preset-fade motion-duration-1000">
          <h5 className="font-bold text-yellow-500 dark:text-yellow-400 mb-2 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-8 sm:w-12 h-[2px] bg-yellow-400"></span>
            002 / My Path
          </h5>
          <h2 className="text-3xl sm:text-5xl font-black mb-12">
            Life <span className="text-gradient">Journey</span>
          </h2>
        </Reveal>

        <Reveal animation="motion-preset-fade motion-delay-200 motion-duration-1000">
          <div className="mb-12 flex flex-wrap gap-4 sm:gap-6 bg-gray-100/50 dark:bg-zinc-900/50 p-2 rounded-[2rem] w-fit backdrop-blur-md border border-gray-200/50 dark:border-zinc-800/50">
            <button
              onClick={() => setActive("education")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-2xl transition-all duration-500 cursor-pointer font-bold text-sm sm:text-base ${
                active === "education"
                  ? "bg-yellow-400 text-black shadow-[0_8px_30px_rgb(250,204,21,0.3)] scale-105"
                  : "text-gray-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50"
              }`}
            >
              <Icon icon="fa-solid fa-graduation-cap" />
              Education
            </button>

            <button
              onClick={() => setActive("experience")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-2xl transition-all duration-500 cursor-pointer font-bold text-sm sm:text-base ${
                active === "experience"
                  ? "bg-yellow-400 text-black shadow-[0_8px_30px_rgb(250,204,21,0.3)] scale-105"
                  : "text-gray-500 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-zinc-800/50"
              }`}
            >
              <Icon icon="fa-solid fa-briefcase" />
              Experience
            </button>
          </div>
        </Reveal>

        <div
          className="relative transition-all duration-700"
          style={{ height }}
        >
          <div
            ref={activeRef}
            className="absolute top-0 left-0 w-full h-full transition-all duration-700 opacity-100"
          >
            <div className="space-y-8 relative before:absolute before:left-[17px] sm:before:left-[33px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gray-200 dark:before:bg-zinc-800">
              {data.map((item, i) => {
                const delays = [
                  "motion-delay-0",
                  "motion-delay-200",
                  "motion-delay-400",
                  "motion-delay-600",
                ];
                return (
                  <Reveal
                    key={`${active}-${i}`}
                    animation={`motion-preset-slide-right ${delays[i] || "motion-delay-600"} motion-duration-1000 motion-ease-in-out`}
                  >
                    <div className="relative pl-12 sm:pl-24 group">
                      <div className="absolute left-[10px] sm:left-[26px] top-[30px] w-4 h-4 rounded-full bg-yellow-400 ring-4 ring-white dark:ring-zinc-950 z-10 shadow-[0_0_15px_rgba(250,204,21,0.5)] group-hover:scale-125 group-hover:bg-yellow-300 transition-all duration-500"></div>
                      <div className="glass-card p-6 sm:p-8 rounded-[2rem] hover:-translate-y-2 hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500 border border-transparent hover:border-yellow-500/20 group-hover:bg-white/40 dark:group-hover:bg-zinc-900/40 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 dark:bg-yellow-400/5 rounded-bl-full -z-10 transition-all duration-500 group-hover:scale-110"></div>
                        <span className="text-xs sm:text-sm font-bold text-yellow-500 uppercase tracking-widest block mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                          {item.period}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black mb-4 flex items-center gap-3 text-zinc-900 dark:text-white">
                          <span className="text-yellow-500 dark:text-yellow-400 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">{item.icon}</span>
                          {item.title}
                        </h4>
                        {item.subtitle && (
                          <span className="inline-block px-4 py-1.5 bg-gray-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full text-xs font-bold mb-6 text-zinc-700 dark:text-zinc-300 border border-gray-200/50 dark:border-zinc-700/50">
                            {item.subtitle}
                          </span>
                        )}
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
