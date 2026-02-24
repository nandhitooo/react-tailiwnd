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
      <h3 id="typing-text" className="text-2xl md:text-3xl text-yellow-400">
        {displayText}
      </h3>
    );
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-zinc-900 text-white"
    >
      <div className="text-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm Fernandhito
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          A passionate Frontend Developer
        </p>
        {typingText()}

        <button className="bg-yellow-400 px-3 py-3 mt-8 mx-1 rounded-lg text-zinc-900 font-semibold text-md cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => {
            window.open("");
          }}>
            <i className="fa-brands fa-linkedin"></i>
          </button>
        <button
          className="bg-yellow-400 px-3 py-3 mt-8 mx-1 rounded-lg text-zinc-900 font-semibold text-md cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => {
            window.open("https://github.com/nandhitooo");
          }}
        >
          <i className="fa-brands fa-github"></i>
        </button>
        <button
          className="bg-yellow-400 px-3 py-3 mt-8 mx-1 rounded-lg text-zinc-900 font-semibold text-md cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => {
            const goTotSection = document.getElementById("contact");
            if (goTotSection) {
              goTotSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <i className="fa-solid fa-envelope"></i>
        </button>
      </div>
      <button
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-yellow-400"
        onClick={() => {
          const aboutSection = document.getElementById("about");
          if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <i className="fas fa-chevron-down fa-2x"></i>
      </button>
    </section>
  );
};

export default Home;
