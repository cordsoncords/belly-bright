// /scripts/generate-sitemap.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Change this to your live domain when ready (or set env var SITE_URL)
const SITE = process.env.SITE_URL || "https://www.bellybrightchristmaslights.com";

// Static, indexable routes
const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/residential-lighting",
  "/commercial-lighting",
  "/gallery",
  "/contact",
  "/service-areas"
];

// Read cities from JSON (single source of truth)
const citiesPath = resolve(__dirname, "../src/data/cities.json");
const cities = JSON.parse(readFileSync(citiesPath, "utf8"));

// Build city URLs
const cityRoutes = cities.map((c) => `/service-areas/${c.slug}`);

// Optional: add lastmod (today)
const today = new Date().toISOString().slice(0, 10);

function urlTag(loc) {
  return `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${loc === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(urlTag).join("\n")}
${cityRoutes.map(urlTag).join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, xml, "utf8");

console.log(
  `✅ sitemap.xml generated with ${staticRoutes.length + cityRoutes.length} URLs → ${outPath}`
);
