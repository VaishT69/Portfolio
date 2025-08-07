"use client";
import { motion } from "framer-motion";

interface Jobs {
  title: string;
  company: string;
  description: string;
}

interface Education {
  title: string;
  description: string;
}

const jobs: Jobs[] = [
  {
    title: "Junior Software Engineer (2024 - Present)",
    company: "BET Software (Hollywoodbets)",
    description:
      "Developed and maintained web and mobile solutions using React Native and Next.js.",
  },
  {
    title: "Graduate Software Engineer (2023 - 2024)",
    company: "BET Software (Hollywoodbets)",
    description:
      "Contributed to internal tools and enterprise-level applications, enhancing user experience and performance.",
  },
];

const education: Education[] = [
  {
    title: "Advanced Diploma in ICT: App Development (2024)",
    description:
      "Specialized in advanced software engineering, full-stack development, and enterprise-level application design.",
  },
  {
    title: "Diploma in ICT: App Development (2022)",
    description:
      "Cum Laude graduate, focusing on C#, JavaScript, SQL, and web/mobile app development.",
  },
  {
    title: "New West Secondary School",
    description: "Completed my National Senior Certificate.",
  },
  {
    title: "Cisco Networking Certifications (2021)",
    description:
      "Completed courses in networking, cybersecurity, and IT fundamentals.",
  },
];

export default function About() {
  return (
    <main>
      <section className=" px-10 py-20 bg-gray-950">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src="/vaish.png"
              alt="Your Photo"
              className="w-64 h-64 rounded-full shadow-xl border-4 border-gray-300"
            />
          </div>

          <div className="w-full md:w-1/2 space-y-4">
            {/* <h2 className="text-4xl font-bold text-gray-50">About Me</h2> */}
            <p className="text-lg text-gray-300">
              Hi! I&apos;m{" "}
              <span className="font-semibold text-gray-50">
                Vaishnav Teeluck
              </span>
              , a passionate{" "}
              <span className="text-indigo-600 font-semibold">
                Software Developer
              </span>{" "}
              specializing in web and mobile app development.
            </p>
            <p className="text-gray-300">
              I love building user-friendly applications and solving complex
              problems through clean code.
            </p>

            <div className="flex space-x-4 mt-6">
              <a
                href="docs/cv.pdf"
                download="Vaishnav-Teeluck-CV.pdf"
                className="px-6 py-3 bg-[#1E3E62] text-white rounded-xl shadow hover:bg-[#FF6500] transition-colors"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-[#1E3E62] text-white rounded-xl shadow hover:bg-[#FF6500] transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-black py-16 px-6 md:px-16">
  <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education & Work History</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Work History</h3>
      <ul className="space-y-4">
        <li>
          <h4 className="font-semibold">Junior Software Engineer (2024 - Present)</h4>
          <p className="text-gray-600 text-sm">BET Software (Hollywoodbets) - Developed web & mobile solutions with React Native & Next.js.</p>
        </li>
        <li>
          <h4 className="font-semibold">Graduate Software Engineer (2023 - 2024)</h4>
          <p className="text-gray-600 text-sm">BET Software (Hollywoodbets) - Developed web & mobile solutions with React Native & Next.js.</p>
        </li>
      </ul>
    </div>
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Education</h3>
      <ul className="space-y-4">
        <li>
          <h4 className="font-semibold">Diploma in ICT (2022)</h4>
          <p className="text-gray-600 text-sm">Cum Laude graduate, specializing in software and app development.</p>
        </li>
        <li>
          <h4 className="font-semibold">Cisco Networking (2021)</h4>
          <p className="text-gray-600 text-sm">Courses in networking, cybersecurity, and IT fundamentals.</p>
        </li>
           <li>
          <h4 className="font-semibold">Cisco Networking (2021)</h4>
          <p className="text-gray-600 text-sm">Courses in networking, cybersecurity, and IT fundamentals.</p>
        </li>
        
      </ul>
    </div>
  </div>
</section> */}
      <section className="bg-black py-16 px-6 md:px-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {" "}
          Education & Work History
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Work History Column */}
          <div className="space-y-6">
            {/* <motion.h3
              className="text-2xl font-semibold mb-4 text-indigo-400"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
              viewport={{ once: true }}
            >
              Work History
            </motion.h3> */}
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
              Work History
            </h3>
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-[#0B192C] p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                <div
                  key={index}
                  className="relative bg-[#0B192C] p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
                  <h4 className="font-semibold text-white relative z-10">
                    {job.title}
                  </h4>
                  <p className="text-gray-400 text-sm relative z-10">
                    {job.company} - {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* <div className="relative bg-gray-900 p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
              <h4 className="font-semibold text-white relative z-10">
                Junior Software Engineer (2024 - Present)
              </h4>
              <p className="text-gray-400 text-sm relative z-10">
                BET Software (Hollywoodbets) - Developed web & mobile solutions
                with React Native & Next.js.
              </p>
            </div>
            <div className="relative bg-gray-900 p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
              <h4 className="font-semibold text-white relative z-10">
                Graduate Software Engineer (2023 - 2024)
              </h4>
              <p className="text-gray-400 text-sm relative z-10">
                BET Software (Hollywoodbets) - Contributed to internal tools and
                enterprise-level applications.
              </p>
            </div> */}
          </div>

          {/* Education Column */}
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
              Education
            </h3>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-[#0B192C] p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
              >
                <div
                  key={index}
                  className="relative bg-[#0B192C] p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
                  <h4 className="font-semibold text-white relative z-10">
                    {edu.title}{" "}
                  </h4>
                  <p className="text-gray-400 text-sm relative z-10">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* <div className="relative bg-gray-900 p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
              <h4 className="font-semibold text-white relative z-10">
                Advanced Diploma in ICT: App Development (2024)
              </h4>
              <p className="text-gray-400 text-sm relative z-10">
                Specialized in advanced software engineering, full-stack
                development, and enterprise-level application design.
              </p>
            </div>
            <div className="relative bg-gray-900 p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
              <h4 className="font-semibold text-white relative z-10">
                Diploma in ICT: App Development (2022)
              </h4>
              <p className="text-gray-400 text-sm relative z-10">
                Cum Laude graduate, focusing on C#, JavaScript, SQL, and
                web/mobile app development.
              </p>
            </div>

            <div className="relative bg-gray-900 p-6 h-40 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 hover:opacity-100 transition duration-300"></div>
              <h4 className="font-semibold text-white relative z-10">
                New West Secondary School
              </h4>
              <p className="text-gray-400 text-sm relative z-10">
                Completed my National Senior Certificate.
              </p>
            </div> */}

            {/* <div className="bg-gray-900 p-6 h-40 rounded-xl shadow hover:shadow-lg  transition-transform duration-300 hover:scale-105 hover:shadow-[#7A7A73]">
              <h4 className="font-semibold">
                Cisco Networking Certifications (2021)
              </h4>
              <p className="text-gray-600 text-sm">
                Completed courses in networking, cybersecurity, and IT
                fundamentals.
              </p>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
