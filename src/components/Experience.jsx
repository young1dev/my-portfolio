import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function Experience() {
  const experiences = [
    {
      period: "2024 — Present",
      role: "Frontend Developer Intern",
      company: "Freelance (Remote)",
      description:
        "Building and maintaining responsive web interfaces for clients. Focused on clean UI, performance, and mobile-first design.",
      stack: ["React", "Tailwind CSS", "JavaScript"],
      link: "",
    },
    {
      period: "2024 — Present",
      role: "Founder & Developer",
      company: "ZICO",
      description:
        "Running a personal tech brand offering landing pages, portfolio sites, bug fixes and redesigns for global clients.",
      stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
      link: "https://zico-brand.vercel.app",
    },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col justify-center gap-6 pb-15"
    >
      <h2 className="lg:hidden sticky top-0 font-bold bg-slat-950/80 backdrop-blur-sm py-3">
        EXPERIENCE
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="group flex flex-col lg:flex-row gap-5 lg:hover:bg-slate-800/20 rounded-lg p-4 transition-all duration-200"
        >
          {/* Period */}
          <span className="text-slate-500 text-sm uppercase tracking-widest lg:w-36 shrink-0 mt-1">
            {exp.period}
          </span>

          {/* Content */}
          <div className="space-y-3">
            {exp.link ? (
              <a
                href={exp.link}
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center gap-1 font-semibold text-slate-200 hover:text-cyan-400 w-fit"
              >
                {exp.role} · {exp.company}
                <FiArrowUpRight className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            ) : (
              <span className="font-semibold text-slate-200">
                {exp.role} · {exp.company}
              </span>
            )}

            <p className="text-slate-400 max-w-lg leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech) => (
                <span
                  key={tech}
                  className="bg-teal-400/10 text-cyan-400 px-3 py-1 text-sm rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}

      <a
        href="https://drive.google.com/file/d/1w1pE9lPUYniGux6Ou7nMw6WeSsxFUJ2j/view?usp=drive_link"
        className="group w-fit flex items-center gap-1 font-semibold hover:text-cyan-400 mt-2"
      >
        View Full Resume
        <FiArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </a>
    </section>
  );
}

export default Experience;
