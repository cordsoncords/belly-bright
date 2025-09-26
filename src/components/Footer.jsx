import { Link } from "react-router-dom";
import Container from "./Container";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-holidayGreen text-white mt-24">
      <Container className="py-24 text-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-16">
          {/* Logo + Tagline */}
          <div>
            <p className="mt-6 text-white/90 leading-relaxed text-base">
              Professional Christmas light installation in Temple, Belton, Killeen, Harker Heights, and all of Bell County, TX. Fully insured, custom designs, premium LED lights, installation, takedown, and storage.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-extrabold text-2xl mb-4">Helpful Links</h3>
            <ul className="space-y-3 text-white/90 text-lg">
              <li><Link to="/residential-lighting" className="hover:underline">Residential Lighting</Link></li>
              <li><Link to="/commercial-lighting" className="hover:underline">Commercial & HOA</Link></li>
              <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-extrabold text-2xl mb-4">Service Areas</h3>
            <ul className="space-y-3 text-white/90 text-lg">
              <li><Link to="/service-areas/temple" className="hover:underline">Temple</Link></li>
              <li><Link to="/service-areas/belton" className="hover:underline">Belton</Link></li>
              <li><Link to="/service-areas/killeen" className="hover:underline">Killeen</Link></li>
              <li><Link to="/service-areas/harker-heights" className="hover:underline">Harker Heights</Link></li>
              <li><Link to="/service-areas" className="hover:underline">See All</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-extrabold text-2xl mb-4">Contact</h3>
            <ul className="space-y-3 text-white/90 text-lg">
              <li>715 E Downs Ave</li>
              <li>Temple, TX 76501</li>
              <li>
                <a href="tel:2542523559" className="hover:underline">
                  (254) 252-3559
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-extrabold text-2xl mb-4">Social</h3>
            <div className="flex gap-6 mt-2">
              <a
                href="https://facebook.com/bellybrightchristmaslights"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={32} />
              </a>
              <a
                href="https://instagram.com/bellybrightchristmaslights"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://youtube.com/@bellybrightchristmaslights"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white/80 transition"
                aria-label="YouTube"
              >
                <FaYoutube size={32} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white/80 text-base">
          <p>© {new Date().getFullYear()} Belly Bright Christmas Lights</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:underline">Privacy</Link>
            <span className="text-white/40">•</span>
            <Link to="/terms" className="hover:underline">Terms</Link>
            <span className="text-white/40">•</span>
            <a
              href="https://www.mydigitaljuice.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Web Design by Digital Juice
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
