import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [solidBg, setSolidBg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimerRef = useRef(null);
  const dropdownRef = useRef(null);

  // Detect scroll position for sticky solid background
  useEffect(() => {
    const getThreshold = () => {
      const heroEl = document.getElementById("site-hero") || document.querySelector("[data-hero]");
      return heroEl ? heroEl.getBoundingClientRect().height * 0.05 : 80;
    };

    const onScroll = () => {
      const threshold = getThreshold();
      setSolidBg(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Handle outside clicks on services dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };

    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-[1000] text-white">
      {/* Scroll background */}
      <div
        className={[
          "absolute inset-0 z-[-1] transition-opacity duration-500 ease-out",
          solidBg
            ? "opacity-100 bg-gradient-to-r from-holidayGreen/95 to-holidayGreen/85 backdrop-blur-sm shadow-lg"
            : "opacity-0",
        ].join(" ")}
      />

      {/* Wiggle CTA animation */}
      <style>{`
        @keyframes subtle-wiggle-7s {
          0%, 92%, 100% { transform: translate3d(0,0,0) rotate(0); }
          94% { transform: translate3d(-1px, 0, 0) rotate(-1deg); }
          96% { transform: translate3d(2px, 0, 0) rotate(1deg); }
          98% { transform: translate3d(-1px, 0, 0) rotate(-1deg); }
        }
        .wiggle-every-7s { animation: subtle-wiggle-7s 7s infinite; }
        @media (prefers-reduced-motion: reduce) { .wiggle-every-7s { animation: none !important; } }
      `}</style>

      <div className="w-full px-4 md:px-8 py-2 md:py-3">
        <div className="flex items-center justify-between">
          {/* LEFT — Logo */}
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/images/Logo.png"
              alt="Belly Bright Christmas Lights"
              className="h-[6.5rem] sm:h-[8rem] md:h-[10rem] lg:h-[11.5rem] xl:h-[12.5rem] 2xl:h-[13rem] w-auto"
            />
          </Link>

          {/* CENTER — Desktop Nav */}
          <nav className={`hidden xl:flex items-center space-x-10 font-extrabold ${!solidBg ? "text-shadow-soft" : ""}`}>
            <NavItem to="/about">About</NavItem>

            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => {
                clearTimeout(closeTimerRef.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                closeTimerRef.current = setTimeout(() => setServicesOpen(false), 150);
              }}
            >
              <button
                className="flex items-center gap-1 transition hover:text-holidayGold text-[1.25rem]"
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services <span className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 mt-2 bg-white text-holidayGreen rounded-xl shadow-2xl overflow-hidden">
                  <NavLink
                    to="/residential-lighting"
                    onClick={() => setServicesOpen(false)}
                    className="block px-6 py-4 text-lg hover:bg-holidayGold/10"
                  >
                    Residential
                  </NavLink>
                  <NavLink
                    to="/commercial-lighting"
                    onClick={() => setServicesOpen(false)}
                    className="block px-6 py-4 text-lg hover:bg-holidayGold/10"
                  >
                    Commercial & HOA
                  </NavLink>
                </div>
              )}
            </div>

            <NavItem to="/service-areas">Service Areas</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>

          {/* RIGHT — CTA */}
          <div className="hidden xl:block">
            <NavLink
              to="/contact"
              className={`wiggle-every-7s inline-block px-6 py-3 text-lg rounded-2xl font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg hover:shadow-xl transition ${!solidBg ? "text-shadow-soft" : ""}`}
            >
              Get A Fast Quote
            </NavLink>
          </div>

          {/* MOBILE hamburger */}
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>

        {/* MOBILE Nav Panel */}
        {mobileOpen && (
          <div className="xl:hidden bg-holidayGreen/95 mt-2 rounded-xl shadow-lg p-4 space-y-2">
            <MobileLink to="/about" onClick={() => setMobileOpen(false)}>About</MobileLink>

            <div>
              <p className="text-white/70 text-sm uppercase mt-2">Services</p>
              <MobileLink to="/residential-lighting" onClick={() => setMobileOpen(false)} className="pl-4">Residential</MobileLink>
              <MobileLink to="/commercial-lighting" onClick={() => setMobileOpen(false)} className="pl-4">Commercial & HOA</MobileLink>
            </div>

            <MobileLink to="/gallery" onClick={() => setMobileOpen(false)}>Gallery</MobileLink>
            <MobileLink to="/service-areas" onClick={() => setMobileOpen(false)}>Service Areas</MobileLink>
            <MobileLink to="/contact" onClick={() => setMobileOpen(false)}>Contact</MobileLink>

            <NavLink
              to="/contact"
              className="mt-3 inline-block w-full text-center btn-cta-lg"
              onClick={() => setMobileOpen(false)}
            >
              Get A Fast Quote
            </NavLink>

            <NavLink
              to="/contact"
              className="mt-3 inline-block w-full text-center btn-cta-outline"
              onClick={() => setMobileOpen(false)}
            >
             Call Now
            </NavLink>

          </div>
        )}
      </div>
    </header>
  );
}

// Desktop nav links
function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-[1.25rem] transition-colors hover:text-holidayGold ${
          isActive ? "text-holidayGold" : ""
        }`
      }
    >
      {children}
    </NavLink>
  );
}

// Mobile nav links
function MobileLink({ to, children, className = "", onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `block px-2 py-2 rounded hover:bg-white/10 ${isActive ? "bg-white/10" : ""} ${className}`
      }
    >
      {children}
    </NavLink>
  );
}
