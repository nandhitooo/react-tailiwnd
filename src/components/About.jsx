import React from "react";

const About = () => {
  return (
    <div
      className="about mt-10 py-20 text-justify items-center px-4"
      id="about"
    >
      <h5 className="font-medium mb-2">001</h5>
      <h2 className="text-4xl font-bold mb-4">Fernandhito Dian Pratama</h2>
      <span className="text-md font-medium text-black bg-yellow-400 p-2 rounded-lg">
        Front-end
      </span>
      <span className="text-md font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
        UI/UX
      </span>
      <span className="text-md font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
        Multimedia
      </span>
      <p className="mt-15 text-xl text-gray-300">
        I am an Informatics Engineering student at the Electronic Engineering
        Polytechnic Institute of Surabaya (EEPIS) with a strong focus on
        front-end development. I actively build and refine user interfaces with
        attention to structure, responsiveness, and usability. I improve my
        skills through consistent self-directed practice and hands-on
        experimentation.
      </p>
      <p className="mt-6 text-xl text-gray-300">
        I have developed multiple website projects using HTML and CSS as a
        strong foundation. I also work with modern technologies such as
        JavaScript, React, and Tailwind CSS to create interactive and scalable
        web applications. Through these projects, I am familiar with
        component-based development, responsive design, and clean code
        practices. I continue to learn new tools and best practices to stay
        aligned with current front-end development standards.
      </p>
      <button className="mt-10 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300">
        See My CV <i className="fa-solid fa-file-arrow-down ml-2"></i>
      </button>
    </div>
  );
};

export default About;
