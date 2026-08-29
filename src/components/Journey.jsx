import React, { useState, useEffect, useRef } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const Journey = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("education");
  const [height, setHeight] = useState("auto");

  const educationRef = useRef(null);
  const experienceRef = useRef(null);

  const educationData = (t("journey.educationItems") || []).map((item) => ({
    ...item,
    icon: <Icon icon="fa-solid fa-school" />,
  }));

  const experienceData = (t("journey.experienceItems") || []).map((item) => ({
    ...item,
    icon: <Icon icon="fa-solid fa-briefcase" />,
  }));

  const data = active === "education" ? educationData : experienceData;
  const activeRef = active === "education" ? educationRef : experienceRef;

  useEffect(() => {
    const ref = activeRef;
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
  }, [active, data]);

  return (
    <section
      id="journey"
      className="journey flex items-center justify-center bg-transparent text-zinc-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full px-6">
        <Reveal animation="motion-preset-fade motion-duration-700">
          <h5 className="font-bold text-amber-500 dark:text-amber-400 mb-2 flex items-center gap-2 text-sm sm:text-base uppercase tracking-[0.2em]">
            <span className="w-8 sm:w-12 h-[2px] bg-amber-400"></span>
            {t("journey.eyebrow")}
          </h5>
          <h2 className="text-3xl sm:text-5xl font-black mb-12">
            {t("journey.heading1")}{" "}
            <span className="text-gradient">{t("journey.heading2")}</span>
          </h2>
        </Reveal>

        <Reveal animation="motion-preset-fade motion-delay-100 motion-duration-700">
          <div className="mb-12 flex flex-wrap gap-2 bg-zinc-100/60 dark:bg-zinc-900/50 p-2 rounded-2xl w-fit backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50">
            <button
              onClick={() => setActive("education")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 cursor-pointer font-bold text-sm sm:text-base ${
                active === "education"
                  ? "bg-amber-400 text-black shadow-sm"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Icon icon="fa-solid fa-graduation-cap" />
              {t("journey.education")}
            </button>

            <button
              onClick={() => setActive("experience")}
              className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl transition-all duration-300 cursor-pointer font-bold text-sm sm:text-base ${
                active === "experience"
                  ? "bg-amber-400 text-black shadow-sm"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              }`}
            >
              <Icon icon="fa-solid fa-briefcase" />
              {t("journey.experience")}
            </button>
          </div>
        </Reveal>

        <div
          className="relative transition-all duration-500"
          style={{ height }}
        >
          <div
            ref={activeRef}
            className="absolute top-0 left-0 w-full h-full transition-all duration-500 opacity-100"
          >
            <div className="space-y-8 relative before:absolute before:left-[17px] sm:before:left-[33px] before:top-4 before:bottom-4 before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
              {data.map((item, i) => (
                <Reveal
                  key={`${active}-${i}`}
                  animation="motion-preset-slide-right motion-duration-700 motion-ease-in-out"
                >
                  <div className="relative pl-12 sm:pl-24 group">
                    <div className="absolute left-[10px] sm:left-[26px] top-[30px] w-4 h-4 rounded-full bg-amber-400 ring-4 ring-white dark:ring-zinc-950 z-10"></div>
                    <div className="glass-card p-6 sm:p-8 rounded-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                      <span className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-widest block mb-2">
                        {item.period}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-black mb-4 flex items-center gap-3 text-zinc-900 dark:text-white">
                        <span className="text-amber-500 dark:text-amber-400 text-2xl">
                          {item.icon}
                        </span>
                        {item.title}
                      </h4>
                      {item.subtitle && (
                        <span className="inline-block px-4 py-1.5 bg-zinc-100/80 dark:bg-zinc-800/80 backdrop-blur-sm rounded-full text-xs font-bold mb-6 text-zinc-700 dark:text-zinc-300 border border-zinc-200/50 dark:border-zinc-700/50">
                          {item.subtitle}
                        </span>
                      )}
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm sm:text-base font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
