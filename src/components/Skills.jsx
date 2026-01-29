import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

const Skills = () => {
  return (
    <div className="skills mt-10 py-20 text-justify items-center px-4" id="skills">
      <h5 className="font-medium mb-2">003</h5>
      <h2 className="text-4xl font-bold mb-4">Skills</h2>
      <p className="mt-6 text-xl text-gray-300">
        Here are some of my skills in front-end development and UI/UX design.
        I have experience with modern technologies and frameworks that allow me to
        create responsive, user-friendly, and visually appealing web applications.
      </p>
      <div className="skills_grid mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="skill_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-xl font-bold mb-4">HTML</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-html5"></i>
          </span>
          <p className="text-gray-300 mt-4">
            Semantic HTML structure for accessibility and SEO.
          </p>
        </div>
        <div className="skill_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-xl font-bold mb-4">CSS</h3>
          <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
            <i class="fa-brands fa-css3-alt"></i>
          </span>
          <p className="text-gray-300 mt-4">
            Responsive design with Flexbox and Grid.
          </p>
        </div>
        <div className="skill_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
          <h3 className="text-xl font-bold mb-4">JavaScript</h3>
          <span className="text-sm font-medium text-black bg-yellow-green p-[7px] rounded-lg">
            <i class="fa-brands fa-js"></i>
          </span>
          <p className="text-gray-300 mt-[7px]">
            Modern JavaScript (ES6+) with React.js.
          </p>
        </div>
        <div className="skill_card bg-gray-800 p-[22px] rounded-xl border-l-[16px] border-yellow-green shadow-lg hover:scale-[1.1] cursor-pointer transition-transform duration-[3s]">
          <h3 className="text-xl font-bold mb-[16px]">React.js</h3>
          <span className="text-sm font-medium text-black bg-yellow-green p-[7px] rounded-lg">
            React.js
          </span>
          <p className="text-gray-[#9ca9b7] mt-[7px]">
            Component-based architecture for building user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills