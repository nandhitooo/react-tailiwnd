import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Journey", id: "journey" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 flex justify-center z-50 motion-preset-slide-down motion-duration-1000 motion-ease-in-out px-4">
      <div className="glass-card rounded-2xl md:rounded-full h-14 sm:h-16 w-full max-w-5xl flex items-center justify-between px-4 sm:px-10 relative">
        {/* Brand - Left Anchor */}
        <div className="flex-1 flex justify-start">
          <div
            className="text-lg sm:text-xl font-bold tracking-tighter text-gradient cursor-pointer whitespace-nowrap"
            onClick={() => scrollToSection("home")}
          >
            Fernandhito
          </div>
        </div>

        {/* Desktop Navigation - Dead Center */}
        <nav className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`px-4 py-2 rounded-full cursor-pointer transition-all duration-300 text-sm font-semibold whitespace-nowrap ${
                  active === link.id
                    ? "text-yellow-500 bg-yellow-500/10"
                    : "text-gray-500 hover:text-zinc-900 dark:hover:text-white"
                }`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions - Right Anchor */}
        <div className="flex-1 flex items-center justify-end gap-3 sm:gap-4">
          {/* Theme Toggle Switch */}
          <div className="flex items-center scale-90 sm:scale-100">
            <label className="relative inline-flex items-center cursor-pointer group">
              <input
                type="checkbox"
                className="sr-only"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <div className="w-12 h-6 sm:w-14 sm:h-7 bg-gray-200 dark:bg-zinc-800 rounded-full transition-all duration-300 border border-gray-300 dark:border-zinc-700"></div>
              <div
                className={`absolute left-1 top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  theme === "dark"
                    ? "translate-x-6 sm:translate-x-7 bg-zinc-950 text-yellow-400"
                    : "bg-white text-zinc-900 shadow-md"
                }`}
              >
                {theme === "dark" ? (
                  <i className="fa-solid fa-moon text-[8px] sm:text-[10px]"></i>
                ) : (
                  <i className="fa-solid fa-sun text-[8px] sm:text-[10px]"></i>
                )}
              </div>
            </label>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 glass-card rounded-xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`w-5 h-[2px] bg-zinc-900 dark:bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}
            ></span>
            <span
              className={`w-5 h-[2px] bg-zinc-900 dark:bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`w-5 h-[2px] bg-zinc-900 dark:bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-16 sm:top-20 left-0 w-full glass-card rounded-2xl sm:rounded-3xl overflow-hidden transition-all duration-500 lg:hidden ${
            isOpen
              ? "max-h-[450px] opacity-100 p-4 sm:p-6"
              : "max-h-0 opacity-0 p-0"
          }`}
        >
          <ul className="flex flex-col gap-2 sm:gap-4 items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`w-full text-center px-4 py-3 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-300 font-bold text-sm sm:text-base ${
                  active === link.id
                    ? "text-yellow-500 bg-yellow-500/10"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
