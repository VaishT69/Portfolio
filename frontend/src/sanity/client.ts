import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
export const urlFor = (source: SanityImageSource) => builder.image(source);