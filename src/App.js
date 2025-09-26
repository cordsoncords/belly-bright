// src/App.js
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FestiveWrapper from "./components/FestiveWrapper";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";
import ServiceAreas from "./pages/ServiceAreas";
import City from "./pages/City";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import GetAFastQuote from "./pages/GetAFastQuote";

// Helper wrapper to access router location
function AppContent() {
  const location = useLocation();
  const isQuotePage = location.pathname === "/get-a-fast-quote";

  // Optional: scroll to top on location change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!isQuotePage && <Navbar />}

      <FestiveWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential-lighting" element={<Residential />} />
          <Route path="/commercial-lighting" element={<Commercial />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/service-areas/:slug" element={<City />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/get-a-fast-quote" element={<GetAFastQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FestiveWrapper>

      {!isQuotePage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppContent />
    </BrowserRouter>
  );
}
