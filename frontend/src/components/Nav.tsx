"use client";

import Link from "next/link";
// import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  // const [isOpen, setIsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000000] shadow p-4 flex justify-between">
      <h1 className="text-2xl font-bold text-[#1E3E62] p-2">
        VAISHNAV TEELUCK
      </h1>
      <ul className="hidden md:flex gap-6 font-semibold text-[#FF6500] border-2 border-[#1E3E62] p-2 rounded-2xl pr-4 pl-4">
        <Link className="hover:text-pink-30 p-2" href="/">
          <li>Home</li>
        </Link>
        <Link className="hover:text-[#1E3E62] p-2" href="/about">
          <li>About</li>
        </Link>
        <Link className="hover:text-[#1E3E62] p-2" href="/projects">
          <li>Projects</li>
        </Link>
        <Link className="hover:text-[#1E3E62] p-2" href="/contact">
          <li>Contact</li>
        </Link>
        <Link className="hover:text-[#1E3E62] p-2" href="/blog">
          <li>Blog</li>
        </Link>
      </ul>

      <button
        className="md:hidden text-gray-300 p-2 z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="ToggleMenu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full space-y-4 h-screen justify-center text-center p-4 flex flex-col md:hidden z-40 bg-black">
          <Link
            className="py-2 px-4 text-[#FF6500] font-extralight text-2xl"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            className="py-2 px-4 text-[#FF6500] font-extralight text-2xl"
            href="/about"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            className="py-2 px-4 text-[#FF6500] font-extralight text-2xl"
            href="/projects"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            className="py-2 px-4 text-[#FF6500] font-extralight text-2xl"
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link
            className="py-2 px-4 text-[#FF6500] font-extralight text-2xl"
            href="/blog"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
      {/* 
      <button className="md:hidden text-gray-700 p-2"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Menu"
      >
     

      </button> */}
    </nav>
  );
}
