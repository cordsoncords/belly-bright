// /src/pages/Commercial.jsx
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
  name: "Commercial & HOA Christmas Lighting",
  serviceType:
    "Commercial holiday lighting design, installation, mid-season maintenance, takedown",
  provider: { "@type": "LocalBusiness", name: "Belly Bright Christmas Lights" },
  areaServed: "Bell County, Texas",
  image: ABS + "/images/commercialhero.webp"
};

// Breadcrumbs
const commercialBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: ABS + "/" },
    { "@type": "ListItem", position: 2, name: "Commercial Lighting", item: ABS + "/commercial-lighting" },
  ],
};

export default function Commercial() {
  return (
    <>
      <SEO
        title="Commercial & HOA Christmas Lighting — Belly Bright"
        description="Storefronts, HOAs, campuses, clubhouses and amenities. Professional, scalable holiday lighting displays."
        canonical="/commercial-lighting"
        jsonLd={[serviceJsonLd, commercialBreadcrumbs]}
        ogImage="/images/commercialhero.webp"
      />

      {/* HERO */}
      <Hero
        imageSrc="/images/commercialhero.webp"
        title="Commercial & HOA Christmas Lighting"
        subtitle="Delivering holiday wow for businesses across Bell County, TX."
        showButtons={false}
      />

      {/* Intro) */}
                  <FadeInSection>
                    <section className="section !pt-28">
                      <Container className="max-w-6xl">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                          <div className="space-y-6">
                            <h2 className="text-4xl font-holiday text-holidayGreen drop-shadow-sm">
                              Your Property Deserves The {" "}
                              <span className="text-red-600">Rockstar Treatment</span>!
                            </h2>
                            <p className="text-lg text-black/80 leading-relaxed">
                              At Belly Bright Christmas Lights, we help retail centers, restaurants, municipalities, HOAs, and office parks create eye-catching, festive environments that draw attention and boost community spirit. Did we mention you don’t have to lift a finger?
                            </p>
                            <p className="text-lg text-black/80 leading-relaxed">
                              Every project is custom-designed to fit your property and we use the latest  and greatest commercial-grade lighting. Our install team is safety-certified and we handle everything from start to finish: setup, maintenance, takedown, and off-season storage. No managing timers. No figuring out outages. Just a professional holiday display to get your patrons and customers in the holiday spirit!
                            </p>
                          </div>
                          <div className="flex justify-center">
                            <img
                              src="/images/commercialabout.webp"
                              alt="About Belly Bright Christmas light services"
                              className="rounded-3xl shadow-xl max-h-[500px] w-auto object-contain"
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

      {/* POPULAR INSTALLS — image cards already integrated */}
      <FadeInSection>
      <section className="section">
        <Container className="max-w-6xl">
          <SectionTitle eyebrow="Where It Shines" title="Popular Commercial & HOA Installs" className="text-center" />
          <div className="mt-8">
            <ServiceImageGrid variant="com" />
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
              { q: "Can you work around our business hours?", a: "Yes — we coordinate to minimize disruption and meet your timeline." },
              { q: "Are permits required?", a: "If needed, we’ll advise what’s required for your property." },
              { q: "Do you offer multi-site installs?", a: "Absolutely — we scale across locations and HOAs with a consistent look." },
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
                          Get your holiday on.
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
