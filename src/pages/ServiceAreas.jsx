// /src/pages/ServiceAreas.jsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Container from "../components/Container";
import cities from "../data/cities";
import { cityCopy } from "../data/cityCopy";
import FadeInSection from "../components/FadeInSection";
import SectionTitle from "../components/SectionTitle";


const ABS = "https://bellybrightchristmaslights.com";

const serviceAreaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Christmas Light Installation — Bell County, TX",
  serviceType:
    "Holiday lighting design, installation, maintenance, takedown, optional storage",
  provider: { "@type": "LocalBusiness", name: "Belly Bright Christmas Lights" },
  areaServed: "Bell County, Texas",
  image: ABS + "/images/serviceareahero.webp",
};

// NEW: Breadcrumbs (no visual change)
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: ABS + "/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: ABS + "/service-areas",
    },
  ],
};

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Service Areas — Bell County Christmas Light Installation"
        description="Professional residential and commercial holiday lighting across Bell County, TX — Temple, Belton, Killeen, Harker Heights, and more."
        canonical="/service-areas"
        jsonLd={[serviceAreaJsonLd, breadcrumbJsonLd]}
        opImage="/images/serviceareahero.webp"
      />

      {/* 1) HERO */}
      <Hero
        imageSrc="/images/serviceareahero.webp"
        title="Bell County's #1 Holiday Lighting Company"
        subtitle="Proudly bringing the best Christmas light installations to homes and businesses in Killen, Temple, Belton, Salado, and surrounding communities."
        showButtons={false}
      />

      {/* WHO WE ARE */}
            <FadeInSection>
      <section className="section">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/images/serviceareasabout.jpg"
                alt="Belly Bright team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <SectionTitle eyebrow="Cities We Serve" title="Proudly Serving Bell County,TX" />
              <p className="mt-4 text-black/80 leading-relaxed space-y-4">
              From Temple and Belton to Killeen and Harker Heights, we make homes in Bell County shine extra bright for the holidays! Our team handles custom designs, professional installation, mid-season fixes, and display takedown. Want us to stash everything until next year? Great… we already do that too!
              </p>
              <p className="mt-4 text-black/80 leading-relaxed">
              Check out the locations below to explore service details, neighborhoods, and FAQs tailored to your city!
              </p>
            </div>
          </div>
        </Container>
      </section>
      </FadeInSection>


      {/* 3) LARGE CITY CARDS — rounded, bigger, with intro snippet */}
      <FadeInSection>
      <section className="section-alt">
        <Container wide>
          <div
            className="
              grid gap-10
              sm:grid-cols-2
              lg:grid-cols-3
              xl:grid-cols-3
            "
          >
            {cities.map((c) => {
              const copy = cityCopy[c.slug];
              const snippet = copy?.intro
                ? copy.intro.slice(0, 160).replace(/\s+\S*$/, "") + "…"
                : `Professional holiday lighting in ${c.name} — design, install, maintenance, takedown.`;

              const preview =
                Array.isArray(c.neighborhoods) && c.neighborhoods.length
                  ? c.neighborhoods.slice(0, 3).join(", ")
                  : c.name;

              return (
                <Link
                  key={c.slug}
                  to={`/service-areas/${c.slug}`}
                  className="
                    relative group block rounded-3xl bg-white
                    shadow-[0_10px_0_rgba(0,0,0,0.25)] border border-black/5
                    hover:-translate-y-1.5 hover:shadow-[0_16px_0_rgba(0,0,0,0.25)]
                    transition transform
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400/70
                    min-h-[340px]
                  "
                >
                  {/* Festive badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-block rounded-full bg-holidayRed text-white text-xs font-extrabold px-3 py-1 shadow-md">
                      🎄 Holiday Ready
                    </span>
                  </div>

                  <div className="p-10">
                    <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                      {c.name}
                    </h3>

                    {/* Neighborhood preview */}
                    <div className="mt-4 text-xs font-bold tracking-wider text-black/60 uppercase">
                      Service Areas:
                    </div>
                    <div className="mt-2 border-t border-black/10 pt-3 text-black/80">
                      {preview}
                      {Array.isArray(c.neighborhoods) && c.neighborhoods.length > 3 ? "…" : ""}
                    </div>

                    {/* Intro snippet */}
                    <p className="mt-4 text-lg text-black/80 leading-snug">{snippet}</p>

                    <div className="mt-6">
                      <span className="inline-flex items-center gap-2 font-extrabold text-holidayRed group-hover:underline text-xl">
                        View Details
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.75 12a.75.75 0 0 1 .75-.75h13.19l-4.72-4.72a.75.75 0 1 1 1.06-1.06l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4.5A.75.75 0 0 1 3.75 12Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
      </FadeInSection>

      {/* FINAL CTA */}
                  <FadeInSection>
                  <section className="section text-center">
                    <Container>
                      <div className="rounded-2xl bg-holidayGreen text-white p-8 md:p-12 shadow text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold">
                          Brighter holidays, the easy way.
                        </h2>
                        <p className="mt-2 md:text-lg text-white/90">
                          Design, install, maintenance, and takedown included.
                        </p>
                        <div className="mt-6">
                          <Link to="/contact" className="btn-cta-lg">
                            Get A Fast Quote
                          </Link>
                        </div>
                      </div>
                    </Container>
                  </section>
                  </FadeInSection>
    </>
  );
}
