import { useState } from "react";

export default function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 py-4 font-semibold flex justify-between items-center"
      >
        <span>{q}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="px-5 pb-5 pt-0 text-sm opacity-90">{a}</div>}
    </div>
  );
}
