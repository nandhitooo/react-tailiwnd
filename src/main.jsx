import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Journey from "./components/Journey.jsx";
import Project from "./components/Project.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Bottom from "./components/Bottom.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto px-4">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Journey />
      <Project />
      <Contact />
      <Bottom />
    </div>
  </StrictMode>
);
