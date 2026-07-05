import React from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

const Project = () => {
  const projects = [
    {
      title: "Workout Recording Application",
      tags: [
        <Icon icon="fa-brands fa-flutter" />,
        <Icon icon="fa-brands fa-dart-lang" />,
      ],
      desc: "workout recording application built with flutter and dart programming language. This project is my first mobile application project and it is a simple workout recording application.",
      link: "https://github.com/nandhitooo/wgywm-app.git",
    },
    {
      title: "Cashier App",
      tags: [
        <Icon icon="fa-brands fa-js" />,
        <Icon icon="fa-brands fa-react" />,
      ],
      desc: "A simple Front-end cashier application built with Javascript and React.js. Manage orders, calculate totals, and provide a user-friendly interface for cashiers.",
      link: "https://github.com/nandhitooo/front-end-kasir",
    },
    {
      title: "Discord Bot",
      tags: [
        <Icon icon="fa-brands fa-python" />,
        <Icon icon="fa-brands fa-discord" />,
      ],
      desc: "A Discord bot built with python, it provides various functionalities for Discord servers and i made it integrated with various APIs.",
      link: "https://github.com/nandhitooo/Jarvis_Bot_DC.git",
    },
    {
      title: "Personal Website",
      tags: [
        <Icon icon="fa-brands fa-js" />,
        <Icon icon="fa-brands fa-react" />,
      ],
      desc: "A personal website built with Javascript and React + Vite + Tailwind CSS (which is this website). Showcase thoughts and experiences.",
      link: "https://github.com/nandhitooo/react-tailiwnd.git",
    },
    {
      title: "Virtual-Pet Games",
      tags: [<Icon icon="fa-brands fa-java" />],
      desc: "A CLI-Based game built with Java. Interact with virtual pets: feeding, playing, and caring.",
      link: "https://github.com/nandhitooo/Virtual-Pet-Games-Java",
    },
    {
      title: "Company Website",
      tags: [
        <Icon icon="fa-brands fa-js" />,
        <Icon icon="fa-brands fa-react" />,
      ],
      desc: "Company website designed to showcase a professional and modern online presence for a business.",
      link: "https://github.com/nandhitooo/BUMDESMA.git",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-transparent text-zinc-900 dark:text-white py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl w-full px-6">
        <Reveal animation="motion-preset-fade motion-duration-1000">
          <h5 className="font-bold text-yellow-500 dark:text-yellow-400 mb-2 flex items-center gap-2 text-sm sm:text-base">
            <span className="w-8 sm:w-12 h-[2px] bg-yellow-400"></span>
            004 / Portfolio
          </h5>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl sm:text-5xl font-black">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <button
              className="px-6 py-3 glass-card rounded-full text-xs sm:text-sm font-bold hover:bg-yellow-400 hover:text-black transition-all duration-500 cursor-pointer shadow-lg hover:shadow-yellow-400/20"
              onClick={() =>
                window.open("https://github.com/nandhitooo?tab=repositories")
              }
            >
              Explore All <Icon icon="fa-solid fa-arrow-right ml-2" />
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => {
            const delays = [
              "motion-delay-0",
              "motion-delay-150",
              "motion-delay-300",
              "motion-delay-450",
              "motion-delay-600",
              "motion-delay-750",
            ];
            return (
              <Reveal
                key={index}
                animation={`motion-preset-slide-up motion-duration-1000 ${delays[index] || "motion-delay-750"}`}
              >
                <div className="group glass-card p-6 sm:p-8 rounded-[2rem] hover:-translate-y-2 transition-all duration-500 flex flex-col h-full">
                  <div className="flex gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 rounded-xl text-zinc-900 dark:text-white font-bold group-hover:bg-yellow-400 group-hover:text-black transition-colors duration-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-yellow-500 transition-colors duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-8 line-clamp-3 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between">
                    <a
                      href={project.link}
                      className="text-sm font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all"
                    >
                      View Code{" "}
                      <Icon icon="fa-solid fa-arrow-right-long text-yellow-500" />
                    </a>
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white dark:border-zinc-900 shadow-sm"></div>
                      <div className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-white dark:border-zinc-900 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
