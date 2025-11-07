// "use client";
// import { motion } from "framer-motion";

// import Marquee from "../../components/Marquee/Marquee";
// interface Project {
//   title: string;
//   description: string;
//   tech: string[];
//   image: string;
//   link?: string;
//   github?: string;
// }

// const projects: Project[] = [
//   {
//     title: "GallopTV",
//     description:
//       "Developed and maintained the GallopTV streaming platform for horse racing enthusiasts, ensuring smooth streaming for over 5 million viewers.",
//     tech: ["React", "Next.js", "Video Streaming", "TailwindCSS", "Supabase"],
//     image: "/logo3.jpg", // Replace with actual screenshot
//     link: "https://www.galloptv.co.za",
//   },
//   {
//     title: "Nawras Music Productions",
//     description:
//       "Currently developing a website for Nawras Music Productions to gain hands-on experience with modern web technologies. The site includes business information, a gallery, video integration from the company’s YouTube channel, a blog page, and a contact form. The contact page uses EmailJS to automatically send messages to the business email, while blog content is managed via Sanity. The project is built using Next.js, Tailwind CSS, Sanity, EmailJS, version-controlled with GitHub and is hosted on Vercel for testing. The site is near completion, with a few final enhancements before going live.",
//     tech: [
//       "Next.js",
//       "Javascript",
//       "TailwindCSS",
//       "Supabase",
//       "Sanity",
//       "EmailJS",
//     ],
//     image: "/nawras-log.png", // Replace with actual screenshot
//     link: "https://nawras-chi.vercel.app/",
//   },
//   {
//     title: "BET Software Website",
//     description:
//       "Contributed to the design and development of the new BET Software corporate website, improving performance, UI/UX, and branding alignment.",
//     tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
//     image: "/logo.jpg", // Replace with actual screenshot
//     link: "https://www.betsoftware.com",
//   },
//   {
//     title: "Hollywoodbets Durban July Access Control",
//     description:
//       "Built an RFID-based access control system for guest entry and exit at Hollywoodbets Durban July venues, streamlining operations and improving event security.",
//     tech: ["React", "Next.js", "RFID", "Supabase"],
//     image: "/logo4.jpg", // Replace with actual screenshot
//   },

//   {
//     title: "Hollywoodbets Durban July App",
//     description:
//       "Worked on the Hollywoodbets Durban July Wrapped App, developing the codebase in React Native to package the website into Android, iOS, and Huawei apps. Managed deployments across all platforms and ensured the app was fully operational and ready for the event day.",
//     tech: ["ReactNative", "TypeScript"],
//     image: "/logo4.jpg", // Replace with actual screenshot
//     // link: "https://www.betsoftware.com",
//   },
// ];

// export default function Projects() {
//   return (
//     <main>
//       <section className="bg-black py-16 px-6 md:px-16">
//         <motion.h2
//           className="text-4xl font-bold text-center mb-12 text-gray-100"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Projects
//         </motion.h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={index}
//               className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="bg-white w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold text-indigo-400">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-400 text-sm mt-2">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {project.tech.map((t, i) => (
//                     <span
//                       key={i}
//                       className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full"
//                     >
//                       {t}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex gap-4 mt-6">
//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-indigo-400 hover:underline text-sm"
//                     >
//                       Live Demo
//                     </a>
//                   )}
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-indigo-400 hover:underline text-sm"
//                     >
//                       GitHub
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       <section>
//         <Marquee
//           items={[
//             { img: "tech-stack/ASPNET.svg", alt: "HTML" },
//             { img: "tech-stack/CSHARP.svg", alt: "HTML" },
//             { img: "tech-stack/DOCKER.svg", alt: "HTML" },
//             { img: "tech-stack/DOTNET.svg", alt: "HTML" },
//             { img: "tech-stack/GITHUB.svg", alt: "HTML" },
//             { img: "tech-stack/HTML.svg", alt: "HTML" },
//             { img: "tech-stack/JAVASCRIPT.svg", alt: "HTML" },
//             { img: "tech-stack/MONGO.svg", alt: "HTML" },
//             { img: "tech-stack/NODE.svg", alt: "HTML" },
//             { img: "tech-stack/PYTHON.svg", alt: "HTML" },
//             { img: "tech-stack/REACT.svg", alt: "HTML" },
//             { img: "tech-stack/SHAREPOINT.svg", alt: "HTML" },
//             { img: "tech-stack/SQL.svg", alt: "HTML" },
//             { img: "tech-stack/TYPESCRIPT.svg", alt: "HTML" },
//           ]}
//         />
//       </section>
//     </main>
//   );
// }

import { client } from "@/sanity/client";
import ProjectsClient from "@/components/ProjectsClient/ProjectsClient";
// import { SanityDocument } from "next-sanity";
import { Project } from "@/types/project";
import Marquee from "../../components/Marquee/Marquee";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => builder.image(source).url();

const PROJECTS_PER_PAGE = 6;

async function getProjects(page: number) {
  const offset = (page - 1) * PROJECTS_PER_PAGE;

  const query = `
    {
      "projects": *[_type == "project"] | order(_createdAt desc) [$offset...$end]{
        _id,
        projectTitle,
        slug,
        body,
        skills,
        image,
        url,
        github
      },
      "total": count(*[_type == "post"])
    }
  `;

  const params = {
    offset,
    end: offset + PROJECTS_PER_PAGE,
  };

  return client.fetch<{ projects: Project[]; total: number }>(query, params);
}

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params?.page || "1", 10);

  const { projects, total } = await getProjects(currentPage);
  const totalPages = Math.ceil(total / PROJECTS_PER_PAGE);


      const query2 = `*[_type == "imgcarousel"][0]{
  images[]{asset->{url}},
  altText
  }`;
  
  const data = await client.fetch(query2);
  
  const items = 
  data?.images?.map((img: SanityImageSource) => ({
      img: urlFor(img),
      alt: data.altText || "Carousel image",
  })) || [];

  return (
    <main>
      <section>
        <ProjectsClient
          projects={projects}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
      <section>
   <Marquee
        items={items}
      />      </section>
    </main>
  );
}
