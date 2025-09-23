// /src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Container from "../components/Container";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found — Belly Bright" description="The page you’re looking for doesn’t exist." />
      <Container className="py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">Oops! That page is missing.</h1>
        <p className="mt-4 text-black/70">Try heading back to the homepage or explore our services.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link to="/" className="btn-cta-outline">Back Home</Link>
          <Link to="/services" className="btn-cta-lg">See Services</Link>
        </div>
      </Container>
    </>
  );
}
