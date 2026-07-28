import chessPrev from "../assets/chessPrev.png";
import kmfPrev from "../assets/kmfPrev.png";
import divinityPrev from "../assets/divinityPrev.png";

export const projects = [
  {
    id: 1,
    title: "Built a Chess Engine (v1)",
    description:
      "A fully functional chess engine built with JavaScript featuring legal move generation, check/checkmate detection, and an AI opponent using random moves.",
    image: chessPrev,
    alt: "Chess board image",
    link: "https://zico-chess-engine.vercel.app",
    github: "https://github.com/young1dev/chess-engine",
    stack: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "KMF Concept Website",
    description:
      "A modern corporate website built with Next.js and Sanity CMS, featuring dynamic content management through GROQ, responsive layouts, and SEO optimization for improved visibility and performance.",
    image: kmfPrev,
    alt: "KMF Concept website preview",
    link: "https://kmfconcept.com",
    github: "https://github.com/young1dev/kmf-concept",
    stack: ["Next.js", "React", "Tailwind CSS", "Sanity CMS", "GROQ"],
  },
  {
    id: 3,
    title: "Divinity Consult",
    description:
      "A responsive consulting company website built with React, TypeScript, Tailwind CSS, and TanStack Router. Designed with reusable components, client-side routing, and a mobile-first approach to deliver a clean and scalable user experience.",
    image: divinityPrev,
    alt: "Divinity Consult website preview",
    link: "https://divinityconsult.org",
    github: "https://github.com/young1dev/divinity-consult",
    stack: ["React", "TypeScript", "Tailwind CSS", "TanStack Start", "Vite"],
  },
  // add more projects here
];
