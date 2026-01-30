import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

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

    return <h3 id="typing-text">{displayText}</h3>;
  };

  return (
    <div
      className="home items-center justify-center text-center mt-10 px-4 py-20"
      id="home"
    >
      <h3 className="text-2xl text-gray-400 font-bold mb-4">{typingText()}</h3>
      <h2 className="lg:text-6xl text-yellow-400 font-bold mb-4 md:text-4xl text-4xl">
        Fernandhito Pratama
      </h2>
      <p className="text-3xl text-gray-300 mx-auto mb-4 md:text-2xl sm:text-xl">
        Do your best, let God do the rest.
      </p>
      <button
        className="mt-6 px-6 py-3 mr-2 bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition duration-300 cursor-pointer"
        onClick={() =>
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact Me <i class="fa-solid fa-paper-plane"></i>
      </button>
      <a
        href="https://github.com/nandhitooo"
        target="blank"
        className="fa-brands fa-github mx-2 text-2xl"
      ></a>
      <a
        href=""
        target="blank"
        className="fa-brands fa-linkedin mx-2 text-2xl"
      ></a>
      <a
        href="https://www.instagram.com/nandh1tooo_/"
        target="blank"
        className="fa-brands fa-instagram mx-2 text-2xl"
      ></a>
    </div>
  );
};

export default Home;
