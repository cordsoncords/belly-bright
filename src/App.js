// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
import FAQ from "./pages/FAQ"
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Facebook Pixel */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1078650917748817');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`
            <img height="1" width="1" style="display:none"
              src="https://www.facebook.com/tr?id=1078650917748817&ev=PageView&noscript=1"
            />
          `}
        </noscript>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HSYFZK4KYE"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HSYFZK4KYE');
          `}
        </script>

        {/* Microsoft Clarity */}
        <script>
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tfdgoj53kj");
          `}
        </script>
      </Helmet>

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
    </HelmetProvider>
  );
}
