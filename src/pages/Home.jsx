import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { Link } from "react-router-dom";
import HowItWorks from "../components/HowItWorks";
import FadeInSection from "../components/FadeInSection";
import TestimonialSlider from "../components/TestimonialSlider";

const breadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://bellybrightchristmaslights.com/",
    },
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Belly Bright Christmas Lights",
  image: "https://bellybrightchristmaslights.com/hero.jpg",
  url: "https://bellybrightchristmaslights.com/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "715 E Downs Ave",
    addressLocality: "Temple",
    addressRegion: "TX",
    postalCode: "76501",
    addressCountry: "US",
  },
  openingHours: ["Mo-Fr 08:00-19:00"],
  priceRange: "$$",
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Bell County, Texas",
  },
  description:
    "Professional Christmas light installation in Bell County—design, install, mid-season maintenance, takedown, and optional storage.",
};

export default function Home() {
  return (
    <>
      <SEO
        title="Belly Bright Christmas Lights — Bell County, TX"
        description="Holiday Cheer, Professionally Installed. Temple, Belton, Killeen & Harker Heights’ choice for Christmas light installation."
        canonical="/"
        jsonLd={[breadcrumbs, localBusinessJsonLd]}
        ogImage="/images/homehero.webp"
      />

      {/* HERO */}
      <Hero
        imageSrc="/images/homehero.webp"
        title={
          <>
            Holiday&nbsp;Cheer.
            <br />
            Professionally
            <br />
            Installed
          </>
        }
        subtitle="Serving Temple, Belton, Killeen, and Harker Heights with full-service Christmas light installation, design, install, takedown, and storage."
        primaryCta={{ to: "/contact", label: "Get A Fast Quote" }}
        secondaryCta={{ to: "/services", label: "See Services" }}
        showButtons
      />

      {/* ABOUT (UPDATED STYLE) */}
      <FadeInSection>
        <section className="section pt-32 pb-32 lg:pt-40 lg:pb-40">
          <Container className="max-w-6xl">
            <div className="grid gap-4 lg:gap-6 lg:grid-cols-2 items-center">
              <div className="space-y-6 pl-8 md:pr-8 lg:pr-12">
                <h2 className="text-4xl font-holiday text-holidayGreen drop-shadow-sm">
                  You Can’t Have Your Cake And Eat It Too, But You Can Have The {" "}
                  <span className="text-red-600">Best Christmas Lights Ever</span>!
                </h2>
                <p className="text-lg text-black/80 leading-relaxed">
                  At Belly Bright Christmas Lights, we believe the holidays are
                  meant for making memories with your family and loved ones—not
                  dealing with cheap tangled wires, burnt-out bulbs, or risking
                  your neck on a ladder! 
                </p>
                <p className="text-lg text-black/80 leading-relaxed">
                  We started this business right here in
                  Bell County with one goal: give families and businesses a little
                  bit of extra joy during the holiday season. Whether it’s a warm
                  welcome home or a festive storefront that makes your customers
                  smile, we’re here to make sure this year, your holiday season
                  shines a little bit brighter!
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/homeabout.webp"
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

      {/* WHY US (UPDATED CONTENT + DEPTH) */}
      <FadeInSection>
        <section
  className="section relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/images/roofline.webp')" }}
