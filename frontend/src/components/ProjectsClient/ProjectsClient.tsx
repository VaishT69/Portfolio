"use client";

import Link from "next/link";
// import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { easeOut, motion } from "framer-motion";
import { Project } from "@/types/project";
import MarqueeCarousel from "../MaruqeeCarousel/MarqueCarousel";
interface ProjectsClientProps {
  projects: Project[];
  currentPage: number;
  totalPages: number;
}

export default function ProjectsClient({
  projects,
  //   currentPage,
  //   totalPages,
}: ProjectsClientProps) {
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

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

        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => {
            const project = projects[i];
            const image = project?.image;

            return (
              <li
                key={i}
                className="  shadow-2xl rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-[#1E3E62] bg-[#0B192C]"
              >
                {project ? (
                  <motion.div
                    key={i}
                    className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {image && (
                      <img
                        src={urlFor(image)}
                        alt={project.projectTitle}
                        className="bg-white w-full h-48 object-cover"
                      />
                    )}
                                  <div className="p-6">

                    <h2 className="text-2xl font-semibold text-indigo-400">
                      {project.projectTitle}
                    </h2>
                    <p className="text-sm text-gray-300 mt-2 ">
                      {project.body && project.body[0]?.children[0]?.text}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.skills?.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 mt-6">
                      {project.url && (
                        <Link
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:underline text-sm"
                        >
                          Live Demo
                        </Link>
                      )}
                      {project.github && (
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-400 hover:underline text-sm"
                        >
                          GitHub
                        </Link>
                      )}
                    </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-full h-[250px] opacity-0" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Pagination */}
        {/* <div className="flex justify-center mt-12 space-x-4">
          {currentPage > 1 && (
            <Link
              href={`?page=${currentPage - 1}`}
              className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200"
            >
              Previous
            </Link>
          )}
          <span className="px-4 py-2 text-gray-300">
            Page {currentPage} of {totalPages}
          </span>
          {currentPage < totalPages && (
            <Link
              href={`?page=${currentPage + 1}`}
              className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200"
            >
              Next
            </Link>
          )}
        </div> */}
      </section>
      {/* <section>
        <MarqueeCarousel />
      </section> */}
    </main>
  );
}
