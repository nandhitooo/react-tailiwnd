import React from "react";
import Icon from "./Icon";
import profilePict from "../components/assets/picture.webp";
import Reveal from "./Reveal";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  const tags = [t("about.tag1"), t("about.tag2"), t("about.tag3")];

  return (
    <section
      id="about"
      className="flex items-center justify-center bg-transparent text-zinc-900 dark:text-white py-16 sm:py-24 transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 sm:w-96 h-64 sm:h-96 bg-amber-400/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
        <Reveal animation="motion-preset-slide-right motion-duration-700">
          <div className="relative mx-auto lg:mx-0 max-w-sm sm:max-w-none">
            <div className="relative glass-card p-3 sm:p-4 rounded-2xl overflow-hidden">
              <img
                src={profilePict}
                alt="Fernandhito Dian Pratama"
                loading="lazy"
                className="w-full aspect-square object-cover rounded-xl shadow-lg"
              />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 flex gap-2">
                <span className="glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  {t("about.availableForHire")}
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal animation="motion-preset-slide-left motion-duration-700">
          <div className="flex flex-col text-center lg:text-left">
            <h5 className="font-bold text-amber-500 dark:text-amber-400 mb-4 sm:mb-6 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-base tracking-[0.2em] uppercase">
              <span className="w-8 sm:w-12 h-[2px] bg-amber-400"></span>
              {t("about.eyebrow")}
            </h5>

            <div className="mb-8 sm:mb-10 relative">
              <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] sm:leading-[0.85] mb-4 text-zinc-900 dark:text-white">
                Fernandhito <br />
                <span className="text-gradient">Pratama</span>
              </h2>
              <div className="h-1 sm:h-1.5 w-24 sm:w-32 bg-amber-400 rounded-full mt-4 sm:mt-6 mx-auto lg:mx-0"></div>
            </div>

            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-zinc-600 dark:text-zinc-300 tracking-tight italic">
              "
              <span className="text-zinc-900 dark:text-white not-italic border-b-2 border-amber-400/50">
                {t("about.quote")}
              </span>
              "
            </h3>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8 sm:mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-lg text-[10px] sm:text-sm font-bold hover:bg-amber-400 hover:text-black hover:border-amber-400 transition-all duration-300 cursor-default shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-left mb-10 sm:mb-12">
              <p>
                <span className="font-bold text-zinc-900 dark:text-white">
                  {t("about.paragraph1Name")}
                </span>
                {t("about.paragraph1Rest")}
              </p>
              <p>{t("about.paragraph2")}</p>
            </div>

            <button
              className="w-full sm:w-fit px-8 sm:px-10 py-4 sm:py-5 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest rounded-xl hover:bg-amber-400 dark:hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-lg flex items-center justify-center gap-4 group cursor-pointer"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1zP5JIae-ynLXkj1kahyGIKncwGomZDnJ/view?usp=sharing",
                )
              }
            >
              {t("about.downloadResume")}
              <Icon icon="fa-solid fa-file-arrow-down group-hover:translate-y-1 transition-transform text-lg sm:text-xl" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
