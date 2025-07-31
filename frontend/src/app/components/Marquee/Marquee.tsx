import { useEffect, useRef } from "react";

interface MarqueeItem {
  img: string;
  alt: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
}

export default function Marquee({ items }: MarqueeProps) {
  const marqueeContainerRef = useRef<HTMLDivElement | null>(null);
  const marqueeContentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = marqueeContainerRef.current;
    const content = marqueeContentRef.current;

    if (!container || !content) return;

    let scrollAmount = 0;
    let animationFrame: number;

    const scrollMarquee = () => {
      scrollAmount -= 1; // speed control (negative for left direction)
      if (Math.abs(scrollAmount) >= content.scrollWidth / 2) {
        scrollAmount = 0; // reset for seamless loop
      }
      content.style.transform = `translateX(${scrollAmount}px)`;
      animationFrame = requestAnimationFrame(scrollMarquee);
    };

    animationFrame = requestAnimationFrame(scrollMarquee);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative mx-auto py-4 w-full md:w-10/12 xl:w-8/12 overflow-hidden">
      {/* Blur overlays */}
      <div className="bg-light blur-lg absolute h-48 w-20 sm:w-32 top-0 -left-12 z-50"></div>
      <div className="bg-light blur-lg absolute h-48 w-20 sm:w-32 top-0 -right-12 z-50"></div>

      {/* Marquee */}
      <div ref={marqueeContainerRef} className="w-full flex overflow-hidden">
        <div ref={marqueeContentRef} className="flex">
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="box rounded-2xl cursor-pointer flex w-32 mx-6 my-4"
            >
              <div className="bg-opacity-70 bg-white py-4 rounded-lg">
                <img src={item.img} alt={item.alt} className="w-11/12 mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
