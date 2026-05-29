import React from "react";

function About() {
  return (
    <>
      <section
        id="about"
        className="about mb-15 lg:h-screen flex flex-col justify-center gap-4"
      >
        <h2 className=" lg:static lg:hidden sticky top-0 font-bold max-sm:bg-[#0f172a]/80 backdrop-blur-sm py-3">
          ABOUT
        </h2>
        <p className="text-slate-400 max-w-xl leading-relaxed">
          I'm a frontend developer who loves turning ideas into clean, fast, and
          accessible web experiences. I enjoy building things that live on the
          internet — whether that's a sleek landing page, a complex web app, or
          something in between. These days, I'm focused on leveling up in React
          and exploring the intersection of design and engineering. 
        </p>
      </section>
    </>
  );
}

export default About;
