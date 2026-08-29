import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { useLanguage } from "../context/LanguageContext";

const TypingRoles = ({ roles }) => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    setRoleIndex(0);
    setText("");
    setPhase("typing");
  }, [roles]);

  useEffect(() => {
    const current = roles[roleIndex % roles.length] || "";
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 55);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1400);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 900);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(current.slice(0, text.length - 1)), 30);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, roleIndex, roles]);

  return (
    <h3 className="text-lg sm:text-xl md:text-2xl text-amber-500 dark:text-amber-400 font-bold">
      {text}
      <span className="inline-block w-[2px] h-[1em] align-middle ml-1 bg-amber-500 dark:bg-amber-400 animate-pulse" />
    </h3>
  );
};

const Home = () => {
  const { t } = useLanguage();
  const roles = t("home.roles");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent text-zinc-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
    >
      <div className="text-center items-center z-10 px-4 sm:px-6 mt-16 sm:mt-0 max-w-3xl">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-zinc-200/60 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/50 backdrop-blur-md motion-preset-slide-down motion-duration-700 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-300 shadow-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-2 animate-pulse"></span>
          {t("home.badge")}
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-tight leading-tight md:leading-none motion-preset-slide-up motion-duration-700 motion-ease-in-out">
          {t("home.greeting")}{" "}
          <span className="text-gradient">Fernandhito</span>
        </h1>

        <p className="text-lg sm:text-2xl md:text-3xl text-zinc-500 dark:text-zinc-400 mb-8 sm:mb-10 font-medium tracking-wide motion-preset-slide-up motion-delay-100 motion-duration-700 motion-ease-in-out max-w-2xl mx-auto">
          {t("home.taglineLead")}{" "}
          <span className="text-zinc-900 dark:text-white italic relative inline-block">
            {t("home.taglineHighlight")}
            <span className="absolute bottom-0 sm:bottom-1 left-0 w-full h-1 sm:h-2 bg-amber-400/40 -z-10 -rotate-1"></span>
          </span>
        </p>

        <div className="motion-preset-fade motion-delay-200 motion-duration-700 h-8 sm:h-10">
          <TypingRoles roles={roles} />
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 motion-preset-slide-up motion-delay-300 motion-duration-700">
          <button
            aria-label={t("home.linkedin")}
            className="glass-card group relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:border-amber-400/50"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/fernandhito-dian-pratama-657279417/",
              );
            }}
          >
            <Icon icon="fa-brands fa-linkedin text-xl sm:text-2xl group-hover:text-amber-500 transition-colors duration-300" />
          </button>
          <button
            aria-label={t("home.github")}
            className="glass-card group relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:border-amber-400/50"
            onClick={() => {
              window.open("https://github.com/nandhitooo");
            }}
          >
            <Icon icon="fa-brands fa-github text-xl sm:text-2xl group-hover:text-amber-500 transition-colors duration-300" />
          </button>
          <button
            aria-label={t("home.contact")}
            className="glass-card group relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:-translate-y-1 transition-all duration-300 hover:border-amber-400/50"
            onClick={() => {
              const goTotSection = document.getElementById("contact");
              if (goTotSection) {
                goTotSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Icon icon="fa-solid fa-envelope text-xl sm:text-2xl group-hover:text-amber-500 transition-colors duration-300" />
          </button>
        </div>
      </div>

      <button
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-zinc-400 hover:text-amber-500 hover:translate-y-1 transition-all duration-300 motion-safe:animate-bounce motion-preset-fade motion-delay-700 motion-duration-700"
        aria-label="Scroll to About"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <Icon icon="fas fa-chevron-down text-xl sm:text-2xl" />
      </button>
    </section>
  );
};

export default Home;
