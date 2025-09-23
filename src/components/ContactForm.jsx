import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault(); // MVP: local success state
    setSent(true);
  }

  if (sent) return <p className="p-4 bg-white rounded-xl">Thanks! We’ll reach out shortly.</p>;

  return (
    <form onSubmit={onSubmit} className="grid gap-4 bg-white rounded-xl p-6 shadow">
      <input required name="name" placeholder="Full name" className="border p-3 rounded" />
      <input required type="tel" name="phone" placeholder="Phone" className="border p-3 rounded" />
      <input required type="email" name="email" placeholder="Email" className="border p-3 rounded" />
      <input name="address" placeholder="Address (optional)" className="border p-3 rounded" />
      <textarea name="message" placeholder="Tell us about your project…" className="border p-3 rounded min-h-[100px]" />
      <button className="bg-holidayGreen text-white font-bold rounded-xl py-3 hover:bg-green-800">Request Free Quote</button>
    </form>
  );
}
