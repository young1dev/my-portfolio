import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";

function Hero() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero flex flex-col items-start gap-5 lg:p-0 lg:justify-center pt-15 pb-25">
        <div>
          <h1 className=" scroll-m-20 text-slate-200 text-4xl sm:text-5xl font-bold tracking-tight">
            Fatokunbo Isaac
          </h1>
          <h2 className="role mt-4 scroll-m-20 text-lg font-medium sm:text-xl text-slate-200 tracking-tight">
            Web Developer
          </h2>
          <div className="slogan mt-4 max-w-xs leading-normal text-zinc-400">
            I build accessible, pixel-perfect experience for the Web
          </div>

          <div className="flex gap-8 mt-8 ">
            <a
              href="mailto:fatokunboi@gmail.com"
              className="px-5 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium transition-all duration-200 hover:shadow-[4px_4px_0px_#22d3ee] hover:-translate-x-2 hover:-translate-y-2"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1w1pE9lPUYniGux6Ou7nMw6WeSsxFUJ2j/view?usp=drive_link"
              className="px-5 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium transition-all duration-200 hover:shadow-[4px_4px_0px_#22d3ee] hover:-translate-x-2 hover:-translate-y-2"
            >
              Resume
            </a>
          </div>
        </div>
        <nav className="hidden lg:flex items-start flex-col">
          <a href="#about" className="group flex items-center py-2 gap-0">
            <span className="indicator group-hover:bg-slate-200 group-hover:w-18 transition-all duration-200 bg-slate-600 mr-4 w-10 h-px inline-block"></span>
            <span
              className={`active uppercase group-hover:text-slate-200 transition-colors duration-300
             ${
               activeSection === "about"
                 ? "text-slate-200 w-18"
                 : "text-slate-600 w-10"
             }`}
            >
              About
            </span>
          </a>
          <a href="#experience" className="group flex items-center py-2 gap-0">
            <span className="indicator group-hover:bg-slate-200 group-hover:w-18 transition-all duration-200 bg-slate-600 mr-4 w-10 h-px inline-block"></span>
            <span
              className={`uppercase  group-hover:text-slate-200 transition-colors duration-300 
            ${
              activeSection === "experience"
                ? "text-slate-200 w-18"
                : "text-slate-600 w-10"
            }`}
            >
              Experience
            </span>
          </a>
          <a href="#projects" className="group flex items-center py-2 gap-0">
            <span className="indicator group-hover:bg-slate-200 group-hover:w-18 transition-all duration-200 bg-slate-600 mr-4 w-10 h-px inline-block"></span>
            <span
              className={`uppercase  group-hover:text-slate-200 transition-colors duration-300
            ${
              activeSection === "projects"
                ? "text-slate-200 w-18"
                : "text-slate-600 w-10"
            }`}
            >
              Project
            </span>
          </a>
        </nav>
        <div className="socials flex gap-5 mt-5 ml-2">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/young1dev"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaGithub size={27} color="#e2e8f0" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href=""
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaLinkedin size={27} color="#e2e8f0" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/isaacdevop/"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaInstagram size={27} color="#e2e8f0" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href=""
            className="hover:text-blue-400 transition-colors duration-200"
          >
            <FaTiktok size={27} color="#e2e8f0" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Hero;
