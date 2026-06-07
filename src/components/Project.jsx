import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-zinc-900 text-white"
    >
      <div className="project mt-10 py-20 text-justify items-center px-4">
        <h5 className="font-medium mb-2 text-yellow-400">004</h5>
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="mt-6 text-xl text-gray-300 text-left lg:text-justify">
          Here are some of my projects that showcase my skills in front-end
          development and UI/UX design. Each project highlights my ability to
          create responsive, user-friendly, and visually appealing web
          applications using modern technologies.
        </p>
        <div className="project_cards mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-left lg:text-justify">
              Workout Recording Application
            </h3>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
              <i class="fa-brands fa-flutter"></i>
            </span>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
              <i class="fa-brands fa-dart-lang"></i>
            </span>
            <p className="text-gray-300 mt-4 text-left lg:text-justify">
              workout recording application built with flutter and dart
              programming language. This project is my first mobile application
              project and it is a simple workout recording application that
              allows users to log their workouts and track their progress. The
              app features a user-friendly interface with intuitive navigation,
              making it easy for users to input their workout data and view
              their fitness journey over time.
            </p>
            <p className="mt-4">
              <i className="fa-solid fa-code-branch mr-2"></i>
              <a
                href="https://github.com/nandhitooo/wgywm-app.git"
                className="text-yellow-400 hover:text-yellow-300 underline"
              >
                View Project
                <i className="fa-solid fa-chevron-right ml-0.5"></i>
              </a>
            </p>
          </div>
          <div className="project_card bg-gray-800 p-6 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 cursor-pointer transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-4 text-left lg:text-justify">
              Cashier App
            </h3>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
              <i class="fa-brands fa-js"></i>
            </span>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
              <i class="fa-brands fa-react"></i>
            </span>
            <p className="text-gray-300 mt-4 text-left lg:text-justify">
              A simple Front-end cashier application built with Javascript and
              React.js. This project is my first web application project and it
              is a simple cashier application that allows users to manage their
              sales, track inventory, and generate reports. The app features a
              clean and intuitive interface, making it easy for users to
              navigate through different sections and perform various tasks
              related to sales and inventory management.
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
            <h3 className="text-2xl font-bold mb-4 text-left lg:text-justify">
              Back-end Cashier App
            </h3>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
              <i class="fa-brands fa-node-js"></i>
            </span>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
              Hapi.js
            </span>
            <p className="text-gray-300 mt-4 text-left lg:text-justify">
              A back-end cashier application built with Node.js and Hapi.js
              framework. This project is the back-end part of my cashier
              application and it is responsible for handling the server-side
              logic, database management, and API endpoints. The back-end
              application allows users to perform various operations such as
              managing sales transactions, tracking inventory, and generating
              reports. It is designed to work seamlessly with the front-end
              cashier application, providing a robust and efficient solution for
              sales and inventory management.
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
            <h3 className="text-2xl font-bold mb-4 text-left lg:text-justify">
              Personal Blog
            </h3>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
              <i class="fa-brands fa-js"></i>
            </span>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
              <i class="fa-brands fa-react"></i>
            </span>
            <p className="text-gray-300 mt-4 text-left lg:text-justify">
              A personal blog website built with Javascript and React + Vite +
              Tailwind CSS. This project is a personal blog website which is
              designed to showcase my thoughts and experiences. It includes
              functionalities such as creating, editing, and deleting blog
              posts, as well as categorizing and tagging posts for easy
              navigation. The website is built using React for the front-end,
              Vite for the build tool, and Tailwind CSS for styling, providing a
              responsive and visually appealing platform for sharing content.
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
            <h3 className="text-2xl font-bold mb-4 text-left lg:text-justify">
              Virtual-Pet Games
            </h3>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
              <i class="fa-brands fa-java"></i>
            </span>
            <p className="text-gray-300 mt-4 text-left lg:text-justify">
              A CLI-Based game built with Java. This project is a simple
              command-line interface (CLI) game that allows users to interact
              with virtual pets. The game includes features such as feeding,
              playing, and caring for the virtual pets, providing an engaging
              and interactive experience for users. It is designed to be a fun
              and entertaining way to learn programming concepts while also
              enjoying the process of taking care of virtual pets.
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
            <h3 className="text-2xl font-bold mb-4 text-left lg:text-justify">
              React Corporate Website
            </h3>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg">
              <i class="fa-brands fa-js"></i>
            </span>
            <span className="text-sm font-medium text-black bg-yellow-400 p-2 rounded-lg ml-2">
              <i class="fa-brands fa-react"></i>
            </span>
            <p className="text-gray-300 mt-4 text-left lg:text-justify">
              This website i built with React.js + Vite + Tailwind CSS. This
              corporate website project is designed to showcase a professional
              and modern online presence for a business or organization. It
              features a clean and responsive design, intuitive navigation, and
              engaging content to effectively communicate the company's brand,
              services, and values. The website is built using React.js for the
              front-end development, Vite for the build tool, and Tailwind CSS
              for styling, ensuring a seamless user experience across different
              devices and screen sizes.
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
        <button
          className="mt-6 px-6 py-3 item-center bg-yellow-400 text-black font-semibold rounded hover:bg-yellow-500 transition duration-300 cursor-pointer"
          onClick={() =>
            window.open(
              "https://github.com/nandhitooo?tab=repositories",
              "_blank",
            )
          }
        >
          View More Projects <i class="fa-solid fa-arrow-right ml-2"></i>
        </button>
      </div>
    </section>
  );
};

export default Project;
