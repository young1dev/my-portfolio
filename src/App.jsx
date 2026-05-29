import React from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";

function App() {
  return (
    <main className="px-6 lg:pl-15 flex flex-col lg:flex-row justify-between">
      {/* <Navbar /> */}
      <div className="lg:h-screen lg:w-1/2 flex lg:p-0 lg:fixed">
        <Hero />
      </div>

      <div className="flex flex-col lg:p-5 lg:ml-[50%] lg:w-1/2">
        <About  />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
