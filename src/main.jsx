import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Journey from "./components/journey.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container mx-auto px-4">
      <Navbar />
      <Home />
      <About />
      <Journey />
    </div>
  </StrictMode>
);
