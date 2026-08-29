import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const projectLinks = [
  {
    tags: [
      <Icon icon="fa-brands fa-flutter" />,
      <Icon icon="fa-brands fa-dart-lang" />,
    ],
    link: "https://github.com/nandhitooo/wgywm-app.git",
  },
  {
    tags: [<Icon icon="fa-brands fa-js" />, <Icon icon="fa-brands fa-react" />],
    link: "https://github.com/nandhitooo/front-end-kasir",
  },
  {
    tags: [
      <Icon icon="fa-brands fa-python" />,
      <Icon icon="fa-brands fa-discord" />,
    ],
    link: "https://github.com/nandhitooo/Jarvis_Bot_DC.git",
  },
  {
    tags: [<Icon icon="fa-brands fa-js" />, <Icon icon="fa-brands fa-react" />],
    link: "https://github.com/nandhitooo/react-tailiwnd.git",
  },
  {
    tags: [<Icon icon="fa-brands fa-java" />],
    link: "https://github.com/nandhitooo/Virtual-Pet-Games-Java",
  },
  {
    tags: [<Icon icon="fa-brands fa-js" />, <Icon icon="fa-brands fa-react" />],
    link: "https://github.com/nandhitooo/BUMDESMA.git",
  },
];

const Project = () => {
  const { t } = useLanguage();
  const items = t("projects.items") || [];
  const projects = items.map((item, i) => ({ ...item, ...projectLinks[i] }));

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-transparent text-zinc-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full px-6">
        <Reveal animation="motion-preset-fade motion-duration-700">
          <h5 className="font-bold text-amber-500 dark:text-amber-400 mb-2 flex items-center gap-2 text-sm sm:text-base uppercase tracking-[0.2em]">
            <span className="w-8 sm:w-12 h-[2px] bg-amber-400"></span>
            {t("projects.eyebrow")}
          </h5>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-5xl font-black">
              {t("projects.heading1")}{" "}
              <span className="text-gradient">{t("projects.heading2")}</span>
            </h2>
            <button
              className="px-6 py-3 glass-card rounded-full text-xs sm:text-sm font-bold hover:bg-amber-400 hover:text-black transition-all duration-300 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/nandhitooo?tab=repositories")
              }
            >
              {t("projects.exploreAll")}{" "}
              <Icon icon="fa-solid fa-arrow-right ml-2" />
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Reveal
              key={index}
              animation="motion-preset-slide-up motion-duration-700"
            >
              <div className="group glass-card p-6 sm:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                <div className="flex gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="w-10 h-10 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 rounded-lg text-zinc-900 dark:text-white font-bold group-hover:bg-amber-400 group-hover:text-black transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-amber-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-8 line-clamp-3 leading-relaxed">
                  {project.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    {t("projects.viewCode")}{" "}
                    <Icon icon="fa-solid fa-arrow-right-long text-amber-500" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
