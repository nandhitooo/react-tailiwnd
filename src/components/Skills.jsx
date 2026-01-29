import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  return (
    <div
      className="skills mt-10 py-20 text-justify items-center px-4"
      id="skills"
    >
      <h5 className="font-medium mb-2">003</h5>
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <p className="mt-6 text-xl text-gray-300">
        Here are some of my skills in front-end development and UI/UX design. I
        have experience with modern technologies and frameworks that allow me to
        create responsive, user-friendly, and visually appealing web
        applications. And i also have soft skills in graphic design and video
        editing gained from my multimedia background.
      </p>
      <div className="skills_list mt-10 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="skills__list hover:text-orange-500 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-brands fa-html5"></i>
            <span className="text-xl font-medium ml-2">HTML</span>
        </div>
        <div className="skills__list hover:text-blue-500 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-brands fa-css3-alt"></i>
            <span className="text-xl font-medium ml-2">CSS</span>
        </div>
        <div className="skills__list hover:text-yellow-500 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-brands fa-js"></i>
            <span className="text-xl font-medium ml-2">JavaScript</span>
        </div>
        <div className="skills__list hover:text-blue-400 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-brands fa-react"></i>
            <span className="text-xl font-medium ml-2">React.js</span>
        </div>
        <div className="skills__list hover:text-green-500 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-brands fa-node-js"></i>
            <span className="text-xl font-medium ml-2">Node.js</span>
        </div>
        <div className="skills__list hover:text-red-500 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-brands fa-java"></i>
            <span className="text-xl font-medium ml-2">Java</span>
        </div>
        <div className="skills__list hover:text-purple-500 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-solid fa-images"></i>
            <span className="text-xl font-medium ml-2">Graphic Design</span>
        </div>
        <div className="skills__list hover:text-pink-500 hover:scale-105 cursor-pointer transition-transform duration-300">
            <i class="fa-solid fa-video"></i>
            <span className="text-xl font-medium ml-2">Video Editing</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
