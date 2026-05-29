import React from "react";

function Contact() {
  return (
    <section className="mb-15 lg:h-screen flex flex-col justify-center gap-4 items-center">
      <h2 className="font-bold text-3xl text-slate-200">Get In Touch</h2>
      <p className="text-slate-400 text-lg text-center mb-5 max-w-lg">
        Whether you want to work together, have a question, or just want to say
        hi — my inbox is always open.
      </p>
      <a
        href="mailto:fatokunboi@gmail.com"
        className="px-5 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-medium transition-all duration-200 hover:shadow-[4px_4px_0px_#22d3ee] hover:-translate-x-3 hover:-translate-y-2"
      >
        Contact Me
      </a>
    </section>
  );
}

export default Contact;
