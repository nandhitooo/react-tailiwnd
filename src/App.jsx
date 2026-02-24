import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Bottom from "./components/Bottom";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Journey />
        <Skills />
        <Project />
        <Contact />
      </main>
      <Bottom />
    </>
  );
}

export default App;
