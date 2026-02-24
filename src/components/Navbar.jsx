import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = React.useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "journey",
        "skills",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 150;
      sections.forEach((Id) => {
        const section = document.getElementById(Id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(Id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultLinkstyles = "hover:text-yellow-400 font-medium";

  const activeLinkStyles = "text-yellow-400 font-bold scale-105";

  return (
    <section className="fixed hidden sm:flex top-0 left-0 w-full h-16 bg-zinc-900 text-white z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">Fernandhito</div>
        <ul className="flex space-x-6">
          <li
            className={`${active === "home" ? activeLinkStyles : defaultLinkstyles} cursor-pointer transition duration-300`}
            onClick={() => scrollToSection("home")}
          >
            Home
          </li>
          <li
            className={`${active === "about" ? activeLinkStyles : defaultLinkstyles} cursor-pointer transition duration-300`}
            onClick={() => scrollToSection("about")}
          >
            About
          </li>
          <li
            className={`${active === "journey" ? activeLinkStyles : defaultLinkstyles} cursor-pointer transition duration-300`}
            onClick={() => scrollToSection("journey")}
          >
            Journey
          </li>
          <li
            className={`${active === "skills" ? activeLinkStyles : defaultLinkstyles} cursor-pointer transition duration-300`}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </li>
          <li
            className={`${active === "projects" ? activeLinkStyles : defaultLinkstyles} cursor-pointer transition duration-300`}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </li>
          <li
            className={`${active === "contact" ? activeLinkStyles : defaultLinkstyles} cursor-pointer transition duration-300`}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;
