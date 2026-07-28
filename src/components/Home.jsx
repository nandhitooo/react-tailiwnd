import React from "react";
import Icon from "./Icon";
import Contact from "./Contact";

const Home = () => {
  const text = "Welcome...!!";
  const TypingText = () => {
    const [displayText, setDisplayText] = React.useState("");
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
      const speed = 80;
      const delayBeforeStart = 5000;

      let timeout;
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setDisplayText("");
          setIndex(0);
        }, delayBeforeStart);
      }
      return () => clearTimeout(timeout);
    }, [index]);

    return (
      <h3
        id="typing-text"
        className="text-xl sm:text-2xl md:text-3xl text-yellow-500 dark:text-yellow-400 font-bold"
      >
        {displayText}
      </h3>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-transparent text-zinc-900 dark:text-white transition-colors duration-300 relative overflow-hidden"
    >

      <div className="text-center items-center z-10 px-4 sm:px-6 mt-16 sm:mt-0">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-gray-200/50 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md motion-preset-slide-down motion-duration-1000 text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300 shadow-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
          Available for new projects
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-tight leading-tight md:leading-none motion-preset-slide-up motion-duration-1000 motion-ease-in-out">
          Hi, I'm <span className="text-gradient drop-shadow-sm">Fernandhito</span>
        </h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mb-8 sm:mb-10 font-medium tracking-wide motion-preset-slide-up motion-delay-200 motion-duration-1000 motion-ease-in-out max-w-2xl mx-auto">
          Crafting Premium Digital Experiences with{" "}
          <span className="text-zinc-900 dark:text-white italic relative inline-block">
            Passion
            <span className="absolute bottom-0 sm:bottom-1 left-0 w-full h-1 sm:h-2 bg-yellow-400/40 -z-10 rotate-[-2deg]"></span>
          </span>
        </p>
        <div className="motion-preset-fade motion-delay-500 motion-duration-1000 h-8 sm:h-10">
          <TypingText />
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 motion-preset-slide-up motion-delay-700 motion-duration-1000">
          <button
            className="glass-card group relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(250,204,21,0.5)] transition-all duration-500 border border-gray-200/50 dark:border-zinc-700/50 hover:border-yellow-400/50 overflow-hidden"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/fernandhito-dian-pratama-657279417/",
              );
            }}
          >
            <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-500"></div>
            <Icon icon="fa-brands fa-linkedin text-xl sm:text-2xl group-hover:text-yellow-500 transition-colors duration-300" />
          </button>
          <button
            className="glass-card group relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(250,204,21,0.5)] transition-all duration-500 border border-gray-200/50 dark:border-zinc-700/50 hover:border-yellow-400/50 overflow-hidden"
            onClick={() => {
              window.open("https://github.com/nandhitooo");
            }}
          >
            <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-500"></div>
            <Icon icon="fa-brands fa-github text-xl sm:text-2xl group-hover:text-yellow-500 transition-colors duration-300" />
          </button>
          <button
            className="glass-card group relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(250,204,21,0.5)] transition-all duration-500 border border-gray-200/50 dark:border-zinc-700/50 hover:border-yellow-400/50 overflow-hidden"
            onClick={() => {
              const goTotSection = document.getElementById("contact");
              if (goTotSection) {
                goTotSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-500"></div>
            <Icon icon="fa-solid fa-envelope text-xl sm:text-2xl group-hover:text-yellow-500 transition-colors duration-300" />
          </button>
        </div>
      </div>
      <button
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-yellow-500 hover:translate-y-2 transition-all duration-500 motion-safe:animate-bounce motion-preset-fade motion-delay-1000 motion-duration-1000"
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
