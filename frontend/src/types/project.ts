import { SanityDocument } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "@portabletext/types";

export interface Project extends SanityDocument {
  projectTitle: string;
  slug: { current: string };
  body?: PortableTextBlock[]; // refine with PortableTextBlock[] if needed
  skills?: string[];
  image?: SanityImageSource;
  url?: string;
  github?: string;
}
