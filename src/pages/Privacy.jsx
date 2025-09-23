// /src/pages/Privacy.jsx
import SEO from "../components/SEO";
import Container from "../components/Container";

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Belly Bright Christmas Lights"
        description="Read the privacy policy for Belly Bright Christmas Lights. We respect your privacy and will never share your information."
        canonical="/privacy"
      />
      <Container className="py-16">
        <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At Belly Bright Christmas Lights, your privacy is important to us. We collect
          only the information needed to provide fast quotes and professional service.
        </p>
        <p className="mb-4">
          We will never sell or share your personal data with outside parties. Your
          information is used solely for communication regarding our services.
        </p>
        <p className="mb-4">
          If you have questions about your data, contact us at{" "}
          <span className="font-bold">bellybrightchristmaslights@gmail.com</span>.
        </p>
      </Container>
    </>
  );
}
