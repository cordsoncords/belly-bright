// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

export default function App() {
  useEffect(() => {
    // Facebook Pixel
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = "https://connect.facebook.net/en_US/fbevents.js";
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script");

    window.fbq("init", "1078650917748817");
    window.fbq("track", "PageView");

    // Google Analytics
    const gtagScript = document.createElement("script");
    gtagScript.setAttribute("async", "");
    gtagScript.src =
      "https://www.googletagmanager.com/gtag/js?id=G-HSYFZK4KYE";
    document.head.appendChild(gtagScript);

    const gtagInit = document.createElement("script");
    gtagInit.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HSYFZK4KYE');
    `;
    document.head.appendChild(gtagInit);

    // Microsoft Clarity
    const clarityScript = document.createElement("script");
    clarityScript.type = "text/javascript";
    clarityScript.innerHTML = `(function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "tfdgoj53kj");`;
    document.head.appendChild(clarityScript);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FestiveWrapper>

      <Footer />
    </BrowserRouter>
  );
}
