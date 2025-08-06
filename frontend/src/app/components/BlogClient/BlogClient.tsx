"use client";

import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { easeOut, motion } from "framer-motion";

interface BlogClientProps {
  posts: (SanityDocument & {
    slug: { current: string };
    image?: SanityImageSource;
    author?: string;
    publishedAt: string;
  })[];
  currentPage: number;
  totalPages: number;
}

export default function BlogClient({
  posts,
  currentPage,
  totalPages,
}: BlogClientProps) {
  const { projectId, dataset } = client.config();
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  return (
    <main>
      <section className="container mx-auto min-h-screen max-w-5xl p-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: easeOut }}
          className="relative z-30 container mx-auto w-full max-w-6xl"
        >
          <h1 className="text-4xl font-bold mb-8 text-white">Posts</h1>
        </motion.div>
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => {
            const post = posts[i];
            const image = post?.image;
            return (
              <li
                key={i}
                className=" border-2 border-[#57564F] p-4 shadow-2xl rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-[#1E3E62] bg-[#0B192C]"
              >
                {post ? (
                  <Link href={`/blog/${post.slug.current}`}>
                    <div className="relative z-30 container mx-auto  w-full max-w-6xl ">
                      {image && (
                        <img
                          src={urlFor(image)!
                            .width(250)
                            .height(200)
                            .url()}
                          alt={post.title}
                          className="rounded-lg my-2 border-2 border-[#DDDAD0] shadow-2xl"
                        />
                      )}
                      <h2 className="text-xl font-semibold text-white">
                        {post.title}
                      </h2>
                      <h2 className="text-md font-extralight text-white">
                        - {post.author}
                      </h2>
                      <button className="w-24 text-sm h-10 bg-white border-2 rounded-3xl mt-6 text-black transition-transform duration-300 hover:scale-105 hover:shadow-[#7A7A73] ">
                        Read
                      </button>
                    </div>
                  </Link>
                ) : (
                  <div className="w-full h-[250px] opacity-0" />
                )}
              </li>
            );
          })}
        </ul>
        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-4">
          {currentPage > 1 && (
            <Link
              href={`?page=${currentPage - 1}`}
              className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-200"
            >
              Previous
            </Link>
          )}
          <span className="px-4 py-2 text-gray-700">
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
        </div>
      </section>
    </main>
  );
}
