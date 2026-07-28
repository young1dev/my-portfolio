import React from "react";
import { projects } from "../data/projects.js";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="projects flex flex-col justify-center mb-15 gap-4"
      >
        <h2 className=" lg:static lg:hidden z-10 sticky top-0 font-bold  max-sm:bg-background/80 backdrop-blur-sm py-3">
          PROJECTS
        </h2>
        {projects.map((p) => (
          <div
            key={p.id}
            className="project-container h-full min-w-2xs relative group flex flex-col lg:flex-row-reverse gap-5 lg:hover:bg-slate-800/20 rounded-lg p-4 transition-all duration-200"
          >
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 z-10 hidden lg:block"
            />
            <div className="space-y-5 flex-1">
              <div className="group w-fit">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white flex items-center gap-1 font-semibold hover:text-green-300 lg:group-hover:text-green-300"
                >
                  {p.title}
                  <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
              <p className="project-description max-w-2xl text-slate-400">
                {p.description}
              </p>
              <div className="stack flex flex-wrap gap-3">
                {p.stack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-teal-400/10 px-4 py-2 text-cyan-400 leading-5 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {p.github && (
                <div className="flex lg:justify-end">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className=" hover:text-white text-slate-400 transition-colors duration-200"
                  >
                    <FaGithub size={25} />
                  </a>
                </div>
              )}
            </div>
            <div className="img-reference h-40 w-full md:w-60 shrink-0 border border-slate-700 group-hover:border-zinc-600 shadow-xl shadow-black/50 rounded-md">
              <img
                src={p.image}
                alt={p.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        ))}

        <a
          href="https://github.com/young1dev?tab=repositories"
          className="group text-[18px] w-fit font-semibold flex gap-1 items-center hover:text-green-300 mt-5"
        >
          View All Project {/* Archive} */}
          <FiArrowRight className="transition-transform duration-200 group-hover:translate-x-2" />
        </a>
      </section>
    </>
  );
}

export default Projects;
