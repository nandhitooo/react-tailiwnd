import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center bg-zinc-900 text-white py-20"
    >
      <div className="skills mt-10 text-justify items-center px-4">
        <h5 className="font-medium mb-2 text-yellow-400">003</h5>
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <p className="mt-6 text-xl text-gray-300">
          Here are some of my skills in front-end development and UI/UX design.
          I have experience with modern technologies and frameworks that allow
          me to create responsive, user-friendly, and visually appealing web
          applications. And i also have soft skills in graphic design and video
          editing gained from my multimedia background.
        </p>
        <div className="skills_list mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-orange-500 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-brands fa-html5 text-lg"></i>{" "}
            <span className="text-sm font-medium">HTML</span>{" "}
          </div>{" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-blue-500 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-brands fa-css3-alt text-lg"></i>{" "}
            <span className="text-sm font-medium">CSS</span>{" "}
          </div>{" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-yellow-500 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-brands fa-js text-lg"></i>{" "}
            <span className="text-sm font-medium">JavaScript</span>{" "}
          </div>{" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-blue-400 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-brands fa-react text-lg"></i>{" "}
            <span className="text-sm font-medium">React</span>{" "}
          </div>{" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-green-500 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-brands fa-node-js text-lg"></i>{" "}
            <span className="text-sm font-medium">Node</span>{" "}
          </div>{" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-red-500 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-brands fa-java text-lg"></i>{" "}
            <span className="text-sm font-medium">Java</span>{" "}
          </div>{" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-purple-500 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-solid fa-images text-lg"></i>{" "}
            <span className="text-sm font-medium">Design</span>{" "}
          </div>{" "}
          <div className="bg-gray-800 py-3 px-4 rounded-md flex items-center gap-3 border-l-4 border-yellow-400 hover:scale-105 hover:text-pink-500 transition duration-300 cursor-pointer">
            {" "}
            <i className="fa-solid fa-video text-lg"></i>{" "}
            <span className="text-sm font-medium">Editing</span>{" "}
          </div>{" "}
        </div>
      </div>
    </section>
  );
};

export default Skills;
