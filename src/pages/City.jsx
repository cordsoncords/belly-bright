// /src/pages/City.jsx
import { useParams, Link } from "react-router-dom";
import SEO from "../components/SEO";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Hero from "../components/Hero";
import cities from "../data/cities";
import { cityCopy } from "../data/cityCopy";
import ServiceImageGrid from "../components/ServiceImageGrid";
import FadeInSection from "../components/FadeInSection";


const ABS = "https://bellybrightchristmaslights.com";

export default function City() {
  const { slug } = useParams();
  const city = cities.find((c) => c.slug === slug);

  if (!city) {
    return (
      <>
        <SEO title="City Not Found" description="This service area does not exist." />
        <Container className="py-28 text-center">
          <h1 className="text-3xl font-extrabold">City not found</h1>
          <p className="mt-4">
            Go back to{" "}
            <Link to="/service-areas" className="text-holidayGreen font-bold underline">
              Service Areas
            </Link>
            .
          </p>
        </Container>
      </>
    );
  }

  // Breadcrumbs for a City page
  const cityBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: ABS + "/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: ABS + "/service-areas" },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
        item: ABS + `/service-areas/${city.slug}`,
      },
    ],
  };

  const copy = cityCopy[city.slug] || {};
  const intro = copy.intro || `Professional holiday lighting in ${city.name}.`;

  const cityJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${city.name} Christmas Light Installation — Belly Bright`,
    serviceType:
      "Holiday lighting design, installation, maintenance, takedown, optional storage",
    provider: { "@type": "LocalBusiness", name: "Belly Bright Christmas Lights" },
    areaServed: `${city.name}, ${city.county || "Bell County"}, Texas`,
    image: ABS + "/images/cityhero.webp"
  };

  return (
    <>
      <SEO
        title={`${city.name} Christmas Light Installation — Belly Bright`}
        description={`Professional holiday lighting in ${city.name}. Custom design, install, maintenance, takedown.`}
        canonical={`/service-areas/${city.slug}`}
        jsonLd={[cityBreadcrumbs,cityJsonLd]}
      />

      {/* HERO */}
      <Hero
        imageSrc="/images/cityhero.webp"
        title={`${city.name} Christmas Light Installation`}
        subtitle={`Custom holiday lighting in ${city.name} and nearby neighborhoods.`}
        showButtons={false}
      />

      {/* INTRO + NEIGHBORHOODS CARD (kept intact; alignment fixed) */}
      <section className="section-alt">
        <Container wide>
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-start">
            {/* Intro text */}
            <div className="lg:pt-6">
              {/* (pt aligns visually with the neighborhoods heading) */}
              <p className="text-black/85 leading-relaxed">{intro}</p>
            </div>

            {/* Neighborhood card (unchanged look) */}
            <div className="rounded-3xl bg-white shadow p-6">
              <h3 className="text-center font-extrabold tracking-wide text-black/70">
                NEIGHBORHOODS WE SERVE
              </h3>
              <ul
                className="
                  mt-4 grid gap-2
                  sm:grid-cols-2
                  list-disc pl-6
                "
              >
                {(city.neighborhoods || []).map((n) => (
                  <li key={n} className="text-black/85">
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* CITY SERVICES — now image cards (only this block changed) */}
      <section className="section">
        <Container className="max-w-6xl">
          <SectionTitle
            eyebrow={`Services in ${city.name}`}
            title={`Holiday Lighting We Offer in ${city.name}`}
            className="text-center"
          />
          <div className="mt-8">
            <ServiceImageGrid variant="city" cityName={city.name} />
          </div>
        </Container>
      </section>

      {/* FAQ (unchanged pattern) */}
      <section className="section-alt">
        <Container className="max-w-5xl">
          <SectionTitle eyebrow="FAQ" title={`Common Questions in ${city.name}`} className="text-center" />
          <div className="mt-6 space-y-3">
            {(copy.faqs || [
              {
                q: "How fast can you install in this area?",
                a: "Most installs are completed in a single visit after your quote is approved.",
              },
              {
                q: "Do you include lights and hardware?",
                a: "Yes — commercial-grade LEDs and all hardware are included.",
              },
              {
                q: "Is takedown included?",
                a: "Yes — we remove everything after the season; optional labeled storage is available.",
              },
            ]).map((f, i) => (
              <details key={i} className="rounded-2xl bg-white shadow p-4">
                <summary className="font-bold cursor-pointer">{f.q}</summary>
                <p className="mt-2">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
      <Link to="/faq" className="btn-cta-lg">
        See All FAQs
      </Link>
    </div>
        </Container>
      </section>

      {/* FINAL CTA */}
            <FadeInSection>
            <section className="section text-center">
              <Container>
                <div className="rounded-2xl bg-holidayGreen text-white p-8 md:p-12 shadow text-center">
                  <h2 className="text-2xl md:text-3xl font-extrabold">
                    Milk and cookies optional.
                  </h2>
                  <p className="mt-2 md:text-lg text-white/90">
                    Design, install, maintenance, and takedown included.
                  </p>
                  <div className="mt-6">
                    <Link to="/get-a-fast-quote" className="btn-cta-lg">
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
