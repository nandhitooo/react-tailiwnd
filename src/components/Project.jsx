import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Reveal from "./Reveal";

const Project = () => {
  const projects = [
    {
      title: "Workout Recording Application",
      tags: [
        { icon: "fa-brands fa-flutter" },
        { icon: "fa-brands fa-dart-lang" },
      ],
      desc: "workout recording application built with flutter and dart programming language. This project is my first mobile application project and it is a simple workout recording application.",
      link: "https://github.com/nandhitooo/wgywm-app.git",
    },
    {
      title: "Cashier App",
      tags: [{ icon: "fa-brands fa-js" }, { icon: "fa-brands fa-react" }],
      desc: "A simple Front-end cashier application built with Javascript and React.js. Manage sales, track inventory, and generate reports.",
      link: "https://github.com/nandhitooo/front-end-kasir",
    },
    {
      title: "Back-end Cashier App",
      tags: [{ icon: "fa-brands fa-node-js" }, { text: "Hapi.js" }],
      desc: "A back-end cashier application built with Node.js and Hapi.js framework. Responsible for server-side logic and API endpoints.",
      link: "https://github.com/nandhitooo/back-end-kasir",
    },
    {
      title: "Personal Blog",
      tags: [{ icon: "fa-brands fa-js" }, { icon: "fa-brands fa-react" }],
      desc: "A personal blog website built with Javascript and React + Vite + Tailwind CSS. Showcase thoughts and experiences.",
      link: "https://github.com/nandhitooo/biography",
    },
    {
      title: "Virtual-Pet Games",
      tags: [{ icon: "fa-brands fa-java" }],
      desc: "A CLI-Based game built with Java. Interact with virtual pets: feeding, playing, and caring.",
      link: "https://github.com/nandhitooo/Virtual-Pet-Games-Java",
    },
    {
      title: "React Corporate Website",
      tags: [{ icon: "fa-brands fa-js" }, { icon: "fa-brands fa-react" }],
      desc: "Corporate website designed to showcase a professional and modern online presence for a business.",
      link: "https://github.com/nandhitooo/react-corporate-semester2",
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
          <h2 className="text-3xl sm:text-5xl font-black mb-12 flex items-center justify-between flex-wrap gap-6">
            Featured <span className="text-gradient">Projects</span>
            <button
              className="w-full sm:w-auto px-6 py-3 glass-card rounded-full text-xs sm:text-sm font-bold hover:bg-yellow-400 hover:text-black transition-all duration-500 cursor-pointer shadow-lg hover:shadow-yellow-400/20"
              onClick={() =>
                window.open("https://github.com/nandhitooo?tab=repositories")
              }
            >
              Explore All <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </h2>
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
                        {tag.icon ? (
                          <i className={tag.icon}></i>
                        ) : (
                          <span className="text-[10px]">{tag.text}</span>
                        )}
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
                      <i className="fa-solid fa-arrow-right-long text-yellow-500"></i>
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
