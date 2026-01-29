import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Project = () => {
  return (
    <div
      className="project mt-10 py-20 text-justify items-center px-4"
      id="projects"
    >
      <h5 className="font-medium mb-2">003</h5>
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <p className="mt-6 text-xl text-gray-300">
        Here are some of my projects that showcase my skills in front-end
        development and UI/UX design. Each project highlights my ability to
        create responsive, user-friendly, and visually appealing web
        applications using modern technologies.
      </p>
      <div className="project_cards mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Profile Website</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-html5"></i>
          </span>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
            <i class="fa-brands fa-css3-alt"></i>
          </span>
          <p className="text-gray-300 mt-4">
            This is my first project as an informatics engineering student.
          </p>
          <p className="mt-4">
            <i className="fa-solid fa-code-branch mr-2"></i>
            <a
              href="https://github.com/nandhitooo/final-project-semester1"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              View Project
              <i className="fa-solid fa-chevron-right ml-0.5"></i>
            </a>
          </p>
        </div>
        <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Front-end Cashier App</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-js"></i>
          </span>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
            <i class="fa-brands fa-react"></i>
          </span>
          <p className="text-gray-300 mt-4">
            A simple Front-end cashier application built with Javascript and
            React.js.
          </p>
          <p className="mt-4">
            <i className="fa-solid fa-code-branch mr-2"></i>
            <a
              href="https://github.com/nandhitooo/front-end-kasir"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              View Project
              <i className="fa-solid fa-chevron-right ml-0.5"></i>
            </a>
          </p>
        </div>
        <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Back-end Cashier App</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-node-js"></i>
          </span>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
            Hapi.js
          </span>
          <p className="text-gray-300 mt-4">
            A back-end cashier application built with Node.js and Hapi.js.
          </p>
          <p className="mt-4">
            <i className="fa-solid fa-code-branch mr-2"></i>
            <a
              href="https://github.com/nandhitooo/back-end-kasir"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              View Project
              <i className="fa-solid fa-chevron-right ml-0.5"></i>
            </a>
          </p>
        </div>
        <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Personal Blog</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-js"></i>
          </span>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
            <i class="fa-brands fa-react"></i>
          </span>
          <p className="text-gray-300 mt-4">
            A personal blog website built with Javascript and React.js.
          </p>
          <p className="mt-4">
            <i className="fa-solid fa-code-branch mr-2"></i>
            <a
              href="https://github.com/nandhitooo/biography"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              View Project
              <i className="fa-solid fa-chevron-right ml-0.5"></i>
            </a>
          </p>
        </div>
        <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">Virtual-Pet Games</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-java"></i>
          </span>
          <p className="text-gray-300 mt-4">
            A CLI-Based game built with Java.
          </p>
          <p className="mt-4">
            <i className="fa-solid fa-code-branch mr-2"></i>
            <a
              href="https://github.com/nandhitooo/Virtual-Pet-Games-Java"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              View Project
              <i className="fa-solid fa-chevron-right ml-0.5"></i>
            </a>
          </p>
        </div>
        <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-2xl font-bold mb-4">React Corporate Website</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-js"></i>
          </span>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
            <i class="fa-brands fa-react"></i>
          </span>
          <p className="text-gray-300 mt-4">
            This is my middle second semester project.
          </p>
          <p className="mt-4">
            <i className="fa-solid fa-code-branch mr-2"></i>
            <a
              href="https://github.com/nandhitooo/react-corporate-semester2"
              className="text-yellow-400 hover:text-yellow-300 underline"
            >
              View Project
              <i className="fa-solid fa-chevron-right ml-0.5"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
