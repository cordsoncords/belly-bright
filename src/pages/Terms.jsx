// /src/pages/Terms.jsx
import SEO from "../components/SEO";
import Container from "../components/Container";

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions — Belly Bright Christmas Lights"
        description="Read the terms and conditions for using Belly Bright Christmas Lights services."
        canonical="/terms"
      />
      <Container className="py-16">
        <h1 className="text-4xl font-extrabold mb-6">Terms & Conditions</h1>
        <p className="mb-4">
          By requesting a quote or booking service with Belly Bright Christmas Lights,
          you agree to these terms and conditions.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li>Quotes are estimates based on the information provided and site assessment.</li>
          <li>Installation dates are subject to weather and scheduling availability.</li>
          <li>Customer is responsible for ensuring accessible and safe installation areas.</li>
          <li>Takedown will occur after the holiday season as scheduled with our team.</li>
        </ul>
        <p className="mb-4">
          For questions, please email{" "}
          <span className="font-bold">bellybrightchristmaslights@gmail.com</span>.
        </p>
      </Container>
    </>
  );
}
