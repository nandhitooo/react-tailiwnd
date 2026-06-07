import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Reveal from "./Reveal";

const Skills = () => {
  const skillsData = [
    {
      name: "HTML",
      icon: "fa-brands fa-html5",
      color: "hover:text-orange-500",
    },
    {
      name: "CSS",
      icon: "fa-brands fa-css3-alt",
      color: "hover:text-blue-500",
    },
    {
      name: "JavaScript",
      icon: "fa-brands fa-js",
      color: "hover:text-yellow-500",
    },
    { name: "React", icon: "fa-brands fa-react", color: "hover:text-blue-400" },
    {
      name: "Node",
      icon: "fa-brands fa-node-js",
      color: "hover:text-green-500",
    },
    { name: "Java", icon: "fa-brands fa-java", color: "hover:text-red-500" },
    {
      name: "Design",
      icon: "fa-solid fa-images",
      color: "hover:text-purple-500",
    },
    {
      name: "Editing",
      icon: "fa-solid fa-video",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section
      id="skills"
      className="flex items-center justify-center bg-transparent text-zinc-900 dark:text-white py-24 transition-colors duration-1000"
    >
      <div className="max-w-6xl w-full px-6">
        <Reveal animation="motion-preset-fade motion-duration-1000">
          <h5 className="font-bold text-yellow-500 dark:text-yellow-400 mb-2 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-8 sm:w-12 h-[2px] bg-yellow-400"></span>
            003 / Tech Stack
          </h5>
          <h2 className="text-3xl sm:text-5xl font-black mb-12">
            Expertise & <span className="text-gradient">Tools</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill, index) => {
            const delays = [
              "motion-delay-0",
              "motion-delay-100",
              "motion-delay-200",
              "motion-delay-300",
              "motion-delay-400",
              "motion-delay-500",
              "motion-delay-600",
              "motion-delay-700",
            ];
            return (
              <Reveal
                key={skill.name}
                animation={`motion-preset-fade motion-duration-1000 ${delays[index] || "motion-delay-700"}`}
              >
                <div className="glass-card p-6 sm:p-8 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:scale-105 transition-all duration-500 group cursor-default h-full">
                  <div
                    className={`text-3xl sm:text-4xl transition-colors duration-500 ${skill.color}`}
                  >
                    <i className={skill.icon}></i>
                  </div>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-500">
                    {skill.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
