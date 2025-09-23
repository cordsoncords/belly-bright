// /src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scroll to top on route change (fixes issue where
 * footer links go to bottom of new page).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if desired
    });
  }, [pathname]);

  return null;
}
