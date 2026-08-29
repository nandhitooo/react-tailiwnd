import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const skillsData = [
  { name: "HTML", icon: "fa-brands fa-html5", color: "hover:text-orange-500" },
  { name: "CSS", icon: "fa-brands fa-css3-alt", color: "hover:text-blue-500" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "hover:text-yellow-500" },
  { name: "React", icon: "fa-brands fa-react", color: "hover:text-sky-400" },
  { name: "Node", icon: "fa-brands fa-node-js", color: "hover:text-green-500" },
  { name: "Java", icon: "fa-brands fa-java", color: "hover:text-red-500" },
  { name: "Design", icon: "fa-solid fa-images", color: "hover:text-purple-500" },
  { name: "Editing", icon: "fa-solid fa-video", color: "hover:text-pink-500" },
  { name: "Laravel", icon: "fa-brands fa-laravel", color: "hover:text-red-600" },
  { name: "Flutter", icon: "fa-brands fa-flutter", color: "hover:text-cyan-500" },
];

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="flex items-center justify-center bg-transparent text-zinc-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full px-6">
        <Reveal animation="motion-preset-fade motion-duration-700">
          <h5 className="font-bold text-amber-500 dark:text-amber-400 mb-2 flex items-center gap-2 text-sm sm:text-base uppercase tracking-[0.2em]">
            <span className="w-8 sm:w-12 h-[2px] bg-amber-400"></span>
            {t("skills.eyebrow")}
          </h5>
          <h2 className="text-3xl sm:text-5xl font-black mb-12">
            {t("skills.heading1")}{" "}
            <span className="text-gradient">{t("skills.heading2")}</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.map((skill, index) => (
            <Reveal
              key={skill.name}
              animation="motion-preset-fade motion-duration-700"
            >
              <div className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:-translate-y-1 transition-all duration-300 group cursor-default h-full">
                <div
                  className={`text-3xl sm:text-4xl transition-colors duration-300 ${skill.color}`}
                >
                  <Icon icon={skill.icon} />
                </div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
