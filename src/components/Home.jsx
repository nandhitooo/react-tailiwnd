import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import picture from "./assets/picture.jpg";
import Contact from "./Contact";

const Home = () => {
  const text = "Welcome...!!";
  const typingText = () => {
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
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl motion-safe:animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl motion-safe:animate-pulse motion-delay-500"></div>

      <div className="text-center items-center z-10 px-4 sm:px-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-tight leading-tight md:leading-none motion-preset-slide-up motion-duration-1000 motion-ease-in-out">
          Hi, I'm <span className="text-gradient">Fernandhito</span>
        </h1>
        <p className="text-base sm:text-2xl md:text-3xl text-gray-500 dark:text-gray-400 mb-8 sm:mb-10 font-medium tracking-wide motion-preset-slide-up motion-delay-200 motion-duration-1000 motion-ease-in-out">
          Crafting Digital Experiences with{" "}
          <span className="text-zinc-900 dark:text-zinc-100 italic">
            Passion
          </span>
        </p>
        <div className="motion-preset-fade motion-delay-500 motion-duration-1000">
          {typingText()}
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-10 sm:mt-12 motion-preset-slide-up motion-delay-700 motion-duration-1000">
          <button
            className="glass-card w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:scale-110 hover:shadow-yellow-400/20 transition-all duration-500"
            onClick={() => {
              window.open("");
            }}
          >
            <i className="fa-brands fa-linkedin text-lg sm:text-2xl"></i>
          </button>
          <button
            className="glass-card w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:scale-110 hover:shadow-yellow-400/20 transition-all duration-500"
            onClick={() => {
              window.open("https://github.com/nandhitooo");
            }}
          >
            <i className="fa-brands fa-github text-lg sm:text-2xl"></i>
          </button>
          <button
            className="glass-card w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl text-zinc-900 dark:text-white font-semibold cursor-pointer hover:scale-110 hover:shadow-yellow-400/20 transition-all duration-500"
            onClick={() => {
              const goTotSection = document.getElementById("contact");
              if (goTotSection) {
                goTotSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <i className="fa-solid fa-envelope text-lg sm:text-2xl"></i>
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
        <i className="fas fa-chevron-down fa-xl sm:fa-2x"></i>
      </button>
    </section>
  );
};

export default Home;
