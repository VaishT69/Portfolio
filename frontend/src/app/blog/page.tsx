// import Link from "next/link";
// import { type SanityDocument } from "next-sanity";

// import { client } from "@/sanity/client";

// const POSTS_QUERY = `*[
//   _type == "post"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

// const options = { next: { revalidate: 30 } };

// export default async function Blog() {
//   const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

//   return (
//     <main className="container mx-auto min-h-screen max-w-3xl p-8">
//       <h1 className="text-4xl font-bold mb-8 text-white">Posts</h1>
//       <ul className="flex flex-col gap-y-4">
//         {posts.map((post) => (
//           <li className="hover:underline" key={post._id}>
//             <Link href={`/blog/${post.slug.current}`}>
//               <h2 className="text-xl font-semibold">{post.title}</h2>
//               <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }

import { client } from "@/sanity/client";
import BlogClient from "@/app/components/BlogClient/BlogClient";

const POSTS_PER_PAGE = 6;
const POSTS_QUERY = (start = 0, end = POSTS_PER_PAGE) => 
     `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12][${start}...${end}]{
_id, 
title, 
slug, 
publishedAt, 
image, 
author
}`;

const options = { next: { revalidate: 30 } };
const getTotalCountQuery = `count(*[_type == "post" && defined(slug.current)])
`;
export default async function Blog({
  searchParams,
}: {
  searchParams?: Record<string, string | undefined>;
}) {
    const page = parseInt(searchParams?.page || "1", 10);
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const posts = await client.fetch(POSTS_QUERY(start,end), {}, options);

    const totalPosts = await client.fetch(getTotalCountQuery);
    const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

    return (
        <BlogClient posts={posts} currentPage={page} totalPages={totalPages}/>
    );

}