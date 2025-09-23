// src/pages/About.jsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Hero from "../components/Hero";
import FadeInSection from "../components/FadeInSection";


const ABS = "https://bellybrightchristmaslights.com";

// Breadcrumbs JSON-LD
const aboutBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: ABS + "/" },
    { "@type": "ListItem", position: 2, name: "About", item: ABS + "/about" },
  ],
};

export default function About() {
  return (
    <>
      <SEO
        title="About — Belly Bright Christmas Light"
        description="Learn about Belly Bright: clean design, safe installs, dependable maintenance and careful takedown for Christmas lighting across Bell County, TX."
        canonical="/about"
        jsonLd={aboutBreadcrumbs}
        ogImage="/images/abouthero.webp"
      />

      {/* HERO */}
      <Hero
        imageSrc="/images/abouthero.webp"
        title="Meet Temple's Christmas Light Pro's"
        subtitle="Learn who we are and why the community chooses Belly Bright when they need their holiday lighting done right."
        showButtons={false}
      />

      {/* WHO WE ARE */}
      <FadeInSection>
<section className="section">
  <Container>
    <div className="grid lg:grid-cols-2 gap-10 items-center">
      <div className="rounded-3xl overflow-hidden shadow-lg">
        <img
          src="/images/about.jpg"
          alt="Belly Bright team"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div>
        <SectionTitle eyebrow="Who We Are" title="Our Story" />
        <p className="mt-4 text-black/80 leading-relaxed space-y-4">
          Belly Bright is a small, locally owned business based in Temple, TX—and while we may not be Santa’s official crew, we take our holiday spirit pretty darn seriously.
        </p>
        <p className="mt-4 text-black/80 leading-relaxed">
          We started this business with one goal in mind: bring our community the best Christmas experience possible. We love the feeling of pulling up to a home or business that gives off the warm glow that only comes with this season, and we want to share that with you.
        </p>
        <p className="mt-4 text-black/80 leading-relaxed">
          We’re proud to serve our neighbors with custom lighting displays—and if we get to play even a small part in your holiday traditions, we’re honored. For us, it’s about more than just lights. It’s about helping the season feel the way it should, so you can share it with the people who matter most.
        </p>
      </div>
    </div>
  </Container>
</section>
</FadeInSection>


      {/* OUR PROMISE – numbered cards */}
      <FadeInSection>
      <section className="section-alt">
        <Container>
          <SectionTitle eyebrow="Our Promise" title="What You Can Always Expect" className="text-center" />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                n: 1,
                h: "We'll never make you climb a ladder again",
                p: "Seriously. Not this year. Not next year. Not ever. That’s our job now—and we’re better at it anyway.",
              },
              {
                n: 2,
                h: "We leave your home better than we found it.",
                p: "We make sure it still feels like your home when we’re done—just a little bit brighter!",
              },
              {
                n: 3,
                h: "If we say we’ll do it, we’ll do it.",
                p: "Our word is everything. We do the work like it has our name on it- because it does.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="relative rounded-2xl bg-white p-6 shadow-[0_10px_0_rgba(0,0,0,0.15)] border border-black/5"
              >
                <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-holidayRed text-white font-extrabold grid place-items-center shadow">
                  {item.n}
                </div>
                <h3 className="mt-4 font-extrabold text-lg">{item.h}</h3>
                <p className="mt-2 text-black/70">{item.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      </FadeInSection>

            {/* WHY CHOOSE US – hero overlay with 6 floating cards */}
            <FadeInSection>
<section className="relative">
  <div className="py-16 px-4 text-center min-h-[310px]">
  <SectionTitle
    eyebrow="Why Choose Us"
    title="Why Choose Belly Bright?"
  />
  <p className="mt-4 max-w-2xl mx-auto text-gray-700">
    We don’t just hang lights — we handle your entire holiday lighting experience, start to finish.
    Here’s why Bell County chooses Belly Bright:
  </p>
</div>

  {/* floating cards */}
  <Container>
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 -mt-20 relative z-20">
      {[
        {
          k: "No Holiday Headaches",
          v: "We are completely Turnkey! We take care of everything from the moment you accept your quote to the moment it’s time to break down and store your display.",
        },
        {
          k: "Installed by Professionals",
          v: "Our team is licensed, insured, and goes through safety and best practices training to ensure we can provide you with the best Christmas light service possible!",
        },
        {
          k: "Highest Quality Lighting",
          v: "We use the most premium, commercial grade lights available, not the junk you find at a box store that only lasts one season.",
        },
        {
          k: "Designed for Your Space",
          v: "Each of our Christmas Light Displays are custom created to fit your home/business and preference. Go crazy — we dare you!",
        },
        {
          k: "Maintained All Season",
          v: "If something goes out… then we go out! Within 48 hours we’ll have you back up and running, no questions asked!",
        },
        {
          k: "Removed & Stored for You",
          v: "When the season’s over, we’ll pack everything up and store it until next year. Space is a luxury; use that Christmas closet for something else!",
        },
      ].map((i) => (
        <div
          key={i.k}
          className="bg-white rounded-2xl p-8 shadow-lg border border-black/5 hover:shadow-xl transition text-center"
        >
          <h3 className="font-extrabold text-lg text-holidayGreen">{i.k}</h3>
          <p className="mt-3 text-black/70">{i.v}</p>
        </div>
      ))}
    </div>
  </Container>
</section>
</FadeInSection>




      {/* WHERE WE WORK – cities + CTA (left) and Google Map (right) */}
      <FadeInSection>
      <section className="section-alt">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle
                eyebrow="Where We Work"
                title="Proudly Serving Bell County"
              />
              <p className="mt-4 text-black/70">
                From Temple and Belton to Killeen and Harker Heights—our insured
                crew delivers clean installs, reliable maintenance, and careful
                takedown all season long.
              </p>

              <ul className="mt-6 space-y-2 text-lg font-medium">
                <li><Link to="/service-areas/temple" className="hover:underline">Temple</Link></li>
                <li><Link to="/service-areas/belton" className="hover:underline">Belton</Link></li>
                <li><Link to="/service-areas/killeen" className="hover:underline">Killeen</Link></li>
                <li><Link to="/service-areas/harker-heights" className="hover:underline">Harker Heights</Link></li>
                <li><Link to="/service-areas/nolanville" className="hover:underline">Nolanville</Link></li>
                <li><Link to="/service-areas/salado" className="hover:underline">Salado</Link></li>
                <li><Link to="/service-areas/troy" className="hover:underline">Troy</Link></li>
                <li><Link to="/service-areas/little-river-academy" className="hover:underline">Little River-Academy</Link></li>
              </ul>

              <div className="mt-6">
                <Link to="/service-areas" className="btn-cta-lg">
                  View All Service Areas
                </Link>
              </div>
            </div>

            {/* Google Map embed (Bell County) */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54923.10670721978!2d-97.455!3d31.054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86456b7db2d05ad1%3A0x60dbb4215f56c2f3!2sBell%20County%2C%20TX!5e0!3m2!1sen!2sus!4v1693456789012"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bell County Map"
              ></iframe>
            </div>
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
                    Your easiest holiday win.
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
