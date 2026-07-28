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
          I'm a frontend developer who enjoys building websites and web
          applications that are simple to use, responsive, and reliable. I like
          taking an idea from the planning stage and turning it into something
          people can actually interact with. Whether it's a landing page, a
          dashboard, or a full web application, I pay attention to the details
          that make an interface feel smooth and easy to navigate. <br /> <br />
          I enjoy solving problems, figuring out how things work, and finding cleaner
          ways to build features. Seeing a project gradually come together—from
          the first component to the final deployment—is one of the things I
          find most rewarding. Every project teaches me something new, and I try
          to carry those lessons into the next one. <br /> <br />
          Outside of frontend
          development, I'm working toward AI and machine learning because I'm
          interested in building products that don't just look good but can also
          make smart decisions and solve meaningful problems. My goal is to keep
          growing as an engineer by building real projects, learning from
          experienced developers, and creating software that people genuinely
          enjoy using.
        </p>
      </section>
    </>
  );
}

export default About;
