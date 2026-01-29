import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar fixed top-0 left-50 right-50 z-50 flex items-center justify-between py-4 text-white bg-zinc-900">
      <h1 className="title text-2xl font-bold text-white">Fernandhito</h1>
      <ul
        className={`menu flex space-x-4 gap-10 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 ${
          isMenuOpen ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li className="hover:text-yellow-400 font-medium">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}>Home</a>
        </li>
        <li className="hover:text-yellow-400 font-medium">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection("about"); }}>About</a>
        </li>
        <li className="hover:text-yellow-400 font-medium">
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("skills"); }}>Skills</a>
        </li>
        <li className="hover:text-yellow-400 font-medium">
          <a href="#journey" onClick={(e) => { e.preventDefault(); scrollToSection("journey"); }}>Journey</a>
        </li>
        <li className="hover:text-yellow-400 font-medium">
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a>
        </li>
        <li className="hover:text-yellow-400 font-medium">
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
