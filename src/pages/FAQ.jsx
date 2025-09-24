// src/pages/FAQ.jsx — Cleaned Single-FAQ Version

import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import FadeInSection from "../components/FadeInSection";

const faqs = [
  {
    q: "Do you provide the lights and hardware?",
    a: "Yes. We supply premium commercial-grade lights, clips, cabling, and timers — all included."
  },
  {
    q: "Are the lights custom-fit to my home?",
    a: "Absolutely. Every installation is custom-measured and cut to perfectly fit your rooflines and features."
  },
  {
    q: "Do you take the lights down after the holidays?",
    a: "Yes, we include removal as part of the full-service package."
  },
  {
    q: "Can I keep the lights for next year?",
    a: "Yes! You can keep the lights, or choose to store them with us for easy setup next season."
  },
  {
    q: "Do you offer off-season storage?",
    a: "We offer optional storage in climate-safe facilities with proper labeling and organization."
  },
  {
    q: "How quickly can you respond to maintenance issues?",
    a: "Typically within 48 hours — guaranteed."
  },
  {
    q: "Can you install lights on trees and walkways too?",
    a: "Yes, we can install lighting on trees, walkways, garages, fences, and more."
  },
  {
    q: "Is there a warranty on the lights?",
    a: "Yes, we warranty all bulbs and hardware during the install season."
  },
  {
    q: "What if a bulb burns out?",
    a: "Contact us and we’ll replace it within 48 hours — no extra charge."
  },
  {
    q: "Do you handle power/timers too?",
    a: "Yes, we handle timers, smart plugs, extension cords — all included."
  },
  {
    q: "How long does the installation take?",
    a: "Most homes are completed within one day, often within a few hours."
  },
  {
    q: "Can I request a specific color scheme?",
    a: "Of course! Choose from warm white, multicolor, patterns, and more."
  },
  {
    q: "Do you install for HOAs or commercial properties?",
    a: "Yes — we serve residential, commercial, and HOA clients."
  },
  {
    q: "What areas do you serve?",
    a: "Temple, Belton, Killeen, Harker Heights, and surrounding Bell County."
  },
  {
    q: "Are your crews insured?",
    a: "Yes — fully licensed and insured for your peace of mind."
  },
  {
    q: "Do I need to be home during the install?",
    a: "Not necessarily. As long as we have access and a plan, you don’t need to be present."
  },
  {
    q: "How far in advance should I book?",
    a: "Spots fill quickly — we recommend booking early fall for the best availability."
  },
  {
    q: "Do you offer discounts for referrals?",
    a: "Yes — refer friends or neighbors and receive credit toward future services."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept credit card, ACH, check, and online payment."
  },
  {
    q: "How much does it cost?",
    a: "It depends on the scope. Contact us for a fast, custom quote."
  }
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

export default function FAQ() {
  return (
    <>
      <SEO
        title="Christmas Light Installation FAQ — Temple, Belton, Killeen & Harker Heights"
        description="Common questions about professional Christmas light installs in Temple, Belton, Killeen & Harker Heights. Lights, takedown, storage, pricing & more."
        canonical="/faq"
        jsonLd={[schemaData]}
        opImage="/images/faqhero.webp"
      />

      <Hero
        title={
          <>
            FAQ<br />
            Christmas Light Installation
          </>
        }
        subtitle="Everything you need to know about lights, quotes, takedown, storage, and service areas."
        imageSrc="/images/faqhero.webp"
      />

      <FadeInSection>
        <section className="section">
          <Container className="max-w-5xl">
            <SectionTitle
              eyebrow="Frequently Asked"
              title="Christmas Light Installation Questions"
              className="text-center"
            />
            <div className="mt-6 space-y-4">
              {faqs.map((item, idx) => (
                <details
                  key={idx}
                  className="rounded-xl bg-white shadow p-4 text-left"
                >
                  <summary className="font-bold cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-2 text-black/80">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="section text-center">
          <Container>
            <div className="rounded-2xl bg-holidayGreen text-white p-8 md:p-12 shadow text-center">
              <h2 className="text-2xl md:text-3xl font-extrabold">
                Ready to make it shine?
              </h2>
              <p className="mt-2 md:text-lg text-white/90">
                Design, install, maintenance, and takedown included.
              </p>
              <div className="mt-6">
                <a href="/contact" className="btn-cta-lg">
                  Get A Fast Quote
                </a>
              </div>
            </div>
          </Container>
        </section>
      </FadeInSection>
    </>
  );
}
