// /src/pages/Gallery.jsx
import { useMemo, useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Hero from "../components/Hero";
import SEO from "../components/SEO";
import FadeInSection from "../components/FadeInSection";


const IMAGES = [
  // Put real files in /public/gallery with these names (or adjust paths)
  { src: "/gallery/res1.webp", alt: "Warm white roofline on a home", tag: "residential" },
  { src: "/gallery/res2.webp", alt: "warm white roofline on home with lit wreath on chimney", tag: "residential" },
  { src: "/gallery/res3.webp", alt: "warm white roofline on home with metal roof", tag: "residential" },

  { src: "/gallery/res4.webp", alt: "Brick home outlined in red and white Christmas lights on the roofline, windows, garage doors, and entryway", tag: "residential" },
  { src: "/gallery/res5.webp", alt: "Single-story brick house decorated with classic warm white Christmas lights along the roofline, garage, entryway, and landscaping", tag: "residential" },
  { src: "/gallery/commercial1.webp", alt: "Brick commercial building with trees wrapped in warm white Christmas lights", tag: "commercial" },
  { src: "/gallery/commercial2.webp", alt: "Covered commercial drive-through area with brick columns wrapped in warm white Christmas lights", tag: "commercial" },

];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bellybrightchristmaslights.com/" },
    { "@type": "ListItem", position: 2, name: "Gallery", item: "https://bellybrightchristmaslights.com/gallery" },
  ],
};

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null); // { src, alt } or null

  const filtered = useMemo(() => {
    if (filter === "all") return IMAGES;
    return IMAGES.filter((img) => img.tag === filter);
  }, [filter]);

  return (
    <>
      <SEO
        title="Gallery — Holiday Lighting Ideas"
        description="See real holiday lighting installations: rooflines, trees, pathways, wreaths, commercial facades, HOA monuments, and more."
        canonical="/gallery"
        jsonLd={breadcrumbJsonLd}
      />

      <Hero
        imageSrc="/images/galleryhero.webp"
        title="Holiday Lighting Gallery"
        subtitle="A few of our favorite installs across homes, HOAs, and businesses."
        showButtons={false}
      />

      <Container className="py-14 lg:py-20">
        <SectionTitle eyebrow="Get inspired" title="Browse Our Work" className="text-center" />

        {/* Filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={[
                "px-5 py-2 rounded-full font-bold border transition",
                filter === f.key
                  ? "bg-holidayGreen text-white border-holidayGreen"
                  : "bg-white text-holidayGreen border-holidayGreen hover:bg-holidayGreen/10",
              ].join(" ")}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setActive(img)}
              className="group relative rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
              aria-label={`Open ${img.alt}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </button>
          ))}
        </div>
      </Container>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <figure
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.src}
              alt={active.alt}
              loading="eager"
              decoding="async"
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <figcaption className="mt-3 text-center text-white/90">
              {active.alt}
            </figcaption>

            <button
              onClick={() => setActive(null)}
              className="absolute -top-3 -right-3 bg-white text-holidayGreen rounded-full w-10 h-10 font-extrabold shadow hover:scale-105 transition"
              aria-label="Close"
              title="Close"
            >
              ×
            </button>
          </figure>
        </div>
      )}
    </>
  );
}
