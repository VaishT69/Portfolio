"use client";
import { motion } from "framer-motion";

import Marquee from "../components/Marquee/Marquee";
interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "GallopTV",
    description:
      "Developed and maintained the GallopTV streaming platform for horse racing enthusiasts, ensuring smooth streaming for over 5 million viewers.",
    tech: ["React", "Next.js", "Video Streaming", "TailwindCSS","Supabase"],
    image: "/logo3.jpg", // Replace with actual screenshot
    link: "https://www.galloptv.co.za",
  },
  {
    title: "Hollywoodbets Durban July Access Control",
    description:
      "Built an RFID-based access control system for guest entry and exit at Hollywoodbets Durban July venues, streamlining operations and improving event security.",
    tech: ["React", "Next.js", "RFID", "Supabase"],
    image: "/logo4.jpg", // Replace with actual screenshot
  },
  {
    title: "BET Software Website",
    description:
      "Contributed to the design and development of the new BET Software corporate website, improving performance, UI/UX, and branding alignment.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    image: "/logo.jpg", // Replace with actual screenshot
    link: "https://www.betsoftware.com",
  },
];


export default function Projects() {
  return (
    <main>
     <section className="bg-black py-16 px-6 md:px-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-indigo-400">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-6">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline text-sm"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
      {/* <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-gray-50">
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="/vaish.png"
            alt="Your Photo"
            className="w-64 h-64 rounded-full shadow-xl border-4 border-gray-300"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-4xl font-bold text-gray-800">About Me</h2>
          <p className="text-lg text-gray-600">
            Hi! I’m{" "}
            <span className="font-semibold text-gray-800">
              Vaishnav Teeluck
            </span>
            , a passionate{" "}
            <span className="text-indigo-600 font-semibold">
              Software Developer
            </span>{" "}
            specializing in web and mobile app development.
          </p>
          <p className="text-gray-600">
            I love building user-friendly applications and solving complex
            problems through clean code.
          </p>

          <div className="flex space-x-4 mt-6">
            <a
              href="docs/cv.pdf"
              download="Vaishnav-Teeluck-CV.pdf"
              className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section> */}
      <section>
        <Marquee
          items={[
            { img: "tech-stack/ASPNET.svg", alt: "HTML" },
            { img: "tech-stack/CSHARP.svg", alt: "HTML" },
            { img: "tech-stack/DOCKER.svg", alt: "HTML" },
            { img: "tech-stack/DOTNET.svg", alt: "HTML" },
            { img: "tech-stack/GITHUB.svg", alt: "HTML" },
            { img: "tech-stack/HTML.svg", alt: "HTML" },
            { img: "tech-stack/JAVASCRIPT.svg", alt: "HTML" },
            { img: "tech-stack/MONGO.svg", alt: "HTML" },
            { img: "tech-stack/NODE.svg", alt: "HTML" },
            { img: "tech-stack/PYTHON.svg", alt: "HTML" },
            { img: "tech-stack/REACT.svg", alt: "HTML" },
            { img: "tech-stack/SHAREPOINT.svg", alt: "HTML" },
            { img: "tech-stack/SQL.svg", alt: "HTML" },
          { img: "tech-stack/TYPESCRIPT.svg", alt: "HTML" },
          ]}
        />
      </section>
    </main>
  );
}
