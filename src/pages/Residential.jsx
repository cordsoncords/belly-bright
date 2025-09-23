// /src/pages/Residential.jsx
import SEO from "../components/SEO";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Hero from "../components/Hero";
import ServiceImageGrid from "../components/ServiceImageGrid";
import { Link } from "react-router-dom";
import FadeInSection from "../components/FadeInSection";
import HowItWorks from "../components/HowItWorks";



const ABS = "https://bellybrightchristmaslights.com";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Residential Christmas Lighting",
  serviceType:
    "Holiday lighting design, installation, mid-season maintenance, takedown, optional storage",
  provider: { "@type": "LocalBusiness", name: "Belly Bright Christmas Lights" },
  areaServed: "Bell County, Texas",
  image: ABS + "/service-residential-hero.jpg"
};

// Breadcrumbs
const residentialBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: ABS + "/" },
    { "@type": "ListItem", position: 2, name: "Residential Lighting", item: ABS + "/residential-lighting" },
  ],
};

export default function Residential() {
  return (
    <>
      <SEO
        title="Residential Christmas Lighting — Belly Bright"
        description="Custom residential holiday lighting: clean outlines, color mixes, trees & shrubs, wreaths and more. We design, install, maintain, and take down."
        canonical="/residential-lighting"
        jsonLd={[serviceJsonLd, residentialBreadcrumbs]}
        ogImage="/images/residentialhero.webp"
      />

      {/* HERO */}
      <Hero
        imageSrc="/images/residentialhero.webp"
        title="Residential Christmas Lighting in Bell County, TX"
        subtitle="Custom designs. Pro installation. Safe takedown. Your one stop shop for holiday cheer."
        showButtons={false}
      />

      {/* ABOUT (UPDATED STYLE) */}
            <FadeInSection>
              <section className="section !pt-28">
                <Container className="max-w-6xl">
                  <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                      <h2 className="text-4xl font-holiday text-holidayGreen drop-shadow-sm">
                        Belly Bright Makes Your Home The Brightest On The Block— {" "}
                        <span className="text-red-600">Without Lifting A Ladder</span>!
                      </h2>
                      <p className="text-lg text-black/80 leading-relaxed">
                        There's nothing like coming home to a house that looks (and feels) like Christmas. At belly Bright Christmas Lights, we're in the business of makin g that moment happen- minus the stress, the ladders, and the tangled mess.
                      </p>
                      <p className="text-lg text-black/80 leading-relaxed">
                        Every home we light is custom-designed, safely AND professionally installed, and fully managed from start to finish. You don’t have to buy lights, figure out what goes where, or troubleshoot issues- sounds pretty great huh?  We handle everything from install, to take down, to storage, so you can enjoy the season the way it was meant to be enjoyed- stress free with the people you love!
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/images/about.jpg"
                        alt="About Belly Bright Christmas light services"
                        className="rounded-3xl shadow-xl w-full h-80 object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </Container>
              </section>
            </FadeInSection>

      {/* HOW IT WORKS */}
            <FadeInSection>
            <HowItWorks />
            </FadeInSection>

      {/* SERVICES GRID (image cards already integrated) */}
      <FadeInSection>
      <section className="section">
        <Container className="max-w-6xl">
          <SectionTitle eyebrow="Popular Options" title="Residential Lighting We Love" className="text-center" />
          <div className="mt-8">
            <ServiceImageGrid variant="res" />
          </div>
        </Container>
      </section>
      </FadeInSection>

      {/* FAQ */}
      <FadeInSection>
      <section className="section-alt">
        <Container className="max-w-5xl">
          <SectionTitle eyebrow="FAQ" title="Common Questions" className="text-center" />
          <div className="mt-6 space-y-3">
            {[
              { q: "How fast can you install lights?", a: "Most installs finish in one visit after approval." },
              { q: "Do you provide lights and hardware?", a: "Yes — commercial-grade LEDs and hardware are included." },
              { q: "Is takedown included?", a: "Yes — optional labeled storage is available." },
            ].map((item) => (
              <details key={item.q} className="rounded-2xl bg-white shadow p-4">
                <summary className="font-bold cursor-pointer">{item.q}</summary>
                <p className="mt-2 text-black/80">{item.a}</p>
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
      </FadeInSection>

      {/* FINAL CTA */}
                  <FadeInSection>
                  <section className="section text-center">
                    <Container>
                      <div className="rounded-2xl bg-holidayGreen text-white p-8 md:p-12 shadow text-center">
                        <h2 className="text-2xl md:text-3xl font-extrabold">
                          The North Pole’s favorite contractor.
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
