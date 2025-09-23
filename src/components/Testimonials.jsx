// /src/components/Testimonials.jsx
import Container from "./Container";
import SectionTitle from "./SectionTitle";

/**
 * Why: Centralizes testimonials styling and layout; pages pass unique reviews.
 */
export default function Testimonials({ eyebrow = "Happy Customers", title = "What Your Neighbors Are Saying", reviews = [] }) {
  return (
    <section className="section">
      <Container wide>
        <SectionTitle eyebrow={eyebrow} title={title} className="text-center" />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <figure key={idx} className="card h-full flex flex-col">
              <div className="flex items-center gap-1" aria-label={`${r.rating || 5} out of 5 stars`}>
                {Array.from({ length: r.rating || 5 }).map((_, i) => (
                  <span key={i} className="text-yellow-500" aria-hidden="true">★</span>
                ))}
              </div>
              <blockquote className="mt-3 italic">“{r.quote}”</blockquote>
              <figcaption className="mt-4 font-bold">{r.name}{r.location ? ` — ${r.location}` : ""}</figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
