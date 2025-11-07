// import Image from "next/image";
"use client";

import SplitText from "@/components/SplitText/SplitText";
import GradientText from "../components/GradientText/GradientText";
import LandingComponent from "../components/LandingComponent/LandingComponent";
import Marquee from "../components/Marquee/Marquee";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <main className="p-0">
      <section className="bg-black w-full h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LandingComponent
            amplitude={1}
            distance={0}
            enableMouseInteraction={true}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full pb-10 ">
          <SplitText
            text="Hey, I'm Vaish!"
            className="text-6xl md:text-6xl font-bold text-center mb-2"
            delay={100}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <p className="text-3xl  font-extralight text-gray-400">Designing with strategy, not just style.</p>

          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class mt-4 text-xl mb-20"
          >
            Software Development Engineer
          </GradientText>
          <div className="flex space-x-4 mb-20">
            <a
              href="docs/cv.pdf"
              download="Vaishnav-Teeluck-CV.pdf"
              className="px-6 py-3 rounded-xl font-semibold 
               bg-[#FF6500] text-white 
               shadow-[0_0_10px_rgba(30,62,98,0.7)]
               border-2 border-[#FF6500] hover:bg-[#FF6500] hover:shadow-[0_0_20px_#FF6500,0_0_40px_#FF6500] 
               transform hover:-translate-y-1 active:translate-y-0.5 active:scale-95
               transition-all duration-300 ease-in-out animate-glow"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-xl font-semibold 
               bg-[#1E3E62] text-white 
               shadow-[0_0_10px_rgba(30,62,98,0.7)]
               hover:bg-[#1E3E62] hover:shadow-[0_0_20px_#FF6500,0_0_40px_#FF6500] 
               transform hover:-translate-y-1 active:translate-y-0.5 active:scale-95
               transition-all duration-300 ease-in-out"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="pt-20">
          {/* <h1 className="text-4xl font-bold mb-2 text-center">Hi, I'm Vaish</h1> */}
        </div>
      </section>
      <section>
        <Marquee
          items={[
            { img: "/logo.jpg", alt: "HTML" },
            { img: "/logo2.jpeg", alt: "HTML" },
            { img: "/logo.jpg", alt: "HTML" },
            { img: "/logo2.jpeg", alt: "HTML" },
            { img: "/logo.jpg", alt: "HTML" },
            { img: "/logo2.jpeg", alt: "HTML" },
            { img: "/logo.jpg", alt: "HTML" },
            { img: "/logo2.jpeg", alt: "HTML" },
            { img: "/logo.jpg", alt: "HTML" },
            { img: "/logo2.jpeg", alt: "HTML" },
            { img: "/logo.jpg", alt: "HTML" },
            { img: "/logo2.jpeg", alt: "HTML" },
          ]}
        />
      </section>
      <section className="bg-gray-950 py-16 px-6 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Roadmap and History{" "}
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src="/vaish.png"
              alt="Your Photo"
              className="w-64 h-64 rounded-full shadow-xl border-4 border-gray-300"
            />
          </div>
          <div className="relative border-l-4 border-indigo-500 ml-6">
            <div className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2"></div>
              <h3 className="text-xl font-semibold">
                2024 - Present: Junior Software Engineer
              </h3>
              <p className="text-gray-600">
                BET Software (Hollywoodbets Group) - Worked on web and mobile
                projects using React Native, Next.js, and C#.
              </p>
            </div>
            <div className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2"></div>
              <h3 className="text-xl font-semibold">
                2023: Advanced Diploma in ICT{" "}
              </h3>
              <p className="text-gray-600">
                Specialized in advanced software engineering, full-stack
                development, and enterprise-level application design.
              </p>
            </div>
            <div className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2"></div>
              <h3 className="text-xl font-semibold">
                2022: Diploma in ICT (App Development)
              </h3>
              <p className="text-gray-600">
                Graduated Cum Laude with strong skills in C#, JavaScript, SQL,
                and mobile/web app development.
              </p>
            </div>
            <div className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-indigo-500 rounded-full -left-2"></div>
              <h3 className="text-xl font-semibold">
                2019: New West Secondary School
              </h3>
              <p className="text-gray-600">
                Completed my National Senior Certificate.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>

    // </div>
  );
}
