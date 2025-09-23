// /src/components/ServiceImageGrid.jsx
import ServiceCard from "./ServiceCard";

const IMG = {
  rooflines: "/services/resrooflines.webp",
  colors: "/services/colormix.webp",
  trees: "/services/restrees.webp",
  garland: "/services/garland.webp",
  columns:"/services/commercialcolumn.webp",
  courtyard:"/services/courtyard.webp",
  entryway: "/services/entryway.webp",
  walkway: "/services/reswalkways.webp",
  windows: "/services/windows.webp",
  hoa: "/services/hoa.webp",
  clubhouse: "/services/clubhouse.webp",
  retail: "/services/storefront.webp",
};

// Re-usable 3x2 image-card grid.
// variant: "res" | "com" | "city"
export default function ServiceImageGrid({ variant = "city", cityName }) {
  const ITEMS =
    variant === "res"
      ? [
          {
            title: "Classic warm white rooflines",
            image: IMG.rooflines,
            blurb:
              "Clean, elegant roofline outlines in warm white that make your home look timeless and bright.",
          },
          {
            title: "Color mixes & accents",
            image: IMG.colors,
            blurb:
              "Swap colors by section or choose a coordinated palette for a playful, modern look.",
          },
          {
            title: "Trees, shrubs & pathways",
            image: IMG.trees,
            blurb:
              "Wraps and tracers on trees and shrubs with path lighting that guides guests in style.",
          },
          {
            title: "Wreaths, garlands & columns",
            image: IMG.garland,
            blurb:
              "Classy greenery and column wraps that complete your holiday entry and façade.",
          },
          {
            title: "Window & peak outlines",
            image: IMG.windows,
            blurb:
              "Sharp, tidy outlines around windows and peaks for architectural emphasis.",
          },
          {
            title: "Entryways & columns",
            image: IMG.garland,
            blurb:
              "Welcoming, photo-ready entrances that make the whole house feel festive.",
          },
        ]
      : variant === "com"
      ? [
          {
            title: "Storefront rooflines & entries",
            image: IMG.retail,
            blurb: "Clean lines that attract shoppers and elevate curb appeal.",
          },
          {
            title: "Trees, shrubs & pathways",
            image: IMG.walkway,
            blurb:
              "Safe, tidy wraps that guide guests and create a festive atmosphere.",
          },
          {
            title: "Wreaths, garlands & columns",
            image: IMG.columns,
            blurb:
              "Holiday greenery and column wraps for entrances and common areas.",
          },
          {
            title: "HOA monuments & entries",
            image: IMG.hoa,
            blurb:
              "Eye-catching monuments and entry features that welcome residents home.",
          },
          {
            title: "Clubhouses & amenities",
            image: IMG.clubhouse,
            blurb:
              "Balanced, on-brand displays for community centers and amenities.",
          },
          {
            title: "Courtyards & courtyards",
            image: IMG.courtyard,
            blurb:
              "Warm, inviting gathering spaces for visitors and photo ops.",
          },
        ]
      : [
          {
            title: "Classic warm white rooflines",
            image: IMG.rooflines,
            blurb:
              `Clean outlines that make homes in ${cityName || "your city"} glow with a timeless look.`,
          },
          {
            title: "Color mixes & accents",
            image: IMG.colors,
            blurb:
              "Add pops of color to match neighborhood themes or personal taste.",
          },
          {
            title: "Trees, shrubs & pathways",
            image: IMG.trees,
            blurb:
              "Elegant wraps and path lighting for welcoming, photo-worthy yards.",
          },
          {
            title: "Wreaths, garlands & columns",
            image: IMG.garland,
            blurb:
              "Classic details for entries and porches that feel instantly festive.",
          },
          {
            title: "HOA monuments & entries",
            image: IMG.hoa,
            blurb:
              "Eye-catching community entries and monuments your neighbors will love.",
          },
          {
            title: "Retail & office facades",
            image: IMG.retail,
            blurb:
              "Professional displays for local businesses that invite customers in.",
          },
        ];

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {ITEMS.map((it) => (
        <ServiceCard key={it.title} {...it} />
      ))}
    </div>
  );
}
