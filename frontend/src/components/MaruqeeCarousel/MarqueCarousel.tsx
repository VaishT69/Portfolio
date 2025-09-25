import Marquee from "../../components/Marquee/Marquee";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

const urlFor = (source: SanityImageSource) => builder.image(source).url();

export default async function MarqueeCarousel() {
  
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
    <section>
      <Marquee
        items={items}
      />
    </section>
  );
}