>
  {/* Optional overlay for readability */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0" />

  <Container className="relative z-10">
    <SectionTitle
      eyebrow="Why Us"
      title="Turnkey Christmas Light Displays"
      className="text-center"
    />

    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "No Holiday Headaches",
          icon: "🎄",
          desc: "We are completely turnkey! We take care of everything from quote to takedown.",
        },
        {
          title: "Installed by Pros",
          icon: "🛠️",
          desc: "Licensed, insured & trained professionals handle your display install with the utmost care.",
        },
        {
          title: "Highest Quality Lighting",
          icon: "💡",
          desc: "We use commercial-grade lights that shine brighter and last longer.",
        },
        {
          title: "Custom Design",
          icon: "🎨",
          desc: "Each lighting display is custom-tailored to your home or business and your level of holiday spirit.",
        },
        {
          title: "Season-Long Maintenance",
          icon: "🔧",
          desc: "If something goes out… we go out! Maintenance guaranteed within 48 hours.",
        },
        {
          title: "Removed & Stored",
          icon: "📦",
          desc: "After the holidays, we take down & store your lights until next year.",
        },
      ].map((item) => (
        <div key={item.title} className="flip-card h-72">
          <div className="flip-card-inner w-full h-full relative">
            {/* Front */}
            <div className="flip-card-front absolute inset-0 bg-white border border-holidayGreen/20 rounded-3xl shadow-xl p-6 flex flex-col justify-center items-center text-center">
              <div className="text-5xl mb-4 animate-bounce">{item.icon}</div>
              <h3 className="font-bold text-xl text-holidayGreen">{item.title}</h3>
            </div>

            {/* Back */}
            <div className="flip-card-back absolute inset-0 bg-holidayGreen text-white rounded-3xl shadow-xl p-6 flex flex-col justify-center text-center">
              <p className="text-white/90 text-sm">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Container>
</section>

      </FadeInSection>

      {/* OUR SERVICES */}
<FadeInSection>
        <section className="section">
          <Container>
            <SectionTitle
              eyebrow="Our Services"
              title="Residential & Commercial"
              className="text-center"
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Residential Christmas Lighting",
                  to: "/residential-lighting",
                  img: "/service-residential.jpg",
                  blurb: "Warm whites or colorful displays—rooflines, peaks, trees, walkways, wreaths, garlands, and more.",
                },
                {
                  title: "Commercial & HOA Lighting",
                  to: "/commercial-lighting",
                  img: "/service-commercial.jpg",
                  blurb: "Retail storefronts, HOA entrances, clubhouses and campuses with safe, scalable installs.",
                },
              ].map((s) => (
                <Link
                  key={s.title}
                  to={s.to}
                  className="group relative block rounded-3xl overflow-hidden shadow-xl bg-black/10 h-[520px] hover:shadow-2xl transition"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover opacity-85 transition-transform duration-300 group-hover:scale-110 group-hover:opacity-70"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />
                  <div className="absolute inset-0 flex justify-center items-center text-center transition">
                    <h2 className="text-white text-3xl font-extrabold drop-shadow group-hover:opacity-0 transition duration-300">
                      {s.title}
                    </h2>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                    <p className="text-white drop-shadow-sm max-w-prose">
                      {s.blurb}
                    </p>
                    <span className="mt-4 inline-block bg-white text-holidayGreen px-5 py-3 rounded-xl font-bold w-max">
                      Learn More
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </FadeInSection>

      {/* HOW IT WORKS */}
      <FadeInSection>
      <HowItWorks />
      </FadeInSection>

      {/* WHERE WE WORK – cities + CTA (left) and Google Map (right) */}
<FadeInSection>
<section className="section-alt">
  <Container>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <SectionTitle
          eyebrow="Cities We Serve"
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


      {/* TESTIMONIALS */}
<FadeInSection>
  <section className="section-alt">
    <Container className="max-w-6xl text-center">
      <SectionTitle
        eyebrow="Reviews"
        title="What Neighbors Say"
        className="text-center"
      />
        <TestimonialSlider />
    </Container>
  </section>
</FadeInSection>


      {/* FAQ */}
<FadeInSection>
<section className="section">
  <Container className="max-w-5xl">
    <SectionTitle
      eyebrow="FAQ"
      title="Common Questions"
      className="text-center"
    />
    <div className="mt-6 space-y-3">
      {[
        {
          q: "Do you provide the lights and hardware?",
          a: "Yes. We supply commercial-grade LEDs, clips, cabling, timers — and we install it all.",
        },
        {
          q: "Is takedown included?",
          a: "Absolutely. We carefully remove and organize everything after the season.",
        },
        {
          q: "Do you offer storage for next year?",
          a: "Yes, optional off-season storage keeps gear labeled and ready.",
        },
      ].map((item) => (
        <details key={item.q} className="rounded-xl bg-white shadow p-4">
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
              Feeling Festive?
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
