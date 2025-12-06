import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="App font-sans">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    
      <Contact />
    </div>
  );
}

export default App;
