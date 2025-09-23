// /src/components/SEO.jsx
import { useEffect } from "react";

/**
 * Lightweight SEO manager without react-helmet-async.
 * - Sets <title>, meta description
 * - Sets canonical link
 * - Sets OG/Twitter tags
 * - Injects JSON-LD scripts (array or single object)
 *
 * Props:
 *  - title (string)
 *  - description (string)
 *  - canonical (string)  e.g. "/service-areas"
 *  - jsonLd (object | object[])  JSON-LD objects
 *  - ogImage (string) e.g. "/hero.jpg"
 *  - ogTitle (optional override)
 *  - ogDescription (optional override)
 *  - twitterCard (default "summary_large_image")
 */
export default function SEO({
  title,
  description,
  canonical,
  jsonLd,
  ogImage,
  ogTitle,
  ogDescription,
  twitterCard = "summary_large_image",
}) {
  useEffect(() => {
    // ---- Title ----
    if (title) {
      document.title = title;
    }

    // ---- Description ----
    setMeta("name", "description", description || "");

    // ---- Canonical ----
    if (canonical) {
      const abs = toAbs(canonical);
      setCanonical(abs);
    }

    // ---- Open Graph ----
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", ogTitle || title || "");
    setMeta("property", "og:description", ogDescription || description || "");
    if (ogImage) {
      setMeta("property", "og:image", toAbs(ogImage));
    }
    // (Optional) set og:url to current location or canonical if provided
    setMeta("property", "og:url", toAbs(canonical || window.location.pathname));

    // ---- Twitter ----
    setMeta("name", "twitter:card", twitterCard);
    setMeta("name", "twitter:title", ogTitle || title || "");
    setMeta("name", "twitter:description", ogDescription || description || "");
    if (ogImage) {
      setMeta("name", "twitter:image", toAbs(ogImage));
    }

    // ---- JSON-LD ----
    // Clear any previously-managed JSON-LD tags from this component
    clearManagedJsonLd();

    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      arr.forEach((obj) => injectJsonLd(obj));
    }

    // Cleanup JSON-LD on unmount
    return () => {
      clearManagedJsonLd();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    title,
    description,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    twitterCard,
    // Stringify jsonLd so changes trigger updates
    JSON.stringify(jsonLd),
  ]);

  return null;
}

/* ---------------- Helpers ---------------- */

function setMeta(kind, key, value) {
  if (value == null) return;

  const head = document.head;
  let el = head.querySelector(`meta[${kind}="${cssEscape(key)}"]`);

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(kind, key);
    // mark as managed by this component
    el.setAttribute("data-seo-managed", "1");
    head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setCanonical(href) {
  const head = document.head;
  let link = head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    link.setAttribute("data-seo-managed", "1");
    head.appendChild(link);
  }
  link.setAttribute("href", href);
}

function injectJsonLd(obj) {
  const head = document.head;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo-managed", "1");
  script.text = JSON.stringify(obj);
  head.appendChild(script);
}

function clearManagedJsonLd() {
  const head = document.head;
  const nodes = head.querySelectorAll('script[type="application/ld+json"][data-seo-managed="1"]');
  nodes.forEach((n) => n.remove());
}

/**
 * Make a path absolute to the current origin if it starts with "/".
 * If it already looks absolute (http/https), return as-is.
 */
function toAbs(url) {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/")) {
    return window.location.origin + url;
  }
  return url;
}

// Minimal escape for meta selector keys
function cssEscape(v) {
  return String(v).replace(/"/g, '\\"');
}
