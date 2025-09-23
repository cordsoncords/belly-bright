// /src/pages/Contact.jsx
import Container from "../components/Container";
import SEO from "../components/SEO";
import { useMemo } from "react";
import FadeInSection from "../components/FadeInSection";
import Hero from "../components/Hero";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Christmas Light Installation — Free Quote",
  provider: { "@type": "LocalBusiness", name: "Belly Bright Christmas Lights" },
  areaServed: "Bell County, Texas",
};

// Breadcrumbs: Home > Contact
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://bellybrightchristmaslights.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://bellybrightchristmaslights.com/contact" },
  ],
};

export default function Contact() {
  // Lightweight check for ?thanks (keeps your confetti-in-index.js flow)
  const thanks = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).has("thanks");
  }, []);

  return (
    <>
      <SEO
        title="Free Quote — Belly Bright Christmas Lights"
        description="Get a fast quote for holiday lighting in Bell County, TX."
        canonical="/contact"
        jsonLd={[serviceJsonLd, breadcrumbJsonLd]}
        ogImage="/images/contacthero.webp"
      />

      <Hero
        title="It's Time For The Best Christmas Ever"
        subtitle="Let’s light up your season the Belly Bright way!"
        showButtons={false}
        imageSrc="/images/contacthero.webp"
      />
      <FadeInSection>
      <Container className="py-16 text-center max-w-4xl">
  <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-holidayGreen">
    Got Questions Before You Book?
  </h2>

  <p className="text-lg md:text-xl text-black/80 mb-10 px-4">
    Want to know how the process works, what lights we use, or whether we service your neighborhood?
    Fill out the form below and we’ll either call or email you back the same day!
  </p>

        {/* Thank-you banner */}
        {thanks && (
          <div className="mb-6 rounded-2xl bg-white shadow p-5 border-l-4 border-holidayGreen">
            <p className="font-extrabold text-holidayGreen">
              Ho-Ho-Hold tight! We'll get back to you before you can name all of Santa's reindeer!
            </p>
            <p className="text-black/80 mt-1">
              We want to stay on the nice list, so we'll never share your info!
            </p>
          </div>
        )}

        {/* Formspree form */}
        <form
          className="mt-10 grid md:grid-cols-2 gap-4 bg-white rounded-2xl p-6 shadow"
          action="https://formspree.io/f/xvgqeqdr"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Quote Request — Belly Bright" />
          <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
          <input type="hidden" name="_redirect" value="/contact?thanks=1" />

          <input className="border rounded-xl p-3" name="name" placeholder="Full Name" required />
          <input className="border rounded-xl p-3" name="email" placeholder="Email" type="email" required />
          <input className="border rounded-xl p-3" name="phone" placeholder="Phone (optional)" />
          <input className="border rounded-xl p-3 md:col-span-2" name="address" placeholder="Address / City" />
          <textarea className="border rounded-xl p-3 md:col-span-2" rows="5" name="message" placeholder="Tell us about your project…" />

          <p className="md:col-span-2 text-sm text-black/70">
            We want to stay on the nice list, so we'll never share your info!
          </p>

          <button className="btn-cta-lg md:col-span-2" type="submit">Send</button>
        </form>
      </Container>
      </FadeInSection>
    </>
  );
}
