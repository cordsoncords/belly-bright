// /src/components/QuoteForm.jsx
import { useState, useRef, useEffect } from "react";

export default function QuoteForm({
  endpoint = "https://formspree.io/f/xvgqeqdr",
  showHeading = false,
}) {
  const [submitting, setSubmitting] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const closeButtonRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "New Quote Request — Belly Bright");
    data.append("page", window.location.href);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setModalOpen(true);
        triggerConfetti(); // brand confetti
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (modalOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [modalOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setModalOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {showHeading && (
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
          Request your fast quote
        </h2>
      )}

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 bg-white rounded-2xl p-6 shadow"
      >
        <input className="border rounded-xl p-3" name="name" placeholder="Full Name" autoComplete="name" required />
        <input className="border rounded-xl p-3" name="email" type="email" placeholder="Email" autoComplete="email" required />
        <input className="border rounded-xl p-3" name="phone" placeholder="Phone" autoComplete="tel" />
        <input className="border rounded-xl p-3 md:col-span-2" name="address" placeholder="Address / City" autoComplete="address-line1" />
        <textarea className="border rounded-xl p-3 md:col-span-2" name="message" rows="5" placeholder="Tell us about your project…" />
        <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
        <button className="btn-cta-lg md:col-span-2 disabled:opacity-60" type="submit" disabled={submitting}>
          {submitting ? "Sending…" : "Send"}
        </button>
        {error && (
          <p className="md:col-span-2 mt-2 text-red-600 font-semibold">
            Sorry—something went wrong. Please email or call us.
          </p>
        )}
        <p className="md:col-span-2 mt-4 text-sm text-gray-600 text-center">
          🎅 We want to stay on the nice list, so we&apos;ll never share your info!
        </p>
      </form>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold text-holidayGreen">Ho-Ho-Hold tight! 🎅</h3>
              <p className="mt-2 text-gray-700">
                We&apos;ll get back to you before you can name all of Santa&apos;s reindeer!
              </p>
              <button
                ref={closeButtonRef}
                className="btn-cta-lg mt-6"
                onClick={() => setModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Confetti (brand colors) ---------- */
function triggerConfetti() {
  if (!window.confetti) return;

  const colors = ["#E3170C", "#124712", "#F0950A"]; // holiday red, green, gold

  // Two quick bursts for a fuller effect
  window.confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.65 },
    colors,
    scalar: 1.0,
  });
  setTimeout(() => {
    window.confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors,
      scalar: 0.9,
    });
  }, 200);
}
